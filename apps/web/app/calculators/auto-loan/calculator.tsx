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
  const [vehiclePrice, setVehiclePrice] = useState(35000);
  const [downPayment, setDownPayment] = useState(5000);
  const [tradeIn, setTradeIn] = useState(0);
  const [salesTaxPct, setSalesTaxPct] = useState(7.0);
  const [termMonths, setTermMonths] = useState(60);
  const [apr, setApr] = useState(8.25);

  const result = useMemo(() => {
    const taxAmount = (vehiclePrice * salesTaxPct) / 100;
    const loanAmount = Math.max(vehiclePrice + taxAmount - downPayment - tradeIn, 0);
    const monthly = monthlyPayment(loanAmount, apr, termMonths);
    const totalPayments = monthly * termMonths;
    const totalInterest = totalPayments - loanAmount;
    const totalCost = totalPayments + downPayment + tradeIn;
    return {
      taxAmount,
      loanAmount,
      monthly: isFinite(monthly) ? monthly : 0,
      totalPayments: isFinite(totalPayments) ? totalPayments : 0,
      totalInterest: isFinite(totalInterest) ? totalInterest : 0,
      totalCost: isFinite(totalCost) ? totalCost : 0,
    };
  }, [vehiclePrice, downPayment, tradeIn, salesTaxPct, termMonths, apr]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* INPUTS */}
      <div className="card p-7 space-y-5">
        <div className="font-mono uppercase text-xs tracking-wider text-mute mb-2">Inputs</div>

        <label className="block">
          <span className="block text-sm font-medium mb-2">Vehicle price ($)</span>
          <input
            type="number"
            min={0}
            value={vehiclePrice}
            onChange={(e) => setVehiclePrice(Number(e.target.value) || 0)}
            className="w-full px-4 py-3 bg-bg-soft border border-line rounded-lg font-mono tabular text-ink focus:outline-none focus:border-violet"
          />
        </label>

        <label className="block">
          <span className="block text-sm font-medium mb-2">Down payment ($)</span>
          <input
            type="number"
            min={0}
            value={downPayment}
            onChange={(e) => setDownPayment(Number(e.target.value) || 0)}
            className="w-full px-4 py-3 bg-bg-soft border border-line rounded-lg font-mono tabular text-ink focus:outline-none focus:border-violet"
          />
        </label>

        <label className="block">
          <span className="block text-sm font-medium mb-2">Trade-in value ($)</span>
          <input
            type="number"
            min={0}
            value={tradeIn}
            onChange={(e) => setTradeIn(Number(e.target.value) || 0)}
            className="w-full px-4 py-3 bg-bg-soft border border-line rounded-lg font-mono tabular text-ink focus:outline-none focus:border-violet"
          />
        </label>

        <label className="block">
          <span className="block text-sm font-medium mb-2">Sales tax (%)</span>
          <input
            type="number"
            min={0}
            max={20}
            step={0.1}
            value={salesTaxPct}
            onChange={(e) => setSalesTaxPct(Number(e.target.value) || 0)}
            className="w-full px-4 py-3 bg-bg-soft border border-line rounded-lg font-mono tabular text-ink focus:outline-none focus:border-violet"
          />
          <span className="block text-xs text-mute mt-1.5">
            That is {usd.format(result.taxAmount)} in sales tax rolled into the loan.
          </span>
        </label>

        <label className="block">
          <span className="block text-sm font-medium mb-2">Loan term (months)</span>
          <input
            type="number"
            min={12}
            max={84}
            value={termMonths}
            onChange={(e) => setTermMonths(Number(e.target.value) || 0)}
            className="w-full px-4 py-3 bg-bg-soft border border-line rounded-lg font-mono tabular text-ink focus:outline-none focus:border-violet"
          />
          <span className="block text-xs text-mute mt-1.5">Common terms: 36, 48, 60, 72, 84 months.</span>
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
          Fixed monthly payment over {termMonths} months. Excludes registration, dealer fees, and insurance.
        </div>

        <div className="grid grid-cols-2 gap-5 pt-6 border-t border-white/15">
          <Metric label="Loan amount" value={usd.format(result.loanAmount)} />
          <Metric label="Sales tax" value={usd.format(result.taxAmount)} />
          <Metric label="Total interest" value={usd.format(result.totalInterest)} />
          <Metric label="Total cost (out the door)" value={usd.format(result.totalCost)} />
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
