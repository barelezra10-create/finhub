import Link from "next/link";
import type { Metadata } from "next";
import { FAQPageSchema, BreadcrumbListSchema, type FAQItem } from "@/components/schemas";

export const metadata: Metadata = {
  title: "Best Personal & Auto Loan Rates Today — Compare by Credit Tier | Fintiex",
  description:
    "Compare personal and auto loan rates from 8+ lenders by credit score and purpose. Prequalify without a hard pull. Honest APRs, no affiliate ranking. Updated daily.",
  alternates: { canonical: "/loans" },
};

interface RateRow {
  lender: string;
  apr: number;
  tag?: string;
  detail: string;
  href: string;
  trend?: "up" | "down" | "flat";
}

const loanRates: RateRow[] = [
  { lender: "LightStream", apr: 7.99, tag: "Lowest", detail: "Excellent credit · No fees · Auto-pay discount", href: "/loans/lightstream", trend: "down" },
  { lender: "SoFi", apr: 8.20, detail: "Excellent credit · No origination · unemployment protection", href: "/loans/sofi", trend: "flat" },
  { lender: "Marcus by Goldman Sachs", apr: 8.50, detail: "Good credit · No fees · fixed rate", href: "/loans/marcus", trend: "flat" },
  { lender: "Discover Personal", apr: 8.99, detail: "Good credit · No origination · 36-84 months", href: "/loans/discover", trend: "up" },
  { lender: "Upstart", apr: 9.50, detail: "Fair credit · Soft pull pre-qualify · income-based", href: "/loans/upstart", trend: "up" },
  { lender: "LendingClub", apr: 10.20, detail: "Fair credit · Debt consolidation focus · fast funding", href: "/loans/lendingclub", trend: "flat" },
  { lender: "Best Egg", apr: 10.99, detail: "Fair credit · Secured option available · 36-60 months", href: "/loans/best-egg", trend: "up" },
  { lender: "Prosper", apr: 11.50, detail: "Fair credit · P2P model · 3-5 year terms", href: "/loans/prosper", trend: "up" },
];

const subPages = [
  { label: "Personal Loans", href: "/loans/personal", detail: "Unsecured loans for any purpose. Compare by credit tier." },
  { label: "Auto Loans", href: "/loans/auto", detail: "New and used auto financing. Compare by term and credit." },
  { label: "Debt Consolidation", href: "/loans/debt-consolidation", detail: "Roll high-rate cards into one lower payment." },
  { label: "Home Improvement", href: "/loans/home-improvement", detail: "Fund a renovation without touching your mortgage." },
  { label: "Medical Loans", href: "/loans/medical", detail: "Finance medical bills at a predictable rate." },
  { label: "Wedding Loans", href: "/loans/wedding", detail: "Cover wedding costs with a fixed monthly payment." },
  { label: "By Credit Tier", href: "/loans/by-credit-tier", detail: "Excellent, good, fair, poor. Realistic rates for each." },
  { label: "Auto Refinance", href: "/loans/auto/refinance", detail: "Lower your existing auto rate without changing the car." },
];

const faqItems: FAQItem[] = [
  {
    question: "Personal loan vs credit card: which is better for large expenses?",
    answer: "A personal loan is usually better for expenses over $5,000 that you need more than 12 months to repay. You get a fixed rate, a fixed term, and a single monthly payment. A 0% APR credit card wins for expenses you can pay off within the promotional window, which is typically 12 to 21 months.",
  },
  {
    question: "Will applying for a personal loan hurt my credit score?",
    answer: "Prequalification uses a soft pull, which has no effect on your score. A formal application triggers a hard inquiry, which typically drops your score 2 to 5 points temporarily. Multiple hard pulls within a 14- to 45-day window are usually counted as a single inquiry by scoring models.",
  },
  {
    question: "What APR can I realistically qualify for?",
    answer: "Excellent credit (720+) typically qualifies for rates in the 8 to 12% range from prime lenders. Good credit (680 to 719) usually lands 12 to 18%. Fair credit (620 to 679) often sees 18 to 28%. Anything below 620 may require a secured loan or a cosigner to access reasonable rates.",
  },
  {
    question: "Hard pull vs soft pull: what is the difference?",
    answer: "A soft pull is a background credit check that does not affect your score. Lenders use it for prequalification and rate estimates. A hard pull is a formal credit inquiry that goes on your credit report and lowers your score slightly. Always use soft-pull prequalification first to shop rates without risk.",
  },
  {
    question: "Can I prepay a personal loan without a penalty?",
    answer: "Most of the lenders in our table (LightStream, SoFi, Marcus, Discover) have no prepayment penalties. Always confirm before signing. Lenders that charge a prepayment fee typically structure it as a percentage of the remaining balance or a fixed number of months of interest.",
  },
  {
    question: "What is an origination fee and how does it affect my rate?",
    answer: "An origination fee is a one-time charge deducted from your loan proceeds before you receive the money. It typically ranges from 1% to 8% of the loan amount. A loan with a 9% rate and a 5% origination fee can cost more than one with an 11% rate and no fee. Always compare APR, which factors in origination fees.",
  },
];

const faqs = [
  {
    q: "Personal loan vs credit card: which is better for large expenses?",
    a: "A personal loan is usually better for expenses over $5,000 that you need more than 12 months to repay. You get a fixed rate, a fixed term, and a single monthly payment. A 0% APR credit card wins for expenses you can pay off within the promotional window, which is typically 12 to 21 months.",
  },
  {
    q: "Will applying for a personal loan hurt my credit score?",
    a: "Prequalification uses a soft pull, which has no effect on your score. A formal application triggers a hard inquiry, which typically drops your score 2 to 5 points temporarily. Multiple hard pulls within a 14- to 45-day window are usually counted as a single inquiry by scoring models.",
  },
  {
    q: "What APR can I realistically qualify for?",
    a: "Excellent credit (720+) typically qualifies for rates in the 8 to 12% range from prime lenders. Good credit (680 to 719) usually lands 12 to 18%. Fair credit (620 to 679) often sees 18 to 28%. Anything below 620 may require a secured loan or a cosigner to access reasonable rates.",
  },
  {
    q: "Hard pull vs soft pull: what is the difference?",
    a: "A soft pull is a background credit check that does not affect your score. Lenders use it for prequalification and rate estimates. A hard pull is a formal credit inquiry that goes on your credit report and lowers your score slightly. Always use soft-pull prequalification first to shop rates without risk.",
  },
  {
    q: "Can I prepay a personal loan without a penalty?",
    a: "Most of the lenders in our table (LightStream, SoFi, Marcus, Discover) have no prepayment penalties. Always confirm before signing. Lenders that charge a prepayment fee typically structure it as a percentage of the remaining balance or a fixed number of months of interest.",
  },
  {
    q: "What is an origination fee and how does it affect my rate?",
    a: "An origination fee is a one-time charge deducted from your loan proceeds before you receive the money. It typically ranges from 1% to 8% of the loan amount. A loan with a 9% rate and a 5% origination fee can cost more than one with an 11% rate and no fee. Always compare APR, which factors in origination fees.",
  },
];

function fmtPct(n: number) {
  return n.toFixed(2) + "%";
}

function trendArrow(t?: "up" | "down" | "flat") {
  if (!t || t === "flat") return <span className="text-mute">flat</span>;
  if (t === "up") return <span className="text-rose">up</span>;
  return <span className="text-mint">down</span>;
}

export default function Page() {
  return (
    <>
      <FAQPageSchema items={faqItems} />
      <BreadcrumbListSchema items={[{ name: "Home", href: "/" }, { name: "Loans", href: "/loans" }]} />
      {/* HERO */}
      <section className="relative overflow-hidden bg-bg">
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
        <div className="relative max-w-(--max-w-page) mx-auto px-6 pt-20 pb-16">
          <span className="chip chip-violet mb-6">
            <span className="pulse-dot" /> Loan rates updated today
          </span>
          <h1 className="font-display font-extrabold text-[clamp(2.5rem,6vw,5rem)] leading-[1.02] tracking-[-0.03em] mb-6 max-w-3xl">
            Personal and auto loans, compared honestly.
          </h1>
          <p className="text-lg md:text-xl text-mute leading-relaxed max-w-2xl mb-8">
            Fintiex compares personal and auto loan rates by credit tier and loan purpose. See realistic APRs for your credit score, not just the best-case teaser rate, before you talk to a single lender.
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

          <div className="mt-10 flex items-center gap-6 text-sm text-mute">
            <div className="flex items-center gap-2">
              <span className="font-mono tabular text-ink font-semibold">8</span> lenders compared
            </div>
            <div className="flex items-center gap-2">
              <span className="font-mono tabular text-ink font-semibold">0</span> origination required
            </div>
            <div className="flex items-center gap-2">
              <span className="font-mono tabular text-ink font-semibold">0</span> paid rankings
            </div>
          </div>
        </div>
      </section>

      {/* RATE SNAPSHOT */}
      <section className="border-y border-line bg-bg-soft/60">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-display font-bold text-2xl tracking-tight">Rate snapshot by tier</h2>
            <span className="text-xs font-mono text-mute">Updated today</span>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "Personal · Excellent credit", value: "8.20%", caption: "720+ FICO · SoFi · 3-7yr" },
              { label: "Personal · Fair credit", value: "12.50%", caption: "640-679 FICO · avg of 6 lenders" },
              { label: "Auto · New 60mo", value: "7.10%", caption: "720+ FICO · credit union avg" },
              { label: "Auto · Used 60mo", value: "8.45%", caption: "720+ FICO · credit union avg" },
            ].map((tile) => (
              <div key={tile.label} className="card p-5">
                <div className="text-xs text-mute mb-2">{tile.label}</div>
                <div className="font-display font-extrabold text-3xl md:text-4xl tabular tracking-tight mb-2">
                  {tile.value}
                </div>
                <div className="text-xs text-mute mt-2">{tile.caption}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAIN RATE TABLE */}
      <section className="max-w-(--max-w-page) mx-auto px-6 py-20">
        <div className="grid grid-cols-12 gap-8 mb-8">
          <div className="col-span-12 md:col-span-7">
            <span className="chip chip-mute mb-4">
              <span className="pulse-dot" /> Personal Loans · Live
            </span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-tight">
              Best personal loan rates today
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5 flex md:items-end md:justify-end">
            <p className="text-mute leading-relaxed md:text-right md:max-w-sm">
              Rates reflect best available APR for qualified borrowers. Prequalify with a soft pull. No paid placements.
            </p>
          </div>
        </div>

        <div className="card-flush overflow-hidden">
          <div className="grid grid-cols-12 px-6 py-3 text-xs font-mono uppercase tracking-wider text-mute border-b border-line bg-bg-soft/50">
            <div className="col-span-6 md:col-span-5">Lender</div>
            <div className="hidden md:block md:col-span-4">Detail</div>
            <div className="col-span-3 md:col-span-2 text-right">APR</div>
            <div className="col-span-3 md:col-span-1 text-right">Trend</div>
          </div>
          {loanRates.map((r, i) => (
            <Link
              key={r.lender}
              href={r.href}
              className={`grid grid-cols-12 px-6 py-4 items-center hover:bg-bg-soft/70 transition-colors ${
                i === loanRates.length - 1 ? "" : "border-b border-line-soft"
              }`}
            >
              <div className="col-span-6 md:col-span-5">
                <div className="flex items-center gap-2">
                  <div className="font-display font-semibold text-base">{r.lender}</div>
                  {r.tag && <span className="chip chip-lime">{r.tag}</span>}
                </div>
                <div className="md:hidden text-xs text-mute mt-1">{r.detail}</div>
              </div>
              <div className="hidden md:block md:col-span-4 text-mute text-sm">{r.detail}</div>
              <div className="col-span-3 md:col-span-2 text-right font-mono font-semibold tabular text-lg">
                {fmtPct(r.apr)}
              </div>
              <div className="col-span-3 md:col-span-1 text-right text-sm font-mono">
                {trendArrow(r.trend)}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* EXPLAINER */}
      <section className="bg-bg-soft/60 border-y border-line">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-20">
          <div className="grid grid-cols-12 gap-10">
            <div className="col-span-12 lg:col-span-4">
              <span className="chip chip-mute mb-4">How it works</span>
              <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-tight mb-6">
                What actually determines your loan rate.
              </h2>
              <p className="text-mute leading-relaxed">
                Three things to understand before you apply.
              </p>
            </div>
            <div className="col-span-12 lg:col-span-8 space-y-8 text-base leading-relaxed">
              <div>
                <h3 className="font-display font-bold text-xl mb-2 tracking-tight">The five factors lenders score</h3>
                <p className="text-mute">
                  Credit score carries the most weight, but lenders also look at debt-to-income ratio (your monthly debt payments divided by gross income), income stability, employment history, and the loan purpose. Debt consolidation loans often carry better rates than general-purpose loans because the repayment is more predictable.
                </p>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl mb-2 tracking-tight">Secured vs unsecured: the trade-off</h3>
                <p className="text-mute">
                  Unsecured personal loans require no collateral. They are faster to fund but carry higher rates because the lender has no asset to claim if you default. Secured loans (backed by a car, savings account, or other asset) offer lower rates but put your collateral at risk. Some lenders, like Best Egg, offer both options. Use a secured loan only if the rate difference is meaningful and you are confident in your repayment plan.
                </p>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl mb-2 tracking-tight">Prequalification vs formal application</h3>
                <p className="text-mute">
                  Prequalification uses a soft credit pull, which does not affect your score. You get an estimated rate range based on your credit profile. A formal application triggers a hard inquiry, which temporarily lowers your score by a few points. Always prequalify with multiple lenders before submitting a formal application. If you apply to several lenders within a short window (typically 14 to 45 days), scoring models treat them as a single inquiry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SUB-PAGE LINKS */}
      <section className="max-w-(--max-w-page) mx-auto px-6 py-20">
        <div className="mb-10">
          <span className="chip chip-mute mb-4">Explore</span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight">
            Loans by purpose and vehicle.
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {subPages.map((p) => (
            <Link key={p.href} href={p.href} className="card p-6 block group">
              <div className="flex items-center justify-between mb-3">
                <span className="chip chip-mute">{p.label}</span>
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
              Common questions.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="card p-6">
                <h3 className="font-display font-bold text-base mb-2 tracking-tight">{faq.q}</h3>
                <p className="text-mute text-sm leading-relaxed">{faq.a}</p>
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
              Find out your monthly payment before you apply.
            </h2>
            <p className="text-ink/70 mt-2">Personal loan payoff calculator. No signup, no soft pull.</p>
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
