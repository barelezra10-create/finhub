"use client";

import { useMemo, useState } from "react";

const usd = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

const MAX_MONTHS = 600; // 50 years cap

export function Calculator() {
  const [goal, setGoal] = useState(30000);
  const [current, setCurrent] = useState(2000);
  const [contribution, setContribution] = useState(400);
  const [apy, setApy] = useState(4.5);

  const result = useMemo(() => {
    const monthlyRate = apy / 100 / 12;
    let balance = current;
    let months = 0;
    let totalContributed = current;

    if (balance >= goal) {
      return {
        months: 0,
        years: 0,
        leftoverMonths: 0,
        totalContributions: current,
        interestEarned: 0,
        capped: false,
        impossible: false,
      };
    }

    while (balance < goal && months < MAX_MONTHS) {
      balance = balance * (1 + monthlyRate) + contribution;
      totalContributed += contribution;
      months += 1;
    }

    const capped = balance < goal;
    const impossible = capped && contribution + balance * monthlyRate <= 0;
    const interestEarned = balance - totalContributed;

    return {
      months,
      years: Math.floor(months / 12),
      leftoverMonths: months % 12,
      totalContributions: totalContributed,
      interestEarned,
      capped,
      impossible,
      finalBalance: balance,
    };
  }, [goal, current, contribution, apy]);

  const monthsLabel = result.capped
    ? `${MAX_MONTHS}+ mo`
    : `${result.months} mo`;

  const friendlyTime = result.capped
    ? "Beyond 50 years"
    : result.years > 0
      ? `${result.years} yr ${result.leftoverMonths} mo`
      : `${result.months} mo`;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* INPUTS */}
      <div className="card p-7 space-y-5">
        <div className="font-mono uppercase text-xs tracking-wider text-mute mb-2">Inputs</div>

        <label className="block">
          <span className="block text-sm font-medium mb-2">Goal amount ($)</span>
          <input
            type="number"
            min={0}
            value={goal}
            onChange={(e) => setGoal(Number(e.target.value) || 0)}
            className="w-full px-4 py-3 bg-bg-soft border border-line rounded-lg font-mono tabular text-ink focus:outline-none focus:border-violet"
          />
        </label>

        <label className="block">
          <span className="block text-sm font-medium mb-2">Current balance ($)</span>
          <input
            type="number"
            min={0}
            value={current}
            onChange={(e) => setCurrent(Number(e.target.value) || 0)}
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
      </div>

      {/* RESULT */}
      <div className="card p-8 bg-ink text-bg">
        <div className="font-mono uppercase text-xs tracking-wider text-bg/60 mb-3">
          Time to reach goal
        </div>
        <div className="font-display font-extrabold text-5xl md:text-6xl tabular leading-none mb-2">
          {monthsLabel}
        </div>
        <div className="text-bg/60 text-sm mb-8">
          {result.impossible
            ? "Contribution and APY combined will not reach this goal."
            : result.capped
              ? "Goal not reached within 50 years. Raise the monthly contribution."
              : `That is ${friendlyTime} at the current pace.`}
        </div>

        <div className="grid grid-cols-2 gap-5 pt-6 border-t border-white/15">
          <Metric label="Goal" value={usd.format(goal)} />
          <Metric label="Starting balance" value={usd.format(current)} />
          <Metric label="Total contributions" value={usd.format(result.totalContributions)} />
          <Metric label="Interest earned" value={usd.format(result.interestEarned)} />
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
