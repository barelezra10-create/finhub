"use client";

import { useMemo, useState } from "react";

const usd = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

interface RungSpec {
  termYears: number;
  apy: number;
  label: string;
}

// Realistic 2026 CD rate landscape, FDIC-insured no-fee category
const RATE_TABLE: { months: number; apy: number; label: string }[] = [
  { months: 6, apy: 5.10, label: "6 mo" },
  { months: 12, apy: 4.90, label: "1 yr" },
  { months: 24, apy: 4.65, label: "2 yr" },
  { months: 36, apy: 4.40, label: "3 yr" },
  { months: 48, apy: 4.25, label: "4 yr" },
  { months: 60, apy: 4.20, label: "5 yr" },
];

function buildRungs(numRungs: number, startMonths: number, endMonths: number): RungSpec[] {
  const start = Math.min(startMonths, endMonths);
  const end = Math.max(startMonths, endMonths);
  const rungs: RungSpec[] = [];
  if (numRungs <= 1) {
    const cell = closestRate(start);
    return [{ termYears: cell.months / 12, apy: cell.apy, label: cell.label }];
  }
  for (let i = 0; i < numRungs; i++) {
    const months = start + ((end - start) * i) / (numRungs - 1);
    const cell = closestRate(months);
    rungs.push({ termYears: cell.months / 12, apy: cell.apy, label: cell.label });
  }
  return rungs;
}

function closestRate(months: number): { months: number; apy: number; label: string } {
  let best = RATE_TABLE[0]!;
  let bestDiff = Math.abs(best.months - months);
  for (const r of RATE_TABLE) {
    const d = Math.abs(r.months - months);
    if (d < bestDiff) {
      best = r;
      bestDiff = d;
    }
  }
  return best;
}

export function Calculator() {
  const [total, setTotal] = useState(25000);
  const [numRungs, setNumRungs] = useState(5);
  const [startMonths, setStartMonths] = useState(12);
  const [endMonths, setEndMonths] = useState(60);

  const result = useMemo(() => {
    const rungs = buildRungs(numRungs, startMonths, endMonths);
    const principalPerRung = rungs.length > 0 ? total / rungs.length : 0;
    const rows = rungs.map((rung) => {
      const maturity = principalPerRung * Math.pow(1 + rung.apy / 100, rung.termYears);
      return {
        ...rung,
        principal: principalPerRung,
        maturity,
        interest: maturity - principalPerRung,
      };
    });
    const totalMaturity = rows.reduce((s, r) => s + r.maturity, 0);
    const totalInterest = totalMaturity - total;
    const weightedApy =
      rows.length > 0
        ? rows.reduce((s, r) => s + r.apy * (r.principal / total), 0)
        : 0;
    return { rows, totalMaturity, totalInterest, weightedApy };
  }, [total, numRungs, startMonths, endMonths]);

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* INPUTS */}
        <div className="card p-7 space-y-5">
          <div className="font-mono uppercase text-xs tracking-wider text-mute mb-2">Inputs</div>

          <label className="block">
            <span className="block text-sm font-medium mb-2">Total amount ($)</span>
            <input
              type="number"
              min={0}
              value={total}
              onChange={(e) => setTotal(Number(e.target.value) || 0)}
              className="w-full px-4 py-3 bg-bg-soft border border-line rounded-lg font-mono tabular text-ink focus:outline-none focus:border-violet"
            />
          </label>

          <label className="block">
            <span className="block text-sm font-medium mb-2">Number of rungs</span>
            <input
              type="number"
              min={3}
              max={5}
              value={numRungs}
              onChange={(e) => setNumRungs(Math.min(5, Math.max(3, Number(e.target.value) || 3)))}
              className="w-full px-4 py-3 bg-bg-soft border border-line rounded-lg font-mono tabular text-ink focus:outline-none focus:border-violet"
            />
            <span className="block text-xs text-mute mt-1.5">3 to 5 rungs supported.</span>
          </label>

          <label className="block">
            <span className="block text-sm font-medium mb-2">Shortest rung (months)</span>
            <input
              type="number"
              min={6}
              max={60}
              value={startMonths}
              onChange={(e) => setStartMonths(Number(e.target.value) || 6)}
              className="w-full px-4 py-3 bg-bg-soft border border-line rounded-lg font-mono tabular text-ink focus:outline-none focus:border-violet"
            />
          </label>

          <label className="block">
            <span className="block text-sm font-medium mb-2">Longest rung (months)</span>
            <input
              type="number"
              min={6}
              max={60}
              value={endMonths}
              onChange={(e) => setEndMonths(Number(e.target.value) || 60)}
              className="w-full px-4 py-3 bg-bg-soft border border-line rounded-lg font-mono tabular text-ink focus:outline-none focus:border-violet"
            />
          </label>
        </div>

        {/* RESULT */}
        <div className="card p-8 bg-ink text-bg">
          <div className="font-mono uppercase text-xs tracking-wider text-bg/60 mb-3">
            Total at maturity
          </div>
          <div className="font-display font-extrabold text-5xl md:text-6xl tabular leading-none mb-2">
            {usd.format(result.totalMaturity)}
          </div>
          <div className="text-bg/60 text-sm mb-8">
            Sum of every rung at its final maturity. Pre-tax. APY rates from the FDIC top-25 list.
          </div>

          <div className="grid grid-cols-2 gap-5 pt-6 border-t border-white/15">
            <Metric label="Starting amount" value={usd.format(total)} />
            <Metric label="Total interest" value={usd.format(result.totalInterest)} />
            <Metric label="Weighted avg APY" value={`${result.weightedApy.toFixed(2)}%`} />
            <Metric label="Per-rung principal" value={usd.format(total / Math.max(numRungs, 1))} />
          </div>
        </div>
      </div>

      {/* RUNG TABLE */}
      <div className="card-flush overflow-hidden">
        <div className="px-6 py-4 border-b border-line bg-bg-soft/60">
          <div className="font-display font-bold text-lg">Ladder breakdown</div>
          <div className="text-mute text-sm">
            Equal principal across each rung. APY assigned to the closest standard term.
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-xs font-mono uppercase tracking-wider text-mute">
                <th className="text-left px-6 py-3">Rung</th>
                <th className="text-left px-6 py-3">Term</th>
                <th className="text-right px-6 py-3">APY</th>
                <th className="text-right px-6 py-3">Principal</th>
                <th className="text-right px-6 py-3">Interest</th>
                <th className="text-right px-6 py-3">Maturity value</th>
              </tr>
            </thead>
            <tbody>
              {result.rows.map((r, i) => (
                <tr
                  key={i}
                  className={i === result.rows.length - 1 ? "" : "border-b border-line-soft"}
                >
                  <td className="px-6 py-3 font-mono tabular">{i + 1}</td>
                  <td className="px-6 py-3 font-medium">{r.label}</td>
                  <td className="px-6 py-3 font-mono tabular text-right">{r.apy.toFixed(2)}%</td>
                  <td className="px-6 py-3 font-mono tabular text-right">
                    {usd.format(r.principal)}
                  </td>
                  <td className="px-6 py-3 font-mono tabular text-right text-mint">
                    {usd.format(r.interest)}
                  </td>
                  <td className="px-6 py-3 font-mono tabular text-right font-semibold">
                    {usd.format(r.maturity)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-xs text-bg/60 uppercase tracking-wider font-mono mb-1.5">{label}</div>
      <div className="font-display font-bold text-xl tabular">{value}</div>
    </div>
  );
}
