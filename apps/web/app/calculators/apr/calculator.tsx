"use client";

import { useMemo, useState } from "react";

const usd = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 2,
});

const usd4 = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 4,
});

const pct = new Intl.NumberFormat("en-US", {
  style: "percent",
  minimumFractionDigits: 2,
  maximumFractionDigits: 4,
});

export function Calculator() {
  const [balance, setBalance] = useState(2000);
  const [apr, setApr] = useState(24.99);

  const result = useMemo(() => {
    const r = apr / 100;
    const dailyRate = r / 365;
    const monthlyRate = r / 12;
    // APY assuming daily compounding (most CC issuers compound daily)
    const apy = Math.pow(1 + dailyRate, 365) - 1;
    return {
      dailyInterest: balance * dailyRate,
      monthlyInterest: balance * monthlyRate,
      yearlyInterestSimple: balance * r,
      yearlyInterestCompound: balance * apy,
      dailyRate,
      monthlyRate,
      apy,
    };
  }, [balance, apr]);

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* INPUTS */}
        <div className="card p-7 space-y-5">
          <div className="font-mono uppercase text-xs tracking-wider text-mute mb-2">Inputs</div>

          <label className="block">
            <span className="block text-sm font-medium mb-2">Balance carried ($)</span>
            <input
              type="number"
              min={0}
              value={balance}
              onChange={(e) => setBalance(Number(e.target.value) || 0)}
              className="w-full px-4 py-3 bg-bg-soft border border-line rounded-lg font-mono tabular text-ink focus:outline-none focus:border-violet"
            />
          </label>

          <label className="block">
            <span className="block text-sm font-medium mb-2">APR (%)</span>
            <input
              type="number"
              min={0}
              step={0.01}
              value={apr}
              onChange={(e) => setApr(Number(e.target.value) || 0)}
              className="w-full px-4 py-3 bg-bg-soft border border-line rounded-lg font-mono tabular text-ink focus:outline-none focus:border-violet"
            />
            <span className="block text-xs text-mute mt-1.5">
              The annual percentage rate from your card or loan disclosure.
            </span>
          </label>
        </div>

        {/* RESULT */}
        <div className="card p-8 bg-ink text-bg">
          <div className="font-mono uppercase text-xs tracking-wider text-bg/60 mb-3">
            Monthly interest cost
          </div>
          <div className="font-display font-extrabold text-5xl md:text-6xl tabular leading-none mb-2">
            {usd.format(result.monthlyInterest)}
          </div>
          <div className="text-bg/60 text-sm mb-8">
            What this APR costs you each month on the current balance. Assumes interest compounds daily, which is the credit card standard.
          </div>
          <div className="grid grid-cols-2 gap-5 pt-6 border-t border-white/15">
            <Metric label="Daily interest" value={usd4.format(result.dailyInterest)} />
            <Metric label="Monthly interest" value={usd.format(result.monthlyInterest)} />
            <Metric label="Yearly (simple)" value={usd.format(result.yearlyInterestSimple)} />
            <Metric label="Yearly (compounded)" value={usd.format(result.yearlyInterestCompound)} />
          </div>
        </div>
      </div>

      {/* RATE BREAKDOWN TABLE */}
      <div className="card-flush overflow-hidden">
        <div className="px-6 py-4 border-b border-line bg-bg-soft/60">
          <div className="font-display font-bold text-lg">Rate breakdown</div>
          <div className="text-mute text-sm">
            Same APR, expressed across different time horizons and compounding assumptions.
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-xs font-mono uppercase tracking-wider text-mute">
                <th className="text-left px-6 py-3">Time horizon</th>
                <th className="text-right px-6 py-3">Rate</th>
                <th className="text-right px-6 py-3">Cost on balance</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-line-soft">
                <td className="px-6 py-3 font-medium">Daily periodic rate</td>
                <td className="px-6 py-3 font-mono tabular text-right">{pct.format(result.dailyRate)}</td>
                <td className="px-6 py-3 font-mono tabular text-right">
                  {usd4.format(result.dailyInterest)}
                </td>
              </tr>
              <tr className="border-b border-line-soft">
                <td className="px-6 py-3 font-medium">Monthly rate (APR / 12)</td>
                <td className="px-6 py-3 font-mono tabular text-right">{pct.format(result.monthlyRate)}</td>
                <td className="px-6 py-3 font-mono tabular text-right">
                  {usd.format(result.monthlyInterest)}
                </td>
              </tr>
              <tr className="border-b border-line-soft">
                <td className="px-6 py-3 font-medium">APR (simple annual)</td>
                <td className="px-6 py-3 font-mono tabular text-right">{pct.format(apr / 100)}</td>
                <td className="px-6 py-3 font-mono tabular text-right">
                  {usd.format(result.yearlyInterestSimple)}
                </td>
              </tr>
              <tr>
                <td className="px-6 py-3 font-medium">APY (effective annual)</td>
                <td className="px-6 py-3 font-mono tabular text-right font-semibold text-violet">
                  {pct.format(result.apy)}
                </td>
                <td className="px-6 py-3 font-mono tabular text-right font-semibold">
                  {usd.format(result.yearlyInterestCompound)}
                </td>
              </tr>
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
      <div className="font-display font-bold text-base tabular leading-snug">{value}</div>
    </div>
  );
}
