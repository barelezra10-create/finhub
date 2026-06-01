import Link from "next/link";
import type { Metadata } from "next";
import { FAQPageSchema, BreadcrumbListSchema, type FAQItem } from "@/components/schemas";
import { BrandLogo } from "@/components/brand-logo";
import { getBrand, type Brand } from "@/lib/brands";

export const metadata: Metadata = {
  title: "Best Personal & Auto Loan Rates Today: Compare by Credit Tier | Fintiex",
  description:
    "Compare personal and auto loan rates from 8+ lenders by credit score and purpose. Prequalify without a hard pull. Honest APRs, no affiliate ranking.",
  alternates: { canonical: "/loans" },
};

interface LoanLender {
  brandSlug: string;
  loanSlug: string;
  startingApr: number;
  tag?: string;
  tagline: string;
  creditTier: string;
  loanRange: string;
  termMonths: string;
  fundingTime: string;
  bestFor: string;
  perks: string[];
  trend: "up" | "down" | "flat";
}

const loanLenders: LoanLender[] = [
  {
    brandSlug: "lightstream",
    loanSlug: "lightstream-personal-loan",
    startingApr: 7.99,
    tag: "Lowest APR",
    tagline: "Truist-owned online lender with a rate-beat guarantee and the lowest APRs in the prime-credit tier.",
    creditTier: "Excellent",
    loanRange: "$5K to $100K",
    termMonths: "24 to 144",
    fundingTime: "Same-day possible",
    bestFor: "Prime borrowers who want the lowest rate available",
    perks: [
      "No origination, late, or prepayment fees",
      "Auto-pay discount of 0.5%",
      "Rate-beat guarantee against any competitor",
    ],
    trend: "down",
  },
  {
    brandSlug: "sofi-loan",
    loanSlug: "sofi-personal-loan",
    startingApr: 8.20,
    tagline: "Strong rates for prime borrowers with no origination fee and unemployment protection if you lose your job.",
    creditTier: "Excellent",
    loanRange: "$5K to $100K",
    termMonths: "24 to 84",
    fundingTime: "Same-day to 2 days",
    bestFor: "Members who want fee-free borrowing plus job-loss protection",
    perks: [
      "No origination, prepayment, or late fees",
      "Unemployment protection pauses payments if you lose your job",
      "Free financial planning and career coaching",
    ],
    trend: "flat",
  },
  {
    brandSlug: "marcus-loan",
    loanSlug: "marcus-personal-loan",
    startingApr: 8.50,
    tagline: "Goldman Sachs personal loans. Fixed rates, no fees, and the freedom to skip a payment after 12 on-time months.",
    creditTier: "Good to Excellent",
    loanRange: "$3.5K to $40K",
    termMonths: "36 to 72",
    fundingTime: "1 to 4 business days",
    bestFor: "Goldman-backed simplicity, no fees, no gimmicks",
    perks: [
      "No fees of any kind, ever",
      "On-time payment reward: defer one payment after 12 months",
      "Fixed rate that never changes",
    ],
    trend: "flat",
  },
  {
    brandSlug: "discover-loan",
    loanSlug: "discover-personal-loan",
    startingApr: 8.99,
    tagline: "Personal loans up to $40K with no origination fees and 24/7 U.S.-based phone support.",
    creditTier: "Good",
    loanRange: "$2.5K to $40K",
    termMonths: "36 to 84",
    fundingTime: "Next business day",
    bestFor: "Returning Discover customers who value U.S. support",
    perks: [
      "No origination, late, or prepayment fees",
      "30-day return policy if you change your mind",
      "24/7 U.S.-based customer service",
    ],
    trend: "up",
  },
  {
    brandSlug: "upstart",
    loanSlug: "upstart-personal-loan",
    startingApr: 9.50,
    tag: "Approval friendly",
    tagline: "AI-powered underwriting that approves applicants traditional lenders decline. Watch the origination fee.",
    creditTier: "Fair to Good",
    loanRange: "$1K to $50K",
    termMonths: "36 to 60",
    fundingTime: "Next business day",
    bestFor: "Thin credit files and gig-economy income",
    perks: [
      "Income and education factored alongside credit score",
      "Soft-pull pre-qualification in minutes",
      "Funded in 1 business day for approved loans",
    ],
    trend: "up",
  },
  {
    brandSlug: "lendingclub",
    loanSlug: "lendingclub-personal-loan",
    startingApr: 10.20,
    tagline: "Marketplace personal loans with fast funding. Strong fit for debt consolidation with a direct-pay option.",
    creditTier: "Fair to Good",
    loanRange: "$1K to $40K",
    termMonths: "24 to 60",
    fundingTime: "2 to 4 business days",
    bestFor: "Consolidating credit card debt with direct-pay",
    perks: [
      "Direct-pay option sends loan funds to your card issuers",
      "Joint application reduces rate for households",
      "Origination fee varies by credit profile",
    ],
    trend: "flat",
  },
  {
    brandSlug: "bestegg",
    loanSlug: "best-egg-personal-loan",
    startingApr: 10.99,
    tagline: "Fast online personal loans with above-average approval odds for fair-credit borrowers. Secured option available.",
    creditTier: "Fair to Good",
    loanRange: "$2K to $50K",
    termMonths: "36 to 60",
    fundingTime: "1 to 3 business days",
    bestFor: "Fair-credit borrowers willing to pledge a vehicle or fixtures",
    perks: [
      "Secured option (against vehicle or fixtures) drops the rate",
      "Soft-pull pre-qualification with no credit hit",
      "Origination fee 0.99% to 8.99% of loan",
    ],
    trend: "up",
  },
  {
    brandSlug: "prosper",
    loanSlug: "prosper-personal-loan",
    startingApr: 11.50,
    tagline: "One of the original peer-to-peer lenders, now offering personal loans with transparent fee disclosures.",
    creditTier: "Fair to Good",
    loanRange: "$2K to $50K",
    termMonths: "24 to 60",
    fundingTime: "1 to 3 business days",
    bestFor: "Borrowers who like the P2P model and clear fee breakdowns",
    perks: [
      "Joint applications accepted for better rates",
      "Transparent origination fee, no hidden charges",
      "Over $25 billion funded since 2005",
    ],
    trend: "up",
  },
];

const subPages = [
  { label: "Personal Loans", href: "/loans/personal", detail: "Unsecured loans for any purpose. Compare by credit tier." },
  { label: "Student Loans", href: "/loans/student", detail: "Private and refinance options. Federal aid first." },
  { label: "Auto Loans", href: "/loans/auto", detail: "New and used auto financing. Compare by term and credit." },
  { label: "Debt Consolidation", href: "/loans/debt-consolidation", detail: "Roll high-rate cards into one lower payment." },
  { label: "Home Improvement", href: "/loans/home-improvement", detail: "Fund a renovation without touching your mortgage." },
  { label: "Medical Loans", href: "/loans/medical", detail: "Finance medical bills at a predictable rate." },
  { label: "Wedding Loans", href: "/loans/wedding", detail: "Cover wedding costs with a fixed monthly payment." },
  { label: "By Credit Tier", href: "/loans/by-credit-tier", detail: "Excellent, good, fair, poor. Realistic rates for each." },
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

function trendLabel(t: "up" | "down" | "flat"): { text: string; cls: string } {
  if (t === "up") return { text: "↑ Up vs last week", cls: "text-rose" };
  if (t === "down") return { text: "↓ Down vs last week", cls: "text-mint" };
  return { text: "→ Flat vs last week", cls: "text-mute" };
}

function LoanBox({ lender, brand }: { lender: LoanLender; brand: Brand }) {
  const reviewHref = `/loans/personal/${lender.loanSlug}`;
  const externalHref = `https://www.${brand.domain}`;
  const trend = trendLabel(lender.trend);
  return (
    <div className="card-flush p-6 md:p-8 group hover:border-ink transition-colors duration-200">
      <div className="grid grid-cols-1 md:grid-cols-[88px_1fr_auto] gap-6 md:gap-8 items-start">
        {/* Logo */}
        <div className="shrink-0">
          <BrandLogo brand={brand} size={88} rounded="lg" />
        </div>

        {/* Body */}
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <h3 className="font-display font-bold text-xl md:text-2xl tracking-tight">
              {brand.name}
            </h3>
            <span className="text-xs font-mono uppercase tracking-wider text-mute">
              Personal Loan
            </span>
            {lender.tag && <span className="chip chip-lime">{lender.tag}</span>}
            <span className={`text-xs font-mono ${trend.cls}`}>{trend.text}</span>
          </div>
          <p className="text-mute leading-relaxed mb-4 max-w-2xl">{lender.tagline}</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 max-w-2xl">
            <Spec label="Credit tier" value={lender.creditTier} />
            <Spec label="Loan range" value={lender.loanRange} />
            <Spec label="Term (months)" value={lender.termMonths} />
            <Spec label="Funding" value={lender.fundingTime} />
          </div>

          <div className="text-xs font-mono uppercase tracking-wider text-mute mb-2">
            Best for
          </div>
          <div className="text-sm text-ink-soft mb-4 max-w-2xl">{lender.bestFor}</div>

          <ul className="space-y-1.5 text-[0.9375rem] text-ink-soft max-w-2xl">
            {lender.perks.map((p) => (
              <li key={p} className="flex gap-2">
                <span className="text-mint font-bold shrink-0">+</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* APR + CTAs */}
        <div className="md:text-right md:min-w-[200px] shrink-0 flex flex-col md:items-end gap-4">
          <div>
            <div className="text-[10px] font-mono uppercase tracking-wider text-mute mb-1">
              Starting APR
            </div>
            <div className="font-display font-extrabold text-4xl md:text-5xl tabular leading-none text-ink">
              {fmtPct(lender.startingApr)}
            </div>
            <div className="text-xs text-mute mt-1">For excellent credit</div>
          </div>
          <div className="flex md:flex-col gap-2 md:gap-2 w-full md:w-auto">
            <a
              href={externalHref}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="pill pill-ink"
            >
              Pre-qualify at {brand.name.split(" ")[0]} <span aria-hidden>↗</span>
            </a>
            <Link href={reviewHref} className="pill pill-ghost">
              Read review
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-[10px] font-mono uppercase tracking-wider text-mute mb-0.5">
        {label}
      </div>
      <div className="font-display font-semibold text-sm tabular leading-tight">
        {value}
      </div>
    </div>
  );
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

        <div className="space-y-5">
          {loanLenders.map((lender) => {
            const brand = getBrand(lender.brandSlug);
            if (!brand) return null;
            return <LoanBox key={lender.brandSlug} lender={lender} brand={brand} />;
          })}
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
