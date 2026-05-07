import Link from "next/link";
import type { Metadata } from "next";
import { FAQPageSchema, BreadcrumbListSchema, type FAQItem } from "@/components/schemas";
import { BrandLogo } from "@/components/brand-logo";

export const metadata: Metadata = {
  title: "Home Improvement Loans 2026: Personal Loan vs HELOC vs Cash-Out | Fintiex",
  description:
    "Compare home improvement financing: personal loan, HELOC, cash-out refi, or 0% APR card. Top picks: SoFi, LightStream, Marcus. Pick the right tool for your project.",
  alternates: { canonical: "/loans/home-improvement" },
};

interface Pick {
  rank: number;
  lender: string;
  brand: string;
  apr: string;
  loanAmount: string;
  term: string;
  highlight: string;
  caveat: string;
  bestFor: string;
}

const picks: Pick[] = [
  {
    rank: 1,
    lender: "LightStream",
    brand: "lightstream",
    apr: "7.49% to 15.99%",
    loanAmount: "$5,000 to $100,000",
    term: "2 to 12 years",
    highlight: "Lowest advertised home improvement APR. 12-year term option for big projects (rare among personal loans). Same-day funding available.",
    caveat: "No prequalification (rate quote requires a hard pull). 720+ FICO recommended for the floor rate.",
    bestFor: "Excellent credit, large projects ($25K+), longest terms.",
  },
  {
    rank: 2,
    lender: "SoFi",
    brand: "sofi-loan",
    apr: "8.99% to 25.81%",
    loanAmount: "$5,000 to $100,000",
    term: "2 to 7 years",
    highlight: "No fees of any kind. Unemployment protection. Same-day or next-day funding for approved applicants.",
    caveat: "Direct deposit setup required to unlock the lowest rate tier.",
    bestFor: "Excellent credit, no-fee preference, large loan amounts.",
  },
  {
    rank: 3,
    lender: "Marcus by Goldman Sachs",
    brand: "marcus-loan",
    apr: "9.99% to 24.99%",
    loanAmount: "$3,500 to $40,000",
    term: "3 to 6 years",
    highlight: "No fees, no origination, no prepayment penalty. On-time payment reward (defer one payment after 12 consecutive on-time).",
    caveat: "Loan max is $40,000, which may not cover larger renovations.",
    bestFor: "Good credit, mid-size projects ($10K to $40K), simple terms.",
  },
];

const optionsCompared = [
  {
    title: "Personal loan",
    apr: "8% to 18% typical",
    pros: "Fast (1 to 5 days). No collateral required. No appraisal. Fixed rate, fixed payment, definite payoff date. Your home is not at risk.",
    cons: "Higher rate than home equity products. Loan max usually $40K to $100K.",
    bestFor: "Projects $5K to $50K, urgent timing, borrowers without home equity, anyone unwilling to put a lien on their house.",
  },
  {
    title: "HELOC (home equity line of credit)",
    apr: "7% to 11% typical",
    pros: "Variable rate but typically lower than personal loans. Draw funds as needed (revolving). Interest may be tax-deductible if used for substantial home improvements.",
    cons: "Closing costs ($500 to $2,000). 30 to 45 days to close. Variable rate can move up. Your home secures the loan: default risks foreclosure.",
    bestFor: "Multi-phase projects, ongoing renovations, borrowers with $50K+ in equity and a long timeline.",
  },
  {
    title: "Cash-out refinance",
    apr: "6% to 8% typical (mortgage rates)",
    pros: "Lowest possible rate (rolls into your mortgage). Single monthly payment. Long payoff (up to 30 years). Interest may be tax-deductible.",
    cons: "Closing costs (2% to 5% of loan amount). 30 to 60 days to close. Resets your mortgage clock. Only worth it if your current mortgage rate is similar to or higher than current rates.",
    bestFor: "Major renovations ($75K+), borrowers whose current mortgage rate is no better than today's market.",
  },
  {
    title: "0% APR credit card",
    apr: "0% promo for 12 to 21 months, then 18% to 28%",
    pros: "Zero interest if paid off inside the promo window. No closing costs. No collateral. Fast (apply and use the same day).",
    cons: "Promo APR ends and back-rate is high. Limit usually under $20K. Most issuers charge a 3% to 5% balance transfer fee on existing balances.",
    bestFor: "Small projects ($2K to $15K) you can repay inside 12 to 21 months without fail.",
  },
];

const projectMatch = [
  { project: "Kitchen remodel ($45K)", recommendation: "HELOC if you have equity; personal loan if you do not. Avoid 0% cards (too small)." },
  { project: "Bathroom refresh ($12K)", recommendation: "0% APR card if you can repay in 18 months; personal loan otherwise. HELOC overkill for this size." },
  { project: "Roof replacement ($18K, urgent)", recommendation: "Personal loan. HELOCs take too long; 0% cards may not approve a high enough limit." },
  { project: "Whole-home renovation ($120K)", recommendation: "Cash-out refinance or HELOC. Personal loans cap at $100K and rates are higher." },
  { project: "Solar panels ($25K)", recommendation: "HELOC or specialty solar loan. Federal tax credit (currently 30%) often makes financing cheap." },
  { project: "HVAC replacement ($9K)", recommendation: "0% APR card (Lowe's, Home Depot, or general 0%) if you can pay in 12 to 18 months. Personal loan if not." },
];

const faqItems: FAQItem[] = [
  {
    question: "Personal loan vs HELOC: which is better for home improvement?",
    answer: "Personal loan wins on speed (1 to 5 days vs 30 to 45) and simplicity (no appraisal, no closing costs, no lien on your home). HELOC wins on rate (typically 1 to 4 percentage points lower) and flexibility (revolving draw). For projects under $25K with a clear scope, personal loan usually nets out better. For $50K+ multi-phase renovations, HELOC math wins despite the slower close.",
  },
  {
    question: "Is the interest tax-deductible?",
    answer: "Personal loan interest is generally not deductible. HELOC and cash-out refinance interest may be deductible if the funds are used for substantial home improvements (the IRS test is whether the work substantially improves the home, not just maintains it). Consult a tax professional. The 2017 tax law restricts the deduction to home-improvement use only.",
  },
  {
    question: "Should I use a 0% APR credit card for home improvement?",
    answer: "Yes, for the right size and timeline. A 0% APR card with a $15K limit is a great fit for a $10K bathroom you can repay in 18 months. It is a terrible fit for a $40K kitchen you will need 4 years to repay; the back-rate APR after the promo will eat any savings. Always have a written month-by-month payoff plan before using a 0% card.",
  },
  {
    question: "How much can I borrow with a personal loan for home improvement?",
    answer: "SoFi and LightStream go up to $100,000. Marcus and Discover cap at $40,000. The amount you actually qualify for depends on your income, debt-to-income ratio, and credit score. Lenders typically lend up to 40% of annual gross income for unsecured loans. For projects over $100K, you will need a HELOC or cash-out refinance.",
  },
  {
    question: "Should I take a contractor's in-house financing?",
    answer: "Almost always no. Contractor financing is usually arranged through a third-party lender like Wells Fargo, GreenSky, or Synchrony, with rates 2 to 5 percentage points above what you can get directly. The contractor receives a kickback. Get your own personal loan or HELOC first, then negotiate the contractor's price as a cash buyer.",
  },
  {
    question: "Will a home improvement loan increase my home's value enough to justify the cost?",
    answer: "Sometimes. According to industry remodeling cost-vs-value reports, kitchen and bathroom updates recover 50% to 70% of cost at resale; new roofs, HVAC systems, and siding recover 60% to 90%. Pools, additions, and luxury upgrades typically recover under 50%. If resale value is your only goal, run the math first; many improvements are about livability, not return.",
  },
];

export default function Page() {
  return (
    <>
      <FAQPageSchema items={faqItems} />
      <BreadcrumbListSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Loans", href: "/loans" },
          { name: "Home Improvement", href: "/loans/home-improvement" },
        ]}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-bg">
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
        <div className="relative max-w-(--max-w-page) mx-auto px-6 pt-20 pb-16">
          <span className="chip chip-violet mb-6">
            <span className="pulse-dot" /> Pick the right tool for your project
          </span>
          <h1 className="font-display font-extrabold text-[clamp(2.5rem,6vw,5rem)] leading-[1.02] tracking-[-0.03em] mb-6 max-w-3xl">
            Home improvement financing, compared.
          </h1>
          <p className="text-lg md:text-xl text-mute leading-relaxed max-w-2xl mb-8">
            Four ways to fund a renovation: personal loan, HELOC, cash-out refinance, or 0% APR credit card. The right choice depends on project size, your timeline, your home equity, and how much risk you want to attach to your house. We break down the trade-offs and the lenders worth your time.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/calculators/personal-loan-payoff" className="pill pill-ink">
              Run loan math
              <span aria-hidden>→</span>
            </Link>
            <Link href="/loans/by-credit-tier" className="pill pill-ghost">
              Rates by credit tier
            </Link>
          </div>
        </div>
      </section>

      {/* QUICK MATCH */}
      <section className="border-y border-line bg-bg-soft/60">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-display font-bold text-2xl tracking-tight">Quick match: project to financing</h2>
            <span className="text-xs font-mono text-mute">Rule-of-thumb only</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projectMatch.map((p) => (
              <div key={p.project} className="card p-5">
                <div className="text-xs font-mono text-mute uppercase tracking-wider mb-2">Project</div>
                <div className="font-display font-semibold text-base mb-3">{p.project}</div>
                <div className="text-xs font-mono text-mute uppercase tracking-wider mb-1">Recommendation</div>
                <p className="text-sm text-mute leading-relaxed">{p.recommendation}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OPTIONS COMPARED */}
      <section className="max-w-(--max-w-page) mx-auto px-6 py-20">
        <div className="grid grid-cols-12 gap-8 mb-10">
          <div className="col-span-12 md:col-span-7">
            <span className="chip chip-mute mb-4">Four options</span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-tight">
              The four ways to finance a project.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5 flex md:items-end md:justify-end">
            <p className="text-mute leading-relaxed md:text-right md:max-w-sm">
              Speed, rate, collateral, and complexity. Each option trades one for another.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          {optionsCompared.map((o) => (
            <div key={o.title} className="card p-6 md:p-7">
              <div className="grid grid-cols-12 gap-6 items-start">
                <div className="col-span-12 md:col-span-3">
                  <h3 className="font-display font-bold text-xl mb-2 tracking-tight">{o.title}</h3>
                  <div className="text-xs font-mono text-mute uppercase tracking-wider mb-1">Typical APR</div>
                  <div className="font-mono tabular text-sm font-semibold">{o.apr}</div>
                </div>
                <div className="col-span-12 md:col-span-9 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm leading-relaxed">
                  <div>
                    <div className="text-xs font-mono text-mute uppercase tracking-wider mb-1">Pros</div>
                    <p className="text-mute">{o.pros}</p>
                  </div>
                  <div>
                    <div className="text-xs font-mono text-mute uppercase tracking-wider mb-1">Cons</div>
                    <p className="text-mute">{o.cons}</p>
                  </div>
                  <div>
                    <div className="text-xs font-mono text-mute uppercase tracking-wider mb-1">Best for</div>
                    <p className="text-mute">{o.bestFor}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TOP PICKS */}
      <section className="bg-bg-soft/60 border-y border-line">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-20">
          <div className="grid grid-cols-12 gap-8 mb-10">
            <div className="col-span-12 md:col-span-7">
              <span className="chip chip-mute mb-4">Top picks for personal loans</span>
              <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-tight">
                Three personal loan lenders for home projects.
              </h2>
            </div>
            <div className="col-span-12 md:col-span-5 flex md:items-end md:justify-end">
              <p className="text-mute leading-relaxed md:text-right md:max-w-sm">
                If you have meaningful home equity, also prequalify for a HELOC at your bank or credit union.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {picks.map((p) => (
              <div key={p.lender} className="card p-6 md:p-7">
                <div className="grid grid-cols-12 gap-6 items-start">
                  <div className="col-span-12 md:col-span-1 flex items-center gap-3">
                    <BrandLogo brand={p.brand} size={48} />
                    <div className="md:hidden font-mono text-xs text-mute">#{p.rank}</div>
                  </div>
                  <div className="col-span-12 md:col-span-7">
                    <div className="flex items-center gap-2 flex-wrap mb-2">
                      <span className="hidden md:inline font-mono text-xs text-mute">#{p.rank}</span>
                      <h3 className="font-display font-bold text-xl tracking-tight">{p.lender}</h3>
                      <span className="chip chip-mute">{p.bestFor}</span>
                    </div>
                    <p className="text-mute leading-relaxed mb-2">
                      <span className="font-semibold text-ink">Highlight: </span>
                      {p.highlight}
                    </p>
                    <p className="text-sm text-mute leading-relaxed">
                      <span className="font-semibold">Caveat: </span>
                      {p.caveat}
                    </p>
                  </div>
                  <div className="col-span-12 md:col-span-4 grid grid-cols-2 md:grid-cols-1 gap-3 text-sm">
                    <div>
                      <div className="text-xs font-mono text-mute uppercase tracking-wider mb-1">APR range</div>
                      <div className="font-mono tabular font-semibold">{p.apr}</div>
                    </div>
                    <div>
                      <div className="text-xs font-mono text-mute uppercase tracking-wider mb-1">Loan amount</div>
                      <div className="font-mono tabular">{p.loanAmount}</div>
                    </div>
                    <div className="col-span-2 md:col-span-1">
                      <div className="text-xs font-mono text-mute uppercase tracking-wider mb-1">Term</div>
                      <div className="text-mute">{p.term}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PITFALLS */}
      <section className="max-w-(--max-w-page) mx-auto px-6 py-20">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 lg:col-span-4">
            <span className="chip chip-mute mb-4">Common pitfalls</span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-tight mb-6">
              Mistakes that turn good projects into bad debt.
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-8 space-y-8 text-base leading-relaxed">
            <div>
              <h3 className="font-display font-bold text-xl mb-2 tracking-tight">Borrowing the contractor's quoted price</h3>
              <p className="text-mute">
                Renovations almost always go over budget. The CFPB recommends adding a 15% to 25% buffer to the contractor's quote, and either borrowing the full amount up front or having that buffer in cash. Running out of money mid-project is the worst possible position; it leaves you with a half-finished house and no leverage.
              </p>
            </div>
            <div>
              <h3 className="font-display font-bold text-xl mb-2 tracking-tight">Taking contractor in-house financing</h3>
              <p className="text-mute">
                Contractor financing arranged through GreenSky, Synchrony, or Wells Fargo typically runs 2 to 5 percentage points above what you can get directly. The contractor gets a kickback. Get your own loan first, then negotiate the contractor's price as a cash buyer.
              </p>
            </div>
            <div>
              <h3 className="font-display font-bold text-xl mb-2 tracking-tight">Choosing HELOC for a project under $25K</h3>
              <p className="text-mute">
                HELOC closing costs ($500 to $2,000) and 30+ day timeline rarely justify the rate savings on a small project. Run the lifetime cost both ways: a 5-year personal loan at 11% on $20K vs a HELOC at 8.5% with $1,500 closing costs. The personal loan often wins once closing costs are factored in.
              </p>
            </div>
            <div>
              <h3 className="font-display font-bold text-xl mb-2 tracking-tight">Putting a lien on the house for non-essential upgrades</h3>
              <p className="text-mute">
                A HELOC or cash-out refi puts your home up as collateral. If you default, you can lose the house. For essential repairs (roof, HVAC, plumbing), the math is justifiable. For luxury upgrades (pool, theater room), an unsecured personal loan keeps the house safe even if life gets complicated.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CROSS-LINKS */}
      <section className="bg-bg-soft/60 border-y border-line">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-16">
          <div className="mb-8">
            <span className="chip chip-mute mb-4">Tools and related</span>
            <h2 className="font-display font-extrabold text-3xl tracking-tight">Run the numbers, then keep exploring.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "Loan calculator", href: "/calculators/personal-loan-payoff", detail: "Monthly payment by APR and term." },
              { label: "Debt payoff calculator", href: "/calculators/debt-payoff", detail: "Compare loan options side-by-side." },
              { label: "By credit tier", href: "/loans/by-credit-tier", detail: "Realistic rates for your FICO." },
              { label: "Personal loans", href: "/loans/personal", detail: "Top general-purpose lenders." },
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
          <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight">
            Common questions about home improvement financing.
          </h2>
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
              See your monthly payment by project size.
            </h2>
            <p className="text-ink/70 mt-2">Plug in the loan amount and APR. Compare against a HELOC.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/calculators/personal-loan-payoff" className="pill pill-ink">
              Loan calculator
              <span aria-hidden>→</span>
            </Link>
            <Link href="/loans/personal" className="pill pill-ghost">
              Personal loans
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
