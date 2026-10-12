"""Parameter study: dc SQUIDs built from second-harmonic Josephson junctions.

Produces the figures in ``figures/`` and the table ``results/vphi_sweep.csv``.

    python scripts/run_study.py            # full study (~15 min on 4 cores)
    python scripts/run_study.py --quick    # coarse smoke run
"""

from __future__ import annotations

import argparse
import csv
import os
import sys
import time
from multiprocessing import Pool

import numpy as np

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, ROOT)

import matplotlib  # noqa: E402

matplotlib.use("Agg")
import matplotlib.pyplot as plt  # noqa: E402

from squid import CPR, critical_current_small_inductance, squid_transfer  # noqa: E402

FIG = os.path.join(ROOT, "figures")
RES = os.path.join(ROOT, "results")
G_VALUES = [-2.0, -1.0, -0.75, -0.5, -0.25, 0.0, 0.25, 0.5, 0.75, 1.0, 2.0]
BETA_L_VALUES = [0.25, 0.5, 1.0, 2.0]
GAMMA = 0.05


def fig_cpr_and_ic() -> None:
    """CPRs, critical-current modulation and its steepest slope for beta_L -> 0."""
    phi = np.linspace(-np.pi, np.pi, 801)
    fa = np.linspace(0.0, 1.0, 2001)
    fig, ax = plt.subplots(1, 3, figsize=(14, 4))
    for g in (0.0, 0.5, 1.0, -0.5, -1.0):
        c = CPR.second_harmonic(g)
        ax[0].plot(phi / np.pi, c(phi), label=f"g = {g:+.1f}")
        ax[1].plot(fa, critical_current_small_inductance(c, fa, n_grid=2048), label=f"g = {g:+.1f}")
    ax[0].set(xlabel=r"$\varphi/\pi$", ylabel=r"$I/I_c$", title="Normalized CPR  sin φ + g sin 2φ")
    ax[1].set(xlabel=r"$\Phi_a/\Phi_0$", ylabel=r"$I_c^{SQUID}/I_c$", title=r"SQUID $I_c(\Phi)$, $\beta_L\to0$")
    gs = np.linspace(-3, 3, 121)
    fa2 = np.linspace(0.0, 0.5, 1001)
    slope, depth = [], []
    for g in gs:
        ic = critical_current_small_inductance(CPR.second_harmonic(g), fa2, n_grid=2048)
        slope.append(np.abs(np.gradient(ic, fa2)).max())
        depth.append(ic.max() - ic.min())
    ax[2].plot(gs, slope, label=r"max $|dI_c/d\Phi|$  [$I_c/\Phi_0$]")
    ax[2].plot(gs, depth, label=r"$\Delta I_c$  [$I_c$]")
    ax[2].set(xlabel=r"$g = I_2/I_1$", title=r"Modulation, $\beta_L\to0$")
    for a in ax:
        a.grid(alpha=0.3)
        a.legend(fontsize=8)
    fig.tight_layout()
    fig.savefig(os.path.join(FIG, "cpr_and_ic_modulation.png"), dpi=150)
    plt.close(fig)


def _job(args):
    g, beta_L, i_bias, phi_a, t_avg, n_rep, seed = args
    t0 = time.time()
    r = squid_transfer(CPR.second_harmonic(g), beta_L, GAMMA, i_bias=i_bias, phi_a=phi_a,
                       t_avg=t_avg, n_realizations=n_rep, seed=seed)
    return g, beta_L, r, time.time() - t0


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("--quick", action="store_true")
    ap.add_argument("--workers", type=int, default=os.cpu_count())
    args = ap.parse_args()
    os.makedirs(FIG, exist_ok=True)
    os.makedirs(RES, exist_ok=True)

    fig_cpr_and_ic()

    if args.quick:
        i_bias, phi_a, t_avg, n_rep = np.linspace(0.6, 3.0, 13), np.linspace(0, 0.5, 21), 300, 2
        gs, bls = [-1.0, 0.0, 1.0], [1.0]
    else:
        i_bias, phi_a, t_avg, n_rep = np.linspace(0.5, 3.0, 51), np.linspace(0, 0.5, 41), 1000, 8
        gs, bls = G_VALUES, BETA_L_VALUES

    jobs = [(g, bl, i_bias, phi_a, t_avg, n_rep, 1234) for bl in bls for g in gs]
    results = {}
    with Pool(args.workers) as pool:
        for g, bl, r, dt in pool.imap_unordered(_job, jobs):
            results[(g, bl)] = r
            print(f"g={g:+.2f} beta_L={bl:.2f}: V_phi={r.v_phi_max:.3f} at i={r.i_opt:.2f}, "
                  f"phi={r.phi_opt:.3f}, swing={r.swing_max:.3f}  ({dt:.0f}s)", flush=True)

    with open(os.path.join(RES, "vphi_sweep.csv"), "w", newline="") as fh:
        w = csv.writer(fh)
        w.writerow(["g", "beta_L", "gamma", "v_phi_max", "v_phi_rel_to_g0", "i_opt", "phi_opt", "swing_max"])
        for bl in bls:
            ref = results[(0.0, bl)].v_phi_max
            for g in gs:
                r = results[(g, bl)]
                w.writerow([g, bl, GAMMA, f"{r.v_phi_max:.4f}", f"{r.v_phi_max / ref:.4f}",
                            f"{r.i_opt:.3f}", f"{r.phi_opt:.4f}", f"{r.swing_max:.4f}"])

    # Figure: V_phi vs g for each beta_L
    fig, ax = plt.subplots(1, 2, figsize=(11, 4))
    for bl in bls:
        vp = [results[(g, bl)].v_phi_max for g in gs]
        sw = [results[(g, bl)].swing_max for g in gs]
        ax[0].plot(gs, vp, "o-", label=rf"$\beta_L$ = {bl:g}")
        ax[1].plot(gs, sw, "o-", label=rf"$\beta_L$ = {bl:g}")
    ax[0].set(xlabel=r"$g = I_2/I_1$", ylabel=r"max $|\partial V/\partial\Phi|$  [$I_cR/\Phi_0$]",
              title=rf"Transfer coefficient, $\Gamma$ = {GAMMA}")
    ax[1].set(xlabel=r"$g = I_2/I_1$", ylabel=r"$\Delta V$  [$I_cR$]", title="Max. voltage modulation depth")
    for a in ax:
        a.grid(alpha=0.3)
        a.legend(fontsize=8)
    fig.tight_layout()
    fig.savefig(os.path.join(FIG, "vphi_vs_g.png"), dpi=150)
    plt.close(fig)

    # Figure: V(Phi) and dV/dPhi at the optimal bias, beta_L = 1
    bl = 1.0 if 1.0 in bls else bls[0]
    fig, ax = plt.subplots(1, 2, figsize=(11, 4))
    for g in [g for g in (-1.0, 0.0, 0.5, 1.0, 2.0) if g in gs]:
        r = results[(g, bl)]
        k = int(np.argmin(np.abs(r.i_bias - r.i_opt)))
        ff = np.concatenate([r.phi_a, 1 - r.phi_a[::-1]])
        ax[0].plot(ff, np.concatenate([r.v[k], r.v[k][::-1]]), label=f"g = {g:+g}, i = {r.i_opt:.2f}")
        ax[1].plot(ff, np.concatenate([r.v_phi[k], -r.v_phi[k][::-1]]), label=f"g = {g:+g}")
    ax[0].set(xlabel=r"$\Phi_a/\Phi_0$", ylabel=r"$V$ [$I_cR$]", title=rf"$V(\Phi)$ at optimal bias, $\beta_L$={bl:g}")
    ax[1].set(xlabel=r"$\Phi_a/\Phi_0$", ylabel=r"$\partial V/\partial\Phi$ [$I_cR/\Phi_0$]", title="Transfer function")
    for a in ax:
        a.grid(alpha=0.3)
        a.legend(fontsize=8)
    fig.tight_layout()
    fig.savefig(os.path.join(FIG, "v_phi_curves.png"), dpi=150)
    plt.close(fig)

    # Figure: V(i, Phi) maps, beta_L = 1
    sel = [g for g in (-1.0, 0.0, 1.0) if g in gs]
    fig, ax = plt.subplots(1, len(sel), figsize=(4.5 * len(sel), 3.8), squeeze=False)
    for a, g in zip(ax[0], sel):
        r = results[(g, bl)]
        m = a.pcolormesh(r.phi_a, r.i_bias, r.v_phi, cmap="RdBu_r", shading="auto",
                         vmin=-np.abs(r.v_phi).max(), vmax=np.abs(r.v_phi).max())
        fig.colorbar(m, ax=a, label=r"$\partial V/\partial\Phi$")
        a.set(xlabel=r"$\Phi_a/\Phi_0$", ylabel=r"$I/I_c$", title=rf"g = {g:+g}, $\beta_L$ = {bl:g}")
    fig.tight_layout()
    fig.savefig(os.path.join(FIG, "vphi_maps.png"), dpi=150)
    plt.close(fig)


if __name__ == "__main__":
    main()
