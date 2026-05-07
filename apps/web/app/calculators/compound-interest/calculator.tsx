"use client";

import { useMemo, useState } from "react";

const usd = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

interface YearRow {
  year: number;
  contributed: number;
  balance: number;
  interest: number;
}

export function Calculator() {
  const [starting, setStarting] = useState(5000);
  const [contribution, setContribution] = useState(500);
  const [apy, setApy] = useState(5.0);
  const [years, setYears] = useState(20);

  const result = useMemo(() => {
    const n = 12; // monthly compounding
    const r = apy / 100;
    const rows: YearRow[] = [];
    let balance = starting;
    let totalContributed = starting;

    for (let y = 1; y <= years; y++) {
      // simulate 12 months
      for (let m = 0; m < 12; m++) {
        balance = balance * (1 + r / n) + contribution;
        totalContributed += contribution;
      }
      const interestEarned = balance - totalContributed;
      rows.push({
        year: y,
        contributed: totalContributed,
        balance,
        interest: interestEarned,
      });
    }

    const lastRow = rows[rows.length - 1];
    const finalBalance = lastRow ? lastRow.balance : starting;
    const totalContributions = lastRow ? lastRow.contributed : starting;
    const interestEarned = finalBalance - totalContributions;

    return {
      finalBalance,
      totalContributions,
      interestEarned,
      rows,
    };
  }, [starting, contribution, apy, years]);

  // sample rows: every few years for readability
  const sampledRows = useMemo(() => {
    const rows = result.rows;
    if (rows.length <= 12) return rows;
    const step = Math.ceil(rows.length / 10);
    const out: YearRow[] = [];
    for (let i = 0; i < rows.length; i += step) {
      const row = rows[i];
      if (row) out.push(row);
    }
    const lastRow = rows[rows.length - 1];
    if (lastRow && out[out.length - 1] !== lastRow) out.push(lastRow);
    return out;
  }, [result.rows]);

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* INPUTS */}
        <div className="card p-7 space-y-5">
          <div className="font-mono uppercase text-xs tracking-wider text-mute mb-2">Inputs</div>

          <label className="block">
            <span className="block text-sm font-medium mb-2">Starting balance ($)</span>
            <input
              type="number"
              min={0}
              value={starting}
              onChange={(e) => setStarting(Number(e.target.value) || 0)}
              className="w-full px-4 py-3 bg-bg-soft border border-line rounded-lg font-mono tabular text-ink focus:outline-none focus:border-violet"
            />
          </label>

          <label className="block">
            <span className="block text-sm font-medium mb-2">Monthly contribution ($)</span>
            <input
              type="number"
              min={0}
              value={contribution}
              onChange={(e) => setContribution(Number(e.target.value) || 0)}
              className="w-full px-4 py-3 bg-bg-soft border border-line rounded-lg font-mono tabular text-ink focus:outline-none focus:border-violet"
            />
          </label>

          <label className="block">
            <span className="block text-sm font-medium mb-2">APY (%)</span>
            <input
              type="number"
              min={0}
              step={0.05}
              value={apy}
              onChange={(e) => setApy(Number(e.target.value) || 0)}
              className="w-full px-4 py-3 bg-bg-soft border border-line rounded-lg font-mono tabular text-ink focus:outline-none focus:border-violet"
            />
          </label>

          <label className="block">
            <span className="block text-sm font-medium mb-2">Years</span>
            <input
              type="number"
              min={1}
              max={60}
              value={years}
              onChange={(e) => setYears(Number(e.target.value) || 0)}
              className="w-full px-4 py-3 bg-bg-soft border border-line rounded-lg font-mono tabular text-ink focus:outline-none focus:border-violet"
            />
          </label>
        </div>

        {/* RESULT */}
        <div className="card p-8 bg-ink text-bg">
          <div className="font-mono uppercase text-xs tracking-wider text-bg/60 mb-3">
            Final balance after {years} years
          </div>
          <div className="font-display font-extrabold text-5xl md:text-6xl tabular leading-none mb-2">
            {usd.format(result.finalBalance)}
          </div>
          <div className="text-bg/60 text-sm mb-8">
            Compounded monthly. Pre-tax. Real returns will vary year to year.
          </div>

          <div className="grid grid-cols-2 gap-5 pt-6 border-t border-white/15">
            <Metric label="Total contributions" value={usd.format(result.totalContributions)} />
            <Metric label="Interest earned" value={usd.format(result.interestEarned)} />
            <Metric label="Starting balance" value={usd.format(starting)} />
            <Metric
              label="Multiplier"
              value={
                result.totalContributions > 0
                  ? `${(result.finalBalance / result.totalContributions).toFixed(2)}x`
                  : "--"
              }
            />
          </div>
        </div>
      </div>

      {/* YEAR-BY-YEAR TABLE */}
      <div className="card-flush overflow-hidden">
        <div className="px-6 py-4 border-b border-line bg-bg-soft/60">
          <div className="font-display font-bold text-lg">Year-by-year growth</div>
          <div className="text-mute text-sm">Showing key milestones across {years} years.</div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-xs font-mono uppercase tracking-wider text-mute">
                <th className="text-left px-6 py-3">Year</th>
                <th className="text-right px-6 py-3">Contributed</th>
                <th className="text-right px-6 py-3">Interest earned</th>
                <th className="text-right px-6 py-3">Balance</th>
              </tr>
            </thead>
            <tbody>
              {sampledRows.map((r, i) => (
                <tr
                  key={r.year}
                  className={i === sampledRows.length - 1 ? "" : "border-b border-line-soft"}
                >
                  <td className="px-6 py-3 font-mono tabular">{r.year}</td>
                  <td className="px-6 py-3 font-mono tabular text-right">
                    {usd.format(r.contributed)}
                  </td>
                  <td className="px-6 py-3 font-mono tabular text-right text-mint">
                    {usd.format(r.interest)}
                  </td>
                  <td className="px-6 py-3 font-mono tabular text-right font-semibold">
                    {usd.format(r.balance)}
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
