import numpy as np
import pytest

from squid import (
    CPR,
    critical_current_small_inductance,
    second_harmonic_critical_current,
    simulate_voltage,
    squid_transfer,
    voltage_noiseless_small_inductance,
)


@pytest.mark.parametrize("g", [-2.0, -0.5, -0.1, 0.0, 0.2, 0.7, 3.0])
def test_cpr_normalization(g):
    c = CPR.second_harmonic(g)
    assert c.raw_critical_current == pytest.approx(second_harmonic_critical_current(g), rel=1e-9)
    phi = np.linspace(0, 2 * np.pi, 20001)
    assert np.abs(c(phi)).max() == pytest.approx(1.0, abs=1e-6)


def test_conventional_ic_modulation():
    fa = np.array([0.0, 0.25, 0.5])
    ic = critical_current_small_inductance(CPR.sinusoidal(), fa)
    np.testing.assert_allclose(ic, 2 * np.abs(np.cos(np.pi * fa)), atol=1e-6)


def test_rsj_single_junction_limit():
    # At phi_a = 0 and beta_L = 0 the SQUID is one junction with I_c = 2:
    # v = sqrt((i/2)^2 - 1), the RSJ result.
    i = np.array([1.0, 2.5, 4.0])
    v = voltage_noiseless_small_inductance(CPR.sinusoidal(), i, [0.0])[:, 0]
    np.testing.assert_allclose(v, np.sqrt(np.clip((i / 2) ** 2 - 1, 0, None)), atol=1e-6)


@pytest.mark.parametrize("g", [0.0, 0.5, -1.0])
def test_simulation_matches_exact_small_inductance(g):
    c = CPR.second_harmonic(g)
    i, fa = np.array([1.5, 2.2]), np.array([0.1, 0.3])
    v_sim = simulate_voltage(c, 0.0, i, fa, t_avg=1500, dt=0.02)
    v_ex = voltage_noiseless_small_inductance(c, i, fa)
    np.testing.assert_allclose(v_sim, v_ex, atol=5e-3)


def test_small_beta_L_approaches_zero_inductance_limit():
    c = CPR.second_harmonic(0.5)
    i, fa = np.array([2.0]), np.array([0.2])
    v_sim = simulate_voltage(c, 0.02, i, fa, t_avg=800)
    v_ex = voltage_noiseless_small_inductance(c, i, fa)
    np.testing.assert_allclose(v_sim, v_ex, atol=2e-2)


def test_conventional_transfer_coefficient_tesche_clarke():
    # Tesche & Clarke: beta_L = 1, Gamma = 0.05 gives V_Phi ~ R/L = 2 I_c R / (beta_L Phi_0).
    r = squid_transfer(CPR.sinusoidal(), 1.0, 0.05, i_bias=np.linspace(1.4, 2.2, 9),
                       phi_a=np.linspace(0, 0.5, 21), t_avg=600, n_realizations=4)
    assert 1.6 < r.v_phi_max < 2.6
