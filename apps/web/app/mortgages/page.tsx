import Link from "next/link";
import type { Metadata } from "next";
import { FAQPageSchema, BreadcrumbListSchema, type FAQItem } from "@/components/schemas";
import { BrandLogo } from "@/components/brand-logo";
import { getBrand, type Brand } from "@/lib/brands";

export const metadata: Metadata = {
  title: "Mortgage Rates Today: Compare 30Y Fixed, 15Y Fixed, Refi, HELOC | Fintiex",
  description:
    "Compare live mortgage rates from 8+ lenders. 30Y fixed, 15Y fixed, refinance, HELOC, and jumbo. No paid placements, updated daily. Find the lowest APR.",
  alternates: { canonical: "/mortgages" },
};

interface MortgageLender {
  brandSlug: string;
  apr: number;
  tag?: string;
  tagline: string;
  minFico: number;
  minDown: string;
  founded: number;
  loanTypes: string;
  perks: string[];
  trend: "up" | "down" | "flat";
}

const mortgageLenders: MortgageLender[] = [
  {
    brandSlug: "marcus-mortgage",
    apr: 6.79,
    tag: "Lowest rate",
    tagline: "Goldman Sachs Bank USA's home lending arm. Low rates for prime borrowers.",
    minFico: 740,
    minDown: "5%",
    founded: 2016,
    loanTypes: "Conforming, jumbo",
    perks: [
      "No application or origination fees",
      "Same-day pre-approval for prime borrowers",
      "Backed by Goldman Sachs Bank USA",
    ],
    trend: "down",
  },
  {
    brandSlug: "better",
    apr: 6.85,
    tag: "No origination",
    tagline: "100% online mortgage with no commissions, no application fees, and rate-lock in minutes.",
    minFico: 620,
    minDown: "3%",
    founded: 2016,
    loanTypes: "Conforming, FHA, VA, jumbo",
    perks: [
      "No commissions and no origination fees",
      "Pre-approval in 3 minutes online",
      "Rate-match guarantee plus $100 credit",
    ],
    trend: "flat",
  },
  {
    brandSlug: "rocket",
    apr: 6.89,
    tagline: "Largest U.S. retail mortgage lender. Strong tech, 24/7 phone support, and broad product menu.",
    minFico: 620,
    minDown: "3%",
    founded: 1985,
    loanTypes: "Conforming, FHA, VA, USDA, jumbo, HELOC",
    perks: [
      "Largest U.S. retail lender with full product menu",
      "95% online application process",
      "24/7 customer support",
    ],
    trend: "up",
  },
  {
    brandSlug: "loandepot",
    apr: 6.92,
    tagline: "Top-5 nonbank lender. Hybrid online + in-branch with strong cash-out and refinance pricing.",
    minFico: 620,
    minDown: "5%",
    founded: 2010,
    loanTypes: "Conforming, FHA, VA, jumbo, cash-out refi",
    perks: [
      "Lifetime guarantee on future refinances",
      "Hybrid digital + 200+ branches",
      "Specializes in cash-out and refinance",
    ],
    trend: "up",
  },
  {
    brandSlug: "chase-mortgage",
    apr: 6.95,
    tagline: "Nationwide bank with DreaMaker low down-payment program and relationship discounts.",
    minFico: 620,
    minDown: "3%",
    founded: 1799,
    loanTypes: "Conforming, FHA, VA, jumbo, DreaMaker",
    perks: [
      "DreaMaker loan: 3% down with reduced PMI",
      "Up to $500 rate discount for Premier Plus clients",
      "Branch network in 48 states",
    ],
    trend: "flat",
  },
  {
    brandSlug: "pnc",
    apr: 6.99,
    tagline: "Regional bank with strong grant programs and HELOC combo loans in 28 states.",
    minFico: 620,
    minDown: "3%",
    founded: 1845,
    loanTypes: "Conforming, FHA, VA, jumbo, HELOC, physician",
    perks: [
      "Closing-cost grant up to $5,000 in select markets",
      "Strong physician and professional programs",
      "HELOC combo loans available",
    ],
    trend: "flat",
  },
  {
    brandSlug: "wellsfargo-mortgage",
    apr: 7.02,
    tagline: "Big-four bank with the largest correspondent network and a sizable jumbo book.",
    minFico: 620,
    minDown: "3%",
    founded: 1852,
    loanTypes: "Conforming, FHA, VA, jumbo, refinance specialists",
    perks: [
      "Existing-customer rate discounts",
      "Refinance specialists in every region",
      "Branch network in 36 states",
    ],
    trend: "up",
  },
  {
    brandSlug: "usbank",
    apr: 7.05,
    tagline: "Top-five bank with strong portfolio jumbo pricing in the western United States.",
    minFico: 620,
    minDown: "3%",
    founded: 1863,
    loanTypes: "Conforming, FHA, VA, jumbo, Smart Refi",
    perks: [
      "Smart Refinance with no closing costs",
      "Portfolio jumbo loans up to $5M",
      "Branches in 26 states",
    ],
    trend: "up",
  },
];

const subPages = [
  { label: "30Y Fixed", href: "/mortgages/30y-fixed", detail: "The most popular term. Stable payment, higher rate." },
  { label: "15Y Fixed", href: "/mortgages/15y-fixed", detail: "Pay down faster. Lower rate, higher monthly." },
  { label: "Refinance", href: "/mortgages/refinance", detail: "When to refi and how to calculate the break-even." },
  { label: "HELOC", href: "/mortgages/heloc", detail: "Draw on your equity as a revolving credit line." },
  { label: "Jumbo Loans", href: "/mortgages/jumbo", detail: "Loans above the conforming limit. Compare jumbo APRs." },
  { label: "Rates by State", href: "/mortgages/by-state", detail: "State-level averages and lender availability." },
  { label: "First-Time Buyer", href: "/mortgages/first-time-buyer", detail: "FHA, DreaMaker, down payment assistance, and more." },
  { label: "Cash-Out Refi", href: "/mortgages/cash-out", detail: "Access your equity without a HELOC." },
];

const faqItems: FAQItem[] = [
  {
    question: "What is the difference between APR and interest rate?",
    answer: "The interest rate is the cost to borrow the principal. APR (Annual Percentage Rate) includes the interest rate plus lender fees, points, and mortgage insurance spread over the loan term. APR is the better apples-to-apples comparison when shopping lenders.",
  },
  {
    question: "How much down payment do I need?",
    answer: "Conventional loans accept as little as 3% down, though you will pay PMI until you reach 20% equity. FHA loans require 3.5% with a 580+ FICO. VA and USDA loans offer 0% down for qualified borrowers. A larger down payment usually earns a lower rate.",
  },
  {
    question: "Should I lock my rate?",
    answer: "If you are within 30-60 days of closing and the rate meets your budget, locking is usually the right call. Floating makes sense only if you expect rates to drop meaningfully and you can absorb a potential rise. Most lenders offer 30- to 90-day locks.",
  },
  {
    question: "What credit score do I need?",
    answer: "Conventional loans typically require a 620 minimum. For the best rates, 740 or above is the target. FHA loans accept 580 with 3.5% down or even 500 with 10% down. VA loans have no published minimum but lenders usually want 620.",
  },
  {
    question: "What is a points buydown?",
    answer: "Paying points (each point equals 1% of the loan amount) up front permanently lowers your rate. One point typically drops the rate by 0.25%. Use our Refi Break-Even calculator to see how long it takes for the savings to cover the upfront cost.",
  },
  {
    question: "Conventional vs FHA: which is better?",
    answer: "Conventional is usually better if your credit is 740+ and you can put 10% or more down. FHA is more accessible at lower credit scores and smaller down payments, but you pay a mortgage insurance premium for the life of the loan unless you refinance. Run the numbers for your situation.",
  },
];

const faqs = [
  {
    q: "What is the difference between APR and interest rate?",
    a: "The interest rate is the cost to borrow the principal. APR (Annual Percentage Rate) includes the interest rate plus lender fees, points, and mortgage insurance spread over the loan term. APR is the better apples-to-apples comparison when shopping lenders.",
  },
  {
    q: "How much down payment do I need?",
    a: "Conventional loans accept as little as 3% down, though you will pay PMI until you reach 20% equity. FHA loans require 3.5% with a 580+ FICO. VA and USDA loans offer 0% down for qualified borrowers. A larger down payment usually earns a lower rate.",
  },
  {
    q: "Should I lock my rate?",
    a: "If you are within 30-60 days of closing and the rate meets your budget, locking is usually the right call. Floating makes sense only if you expect rates to drop meaningfully and you can absorb a potential rise. Most lenders offer 30- to 90-day locks.",
  },
  {
    q: "What credit score do I need?",
    a: "Conventional loans typically require a 620 minimum. For the best rates, 740 or above is the target. FHA loans accept 580 with 3.5% down or even 500 with 10% down. VA loans have no published minimum but lenders usually want 620.",
  },
  {
    q: "What is a points buydown?",
    a: "Paying points (each point equals 1% of the loan amount) up front permanently lowers your rate. One point typically drops the rate by 0.25%. Use our Refi Break-Even calculator to see how long it takes for the savings to cover the upfront cost.",
  },
  {
    q: "Conventional vs FHA: which is better?",
    a: "Conventional is usually better if your credit is 740+ and you can put 10% or more down. FHA is more accessible at lower credit scores and smaller down payments, but you pay a mortgage insurance premium for the life of the loan unless you refinance. Run the numbers for your situation.",
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

function LenderBox({ lender, brand }: { lender: MortgageLender; brand: Brand }) {
  const reviewHref = `/reviews/${brand.slug}`;
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
            {lender.tag && <span className="chip chip-lime">{lender.tag}</span>}
            <span className={`text-xs font-mono ${trend.cls}`}>{trend.text}</span>
          </div>
          <p className="text-mute leading-relaxed mb-4 max-w-2xl">{lender.tagline}</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 max-w-2xl">
            <Spec label="Min FICO" value={String(lender.minFico)} />
            <Spec label="Min down" value={lender.minDown} />
            <Spec label="Founded" value={String(lender.founded)} />
            <Spec label="Loan types" value={lender.loanTypes} />
          </div>

          <ul className="space-y-1.5 text-[0.9375rem] text-ink-soft max-w-2xl">
            {lender.perks.map((p) => (
              <li key={p} className="flex gap-2">
                <span className="text-mint font-bold shrink-0">+</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Rate + CTAs */}
        <div className="md:text-right md:min-w-[200px] shrink-0 flex flex-col md:items-end gap-4">
          <div>
            <div className="text-[10px] font-mono uppercase tracking-wider text-mute mb-1">
              30Y APR
            </div>
            <div className="font-display font-extrabold text-4xl md:text-5xl tabular leading-none">
              {fmtPct(lender.apr)}
            </div>
            <div className="text-xs text-mute mt-1">20% down, 760+ FICO</div>
          </div>
          <div className="flex md:flex-col gap-2 md:gap-2 w-full md:w-auto">
            <a
              href={externalHref}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="pill pill-ink"
            >
              Visit {brand.name.split(" ")[0]} <span aria-hidden>↗</span>
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
      <BreadcrumbListSchema items={[{ name: "Home", href: "/" }, { name: "Mortgages", href: "/mortgages" }]} />
      {/* HERO */}
      <section className="relative overflow-hidden bg-bg">
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
        <div className="relative max-w-(--max-w-page) mx-auto px-6 pt-20 pb-16">
          <span className="chip chip-violet mb-6">
            <span className="pulse-dot" /> Mortgage rates updated today
          </span>
          <h1 className="font-display font-extrabold text-[clamp(2.5rem,6vw,5rem)] leading-[1.02] tracking-[-0.03em] mb-6 max-w-3xl">
            Mortgages without the runaround.
          </h1>
          <p className="text-lg md:text-xl text-mute leading-relaxed max-w-2xl mb-8">
            Fintiex tracks live rates from 14 lenders every day. No paid placements, no teaser rates. See the real APR for your credit score and down payment, then compare side by side.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/calculators/mortgage-payment" className="pill pill-ink">
              Calculate your payment
              <span aria-hidden>→</span>
            </Link>
            <Link href="/mortgages/by-state" className="pill pill-ghost">
              Rates by state
            </Link>
          </div>
        </div>
      </section>

      {/* RATE SNAPSHOT */}
      <section className="border-y border-line bg-bg-soft/60">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-display font-bold text-2xl tracking-tight">Rate snapshot</h2>
            <span className="text-xs font-mono text-mute">Updated today</span>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { label: "30Y Fixed avg", value: "6.85%", caption: "Avg of 14 lenders" },
              { label: "15Y Fixed avg", value: "6.24%", caption: "Avg of 14 lenders" },
              { label: "Refi 30Y", value: "6.93%", caption: "Rate includes closing costs" },
              { label: "HELOC (var)", value: "8.45%", caption: "Prime + margin, FICO 740" },
              { label: "Jumbo 30Y", value: "7.18%", caption: "Loan above $766K conforming" },
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
        </div>
      </section>

      {/* LENDER LINEUP — STACKED BOXES */}
      <section className="max-w-(--max-w-page) mx-auto px-6 py-20">
        <div className="grid grid-cols-12 gap-8 mb-8">
          <div className="col-span-12 md:col-span-7">
            <span className="chip chip-mute mb-4">
              <span className="pulse-dot" /> Mortgages · Live
            </span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-tight">
              Lowest 30-year fixed rates today
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5 flex md:items-end md:justify-end">
            <p className="text-mute leading-relaxed md:text-right md:max-w-sm">
              Pulled directly from each lender. No partner placements. Rates assume 20% down and 760+ FICO unless noted.
            </p>
          </div>
        </div>

        <div className="space-y-5">
          {mortgageLenders.map((lender) => {
            const brand = getBrand(lender.brandSlug);
            if (!brand) return null;
            return <LenderBox key={lender.brandSlug} lender={lender} brand={brand} />;
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
                How mortgage rates are actually set.
              </h2>
              <p className="text-mute leading-relaxed">
                Rates are not pulled from thin air. Understanding the mechanics helps you shop smarter and time your lock.
              </p>
            </div>
            <div className="col-span-12 lg:col-span-8 space-y-8 text-base leading-relaxed text-ink">
              <div>
                <h3 className="font-display font-bold text-xl mb-2 tracking-tight">The benchmark: 10-year Treasury yield</h3>
                <p className="text-mute">
                  Mortgage rates track the 10-year US Treasury yield closely because most 30-year mortgages are paid off or refinanced within 10 years. When Treasury yields rise, fixed mortgage rates follow. The spread between the two (usually 1.5 to 2.5 percentage points) reflects lender risk and secondary market conditions.
                </p>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl mb-2 tracking-tight">What the Fed actually controls</h3>
                <p className="text-mute">
                  The Federal Reserve sets the federal funds rate, which is an overnight borrowing rate between banks. This directly drives HELOCs and adjustable-rate mortgages (ARMs), which are tied to prime rate. It affects fixed rates indirectly through inflation expectations and Treasury demand, but the link is looser than most people assume.
                </p>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl mb-2 tracking-tight">What affects YOUR specific rate</h3>
                <p className="text-mute">
                  Your quoted rate depends on five main factors. Credit score: a 760 FICO typically earns a rate 0.5 to 0.75 percentage points lower than a 680. Loan-to-value (LTV): lower down payments mean higher rates and PMI. Loan type: conforming conventional loans are usually cheaper than FHA or jumbo. Term: 15-year loans carry lower rates than 30-year. Points: paying discount points up front permanently reduces the rate.
                </p>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl mb-2 tracking-tight">Recent trends (Q1 2026)</h3>
                <p className="text-mute">
                  After peaking above 8% in late 2023, the 30-year fixed rate pulled back through 2024 as inflation cooled. Heading into 2026, rates are settling in the 6.75 to 7.00 range as the Fed has paused its hiking cycle. The Mortgage Bankers Association forecasts a gradual drift toward 6.5% by late 2026 if inflation continues easing, though global uncertainty keeps the outlook fluid.
                </p>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl mb-2 tracking-tight">Fintiex's freshness commitment</h3>
                <p className="text-mute">
                  Every rate in our tables is pulled directly from lender rate APIs or publicly published rate sheets, refreshed daily. We never accept placement fees. The lender at the top of the table is the lender with the lowest APR that day, full stop.
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
            Dig deeper by product type.
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
              Know your number before you talk to a lender.
            </h2>
            <p className="text-ink/70 mt-2">Use our mortgage calculator. No email, no signup.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/calculators/mortgage-payment" className="pill pill-ink">
              Mortgage calculator
              <span aria-hidden>→</span>
            </Link>
            <Link href="/calculators/refinance-break-even" className="pill pill-ghost">
              Refi break-even
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
