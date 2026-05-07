"use client";

import { useMemo, useState } from "react";

const usd = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

function monthlyPayment(principal: number, annualRate: number, termYears: number): number {
  const r = annualRate / 100 / 12;
  const n = termYears * 12;
  if (r === 0) return principal / n;
  const factor = Math.pow(1 + r, n);
  return (principal * (r * factor)) / (factor - 1);
}

export function Calculator() {
  const [balance, setBalance] = useState(300000);
  const [oldRate, setOldRate] = useState(7.25);
  const [newRate, setNewRate] = useState(6.5);
  const [termYears, setTermYears] = useState(30);
  const [closingCosts, setClosingCosts] = useState(4500);

  const result = useMemo(() => {
    const oldMonthly = monthlyPayment(balance, oldRate, termYears);
    const newMonthly = monthlyPayment(balance, newRate, termYears);
    const monthlySavings = oldMonthly - newMonthly;
    const breakEvenMonths = monthlySavings > 0 ? closingCosts / monthlySavings : Infinity;
    const lifetimeSavings = monthlySavings * termYears * 12 - closingCosts;
    return {
      oldMonthly: isFinite(oldMonthly) ? oldMonthly : 0,
      newMonthly: isFinite(newMonthly) ? newMonthly : 0,
      monthlySavings: isFinite(monthlySavings) ? monthlySavings : 0,
      breakEvenMonths,
      lifetimeSavings: isFinite(lifetimeSavings) ? lifetimeSavings : 0,
    };
  }, [balance, oldRate, newRate, termYears, closingCosts]);

  const breakEvenLabel =
    !isFinite(result.breakEvenMonths) || result.breakEvenMonths <= 0
      ? "Never"
      : `${Math.ceil(result.breakEvenMonths)} mo`;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* INPUTS */}
      <div className="card p-7 space-y-5">
        <div className="font-mono uppercase text-xs tracking-wider text-mute mb-2">Inputs</div>

        <label className="block">
          <span className="block text-sm font-medium mb-2">Current loan balance ($)</span>
          <input
            type="number"
            min={0}
            value={balance}
            onChange={(e) => setBalance(Number(e.target.value) || 0)}
            className="w-full px-4 py-3 bg-bg-soft border border-line rounded-lg font-mono tabular text-ink focus:outline-none focus:border-violet"
          />
        </label>

        <label className="block">
          <span className="block text-sm font-medium mb-2">Current rate (%)</span>
          <input
            type="number"
            min={0}
            step={0.01}
            value={oldRate}
            onChange={(e) => setOldRate(Number(e.target.value) || 0)}
            className="w-full px-4 py-3 bg-bg-soft border border-line rounded-lg font-mono tabular text-ink focus:outline-none focus:border-violet"
          />
        </label>

        <label className="block">
          <span className="block text-sm font-medium mb-2">New rate (%)</span>
          <input
            type="number"
            min={0}
            step={0.01}
            value={newRate}
            onChange={(e) => setNewRate(Number(e.target.value) || 0)}
            className="w-full px-4 py-3 bg-bg-soft border border-line rounded-lg font-mono tabular text-ink focus:outline-none focus:border-violet"
          />
        </label>

        <label className="block">
          <span className="block text-sm font-medium mb-2">New term (years)</span>
          <input
            type="number"
            min={1}
            max={40}
            value={termYears}
            onChange={(e) => setTermYears(Number(e.target.value) || 0)}
            className="w-full px-4 py-3 bg-bg-soft border border-line rounded-lg font-mono tabular text-ink focus:outline-none focus:border-violet"
          />
        </label>

        <label className="block">
          <span className="block text-sm font-medium mb-2">Closing costs ($)</span>
          <input
            type="number"
            min={0}
            value={closingCosts}
            onChange={(e) => setClosingCosts(Number(e.target.value) || 0)}
            className="w-full px-4 py-3 bg-bg-soft border border-line rounded-lg font-mono tabular text-ink focus:outline-none focus:border-violet"
          />
        </label>
      </div>

      {/* RESULT */}
      <div className="card p-8 bg-ink text-bg">
        <div className="font-mono uppercase text-xs tracking-wider text-bg/60 mb-3">
          Break-even point
        </div>
        <div className="font-display font-extrabold text-5xl md:text-6xl tabular leading-none mb-2">
          {breakEvenLabel}
        </div>
        <div className="text-bg/60 text-sm mb-8">
          {result.monthlySavings <= 0
            ? "New rate does not lower your payment. Refinancing does not pay back."
            : `Hold the new loan past month ${Math.ceil(result.breakEvenMonths)} to come out ahead.`}
        </div>

        <div className="grid grid-cols-2 gap-5 pt-6 border-t border-white/15">
          <Metric label="Old monthly P&I" value={usd.format(result.oldMonthly)} />
          <Metric label="New monthly P&I" value={usd.format(result.newMonthly)} />
          <Metric label="Monthly savings" value={usd.format(result.monthlySavings)} />
          <Metric label="Lifetime savings" value={usd.format(result.lifetimeSavings)} />
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
