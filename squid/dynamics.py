"""Overdamped RCSJ dynamics of a symmetric dc SQUID with arbitrary CPR.

Dimensionless model (Tesche & Clarke, J. Low Temp. Phys. 29, 301 (1977)),
generalized to a non-sinusoidal current-phase relation f(phi):

    dphi_1/dtau = i/2 - j - f(phi_1) + i_n1(tau)
    dphi_2/dtau = i/2 + j - f(phi_2) + i_n2(tau)
    phi_1 - phi_2 = 2 pi phi_a + pi beta_L j

Units: currents in I_c (true critical current of one junction), time
tau = 2 pi I_c R t / Phi_0, voltages in I_c R, flux phi_a = Phi_a / Phi_0,
screening parameter beta_L = 2 L I_c / Phi_0.  R is the shunt resistance of
one junction; the junctions are overdamped (Stewart-McCumber beta_c -> 0).
Thermal (Nyquist) noise of the shunts enters through independent white
currents with <i_n(tau) i_n(tau')> = 2 Gamma delta(tau - tau'),
Gamma = 2 pi k_B T / (I_c Phi_0).

The time-averaged SQUID voltage is v = <(dphi_1/dtau + dphi_2/dtau)/2>.
"""

from __future__ import annotations

import numpy as np

from .cpr import CPR

TWO_PI = 2.0 * np.pi


def simulate_voltage(
    cpr: CPR,
    beta_L: float,
    i_bias,
    phi_a,
    gamma: float = 0.0,
    dt: float = 0.05,
    t_transient: float = 200.0,
    t_avg: float = 2000.0,
    seed: int | None = 0,
    n_realizations: int = 1,
) -> np.ndarray:
    """Time-averaged voltage v(i, phi_a) on the grid ``i_bias x phi_a``.

    All grid points are integrated simultaneously (vectorized stochastic Heun
    scheme).  The same noise realization is applied to every grid point
    ("common random numbers"), which leaves each v unbiased but strongly
    suppresses the statistical scatter of differences such as dv/dphi_a.
    With ``n_realizations > 1`` (only meaningful for ``gamma > 0``) that many
    independent noise realizations are integrated side by side and averaged.

    Returns an array of shape ``(len(i_bias), len(phi_a))``.
    """
    i = np.atleast_1d(np.asarray(i_bias, dtype=float))[None, :, None]
    fa = np.atleast_1d(np.asarray(phi_a, dtype=float))[None, None, :]
    n_rep = n_realizations if gamma > 0 else 1
    shape = (n_rep, i.shape[1], fa.shape[2])

    if beta_L < 0:
        raise ValueError("beta_L must be non-negative")
    if beta_L > 0:
        # Explicit scheme: keep dt well below the screening relaxation time.
        dt = min(dt, 0.25 * np.pi * beta_L)
    n_tr = int(round(t_transient / dt))
    n_av = int(round(t_avg / dt))
    rng = np.random.default_rng(seed)
    sigma = np.sqrt(2.0 * gamma * dt) if gamma > 0 else 0.0

    if beta_L == 0:
        # phi_1 = phi + pi phi_a, phi_2 = phi - pi phi_a; one degree of freedom.
        shift = np.pi * fa

        def rhs(p):
            return 0.5 * i - 0.5 * (cpr(p + shift) + cpr(p - shift))

        p = np.zeros(shape)
        p_start = None
        for step in range(n_tr + n_av):
            if step == n_tr:
                p_start = p.copy()
            # noise of the average phase: mean of the two junction noises
            dw = sigma * rng.standard_normal((n_rep, 2, 1)).mean(axis=1, keepdims=True) if sigma else 0.0
            k1 = rhs(p)
            k2 = rhs(p + k1 * dt + dw)
            p = p + 0.5 * (k1 + k2) * dt + dw
        return ((p - p_start) / (n_av * dt)).mean(axis=0)

    inv = 1.0 / (np.pi * beta_L)
    flux = TWO_PI * fa

    def rhs(p1, p2):
        j = (p1 - p2 - flux) * inv
        return 0.5 * i - j - cpr(p1), 0.5 * i + j - cpr(p2)

    p1 = np.broadcast_to(0.5 * flux, shape).copy()
    p2 = np.broadcast_to(-0.5 * flux, shape).copy()
    s_start = None
    for step in range(n_tr + n_av):
        if step == n_tr:
            s_start = p1 + p2
        if sigma:
            dw = sigma * rng.standard_normal((2, n_rep, 1, 1))
            dw1, dw2 = dw[0], dw[1]
        else:
            dw1 = dw2 = 0.0
        a1, a2 = rhs(p1, p2)
        b1, b2 = rhs(p1 + a1 * dt + dw1, p2 + a2 * dt + dw2)
        p1 = p1 + 0.5 * (a1 + b1) * dt + dw1
        p2 = p2 + 0.5 * (a2 + b2) * dt + dw2
    return ((p1 + p2 - s_start) / (2.0 * n_av * dt)).mean(axis=0)


def voltage_noiseless_small_inductance(cpr: CPR, i_bias, phi_a, n_grid: int = 1 << 14) -> np.ndarray:
    """Exact v(i, phi_a) for beta_L -> 0 and Gamma = 0.

    The SQUID then behaves as a single overdamped junction with effective CPR
    F(phi) = [f(phi + pi phi_a) + f(phi - pi phi_a)] / 2 driven by i/2, whose
    mean voltage is ``v = 2 pi / int_0^{2 pi} dphi / (i/2 - F(phi))`` above
    the critical current ``i_c(phi_a) = 2 max F`` and zero below.
    """
    i = np.atleast_1d(np.asarray(i_bias, dtype=float))[:, None, None]
    fa = np.atleast_1d(np.asarray(phi_a, dtype=float))[None, :, None]
    phi = np.linspace(0.0, TWO_PI, n_grid, endpoint=False)[None, None, :]
    F = 0.5 * (cpr(phi + np.pi * fa) + cpr(phi - np.pi * fa))
    denom = 0.5 * i - F
    running = np.all(denom > 0, axis=-1)
    with np.errstate(divide="ignore", invalid="ignore"):
        period = np.where(running, (1.0 / np.where(denom > 0, denom, np.inf)).mean(axis=-1) * TWO_PI, np.inf)
    return np.where(running, TWO_PI / period, 0.0)


def critical_current_small_inductance(cpr: CPR, phi_a, n_grid: int = 1 << 14) -> np.ndarray:
    """SQUID critical current i_c(phi_a) = max_phi [f(phi+pi phi_a) + f(phi-pi phi_a)] (beta_L -> 0)."""
    fa = np.atleast_1d(np.asarray(phi_a, dtype=float))[:, None]
    phi = np.linspace(0.0, TWO_PI, n_grid, endpoint=False)[None, :]
    return (cpr(phi + np.pi * fa) + cpr(phi - np.pi * fa)).max(axis=-1)
