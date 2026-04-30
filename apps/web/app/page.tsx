import Link from "next/link";

interface RateRow {
  lender: string;
  apr: number;
  tag?: string;
  detail: string;
  href: string;
  trend?: "up" | "down" | "flat";
}

interface MarketTile {
  label: string;
  value: string;
  delta: number;
  caption: string;
}

const featuredMarkets: MarketTile[] = [
  { label: "30Y Fixed Mortgage", value: "6.85%", delta: 0.02, caption: "Avg of 14 lenders" },
  { label: "Top HYSA", value: "4.85%", delta: -0.05, caption: "Bask Bank · FDIC" },
  { label: "12-Month CD", value: "5.10%", delta: 0.0, caption: "LendingClub · $2.5K min" },
  { label: "Personal Loan · Excellent", value: "8.20%", delta: 0.0, caption: "SoFi · 3-7yr" },
];

const mortgageRates: RateRow[] = [
  { lender: "Marcus by Goldman Sachs", apr: 6.79, tag: "Lowest", detail: "30y · 5% down · 760+ FICO", href: "/mortgages/marcus", trend: "down" },
  { lender: "Better.com", apr: 6.85, detail: "30y · 3% down · no origination", href: "/mortgages/better", trend: "flat" },
  { lender: "Rocket Mortgage", apr: 6.89, detail: "30y · 5% down · jumbo eligible", href: "/mortgages/rocket", trend: "up" },
  { lender: "loanDepot", apr: 6.92, detail: "30y · 5% down · cash-out OK", href: "/mortgages/loandepot", trend: "up" },
  { lender: "Chase Home Lending", apr: 6.95, detail: "30y · 10% down · DreaMaker", href: "/mortgages/chase", trend: "flat" },
];

const hysaRates: RateRow[] = [
  { lender: "Bask Bank", apr: 4.85, tag: "Top", detail: "No min · No fees · FDIC", href: "/savings/bask" },
  { lender: "Bread Savings", apr: 4.75, detail: "$100 min · No fees", href: "/savings/bread" },
  { lender: "Marcus", apr: 4.50, detail: "No min · No fees", href: "/savings/marcus" },
  { lender: "Ally Bank", apr: 4.45, detail: "No min · No fees", href: "/savings/ally" },
  { lender: "SoFi", apr: 4.40, detail: "Direct deposit req", href: "/savings/sofi" },
];

const cardCategories: Array<{
  category: string;
  topPick: string;
  perk: string;
  href: string;
  accent: "lime" | "violet" | "coral" | "mint";
}> = [
  { category: "Cash Back", topPick: "Wells Fargo Active Cash", perk: "2% on everything", href: "/credit-cards/cash-back", accent: "lime" },
  { category: "Travel", topPick: "Chase Sapphire Preferred", perk: "60K bonus · 5x travel", href: "/credit-cards/travel", accent: "violet" },
  { category: "0% APR", topPick: "Wells Fargo Reflect", perk: "21mo 0% intro APR", href: "/credit-cards/zero-apr", accent: "mint" },
  { category: "Balance Transfer", topPick: "Citi Diamond Preferred", perk: "21mo BT · 0%", href: "/credit-cards/balance-transfer", accent: "coral" },
  { category: "No Annual Fee", topPick: "Citi Double Cash", perk: "2% · no fee", href: "/credit-cards/no-fee", accent: "lime" },
  { category: "Business", topPick: "Ink Business Preferred", perk: "100K bonus · 3x cats", href: "/credit-cards/business", accent: "violet" },
];

const calculators: Array<{ title: string; sub: string; href: string; icon: string }> = [
  { title: "Mortgage Payment", sub: "By rate, term, and down", href: "/calculators/mortgage-payment", icon: "🏠" },
  { title: "Refi Break-Even", sub: "When does refi pay back?", href: "/calculators/refinance-break-even", icon: "🔁" },
  { title: "Debt Avalanche", sub: "Card payoff visualizer", href: "/calculators/debt-payoff", icon: "💳" },
  { title: "CD Ladder", sub: "Build a 5-rung ladder", href: "/calculators/cd-ladder", icon: "🪜" },
  { title: "Savings Goal", sub: "Months to your target", href: "/calculators/savings-goal", icon: "🎯" },
  { title: "Compound Growth", sub: "Long-horizon visualizer", href: "/calculators/compound-interest", icon: "📈" },
  { title: "HELOC Payment", sub: "Draw + repay sim", href: "/calculators/heloc", icon: "🔓" },
  { title: "Net Worth", sub: "Track assets & liabs", href: "/calculators/net-worth", icon: "📊" },
];

function fmtPct(n: number) {
  return n.toFixed(2) + "%";
}
function deltaPill(d: number) {
  if (d === 0)
    return <span className="chip chip-mute tabular">unchanged</span>;
  if (d > 0)
    return (
      <span className="chip" style={{ background: "rgba(255, 86, 128, 0.12)", color: "#D9325E" }}>
        ↑ {Math.abs(d).toFixed(2)} pts
      </span>
    );
  return (
    <span className="chip" style={{ background: "rgba(45, 212, 164, 0.16)", color: "#0E7A5C" }}>
      ↓ {Math.abs(d).toFixed(2)} pts
    </span>
  );
}
function trendArrow(t?: "up" | "down" | "flat") {
  if (!t || t === "flat") return <span className="text-mute">—</span>;
  if (t === "up") return <span className="text-rose">↑</span>;
  return <span className="text-mint">↓</span>;
}

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-bg">
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />

        <div className="relative max-w-(--max-w-page) mx-auto px-6 pt-20 pb-16">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-7">
              <span className="chip chip-violet mb-6">
                <span className="pulse-dot" /> Updated 4 minutes ago
              </span>
              <h1 className="font-display font-extrabold text-[clamp(2.75rem,6.5vw,5.5rem)] leading-[1.02] tracking-[-0.03em] mb-6">
                Personal finance,<br />
                <span className="relative inline-block">
                  <span className="relative z-10">leveled up.</span>
                  <span
                    aria-hidden
                    className="absolute left-0 right-0 bottom-1 h-3 md:h-4 bg-lime z-0"
                  />
                </span>
              </h1>
              <p className="text-lg md:text-xl text-mute leading-relaxed max-w-xl mb-8">
                Live rates, sharp tools, plain-English guides. The whole money map in one place — built for the way you actually live.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/calculators" className="pill pill-ink">
                  Run the numbers
                  <span aria-hidden>→</span>
                </Link>
                <Link href="/savings" className="pill pill-ghost">
                  See today&rsquo;s rates
                </Link>
              </div>

              <div className="mt-10 flex items-center gap-6 text-sm text-mute">
                <div className="flex items-center gap-2">
                  <span className="font-mono tabular text-ink font-semibold">14</span> live sources
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-mono tabular text-ink font-semibold">8</span> calculators
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-mono tabular text-ink font-semibold">0</span> sponsored picks
                </div>
              </div>
            </div>

            {/* Featured rate card */}
            <div className="col-span-12 lg:col-span-5">
              <div className="card-flush p-7 relative overflow-hidden" style={{ boxShadow: "var(--shadow-pop)" }}>
                <div
                  aria-hidden
                  className="absolute -top-16 -right-16 w-48 h-48 rounded-full opacity-30"
                  style={{ background: "radial-gradient(circle, var(--color-lime) 0%, transparent 70%)" }}
                />
                <div className="relative">
                  <div className="flex items-center justify-between mb-3">
                    <span className="chip chip-ink">Mortgages</span>
                    <span className="text-xs font-mono text-mute">4m ago</span>
                  </div>
                  <div className="text-sm text-mute mb-1">Average 30-year fixed today</div>
                  <div className="font-display font-extrabold text-[5.5rem] leading-none tracking-tighter tabular text-ink">
                    6.85<span className="text-[2.5rem] align-top text-mute">%</span>
                  </div>
                  <div className="mt-4 flex items-center gap-3">
                    {deltaPill(0.02)}
                    <span className="text-sm text-mute">vs. yesterday</span>
                  </div>

                  <div className="mt-6 pt-5 border-t border-line">
                    <div className="text-xs font-mono uppercase tracking-wider text-mute mb-3">
                      Lowest among 14 lenders
                    </div>
                    <div className="space-y-2.5">
                      {mortgageRates.slice(0, 3).map((r) => (
                        <div key={r.lender} className="flex items-center justify-between text-sm">
                          <span className="font-medium">{r.lender}</span>
                          <span className="font-mono tabular font-semibold">{fmtPct(r.apr)}</span>
                        </div>
                      ))}
                    </div>
                    <Link
                      href="/mortgages"
                      className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold u-link"
                    >
                      See all mortgage rates
                      <span aria-hidden>→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARKETS STRIP */}
      <section className="border-y border-line bg-bg-soft/60">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-display font-bold text-2xl tracking-tight">Today at a glance</h2>
            <Link href="/markets" className="text-sm text-mute hover:text-ink u-link">
              All markets →
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {featuredMarkets.map((m) => (
              <div key={m.label} className="card p-5">
                <div className="text-xs text-mute mb-2">{m.label}</div>
                <div className="font-display font-extrabold text-3xl md:text-4xl tabular tracking-tight mb-2">
                  {m.value}
                </div>
                <div className="flex items-center justify-between gap-2">
                  {deltaPill(m.delta)}
                </div>
                <div className="text-xs text-mute mt-3">{m.caption}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THREE COLUMN SECTION HUBS */}
      <section className="max-w-(--max-w-page) mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <span className="chip chip-mute mb-4">The basics</span>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight max-w-2xl mx-auto leading-[1.05]">
            Money is a stack of decisions.<br />We&rsquo;ve made each one easier.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <HubCard
            tone="lime"
            label="Borrow"
            title="Mortgages, HELOCs, personal & auto loans."
            kpi="6.85%"
            kpiCaption="30Y fixed avg"
            href="/mortgages"
          />
          <HubCard
            tone="violet"
            label="Save"
            title="HYSA, CDs, money market, checking."
            kpi="4.85%"
            kpiCaption="Top HYSA APY"
            href="/savings"
          />
          <HubCard
            tone="ink"
            label="Spend"
            title="Cards built for cash back, travel, and 0% APR."
            kpi="60K"
            kpiCaption="Top travel bonus"
            href="/credit-cards"
          />
        </div>
      </section>

      {/* MORTGAGES TABLE */}
      <RatesPanel
        eyebrow="Mortgages · Live"
        title="Lowest 30-year fixed rates this morning"
        subtitle="Pulled directly from each lender. No partner placements."
        rates={mortgageRates}
        seeAll={{ label: "All 50 mortgage lenders", href: "/mortgages" }}
      />

      {/* SAVINGS TABLE */}
      <RatesPanel
        eyebrow="Savings · Live"
        title="Highest-yielding savings accounts"
        subtitle="FDIC-insured, no fees, no nonsense."
        rates={hysaRates}
        seeAll={{ label: "All HYSA + CDs", href: "/savings" }}
      />

      {/* CARDS GRID */}
      <section className="max-w-(--max-w-page) mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 gap-4">
          <div>
            <span className="chip chip-mute mb-4">Credit cards</span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight max-w-xl leading-tight">
              One card per category. The trade-off baked in.
            </h2>
          </div>
          <Link href="/credit-cards" className="text-sm font-semibold u-link self-start md:self-auto">
            Browse all categories →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {cardCategories.map((c) => (
            <Link key={c.category} href={c.href} className="card p-6 block group">
              <div className="flex items-center justify-between mb-5">
                <span className={`chip chip-${c.accent === "violet" ? "violet" : "lime"}`}>
                  {c.category}
                </span>
                <span className="text-mute text-lg group-hover:text-ink group-hover:translate-x-1 transition-all">→</span>
              </div>
              <div className="font-display font-bold text-xl tracking-tight mb-1.5 leading-snug">
                {c.topPick}
              </div>
              <div className="text-mute text-sm">{c.perk}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* CALCULATORS */}
      <section className="bg-ink text-bg">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-20">
          <div className="grid grid-cols-12 gap-8 mb-12">
            <div className="col-span-12 lg:col-span-6">
              <span className="chip chip-lime mb-4">Tools</span>
              <h2 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight leading-[1.05]">
                Calculators that show their work.
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-6 flex items-end">
              <p className="text-mute text-lg leading-relaxed">
                Every formula visible. Every assumption editable. No popups, no email walls. Built for back-of-the-envelope first, deep-dive second.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {calculators.map((c) => (
              <Link
                key={c.title}
                href={c.href}
                className="block bg-ink-soft border border-white/10 hover:border-lime hover:bg-white/5 transition-colors duration-200 rounded-2xl p-5"
              >
                <div className="text-2xl mb-3">{c.icon}</div>
                <div className="font-display font-bold text-base mb-1 leading-snug">
                  {c.title}
                </div>
                <div className="text-sm text-white/55">{c.sub}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="bg-lime border-y border-ink">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-14 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight max-w-2xl leading-tight">
            One newsletter. Real rate moves. Once a week, never sponsored.
          </h2>
          <form className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
            <input
              type="email"
              placeholder="you@email.com"
              className="bg-bg border border-ink/30 rounded-full px-5 h-12 text-base focus:outline-none focus:border-ink min-w-0 sm:w-72"
            />
            <button type="button" className="pill pill-ink h-12 justify-center">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-ink text-bg/70">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-5 gap-10">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-xl bg-lime text-ink font-mono font-bold text-sm tracking-tighter">
                Fx
              </span>
              <span className="font-display font-bold text-xl text-bg tracking-tight">Fintiex</span>
            </div>
            <p className="text-sm leading-relaxed max-w-sm">
              Live rates, sharp tools, plain-English guides. The whole money map in one place. Sources cited, timestamps visible, no paid placements.
            </p>
          </div>
          <FooterCol
            title="Borrow"
            links={[
              { label: "Mortgages", href: "/mortgages" },
              { label: "Refinance", href: "/mortgages/refinance" },
              { label: "HELOC", href: "/mortgages/heloc" },
              { label: "Personal loans", href: "/loans/personal" },
              { label: "Auto loans", href: "/loans/auto" },
            ]}
          />
          <FooterCol
            title="Save"
            links={[
              { label: "HYSA", href: "/savings/hysa" },
              { label: "CDs", href: "/savings/cds" },
              { label: "Money market", href: "/savings/money-market" },
              { label: "Checking", href: "/banking/checking" },
            ]}
          />
          <FooterCol
            title="More"
            links={[
              { label: "Credit cards", href: "/credit-cards" },
              { label: "Calculators", href: "/calculators" },
              { label: "Guides", href: "/learn" },
              { label: "About", href: "/about" },
            ]}
          />
        </div>
        <div className="border-t border-white/10">
          <div className="max-w-(--max-w-page) mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-2 text-xs">
            <div>© {new Date().getFullYear()} Fintiex · All rights reserved</div>
            <div className="flex gap-5">
              <Link href="/about" className="hover:text-bg">Editorial standards</Link>
              <Link href="/privacy" className="hover:text-bg">Privacy</Link>
              <Link href="/terms" className="hover:text-bg">Terms</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

function HubCard({
  tone,
  label,
  title,
  kpi,
  kpiCaption,
  href,
}: {
  tone: "lime" | "violet" | "ink";
  label: string;
  title: string;
  kpi: string;
  kpiCaption: string;
  href: string;
}) {
  const styles =
    tone === "lime"
      ? { bg: "bg-lime", text: "text-ink", chipCls: "chip chip-ink" }
      : tone === "violet"
      ? { bg: "bg-[#6E5CFF]", text: "text-bg", chipCls: "chip chip-ink" }
      : { bg: "bg-ink", text: "text-bg", chipCls: "chip chip-lime" };

  return (
    <Link
      href={href}
      className={`block ${styles.bg} ${styles.text} rounded-3xl p-7 hover:-translate-y-1 transition-transform duration-200`}
    >
      <span className={styles.chipCls}>{label}</span>
      <div className="font-display font-extrabold text-2xl md:text-[1.75rem] tracking-tight mt-5 leading-snug">
        {title}
      </div>
      <div className="mt-10 pt-5 border-t border-current/15 flex items-end justify-between">
        <div>
          <div className="font-display font-extrabold text-4xl md:text-5xl tabular tracking-tighter leading-none">
            {kpi}
          </div>
          <div className="text-xs opacity-70 mt-2 uppercase tracking-wider font-mono">
            {kpiCaption}
          </div>
        </div>
        <span className="text-2xl">→</span>
      </div>
    </Link>
  );
}

function RatesPanel({
  eyebrow,
  title,
  subtitle,
  rates,
  seeAll,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  rates: RateRow[];
  seeAll: { label: string; href: string };
}) {
  return (
    <section className="max-w-(--max-w-page) mx-auto px-6 py-20">
      <div className="grid grid-cols-12 gap-8 mb-8">
        <div className="col-span-12 md:col-span-7">
          <span className="chip chip-mute mb-4">
            <span className="pulse-dot" /> {eyebrow}
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-tight">
            {title}
          </h2>
        </div>
        <div className="col-span-12 md:col-span-5 flex md:items-end md:justify-end">
          <p className="text-mute leading-relaxed md:text-right md:max-w-sm">{subtitle}</p>
        </div>
      </div>

      <div className="card-flush overflow-hidden">
        <div className="grid grid-cols-12 px-6 py-3 text-xs font-mono uppercase tracking-wider text-mute border-b border-line bg-bg-soft/50">
          <div className="col-span-6 md:col-span-5">Lender</div>
          <div className="hidden md:block md:col-span-4">Detail</div>
          <div className="col-span-3 md:col-span-2 text-right">APR</div>
          <div className="col-span-3 md:col-span-1 text-right">Trend</div>
          <div className="hidden md:block md:col-span-0"></div>
        </div>
        {rates.map((r, i) => (
          <Link
            key={r.lender}
            href={r.href}
            className={`grid grid-cols-12 px-6 py-4 items-center hover:bg-bg-soft/70 transition-colors ${
              i === rates.length - 1 ? "" : "border-b border-line-soft"
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
            <div className="col-span-3 md:col-span-1 text-right text-lg">{trendArrow(r.trend)}</div>
          </Link>
        ))}
      </div>

      <div className="mt-6 flex justify-center">
        <Link href={seeAll.href} className="pill pill-ghost">
          {seeAll.label}
          <span aria-hidden>→</span>
        </Link>
      </div>
    </section>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: Array<{ label: string; href: string }>;
}) {
  return (
    <div>
      <div className="font-mono uppercase tracking-wider text-xs text-bg/50 mb-4">{title}</div>
      <ul className="space-y-2.5 text-sm">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="hover:text-bg transition-colors">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
