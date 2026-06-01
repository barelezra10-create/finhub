import Link from "next/link";
import type { Metadata } from "next";
import { FAQPageSchema, BreadcrumbListSchema, type FAQItem } from "@/components/schemas";
import { loadSavingsAccounts, formatApy } from "@/lib/savings-accounts";
import { BrandLogo } from "@/components/brand-logo";
import { getBrand, type Brand } from "@/lib/brands";

export const metadata: Metadata = {
  title: "Best High-Yield Savings Accounts, CDs & Money Market Rates Today | Fintiex",
  description:
    "Compare the best HYSA, CD, and money market rates from FDIC-insured banks. No fees, no minimums. Updated daily. Find the highest APY for your cash right now.",
  alternates: { canonical: "/savings" },
};

interface SavingsLender {
  brandSlug: string;
  product: string;
  apy: number;
  tag?: string;
  tagline: string;
  minOpen: string;
  monthlyFee: string;
  founded: number;
  bestFor: string;
  perks: string[];
}

const savingsLenders: SavingsLender[] = [
  {
    brandSlug: "bask",
    product: "Interest Savings",
    apy: 4.85,
    tag: "Top APY",
    tagline: "Texas-based online bank with one of the highest APYs and no fees of any kind.",
    minOpen: "$0",
    monthlyFee: "$0",
    founded: 2020,
    bestFor: "Top yield with zero strings attached",
    perks: [
      "No minimum balance and no monthly fees",
      "Sister brand of Texas Capital Bank, FDIC-insured",
      "Optional American Airlines miles savings account",
    ],
  },
  {
    brandSlug: "bread",
    product: "High-Yield Savings",
    apy: 4.65,
    tag: "Runner-up",
    tagline: "Online savings arm of Bread Financial. Consistently near the top of the APY rankings.",
    minOpen: "$100",
    monthlyFee: "$0",
    founded: 2020,
    bestFor: "Stable rate without rate-chasing",
    perks: [
      "Long history of holding rates near the market top",
      "No monthly fees and unlimited external transfers",
      "FDIC-insured through Bread Savings Bank",
    ],
  },
  {
    brandSlug: "synchrony",
    product: "High Yield Savings",
    apy: 4.55,
    tagline: "Long-running online savings brand with consistently top-quartile APYs and strong CD ladders.",
    minOpen: "$0",
    monthlyFee: "$0",
    founded: 2003,
    bestFor: "Pairing a HYSA with a CD ladder under one login",
    perks: [
      "No minimums and no monthly fees",
      "Top-tier CD ladder for the cash you can lock up",
      "Free ATM card with $5 monthly ATM fee rebate",
    ],
  },
  {
    brandSlug: "marcus",
    product: "Online Savings",
    apy: 4.50,
    tagline: "Goldman Sachs Bank USA's online savings. No fees, no minimums, and the cleanest mobile app in the category.",
    minOpen: "$0",
    monthlyFee: "$0",
    founded: 2016,
    bestFor: "Premium brand without paying a premium",
    perks: [
      "Backed by Goldman Sachs Bank USA",
      "No fees, no minimums, no gimmicks",
      "Same-day transfers to linked external accounts",
    ],
  },
  {
    brandSlug: "ally",
    product: "Online Savings",
    apy: 4.45,
    tagline: "Online-only bank loved for clean apps, no monthly fees, and category-leading customer service.",
    minOpen: "$0",
    monthlyFee: "$0",
    founded: 2009,
    bestFor: "Full-service banking under one roof",
    perks: [
      "Savings Buckets to organize money into goals",
      "Interest-bearing checking, no monthly fees",
      "24/7 phone, chat, and email support",
    ],
  },
  {
    brandSlug: "sofi",
    product: "Checking + Savings",
    apy: 4.40,
    tag: "Bonus APY",
    tagline: "App-first bank with bonus APY when you direct deposit, plus checking and investing in one stack.",
    minOpen: "$0",
    monthlyFee: "$0",
    founded: 2011,
    bestFor: "All-in-one banking + investing in one app",
    perks: [
      "Up to 4.60% APY with direct deposit setup",
      "Joint accounts, vaults, and early paycheck",
      "Free use of 55,000+ ATMs nationwide",
    ],
  },
  {
    brandSlug: "discover-savings",
    product: "Online Savings",
    apy: 4.30,
    tagline: "FDIC-insured online savings with no fees and 24/7 U.S.-based phone support.",
    minOpen: "$0",
    monthlyFee: "$0",
    founded: 1985,
    bestFor: "U.S.-based service with no fees",
    perks: [
      "U.S.-based customer service, 24/7",
      "No fees and no minimum balance",
      "Pairs cleanly with Discover cash-back card",
    ],
  },
  {
    brandSlug: "cit",
    product: "Savings Connect",
    apy: 4.25,
    tagline: "Consumer-direct savings with tiered APYs and one of the strongest no-penalty CD options on the market.",
    minOpen: "$100",
    monthlyFee: "$0",
    founded: 2009,
    bestFor: "Tiered APY savers and CD shoppers",
    perks: [
      "Top-tier no-penalty CD complementing the HYSA",
      "Multiple savings buckets in the app",
      "FDIC-insured through CIT Bank",
    ],
  },
  {
    brandSlug: "amex-savings",
    product: "Personal Savings",
    apy: 4.15,
    tagline: "Personal savings from American Express. No fees, no minimums, FDIC-insured.",
    minOpen: "$0",
    monthlyFee: "$0",
    founded: 2008,
    bestFor: "Existing Amex cardholders consolidating",
    perks: [
      "Backed by the Amex brand and U.S. customer service",
      "Pair with any Amex card for one-app management",
      "FDIC-insured through American Express National Bank",
    ],
  },
  {
    brandSlug: "lendingclub-savings",
    product: "LevelUp Savings",
    apy: 4.10,
    tagline: "High-yield savings paired with a checking account that earns interest and refunds ATM fees.",
    minOpen: "$100",
    monthlyFee: "$0",
    founded: 2007,
    bestFor: "Combining HYSA with rebated-fee checking",
    perks: [
      "LevelUp checking refunds all ATM fees",
      "$100 monthly deposit unlocks bonus APY tier",
      "FDIC-insured through LendingClub Bank",
    ],
  },
];

const subPages = [
  { label: "Savings Accounts", href: "/savings/accounts", detail: "8 FDIC-insured online savings accounts, by APY." },
  { label: "HYSA", href: "/savings/hysa", detail: "High-yield savings accounts, ranked by APY." },
  { label: "CDs", href: "/savings/cds", detail: "Certificates of deposit from 3 months to 5 years." },
  { label: "Money Market", href: "/savings/hysa", detail: "Check-writing access plus competitive yields." },
  { label: "Checking", href: "/savings", detail: "Checking accounts that pay interest." },
  { label: "California HYSA", href: "/savings/hysa/california", detail: "Best HYSA rates for California residents." },
  { label: "Texas HYSA", href: "/savings/hysa/texas", detail: "Best HYSA rates for Texas residents." },
  { label: "Florida HYSA", href: "/savings/hysa/florida", detail: "Best HYSA rates for Florida residents." },
  { label: "New York HYSA", href: "/savings/hysa/new-york", detail: "Best HYSA rates for New York residents." },
];

const faqItems: FAQItem[] = [
  {
    question: "Are HYSA accounts safe?",
    answer: "Yes. All accounts in our HYSA table are FDIC-insured (or NCUA-insured for credit unions), which means your deposits are protected up to $250,000 per depositor, per institution. The insurance is backed by the US government.",
  },
  {
    question: "How is savings interest taxed?",
    answer: "Interest earned in a HYSA or CD is treated as ordinary income and reported on a 1099-INT form each year. It is taxed at your marginal income tax rate, not the lower capital gains rate. Interest in a Roth IRA HYSA or CD grows tax-free.",
  },
  {
    question: "Can I lose money in a HYSA?",
    answer: "No, as long as your balance stays within FDIC limits. Your principal is guaranteed. The rate itself can change at any time since most HYSAs are variable, but you will never lose the dollars you deposited.",
  },
  {
    question: "Why do CDs sometimes pay more than HYSAs?",
    answer: "CDs require you to commit your money for a fixed term. In exchange, the bank offers a guaranteed rate for that period. HYSAs are flexible and variable, so banks price them lower. When the yield curve is inverted, short-term CDs can temporarily yield more than long-term ones.",
  },
  {
    question: "What is a no-penalty CD?",
    answer: "A no-penalty CD lets you withdraw your full balance before the term ends without forfeiting earned interest. Rates are usually slightly lower than standard CDs, but they combine the rate certainty of a CD with the flexibility of a HYSA.",
  },
  {
    question: "Is an online bank safer than a brick-and-mortar bank?",
    answer: "Safety comes from FDIC insurance, not branch locations. Online banks and brick-and-mortar banks carry the same $250,000 guarantee. Online banks often pay higher rates because their overhead is lower. Check that FDIC membership is current at fdic.gov before opening any account.",
  },
];

const faqs = [
  {
    q: "Are HYSA accounts safe?",
    a: "Yes. All accounts in our HYSA table are FDIC-insured (or NCUA-insured for credit unions), which means your deposits are protected up to $250,000 per depositor, per institution. The insurance is backed by the US government.",
  },
  {
    q: "How is savings interest taxed?",
    a: "Interest earned in a HYSA or CD is treated as ordinary income and reported on a 1099-INT form each year. It is taxed at your marginal income tax rate, not the lower capital gains rate. Interest in a Roth IRA HYSA or CD grows tax-free.",
  },
  {
    q: "Can I lose money in a HYSA?",
    a: "No, as long as your balance stays within FDIC limits. Your principal is guaranteed. The rate itself can change at any time since most HYSAs are variable, but you will never lose the dollars you deposited.",
  },
  {
    q: "Why do CDs sometimes pay more than HYSAs?",
    a: "CDs require you to commit your money for a fixed term. In exchange, the bank offers a guaranteed rate for that period. HYSAs are flexible and variable, so banks price them lower. When the yield curve is inverted, short-term CDs can temporarily yield more than long-term ones.",
  },
  {
    q: "What is a no-penalty CD?",
    a: "A no-penalty CD lets you withdraw your full balance before the term ends without forfeiting earned interest. Rates are usually slightly lower than standard CDs, but they combine the rate certainty of a CD with the flexibility of a HYSA.",
  },
  {
    q: "Is an online bank safer than a brick-and-mortar bank?",
    a: "Safety comes from FDIC insurance, not branch locations. Online banks and brick-and-mortar banks carry the same $250,000 guarantee. Online banks often pay higher rates because their overhead is lower. Check that FDIC membership is current at fdic.gov before opening any account.",
  },
];

function SavingsBox({ lender, brand }: { lender: SavingsLender; brand: Brand }) {
  const reviewHref = `/reviews/${brand.slug}`;
  const externalHref = `https://www.${brand.domain}`;
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
              {lender.product}
            </span>
            {lender.tag && <span className="chip chip-lime">{lender.tag}</span>}
          </div>
          <p className="text-mute leading-relaxed mb-4 max-w-2xl">{lender.tagline}</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 max-w-2xl">
            <Spec label="Min to open" value={lender.minOpen} />
            <Spec label="Monthly fee" value={lender.monthlyFee} />
            <Spec label="Founded" value={String(lender.founded)} />
            <Spec label="FDIC" value="Insured" />
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

        {/* APY + CTAs */}
        <div className="md:text-right md:min-w-[200px] shrink-0 flex flex-col md:items-end gap-4">
          <div>
            <div className="text-[10px] font-mono uppercase tracking-wider text-mute mb-1">
              APY
            </div>
            <div className="font-display font-extrabold text-4xl md:text-5xl tabular leading-none text-ink">
              {fmtPct(lender.apy)}
            </div>
            <div className="text-xs text-mute mt-1">FDIC-insured</div>
          </div>
          <div className="flex md:flex-col gap-2 md:gap-2 w-full md:w-auto">
            <a
              href={externalHref}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="pill pill-ink"
            >
              Open at {brand.name.split(" ")[0]} <span aria-hidden>↗</span>
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

function fmtPct(n: number) {
  return n.toFixed(2) + "%";
}

export default function Page() {
  const topAccounts = loadSavingsAccounts().slice(0, 5);
  return (
    <>
      <FAQPageSchema items={faqItems} />
      <BreadcrumbListSchema items={[{ name: "Home", href: "/" }, { name: "Savings", href: "/savings" }]} />
      {/* HERO */}
      <section className="relative overflow-hidden bg-bg">
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
        <div className="relative max-w-(--max-w-page) mx-auto px-6 pt-20 pb-16">
          <span className="chip chip-lime mb-6">
            <span className="pulse-dot" /> HYSA rates updated today
          </span>
          <h1 className="font-display font-extrabold text-[clamp(2.5rem,6vw,5rem)] leading-[1.02] tracking-[-0.03em] mb-6 max-w-3xl">
            Where your cash actually grows.
          </h1>
          <p className="text-lg md:text-xl text-mute leading-relaxed max-w-2xl mb-8">
            Fintiex tracks HYSA, CD, and money market rates from FDIC-insured banks every day. No teaser rates, no minimum-balance tricks. The best APY in the table is genuinely the best APY available right now.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/savings/hysa" className="pill pill-ink">
              Compare HYSA accounts
              <span aria-hidden>→</span>
            </Link>
            <Link href="/savings/cds" className="pill pill-ghost">
              See CD rates
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
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "Top HYSA", value: "4.85%", caption: "Bask Bank · No min · FDIC" },
              { label: "12-Month CD", value: "5.10%", caption: "LendingClub · $2.5K min" },
              { label: "24-Month CD", value: "4.80%", caption: "Bread Savings · $1.5K min" },
              { label: "Money Market", value: "4.60%", caption: "Sallie Mae · $0 min" },
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

      {/* LENDER LINEUP — STACKED BOXES */}
      <section className="max-w-(--max-w-page) mx-auto px-6 py-20">
        <div className="grid grid-cols-12 gap-8 mb-8">
          <div className="col-span-12 md:col-span-7">
            <span className="chip chip-mute mb-4">
              <span className="pulse-dot" /> Savings · Live
            </span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-tight">
              Highest-yield savings accounts right now
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5 flex md:items-end md:justify-end">
            <p className="text-mute leading-relaxed md:text-right md:max-w-sm">
              All accounts are FDIC-insured. Rates shown are APY. No paid placements, no affiliate priority.
            </p>
          </div>
        </div>

        <div className="space-y-5">
          {savingsLenders.map((lender) => {
            const brand = getBrand(lender.brandSlug);
            if (!brand) return null;
            return <SavingsBox key={lender.brandSlug} lender={lender} brand={brand} />;
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
                APY, FDIC, HYSA vs CD. Sorted out.
              </h2>
              <p className="text-mute leading-relaxed">
                Three things worth understanding before picking where to park your cash.
              </p>
            </div>
            <div className="col-span-12 lg:col-span-8 space-y-8 text-base leading-relaxed">
              <div>
                <h3 className="font-display font-bold text-xl mb-2 tracking-tight">APY vs interest rate</h3>
                <p className="text-mute">
                  The interest rate is the base rate the bank pays. APY (Annual Percentage Yield) compounds that interest over 12 months, showing what you actually earn. A 4.75% rate compounded daily becomes 4.86% APY. Always compare APY, not the nominal rate. All figures in Fintiex rate tables are APY.
                </p>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl mb-2 tracking-tight">FDIC vs NCUA</h3>
                <p className="text-mute">
                  FDIC (Federal Deposit Insurance Corporation) covers bank deposits up to $250,000 per depositor, per bank. NCUA (National Credit Union Administration) provides equivalent coverage for credit unions. Both are backed by the US government. If you spread money across multiple institutions, you can effectively cover more than $250,000. Verify membership at fdic.gov or ncua.gov before depositing.
                </p>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl mb-2 tracking-tight">HYSA vs CD vs Money Market: how to choose</h3>
                <p className="text-mute">
                  Use a HYSA for your emergency fund and any cash you might need in the next 3 months. The rate is variable, but your money is always accessible. Use a CD when you can commit cash for a fixed period (3 months to 5 years) and want to lock in a rate, especially before the Fed cuts. CDs usually pay a bit more, but you face an early withdrawal penalty (typically 90 to 180 days of interest) if you pull out early. Money market accounts split the difference: they often come with check-writing privileges and debit cards, with rates between a standard savings account and a HYSA.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TOP SAVINGS ACCOUNTS */}
      <section className="max-w-(--max-w-page) mx-auto px-6 py-20">
        <div className="grid grid-cols-12 gap-8 mb-8">
          <div className="col-span-12 md:col-span-7">
            <span className="chip chip-lime mb-4">
              <span className="pulse-dot" /> Top 5 by APY
            </span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-tight">
              Top savings accounts right now.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5 flex md:items-end md:justify-end">
            <Link href="/savings/accounts" className="pill pill-ghost">
              See all 8 savings accounts
              <span aria-hidden>{"->"}</span>
            </Link>
          </div>
        </div>
        <div className="card-flush overflow-hidden">
          {topAccounts.map((a, i) => (
            <Link
              key={a.slug}
              href={`/savings/accounts/${a.slug}`}
              className={`grid grid-cols-12 px-6 py-4 items-center hover:bg-bg-soft/70 transition-colors ${
                i === topAccounts.length - 1 ? "" : "border-b border-line-soft"
              }`}
            >
              <div className="col-span-7 md:col-span-7">
                <div className="font-display font-semibold text-base">{a.bank}</div>
                <div className="text-xs text-mute mt-1">{a.product_name}</div>
              </div>
              <div className="col-span-5 md:col-span-5 text-right font-mono font-semibold tabular text-lg">
                {formatApy(a.apy)} APY
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* SUB-PAGE LINKS */}
      <section className="max-w-(--max-w-page) mx-auto px-6 py-20">
        <div className="mb-10">
          <span className="chip chip-mute mb-4">Explore</span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight">
            Savings by account type and location.
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {subPages.map((p) => (
            <Link key={p.href} href={p.href} className="card p-6 block group">
              <div className="flex items-center justify-between mb-3">
                <span className="chip chip-lime">{p.label}</span>
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
              See exactly how much your savings will grow.
            </h2>
            <p className="text-ink/70 mt-2">Savings goal calculator. No email, no signup.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/calculators/savings-goal" className="pill pill-ink">
              Savings calculator
              <span aria-hidden>→</span>
            </Link>
            <Link href="/calculators/cd-ladder" className="pill pill-ghost">
              CD ladder builder
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
