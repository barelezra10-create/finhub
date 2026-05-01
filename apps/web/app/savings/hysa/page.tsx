import type { Metadata } from "next";
import Link from "next/link";
import { states } from "@/lib/states";

export const metadata: Metadata = {
  title: "Best High-Yield Savings Accounts (HYSA) of 2026",
  description:
    "Compare the top HYSA rates from national online banks. All accounts are FDIC-insured up to $250K per depositor. Updated April 2026.",
};

interface HysaOption {
  lender: string;
  apy: number;
  tag?: string;
  detail: string;
  href: string;
}

const hysaOptions: HysaOption[] = [
  { lender: "Bask Bank", apy: 4.85, tag: "Top APY", detail: "No minimum balance. No monthly fees. FDIC-insured up to $250K per depositor.", href: "/savings/bask" },
  { lender: "Bread Savings", apy: 4.75, detail: "$100 minimum opening deposit. No monthly fees. FDIC-insured.", href: "/savings/bread" },
  { lender: "Marcus by Goldman Sachs", apy: 4.50, detail: "No minimum balance. No fees. Backed by Goldman Sachs Bank USA.", href: "/savings/marcus" },
  { lender: "Ally Bank", apy: 4.45, detail: "No minimum balance. No monthly fees. 24/7 customer service.", href: "/savings/ally" },
  { lender: "SoFi", apy: 4.40, detail: "Direct deposit required for top rate. No minimum balance.", href: "/savings/sofi" },
  { lender: "Discover Bank", apy: 4.30, detail: "No minimum balance. No fees. Same-day transfers available.", href: "/savings/discover" },
  { lender: "CIT Bank", apy: 4.25, detail: "$100 minimum. No monthly service charge. FDIC-insured.", href: "/savings/cit" },
  { lender: "American Express", apy: 4.15, detail: "No minimum balance. No fees. Easy online access.", href: "/savings/amex" },
];

function fmtPct(n: number) {
  return n.toFixed(2) + "%";
}

export default function HysaPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-bg">
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />

        <div className="relative max-w-(--max-w-page) mx-auto px-6 pt-20 pb-16">
          <span className="chip chip-violet mb-6">
            <span className="pulse-dot" /> Updated 4 minutes ago
          </span>
          <h1 className="font-display font-extrabold text-[clamp(2.25rem,5.5vw,4.5rem)] leading-[1.04] tracking-[-0.03em] mb-6 max-w-3xl">
            Best High-Yield Savings Accounts of 2026
          </h1>
          <p className="text-lg md:text-xl text-mute leading-relaxed max-w-2xl mb-8">
            A high-yield savings account (HYSA) is the simplest way to earn more on money you are not spending. The top national online banks currently pay 4.15% to 4.85% APY. That is eight to ten times more than the national average savings rate of around 0.46%. Every account listed here is FDIC-insured up to $250,000 per depositor and charges no monthly fees.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/savings/bask" className="pill pill-ink">
              See top rate
              <span aria-hidden>→</span>
            </Link>
            <Link href="/calculators/savings-goal" className="pill pill-ghost">
              Run the numbers
            </Link>
          </div>
        </div>
      </section>

      {/* INTRO CONTENT */}
      <section className="max-w-(--max-w-page) mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-mute leading-relaxed">
          <div className="space-y-5">
            <h2 className="font-display font-bold text-2xl text-ink tracking-tight">What is a high-yield savings account?</h2>
            <p>
              A high-yield savings account works exactly like a standard savings account at your local bank, with one key difference: the interest rate is dramatically higher. Traditional banks pay depositors very little because their overhead costs are high. Online banks, without the cost of physical branches, pass those savings to depositors in the form of higher annual percentage yields.
            </p>
            <p>
              The accounts on this page are all held at FDIC-member institutions. Your deposits are insured up to $250,000 per depositor, per institution, per ownership category. This is the same protection you get at any bank in the country, regardless of whether it has a branch near you.
            </p>
            <p>
              Opening an HYSA takes about ten minutes. You link your existing checking account, transfer funds, and start earning interest the next business day. Most accounts have no minimum balance requirement and no monthly maintenance fees. A few require a small opening deposit in the $100 range.
            </p>
          </div>
          <div className="space-y-5">
            <h2 className="font-display font-bold text-2xl text-ink tracking-tight">How to pick the right HYSA in 2026</h2>
            <p>
              Start with the APY. The difference between 4.15% and 4.85% on a $25,000 balance is about $175 per year in additional interest. Over several years, that compounds into a meaningful amount. The best rate is not always at the most recognizable brand name.
            </p>
            <p>
              Next, look at minimums and fees. A 4.85% account with no minimum is almost always better than a 5.00% account requiring $10,000 to open. Monthly maintenance fees can erase a significant portion of your interest earnings if you fall below a threshold balance.
            </p>
            <p>
              Transfer speed matters too. Most online HYSAs settle ACH transfers in one to two business days. Some offer same-day or next-day transfers. If you plan to use the account as a liquid emergency fund, check the transfer timeline before committing.
            </p>
            <p>
              Finally, check compounding frequency. All accounts below compound interest daily and credit it monthly, which gives you the full stated APY with no gaps in accrual.
            </p>
          </div>
        </div>
      </section>

      {/* RATE TABLE */}
      <section className="max-w-(--max-w-page) mx-auto px-6 py-10">
        <div className="grid grid-cols-12 gap-8 mb-8">
          <div className="col-span-12 md:col-span-7">
            <span className="chip chip-mute mb-4">
              <span className="pulse-dot" /> Rates · Live
            </span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-tight">
              Top HYSA rates, April 2026
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5 flex md:items-end md:justify-end">
            <p className="text-mute leading-relaxed md:text-right md:max-w-sm">
              All accounts are nationally available. FDIC-insured. No paid placements or sponsored positions.
            </p>
          </div>
        </div>

        <div className="card-flush overflow-hidden">
          <div className="grid grid-cols-12 px-6 py-3 text-xs font-mono uppercase tracking-wider text-mute border-b border-line bg-bg-soft/50">
            <div className="col-span-6 md:col-span-5">Bank</div>
            <div className="hidden md:block md:col-span-5">Details</div>
            <div className="col-span-6 md:col-span-2 text-right">APY</div>
          </div>
          {hysaOptions.map((r, i) => (
            <Link
              key={r.lender}
              href={r.href}
              className={`grid grid-cols-12 px-6 py-4 items-center hover:bg-bg-soft/70 transition-colors ${
                i === hysaOptions.length - 1 ? "" : "border-b border-line-soft"
              }`}
            >
              <div className="col-span-8 md:col-span-5">
                <div className="flex items-center gap-2 flex-wrap">
                  <div className="font-display font-semibold text-base">{r.lender}</div>
                  {r.tag && <span className="chip chip-lime">{r.tag}</span>}
                </div>
                <div className="md:hidden text-xs text-mute mt-1">{r.detail}</div>
              </div>
              <div className="hidden md:block md:col-span-5 text-mute text-sm">{r.detail}</div>
              <div className="col-span-4 md:col-span-2 text-right font-mono font-semibold tabular text-lg">
                {fmtPct(r.apy)}
              </div>
            </Link>
          ))}
        </div>

        <p className="text-xs text-mute mt-4">
          Rates as of April 2026. APY subject to change. All accounts FDIC-insured up to $250,000 per depositor per institution. Not a recommendation.
        </p>
      </section>

      {/* CALCULATOR CTA */}
      <section className="bg-lime border-y border-ink">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-14 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <span className="chip chip-ink mb-4">Tool</span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight max-w-xl leading-tight">
              How long until you hit your savings goal? Run the numbers.
            </h2>
          </div>
          <Link href="/calculators/savings-goal" className="pill pill-ink shrink-0">
            Open savings calculator
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>

      {/* FIND BY STATE */}
      <section className="max-w-(--max-w-page) mx-auto px-6 py-16">
        <span className="chip chip-mute mb-6">By state</span>
        <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight mb-4 max-w-2xl leading-tight">
          Find HYSA rates by state
        </h2>
        <p className="text-mute leading-relaxed max-w-2xl mb-10">
          Every HYSA listed above is available in all 50 states. But tax treatment, local bank competition, and median income vary by state. Each state page explains how HYSA interest is taxed locally, lists the top local banks in that state, and gives residents a clear picture of how much they stand to gain by switching.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
          {states.map((s) => (
            <Link
              key={s.slug}
              href={`/savings/hysa/${s.slug}`}
              className="text-sm px-3 py-2 rounded-xl border border-line hover:border-ink hover:bg-bg-soft text-mute hover:text-ink transition-colors"
            >
              {s.name}
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
