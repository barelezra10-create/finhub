import Link from "next/link";
import type { Metadata } from "next";
import { FAQPageSchema, BreadcrumbListSchema, type FAQItem } from "@/components/schemas";
import { BrandLogo } from "@/components/brand-logo";

export const metadata: Metadata = {
  title: "Auto Refinance 2026: Lower Your Car Loan Rate | Fintiex",
  description:
    "Auto refinance math, top lenders (LightStream, Capital One, RateGenius), and when refinancing actually saves money. Soft-pull prequalify before applying.",
  alternates: { canonical: "/loans/auto/refinance" },
};

interface Pick {
  rank: number;
  lender: string;
  brand?: string;
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
    apr: "6.49% to 9.99%",
    loanAmount: "$5,000 to $100,000",
    term: "2 to 7 years",
    highlight: "Lowest advertised refi APR among major lenders. Same-day funding for approved applicants. Rate Beat program matches a competing offer minus 0.10 percentage points.",
    caveat: "No prequalification (rate quote requires a hard pull). Excellent credit and stable income required for the floor rate.",
    bestFor: "720+ FICO, large balances, lowest possible rate.",
  },
  {
    rank: 2,
    lender: "Capital One Auto Refinance",
    apr: "6.99% to 13.50%",
    loanAmount: "$7,500 to $50,000",
    term: "2 to 6 years",
    highlight: "Soft-pull prequalification with no impact on credit. Strong approval rates for good credit. Direct payoff to your old lender (no paperwork on your side).",
    caveat: "Vehicle restrictions: cars must be less than 10 years old, under 120,000 miles, and not commercial.",
    bestFor: "Good credit, mainstream vehicles, want to prequalify before applying.",
  },
  {
    rank: 3,
    lender: "RateGenius",
    apr: "5.49% to 18.00%",
    loanAmount: "$10,000 to $100,000",
    term: "2 to 7 years",
    highlight: "Aggregator that submits one application to 150+ credit unions and banks simultaneously. Soft pull only at prequalification.",
    caveat: "Final lender is selected by RateGenius, so the rate you see at prequal may differ at closing once the underwriter assigns a credit union.",
    bestFor: "Borrowers who want one application to shop dozens of lenders.",
  },
];

const sampleSavings = [
  { balance: "$15,000", oldApr: "11.50%", newApr: "7.50%", monthsLeft: "48", oldPayment: "$391", newPayment: "$362", monthlySaved: "$29", lifetimeSaved: "$1,402" },
  { balance: "$25,000", oldApr: "9.50%", newApr: "6.50%", monthsLeft: "60", oldPayment: "$525", newPayment: "$489", monthlySaved: "$36", lifetimeSaved: "$2,180" },
  { balance: "$35,000", oldApr: "13.00%", newApr: "8.00%", monthsLeft: "60", oldPayment: "$796", newPayment: "$710", monthlySaved: "$86", lifetimeSaved: "$5,178" },
];

const whenItMakes = [
  {
    title: "Your credit improved",
    detail: "If your FICO has gone up 50+ points since the original loan, your offer will likely improve. Common scenario: you took a dealer loan with a 580 FICO and a 16% APR; one year later, your score is 660 and prime credit unions will offer 9%.",
  },
  {
    title: "Market rates dropped",
    detail: "Auto loan rates move with the Federal Reserve. If the prime rate has fallen 1+ percentage point since you originated, refi math usually works for any tier above subprime.",
  },
  {
    title: "Dealer markup at origination",
    detail: "Dealers can legally add up to 2 percentage points to a wholesale rate as compensation. Refi inside the first 60 days at a credit union to claw it back.",
  },
  {
    title: "You want to remove a cosigner",
    detail: "Refinancing in your name only releases the cosigner from the original loan. Possible only if your credit and income now qualify standalone.",
  },
  {
    title: "You need lower monthly payment",
    detail: "Stretching the term lowers the monthly. Math caveat: you pay more total interest. Only do this if cash flow is the priority and you plan to pay extra when possible.",
  },
];

const faqItems: FAQItem[] = [
  {
    question: "When does auto refinance actually save money?",
    answer: "The rule of thumb: you need at least 1 percentage point of APR improvement and at least 24 months remaining on your loan. Below those thresholds, the lifetime savings rarely justify the application effort. Use a refinance calculator with your specific balance, payoff date, and proposed APR before deciding.",
  },
  {
    question: "Will refinancing hurt my credit score?",
    answer: "Slightly and temporarily. Capital One and RateGenius offer soft-pull prequalification (no impact). The final application is a hard pull and drops your FICO 2 to 5 points. Multiple hard pulls within 14 to 45 days are usually counted as one by FICO scoring models, so cluster your applications.",
  },
  {
    question: "Can I refinance a car loan I just took out?",
    answer: "Yes. There is no waiting period set by federal law. Most lenders require the title to be transferred (which usually takes 30 to 60 days after purchase). The most common refi scenario is a borrower who took dealer financing at delivery and refinances through a credit union 30 to 90 days later.",
  },
  {
    question: "What if I am underwater on my car loan?",
    answer: "Underwater (also called negative equity) means you owe more than the car is worth. Most refi lenders will not lend more than 100% to 110% of the vehicle's current value. If you are deeply underwater, your options are: keep the original loan and pay it down, sell the car privately and cover the gap with cash, or wait until depreciation slows and the gap shrinks.",
  },
  {
    question: "Are there refi fees?",
    answer: "Most prime auto refi lenders (LightStream, Capital One, RateGenius) charge no origination fee. Some states charge a small title transfer fee ($20 to $100). Watch out for lenders that charge a 1% to 4% origination fee; the fee almost always wipes out the rate savings on a small loan balance.",
  },
  {
    question: "Should I extend the term when I refinance?",
    answer: "Usually not. Extending the term to 72 or 84 months lowers the payment but increases total interest paid and keeps you underwater longer. The CFPB warns that long-term auto loans now make up over a third of new originations and are linked to higher delinquency rates. If you must extend, plan to make extra principal payments when cash allows.",
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
          { name: "Auto Loans", href: "/loans/auto" },
          { name: "Auto Refinance", href: "/loans/auto/refinance" },
        ]}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-bg">
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
        <div className="relative max-w-(--max-w-page) mx-auto px-6 pt-20 pb-16">
          <span className="chip chip-violet mb-6">
            <span className="pulse-dot" /> Refi math, no payment-stretching tricks
          </span>
          <h1 className="font-display font-extrabold text-[clamp(2.5rem,6vw,5rem)] leading-[1.02] tracking-[-0.03em] mb-6 max-w-3xl">
            Auto refinance: lower your rate without changing the car.
          </h1>
          <p className="text-lg md:text-xl text-mute leading-relaxed max-w-2xl mb-8">
            If you took a dealer loan and your credit has improved, you are very likely overpaying. Refinancing replaces your existing auto loan with a lower-rate one. We show the exact math that decides whether refi is worth it, the three lenders worth your prequalification, and the traps that cost borrowers the savings they expected.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/calculators/personal-loan-payoff" className="pill pill-ink">
              Run the savings math
              <span aria-hidden>→</span>
            </Link>
            <Link href="/loans/auto" className="pill pill-ghost">
              Auto loan basics
            </Link>
          </div>
        </div>
      </section>

      {/* SAMPLE SAVINGS */}
      <section className="border-y border-line bg-bg-soft/60">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-display font-bold text-2xl tracking-tight">Sample savings</h2>
            <span className="text-xs font-mono text-mute">Same term, lower APR</span>
          </div>
          <div className="card-flush overflow-hidden">
            <div className="grid grid-cols-12 px-6 py-3 text-xs font-mono uppercase tracking-wider text-mute border-b border-line bg-bg-soft/50">
              <div className="col-span-3">Balance</div>
              <div className="col-span-2">Old APR</div>
              <div className="col-span-2">New APR</div>
              <div className="col-span-2">Monthly saved</div>
              <div className="col-span-3 text-right">Lifetime saved</div>
            </div>
            {sampleSavings.map((row, i) => (
              <div
                key={row.balance}
                className={`grid grid-cols-12 px-6 py-4 items-center text-sm ${
                  i === sampleSavings.length - 1 ? "" : "border-b border-line-soft"
                }`}
              >
                <div className="col-span-3 font-mono tabular font-semibold">{row.balance}</div>
                <div className="col-span-2 font-mono tabular text-mute">{row.oldApr}</div>
                <div className="col-span-2 font-mono tabular">{row.newApr}</div>
                <div className="col-span-2 font-mono tabular">{row.monthlySaved}</div>
                <div className="col-span-3 text-right font-mono tabular font-semibold">{row.lifetimeSaved}</div>
              </div>
            ))}
          </div>
          <p className="text-xs text-mute mt-4">
            Examples assume same remaining term, no extension, no fees. Your savings depend on remaining months, balance, and rate spread.
          </p>
        </div>
      </section>

      {/* WHEN IT MAKES SENSE */}
      <section className="max-w-(--max-w-page) mx-auto px-6 py-20">
        <div className="grid grid-cols-12 gap-8 mb-10">
          <div className="col-span-12 md:col-span-7">
            <span className="chip chip-mute mb-4">When refi works</span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-tight">
              Five scenarios where refi pays off.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5 flex md:items-end md:justify-end">
            <p className="text-mute leading-relaxed md:text-right md:max-w-sm">
              The 1% APR improvement and 24-month remaining rule covers most cases. These five trigger that math.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {whenItMakes.map((item) => (
            <div key={item.title} className="card p-6">
              <h3 className="font-display font-bold text-lg mb-2 tracking-tight">{item.title}</h3>
              <p className="text-mute text-sm leading-relaxed">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TOP PICKS */}
      <section className="bg-bg-soft/60 border-y border-line">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-20">
          <div className="grid grid-cols-12 gap-8 mb-10">
            <div className="col-span-12 md:col-span-7">
              <span className="chip chip-mute mb-4">Top 3 picks</span>
              <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-tight">
                Three refi lenders worth your prequalification.
              </h2>
            </div>
            <div className="col-span-12 md:col-span-5 flex md:items-end md:justify-end">
              <p className="text-mute leading-relaxed md:text-right md:max-w-sm">
                Your local credit union is also worth a 5-minute call. They often beat national lenders by 0.5 to 1 percentage point.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {picks.map((p) => (
              <div key={p.lender} className="card p-6 md:p-7">
                <div className="grid grid-cols-12 gap-6 items-start">
                  <div className="col-span-12 md:col-span-1 flex items-center gap-3">
                    {p.brand ? (
                      <BrandLogo brand={p.brand} size={48} />
                    ) : (
                      <div className="w-12 h-12 rounded-xl bg-bg-soft border border-line flex items-center justify-center font-display font-bold text-xs text-mute">
                        {p.lender.split(" ").map((w) => w[0]).join("").slice(0, 3)}
                      </div>
                    )}
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

      {/* THE MATH */}
      <section className="max-w-(--max-w-page) mx-auto px-6 py-20">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 lg:col-span-4">
            <span className="chip chip-mute mb-4">The math</span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-tight mb-6">
              The three numbers that decide if refi is worth it.
            </h2>
            <p className="text-mute leading-relaxed">
              Plug your situation into our loan calculator with both APRs to see the exact dollar impact.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-8 space-y-8 text-base leading-relaxed">
            <div>
              <h3 className="font-display font-bold text-xl mb-2 tracking-tight">APR spread (must be at least 1 percentage point)</h3>
              <p className="text-mute">
                Below 1 percentage point, refi rarely justifies the friction. At 1.5+ percentage points, refi is almost always worth it. At 3+ percentage points (common when refinancing dealer financing), refi can save thousands. Use our personal loan calculator and run both APRs at the same balance and term.
              </p>
            </div>
            <div>
              <h3 className="font-display font-bold text-xl mb-2 tracking-tight">Months remaining (must be at least 24)</h3>
              <p className="text-mute">
                Auto loan interest is front-loaded. The first 12 months of payments are mostly interest; the last 12 months are mostly principal. Refinancing in the last year of a loan saves almost nothing because there is little interest left to lower. Below 24 months remaining, only refi if the spread is 3+ percentage points.
              </p>
            </div>
            <div>
              <h3 className="font-display font-bold text-xl mb-2 tracking-tight">Vehicle value vs balance (loan-to-value)</h3>
              <p className="text-mute">
                Most refi lenders cap LTV at 100% to 110%. Use Kelley Blue Book trade-in or private-party value as the ceiling. If your loan balance is more than the car's value, you are underwater; refi options narrow sharply, and most lenders will require you to bring cash to closing or wait for the gap to shrink.
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
              { label: "Loan calculator", href: "/calculators/personal-loan-payoff", detail: "See your monthly payment by APR and term." },
              { label: "Auto loans", href: "/loans/auto", detail: "New, used, dealer vs bank." },
              { label: "By credit tier", href: "/loans/by-credit-tier", detail: "Realistic rates for your FICO." },
              { label: "Debt payoff", href: "/calculators/debt-payoff", detail: "Compare loan options." },
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
            Common questions about auto refinancing.
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
              See your refi savings before you apply.
            </h2>
            <p className="text-ink/70 mt-2">Plug in your old APR and a target new APR. We do the rest.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/calculators/personal-loan-payoff" className="pill pill-ink">
              Loan calculator
              <span aria-hidden>→</span>
            </Link>
            <Link href="/loans/auto" className="pill pill-ghost">
              Auto loan basics
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
