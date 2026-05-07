import Link from "next/link";
import type { Metadata } from "next";
import { FAQPageSchema, BreadcrumbListSchema, type FAQItem } from "@/components/schemas";

export const metadata: Metadata = {
  title: "Best CD Rates Today | 6mo, 1Y, 2Y, 5Y Top Picks | Fintiex",
  description:
    "Compare today's best CD rates from Marcus, Synchrony, Ally, Discover, CIT, Bask, and more. APYs across 6-month, 1-year, 2-year, and 5-year terms. Updated weekly.",
  alternates: { canonical: "/savings/cds" },
};

interface CdRow {
  bank: string;
  tag?: string;
  apy6m: number;
  apy1y: number;
  apy2y: number;
  apy5y: number;
  min: string;
  reviewHref?: string;
}

const cdRates: CdRow[] = [
  {
    bank: "Marcus by Goldman Sachs",
    tag: "Best Overall",
    apy6m: 5.10,
    apy1y: 5.30,
    apy2y: 4.60,
    apy5y: 4.10,
    min: "$500",
    reviewHref: "/reviews/marcus",
  },
  {
    bank: "Bread Savings",
    apy6m: 5.05,
    apy1y: 5.40,
    apy2y: 4.65,
    apy5y: 4.15,
    min: "$1,500",
  },
  {
    bank: "Synchrony Bank",
    tag: "No Min",
    apy6m: 4.95,
    apy1y: 5.25,
    apy2y: 4.50,
    apy5y: 4.05,
    min: "$0",
    reviewHref: "/reviews/synchrony",
  },
  {
    bank: "Ally Bank",
    apy6m: 4.55,
    apy1y: 5.00,
    apy2y: 4.40,
    apy5y: 4.00,
    min: "$0",
  },
  {
    bank: "Discover Bank",
    apy6m: 4.65,
    apy1y: 5.20,
    apy2y: 4.45,
    apy5y: 4.05,
    min: "$2,500",
    reviewHref: "/reviews/discover-savings",
  },
  {
    bank: "CIT Bank",
    apy6m: 5.00,
    apy1y: 5.10,
    apy2y: 4.30,
    apy5y: 3.95,
    min: "$1,000",
    reviewHref: "/reviews/cit",
  },
  {
    bank: "Bask Bank",
    tag: "Highest 1Y",
    apy6m: 4.90,
    apy1y: 5.45,
    apy2y: 4.55,
    apy5y: 4.10,
    min: "$1,000",
  },
  {
    bank: "Sallie Mae Bank",
    apy6m: 4.85,
    apy1y: 5.15,
    apy2y: 4.50,
    apy5y: 4.05,
    min: "$2,500",
  },
  {
    bank: "Bank5 Connect",
    apy6m: 4.80,
    apy1y: 5.05,
    apy2y: 4.35,
    apy5y: 4.00,
    min: "$500",
  },
  {
    bank: "BMO Alto",
    tag: "No Min",
    apy6m: 4.95,
    apy1y: 5.35,
    apy2y: 4.60,
    apy5y: 4.10,
    min: "$0",
  },
];

const faqItems: FAQItem[] = [
  {
    question: "What is a CD and how does it work?",
    answer: "A certificate of deposit (CD) is a savings product where you commit a fixed amount of money for a fixed term (6 months, 1 year, 5 years) in exchange for a guaranteed interest rate. The bank pays the rate for the full term, and you cannot withdraw without paying an early-withdrawal penalty. CDs are FDIC-insured up to $250,000 per depositor per bank, the same as a regular savings account.",
  },
  {
    question: "Are CDs safe?",
    answer: "Yes. Every bank in our table is FDIC-insured, which means deposits up to $250,000 are guaranteed by the federal government. If the bank fails, you get your money back. The main risk with a CD is opportunity cost: if rates rise after you lock, you are stuck at the older rate until the term ends or you eat the early-withdrawal penalty.",
  },
  {
    question: "What is a CD ladder and why use one?",
    answer: "A CD ladder splits your money across multiple terms. For example, instead of putting $25,000 in a 5-year CD, you put $5,000 each into 1, 2, 3, 4, and 5-year CDs. Each year, one CD matures and you reinvest at the prevailing 5-year rate. Over time, you earn close to the 5-year average rate while having one fifth of your money come due every year. It is the standard way to balance yield and liquidity.",
  },
  {
    question: "Should I use a brokered CD or a bank CD?",
    answer: "Bank CDs are simpler: open online, deposit money, get paid interest, withdraw at maturity. Brokered CDs (sold through Fidelity, Schwab, Vanguard) sometimes carry slightly higher APYs and can be sold on the secondary market before maturity, but the price you sell at depends on rate moves. For most savers, a bank CD from one of the names above is the easier and more predictable choice.",
  },
  {
    question: "What happens if I withdraw early?",
    answer: "You pay an early-withdrawal penalty, typically 90 days of interest on shorter terms (under 2 years) and 180 to 365 days of interest on longer terms. The penalty comes off your interest earnings first, but if it exceeds what you have earned, it can eat into principal. Some no-penalty CDs (Marcus, CIT) skip the penalty entirely in exchange for a slightly lower APY.",
  },
  {
    question: "How are CD rates set right now and where are they headed?",
    answer: "CD rates track the Federal Reserve's policy rate and short-term Treasury yields. With the Fed paused around 4.25 to 4.50%, banks are offering 1-year CDs in the 5.10 to 5.45% range. If the Fed begins cutting rates in late 2026, CD rates will follow downward, which is why locking longer-term yields now is a popular move. The FDIC's National Rate Cap data tracks the ceilings under deposit insurance rules.",
  },
];

function fmtPct(n: number) {
  return n.toFixed(2) + "%";
}

export default function Page() {
  const top1y = [...cdRates].sort((a, b) => b.apy1y - a.apy1y)[0]!;
  const top5y = [...cdRates].sort((a, b) => b.apy5y - a.apy5y)[0]!;

  return (
    <>
      <FAQPageSchema items={faqItems} />
      <BreadcrumbListSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Savings", href: "/savings" },
          { name: "CDs", href: "/savings/cds" },
        ]}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-bg">
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
        <div className="relative max-w-(--max-w-page) mx-auto px-6 pt-20 pb-16">
          <span className="chip chip-violet mb-6">
            <span className="pulse-dot" /> Updated weekly
          </span>
          <h1 className="font-display font-extrabold text-[clamp(2.5rem,6vw,5rem)] leading-[1.02] tracking-[-0.03em] mb-6 max-w-3xl">
            CD rates without the noise.
          </h1>
          <p className="text-lg md:text-xl text-mute leading-relaxed max-w-2xl mb-8">
            Top APYs from 10 FDIC-insured banks across 6-month, 1-year, 2-year, and 5-year terms. No teaser rates, no minimums hidden in fine print. Pick the term that fits your timeline and lock the best yield available today.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/calculators/cd-ladder" className="pill pill-ink">
              Build a CD ladder
              <span aria-hidden>{"->"}</span>
            </Link>
            <Link href="/savings" className="pill pill-ghost">
              All savings accounts
            </Link>
          </div>
        </div>
      </section>

      {/* RATE SNAPSHOT */}
      <section className="border-y border-line bg-bg-soft/60">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-display font-bold text-2xl tracking-tight">CD rate snapshot</h2>
            <span className="text-xs font-mono text-mute">Source: bank rate sheets, FDIC</span>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="card p-5">
              <div className="text-xs text-mute mb-2">Top 1-year APY</div>
              <div className="font-display font-extrabold text-3xl md:text-4xl tabular tracking-tight mb-2">
                {fmtPct(top1y.apy1y)}
              </div>
              <div className="text-xs text-mute mt-2">{top1y.bank}</div>
            </div>
            <div className="card p-5">
              <div className="text-xs text-mute mb-2">Top 5-year APY</div>
              <div className="font-display font-extrabold text-3xl md:text-4xl tabular tracking-tight mb-2">
                {fmtPct(top5y.apy5y)}
              </div>
              <div className="text-xs text-mute mt-2">{top5y.bank}</div>
            </div>
            <div className="card p-5">
              <div className="text-xs text-mute mb-2">FDIC insurance</div>
              <div className="font-display font-extrabold text-3xl md:text-4xl tabular tracking-tight mb-2">
                $250K
              </div>
              <div className="text-xs text-mute mt-2">Per depositor, per bank</div>
            </div>
            <div className="card p-5">
              <div className="text-xs text-mute mb-2">Banks tracked</div>
              <div className="font-display font-extrabold text-3xl md:text-4xl tabular tracking-tight mb-2">
                {cdRates.length}
              </div>
              <div className="text-xs text-mute mt-2">FDIC-insured online banks</div>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN RATE TABLE */}
      <section className="max-w-(--max-w-page) mx-auto px-6 py-20">
        <div className="grid grid-cols-12 gap-8 mb-8">
          <div className="col-span-12 md:col-span-7">
            <span className="chip chip-mute mb-4">
              <span className="pulse-dot" /> Top 10 picks
            </span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-tight">
              Best CDs across 6mo, 1Y, 2Y, and 5Y terms
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5 flex md:items-end md:justify-end">
            <p className="text-mute leading-relaxed md:text-right md:max-w-sm">
              All rates are APY (compounded). Pulled directly from bank rate sheets. No paid placements. Minimums shown in the right column.
            </p>
          </div>
        </div>

        <div className="card-flush overflow-hidden">
          <div className="grid grid-cols-12 px-6 py-3 text-xs font-mono uppercase tracking-wider text-mute border-b border-line bg-bg-soft/50">
            <div className="col-span-4">Bank</div>
            <div className="col-span-2 text-right">6 mo</div>
            <div className="col-span-2 text-right">1 yr</div>
            <div className="col-span-2 text-right">2 yr</div>
            <div className="col-span-1 text-right hidden md:block">5 yr</div>
            <div className="col-span-1 text-right hidden md:block">Min</div>
          </div>
          {cdRates.map((r, i) => {
            const inner = (
              <>
                <div className="col-span-4">
                  <div className="flex items-center gap-2 flex-wrap">
                    <div className="font-display font-semibold text-base">{r.bank}</div>
                    {r.tag && <span className="chip chip-lime">{r.tag}</span>}
                  </div>
                  <div className="md:hidden text-xs text-mute mt-1 font-mono tabular">
                    5Y {fmtPct(r.apy5y)} · Min {r.min}
                  </div>
                </div>
                <div className="col-span-2 text-right font-mono tabular text-sm">{fmtPct(r.apy6m)}</div>
                <div className="col-span-2 text-right font-mono font-semibold tabular text-base">
                  {fmtPct(r.apy1y)}
                </div>
                <div className="col-span-2 text-right font-mono tabular text-sm">{fmtPct(r.apy2y)}</div>
                <div className="col-span-1 text-right font-mono tabular text-sm hidden md:block">
                  {fmtPct(r.apy5y)}
                </div>
                <div className="col-span-1 text-right font-mono text-xs text-mute hidden md:block">{r.min}</div>
              </>
            );
            const cls = `grid grid-cols-12 px-6 py-4 items-center hover:bg-bg-soft/70 transition-colors ${
              i === cdRates.length - 1 ? "" : "border-b border-line-soft"
            }`;
            return r.reviewHref ? (
              <Link key={r.bank} href={r.reviewHref} className={cls}>
                {inner}
              </Link>
            ) : (
              <div key={r.bank} className={cls}>
                {inner}
              </div>
            );
          })}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/reviews/marcus" className="pill pill-ghost text-xs">
            Marcus review
          </Link>
          <Link href="/reviews/synchrony" className="pill pill-ghost text-xs">
            Synchrony review
          </Link>
          <Link href="/reviews/cit" className="pill pill-ghost text-xs">
            CIT review
          </Link>
          <Link href="/reviews/discover-savings" className="pill pill-ghost text-xs">
            Discover review
          </Link>
        </div>
      </section>

      {/* EXPLAINER */}
      <section className="bg-bg-soft/60 border-y border-line">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-20">
          <div className="grid grid-cols-12 gap-10">
            <div className="col-span-12 lg:col-span-4">
              <span className="chip chip-mute mb-4">How it works</span>
              <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-tight mb-6">
                How CD ladders work, and when they beat a HYSA.
              </h2>
              <p className="text-mute leading-relaxed">
                CDs trade liquidity for a guaranteed rate. A ladder restores most of the liquidity while keeping most of the yield.
              </p>
            </div>
            <div className="col-span-12 lg:col-span-8 space-y-8 text-base leading-relaxed">
              <div>
                <h3 className="font-display font-bold text-xl mb-2 tracking-tight">CD ladder, the 5-rung version</h3>
                <p className="text-mute">
                  Split your money into five equal buckets. Buy a 1-year CD, a 2-year, a 3-year, a 4-year, and a 5-year. Every year after that, the shortest CD matures and you roll it into a new 5-year CD. Within five years, every rung is at the 5-year rate, and one fifth of your money is liquid every 12 months. You earn close to the 5-year yield with the access of a 1-year CD.
                </p>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl mb-2 tracking-tight">When a CD beats a high-yield savings account</h3>
                <p className="text-mute">
                  HYSAs pay variable rates. If the Fed cuts, your APY drops the same week. CDs lock in today's rate for the full term. If you have money you will not need for 12 months and the Fed is signaling cuts, locking a 5.30% 1-year CD today usually beats hoping the HYSA stays at 5%. The CFPB recommends comparing the term-adjusted yield against the projected average HYSA rate over the same period.
                </p>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl mb-2 tracking-tight">No-penalty CDs as middle ground</h3>
                <p className="text-mute">
                  Several banks (Marcus, CIT, Ally) offer no-penalty CDs. The APY is usually 0.10 to 0.30 percentage points lower than a standard CD of the same term, but you can withdraw anytime without losing interest. For an emergency fund, a no-penalty 11-month CD often pays a higher locked rate than a regular HYSA without sacrificing liquidity.
                </p>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl mb-2 tracking-tight">Tax treatment</h3>
                <p className="text-mute">
                  Interest from CDs is taxed as ordinary income at the federal level and most state levels. The bank issues a 1099-INT every January for the prior year's interest. Treasury bills and notes (state-tax-exempt) are sometimes a better deal for high earners in California, New York, or other high-tax states. Always model after-tax yield before locking a long term.
                </p>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl mb-2 tracking-tight">FDIC coverage stacking</h3>
                <p className="text-mute">
                  FDIC insurance is $250,000 per depositor, per bank, per ownership category. If you have $400,000 to ladder, splitting between two banks (or using a joint account) doubles your coverage. The FDIC's BankFind tool confirms each bank's insured status, and Fintiex only lists FDIC-insured institutions. Never trust an unusually high APY from a bank you cannot verify.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-(--max-w-page) mx-auto px-6 py-20">
        <div className="mb-10">
          <span className="chip chip-mute mb-4">FAQ</span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight">
            Common questions.
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
              Build your CD ladder in 60 seconds.
            </h2>
            <p className="text-ink/70 mt-2">CD ladder calculator. Set rungs, set rates, see total yield.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/calculators/cd-ladder" className="pill pill-ink">
              CD ladder calculator
              <span aria-hidden>{"->"}</span>
            </Link>
            <Link href="/savings/hysa" className="pill pill-ghost">
              Compare HYSAs
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
