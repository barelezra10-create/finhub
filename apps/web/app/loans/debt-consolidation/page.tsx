import Link from "next/link";
import type { Metadata } from "next";
import { FAQPageSchema, BreadcrumbListSchema, type FAQItem } from "@/components/schemas";
import { BrandLogo } from "@/components/brand-logo";

export const metadata: Metadata = {
  title: "Best Debt Consolidation Loans 2026: Roll Cards Into One Payment | Fintiex",
  description:
    "Use a personal loan to consolidate credit card debt at a lower APR. Real math: $15K at 24% vs 11%. Top picks: SoFi, LightStream, Marcus, Best Egg, Discover.",
  alternates: { canonical: "/loans/debt-consolidation" },
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
    highlight: "No fees of any kind. Unemployment protection lets you pause payments if you lose your job. Direct payoff to creditors available on request.",
    caveat: "Direct deposit setup required to unlock the lowest rate tier.",
    bestFor: "Excellent credit, large card balances ($25K+), no fees.",
  },
  {
    rank: 2,
    lender: "LightStream",
    brand: "lightstream",
    apr: "7.99% to 25.49%",
    loanAmount: "$5,000 to $100,000",
    term: "2 to 12 years",
    highlight: "Lowest advertised APR. Funds go to your bank account, not creditors directly, so you control the payoff sequence.",
    caveat: "No prequalification (rate quote requires a hard pull). Excellent credit and stable income required for the floor rate.",
    bestFor: "Excellent credit, longest terms, lowest possible rate.",
  },
  {
    rank: 3,
    lender: "Marcus by Goldman Sachs",
    brand: "marcus-loan",
    apr: "9.99% to 24.99%",
    loanAmount: "$3,500 to $40,000",
    term: "3 to 6 years",
    highlight: "No origination, no prepayment penalty, no late fees. Direct payment to up to 10 creditors at funding (Marcus pays them; you pay Marcus).",
    caveat: "Loan max is $40,000. Single applicant only.",
    bestFor: "Good credit, want hands-off payoff to multiple creditors.",
  },
  {
    rank: 4,
    lender: "Best Egg",
    brand: "bestegg",
    apr: "8.99% to 35.99%",
    loanAmount: "$2,000 to $50,000",
    term: "3 to 5 years",
    highlight: "Fast funding (often same business day). Direct creditor payoff option. Strong approval rates for fair credit applicants.",
    caveat: "Origination fee 0.99% to 8.99% deducted at funding (effectively raises your APR).",
    bestFor: "Fair credit, fast funding, flexible loan amounts.",
  },
  {
    rank: 5,
    lender: "Discover Personal Loans",
    brand: "discover-loan",
    apr: "7.99% to 24.99%",
    loanAmount: "$2,500 to $40,000",
    term: "3 to 7 years",
    highlight: "30-day money-back guarantee. Direct payment to creditors at funding. No origination, no prepayment penalty, same-day decisions.",
    caveat: "Slightly stricter underwriting than Best Egg or Upstart for fair credit.",
    bestFor: "Good credit, fast funding, want creditor direct-pay convenience.",
  },
];

const consolidationMath = [
  { scenario: "Credit cards (current)", balance: "$15,000", apr: "24.00%", payment: "$435", payoff: "5+ years if minimums only", interestPaid: "$11,800+" },
  { scenario: "5-year personal loan at 11%", balance: "$15,000", apr: "11.00%", payment: "$326", payoff: "60 months exactly", interestPaid: "$4,567" },
  { scenario: "3-year personal loan at 11%", balance: "$15,000", apr: "11.00%", payment: "$491", payoff: "36 months exactly", interestPaid: "$2,684" },
];

const whenItWorks = [
  {
    title: "You have $5,000+ in card debt",
    detail: "Below $5,000, a 0% APR balance transfer card is usually the better tool because the promo period covers your full payoff. The CFPB recommends consolidation primarily for balances that take 2+ years to repay.",
  },
  {
    title: "Your card APR is 5+ points higher than the loan APR",
    detail: "If your weighted average card APR is 22% and the best loan offer is 20%, the savings barely cover the friction. A real consolidation play needs at least 5 percentage points of spread.",
  },
  {
    title: "You can stop using the cards after consolidating",
    detail: "The most common consolidation failure: borrower pays off cards with the loan, then runs balances back up. Now they owe the loan and the cards. Consolidation only works as a one-time reset if you change behavior.",
  },
  {
    title: "Your DTI is below 50%",
    detail: "Lenders typically require debt-to-income below 40% to 50% to approve a consolidation loan. If your DTI is over 50%, lenders will likely decline; nonprofit credit counseling is a better next step.",
  },
];

const faqItems: FAQItem[] = [
  {
    question: "How does debt consolidation actually save me money?",
    answer: "Three ways. First, the lower APR means more of each payment goes to principal. Second, the fixed term gives you a definite payoff date, instead of paying card minimums for years. Third, a single payment is easier to manage and reduces missed-payment risk. Example: $15,000 at 24% APR (cards) vs 11% APR (5-year loan) saves over $7,000 in lifetime interest.",
  },
  {
    question: "Will consolidation hurt my credit score?",
    answer: "Short-term: small drop. The hard inquiry costs 2 to 5 points. Opening a new account lowers average account age slightly. Long-term: usually a boost. Paying off card balances drops your utilization, which is 30% of your FICO score. Most borrowers see a 10 to 20 point lift within 90 days as utilization recalculates.",
  },
  {
    question: "Personal loan vs balance transfer card: which is better?",
    answer: "Balance transfer wins for $5,000 to $10,000 you can repay in 18 to 21 months (the typical 0% promo window). Personal loan wins for larger balances, longer payoff timelines, or borrowers who lack the discipline for promo deadlines. Run both scenarios in our debt payoff calculator to see the dollar impact for your specific situation.",
  },
  {
    question: "Should I close my credit cards after consolidating?",
    answer: "Usually no. Closing cards lowers your available credit, which raises your utilization ratio and can drop your FICO 20 to 50 points. Better play: keep the cards open with zero balance, and freeze them physically (literal block of ice in the freezer is a popular tactic). The CFPB notes that closed accounts still appear on your report for 10 years.",
  },
  {
    question: "What if I cannot qualify for a consolidation loan?",
    answer: "If your DTI is over 50% or your FICO is under 580, prime lenders will likely decline. Better options at that point: nonprofit credit counseling (find a HUD-approved counselor at consumerfinance.gov), a debt management plan (DMP) administered by a nonprofit, or a direct conversation with each card issuer about hardship programs. Avoid for-profit debt settlement; the CFPB has flagged this segment for predatory practices.",
  },
  {
    question: "Does the lender pay my creditors directly?",
    answer: "Some do, some do not. Marcus, Discover, and Best Egg can pay up to 10 creditors directly at funding. SoFi and LightStream deposit funds in your account and you pay creditors yourself. Direct payoff is convenient but adds 1 to 3 days to funding. Either way, get screenshots of card balances showing $0 within 7 days to confirm payoff.",
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
          { name: "Debt Consolidation", href: "/loans/debt-consolidation" },
        ]}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-bg">
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
        <div className="relative max-w-(--max-w-page) mx-auto px-6 pt-20 pb-16">
          <span className="chip chip-violet mb-6">
            <span className="pulse-dot" /> Real APR math, no payment-stretching
          </span>
          <h1 className="font-display font-extrabold text-[clamp(2.5rem,6vw,5rem)] leading-[1.02] tracking-[-0.03em] mb-6 max-w-3xl">
            Debt consolidation: roll cards into one lower payment.
          </h1>
          <p className="text-lg md:text-xl text-mute leading-relaxed max-w-2xl mb-8">
            A consolidation loan replaces multiple high-rate credit card balances with one fixed-rate, fixed-term loan. Done right, it cuts your interest cost in half and gives you a definite payoff date. Done wrong, you pay off the cards, run them back up, and end up owing twice. We show the math, the lenders, and the behavior changes that decide which outcome you get.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/calculators/debt-payoff" className="pill pill-ink">
              Run consolidation math
              <span aria-hidden>→</span>
            </Link>
            <Link href="/credit-cards/balance-transfer" className="pill pill-ghost">
              Balance transfer cards
            </Link>
          </div>
        </div>
      </section>

      {/* MATH EXAMPLE */}
      <section className="border-y border-line bg-bg-soft/60">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-display font-bold text-2xl tracking-tight">$15,000 example: cards vs loan</h2>
            <span className="text-xs font-mono text-mute">Illustrative only</span>
          </div>
          <div className="card-flush overflow-hidden">
            <div className="grid grid-cols-12 px-6 py-3 text-xs font-mono uppercase tracking-wider text-mute border-b border-line bg-bg-soft/50">
              <div className="col-span-4">Scenario</div>
              <div className="col-span-2">APR</div>
              <div className="col-span-2">Payment</div>
              <div className="col-span-2">Payoff</div>
              <div className="col-span-2 text-right">Interest paid</div>
            </div>
            {consolidationMath.map((row, i) => (
              <div
                key={row.scenario}
                className={`grid grid-cols-12 px-6 py-4 items-center text-sm ${
                  i === consolidationMath.length - 1 ? "" : "border-b border-line-soft"
                }`}
              >
                <div className="col-span-12 md:col-span-4 font-display font-semibold mb-2 md:mb-0">{row.scenario}</div>
                <div className="col-span-3 md:col-span-2 font-mono tabular">{row.apr}</div>
                <div className="col-span-3 md:col-span-2 font-mono tabular">{row.payment}</div>
                <div className="col-span-3 md:col-span-2 text-mute text-xs">{row.payoff}</div>
                <div className="col-span-3 md:col-span-2 text-right font-mono tabular font-semibold">{row.interestPaid}</div>
              </div>
            ))}
          </div>
          <p className="text-xs text-mute mt-4">
            Card scenario assumes minimum payments of 2.9% of balance. Loan scenarios use fixed amortization at the stated APR.
          </p>
        </div>
      </section>

      {/* TOP PICKS */}
      <section className="max-w-(--max-w-page) mx-auto px-6 py-20">
        <div className="grid grid-cols-12 gap-8 mb-10">
          <div className="col-span-12 md:col-span-7">
            <span className="chip chip-mute mb-4">Top 5 picks</span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-tight">
              Five lenders built for consolidation.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5 flex md:items-end md:justify-end">
            <p className="text-mute leading-relaxed md:text-right md:max-w-sm">
              Three of these (Marcus, Discover, Best Egg) pay creditors directly at funding so the cards close out the day money lands.
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

      {/* WHEN IT WORKS */}
      <section className="bg-bg-soft/60 border-y border-line">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-20">
          <div className="grid grid-cols-12 gap-8 mb-10">
            <div className="col-span-12 md:col-span-7">
              <span className="chip chip-mute mb-4">Is it right for you?</span>
              <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-tight">
                Four conditions that decide if consolidation works.
              </h2>
            </div>
            <div className="col-span-12 md:col-span-5 flex md:items-end md:justify-end">
              <p className="text-mute leading-relaxed md:text-right md:max-w-sm">
                Miss any one of these, and consolidation often becomes a delaying tactic instead of a fix.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whenItWorks.map((item) => (
              <div key={item.title} className="card p-6">
                <h3 className="font-display font-bold text-lg mb-2 tracking-tight">{item.title}</h3>
                <p className="text-mute text-sm leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="max-w-(--max-w-page) mx-auto px-6 py-20">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 lg:col-span-4">
            <span className="chip chip-mute mb-4">The process</span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-tight mb-6">
              Five steps from prequalification to payoff.
            </h2>
            <p className="text-mute leading-relaxed">
              Total elapsed time: 7 to 14 days for most borrowers.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-8 space-y-8 text-base leading-relaxed">
            <div>
              <h3 className="font-display font-bold text-xl mb-2 tracking-tight">1. List every card balance and APR</h3>
              <p className="text-mute">
                Pull your three credit reports free at annualcreditreport.com. List every revolving balance, the APR on each, and the minimum payment. Sum the balances to know your loan target. Calculate your weighted average APR; if it is below 12%, consolidation may not save enough to justify the move.
              </p>
            </div>
            <div>
              <h3 className="font-display font-bold text-xl mb-2 tracking-tight">2. Soft-pull prequalify with 3 to 5 lenders</h3>
              <p className="text-mute">
                Open prequalification with SoFi, Marcus, Discover, Best Egg, and Upstart. Each takes 5 minutes and uses a soft pull (no credit impact). You will see real APR offers based on your actual profile, not headline rates.
              </p>
            </div>
            <div>
              <h3 className="font-display font-bold text-xl mb-2 tracking-tight">3. Pick the lowest APR (not the lowest payment)</h3>
              <p className="text-mute">
                Compare APR (which includes origination fee), not the monthly payment. A 7-year loan has a lower payment but more interest. Pick the shortest term you can comfortably afford. Use our calculator to see total interest by term.
              </p>
            </div>
            <div>
              <h3 className="font-display font-bold text-xl mb-2 tracking-tight">4. Submit the formal application</h3>
              <p className="text-mute">
                Hard pull happens here (drops FICO 2 to 5 points, recovers in 3 to 6 months). Most lenders fund within 1 to 5 business days. If the lender supports direct creditor payoff, provide each card issuer's payoff address and account number.
              </p>
            </div>
            <div>
              <h3 className="font-display font-bold text-xl mb-2 tracking-tight">5. Confirm card balances hit $0 and freeze the cards</h3>
              <p className="text-mute">
                Within 7 days, log in to each card and confirm balance is $0. Keep the cards open (closing them hurts your credit utilization). Freeze them physically or remove them from auto-pay subscriptions. Set up auto-pay on the new loan from your bank.
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
            <h2 className="font-display font-extrabold text-3xl tracking-tight">Run the math, then keep exploring.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "Debt payoff calculator", href: "/calculators/debt-payoff", detail: "Compare loan vs balance transfer." },
              { label: "Loan calculator", href: "/calculators/personal-loan-payoff", detail: "Monthly payment by APR and term." },
              { label: "By credit tier", href: "/loans/by-credit-tier", detail: "Realistic rates for your FICO." },
              { label: "Balance transfer cards", href: "/credit-cards/balance-transfer", detail: "Sometimes a 0% card beats a loan." },
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
            Common questions about debt consolidation.
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
              See how much consolidation saves you.
            </h2>
            <p className="text-ink/70 mt-2">Plug in your card balances and APRs. We compare against a personal loan.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/calculators/debt-payoff" className="pill pill-ink">
              Debt payoff calculator
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
