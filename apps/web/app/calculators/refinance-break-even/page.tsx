import type { Metadata } from "next";
import Link from "next/link";
import { FAQPageSchema, BreadcrumbListSchema, type FAQItem } from "@/components/schemas";
import { Calculator } from "./calculator";

export const metadata: Metadata = {
  title: "Refinance Break-Even Calculator | Fintiex",
  description:
    "Free refinance break-even calculator. Enter your balance, current rate, new rate, and closing costs. See exactly how many months until your refi pays for itself.",
  alternates: { canonical: "/calculators/refinance-break-even" },
};

const faqs: FAQItem[] = [
  {
    question: "What is the break-even point on a refinance?",
    answer:
      "The break-even point is the number of months it takes for your monthly savings to fully offset the closing costs of the refinance. Closing costs divided by monthly savings equals break-even months. If costs are $4,500 and you save $150 per month, break-even hits at month 30. Past that point, every dollar of savings is net gain.",
  },
  {
    question: "How much does the rate need to drop?",
    answer:
      "The old rule of thumb was a 1% rate drop. That rule is outdated. With closing costs ranging from $3,000 to $6,000 on a typical no-cash-out refi, even a 50 basis point drop can break even inside three years on a $300K+ balance. Run the actual numbers. The threshold is balance-dependent, not a universal rule.",
  },
  {
    question: "What counts as closing costs?",
    answer:
      "Lender origination fees, appraisal fee, title insurance, recording fees, and prepaid items like interim interest and escrow setup. Total typically runs 2% to 5% of the loan amount. A no-cost refinance shifts these costs into a higher rate instead of cash at the table. The math changes; break-even effectively becomes immediate, but lifetime cost rises.",
  },
  {
    question: "Should I refinance if I plan to move soon?",
    answer:
      "Only if you plan to hold the loan past the break-even point. If your break-even is 36 months and you expect to sell or move in 24, the refinance loses money. The savings never catch up to the closing costs. Be realistic about your timeline before pulling the trigger.",
  },
  {
    question: "Does this calculator handle cash-out refinances?",
    answer:
      "This tool is built for rate-and-term refinances where the new balance equals the old balance. For cash-out refinances, the new balance is higher than the old, which complicates the comparison. Use a separate amortization tool for cash-out scenarios; the break-even framework still applies but the inputs are different.",
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
          { name: "Refinance Break-Even", href: "/calculators/refinance-break-even" },
        ]}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-bg">
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
        <div className="relative max-w-(--max-w-page) mx-auto px-6 pt-16 pb-10">
          <span className="chip chip-violet mb-5">
            <span className="pulse-dot" /> Refinance Calculator
          </span>
          <h1 className="font-display font-extrabold text-[clamp(2.25rem,5.5vw,4.5rem)] leading-[1.04] tracking-[-0.03em] mb-5 max-w-4xl">
            Refinance break-even calculator.
          </h1>
          <p className="text-lg md:text-xl text-mute max-w-2xl leading-relaxed mb-6">
            See exactly how many months it takes for your refinance savings to offset the closing costs. Run the numbers before you assume the rate has to drop further.
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
                Two amortizations, one division.
              </h2>
            </div>
            <div className="col-span-12 md:col-span-8 space-y-5 text-[1.0625rem] leading-relaxed text-ink-soft">
              <p>
                The break-even calculation is simple in structure. Calculate the old monthly payment using the standard amortization formula. Calculate the new monthly payment with the same balance and term but the new rate. Subtract to get the monthly savings. Divide closing costs by that savings number. The result is your break-even month.
              </p>
              <pre className="bg-ink text-bg p-5 rounded-xl font-mono text-sm overflow-x-auto">
                <code>M = P * [r(1+r)^n] / [(1+r)^n - 1]</code>
                <br />
                <code>break_even_months = closing_costs / (M_old - M_new)</code>
              </pre>
              <p>
                Example: a $300,000 balance at 7.25% on a 30-year fixed runs $2,046 per month. Refinancing into 6.50% drops it to $1,896. Monthly savings of $150. With $4,500 in closing costs, break-even hits at month 30. Hold the loan past 2.5 years and you come out ahead.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TIPS */}
      <section className="max-w-(--max-w-page) mx-auto px-6 py-16">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-4">
            <span className="chip chip-lime mb-4">Common mistakes</span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-tight">
              What people miss when they run this math.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-8 space-y-5 text-[1.0625rem] leading-relaxed text-ink-soft">
            <p>
              Resetting to a new 30 year. Most borrowers refinance into a fresh 30-year loan even though they are 5 years into the old one. Doing so adds 5 years of interest payments back to the tail end. The lifetime savings number this calculator shows accounts for this on the new term, but the comparison gets cleaner if you refinance into a 25-year or commit to making extra principal payments to keep the original payoff date.
            </p>
            <p>
              Forgetting the rate-lock window. Lenders typically lock for 30, 45, or 60 days. If you start the process and rates drop further before close, ask about a one-time float-down. Most lenders allow it for a small fee.
            </p>
            <p>
              Ignoring no-cost refi math. A no-cost refinance has no out-of-pocket closing costs, but the rate is typically 0.25 to 0.50 percentage points higher. The break-even is essentially zero (no costs to recover), but lifetime savings are smaller. Compare against a traditional refi over your expected hold period.
            </p>
            <p>
              Cherry-picking the lender quote. Get three Loan Estimates within a 14-day window. The Consumer Financial Protection Bureau structures the credit-pull rules so multiple inquiries inside that window count as a single inquiry on your credit report. Use that window. Median savings between best and worst quote: 25 to 50 basis points.
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
            Compare your new rate against today&rsquo;s top 30-year fixed lenders.
          </h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/calculators/mortgage-payment" className="pill pill-ink">
              Mortgage payment
              <span aria-hidden>→</span>
            </Link>
            <Link href="/mortgages" className="pill pill-ghost">
              Today&rsquo;s mortgage rates
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
