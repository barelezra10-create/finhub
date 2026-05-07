"use client";

import { useMemo, useState } from "react";

const usd = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

const MAX_MONTHS = 600;

export function Calculator() {
  const [balance, setBalance] = useState(7500);
  const [apr, setApr] = useState(22.99);
  const [payment, setPayment] = useState(250);

  const result = useMemo(() => {
    const monthlyRate = apr / 100 / 12;
    let bal = balance;
    let months = 0;
    let totalPaid = 0;
    let totalInterest = 0;

    const firstMonthInterest = bal * monthlyRate;
    if (payment <= firstMonthInterest && bal > 0) {
      return {
        months: Infinity,
        totalPaid: 0,
        totalInterest: 0,
        tooLow: true,
        firstMonthInterest,
      };
    }

    while (bal > 0 && months < MAX_MONTHS) {
      const interest = bal * monthlyRate;
      let principal = payment - interest;
      if (principal > bal) principal = bal;
      const thisMonthPayment = principal + interest;
      bal -= principal;
      totalPaid += thisMonthPayment;
      totalInterest += interest;
      months += 1;
    }

    return {
      months,
      totalPaid,
      totalInterest,
      tooLow: false,
      firstMonthInterest,
    };
  }, [balance, apr, payment]);

  const monthsLabel = result.tooLow
    ? "Never"
    : !isFinite(result.months)
      ? "--"
      : `${result.months} mo`;

  const friendlyTime =
    !result.tooLow && isFinite(result.months)
      ? result.months >= 12
        ? `${Math.floor(result.months / 12)} yr ${result.months % 12} mo`
        : `${result.months} mo`
      : "";

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* INPUTS */}
      <div className="card p-7 space-y-5">
        <div className="font-mono uppercase text-xs tracking-wider text-mute mb-2">Inputs</div>

        <label className="block">
          <span className="block text-sm font-medium mb-2">Balance ($)</span>
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
        </label>

        <label className="block">
          <span className="block text-sm font-medium mb-2">Monthly payment ($)</span>
          <input
            type="number"
            min={0}
            value={payment}
            onChange={(e) => setPayment(Number(e.target.value) || 0)}
            className="w-full px-4 py-3 bg-bg-soft border border-line rounded-lg font-mono tabular text-ink focus:outline-none focus:border-violet"
          />
          {result.tooLow && (
            <span className="block text-xs text-rose mt-1.5 font-medium">
              Payment is below the first month&rsquo;s interest of{" "}
              {usd.format(result.firstMonthInterest)}. Balance will grow forever. Raise the payment.
            </span>
          )}
        </label>
      </div>

      {/* RESULT */}
      <div className="card p-8 bg-ink text-bg">
        <div className="font-mono uppercase text-xs tracking-wider text-bg/60 mb-3">
          Time to payoff
        </div>
        <div className="font-display font-extrabold text-5xl md:text-6xl tabular leading-none mb-2">
          {monthsLabel}
        </div>
        <div className="text-bg/60 text-sm mb-8">
          {result.tooLow
            ? "Payment too low. The balance grows each month under the current inputs."
            : friendlyTime
              ? `That is ${friendlyTime} at the current pace.`
              : "Adjust your inputs to see a payoff timeline."}
        </div>

        <div className="grid grid-cols-2 gap-5 pt-6 border-t border-white/15">
          <Metric label="Starting balance" value={usd.format(balance)} />
          <Metric label="Total paid" value={result.tooLow ? "--" : usd.format(result.totalPaid)} />
          <Metric
            label="Total interest"
            value={result.tooLow ? "--" : usd.format(result.totalInterest)}
          />
          <Metric
            label="Interest as % of paid"
            value={
              result.tooLow || result.totalPaid <= 0
                ? "--"
                : `${((result.totalInterest / result.totalPaid) * 100).toFixed(1)}%`
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
