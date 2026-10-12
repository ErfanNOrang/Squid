"""Current-phase relations (CPRs) for Josephson junctions.

A CPR is written as a Fourier sine series

    I(phi) / I_0 = sum_n a_n sin(n phi),

which covers conventional tunnel junctions (a_1 = 1 only) as well as the
"novel" junctions this project is about, whose CPR carries a sizeable second
harmonic, I(phi) = I_1 sin(phi) + I_2 sin(2 phi).  Such junctions occur e.g.
in SFS junctions close to the 0-pi transition, in junctions with
d-wave / s+-  superconductors, in highly transparent (ballistic) weak links,
and in junctions with a ferromagnetic or topological barrier.

Fair comparison
---------------
Adding a second harmonic changes the true critical current of the junction,
I_c = max_phi |I(phi)|.  To compare SQUIDs built from different junctions on
equal footing, the CPR is by default normalized so that its maximum is one,
i.e. every junction has the same critical current I_c (and therefore, at
fixed shunt resistance R, the same characteristic voltage I_c R).  All
dimensionless SQUID parameters (beta_L = 2 L I_c / Phi_0, Gamma, the bias
current i = I / I_c, voltages in units of I_c R) refer to this true I_c.
"""

from __future__ import annotations

from dataclasses import dataclass, field

import numpy as np
from scipy.optimize import minimize_scalar


@dataclass(frozen=True)
class CPR:
    """Sine-series current-phase relation ``f(phi) = sum_n a_n sin(n phi) / norm``.

    Parameters
    ----------
    coeffs:
        Fourier coefficients ``(a_1, a_2, ...)`` of the raw CPR.
    normalize:
        If True (default) divide by the raw critical current so that
        ``max_phi f(phi) == 1``.
    """

    coeffs: tuple[float, ...]
    normalize: bool = True
    norm: float = field(init=False)

    def __post_init__(self) -> None:
        coeffs = tuple(float(c) for c in self.coeffs)
        if not coeffs or not any(coeffs):
            raise ValueError("CPR needs at least one non-zero coefficient")
        object.__setattr__(self, "coeffs", coeffs)
        norm = _raw_critical_current(coeffs) if self.normalize else 1.0
        object.__setattr__(self, "norm", norm)

    @classmethod
    def second_harmonic(cls, g: float, normalize: bool = True) -> "CPR":
        """CPR ``sin(phi) + g sin(2 phi)``; ``g = I_2 / I_1``."""
        return cls((1.0, g), normalize=normalize)

    @classmethod
    def sinusoidal(cls) -> "CPR":
        """Conventional tunnel junction, ``sin(phi)``."""
        return cls((1.0,))

    @property
    def g(self) -> float:
        """Second-to-first harmonic ratio ``a_2 / a_1``."""
        if len(self.coeffs) < 2 or self.coeffs[0] == 0:
            return 0.0
        return self.coeffs[1] / self.coeffs[0]

    @property
    def raw_critical_current(self) -> float:
        return _raw_critical_current(self.coeffs)

    def __call__(self, phi):
        phi = np.asarray(phi, dtype=float)
        out = np.zeros_like(phi)
        for n, a in enumerate(self.coeffs, start=1):
            if a:
                out = out + a * np.sin(n * phi)
        return out / self.norm

    def derivative(self, phi):
        phi = np.asarray(phi, dtype=float)
        out = np.zeros_like(phi)
        for n, a in enumerate(self.coeffs, start=1):
            if a:
                out = out + n * a * np.cos(n * phi)
        return out / self.norm

    def __repr__(self) -> str:  # pragma: no cover - cosmetic
        terms = " + ".join(f"{a:g} sin({n}phi)" for n, a in enumerate(self.coeffs, 1) if a)
        return f"CPR({terms}{', normalized' if self.normalize else ''})"


def _raw_critical_current(coeffs: tuple[float, ...]) -> float:
    """``max_phi |sum a_n sin(n phi)|`` via a dense grid plus local refinement."""

    def f(phi):
        return sum(a * np.sin(n * phi) for n, a in enumerate(coeffs, start=1))

    grid = np.linspace(0.0, 2.0 * np.pi, 4097)
    vals = np.abs(f(grid))
    k = int(np.argmax(vals))
    lo, hi = grid[max(k - 1, 0)], grid[min(k + 1, grid.size - 1)]
    res = minimize_scalar(lambda p: -abs(f(p)), bounds=(lo, hi), method="bounded",
                          options={"xatol": 1e-12})
    return float(max(vals[k], -res.fun))


def second_harmonic_critical_current(g: float) -> float:
    """Closed form of ``max_phi (sin phi + g sin 2 phi)`` (for reference/tests).

    Setting the derivative ``cos phi + 2 g cos 2 phi`` to zero gives
    ``cos phi = (-1 + sqrt(1 + 32 g^2)) / (8 g)``.
    """
    if g == 0:
        return 1.0
    c = (-1.0 + np.sqrt(1.0 + 32.0 * g * g)) / (8.0 * g)
    best = 0.0
    for cc in (c, (-1.0 - np.sqrt(1.0 + 32.0 * g * g)) / (8.0 * g)):
        if abs(cc) <= 1.0:
            s = np.sqrt(1.0 - cc * cc)
            for ss in (s, -s):
                best = max(best, abs(ss + 2.0 * g * ss * cc))
    return float(best)
