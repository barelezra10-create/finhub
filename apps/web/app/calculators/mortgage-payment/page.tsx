import type { Metadata } from "next";
import Link from "next/link";
import { FAQPageSchema, BreadcrumbListSchema, type FAQItem } from "@/components/schemas";
import { Calculator } from "./calculator";

export const metadata: Metadata = {
  title: "Mortgage Payment Calculator | Fintiex",
  description:
    "Free mortgage payment calculator. Enter price, down payment, rate, and term. See monthly principal and interest, total interest paid, and full lifetime cost. No email required.",
  alternates: { canonical: "/calculators/mortgage-payment" },
};

const faqs: FAQItem[] = [
  {
    question: "Does this calculator include property tax and insurance?",
    answer:
      "No. This tool calculates principal and interest (P&I) only. Most lenders escrow property tax and homeowners insurance into your monthly payment, which can add 20% to 35% on top of the P&I number. Add roughly 1% of home value per year for tax plus $1,200 to $2,400 per year for insurance to estimate the full PITI payment.",
  },
  {
    question: "What rate should I plug in?",
    answer:
      "Use the current Freddie Mac Primary Mortgage Market Survey rate as a baseline. As of early 2026 the 30-year fixed averages around 6.85% nationally. Your actual quote depends on credit score, down payment, loan size, and property type. Borrowers with a 760+ FICO and 20% down typically beat the average by 10 to 25 basis points.",
  },
  {
    question: "Should I pick 15 or 30 years?",
    answer:
      "A 30-year keeps the payment low and gives you flexibility. A 15-year cuts total interest paid by roughly 60% but raises the monthly by 30% to 45%. The smarter middle path for most buyers: take the 30-year and make extra principal payments when you can. You keep the lower required payment as a safety valve while shortening the loan in practice.",
  },
  {
    question: "How does the down payment affect the math?",
    answer:
      "Down payment reduces the loan principal one to one. A 20% down payment on a $400K home means a $320K loan instead of a $400K loan. Going below 20% triggers private mortgage insurance (PMI), which typically runs 0.3% to 1.5% of the loan amount per year. PMI usually drops automatically once you cross 22% equity.",
  },
  {
    question: "Is this calculator accurate?",
    answer:
      "Yes, for principal and interest. The formula is the standard amortization equation used by every U.S. lender. The output matches Freddie Mac and Fannie Mae loan estimates to the dollar on standard 30-year fixed terms. Lender quotes may differ slightly because of points, lender credits, or prepaid interest at closing.",
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
          { name: "Mortgage Payment", href: "/calculators/mortgage-payment" },
        ]}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-bg">
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
        <div className="relative max-w-(--max-w-page) mx-auto px-6 pt-16 pb-10">
          <span className="chip chip-violet mb-5">
            <span className="pulse-dot" /> Mortgage Calculator
          </span>
          <h1 className="font-display font-extrabold text-[clamp(2.25rem,5.5vw,4.5rem)] leading-[1.04] tracking-[-0.03em] mb-5 max-w-4xl">
            Mortgage payment calculator.
          </h1>
          <p className="text-lg md:text-xl text-mute max-w-2xl leading-relaxed mb-6">
            Type in price, down payment, rate, and term. See the monthly principal and interest, the total interest you will pay over the life of the loan, and the all-in lifetime cost.
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
                The standard mortgage amortization formula.
              </h2>
            </div>
            <div className="col-span-12 md:col-span-8 space-y-5 text-[1.0625rem] leading-relaxed text-ink-soft">
              <p>
                Every U.S. mortgage lender uses the same equation to calculate your monthly principal and interest payment. There is no proprietary math here. The formula is:
              </p>
              <pre className="bg-ink text-bg p-5 rounded-xl font-mono text-sm overflow-x-auto">
                <code>M = P * [r(1+r)^n] / [(1+r)^n - 1]</code>
              </pre>
              <p>
                Where M is the monthly payment, P is the loan principal (price minus down payment), r is the monthly interest rate (annual rate divided by 12), and n is the total number of payments (years times 12). On a $320,000 loan at 6.85% for 30 years, that math returns roughly $2,098 per month.
              </p>
              <p>
                The first month, the bulk of that payment is interest. Around year 18 of a 30-year loan, the principal portion finally exceeds the interest portion. That crossover is why making extra principal payments early in the loan saves so much money: every extra dollar of principal in year one removes 30 years of compounded interest from the total tab.
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
              What most calculators leave out.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-8 space-y-5 text-[1.0625rem] leading-relaxed text-ink-soft">
            <p>
              Forgetting the escrow load. The principal and interest number is only part of the actual monthly outflow. Property tax averages 1.1% of home value nationally per year. Homeowners insurance averages $1,800 per year. On a $400K home that is roughly $550 per month layered on top of P&I. Plan for it.
            </p>
            <p>
              Ignoring PMI when down payment is under 20%. Private mortgage insurance kicks in at 19.99% down and typically costs 0.5% to 1.0% of the loan per year. On a $320K loan at 0.7% PMI that is $187 per month until you build equity to 22% of original value.
            </p>
            <p>
              Anchoring on the headline rate. Discount points buy down your rate but cost cash upfront. One point (1% of the loan) typically reduces the rate by 0.25 percentage points. On a 30-year loan held to term that math usually pencils out, but most borrowers refinance or move within 7 to 10 years. Run the break-even on points the same way you would for refinancing.
            </p>
            <p>
              Skipping shop time. The Consumer Financial Protection Bureau finds that getting just one extra rate quote saves the median borrower roughly $1,500 over the life of the loan. Three quotes saves closer to $5,000. Lock with the best one within 30 days of having a ratified contract.
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
            Locked your rate? Run the refi math the day rates drop 50 basis points.
          </h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/calculators/refinance-break-even" className="pill pill-ink">
              Refi break-even
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
