import Link from "next/link";
import type { Metadata } from "next";
import { FAQPageSchema, BreadcrumbListSchema, type FAQItem } from "@/components/schemas";
import { BrandLogo } from "@/components/brand-logo";

export const metadata: Metadata = {
  title: "Best Personal Loans 2026: General-Purpose APRs by Credit Tier | Fintiex",
  description:
    "Compare personal loans from SoFi, LightStream, Marcus, Discover, Upstart, and more. Realistic APR ranges by credit tier, no fees, soft-pull prequalify before you apply.",
  alternates: { canonical: "/loans/personal" },
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
    lender: "SoFi",
    brand: "sofi-loan",
    apr: "8.99% to 25.81%",
    loanAmount: "$5,000 to $100,000",
    term: "2 to 7 years",
    highlight: "No fees of any kind. Unemployment protection lets you pause payments if you lose your job. Member benefits include free career coaching and rate discounts.",
    caveat: "Direct deposit setup required to unlock the lowest rate. No co-signer option.",
    bestFor: "Excellent credit, large loan amounts, no fees.",
  },
  {
    rank: 2,
    lender: "LightStream",
    brand: "lightstream",
    apr: "7.99% to 25.49%",
    loanAmount: "$5,000 to $100,000",
    term: "2 to 12 years",
    highlight: "Lowest advertised APR among prime lenders. Same-day funding available. Rate Beat program matches a competing offer minus 0.10 percentage points.",
    caveat: "Stricter underwriting. Excellent credit and stable income required for the floor rate. No prequalification (rate quote requires a hard pull).",
    bestFor: "Excellent credit, longest terms, lowest possible rate.",
  },
  {
    rank: 3,
    lender: "Marcus by Goldman Sachs",
    brand: "marcus-loan",
    apr: "9.99% to 24.99%",
    loanAmount: "$3,500 to $40,000",
    term: "3 to 6 years",
    highlight: "No fees, no origination, no prepayment penalty. On-time payment reward lets you defer one payment after 12 consecutive on-time months.",
    caveat: "No co-applicant option. Loan max is $40,000, lower than SoFi or LightStream.",
    bestFor: "Good credit borrowers who want a simple, no-fee experience.",
  },
  {
    rank: 4,
    lender: "Discover Personal Loans",
    brand: "discover-loan",
    apr: "7.99% to 24.99%",
    loanAmount: "$2,500 to $40,000",
    term: "3 to 7 years",
    highlight: "30-day money-back guarantee (return funds with no interest). Same-day decisions, next-day funding. No origination, no prepayment penalty.",
    caveat: "Slightly stricter underwriting than Upstart for fair credit applicants.",
    bestFor: "Good credit, smaller loan amounts, fast funding.",
  },
  {
    rank: 5,
    lender: "Upstart",
    brand: "upstart",
    apr: "7.80% to 35.99%",
    loanAmount: "$1,000 to $50,000",
    term: "3 or 5 years",
    highlight: "AI-driven underwriting weighs education and employment in addition to FICO. Approves applicants with limited credit history that traditional lenders reject.",
    caveat: "Origination fee 0% to 12% deducted at funding. Higher fees concentrate in lower credit tiers.",
    bestFor: "Fair credit, thin credit files, recent graduates.",
  },
  {
    rank: 6,
    lender: "LendingClub",
    brand: "lendingclub",
    apr: "9.57% to 35.99%",
    loanAmount: "$1,000 to $40,000",
    term: "2 to 6 years",
    highlight: "Joint applications allowed (boosts approval odds and can lower the rate). Direct payment to creditors for debt consolidation.",
    caveat: "Origination fee 3% to 8% deducted at funding. No same-day funding.",
    bestFor: "Joint applicants, debt consolidation with direct creditor payment.",
  },
];

const tierRanges = [
  { label: "Excellent · 740+", value: "7.99% to 12%", caption: "SoFi, LightStream, Marcus" },
  { label: "Good · 670 to 739", value: "10% to 20%", caption: "Marcus, Discover, Upstart" },
  { label: "Fair · 580 to 669", value: "15% to 30%", caption: "Best Egg, LendingClub, Upstart" },
  { label: "Poor · below 580", value: "20% to 35.99%", caption: "Upstart, Prosper, secured loans" },
];

const useCases = [
  {
    title: "Debt consolidation",
    detail: "Roll high-rate credit card debt into one fixed monthly payment. The CFPB notes that consolidation works best when the new APR is at least 5 percentage points below your weighted average card APR.",
  },
  {
    title: "Home improvement",
    detail: "Fund a kitchen, bath, or roof project without tapping your home equity. Faster than a HELOC and no risk to your house if you default.",
  },
  {
    title: "Medical bills",
    detail: "Cover an out-of-pocket procedure or unexpected hospital balance. The CFPB recommends negotiating the bill with the provider first; many will discount for cash.",
  },
  {
    title: "Major life events",
    detail: "Weddings, relocations, adoption fees. Pick a personal loan over a credit card when you need more than 12 months to repay.",
  },
  {
    title: "Emergency expenses",
    detail: "A car repair, an HVAC failure, a vet bill. A personal loan beats payday lenders and high-rate cash advances on cost.",
  },
  {
    title: "Refinancing existing debt",
    detail: "Replace a higher-rate personal loan or auto loan with a lower-rate alternative. Always confirm the new APR (with origination) is genuinely lower.",
  },
];

const faqItems: FAQItem[] = [
  {
    question: "What is a personal loan and how does it work?",
    answer: "A personal loan is an installment loan with a fixed interest rate, fixed monthly payment, and a definite payoff date (usually 2 to 7 years). You receive the full amount up front and repay it on a set schedule. Most personal loans are unsecured, meaning no collateral is required. The CFPB lists personal loans alongside mortgages and auto loans as one of the three primary installment products.",
  },
  {
    question: "Personal loan vs credit card: when does each win?",
    answer: "A personal loan wins when the balance is over $5,000 or you need more than 18 months to repay. A 0% APR credit card wins for smaller balances you can pay off inside the promotional window (typically 12 to 21 months). For debt consolidation, run the math both ways. Our debt payoff calculator handles both scenarios.",
  },
  {
    question: "How much can I borrow with a personal loan?",
    answer: "Most lenders cap personal loans between $40,000 and $100,000. SoFi and LightStream go up to $100,000; Marcus and Discover cap at $40,000. The amount you actually qualify for depends on your income, debt-to-income ratio, and credit score. Lenders typically lend up to 40% of annual gross income for unsecured loans.",
  },
  {
    question: "How fast can I get the money?",
    answer: "Most prime lenders fund within 1 to 5 business days. SoFi, LightStream, and Discover offer same-day or next-day funding for approved applicants. Upstart, LendingClub, and Best Egg typically fund in 1 to 3 days. The slowest part of the process is verification of income and identity, not the actual transfer.",
  },
  {
    question: "Will applying hurt my credit score?",
    answer: "Prequalification uses a soft pull and has no effect on your score. A formal application triggers a hard inquiry, which typically drops your FICO 2 to 5 points temporarily. Multiple hard inquiries within 14 to 45 days are usually counted as one by FICO scoring models, so cluster your applications inside a single window.",
  },
  {
    question: "What is APR and why does it matter more than the interest rate?",
    answer: "APR (annual percentage rate) includes the interest rate plus origination fees. A loan with a 9% rate and a 5% origination fee can cost more over its life than a loan with an 11% rate and no fee. Always compare APR. The CFPB requires lenders to disclose APR on every loan offer.",
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
          { name: "Personal Loans", href: "/loans/personal" },
        ]}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-bg">
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
        <div className="relative max-w-(--max-w-page) mx-auto px-6 pt-20 pb-16">
          <span className="chip chip-violet mb-6">
            <span className="pulse-dot" /> Personal loans, no paid rankings
          </span>
          <h1 className="font-display font-extrabold text-[clamp(2.5rem,6vw,5rem)] leading-[1.02] tracking-[-0.03em] mb-6 max-w-3xl">
            The best personal loans for almost any purpose.
          </h1>
          <p className="text-lg md:text-xl text-mute leading-relaxed max-w-2xl mb-8">
            A personal loan gives you a fixed rate, a fixed monthly payment, and a definite payoff date. We compare the six lenders that consistently beat the market on APR, fees, and approval speed. Soft-pull prequalify with each before you formally apply; the CFPB confirms rate-shopping inside a 14- to 45-day window does not hurt your credit.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/calculators/personal-loan-payoff" className="pill pill-ink">
              Calculate your payment
              <span aria-hidden>→</span>
            </Link>
            <Link href="/loans/by-credit-tier" className="pill pill-ghost">
              Rates by credit tier
            </Link>
          </div>
        </div>
      </section>

      {/* RATE SNAPSHOT */}
      <section className="border-y border-line bg-bg-soft/60">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-display font-bold text-2xl tracking-tight">APR ranges by credit tier</h2>
            <span className="text-xs font-mono text-mute">Updated weekly</span>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {tierRanges.map((t) => (
              <div key={t.label} className="card p-5">
                <div className="text-xs text-mute mb-2">{t.label}</div>
                <div className="font-display font-extrabold text-2xl md:text-3xl tabular tracking-tight mb-2">
                  {t.value}
                </div>
                <div className="text-xs text-mute mt-2">{t.caption}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TOP PICKS */}
      <section className="max-w-(--max-w-page) mx-auto px-6 py-20">
        <div className="grid grid-cols-12 gap-8 mb-10">
          <div className="col-span-12 md:col-span-7">
            <span className="chip chip-mute mb-4">
              <span className="pulse-dot" /> Top 6 picks
            </span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-tight">
              Six lenders worth your prequalification.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5 flex md:items-end md:justify-end">
            <p className="text-mute leading-relaxed md:text-right md:max-w-sm">
              Every lender on this list is CFPB-registered or originates through a chartered bank. None pay for placement.
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
      </section>

      {/* USE CASES */}
      <section className="bg-bg-soft/60 border-y border-line">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-20">
          <div className="mb-10">
            <span className="chip chip-mute mb-4">Use cases</span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-tight">
              When a personal loan is the right tool.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {useCases.map((u) => (
              <div key={u.title} className="card p-6">
                <h3 className="font-display font-bold text-lg mb-2 tracking-tight">{u.title}</h3>
                <p className="text-mute text-sm leading-relaxed">{u.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW TO QUALIFY */}
      <section className="max-w-(--max-w-page) mx-auto px-6 py-20">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 lg:col-span-4">
            <span className="chip chip-mute mb-4">How to qualify</span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-tight mb-6">
              Five things every prime lender checks.
            </h2>
            <p className="text-mute leading-relaxed">
              FICO is the headline number, but your real offer depends on the full picture.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-8 space-y-8 text-base leading-relaxed">
            <div>
              <h3 className="font-display font-bold text-xl mb-2 tracking-tight">Credit score (35% to 50% of the decision)</h3>
              <p className="text-mute">
                Most prime lenders set a minimum FICO of 660 to 680. SoFi, LightStream, and Marcus typically require 680 or higher for the best rates. Upstart, LendingClub, and Best Egg approve scores in the 580 to 660 band but at higher APRs. The Federal Reserve consumer credit data shows a clear cliff at 700 FICO; rates above that band drop sharply.
              </p>
            </div>
            <div>
              <h3 className="font-display font-bold text-xl mb-2 tracking-tight">Debt-to-income ratio (DTI)</h3>
              <p className="text-mute">
                Most lenders cap DTI at 40% to 50%. DTI is your monthly debt payments (cards, student loans, mortgage, child support) divided by gross monthly income. To improve your DTI quickly, pay down a credit card balance before applying; even a 15-point drop in utilization can move the needle.
              </p>
            </div>
            <div>
              <h3 className="font-display font-bold text-xl mb-2 tracking-tight">Income and employment stability</h3>
              <p className="text-mute">
                Lenders want to see at least one year at your current employer or in your current line of work. Self-employed applicants need two years of tax returns. Irregular or 1099 income is approved at most prime lenders, but expect a slightly higher rate than a salaried W-2 borrower with the same FICO.
              </p>
            </div>
            <div>
              <h3 className="font-display font-bold text-xl mb-2 tracking-tight">Loan purpose</h3>
              <p className="text-mute">
                Debt consolidation and home improvement loans typically receive better rates than general-purpose loans, because the repayment is more predictable. Vacation, wedding, and discretionary purposes often see slightly higher rates and smaller approved amounts. Be honest about purpose; lying on a loan application is fraud.
              </p>
            </div>
            <div>
              <h3 className="font-display font-bold text-xl mb-2 tracking-tight">Soft-pull prequalification</h3>
              <p className="text-mute">
                Five of our six picks (SoFi, Marcus, Discover, Upstart, LendingClub) offer soft-pull prequalification. Use it. Prequalifying with three to five lenders takes 15 minutes and gives you real APR quotes without affecting your credit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PITFALLS */}
      <section className="bg-bg-soft/60 border-y border-line">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-20">
          <div className="grid grid-cols-12 gap-10">
            <div className="col-span-12 lg:col-span-4">
              <span className="chip chip-mute mb-4">Common pitfalls</span>
              <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-tight mb-6">
                Mistakes that cost borrowers thousands.
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-8 space-y-8 text-base leading-relaxed">
              <div>
                <h3 className="font-display font-bold text-xl mb-2 tracking-tight">Comparing rate instead of APR</h3>
                <p className="text-mute">
                  A 9% rate with a 5% origination fee can cost more than an 11% rate with no fee. APR rolls origination into the comparison. The CFPB requires every lender to disclose APR on every offer. Always sort by APR, never by headline rate.
                </p>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl mb-2 tracking-tight">Stretching the term to lower the payment</h3>
                <p className="text-mute">
                  A 7-year loan looks attractive because the monthly payment is lower, but the total interest paid is much higher. On a $20,000 loan at 12%, a 3-year term costs $3,910 in interest; a 7-year term costs $9,790. Pick the shortest term you can afford.
                </p>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl mb-2 tracking-tight">Borrowing more than you need</h3>
                <p className="text-mute">
                  Lenders often pre-approve you for more than you asked for. Resist. Each extra $1,000 at 12% costs roughly $200 in interest over 3 years and $400 over 5. Borrow only what the project or expense requires.
                </p>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl mb-2 tracking-tight">Skipping prequalification and going straight to a hard pull</h3>
                <p className="text-mute">
                  A formal application with one lender drops your score 2 to 5 points. Three formal applications without prequalifying can drop you 6 to 15 points and signal credit-seeking behavior to other lenders. Soft-pull prequalify first, every time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CROSS-LINKS */}
      <section className="max-w-(--max-w-page) mx-auto px-6 py-16">
        <div className="mb-8">
          <span className="chip chip-mute mb-4">Tools and related</span>
          <h2 className="font-display font-extrabold text-3xl tracking-tight">Run the math, then keep exploring.</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: "Personal loan calculator", href: "/calculators/personal-loan-payoff", detail: "See your monthly payment by APR and term." },
            { label: "Debt payoff calculator", href: "/calculators/debt-payoff", detail: "Compare a loan to a balance transfer." },
            { label: "By credit tier", href: "/loans/by-credit-tier", detail: "Realistic APRs by FICO band." },
            { label: "Debt consolidation", href: "/loans/debt-consolidation", detail: "Roll cards into one loan." },
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
      </section>

      {/* FAQ */}
      <section className="bg-bg-soft/60 border-y border-line">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-20">
          <div className="mb-10">
            <span className="chip chip-mute mb-4">FAQ</span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight">
              Common questions about personal loans.
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
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="bg-lime border-y border-ink">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-14 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight max-w-xl leading-tight">
              See your real monthly payment in 30 seconds.
            </h2>
            <p className="text-ink/70 mt-2">No signup. No soft pull. Just the math.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/calculators/personal-loan-payoff" className="pill pill-ink">
              Loan calculator
              <span aria-hidden>→</span>
            </Link>
            <Link href="/loans/by-credit-tier" className="pill pill-ghost">
              Rates by credit tier
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
