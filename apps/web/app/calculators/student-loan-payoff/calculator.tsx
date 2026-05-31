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
  const [principal, setPrincipal] = useState(35000);
  const [rate, setRate] = useState(6.53);
  const [termYears, setTermYears] = useState(10);
  const [graceMonths, setGraceMonths] = useState(6);
  const [defermentMonths, setDefermentMonths] = useState(0);
  const [capitalize, setCapitalize] = useState(true);

  const result = useMemo(() => {
    // Interest that accrues during grace + deferment
    const monthlyRate = rate / 100 / 12;
    const accrueMonths = graceMonths + defermentMonths;
    const interestDuringHold = principal * monthlyRate * accrueMonths;
    // If capitalized, the unpaid interest becomes principal
    const startingBalance = capitalize ? principal + interestDuringHold : principal;
    const monthly = monthlyPayment(startingBalance, rate, termYears * 12);
    const totalPayments = monthly * termYears * 12;
    const totalInterestPaid = totalPayments - startingBalance;
    const totalInterest = capitalize
      ? totalInterestPaid + interestDuringHold // already in balance via capitalization
      : totalInterestPaid + interestDuringHold;
    const totalCost = capitalize ? totalPayments : totalPayments + interestDuringHold;
    return {
      monthly: isFinite(monthly) ? monthly : 0,
      startingBalance,
      interestDuringHold,
      totalInterest,
      totalCost,
      totalPayments,
    };
  }, [principal, rate, termYears, graceMonths, defermentMonths, capitalize]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* INPUTS */}
      <div className="card p-7 space-y-5">
        <div className="font-mono uppercase text-xs tracking-wider text-mute mb-2">Inputs</div>

        <Input label="Loan amount ($)" value={principal} onChange={setPrincipal} step={500} />
        <Input label="Interest rate (%)" value={rate} onChange={setRate} step={0.01} />
        <Input label="Repayment term (years)" value={termYears} onChange={setTermYears} />
        <Input
          label="Grace period (months)"
          value={graceMonths}
          onChange={setGraceMonths}
          hint="Most federal loans grant 6 months after leaving school."
        />
        <Input
          label="Additional deferment (months)"
          value={defermentMonths}
          onChange={setDefermentMonths}
          hint="Extra months of pause beyond grace (economic hardship, grad school, etc.)."
        />
        <label className="flex items-center gap-3 pt-2 cursor-pointer">
          <input
            type="checkbox"
            checked={capitalize}
            onChange={(e) => setCapitalize(e.target.checked)}
            className="w-4 h-4 accent-violet"
          />
          <span className="text-sm">
            Capitalize unpaid interest into principal at end of grace/deferment
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
          Fixed monthly payment over a {termYears}-year repayment term, starting after the grace and deferment periods end.
        </div>

        <div className="grid grid-cols-2 gap-5 pt-6 border-t border-white/15">
          <Metric label="Loan amount" value={usd.format(principal)} />
          <Metric label="Interest in hold" value={usd.format(result.interestDuringHold)} />
          <Metric label="Starting balance" value={usd.format(result.startingBalance)} />
          <Metric label="Total interest" value={usd.format(result.totalInterest)} />
          <Metric label="Total paid back" value={usd.format(result.totalCost)} />
          <Metric
            label="Interest as % of loan"
            value={
              principal > 0
                ? `${((result.totalInterest / principal) * 100).toFixed(1)}%`
                : "--"
            }
          />
        </div>
      </div>
    </div>
  );
}

function Input({
  label,
  value,
  onChange,
  step,
  hint,
}: {
  label: string;
  value: number;
  onChange: (n: number) => void;
  step?: number;
  hint?: string;
}) {
  return (
    <label className="block">
      <span className="block text-sm font-medium mb-2">{label}</span>
      <input
        type="number"
        min={0}
        step={step ?? 1}
        value={value}
        onChange={(e) => onChange(Number(e.target.value) || 0)}
        className="w-full px-4 py-3 bg-bg-soft border border-line rounded-lg font-mono tabular text-ink focus:outline-none focus:border-violet"
      />
      {hint && <span className="block text-xs text-mute mt-1.5">{hint}</span>}
    </label>
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
