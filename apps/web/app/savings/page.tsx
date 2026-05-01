import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best High-Yield Savings Accounts, CDs & Money Market Rates Today | Fintiex",
  description:
    "Compare the best HYSA, CD, and money market rates from FDIC-insured banks. No fees, no minimums. Updated daily. Find the highest APY for your cash right now.",
};

interface RateRow {
  lender: string;
  apr: number;
  tag?: string;
  detail: string;
  href: string;
}

const hysaRates: RateRow[] = [
  { lender: "Bask Bank", apr: 4.85, tag: "Top", detail: "No min · No fees · FDIC", href: "/savings/bask" },
  { lender: "Bread Savings", apr: 4.75, detail: "$100 min · No fees · FDIC", href: "/savings/bread" },
  { lender: "Marcus by Goldman Sachs", apr: 4.50, detail: "No min · No fees · FDIC", href: "/savings/marcus" },
  { lender: "Ally Bank", apr: 4.45, detail: "No min · No fees · FDIC", href: "/savings/ally" },
  { lender: "SoFi", apr: 4.40, detail: "Direct deposit required · FDIC", href: "/savings/sofi" },
  { lender: "Discover Bank", apr: 4.30, detail: "No min · No fees · FDIC", href: "/savings/discover" },
  { lender: "CIT Bank", apr: 4.25, detail: "$100 min · Platinum tier · FDIC", href: "/savings/cit" },
  { lender: "American Express HYSA", apr: 4.15, detail: "No min · No transfer limit · FDIC", href: "/savings/amex" },
];

const subPages = [
  { label: "HYSA", href: "/savings/hysa", detail: "High-yield savings accounts, ranked by APY." },
  { label: "CDs", href: "/savings/cds", detail: "Certificates of deposit from 3 months to 5 years." },
  { label: "Money Market", href: "/savings/money-market", detail: "Check-writing access plus competitive yields." },
  { label: "Checking", href: "/savings/checking", detail: "Checking accounts that pay interest." },
  { label: "California HYSA", href: "/savings/hysa/california", detail: "Best HYSA rates for California residents." },
  { label: "Texas HYSA", href: "/savings/hysa/texas", detail: "Best HYSA rates for Texas residents." },
  { label: "Florida HYSA", href: "/savings/hysa/florida", detail: "Best HYSA rates for Florida residents." },
  { label: "New York HYSA", href: "/savings/hysa/new-york", detail: "Best HYSA rates for New York residents." },
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

function fmtPct(n: number) {
  return n.toFixed(2) + "%";
}

export default function Page() {
  return (
    <>
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

      {/* MAIN RATE TABLE */}
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

        <div className="card-flush overflow-hidden">
          <div className="grid grid-cols-12 px-6 py-3 text-xs font-mono uppercase tracking-wider text-mute border-b border-line bg-bg-soft/50">
            <div className="col-span-6 md:col-span-5">Bank</div>
            <div className="hidden md:block md:col-span-4">Detail</div>
            <div className="col-span-6 md:col-span-3 text-right">APY</div>
          </div>
          {hysaRates.map((r, i) => (
            <Link
              key={r.lender}
              href={r.href}
              className={`grid grid-cols-12 px-6 py-4 items-center hover:bg-bg-soft/70 transition-colors ${
                i === hysaRates.length - 1 ? "" : "border-b border-line-soft"
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
              <div className="col-span-6 md:col-span-3 text-right font-mono font-semibold tabular text-lg">
                {fmtPct(r.apr)}
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
