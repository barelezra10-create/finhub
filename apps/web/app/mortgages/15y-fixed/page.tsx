import Link from "next/link";
import type { Metadata } from "next";
import { FAQPageSchema, BreadcrumbListSchema, type FAQItem } from "@/components/schemas";

export const metadata: Metadata = {
  title: "15-Year Fixed Mortgage Rates 2026 | Fintiex",
  description:
    "15-year fixed mortgage rates today, average APR 6.10%. Payoff math, monthly payment trade-offs, and who should pick a 15Y over a 30Y. Updated daily.",
  alternates: { canonical: "/mortgages/15y-fixed" },
};

const faqItems: FAQItem[] = [
  {
    question: "How much lower is a 15-year rate than a 30-year?",
    answer:
      "Historically the 15-year fixed runs 0.50 to 0.85 percentage points below the 30-year. Freddie Mac PMMS shows the spread averaging about 0.75 points in 2026. The shorter term is less risky for lenders, so they pass on a lower rate to borrowers who can handle the higher monthly payment.",
  },
  {
    question: "How much interest do you save on a 15-year?",
    answer:
      "On a $400,000 loan at 6.10% APR, total interest paid across 180 months is about $211,000. The same loan at 6.85% over 30 years pays about $544,000 in interest. The 15-year saves roughly $333,000 in lifetime interest if you keep the loan to maturity.",
  },
  {
    question: "Can you switch from a 30-year to a 15-year later?",
    answer:
      "Yes. You can refinance into a 15-year once you have built equity, especially if rates drop. You can also simulate a 15-year by paying extra principal on a 30-year. Use our refi break-even calculator to see whether the closing costs of a refinance pay back inside your planning horizon.",
  },
  {
    question: "Does the 15-year work for first-time buyers?",
    answer:
      "Rarely. The higher payment usually pushes the debt-to-income ratio above what lenders allow, especially for buyers stretching to afford a starter home. A 30-year with extra principal payments often makes more sense at this stage. Move to a 15-year on the next house, when income is higher.",
  },
  {
    question: "Are 15-year fixed loans assumable?",
    answer:
      "Conventional 15-year loans are typically not assumable. FHA, VA, and USDA loans can be assumable, which lets a future buyer take over your low rate. If you finance with one of these, document the assumption rules. The CFPB tracks lender disclosures on assumability.",
  },
  {
    question: "What is the right LTV for a 15-year?",
    answer:
      "Most 15-year buyers aim for 20% down or more. A higher down payment trims the monthly hit and avoids PMI. Some lenders price 15-year loans at 80% LTV the same as 60% LTV, but PMI cost still differs. Run quotes at your actual down payment, not a rounded estimate.",
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
          { name: "15-Year Fixed", href: "/mortgages/15y-fixed" },
        ]}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-bg">
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
        <div className="relative max-w-(--max-w-page) mx-auto px-6 pt-20 pb-16">
          <span className="chip chip-violet mb-6">
            <span className="pulse-dot" /> 15Y fixed updated today
          </span>
          <h1 className="font-display font-extrabold text-[clamp(2.5rem,6vw,5rem)] leading-[1.02] tracking-[-0.03em] mb-6 max-w-3xl">
            The 15-year fixed: lower rate, faster payoff, higher payment.
          </h1>
          <p className="text-lg md:text-xl text-mute leading-relaxed max-w-2xl mb-8">
            The 15-year fixed mortgage cuts roughly 0.75 percentage points off the 30-year rate and saves hundreds of thousands in lifetime interest. The catch is the monthly payment, which lands about 30% higher. Run the numbers before you commit. We will help.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/calculators/mortgage-payment" className="pill pill-ink">
              Calculate the payment
              <span aria-hidden>→</span>
            </Link>
            <Link href="/mortgages/30y-fixed" className="pill pill-ghost">
              Compare 30-year
            </Link>
          </div>
        </div>
      </section>

      {/* RATE SNAPSHOT */}
      <section className="border-y border-line bg-bg-soft/60">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-display font-bold text-2xl tracking-tight">15-year snapshot</h2>
            <span className="text-xs font-mono text-mute">Updated today</span>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "15Y Fixed avg APR", value: "6.10%", caption: "Avg of 14 lenders" },
              { label: "30Y vs 15Y spread", value: "0.75pt", caption: "Freddie Mac PMMS" },
              { label: "Lifetime interest cut", value: "~61%", caption: "$400K example" },
              { label: "Monthly payment hit", value: "+30%", caption: "Vs 30Y at same loan size" },
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
            Source: Freddie Mac PMMS and Fintiex daily lender pulls. APR assumes 20% down on a single-family primary residence with a 760+ FICO.
          </p>
        </div>
      </section>

      {/* PAYOFF MATH */}
      <section className="max-w-(--max-w-page) mx-auto px-6 py-20">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 lg:col-span-4">
            <span className="chip chip-mute mb-4">The math</span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-tight mb-6">
              The payoff math, side by side.
            </h2>
            <p className="text-mute leading-relaxed">
              A $400,000 loan compared at the May 2026 averages. The 15-year saves real money. The question is whether the higher payment fits your budget without crowding out other goals.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-8 space-y-4">
            <div className="card p-6">
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-mute mb-1">Loan</div>
                  <div className="font-display font-bold tabular">$400,000</div>
                </div>
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-mute mb-1">30Y at 6.85%</div>
                  <div className="font-display font-bold tabular">$2,624 / mo</div>
                  <div className="text-xs text-mute mt-1">$544K total interest</div>
                </div>
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-mute mb-1">15Y at 6.10%</div>
                  <div className="font-display font-bold tabular">$3,402 / mo</div>
                  <div className="text-xs text-mute mt-1">$211K total interest</div>
                </div>
              </div>
            </div>
            <div className="card p-6">
              <h3 className="font-display font-bold text-lg mb-2 tracking-tight">$778 more per month, $333,000 less in interest</h3>
              <p className="text-sm text-mute leading-relaxed">
                Over the first 15 years on the 30-year, you would have paid about $472,000 total. By the end of year 15 on the 15-year, you would be debt-free, having paid about $611,000. The 15-year costs about $139,000 more in nominal cash over those 15 years, but you own the house outright and skip the next 15 years of payments. After year 30, the 15-year saves about $333,000 in interest, even before reinvesting freed-up payments.
              </p>
            </div>
            <div className="card p-6">
              <h3 className="font-display font-bold text-lg mb-2 tracking-tight">The reinvestment scenario</h3>
              <p className="text-sm text-mute leading-relaxed">
                If you take the 30-year and invest the $778 monthly difference at a 7% real return, after 15 years that account holds about $245,000. After 30 years it grows to about $957,000 because compounding accelerates. The 15-year wins on guaranteed interest savings. The 30-year plus disciplined investing can win on total wealth, but only if you actually invest the difference. Most households do not.
              </p>
            </div>
            <div className="card p-6">
              <h3 className="font-display font-bold text-lg mb-2 tracking-tight">Equity build is dramatic</h3>
              <p className="text-sm text-mute leading-relaxed">
                On the 15-year, about 47% of the first payment goes to principal. On the 30-year, only 18% does. After five years, the 15-year borrower has paid down about $103,000 of principal versus $36,000 on the 30-year, even ignoring home appreciation. That equity is real net worth you can tap with a HELOC or pull on sale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHO IT SUITS */}
      <section className="bg-bg-soft/60 border-y border-line">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-20">
          <div className="grid grid-cols-12 gap-10 mb-10">
            <div className="col-span-12 lg:col-span-5">
              <span className="chip chip-mute mb-4">Who it suits</span>
              <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-tight">
                The 15-year is right when these line up.
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-7 text-mute leading-relaxed">
              The 15-year is a wealth-building tool, not a starter loan. It works best for households with stable income, ample emergency reserves, and a long planned hold on the home.
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card p-6">
              <h3 className="font-display font-bold text-lg mb-2 tracking-tight">Stable, dual income</h3>
              <p className="text-sm text-mute leading-relaxed">
                Two W-2 incomes, both reliable, both planned to continue. The higher payment requires real cash flow predictability, not optimism.
              </p>
            </div>
            <div className="card p-6">
              <h3 className="font-display font-bold text-lg mb-2 tracking-tight">Retirement on the horizon</h3>
              <p className="text-sm text-mute leading-relaxed">
                You want the mortgage gone before retirement income kicks in. A 15-year started at age 50 finishes at 65. A 30-year started at 50 carries debt to age 80.
              </p>
            </div>
            <div className="card p-6">
              <h3 className="font-display font-bold text-lg mb-2 tracking-tight">Emergency fund is full</h3>
              <p className="text-sm text-mute leading-relaxed">
                Six to 12 months of expenses sit in a high-yield savings account. The 15-year leaves less monthly margin, so reserves matter more.
              </p>
            </div>
            <div className="card p-6">
              <h3 className="font-display font-bold text-lg mb-2 tracking-tight">Retirement accounts maxed</h3>
              <p className="text-sm text-mute leading-relaxed">
                If you are still under-funding a 401(k) or IRA, the tax benefit of those contributions usually beats the interest savings of a 15-year. Fund the 401(k) first.
              </p>
            </div>
            <div className="card p-6">
              <h3 className="font-display font-bold text-lg mb-2 tracking-tight">Long planned hold</h3>
              <p className="text-sm text-mute leading-relaxed">
                You expect to keep the home at least 7 to 10 years. Selling early gives back the interest savings because the 30-year had already paid more interest in the early years anyway.
              </p>
            </div>
            <div className="card p-6">
              <h3 className="font-display font-bold text-lg mb-2 tracking-tight">Low debt-to-income</h3>
              <p className="text-sm text-mute leading-relaxed">
                Your housing cost stays under 28% of gross monthly income at the 15-year payment. Above that, the loan stresses the budget and lender approval gets tight.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* THE TRAP */}
      <section className="max-w-(--max-w-page) mx-auto px-6 py-20">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 lg:col-span-5">
            <span className="chip chip-mute mb-4">Watch out</span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-tight">
              The 15-year trap most buyers miss.
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-7 space-y-6 text-mute leading-relaxed">
            <p>
              The 15-year is contractual. You commit to the higher payment for the entire term. If income drops, you cannot ask the lender to revert to a 30-year schedule without a refinance, and refinancing in a high-rate environment is expensive.
            </p>
            <p>
              The flexible alternative is a 30-year that you pay like a 15-year. Add the $778 monthly difference as extra principal and you finish in roughly 16 years instead of 30. You give up a fraction of the rate advantage but gain the option to drop back to the original payment if income tightens. Many financial planners recommend this hybrid for households without true cash flow certainty.
            </p>
            <p>
              The CFPB notes that prepayment penalties are uncommon on owner-occupied residential mortgages originated after 2014. Confirm your lender disclosure before relying on this strategy.
            </p>
          </div>
        </div>
      </section>

      {/* CROSS-LINKS */}
      <section className="bg-bg-soft/60 border-y border-line">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-16">
          <div className="mb-8">
            <span className="chip chip-mute mb-4">Tools and related</span>
            <h2 className="font-display font-extrabold text-3xl tracking-tight">Run the math, then keep going.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "Mortgage payment calc", href: "/calculators/mortgage-payment", detail: "Side-by-side 15Y and 30Y." },
              { label: "Refi break-even", href: "/calculators/refinance-break-even", detail: "Refi to a 15Y if rates drop." },
              { label: "30-year fixed", href: "/mortgages/30y-fixed", detail: "Lower payment, more flexibility." },
              { label: "Rates by state", href: "/mortgages/by-state", detail: "Local 15-year averages." },
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
          <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight">Common questions about 15Y fixed.</h2>
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
              See if the 15-year payment fits.
            </h2>
            <p className="text-ink/70 mt-2">Plug in price, down payment, and rate. We will show both terms.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/calculators/mortgage-payment" className="pill pill-ink">
              Mortgage calculator
              <span aria-hidden>→</span>
            </Link>
            <Link href="/mortgages/refinance" className="pill pill-ghost">
              Refinance to a 15Y
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
