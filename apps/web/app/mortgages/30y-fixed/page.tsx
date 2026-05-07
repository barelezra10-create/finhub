import Link from "next/link";
import type { Metadata } from "next";
import { FAQPageSchema, BreadcrumbListSchema, type FAQItem } from "@/components/schemas";

export const metadata: Metadata = {
  title: "30-Year Fixed Mortgage Rates 2026 | Fintiex",
  description:
    "30-year fixed mortgage rates today, average APR 6.85%. Pros, cons, and who it suits. Real numbers, plain English, no paid placements. Updated daily by Fintiex.",
  alternates: { canonical: "/mortgages/30y-fixed" },
};

const faqItems: FAQItem[] = [
  {
    question: "Why is the 30-year fixed the most popular mortgage?",
    answer:
      "It spreads the loan across 360 monthly payments, which gives the lowest fixed monthly payment for any given loan size. Over 80% of new home loan originations in the US are 30-year fixed loans, according to Freddie Mac PMMS data, because the predictable payment fits most household budgets.",
  },
  {
    question: "How much more interest do you pay on a 30-year vs a 15-year?",
    answer:
      "On a $400,000 loan at the May 2026 averages (6.85% for 30Y, 6.10% for 15Y), the 30-year totals roughly $544,000 in interest over the life of the loan. The 15-year totals about $211,000. The 30-year costs roughly $333,000 more in interest, but the monthly payment is about $785 lower.",
  },
  {
    question: "Can you pay off a 30-year early?",
    answer:
      "Yes. Federal law prohibits prepayment penalties on most owner-occupied residential mortgages originated after 2014, per the CFPB. Adding one extra principal payment per year can shave roughly four years off a 30-year term. Check your servicer rules so extra payments are applied to principal, not the next month.",
  },
  {
    question: "Is the rate the same as the APR?",
    answer:
      "No. The interest rate is the cost of borrowing the principal. APR includes that rate plus lender fees, points, and mortgage insurance, spread across the loan term. APR is the apples-to-apples figure when you compare lenders. Two lenders with the same 6.75% rate can have very different APRs once fees are included.",
  },
  {
    question: "What credit score do you need for the lowest 30-year rate?",
    answer:
      "Most lenders reserve their best advertised rates for borrowers with a 760 FICO or higher. A score from 700 to 759 typically adds about 0.25 to 0.50 percentage points to the rate. Below 680, expect a rate at least 0.75 points higher and steeper PMI if you put less than 20% down.",
  },
  {
    question: "When does it make sense to choose 30Y over 15Y?",
    answer:
      "Choose the 30-year when you want maximum monthly cash flow for emergency savings, retirement contributions, or other goals. Choose the 15-year when you can comfortably afford the higher payment and you prefer to be debt-free sooner. Many buyers split the difference by taking a 30-year and paying it like a 20-year.",
  },
];

export default function Page() {
  return (
    <>
      <FAQPageSchema items={faqItems} />
      <BreadcrumbListSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Mortgages", href: "/mortgages" },
          { name: "30-Year Fixed", href: "/mortgages/30y-fixed" },
        ]}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-bg">
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
        <div className="relative max-w-(--max-w-page) mx-auto px-6 pt-20 pb-16">
          <span className="chip chip-violet mb-6">
            <span className="pulse-dot" /> 30Y fixed updated today
          </span>
          <h1 className="font-display font-extrabold text-[clamp(2.5rem,6vw,5rem)] leading-[1.02] tracking-[-0.03em] mb-6 max-w-3xl">
            The 30-year fixed: predictable, popular, sometimes pricey.
          </h1>
          <p className="text-lg md:text-xl text-mute leading-relaxed max-w-2xl mb-8">
            The 30-year fixed-rate mortgage is still the default home loan in America. It locks the rate for the full term and keeps the monthly payment as low as it can go. The trade-off is total interest paid. We dug into the math so you can see what the choice actually costs.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/calculators/mortgage-payment" className="pill pill-ink">
              Calculate your payment
              <span aria-hidden>→</span>
            </Link>
            <Link href="/mortgages" className="pill pill-ghost">
              All mortgage rates
            </Link>
          </div>
        </div>
      </section>

      {/* RATE SNAPSHOT */}
      <section className="border-y border-line bg-bg-soft/60">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-display font-bold text-2xl tracking-tight">30-year snapshot</h2>
            <span className="text-xs font-mono text-mute">Updated today</span>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "30Y Fixed avg APR", value: "6.85%", caption: "Avg of 14 lenders" },
              { label: "30Y Fixed avg rate", value: "6.71%", caption: "Excludes lender fees" },
              { label: "Avg points paid", value: "0.6", caption: "Freddie Mac PMMS" },
              { label: "Loan-to-value", value: "80%", caption: "Quoted scenario" },
            ].map((tile) => (
              <div key={tile.label} className="card p-5">
                <div className="text-xs text-mute mb-2">{tile.label}</div>
                <div className="font-display font-extrabold text-3xl tabular tracking-tight mb-1">
                  {tile.value}
                </div>
                <div className="text-xs text-mute mt-2">{tile.caption}</div>
              </div>
            ))}
          </div>
          <p className="text-xs text-mute mt-6 leading-relaxed">
            Source: Freddie Mac Primary Mortgage Market Survey (PMMS) and Fintiex daily lender pulls. APR assumes 20% down on a single-family primary residence with a 760+ FICO. Your quote will vary.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-(--max-w-page) mx-auto px-6 py-20">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 lg:col-span-4">
            <span className="chip chip-mute mb-4">The math</span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-tight mb-6">
              What the 30-year actually costs you.
            </h2>
            <p className="text-mute leading-relaxed">
              The headline payment is only half the story. Total interest paid and equity built each year matter just as much when you compare loan terms.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-8 space-y-8 text-base leading-relaxed">
            <div>
              <h3 className="font-display font-bold text-xl mb-2 tracking-tight">A $400,000 example, 6.85% APR</h3>
              <p className="text-mute">
                Principal and interest run about $2,624 per month. Add property tax (roughly $400) and homeowners insurance (roughly $130) and the total housing payment is about $3,154. Over 360 payments you pay about $544,000 in interest. The lender keeps more than the price of the home in interest charges if you never refinance and never prepay.
              </p>
            </div>
            <div>
              <h3 className="font-display font-bold text-xl mb-2 tracking-tight">Equity builds slowly at first</h3>
              <p className="text-mute">
                In year one, only about 18% of each payment goes to principal. The rest is interest. By year ten, principal and interest split closer to 35/65. By year twenty, principal is the larger share. This is the amortization curve and it is the same shape on every fixed loan. Plan for slow equity build in the first five years unless home prices rise.
              </p>
            </div>
            <div>
              <h3 className="font-display font-bold text-xl mb-2 tracking-tight">PMI on less than 20% down</h3>
              <p className="text-mute">
                Putting down 5% to 19% triggers private mortgage insurance, typically 0.3% to 1.5% of the loan amount per year. On a $400,000 loan that is $1,200 to $6,000 per year on top of principal and interest. PMI drops automatically when the loan-to-value reaches 78%, per the federal Homeowners Protection Act. You can request removal at 80% with an appraisal.
              </p>
            </div>
            <div>
              <h3 className="font-display font-bold text-xl mb-2 tracking-tight">The flexibility argument</h3>
              <p className="text-mute">
                The 30-year does not stop you from paying it off in 20 years. Adding $300 per month in principal payments on the example above shaves seven years and roughly $108,000 in interest off the loan. The 30-year gives you the option to pay extra in good months without the locked-in obligation of a higher 15-year payment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROS / CONS */}
      <section className="bg-bg-soft/60 border-y border-line">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-20">
          <div className="grid grid-cols-12 gap-10 mb-10">
            <div className="col-span-12 lg:col-span-5">
              <span className="chip chip-mute mb-4">Trade-offs</span>
              <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-tight">
                Why most buyers still pick it.
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-7 text-mute leading-relaxed">
              The 30-year fixed wins on cash flow and predictability. It loses on total interest cost and equity speed. The right answer depends on what your household needs in the first decade of ownership.
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card p-6">
              <h3 className="font-display font-bold text-lg mb-3 tracking-tight">Pros</h3>
              <ul className="space-y-2 text-sm text-mute leading-relaxed">
                <li>Lowest possible monthly payment for the loan size.</li>
                <li>Rate locked for the full 30 years. No reset risk.</li>
                <li>Pay extra principal anytime to shorten the term.</li>
                <li>Frees up monthly cash for retirement and emergency savings.</li>
                <li>Qualifies for higher loan amounts at the same income.</li>
              </ul>
            </div>
            <div className="card p-6">
              <h3 className="font-display font-bold text-lg mb-3 tracking-tight">Cons</h3>
              <ul className="space-y-2 text-sm text-mute leading-relaxed">
                <li>Highest total interest cost of any common term.</li>
                <li>Slow equity build in the first five to seven years.</li>
                <li>Rate is typically 0.5 to 1.0 points above the 15-year.</li>
                <li>You stay in debt longer if you do not prepay.</li>
                <li>Refinancing later costs roughly 2% to 3% of the loan.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* WHO IT SUITS */}
      <section className="max-w-(--max-w-page) mx-auto px-6 py-20">
        <div className="grid grid-cols-12 gap-10 mb-10">
          <div className="col-span-12 lg:col-span-5">
            <span className="chip chip-mute mb-4">Who it suits</span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-tight">
              The 30-year is right for you if.
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-7 text-mute leading-relaxed">
            Use this checklist before you commit. If three or more apply, the 30-year is almost certainly the right tool.
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card p-6">
            <h3 className="font-display font-bold text-lg mb-2 tracking-tight">Cash flow matters</h3>
            <p className="text-sm text-mute leading-relaxed">
              You want the lowest possible payment so you can keep funding retirement accounts, emergency reserves, and college savings.
            </p>
          </div>
          <div className="card p-6">
            <h3 className="font-display font-bold text-lg mb-2 tracking-tight">Income is variable</h3>
            <p className="text-sm text-mute leading-relaxed">
              You earn commission, run a business, or have seasonal income. The lower required payment protects you in slower months while letting you prepay in strong ones.
            </p>
          </div>
          <div className="card p-6">
            <h3 className="font-display font-bold text-lg mb-2 tracking-tight">First-time buyer</h3>
            <p className="text-sm text-mute leading-relaxed">
              You are stretching to qualify for the home you want. The 30-year gets you in the door at a payment your debt-to-income ratio can support.
            </p>
          </div>
        </div>
      </section>

      {/* CROSS-LINKS */}
      <section className="bg-bg-soft/60 border-y border-line">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-16">
          <div className="mb-8">
            <span className="chip chip-mute mb-4">Tools and related</span>
            <h2 className="font-display font-extrabold text-3xl tracking-tight">Run your numbers, then keep going.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "Mortgage payment calc", href: "/calculators/mortgage-payment", detail: "See P+I, taxes, and PMI." },
              { label: "Refi break-even", href: "/calculators/refinance-break-even", detail: "When a refi pays back closing costs." },
              { label: "15-year fixed", href: "/mortgages/15y-fixed", detail: "Lower rate, higher monthly." },
              { label: "Rates by state", href: "/mortgages/by-state", detail: "Local averages and lenders." },
            ].map((p) => (
              <Link key={p.href} href={p.href} className="card p-6 block group">
                <div className="flex items-center justify-between mb-3">
                  <span className="chip chip-violet">{p.label}</span>
                  <span className="text-mute text-lg group-hover:text-ink group-hover:translate-x-1 transition-all">→</span>
                </div>
                <div className="text-sm text-mute leading-relaxed">{p.detail}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-(--max-w-page) mx-auto px-6 py-20">
        <div className="mb-10">
          <span className="chip chip-mute mb-4">FAQ</span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight">Common questions about 30Y fixed.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqItems.map((faq) => (
            <div key={faq.question} className="card p-6">
              <h3 className="font-display font-bold text-base mb-2 tracking-tight">{faq.question}</h3>
              <p className="text-mute text-sm leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="bg-lime border-y border-ink">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-14 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight max-w-xl leading-tight">
              See your 30-year payment in 20 seconds.
            </h2>
            <p className="text-ink/70 mt-2">No email, no signup. Plug in price, down payment, and rate.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/calculators/mortgage-payment" className="pill pill-ink">
              Mortgage calculator
              <span aria-hidden>→</span>
            </Link>
            <Link href="/mortgages/15y-fixed" className="pill pill-ghost">
              Compare 15-year
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
