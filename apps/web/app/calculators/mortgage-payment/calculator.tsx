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
  const [homePrice, setHomePrice] = useState(400000);
  const [downPct, setDownPct] = useState(20);
  const [rate, setRate] = useState(6.85);
  const [termYears, setTermYears] = useState(30);

  const result = useMemo(() => {
    const downPayment = (homePrice * downPct) / 100;
    const principal = Math.max(homePrice - downPayment, 0);
    const monthly = monthlyPayment(principal, rate, termYears);
    const totalPayments = monthly * termYears * 12;
    const totalInterest = totalPayments - principal;
    return {
      downPayment,
      principal,
      monthly: isFinite(monthly) ? monthly : 0,
      totalPayments: isFinite(totalPayments) ? totalPayments : 0,
      totalInterest: isFinite(totalInterest) ? totalInterest : 0,
    };
  }, [homePrice, downPct, rate, termYears]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* INPUTS */}
      <div className="card p-7 space-y-5">
        <div className="font-mono uppercase text-xs tracking-wider text-mute mb-2">Inputs</div>

        <label className="block">
          <span className="block text-sm font-medium mb-2">Home price ($)</span>
          <input
            type="number"
            min={0}
            value={homePrice}
            onChange={(e) => setHomePrice(Number(e.target.value) || 0)}
            className="w-full px-4 py-3 bg-bg-soft border border-line rounded-lg font-mono tabular text-ink focus:outline-none focus:border-violet"
          />
        </label>

        <label className="block">
          <span className="block text-sm font-medium mb-2">Down payment (%)</span>
          <input
            type="number"
            min={0}
            max={100}
            step={0.5}
            value={downPct}
            onChange={(e) => setDownPct(Number(e.target.value) || 0)}
            className="w-full px-4 py-3 bg-bg-soft border border-line rounded-lg font-mono tabular text-ink focus:outline-none focus:border-violet"
          />
          <span className="block text-xs text-mute mt-1.5">
            That is {usd.format(result.downPayment)} down.
          </span>
        </label>

        <label className="block">
          <span className="block text-sm font-medium mb-2">Interest rate (%)</span>
          <input
            type="number"
            min={0}
            step={0.01}
            value={rate}
            onChange={(e) => setRate(Number(e.target.value) || 0)}
            className="w-full px-4 py-3 bg-bg-soft border border-line rounded-lg font-mono tabular text-ink focus:outline-none focus:border-violet"
          />
        </label>

        <label className="block">
          <span className="block text-sm font-medium mb-2">Term (years)</span>
          <input
            type="number"
            min={1}
            max={40}
            value={termYears}
            onChange={(e) => setTermYears(Number(e.target.value) || 0)}
            className="w-full px-4 py-3 bg-bg-soft border border-line rounded-lg font-mono tabular text-ink focus:outline-none focus:border-violet"
          />
        </label>
      </div>

      {/* RESULT */}
      <div className="card p-8 bg-ink text-bg">
        <div className="font-mono uppercase text-xs tracking-wider text-bg/60 mb-3">
          Monthly principal & interest
        </div>
        <div className="font-display font-extrabold text-5xl md:text-6xl tabular leading-none mb-2">
          {usd.format(result.monthly)}
        </div>
        <div className="text-bg/60 text-sm mb-8">
          Excludes property tax, insurance, HOA, and PMI if down payment is under 20%.
        </div>

        <div className="grid grid-cols-2 gap-5 pt-6 border-t border-white/15">
          <Metric label="Loan principal" value={usd.format(result.principal)} />
          <Metric label="Down payment" value={usd.format(result.downPayment)} />
          <Metric label="Total interest" value={usd.format(result.totalInterest)} />
          <Metric label="Total payments" value={usd.format(result.totalPayments)} />
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
