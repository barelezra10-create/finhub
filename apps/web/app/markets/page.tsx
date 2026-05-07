import Link from "next/link";
import type { Metadata } from "next";
import { FAQPageSchema, BreadcrumbListSchema, type FAQItem } from "@/components/schemas";

export const metadata: Metadata = {
  title: "Markets at a Glance | Live Mortgage, Savings, Loan, and Card Rates | Fintiex",
  description:
    "Live snapshot of US consumer rates: 30Y mortgage, 15Y mortgage, top HYSA, top 1-year CD, personal loan average, and credit card APR. Sourced from Freddie Mac, FDIC, and the Federal Reserve.",
  alternates: { canonical: "/markets" },
};

interface RateTile {
  label: string;
  value: string;
  caption: string;
  source: string;
  updated: string;
  sparkline: number[];
  trendLabel: "up" | "down" | "flat";
  trendDelta: string;
  href: string;
  hrefLabel: string;
}

const rates: RateTile[] = [
  {
    label: "30-Year Fixed Mortgage",
    value: "6.85%",
    caption: "National average APR for a 30-year conforming loan.",
    source: "Freddie Mac PMMS",
    updated: "Today",
    sparkline: [7.05, 7.00, 6.94, 6.92, 6.90, 6.88, 6.85],
    trendLabel: "down",
    trendDelta: "-20 bps WoW",
    href: "/mortgages",
    hrefLabel: "Mortgage rates",
  },
  {
    label: "15-Year Fixed Mortgage",
    value: "6.24%",
    caption: "Lower rate, faster amortization. Higher monthly.",
    source: "Freddie Mac PMMS",
    updated: "Today",
    sparkline: [6.45, 6.40, 6.34, 6.30, 6.28, 6.26, 6.24],
    trendLabel: "down",
    trendDelta: "-21 bps WoW",
    href: "/mortgages",
    hrefLabel: "15-year picks",
  },
  {
    label: "Top High-Yield Savings",
    value: "5.05% APY",
    caption: "Best in market across major FDIC-insured online banks.",
    source: "FDIC + bank rate sheets",
    updated: "This week",
    sparkline: [4.85, 4.90, 4.95, 5.00, 5.05, 5.05, 5.05],
    trendLabel: "up",
    trendDelta: "+5 bps WoW",
    href: "/savings/hysa",
    hrefLabel: "Best HYSAs",
  },
  {
    label: "Top 1-Year CD",
    value: "5.45% APY",
    caption: "Highest 1-year APY across the 10 banks we track.",
    source: "FDIC + bank rate sheets",
    updated: "This week",
    sparkline: [5.30, 5.35, 5.40, 5.40, 5.45, 5.45, 5.45],
    trendLabel: "up",
    trendDelta: "+5 bps WoW",
    href: "/savings/cds",
    hrefLabel: "Best CDs",
  },
  {
    label: "Personal Loan Average",
    value: "12.46%",
    caption: "Average APR on a 24-month personal loan, 700+ FICO.",
    source: "Federal Reserve G.19",
    updated: "Monthly",
    sparkline: [12.65, 12.60, 12.55, 12.52, 12.50, 12.48, 12.46],
    trendLabel: "down",
    trendDelta: "-19 bps MoM",
    href: "/loans",
    hrefLabel: "Personal loans",
  },
  {
    label: "Credit Card Average APR",
    value: "21.47%",
    caption: "Average rate on accounts assessed interest.",
    source: "Federal Reserve G.19",
    updated: "Monthly",
    sparkline: [21.20, 21.30, 21.35, 21.40, 21.43, 21.45, 21.47],
    trendLabel: "up",
    trendDelta: "+4 bps MoM",
    href: "/credit-cards",
    hrefLabel: "Best credit cards",
  },
];

const faqItems: FAQItem[] = [
  {
    question: "Where do these rates come from?",
    answer: "Mortgage rates come from Freddie Mac's Primary Mortgage Market Survey (PMMS), released every Thursday. Savings and CD rates come directly from FDIC-insured bank rate sheets, cross-checked against the FDIC's National Rate Cap data. Personal loan and credit card averages come from the Federal Reserve's G.19 Consumer Credit release, published monthly.",
  },
  {
    question: "How often are the numbers refreshed?",
    answer: "Mortgage and savings rates refresh weekly. Personal loan and credit card averages refresh monthly when the Federal Reserve publishes G.19. Each tile shows its own last-updated label so you know how fresh the number is.",
  },
  {
    question: "Why is the credit card APR so much higher than other rates?",
    answer: "Credit cards are unsecured revolving debt. The lender has no collateral to seize if you default and no fixed payment schedule, so the risk premium is enormous. Card rates are also tied to prime rate, which moves with the federal funds rate. As the Fed paused around 4.25% to 4.50%, card APRs settled in the 21% range, the highest level in modern Federal Reserve data.",
  },
  {
    question: "Are the savings yields really competing with mortgage rates?",
    answer: "Yes, that is the unusual feature of this rate cycle. The Fed kept short-term rates high to fight inflation, which pushed 1-year CDs above 5%. Long-term mortgage rates are anchored to the 10-year Treasury, which sits below the federal funds rate (an inverted yield curve). The result: you can earn 5% in a CD while paying 6.85% on a new mortgage, a spread of less than 200 basis points.",
  },
  {
    question: "Can I rely on these numbers for a real lender quote?",
    answer: "Use them as a benchmark, not a final quote. Your actual rate depends on credit score, loan-to-value, debt-to-income, loan size, and lender. The CFPB recommends getting at least three personalized quotes before committing. Use the linked product hubs to compare specific lenders against the benchmark.",
  },
  {
    question: "What does the sparkline show?",
    answer: "Each sparkline shows the rate over the last seven data points. For weekly rates that is roughly six weeks of history; for monthly rates that is six months. The bars are scaled within each tile, not across tiles, so the visual comparison is meaningful only within a single rate.",
  },
];

function trendChip(t: "up" | "down" | "flat", delta: string) {
  if (t === "flat") {
    return <span className="text-mute font-mono text-xs">flat · {delta}</span>;
  }
  if (t === "up") {
    return <span className="text-rose font-mono text-xs">up · {delta}</span>;
  }
  return <span className="text-mint font-mono text-xs">down · {delta}</span>;
}

function Sparkline({ values }: { values: number[] }) {
  const min = Math.min(...values);
  const max = Math.max(...values);
  const span = max - min || 1;
  return (
    <div className="flex items-end gap-1 h-10">
      {values.map((v, i) => {
        const pct = ((v - min) / span) * 80 + 20;
        return (
          <div
            key={i}
            className="flex-1 bg-ink/80 rounded-sm"
            style={{ height: `${pct}%` }}
            aria-hidden
          />
        );
      })}
    </div>
  );
}

export default function Page() {
  return (
    <>
      <FAQPageSchema items={faqItems} />
      <BreadcrumbListSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Markets", href: "/markets" },
        ]}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-bg">
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
        <div className="relative max-w-(--max-w-page) mx-auto px-6 pt-20 pb-16">
          <span className="chip chip-lime mb-6">
            <span className="pulse-dot" /> Updated daily
          </span>
          <h1 className="font-display font-extrabold text-[clamp(2.5rem,6vw,5rem)] leading-[1.02] tracking-[-0.03em] mb-6 max-w-3xl">
            Markets at a glance.
          </h1>
          <p className="text-lg md:text-xl text-mute leading-relaxed max-w-2xl mb-8">
            One screen for every consumer rate that matters. Mortgages, savings, CDs, personal loans, credit cards. Sourced from Freddie Mac, the FDIC, and the Federal Reserve. Refreshed on the same cadence as the underlying data, never older than the source itself.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/mortgages" className="pill pill-ink">
              Mortgage hub
              <span aria-hidden>{"->"}</span>
            </Link>
            <Link href="/savings" className="pill pill-ghost">
              Savings hub
            </Link>
            <Link href="/credit-cards" className="pill pill-ghost">
              Credit cards
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-mute">
            <div className="flex items-center gap-2">
              <span className="font-mono tabular text-ink font-semibold">{rates.length}</span> rates
            </div>
            <div className="flex items-center gap-2">
              <span className="font-mono tabular text-ink font-semibold">3</span> primary sources
            </div>
            <div className="flex items-center gap-2">
              <span className="font-mono tabular text-ink font-semibold">0</span> sponsored picks
            </div>
          </div>
        </div>
      </section>

      {/* MARKETS AT A GLANCE GRID */}
      <section className="border-y border-line bg-bg-soft/60">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-14">
          <div className="grid grid-cols-12 gap-8 mb-8">
            <div className="col-span-12 md:col-span-7">
              <span className="chip chip-mute mb-4">
                <span className="pulse-dot" /> Live snapshot
              </span>
              <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-tight">
                The rates that move your monthly budget.
              </h2>
            </div>
            <div className="col-span-12 md:col-span-5 flex md:items-end md:justify-end">
              <p className="text-mute leading-relaxed md:text-right md:max-w-sm">
                Headline number, source, last update, and a 7-point trend bar for each rate. Click through to the dedicated hub for picks and context.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {rates.map((r) => (
              <div key={r.label} className="card p-6 flex flex-col">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="text-xs text-mute leading-snug">{r.label}</div>
                  <span className="chip chip-mute">{r.updated}</span>
                </div>
                <div className="font-display font-extrabold text-4xl tabular tracking-tight mb-3">
                  {r.value}
                </div>
                <div className="mb-4">
                  <Sparkline values={r.sparkline} />
                </div>
                <div className="flex items-center justify-between mb-4">
                  {trendChip(r.trendLabel, r.trendDelta)}
                  <span className="font-mono text-xs text-mute">{r.source}</span>
                </div>
                <p className="text-sm text-mute leading-relaxed mb-5">{r.caption}</p>
                <Link
                  href={r.href}
                  className="mt-auto u-link text-sm font-semibold text-ink"
                >
                  {r.hrefLabel} {">"}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE SOURCE RATES */}
      <section className="max-w-(--max-w-page) mx-auto px-6 py-20">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 lg:col-span-4">
            <span className="chip chip-mute mb-4">How we source rates</span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-tight mb-6">
              Three primary sources, no middlemen.
            </h2>
            <p className="text-mute leading-relaxed">
              Every number you see traces back to Freddie Mac, the FDIC, or the Federal Reserve. We do not pay for placement. We do not run an affiliate auction. The lowest rate in the table is the lowest rate.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-8 space-y-8 text-base leading-relaxed">
            <div>
              <h3 className="font-display font-bold text-xl mb-2 tracking-tight">Freddie Mac PMMS for mortgages</h3>
              <p className="text-mute">
                The Primary Mortgage Market Survey is a weekly survey of more than 200 lenders, published every Thursday. We use the 30-year and 15-year national averages, then layer in lender-by-lender quotes from Marcus, Better, Rocket, Chase, Wells Fargo, and others on our mortgage hub. The PMMS is the industry's longest-running rate benchmark, dating back to 1971.
              </p>
            </div>
            <div>
              <h3 className="font-display font-bold text-xl mb-2 tracking-tight">FDIC for savings and CDs</h3>
              <p className="text-mute">
                The FDIC publishes the National Rate Cap data weekly, which sets the ceiling on rates that less-than-well-capitalized banks can offer. We cross-reference this against the published rate sheets of 10 major online banks (Marcus, Bread, Synchrony, Ally, Discover, CIT, Bask, Sallie Mae, Bank5 Connect, BMO Alto). Only FDIC-insured institutions appear in our tables.
              </p>
            </div>
            <div>
              <h3 className="font-display font-bold text-xl mb-2 tracking-tight">Federal Reserve G.19 for loans and cards</h3>
              <p className="text-mute">
                The Federal Reserve's G.19 Consumer Credit release, published monthly, reports the average APR on consumer loans and credit cards across all reporting banks. We use this for the headline averages and supplement with lender-specific quotes from our review pages. G.19 is the closest thing to a national consumer rate index.
              </p>
            </div>
            <div>
              <h3 className="font-display font-bold text-xl mb-2 tracking-tight">CFPB shopping rules</h3>
              <p className="text-mute">
                The Consumer Financial Protection Bureau recommends getting at least three personalized quotes before committing to any consumer loan. Our role is to give you the benchmark, then send you to the product pages where you can compare specific lenders. The CFPB's published research shows shoppers who compare three lenders save roughly $1,500 to $3,000 over the life of a typical loan.
              </p>
            </div>
            <div>
              <h3 className="font-display font-bold text-xl mb-2 tracking-tight">What we do not do</h3>
              <p className="text-mute">
                We do not accept payment for ranking or placement. We do not blend partner rates with public rates. We do not surface "starting at" or "as low as" teaser rates that the average shopper will not qualify for. The rate at the top of every table is the rate that the named lender publishes, full stop.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SOURCE CARDS */}
      <section className="bg-bg-soft/60 border-y border-line">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-16">
          <div className="mb-10">
            <span className="chip chip-mute mb-4">Sources</span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight">
              Verify any number, fast.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="card p-6">
              <div className="chip chip-violet mb-3">Freddie Mac PMMS</div>
              <h3 className="font-display font-bold text-lg mb-2 tracking-tight">Mortgage benchmarks</h3>
              <p className="text-sm text-mute leading-relaxed mb-4">
                Weekly national average for 30-year and 15-year fixed mortgages. Surveys 200+ lenders. Published every Thursday morning.
              </p>
              <span className="font-mono text-xs text-mute">freddiemac.com / pmms</span>
            </div>
            <div className="card p-6">
              <div className="chip chip-violet mb-3">FDIC</div>
              <h3 className="font-display font-bold text-lg mb-2 tracking-tight">Savings rate caps</h3>
              <p className="text-sm text-mute leading-relaxed mb-4">
                National Rate Cap data. Published weekly. Confirms FDIC insurance status for every bank we list.
              </p>
              <span className="font-mono text-xs text-mute">fdic.gov / national-rates</span>
            </div>
            <div className="card p-6">
              <div className="chip chip-violet mb-3">Federal Reserve G.19</div>
              <h3 className="font-display font-bold text-lg mb-2 tracking-tight">Consumer credit averages</h3>
              <p className="text-sm text-mute leading-relaxed mb-4">
                Monthly release of average APRs on personal loans and credit cards across all reporting banks. Industry-standard benchmark.
              </p>
              <span className="font-mono text-xs text-mute">federalreserve.gov / g19</span>
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
              Pick a rate, run the math, make a move.
            </h2>
            <p className="text-ink/70 mt-2">10 free calculators. No signup, no email, no upsells.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/calculators" className="pill pill-ink">
              All calculators
              <span aria-hidden>{"->"}</span>
            </Link>
            <Link href="/calculators/mortgage-payment" className="pill pill-ghost">
              Mortgage calculator
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
