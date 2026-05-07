"use client";

import { useMemo, useState } from "react";

const usd = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

function amortizingMonthly(principal: number, annualRate: number, termMonths: number): number {
  const r = annualRate / 100 / 12;
  if (r === 0) return principal / termMonths;
  const factor = Math.pow(1 + r, termMonths);
  return (principal * (r * factor)) / (factor - 1);
}

export function Calculator() {
  const [lineAmount, setLineAmount] = useState(50000);
  const [currentDraw, setCurrentDraw] = useState(30000);
  const [introApr, setIntroApr] = useState(0);
  const [introMonths, setIntroMonths] = useState(12);
  const [variableApr, setVariableApr] = useState(9.5);
  const [drawYears, setDrawYears] = useState(10);
  const [repayYears, setRepayYears] = useState(20);
  const [interestOnlyDraw, setInterestOnlyDraw] = useState(true);

  const result = useMemo(() => {
    const balance = Math.min(currentDraw, lineAmount);

    // Intro period: interest-only on current balance at intro APR
    const introMonthly = (balance * introApr) / 100 / 12;

    // Post-intro draw period: interest-only or amortizing on balance at variable APR
    const drawMonthsRemaining = Math.max(drawYears * 12 - introMonths, 0);
    let postIntroMonthly: number;
    let endOfDrawBalance: number;

    if (interestOnlyDraw) {
      postIntroMonthly = (balance * variableApr) / 100 / 12;
      endOfDrawBalance = balance;
    } else {
      // Amortize during the full draw period (excluding intro)
      const drawTotalMonths = Math.max(drawYears * 12, 1);
      postIntroMonthly = amortizingMonthly(balance, variableApr, drawTotalMonths);
      // Balance after drawMonthsRemaining months of amortizing
      const r = variableApr / 100 / 12;
      let bal = balance;
      for (let i = 0; i < drawMonthsRemaining; i++) {
        const interest = bal * r;
        const principal = Math.max(postIntroMonthly - interest, 0);
        bal = Math.max(bal - principal, 0);
      }
      endOfDrawBalance = bal;
    }

    // Repayment period: amortize end-of-draw balance over repayYears at variable APR
    const repayMonths = Math.max(repayYears * 12, 1);
    const repaymentMonthly = amortizingMonthly(endOfDrawBalance, variableApr, repayMonths);

    // Total interest over the life of the loan
    const introInterestTotal = introMonthly * introMonths;
    const postIntroDrawInterest = interestOnlyDraw
      ? postIntroMonthly * drawMonthsRemaining
      : (postIntroMonthly * drawMonthsRemaining) - (balance - endOfDrawBalance);
    const repaymentTotal = repaymentMonthly * repayMonths;
    const repaymentInterest = repaymentTotal - endOfDrawBalance;
    const totalInterest = introInterestTotal + postIntroDrawInterest + repaymentInterest;

    return {
      balance,
      introMonthly: isFinite(introMonthly) ? introMonthly : 0,
      postIntroMonthly: isFinite(postIntroMonthly) ? postIntroMonthly : 0,
      endOfDrawBalance: isFinite(endOfDrawBalance) ? endOfDrawBalance : 0,
      repaymentMonthly: isFinite(repaymentMonthly) ? repaymentMonthly : 0,
      totalInterest: isFinite(totalInterest) ? totalInterest : 0,
      drawMonthsRemaining,
    };
  }, [
    lineAmount,
    currentDraw,
    introApr,
    introMonths,
    variableApr,
    drawYears,
    repayYears,
    interestOnlyDraw,
  ]);

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* INPUTS */}
        <div className="card p-7 space-y-5">
          <div className="font-mono uppercase text-xs tracking-wider text-mute mb-2">Inputs</div>

          <label className="block">
            <span className="block text-sm font-medium mb-2">Credit line amount ($)</span>
            <input
              type="number"
              min={0}
              value={lineAmount}
              onChange={(e) => setLineAmount(Number(e.target.value) || 0)}
              className="w-full px-4 py-3 bg-bg-soft border border-line rounded-lg font-mono tabular text-ink focus:outline-none focus:border-violet"
            />
          </label>

          <label className="block">
            <span className="block text-sm font-medium mb-2">Current balance drawn ($)</span>
            <input
              type="number"
              min={0}
              value={currentDraw}
              onChange={(e) => setCurrentDraw(Number(e.target.value) || 0)}
              className="w-full px-4 py-3 bg-bg-soft border border-line rounded-lg font-mono tabular text-ink focus:outline-none focus:border-violet"
            />
          </label>

          <div className="grid grid-cols-2 gap-3">
            <label className="block">
              <span className="block text-sm font-medium mb-2">Intro APR (%)</span>
              <input
                type="number"
                min={0}
                step={0.01}
                value={introApr}
                onChange={(e) => setIntroApr(Number(e.target.value) || 0)}
                className="w-full px-4 py-3 bg-bg-soft border border-line rounded-lg font-mono tabular text-ink focus:outline-none focus:border-violet"
              />
            </label>
            <label className="block">
              <span className="block text-sm font-medium mb-2">Intro period (months)</span>
              <input
                type="number"
                min={0}
                max={60}
                value={introMonths}
                onChange={(e) => setIntroMonths(Number(e.target.value) || 0)}
                className="w-full px-4 py-3 bg-bg-soft border border-line rounded-lg font-mono tabular text-ink focus:outline-none focus:border-violet"
              />
            </label>
          </div>

          <label className="block">
            <span className="block text-sm font-medium mb-2">Variable APR after intro (%)</span>
            <input
              type="number"
              min={0}
              step={0.01}
              value={variableApr}
              onChange={(e) => setVariableApr(Number(e.target.value) || 0)}
              className="w-full px-4 py-3 bg-bg-soft border border-line rounded-lg font-mono tabular text-ink focus:outline-none focus:border-violet"
            />
            <span className="block text-xs text-mute mt-1.5">
              National average HELOC rate is roughly 9.0% to 9.75% in early 2026.
            </span>
          </label>

          <div className="grid grid-cols-2 gap-3">
            <label className="block">
              <span className="block text-sm font-medium mb-2">Draw period (years)</span>
              <input
                type="number"
                min={1}
                max={15}
                value={drawYears}
                onChange={(e) => setDrawYears(Number(e.target.value) || 0)}
                className="w-full px-4 py-3 bg-bg-soft border border-line rounded-lg font-mono tabular text-ink focus:outline-none focus:border-violet"
              />
            </label>
            <label className="block">
              <span className="block text-sm font-medium mb-2">Repayment (years)</span>
              <input
                type="number"
                min={5}
                max={30}
                value={repayYears}
                onChange={(e) => setRepayYears(Number(e.target.value) || 0)}
                className="w-full px-4 py-3 bg-bg-soft border border-line rounded-lg font-mono tabular text-ink focus:outline-none focus:border-violet"
              />
            </label>
          </div>

          <label className="flex items-start gap-3 cursor-pointer pt-2">
            <input
              type="checkbox"
              checked={interestOnlyDraw}
              onChange={(e) => setInterestOnlyDraw(e.target.checked)}
              className="mt-1 h-4 w-4 accent-violet"
            />
            <span className="text-sm">
              <span className="font-medium block">Interest-only during draw period</span>
              <span className="text-mute text-xs">
                Most HELOCs allow this. Uncheck to amortize during the draw.
              </span>
            </span>
          </label>
        </div>

        {/* RESULT */}
        <div className="card p-8 bg-ink text-bg">
          <div className="font-mono uppercase text-xs tracking-wider text-bg/60 mb-3">
            Repayment-period monthly
          </div>
          <div className="font-display font-extrabold text-5xl md:text-6xl tabular leading-none mb-2">
            {usd.format(result.repaymentMonthly)}
          </div>
          <div className="text-bg/60 text-sm mb-8">
            Fully amortizing payment after the {drawYears}-year draw period ends. Variable APR can change with the prime rate.
          </div>

          <div className="grid grid-cols-2 gap-5 pt-6 border-t border-white/15">
            <Metric label="Intro monthly" value={usd.format(result.introMonthly)} />
            <Metric label="Post-intro monthly" value={usd.format(result.postIntroMonthly)} />
            <Metric label="End-of-draw balance" value={usd.format(result.endOfDrawBalance)} />
            <Metric label="Total interest (life)" value={usd.format(result.totalInterest)} />
          </div>
        </div>
      </div>

      {/* PHASE BREAKDOWN */}
      <div className="card p-7">
        <div className="font-display font-bold text-lg mb-1">Phase-by-phase breakdown</div>
        <div className="text-mute text-sm mb-5">
          A HELOC has up to three distinct phases. Most lenders allow interest-only payments during the draw period; once it ends the line converts to a fully amortizing loan.
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <PhaseCard
            label="1. Intro period"
            duration={`${introMonths} month${introMonths === 1 ? "" : "s"}`}
            apr={`${introApr.toFixed(2)}% APR`}
            monthly={result.introMonthly}
            note={`Interest-only on a ${usd.format(result.balance)} balance at the promotional rate.`}
          />
          <PhaseCard
            label="2. Draw period"
            duration={`${Math.round(result.drawMonthsRemaining / 12)} years remaining`}
            apr={`${variableApr.toFixed(2)}% APR`}
            monthly={result.postIntroMonthly}
            note={
              interestOnlyDraw
                ? "Interest-only on the drawn balance. Principal does not pay down."
                : "Amortizing payment over the full draw period. Principal pays down."
            }
          />
          <PhaseCard
            label="3. Repayment period"
            duration={`${repayYears} years`}
            apr={`${variableApr.toFixed(2)}% APR`}
            monthly={result.repaymentMonthly}
            note={`Fully amortizing payment on a ${usd.format(result.endOfDrawBalance)} starting balance.`}
          />
        </div>
      </div>
    </div>
  );
}

function PhaseCard({
  label,
  duration,
  apr,
  monthly,
  note,
}: {
  label: string;
  duration: string;
  apr: string;
  monthly: number;
  note: string;
}) {
  return (
    <div className="bg-bg-soft border border-line rounded-2xl p-5">
      <div className="font-mono uppercase text-xs tracking-wider text-mute mb-2">{label}</div>
      <div className="font-display font-bold text-2xl tabular mb-1">{usd.format(monthly)}</div>
      <div className="text-xs text-mute mb-3">
        {duration}, {apr}
      </div>
      <div className="text-sm text-ink-soft leading-snug">{note}</div>
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
