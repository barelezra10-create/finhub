import Link from "next/link";

type Direction = "up" | "down" | "flat";

interface RateRow {
  lender: string;
  apr: number;
  detail: string;
  cta: string;
}

interface MarketRow {
  label: string;
  value: string;
  delta: number;
}

const mortgageRates: RateRow[] = [
  { lender: "Marcus by Goldman Sachs", apr: 6.79, detail: "30y · 5% down · 760+ FICO", cta: "/mortgages/marcus" },
  { lender: "Better.com", apr: 6.85, detail: "30y · 3% down · no origination", cta: "/mortgages/better" },
  { lender: "Rocket Mortgage", apr: 6.89, detail: "30y · 5% down · jumbo eligible", cta: "/mortgages/rocket" },
  { lender: "loanDepot", apr: 6.92, detail: "30y · 5% down · cash-out OK", cta: "/mortgages/loandepot" },
  { lender: "Chase Home Lending", apr: 6.95, detail: "30y · 10% down · DreaMaker", cta: "/mortgages/chase" },
  { lender: "PNC Bank", apr: 6.99, detail: "30y · 3% down · LMI program", cta: "/mortgages/pnc" },
];

const hysaRates: RateRow[] = [
  { lender: "Bask Bank", apr: 4.85, detail: "No min · No fees · FDIC", cta: "/savings/bask" },
  { lender: "Bread Savings", apr: 4.75, detail: "$100 min · No fees · FDIC", cta: "/savings/bread" },
  { lender: "Marcus", apr: 4.50, detail: "No min · No fees · FDIC", cta: "/savings/marcus" },
  { lender: "Ally Bank", apr: 4.45, detail: "No min · No fees · FDIC", cta: "/savings/ally" },
  { lender: "SoFi Checking & Savings", apr: 4.40, detail: "Direct deposit req · FDIC", cta: "/savings/sofi" },
  { lender: "Discover Online Savings", apr: 4.30, detail: "No min · No fees · FDIC", cta: "/savings/discover" },
];

const cdRates: RateRow[] = [
  { lender: "LendingClub · 12mo", apr: 5.10, detail: "$2,500 min · No-penalty", cta: "/savings/cds/lendingclub-12m" },
  { lender: "Bread · 12mo", apr: 5.05, detail: "$1,500 min", cta: "/savings/cds/bread-12m" },
  { lender: "Marcus · 12mo", apr: 4.95, detail: "$500 min", cta: "/savings/cds/marcus-12m" },
  { lender: "Ally · 24mo", apr: 4.85, detail: "No min · 60d penalty", cta: "/savings/cds/ally-24m" },
  { lender: "Synchrony · 36mo", apr: 4.55, detail: "No min · 180d penalty", cta: "/savings/cds/synchrony-36m" },
  { lender: "CIT · 60mo", apr: 4.40, detail: "$1,000 min", cta: "/savings/cds/cit-60m" },
];

const cardCategories: Array<{ category: string; topPick: string; perk: string; href: string }> = [
  { category: "Cash Back", topPick: "Wells Fargo Active Cash", perk: "2% on everything", href: "/credit-cards/cash-back" },
  { category: "Travel", topPick: "Chase Sapphire Preferred", perk: "60K bonus · 5x travel", href: "/credit-cards/travel" },
  { category: "0% APR", topPick: "Wells Fargo Reflect", perk: "21mo 0% intro APR", href: "/credit-cards/zero-apr" },
  { category: "Balance Transfer", topPick: "Citi Diamond Preferred", perk: "21mo BT · 0%", href: "/credit-cards/balance-transfer" },
  { category: "No Annual Fee", topPick: "Citi Double Cash", perk: "2% · no fee", href: "/credit-cards/no-fee" },
  { category: "Business", topPick: "Ink Business Preferred", perk: "100K bonus · 3x cats", href: "/credit-cards/business" },
];

const markets: MarketRow[] = [
  { label: "30Y Fixed", value: "6.85%", delta: 0.02 },
  { label: "15Y Fixed", value: "6.12%", delta: -0.01 },
  { label: "Refi 30Y", value: "6.78%", delta: 0.01 },
  { label: "HELOC", value: "9.20%", delta: 0.0 },
  { label: "Jumbo 30Y", value: "7.05%", delta: 0.03 },
  { label: "HYSA · top", value: "4.85%", delta: -0.05 },
  { label: "12mo CD", value: "5.10%", delta: 0.0 },
  { label: "24mo CD", value: "4.85%", delta: -0.02 },
  { label: "5yr CD", value: "4.40%", delta: 0.01 },
  { label: "Money Market", value: "4.65%", delta: 0.0 },
  { label: "Auto · 60mo new", value: "7.10%", delta: -0.02 },
  { label: "Personal · exc.", value: "8.20%", delta: 0.0 },
];

const calculators: Array<{ title: string; sub: string; href: string }> = [
  { title: "Mortgage Payment", sub: "Payment by rate, term, and down", href: "/calculators/mortgage-payment" },
  { title: "Refinance Break-Even", sub: "When does the refi pay back?", href: "/calculators/refinance-break-even" },
  { title: "HELOC Payment", sub: "Draw + repay simulator", href: "/calculators/heloc" },
  { title: "Debt Avalanche", sub: "Card payoff visualizer", href: "/calculators/debt-payoff" },
  { title: "CD Ladder", sub: "Build a 5-rung ladder", href: "/calculators/cd-ladder" },
  { title: "HYSA Goal", sub: "Months to a savings target", href: "/calculators/savings-goal" },
  { title: "Compound Growth", sub: "Long-horizon visualizer", href: "/calculators/compound-interest" },
  { title: "Net Worth", sub: "Track assets & liabilities", href: "/calculators/net-worth" },
];

function fmtPct(n: number) {
  return n.toFixed(2) + "%";
}
function direction(delta: number): Direction {
  if (delta > 0) return "up";
  if (delta < 0) return "down";
  return "flat";
}
function deltaSpan(delta: number) {
  const dir = direction(delta);
  if (dir === "flat") return <span className="text-ink-muted tabular">—</span>;
  const arrow = dir === "up" ? "▲" : "▼";
  const cls = dir === "up" ? "text-oxblood" : "text-forest";
  return (
    <span className={`tabular ${cls}`}>
      {arrow} {Math.abs(delta).toFixed(2)}
    </span>
  );
}

export default function Home() {
  return (
    <>
      {/* ABOVE-THE-FOLD: lead story + market snapshot */}
      <section className="border-b border-rule bg-paper">
        <div className="max-w-(--max-w-broadsheet) mx-auto px-6 py-10 grid grid-cols-12 gap-8">
          {/* Lead column */}
          <article className="col-span-12 lg:col-span-8 lg:border-r lg:border-rule lg:pr-8">
            <div className="text-[11px] font-mono uppercase tracking-[0.22em] text-oxblood mb-3">
              Lead · Mortgages
            </div>
            <h2 className="font-display font-bold text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.05] tracking-tight mb-5">
              Thirty-year fixed nudges higher as Treasuries reset.
            </h2>
            <div className="text-[12px] font-mono uppercase tracking-[0.16em] text-ink-muted mb-6 flex items-center gap-3">
              <span>By the Fintiex Rate Desk</span>
              <span className="opacity-40">·</span>
              <span>Updated 4 min ago</span>
              <span className="opacity-40">·</span>
              <span>14 sources</span>
            </div>

            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-12 sm:col-span-5">
                <div className="border-y-2 border-rule py-4">
                  <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-ink-muted mb-2">
                    30-Year Fixed
                  </div>
                  <div className="font-display font-black text-[5.5rem] leading-none tracking-tighter tabular">
                    6.85<span className="text-[3rem] align-top">%</span>
                  </div>
                  <div className="mt-3 flex items-baseline justify-between text-[12px] font-mono">
                    <span className="text-oxblood font-semibold">▲ 0.02 vs Wed</span>
                    <span className="text-ink-muted">avg of 14 lenders</span>
                  </div>
                </div>
                <div className="mt-4 text-[11px] font-mono uppercase tracking-[0.16em] text-ink-muted">
                  Sources: Marcus (4m), Better (3m), Rocket (6m), Chase (9m), and 10 more
                </div>
              </div>

              <div className="col-span-12 sm:col-span-7 dropcap font-body text-[1.0625rem] leading-[1.6] text-ink">
                Mortgage rates ticked higher this morning after the 10-year Treasury yield climbed three basis points overnight on stronger-than-expected jobs data. The benchmark thirty-year fixed average among the fourteen national lenders we track now sits at 6.85 percent, up two basis points from Wednesday and the highest weekly close since early March. Refinance demand remains anemic; the MBA index fell again last week, and our own form-fill data shows a 9 percent week-over-week decline in refi inquiries on rates above 6.5 percent. We continue to recommend rate-locking on conforming purchase loans and watching ten-year Treasury action as the lead indicator for the back half of the week.
              </div>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4 text-[11px] font-mono uppercase tracking-[0.18em] text-ink-muted">
              <Link href="/mortgages/by-state" className="rule-top pt-3 hover:text-oxblood">
                <div className="text-ink font-semibold">Mortgage rates by state →</div>
                <div className="mt-1 normal-case tracking-normal font-body">All 50 states · 200+ pages</div>
              </Link>
              <Link href="/mortgages/refinance" className="rule-top pt-3 hover:text-oxblood">
                <div className="text-ink font-semibold">Should you refinance? →</div>
                <div className="mt-1 normal-case tracking-normal font-body">Break-even calculator inside</div>
              </Link>
              <Link href="/mortgages/heloc" className="rule-top pt-3 hover:text-oxblood">
                <div className="text-ink font-semibold">HELOC vs. cash-out →</div>
                <div className="mt-1 normal-case tracking-normal font-body">Side-by-side comparison</div>
              </Link>
            </div>
          </article>

          {/* Markets sidebar */}
          <aside className="col-span-12 lg:col-span-4">
            <div className="text-[11px] font-mono uppercase tracking-[0.22em] text-oxblood mb-3">
              Today&rsquo;s Markets
            </div>
            <h3 className="font-display font-bold text-2xl leading-tight mb-5">
              All rates, all verticals.
            </h3>
            <table className="w-full border-collapse">
              <tbody>
                {markets.map((m, i) => (
                  <tr
                    key={m.label}
                    className={i === markets.length - 1 ? "" : "border-b border-rule-soft"}
                  >
                    <td className="py-2 pr-2 font-body text-[14px] text-ink">{m.label}</td>
                    <td className="py-2 pr-2 text-right font-mono font-semibold tabular text-[14px] text-ink">
                      {m.value}
                    </td>
                    <td className="py-2 text-right text-[12px]">{deltaSpan(m.delta)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="mt-4 text-[10px] font-mono uppercase tracking-[0.18em] text-ink-muted">
              Snapshot · {new Date().toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", timeZoneName: "short" })}
            </div>
          </aside>
        </div>
      </section>

      {/* MORTGAGES SECTION */}
      <RateSection
        eyebrow="Mortgages"
        kicker="The lowest 30-year fixed rates we tracked this morning"
        rates={mortgageRates}
        valueLabel="APR"
        seeAllHref="/mortgages"
        seeAllLabel="See all 50 lenders →"
      />

      {/* SAVINGS SECTION (HYSA + CD side by side) */}
      <section className="border-b border-rule">
        <div className="max-w-(--max-w-broadsheet) mx-auto px-6 py-10">
          <div className="text-[11px] font-mono uppercase tracking-[0.22em] text-oxblood mb-2">
            Savings
          </div>
          <h2 className="font-display font-bold text-3xl md:text-4xl leading-tight mb-6 max-w-3xl">
            Where to park cash this week, and why.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <RateBlock
              title="High-Yield Savings"
              note="No-fee, FDIC-insured · ranked by APY"
              rates={hysaRates}
            />
            <RateBlock
              title="Best CDs"
              note="By term · ranked by APY"
              rates={cdRates}
            />
          </div>
        </div>
      </section>

      {/* CARDS GRID */}
      <section className="border-b border-rule bg-paper-deep/40">
        <div className="max-w-(--max-w-broadsheet) mx-auto px-6 py-10">
          <div className="text-[11px] font-mono uppercase tracking-[0.22em] text-oxblood mb-2">
            Credit Cards
          </div>
          <h2 className="font-display font-bold text-3xl md:text-4xl leading-tight mb-8 max-w-3xl">
            One card per category. Our editor&rsquo;s pick, with the trade-off baked in.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
            {cardCategories.map((c) => (
              <Link
                key={c.category}
                href={c.href}
                className="block border-t border-rule pt-4 hover:bg-paper-deep transition-colors duration-150"
              >
                <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-ink-muted mb-1">
                  {c.category}
                </div>
                <div className="font-display font-bold text-xl leading-snug text-ink mb-1">
                  {c.topPick}
                </div>
                <div className="font-body text-sm text-ink-muted">{c.perk}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PULL QUOTE */}
      <section className="border-b border-rule">
        <div className="max-w-3xl mx-auto px-6 py-14">
          <div className="pullquote text-center">
            &ldquo;Every rate timestamped, every source cited, every calculator first-principles. Bankrate from a different decade.&rdquo;
          </div>
          <div className="mt-3 text-center text-[11px] font-mono uppercase tracking-[0.22em] text-ink-muted">
            — The Fintiex Editorial Standard
          </div>
        </div>
      </section>

      {/* CALCULATORS */}
      <section className="border-b border-rule">
        <div className="max-w-(--max-w-broadsheet) mx-auto px-6 py-10">
          <div className="text-[11px] font-mono uppercase tracking-[0.22em] text-oxblood mb-2">
            The Tools
          </div>
          <h2 className="font-display font-bold text-3xl md:text-4xl leading-tight mb-8 max-w-3xl">
            Calculators built first-principles. No black boxes.
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-4">
            {calculators.map((c, i) => (
              <Link
                key={c.title}
                href={c.href}
                className="block border-t border-rule pt-3 hover:text-oxblood transition-colors duration-150"
              >
                <div className="text-[10px] font-mono tabular text-ink-muted mb-1">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="font-display font-bold text-lg leading-tight text-ink">
                  {c.title}
                </div>
                <div className="font-body text-[13px] text-ink-muted mt-1">{c.sub}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-navy-deep text-paper">
        <div className="max-w-(--max-w-broadsheet) mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2">
            <div className="font-display font-black text-4xl tracking-tight">Fintiex</div>
            <div className="mt-2 text-[11px] font-mono uppercase tracking-[0.22em] opacity-60">
              America&rsquo;s Rate Authority
            </div>
            <p className="mt-4 font-body text-[14px] leading-relaxed opacity-80 max-w-sm">
              Rates updated continuously from primary lender sources. Every figure on this page is timestamped and traceable. Not a paid placement in sight.
            </p>
          </div>
          <FooterCol
            title="Mortgages"
            links={[
              { label: "30-year fixed", href: "/mortgages/30y-fixed" },
              { label: "15-year fixed", href: "/mortgages/15y-fixed" },
              { label: "Refinance", href: "/mortgages/refinance" },
              { label: "HELOC", href: "/mortgages/heloc" },
              { label: "Jumbo", href: "/mortgages/jumbo" },
            ]}
          />
          <FooterCol
            title="Savings"
            links={[
              { label: "Best HYSA", href: "/savings/hysa" },
              { label: "Best CDs", href: "/savings/cds" },
              { label: "Money market", href: "/savings/money-market" },
              { label: "Checking", href: "/banking/checking" },
            ]}
          />
          <FooterCol
            title="More"
            links={[
              { label: "Credit cards", href: "/credit-cards" },
              { label: "Personal loans", href: "/loans/personal" },
              { label: "Auto loans", href: "/loans/auto" },
              { label: "Brokers", href: "/investing/brokers" },
              { label: "Calculators", href: "/calculators" },
            ]}
          />
        </div>
        <div className="border-t border-paper/15">
          <div className="max-w-(--max-w-broadsheet) mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-2 text-[11px] font-mono uppercase tracking-[0.18em] opacity-60">
            <div>© {new Date().getFullYear()} Fintiex · All rights reserved</div>
            <div>Editorial standards · Privacy · Terms</div>
          </div>
        </div>
      </footer>
    </>
  );
}

function RateSection({
  eyebrow,
  kicker,
  rates,
  valueLabel,
  seeAllHref,
  seeAllLabel,
}: {
  eyebrow: string;
  kicker: string;
  rates: RateRow[];
  valueLabel: string;
  seeAllHref: string;
  seeAllLabel: string;
}) {
  return (
    <section className="border-b border-rule">
      <div className="max-w-(--max-w-broadsheet) mx-auto px-6 py-10">
        <div className="text-[11px] font-mono uppercase tracking-[0.22em] text-oxblood mb-2">
          {eyebrow}
        </div>
        <h2 className="font-display font-bold text-3xl md:text-4xl leading-tight mb-6 max-w-3xl">
          {kicker}
        </h2>
        <table className="broadsheet-table">
          <thead>
            <tr>
              <th className="w-[50%]">Lender</th>
              <th className="w-[15%] text-right">{valueLabel}</th>
              <th className="hidden md:table-cell w-[25%]">Detail</th>
              <th className="w-[10%] text-right"></th>
            </tr>
          </thead>
          <tbody>
            {rates.map((r) => (
              <tr key={r.lender}>
                <td>
                  <div className="font-display font-semibold text-base text-ink">{r.lender}</div>
                  <div className="md:hidden text-sm text-ink-muted">{r.detail}</div>
                </td>
                <td className="text-right font-mono font-semibold tabular text-ink text-base">
                  {fmtPct(r.apr)}
                </td>
                <td className="hidden md:table-cell text-ink-muted text-sm">{r.detail}</td>
                <td className="text-right">
                  <Link
                    href={r.cta}
                    className="font-mono uppercase tracking-[0.16em] text-[11px] text-oxblood hover:text-ink"
                  >
                    View →
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-5">
          <Link
            href={seeAllHref}
            className="inline-block font-mono uppercase tracking-[0.18em] text-[12px] text-ink hover:text-oxblood border-b border-rule pb-1"
          >
            {seeAllLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}

function RateBlock({ title, note, rates }: { title: string; note: string; rates: RateRow[] }) {
  return (
    <div>
      <div className="rule-top pt-4 mb-4">
        <h3 className="font-display font-bold text-2xl leading-tight">{title}</h3>
        <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted mt-1">
          {note}
        </div>
      </div>
      <table className="broadsheet-table">
        <tbody>
          {rates.map((r) => (
            <tr key={r.lender}>
              <td>
                <Link href={r.cta} className="font-display font-semibold text-ink hover:text-oxblood">
                  {r.lender}
                </Link>
                <div className="text-ink-muted text-[13px]">{r.detail}</div>
              </td>
              <td className="text-right font-mono font-semibold tabular text-ink whitespace-nowrap">
                {fmtPct(r.apr)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
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
      <div className="font-mono text-[11px] uppercase tracking-[0.22em] opacity-60 mb-3">
        {title}
      </div>
      <ul className="space-y-2 font-body text-[14px]">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="hover:text-ochre transition-colors duration-150">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
