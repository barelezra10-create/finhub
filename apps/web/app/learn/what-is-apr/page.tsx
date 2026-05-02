import type { Metadata } from "next";
import Link from "next/link";
import {
  ArticleSchema,
  BreadcrumbListSchema,
} from "@/components/schemas";

export const metadata: Metadata = {
  title: "APR vs Interest Rate: Why the Difference Matters | Fintiex Guides",
  description:
    "APR includes fees the interest rate ignores. Here is exactly what goes into APR, when the two numbers diverge sharply, and how to use APR to compare loans fairly.",
  alternates: { canonical: "/learn/what-is-apr" },
};

export default function Page() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      <ArticleSchema
        headline="APR vs interest rate (and why the difference matters)"
        description="APR includes fees the interest rate ignores. Here is exactly what goes into APR, when the two numbers diverge sharply, and how to use APR to compare loans fairly."
        slug="/learn/what-is-apr"
      />
      <BreadcrumbListSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Guides", href: "/learn" },
          { name: "What Is APR", href: "/learn/what-is-apr" },
        ]}
      />
      {/* HERO */}
      <div className="mb-10">
        <span className="chip chip-violet mb-4">Credit</span>
        <h1 className="font-display font-extrabold text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] tracking-[-0.03em] mt-4 mb-4">
          APR vs interest rate (and why the difference matters)
        </h1>
        <div className="flex items-center gap-3 flex-wrap">
          <span className="text-mute text-sm">Fintiex Editorial · Updated April 2026</span>
          <span className="chip chip-mute">7 min read</span>
        </div>
      </div>

      {/* TABLE OF CONTENTS */}
      <nav className="card p-6 mb-12">
        <div className="font-mono text-xs uppercase tracking-wider text-mute mb-4">
          In this guide
        </div>
        <ol className="space-y-2 text-sm">
          <li>
            <a href="#key-difference" className="u-link text-ink font-medium">
              1. Interest rate vs APR: the key difference
            </a>
          </li>
          <li>
            <a href="#whats-included" className="u-link text-ink font-medium">
              2. What is included in APR
            </a>
          </li>
          <li>
            <a href="#when-apr-mismatches" className="u-link text-ink font-medium">
              3. When APR mismatches the headline rate
            </a>
          </li>
          <li>
            <a href="#comparing-loans" className="u-link text-ink font-medium">
              4. How APR helps you compare loans
            </a>
          </li>
          <li>
            <a href="#limitations" className="u-link text-ink font-medium">
              5. APR limitations
            </a>
          </li>
        </ol>
      </nav>

      {/* INTRO */}
      <p className="text-lg leading-relaxed text-mute mb-12">
        You find a mortgage advertised at 6.50%. The APR in the fine print reads 6.82%. The lender
        is not playing games, and the loan is not worse than it looks. The two numbers describe
        different things, and both are accurate. The interest rate tells you the annual cost of
        borrowing the principal. APR, the annual percentage rate, tells you the annual cost of
        the entire loan including fees. Understanding why those two numbers diverge, and by how much,
        is one of the most useful skills in personal finance because it lets you compare loans from
        different lenders on a level playing field. This guide walks through exactly how APR is
        calculated, what the regulation requires lenders to include, and where APR breaks down as a
        comparison tool.
      </p>

      {/* SECTION 1 */}
      <section id="key-difference" className="mb-14">
        <h2 className="font-display font-extrabold text-2xl tracking-tight mb-4">
          Interest rate vs APR: the key difference
        </h2>
        <p className="text-mute leading-relaxed mb-4">
          The interest rate is the annual percentage of the outstanding principal that the lender
          charges you to borrow money. It determines the interest portion of your monthly payment
          directly. If you borrow $400,000 at a 6.50% interest rate, the lender charges you
          6.50 / 12 = 0.5417% of the remaining balance each month.
        </p>
        <p className="text-mute leading-relaxed mb-4">
          APR wraps in the additional costs of obtaining the loan: origination fees, discount points,
          mortgage broker fees, and certain other charges. The result is a higher single number that
          represents the true annualized cost of the loan if you hold it to maturity. Under the
          Truth in Lending Act (TILA), lenders are required to disclose APR prominently, which is why
          you see it in every loan advertisement.
        </p>
        <h3 className="font-display font-bold text-lg tracking-tight mt-6 mb-3">
          Worked example
        </h3>
        <p className="text-mute leading-relaxed mb-4">
          A lender offers you a $400,000 mortgage at 6.50% with a 1% origination fee ($4,000). The
          interest rate is 6.50%. To find APR, the lender calculates what rate would produce the
          same stream of monthly payments on a loan of $396,000 (the $400,000 minus the $4,000 fee
          you paid upfront). That equivalent rate is approximately 6.67%. That is the APR: the
          rate that accounts for the fact that you received $4,000 less than you borrowed.
        </p>
        <p className="text-mute leading-relaxed">
          The APR is always equal to or higher than the interest rate (for fixed loans with
          upfront fees). When the two numbers are equal, the loan has no fees.
        </p>
      </section>

      {/* SECTION 2 */}
      <section id="whats-included" className="mb-14">
        <h2 className="font-display font-extrabold text-2xl tracking-tight mb-4">
          What is included in APR
        </h2>
        <p className="text-mute leading-relaxed mb-4">
          The CFPB and Regulation Z specify exactly which fees must be included in the APR
          calculation for mortgage loans. The list includes:
        </p>
        <ul className="space-y-3 mb-6">
          {[
            "Origination and underwriting fees charged by the lender",
            "Discount points (prepaid interest that buys down the rate)",
            "Mortgage broker fees, if a broker is involved",
            "Private mortgage insurance (PMI) premiums if applicable",
            "Prepaid interest from closing to the end of the first month",
          ].map((item, i) => (
            <li key={i} className="flex gap-3 text-sm leading-relaxed text-mute">
              <span className="w-1.5 h-1.5 rounded-full bg-lime-deep mt-2 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <p className="text-mute leading-relaxed mb-4">
          What is not included in APR matters just as much. Third-party fees that the lender does
          not control are excluded. These are:
        </p>
        <ul className="space-y-3 mb-6">
          {[
            "Appraisal fee",
            "Title insurance",
            "Attorney fees",
            "Property taxes and homeowner's insurance held in escrow",
            "Recording fees",
          ].map((item, i) => (
            <li key={i} className="flex gap-3 text-sm leading-relaxed text-mute">
              <span className="w-1.5 h-1.5 rounded-full bg-mute mt-2 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <p className="text-mute leading-relaxed">
          The exclusions are meaningful. Appraisal plus title can add another $2,000 to $3,500 in
          costs that do not appear in APR. When comparing total loan costs, you need to look at the
          Loan Estimate, which itemizes every fee, not just APR.
        </p>
      </section>

      {/* SECTION 3 */}
      <section id="when-apr-mismatches" className="mb-14">
        <h2 className="font-display font-extrabold text-2xl tracking-tight mb-4">
          When APR mismatches the headline rate
        </h2>
        <p className="text-mute leading-relaxed mb-4">
          The gap between the interest rate and APR is a direct proxy for how fee-heavy the loan is.
          A large gap means high fees. A small gap or no gap means the lender is earning its margin
          mostly through the interest rate, not upfront charges.
        </p>
        <h3 className="font-display font-bold text-lg tracking-tight mt-6 mb-3">
          Comparing two $400,000 loans
        </h3>
        <div className="card-flush overflow-hidden mb-6">
          <div className="grid grid-cols-3 px-5 py-3 text-xs font-mono uppercase tracking-wider text-mute border-b border-line bg-bg-soft/50">
            <div>Lender</div>
            <div className="text-right">Rate</div>
            <div className="text-right">APR</div>
          </div>
          <div className="grid grid-cols-3 px-5 py-4 items-center border-b border-line-soft text-sm">
            <div className="font-medium">Lender A</div>
            <div className="text-right font-mono tabular">6.50%</div>
            <div className="text-right font-mono tabular font-semibold">6.72%</div>
          </div>
          <div className="grid grid-cols-3 px-5 py-4 items-center text-sm">
            <div className="font-medium">Lender B</div>
            <div className="text-right font-mono tabular">6.65%</div>
            <div className="text-right font-mono tabular font-semibold">6.68%</div>
          </div>
        </div>
        <p className="text-mute leading-relaxed mb-4">
          Lender A looks cheaper on the rate (6.50% vs 6.65%). But Lender B&rsquo;s APR is lower
          (6.68% vs 6.72%). Lender B has a higher rate but almost no fees. Lender A is offsetting a
          lower rate with significant upfront charges. If you keep the loan to maturity, Lender A
          might win because the lower rate compounds over time. But if you sell or refinance in 5
          years, you would not have time to recoup Lender A&rsquo;s fees, and Lender B would be the
          better deal.
        </p>
        <p className="text-mute leading-relaxed">
          This is the fundamental use case for APR: it surfaces the real cost so you can ask the
          right question, which is not &ldquo;which rate is lower?&rdquo; but &ldquo;which loan is
          cheaper given how long I plan to hold it?&rdquo;
        </p>
      </section>

      {/* SECTION 4 */}
      <section id="comparing-loans" className="mb-14">
        <h2 className="font-display font-extrabold text-2xl tracking-tight mb-4">
          How APR helps you compare loans
        </h2>
        <p className="text-mute leading-relaxed mb-4">
          The right process for loan comparison is:
        </p>
        <ol className="space-y-4 mb-6">
          {[
            {
              step: "Get Loan Estimates from at least three lenders on the same day, for the same loan amount, term, and down payment. Rates change daily; comparing quotes from different days introduces noise.",
            },
            {
              step: "Compare APRs first to flag which lenders are fee-heavy versus fee-light. The spread between the interest rate and APR is your signal.",
            },
            {
              step: "Open the Loan Estimate Section A (Origination Charges). This is where lender fees live. Sum them to confirm whether a lower rate is real or just offset by fees.",
            },
            {
              step: "Calculate total cost at your expected hold period. If you plan to sell in 7 years, ask: what do I pay in total interest plus fees over 7 years with each option?",
            },
          ].map((item, i) => (
            <li key={i} className="flex gap-3 text-sm leading-relaxed">
              <span className="font-mono font-bold text-ink flex-shrink-0">0{i + 1}</span>
              <span className="text-mute">{item.step}</span>
            </li>
          ))}
        </ol>
        <p className="text-mute leading-relaxed">
          For personal loans and credit cards, the same principle applies but with less complexity.
          Personal loan APRs typically include all origination fees and are a reliable one-number
          comparison. Credit card APRs are the periodic rate times 12 and usually do not include
          annual fees, so factor those in separately.
        </p>
      </section>

      {/* SECTION 5 */}
      <section id="limitations" className="mb-14">
        <h2 className="font-display font-extrabold text-2xl tracking-tight mb-4">
          APR limitations
        </h2>
        <p className="text-mute leading-relaxed mb-4">
          APR assumes you hold the loan to maturity and never prepay. Most borrowers don&rsquo;t.
          The average homeowner refinances or sells every 7 to 10 years. That changes the math
          significantly because upfront fees are amortized over a shorter period, making high-fee
          loans more expensive than their APR suggests.
        </p>
        <h3 className="font-display font-bold text-lg tracking-tight mt-6 mb-3">
          Variable-rate loans
        </h3>
        <p className="text-mute leading-relaxed mb-4">
          For adjustable-rate mortgages (ARMs) and HELOCs, APR is calculated assuming the index rate
          stays flat, which it almost certainly will not. A 5/1 ARM with a 6.00% initial rate and
          caps of 2/2/5 could have a future rate anywhere from 4% to 11% depending on index movement.
          The APR figure the lender shows is a legal requirement but should be treated as a baseline,
          not a forecast.
        </p>
        <h3 className="font-display font-bold text-lg tracking-tight mt-6 mb-3">
          Interest-only loans
        </h3>
        <p className="text-mute leading-relaxed">
          Interest-only mortgage APRs look low because the early payments are smaller (no principal
          being paid). The true cost of the loan explodes after the interest-only period ends and
          principal repayment begins. If you are comparing an IO loan to a fully amortizing loan
          using APR, you are comparing incompatible structures. Look at total cost over your holding
          period instead.
        </p>
      </section>

      {/* KEY TAKEAWAYS */}
      <section className="card p-7 mb-12 bg-bg-soft/50">
        <div className="font-mono text-xs uppercase tracking-wider text-mute mb-5">
          Key takeaways
        </div>
        <ul className="space-y-3">
          {[
            "APR is always equal to or higher than the interest rate. The gap tells you how fee-heavy the loan is.",
            "APR on mortgages includes origination fees, points, and PMI. It excludes appraisal, title, and third-party fees.",
            "A loan with a lower rate but higher APR means the lender is recovering cost through upfront fees.",
            "APR assumes you hold to maturity. Short hold periods favor low-fee loans even at higher rates.",
            "For variable-rate loans, APR is calculated on a static rate assumption. Treat it as a floor, not a prediction.",
          ].map((point, i) => (
            <li key={i} className="flex gap-3 text-sm leading-relaxed">
              <span className="chip chip-violet mt-0.5 flex-shrink-0">{i + 1}</span>
              <span className="text-mute">{point}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* RELATED */}
      <section className="border-t border-line pt-10 mb-10">
        <div className="font-mono text-xs uppercase tracking-wider text-mute mb-5">
          Related guides
        </div>
        <div className="space-y-3">
          <Link href="/learn/how-mortgages-work" className="flex items-center gap-2 u-link text-sm font-medium">
            <span className="chip chip-lime">Mortgages</span> How mortgages work in 2026 →
          </Link>
          <Link href="/learn/refinance-break-even" className="flex items-center gap-2 u-link text-sm font-medium">
            <span className="chip chip-lime">Mortgages</span> When does refinancing actually pay off? →
          </Link>
          <Link href="/learn/choosing-first-credit-card" className="flex items-center gap-2 u-link text-sm font-medium">
            <span className="chip chip-violet">Credit</span> Choosing your first credit card →
          </Link>
        </div>
      </section>

      {/* CTA */}
      <div className="card p-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <div className="font-display font-bold text-lg tracking-tight mb-1">
            Compare loans side by side
          </div>
          <p className="text-mute text-sm">
            Enter two loan offers and see which one actually costs less at your holding period.
          </p>
        </div>
        <Link href="/calculators/mortgage-payment" className="pill pill-ink flex-shrink-0">
          Open calculator →
        </Link>
      </div>
    </article>
  );
}
