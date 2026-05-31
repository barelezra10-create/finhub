"use client";

import { useMemo, useState } from "react";

const usd = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

interface Result {
  transferFee: number;
  payoffMonthsCurrent: number;
  payoffMonthsTransfer: number;
  totalInterestCurrent: number;
  totalInterestTransfer: number;
  totalCostCurrent: number;
  totalCostTransfer: number;
  totalInterestSaved: number;
  netSavings: number;
}

function simulate(p: {
  balance: number;
  currentApr: number;
  transferApr: number;
  transferAprMonths: number;
  transferFeePct: number;
  monthlyPayment: number;
}): Result {
  const transferFee = +(p.balance * (p.transferFeePct / 100)).toFixed(2);
  // STAY scenario
  let bal = p.balance;
  let moA = 0;
  let totalInterestA = 0;
  while (bal > 0 && moA < 600) {
    const interest = bal * (p.currentApr / 100 / 12);
    totalInterestA += interest;
    bal = Math.max(0, bal + interest - p.monthlyPayment);
    moA++;
    if (p.monthlyPayment <= interest) break; // payment cannot cover interest
  }
  // TRANSFER scenario (fee added to balance)
  let balB = p.balance + transferFee;
  let moB = 0;
  let totalInterestB = 0;
  while (balB > 0 && moB < 600) {
    const apr = moB < p.transferAprMonths ? p.transferApr : p.currentApr;
    const interest = balB * (apr / 100 / 12);
    totalInterestB += interest;
    balB = Math.max(0, balB + interest - p.monthlyPayment);
    moB++;
    if (p.monthlyPayment <= interest && apr > 0) break;
  }
  return {
    transferFee,
    payoffMonthsCurrent: moA,
    payoffMonthsTransfer: moB,
    totalInterestCurrent: +totalInterestA.toFixed(2),
    totalInterestTransfer: +totalInterestB.toFixed(2),
    totalCostCurrent: +(p.balance + totalInterestA).toFixed(2),
    totalCostTransfer: +(p.balance + transferFee + totalInterestB).toFixed(2),
    totalInterestSaved: +(totalInterestA - totalInterestB).toFixed(2),
    netSavings: +(totalInterestA - totalInterestB - transferFee).toFixed(2),
  };
}

export function Calculator() {
  const [balance, setBalance] = useState(5000);
  const [currentApr, setCurrentApr] = useState(24);
  const [transferApr, setTransferApr] = useState(0);
  const [transferMonths, setTransferMonths] = useState(18);
  const [feePct, setFeePct] = useState(3);
  const [payment, setPayment] = useState(300);

  const result = useMemo(
    () =>
      simulate({
        balance,
        currentApr,
        transferApr,
        transferAprMonths: transferMonths,
        transferFeePct: feePct,
        monthlyPayment: payment,
      }),
    [balance, currentApr, transferApr, transferMonths, feePct, payment],
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* INPUTS */}
      <div className="card p-7 space-y-5">
        <div className="font-mono uppercase text-xs tracking-wider text-mute mb-2">Inputs</div>

        <Input label="Current balance ($)" value={balance} onChange={setBalance} />
        <Input label="Current APR (%)" value={currentApr} onChange={setCurrentApr} step={0.1} />
        <Input
          label="Transfer intro APR (%)"
          value={transferApr}
          onChange={setTransferApr}
          step={0.1}
        />
        <Input label="Intro period (months)" value={transferMonths} onChange={setTransferMonths} />
        <Input label="Transfer fee (%)" value={feePct} onChange={setFeePct} step={0.5} />
        <Input label="Monthly payment ($)" value={payment} onChange={setPayment} />
      </div>

      {/* RESULT */}
      <div className="card p-8 bg-ink text-bg">
        <div className="font-mono uppercase text-xs tracking-wider text-bg/60 mb-3">
          Net savings if you transfer
        </div>
        <div
          className={`font-display font-extrabold text-5xl md:text-6xl tabular leading-none mb-2 ${
            result.netSavings >= 0 ? "text-lime" : "text-rose"
          }`}
        >
          {usd.format(result.netSavings)}
        </div>
        <div className="text-bg/60 text-sm mb-8">
          Interest you save by moving to the intro APR, minus the transfer fee of {usd.format(result.transferFee)}.
        </div>

        <div className="grid grid-cols-2 gap-5 pt-6 border-t border-white/15">
          <Metric
            label="Payoff (stay)"
            value={
              result.payoffMonthsCurrent >= 600
                ? "Never at this payment"
                : `${result.payoffMonthsCurrent} mo`
            }
          />
          <Metric
            label="Payoff (transfer)"
            value={
              result.payoffMonthsTransfer >= 600
                ? "Never at this payment"
                : `${result.payoffMonthsTransfer} mo`
            }
          />
          <Metric label="Interest if you stay" value={usd.format(result.totalInterestCurrent)} />
          <Metric
            label="Interest if you transfer"
            value={usd.format(result.totalInterestTransfer)}
          />
          <Metric label="Transfer fee" value={usd.format(result.transferFee)} />
          <Metric label="Interest saved" value={usd.format(result.totalInterestSaved)} />
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
}: {
  label: string;
  value: number;
  onChange: (n: number) => void;
  step?: number;
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
