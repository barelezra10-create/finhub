import type { Metadata } from "next";
import Link from "next/link";
import { FAQPageSchema, BreadcrumbListSchema, type FAQItem } from "@/components/schemas";
import { Calculator } from "./calculator";

export const metadata: Metadata = {
  title: "Balance Transfer Calculator: See Real Savings | Fintiex",
  description:
    "Free balance transfer calculator. Enter your current balance, APR, intro APR, intro period, transfer fee, and monthly payment. See exactly how much you save versus staying.",
  alternates: { canonical: "/calculators/balance-transfer" },
};

const faqs: FAQItem[] = [
  {
    question: "How does the calculator work?",
    answer:
      "It runs two month-by-month amortizations side by side. The first one keeps your current card and APR. The second moves the balance plus the transfer fee to the new card, applies the intro APR for the intro period, and reverts to the standard APR afterward. The difference in total interest, minus the transfer fee, is your net savings.",
  },
  {
    question: "What is a typical balance transfer fee?",
    answer:
      "Balance transfer fees run 3% to 5% of the transferred amount, with a minimum of $5 to $10. A 3% fee on a $5,000 balance is $150. If the intro APR is 0% for 18 months and your current APR is 24%, the interest savings usually wipe out the fee within the first 2 to 3 months, leaving a net win.",
  },
  {
    question: "Should I close my old card after the transfer?",
    answer:
      "Usually no. Closing the old card reduces your total credit limit, which raises your credit utilization ratio (the percentage of your limit you are using). A higher ratio drops your credit score. Keep the old card open with a small recurring charge like a streaming subscription on autopay to keep it active and the credit limit intact.",
  },
  {
    question: "Can I do a balance transfer to a card I already have?",
    answer:
      "Some issuers (Chase, Citi, Wells Fargo) periodically email targeted balance transfer offers to existing cardholders. These often have lower or no fees than opening a new card. Log into your account and check the offers tab. If there is no targeted offer, opening a new card with a 0% intro promotion is usually the better economic move.",
  },
  {
    question: "What happens if I cannot pay off the balance before the intro APR ends?",
    answer:
      "The remaining balance switches to the standard APR (often 18% to 29%) starting the day after the intro period ends. Interest does not accrue retroactively on most cards (avoid &quot;deferred interest&quot; offers, which do). To avoid the rate cliff, divide your balance by the number of intro months to find the monthly payment needed to zero it out before the intro ends. The Consumer Financial Protection Bureau&apos;s balance transfer guide walks through the math at consumerfinance.gov.",
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
          { name: "Balance Transfer", href: "/calculators/balance-transfer" },
        ]}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-bg">
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
        <div className="relative max-w-(--max-w-page) mx-auto px-6 pt-16 pb-10">
          <span className="chip chip-violet mb-5">
            <span className="pulse-dot" /> Balance transfer
          </span>
          <h1 className="font-display font-extrabold text-[clamp(2.25rem,5.5vw,4.5rem)] leading-[1.04] tracking-[-0.03em] mb-5 max-w-4xl">
            Should I do a balance transfer?
          </h1>
          <p className="text-lg md:text-xl text-mute max-w-2xl leading-relaxed mb-6">
            Plug in your balance, current APR, new card&apos;s intro APR and period, transfer fee, and monthly payment. The calculator shows the side-by-side payoff and your net savings after the fee.
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
                Two amortizations, side by side.
              </h2>
            </div>
            <div className="col-span-12 md:col-span-8 space-y-5 text-[1.0625rem] leading-relaxed text-ink-soft">
              <p>
                Each month, interest equals the current balance times the APR divided by 12. Your payment goes first to interest, then to principal. We run this calculation every month until the balance hits zero, for both scenarios.
              </p>
              <pre className="bg-ink text-bg p-5 rounded-xl font-mono text-sm overflow-x-auto">
                <code>{`Each month:
  interest = balance * (apr / 12)
  balance = balance + interest - monthly_payment
Net savings = (interest_stay - interest_transfer) - transfer_fee`}</code>
              </pre>
              <p>
                The intro APR applies for the first N months on the transfer scenario, then the standard APR kicks in. The fee is added to the transferred balance and amortized along with the principal, which is the way most issuers actually charge it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TIPS */}
      <section className="max-w-(--max-w-page) mx-auto px-6 py-16">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-4">
            <span className="chip chip-lime mb-4">Watch outs</span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-tight">
              The fine print that wrecks balance transfers.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-8 space-y-5 text-[1.0625rem] leading-relaxed text-ink-soft">
            <p>
              Missing a payment on the transfer card. One missed payment can void the intro APR and apply the standard APR retroactively in rare deferred-interest cases. Set up autopay for at least the minimum on day one.
            </p>
            <p>
              Adding new purchases to the transfer card. New purchases usually accrue at the standard purchase APR, not the intro APR, and your payments often go to the lowest-APR balance first under federal law. That means new spending grows untouched while you pay down the transfer. Use a different card for everyday spending until the balance is zero.
            </p>
            <p>
              Forgetting the rate cliff. Mark the intro APR end date in your calendar. If you have a balance the day after, the entire remaining amount starts accruing at the standard APR. The calculator above shows the payoff timeline so you can size the monthly payment to clear the balance in time.
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
            Find a 0% intro APR card to make the transfer worth it.
          </h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/calculators/which-card" className="pill pill-ink">
              Which card quiz
              <span aria-hidden>{"->"}</span>
            </Link>
            <Link href="/calculators/debt-payoff" className="pill pill-ghost">
              Debt payoff
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
