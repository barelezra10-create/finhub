"use client";

import { useMemo, useState } from "react";

const usd = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

function monthlyPayment(principal: number, annualRate: number, termMonths: number): number {
  const r = annualRate / 100 / 12;
  if (r === 0) return principal / termMonths;
  const factor = Math.pow(1 + r, termMonths);
  return (principal * (r * factor)) / (factor - 1);
}

export function Calculator() {
  const [loanAmount, setLoanAmount] = useState(15000);
  const [rate, setRate] = useState(11.5);
  const [termMonths, setTermMonths] = useState(60);

  const result = useMemo(() => {
    const monthly = monthlyPayment(loanAmount, rate, termMonths);
    const totalCost = monthly * termMonths;
    const totalInterest = totalCost - loanAmount;
    return {
      monthly: isFinite(monthly) ? monthly : 0,
      totalCost: isFinite(totalCost) ? totalCost : 0,
      totalInterest: isFinite(totalInterest) ? totalInterest : 0,
    };
  }, [loanAmount, rate, termMonths]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* INPUTS */}
      <div className="card p-7 space-y-5">
        <div className="font-mono uppercase text-xs tracking-wider text-mute mb-2">Inputs</div>

        <label className="block">
          <span className="block text-sm font-medium mb-2">Loan amount ($)</span>
          <input
            type="number"
            min={0}
            value={loanAmount}
            onChange={(e) => setLoanAmount(Number(e.target.value) || 0)}
            className="w-full px-4 py-3 bg-bg-soft border border-line rounded-lg font-mono tabular text-ink focus:outline-none focus:border-violet"
          />
        </label>

        <label className="block">
          <span className="block text-sm font-medium mb-2">Rate (%)</span>
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
          <span className="block text-sm font-medium mb-2">Term (months)</span>
          <input
            type="number"
            min={6}
            max={120}
            value={termMonths}
            onChange={(e) => setTermMonths(Number(e.target.value) || 0)}
            className="w-full px-4 py-3 bg-bg-soft border border-line rounded-lg font-mono tabular text-ink focus:outline-none focus:border-violet"
          />
          <span className="block text-xs text-mute mt-1.5">
            Most personal loans run 24 to 84 months. 60 is the most common term.
          </span>
        </label>
      </div>

      {/* RESULT */}
      <div className="card p-8 bg-ink text-bg">
        <div className="font-mono uppercase text-xs tracking-wider text-bg/60 mb-3">
          Monthly payment
        </div>
        <div className="font-display font-extrabold text-5xl md:text-6xl tabular leading-none mb-2">
          {usd.format(result.monthly)}
        </div>
        <div className="text-bg/60 text-sm mb-8">
          Fixed monthly payment over the full {termMonths}-month term. No prepayment penalty on most personal loans.
        </div>

        <div className="grid grid-cols-2 gap-5 pt-6 border-t border-white/15">
          <Metric label="Loan amount" value={usd.format(loanAmount)} />
          <Metric label="Total interest" value={usd.format(result.totalInterest)} />
          <Metric label="Total cost" value={usd.format(result.totalCost)} />
          <Metric
            label="Interest as % of loan"
            value={
              loanAmount > 0
                ? `${((result.totalInterest / loanAmount) * 100).toFixed(1)}%`
                : "--"
            }
          />
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
