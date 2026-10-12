"""Flux-to-voltage transfer coefficient and parameter sweeps."""

from __future__ import annotations

from dataclasses import dataclass

import numpy as np

from .cpr import CPR
from .dynamics import simulate_voltage


@dataclass
class TransferResult:
    """V(Phi) characteristics on a bias x flux grid and their best working point."""

    i_bias: np.ndarray
    phi_a: np.ndarray
    v: np.ndarray            # shape (n_i, n_phi), units I_c R
    v_phi: np.ndarray        # dv/dphi_a, units I_c R / Phi_0
    v_phi_max: float         # max |dv/dphi_a| over the grid
    i_opt: float             # bias current of the optimum
    phi_opt: float           # flux of the optimum
    swing: np.ndarray        # peak-to-peak modulation depth vs bias

    @property
    def swing_max(self) -> float:
        return float(self.swing.max())


def transfer_coefficient(i_bias, phi_a, v, n_harmonics: int | None = None) -> TransferResult:
    """Compute dv/dphi_a and locate its maximum.

    By default dv/dphi_a is taken by central differences.  For noisy
    (finite-temperature) data pass ``n_harmonics``: v(phi_a) is then
    least-squares fitted by the even, Phi_0-periodic series
    ``sum_{n<=N} c_n cos(2 pi n phi_a)`` and differentiated analytically, which
    removes the upward bias that the maximum of a noisy derivative would have.
    """
    i_bias = np.asarray(i_bias, dtype=float)
    phi_a = np.asarray(phi_a, dtype=float)
    v = np.asarray(v, dtype=float)
    if n_harmonics:
        n = np.arange(n_harmonics + 1)
        basis = np.cos(2 * np.pi * n[None, :] * phi_a[:, None])
        coef, *_ = np.linalg.lstsq(basis, v.T, rcond=None)
        v = (basis @ coef).T
        v_phi = (-2 * np.pi * n[None, :] * np.sin(2 * np.pi * n[None, :] * phi_a[:, None]) @ coef).T
    else:
        v_phi = np.gradient(v, phi_a, axis=1)
    k = np.unravel_index(np.argmax(np.abs(v_phi)), v_phi.shape)
    return TransferResult(
        i_bias=i_bias,
        phi_a=phi_a,
        v=v,
        v_phi=v_phi,
        v_phi_max=float(abs(v_phi[k])),
        i_opt=float(i_bias[k[0]]),
        phi_opt=float(phi_a[k[1]]),
        swing=v.max(axis=1) - v.min(axis=1),
    )


def squid_transfer(
    cpr: CPR,
    beta_L: float,
    gamma: float = 0.0,
    i_bias=None,
    phi_a=None,
    n_harmonics: int | None = None,
    **sim_kwargs,
) -> TransferResult:
    """Simulate V(i, Phi) over half a flux period and return the transfer data.

    V(Phi) is even and Phi_0-periodic for any odd CPR, so the interval
    0 <= phi_a <= 1/2 contains all information.
    """
    if i_bias is None:
        i_bias = np.linspace(0.8, 3.0, 23)
    if phi_a is None:
        phi_a = np.linspace(0.0, 0.5, 41)
    v = simulate_voltage(cpr, beta_L, i_bias, phi_a, gamma=gamma, **sim_kwargs)
    if n_harmonics is None and gamma > 0:
        n_harmonics = 8
    return transfer_coefficient(i_bias, phi_a, v, n_harmonics=n_harmonics)
