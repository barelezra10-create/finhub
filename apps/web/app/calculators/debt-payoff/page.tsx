import type { Metadata } from "next";
import Link from "next/link";
import { FAQPageSchema, BreadcrumbListSchema, type FAQItem } from "@/components/schemas";
import { Calculator } from "./calculator";

export const metadata: Metadata = {
  title: "Credit Card Payoff Calculator | Fintiex",
  description:
    "Free credit card debt payoff calculator. Plug in balance, APR, and monthly payment. See total months, total interest paid, and the cost of carrying the balance.",
  alternates: { canonical: "/calculators/debt-payoff" },
};

const faqs: FAQItem[] = [
  {
    question: "What is the difference between avalanche and snowball?",
    answer:
      "With multiple cards, the avalanche method pays the highest-APR card first while making minimums on the rest. It minimizes total interest paid. The snowball method pays the smallest balance first regardless of APR, prioritizing psychological wins. Avalanche is mathematically optimal. Snowball is behaviorally easier for some people. Both work; pick the one you will stick with.",
  },
  {
    question: "What APR is on my card?",
    answer:
      "Check your most recent monthly statement. The purchase APR is listed prominently. As of early 2026 the average credit card APR is 22.5% per the Federal Reserve&rsquo;s G.19 report, with subprime cards charging 28% to 32%. The penalty APR (which kicks in after a missed payment) can climb to 29.99% even on prime cards.",
  },
  {
    question: "Why is paying just the minimum so expensive?",
    answer:
      "Card minimums are typically calculated as 1% of the balance plus interest accrued, with a $25 to $35 floor. On a $7,500 balance at 22.99% APR, the minimum is roughly $200, but $144 of that is interest. Only $56 reduces the principal. At that pace the balance takes over 25 years to pay off and you pay roughly $11,000 in interest on $7,500 of original spending.",
  },
  {
    question: "Should I do a balance transfer?",
    answer:
      "If you can move the balance to a 0% APR introductory card and aggressively pay it down during the intro window, yes. Top balance transfer cards offer 21 months at 0% with a 3% to 5% transfer fee. On a $7,500 balance the fee is $225 to $375, and you save thousands in interest if the balance is fully retired before the intro period ends. If not, the deferred interest can blow up.",
  },
  {
    question: "What about debt consolidation loans?",
    answer:
      "A personal loan at 9% to 14% APR can replace 22% APR card debt. The math works whenever the loan APR is meaningfully lower than the card APR and you commit to not running the cards back up. Lenders like SoFi, LightStream, and Discover Personal Loans dominate this category. Pull your APR quote (usually a soft pull) before deciding.",
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
          { name: "Debt Payoff", href: "/calculators/debt-payoff" },
        ]}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-bg">
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
        <div className="relative max-w-(--max-w-page) mx-auto px-6 pt-16 pb-10">
          <span className="chip chip-violet mb-5">
            <span className="pulse-dot" /> Debt Payoff
          </span>
          <h1 className="font-display font-extrabold text-[clamp(2.25rem,5.5vw,4.5rem)] leading-[1.04] tracking-[-0.03em] mb-5 max-w-4xl">
            Credit card payoff calculator.
          </h1>
          <p className="text-lg md:text-xl text-mute max-w-2xl leading-relaxed mb-6">
            Drop in your balance, APR, and monthly payment. The calculator simulates month by month and tells you exactly how long until the balance hits zero, plus the total interest you will pay along the way.
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
                Month-by-month simulation.
              </h2>
            </div>
            <div className="col-span-12 md:col-span-8 space-y-5 text-[1.0625rem] leading-relaxed text-ink-soft">
              <p>
                Each month the calculator does three things. First: calculate interest as balance times (APR / 12). Second: subtract that interest from your monthly payment to find the principal portion. Third: subtract the principal from the balance. Loop until the balance reaches zero.
              </p>
              <pre className="bg-ink text-bg p-5 rounded-xl font-mono text-sm overflow-x-auto">
                <code>{`while balance > 0:
  interest = balance * (APR / 12)
  principal = payment - interest
  balance -= principal
  months += 1`}</code>
              </pre>
              <p>
                The math has one critical gotcha. If your monthly payment is less than the first month&rsquo;s interest charge, the balance grows every month instead of shrinking. The calculator detects this and flags it. Your minimum effective payment must exceed the monthly interest to make any progress at all.
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
              How to actually escape the balance.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-8 space-y-5 text-[1.0625rem] leading-relaxed text-ink-soft">
            <p>
              Stop using the card while you pay it down. Continuing to charge new purchases on a card you are trying to pay off makes the balance a moving target. Switch to a debit card or cash for daily spending until the original balance reaches zero. The Consumer Financial Protection Bureau&rsquo;s 2024 data shows that consumers who pause card use during payoff finish 40% faster than those who continue charging.
            </p>
            <p>
              Increase the payment by any amount, even small. On a $7,500 balance at 22.99% APR, raising the payment from $250 to $300 per month cuts the payoff time from roughly 47 months to 33 months. Total interest drops from $4,200 to $2,700. An extra $50 per month saves $1,500.
            </p>
            <p>
              Call and ask for an APR reduction. The Federal Reserve&rsquo;s 2024 survey found that roughly 70% of cardholders who request a rate reduction get one. The average reduction is 4 to 6 percentage points. Five minutes on the phone, no fee, no application. Worth doing before any other strategy.
            </p>
            <p>
              Consider a 0% balance transfer if you can pay it off within the intro window. The top transfer cards offer 21 months at 0% with a 3% transfer fee. On $7,500 the fee is $225. If you commit to paying $360 per month, the balance is gone before the intro period ends and total cost is $7,725 versus $11,700 at 22.99% APR. Set the transfer up the same day you read this.
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
            See whether a personal loan beats your card&rsquo;s APR.
          </h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/calculators/personal-loan-payoff" className="pill pill-ink">
              Personal loan payoff
              <span aria-hidden>→</span>
            </Link>
            <Link href="/loans" className="pill pill-ghost">
              Today&rsquo;s loan rates
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
