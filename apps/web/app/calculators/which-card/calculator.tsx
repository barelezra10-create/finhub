"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import type { CardData } from "@/lib/cards";

type Goal = "cashback" | "travel" | "build" | "balance-transfer" | "business";

interface Answers {
  goal: Goal;
  creditScore: number;
  annualFeeOk: boolean;
}

const QUESTIONS = [
  {
    key: "goal",
    label: "What is your main goal?",
    options: [
      { value: "cashback", label: "Earn cash back" },
      { value: "travel", label: "Earn travel rewards" },
      { value: "build", label: "Build or rebuild credit" },
      { value: "balance-transfer", label: "Pay down a balance" },
      { value: "business", label: "Get a business card" },
    ],
  },
  {
    key: "creditScore",
    label: "What is your credit score?",
    options: [
      { value: 500, label: "Below 580" },
      { value: 620, label: "580 to 669" },
      { value: 700, label: "670 to 739" },
      { value: 760, label: "740 to 799" },
      { value: 820, label: "800 or above" },
    ],
  },
  {
    key: "annualFeeOk",
    label: "OK paying an annual fee?",
    options: [
      { value: false, label: "No, keep it free" },
      { value: true, label: "Yes, if it pays for itself" },
    ],
  },
] as const;

function recommendCards(cards: CardData[], a: Answers): CardData[] {
  const goalToCategory: Record<Goal, string[]> = {
    cashback: ["cashback"],
    travel: ["travel", "rewards", "miles", "hotel"],
    build: ["secured", "rebuilding", "student", "no-credit"],
    "balance-transfer": ["balance-transfer", "cashback"],
    business: ["business"],
  };
  const wanted = goalToCategory[a.goal];
  return cards
    .filter((c) => (c.category ?? []).some((cat) => wanted.includes(cat)))
    .filter((c) => c.credit_score_required.recommended <= a.creditScore + 30)
    .filter((c) => a.annualFeeOk || c.annual_fee === 0)
    .sort((x, y) => (y.signup_bonus_value_usd ?? 0) - (x.signup_bonus_value_usd ?? 0))
    .slice(0, 3);
}

export function Calculator({ cards }: { cards: CardData[] }) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Partial<Answers>>({});

  const recs = useMemo(() => {
    if (step < QUESTIONS.length) return [];
    return recommendCards(cards, answers as Answers);
  }, [cards, step, answers]);

  function pick(key: string, value: unknown) {
    setAnswers((prev) => ({ ...prev, [key]: value }));
    setStep((s) => s + 1);
  }

  function reset() {
    setAnswers({});
    setStep(0);
  }

  if (step >= QUESTIONS.length) {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* SUMMARY */}
        <div className="card p-7 space-y-5">
          <div className="font-mono uppercase text-xs tracking-wider text-mute mb-2">Your answers</div>
          <div className="space-y-3 text-sm">
            <Row label="Goal" value={String(answers.goal)} />
            <Row label="Credit score" value={`~${answers.creditScore}`} />
            <Row label="Annual fee ok" value={answers.annualFeeOk ? "Yes" : "No"} />
          </div>
          <button
            type="button"
            onClick={reset}
            className="pill pill-ghost text-sm"
          >
            Start over
          </button>
        </div>
        {/* RESULTS */}
        <div className="card p-8 bg-ink text-bg">
          <div className="font-mono uppercase text-xs tracking-wider text-bg/60 mb-3">
            Top picks for you
          </div>
          {recs.length === 0 ? (
            <p className="text-bg/70 leading-relaxed">
              No matches in our current 50-card dataset. Try widening your answers (raise the credit score band or accept an annual fee).
            </p>
          ) : (
            <ol className="space-y-4">
              {recs.map((c, i) => (
                <li key={c.slug} className="border-b border-white/10 last:border-0 pb-4 last:pb-0">
                  <div className="font-mono text-xs text-bg/60 mb-1">#{i + 1}</div>
                  <div className="font-display font-bold text-lg leading-snug mb-1">
                    {c.issuer} {c.name}
                  </div>
                  <div className="text-bg/70 text-sm mb-3">
                    {c.signup_bonus ?? "Solid all-around pick"}
                    {c.annual_fee > 0 ? ` · $${c.annual_fee} annual fee` : " · $0 annual fee"}
                  </div>
                  <Link
                    href={`/credit-cards/${c.slug}`}
                    className="text-lime text-sm font-semibold hover:underline"
                  >
                    Read review {"->"}
                  </Link>
                </li>
              ))}
            </ol>
          )}
        </div>
      </div>
    );
  }

  const q = QUESTIONS[step]!;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* QUESTION */}
      <div className="card p-7 space-y-5">
        <div className="font-mono uppercase text-xs tracking-wider text-mute mb-2">
          Step {step + 1} of {QUESTIONS.length}
        </div>
        <div className="font-display font-extrabold text-2xl tracking-tight leading-tight">
          {q.label}
        </div>
        <div className="space-y-2">
          {q.options.map((opt) => (
            <button
              key={String(opt.value)}
              type="button"
              onClick={() => pick(q.key, opt.value)}
              className="w-full text-left px-4 py-3 bg-bg-soft border border-line rounded-lg text-ink hover:border-violet hover:bg-violet/5 transition-colors text-sm font-medium"
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>
      {/* PROGRESS */}
      <div className="card p-8 bg-ink text-bg">
        <div className="font-mono uppercase text-xs tracking-wider text-bg/60 mb-3">
          Progress
        </div>
        <div className="font-display font-extrabold text-5xl md:text-6xl tabular leading-none mb-2">
          {step}/{QUESTIONS.length}
        </div>
        <div className="text-bg/60 text-sm mb-8">
          Answer three quick questions and we will narrow down 50 cards to your top three.
        </div>
        <div className="space-y-3">
          {QUESTIONS.map((qq, i) => (
            <div key={qq.key} className="flex items-center gap-3 text-sm">
              <span
                className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-mono ${
                  i < step
                    ? "bg-lime text-ink"
                    : i === step
                    ? "bg-violet text-bg"
                    : "bg-white/10 text-bg/40"
                }`}
              >
                {i + 1}
              </span>
              <span className={i <= step ? "text-bg" : "text-bg/40"}>{qq.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between border-b border-line-soft pb-2">
      <span className="text-mute">{label}</span>
      <span className="font-mono text-ink">{value}</span>
    </div>
  );
}
