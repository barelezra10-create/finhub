import type { Metadata } from "next";
import Link from "next/link";
import { FAQPageSchema, BreadcrumbListSchema, type FAQItem } from "@/components/schemas";
import { Calculator } from "./calculator";

export const metadata: Metadata = {
  title: "Savings Goal Calculator | Fintiex",
  description:
    "Free savings goal calculator. Enter your target, current balance, monthly contribution, and APY. See exactly how many months until you hit the goal. No email required.",
  alternates: { canonical: "/calculators/savings-goal" },
};

const faqs: FAQItem[] = [
  {
    question: "What savings rate should I plug in?",
    answer:
      "Use the APY of the actual account where you keep the money. As of early 2026 the top no-fee high-yield savings accounts pay 4.50% to 4.85% APY. If your money sits in a default checking account at 0.01%, plug that in. The compounding effect is small over short horizons but real over multi-year goals.",
  },
  {
    question: "What is the difference between APY and APR for savings?",
    answer:
      "APY (annual percentage yield) accounts for compounding. APR (annual percentage rate) does not. For savings products, banks always quote APY because it reflects your actual earnings. For loans, lenders quote APR because it reflects your borrowing cost. Use APY when filling in this calculator. The number on your bank statement is APY.",
  },
  {
    question: "Should I aim for a specific savings rate of income?",
    answer:
      "The standard guidance is 20% of gross income split across emergency fund, retirement, and other goals, also known as the 50/30/20 rule from the Consumer Financial Protection Bureau. For an emergency fund specifically, target 3 to 6 months of expenses. The exact percentage matters less than picking a number, automating the transfer, and not stopping.",
  },
  {
    question: "Does this calculator account for inflation?",
    answer:
      "No. The output is in nominal dollars. If your goal is far in the future, today&rsquo;s $30K target will not feel like $30K when you reach it. A rough adjustment: assume 2.5% inflation. To preserve purchasing power on a 10-year goal, raise the goal amount by roughly 28% (1.025^10).",
  },
  {
    question: "What if I miss months?",
    answer:
      "The calculator assumes a steady monthly contribution every month. If you skip months or contribute less in some, the actual timeline will be longer. The fix is to automate. Setting up a fixed automatic transfer from checking to savings on payday solves the consistency problem and gets you to the goal close to the projected timeline.",
  },
];

export default function Page() {
  return (
    <>
      <FAQPageSchema items={faqs} />
      <BreadcrumbListSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Calculators", href: "/calculators" },
          { name: "Savings Goal", href: "/calculators/savings-goal" },
        ]}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-bg">
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
        <div className="relative max-w-(--max-w-page) mx-auto px-6 pt-16 pb-10">
          <span className="chip chip-violet mb-5">
            <span className="pulse-dot" /> Savings Goal
          </span>
          <h1 className="font-display font-extrabold text-[clamp(2.25rem,5.5vw,4.5rem)] leading-[1.04] tracking-[-0.03em] mb-5 max-w-4xl">
            Savings goal calculator.
          </h1>
          <p className="text-lg md:text-xl text-mute max-w-2xl leading-relaxed mb-6">
            Enter what you want to save, what you have today, what you can put in monthly, and the APY on the account. The calculator returns the exact month you cross the finish line.
          </p>
          <div className="flex items-center gap-6 text-sm text-mute">
            <div className="flex items-center gap-2">
              <span className="font-mono tabular text-ink font-semibold">0</span> email walls
            </div>
            <div className="flex items-center gap-2">
              <span className="font-mono tabular text-ink font-semibold">0</span> popups
            </div>
            <div className="flex items-center gap-2">
              <span className="font-mono tabular text-ink font-semibold">100%</span> formula visible
            </div>
          </div>
        </div>
      </section>

      {/* CALCULATOR */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-16">
        <Calculator />
      </section>

      {/* HOW IT WORKS */}
      <section className="border-t border-line bg-bg-soft/50">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-16">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-4">
              <span className="chip chip-mute mb-4">How this works</span>
              <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-tight">
                Iterative monthly simulation.
              </h2>
            </div>
            <div className="col-span-12 md:col-span-8 space-y-5 text-[1.0625rem] leading-relaxed text-ink-soft">
              <p>
                Closed-form formulas exist for compound interest with regular deposits, but for a savings goal we want the exact month the balance crosses the target. Iterating month by month is cleaner. Each month, the calculator multiplies the current balance by (1 + APY/12), then adds the monthly contribution. The loop stops when balance crosses the goal.
              </p>
              <pre className="bg-ink text-bg p-5 rounded-xl font-mono text-sm overflow-x-auto">
                <code>{`balance = current
months = 0
while balance < goal:
  balance = balance * (1 + APY/12) + contribution
  months += 1`}</code>
              </pre>
              <p>
                The simulation caps at 600 months (50 years). If you cannot reach the goal within 50 years at the inputs given, the math is telling you the contribution rate is too low. Raise the monthly amount or the APY (move to a higher-yield account) until the timeline becomes realistic.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TIPS */}
      <section className="max-w-(--max-w-page) mx-auto px-6 py-16">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-4">
            <span className="chip chip-lime mb-4">Tips</span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-tight">
              How to actually reach the goal.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-8 space-y-5 text-[1.0625rem] leading-relaxed text-ink-soft">
            <p>
              Move the money the day it lands. Set the automatic transfer to fire on payday, not on the 15th of the month. By payday + 2 you will have already moved the savings out before discretionary spending pulls from the same checking account. The Federal Reserve&rsquo;s SCF data shows automatic savers reach goals far more reliably than manual ones.
            </p>
            <p>
              Pick the right account for the timeline. For a 6-month emergency fund, a no-fee high-yield savings account at 4.50% to 4.85% is the right home. For a 24 to 60 month goal, a CD ladder locks in current rates. For a 7+ year goal, an index fund in a tax-advantaged account historically returns more, with volatility as the trade-off.
            </p>
            <p>
              Bump the goal target with inflation if the timeline is more than 3 years out. A $30K target today is closer to $34K in real-purchasing-power terms 5 years from now. The calculator works in nominal dollars; mentally adjust the goal upward for long timelines so you actually preserve buying power.
            </p>
            <p>
              Make windfall deposits. Tax refunds, bonuses, and one-off windfalls can shave months off the timeline. The Consumer Financial Protection Bureau recommends treating any windfall as savings unless a specific bill is due. Adding a $3K refund to a savings goal that needs $30K cuts the timeline by roughly 10%.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-line bg-bg-soft/50">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-16">
          <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight mb-10">
            Frequently asked questions
          </h2>
          <div className="space-y-5 max-w-3xl">
            {faqs.map((f) => (
              <div key={f.question} className="card p-6">
                <h3 className="font-display font-bold text-lg mb-2">{f.question}</h3>
                <p className="text-ink-soft leading-relaxed">{f.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-lime border-y border-ink">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <h2 className="font-display font-extrabold text-2xl md:text-3xl tracking-tight max-w-2xl leading-tight">
            Park the money where it actually earns. Top FDIC-insured rates today.
          </h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/calculators/compound-interest" className="pill pill-ink">
              Compound interest
              <span aria-hidden>→</span>
            </Link>
            <Link href="/savings" className="pill pill-ghost">
              Top savings rates
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
