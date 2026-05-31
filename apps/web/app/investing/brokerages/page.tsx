import Link from "next/link";
import type { Metadata } from "next";
import { FAQPageSchema, BreadcrumbListSchema, type FAQItem } from "@/components/schemas";
import { loadBrokerages, formatAccountType, formatAssetClass } from "@/lib/investing";

export const metadata: Metadata = {
  title: "Best Online Brokerages 2026: Top 7 Compared | Fintiex",
  description:
    "Compare commissions, account minimums, mobile apps, and asset coverage for the top 7 US online brokers. Fidelity, Schwab, Vanguard, Robinhood, and more.",
  alternates: { canonical: "/investing/brokerages" },
};

const faqItems: FAQItem[] = [
  {
    question: "Which is the best online broker overall?",
    answer:
      "For most US investors, Fidelity is the best all-around choice. It pairs zero-commission trades with the strongest research, top-rated mobile and desktop apps, zero-fee index funds (FZROX, FZILX), and full retirement account support. Schwab is a close second, especially if you value branch access. Vanguard wins on pure cost for buy-and-hold index investors.",
  },
  {
    question: "Are commission-free brokers really free?",
    answer:
      "Stock and ETF trades are genuinely $0 at every broker on this list. Brokers earn revenue from payment for order flow, margin interest, securities lending, and the spread on idle cash balances. Options usually cost $0.65 per contract (Robinhood and Webull are exceptions at $0). Mutual funds and bonds may carry transaction fees.",
  },
  {
    question: "What is SIPC insurance and is it the same as FDIC?",
    answer:
      "SIPC (Securities Investor Protection Corporation) insures securities and cash up to $500,000 per account if a broker fails (including up to $250,000 in cash). It is not the same as FDIC, which insures bank deposits. SIPC does not protect against losses from market declines. Many brokers carry additional private excess insurance for amounts well above the SIPC limits.",
  },
  {
    question: "Do I need an IRA or a taxable account?",
    answer:
      "If retirement is the goal, an IRA (Traditional or Roth) is more tax-efficient. The 2026 contribution limit is $7,000, or $8,000 if you are 50 or older. For shorter-term goals or amounts above the IRA limit, use a taxable brokerage account. Most investors hold both.",
  },
  {
    question: "Can I move my account from one broker to another?",
    answer:
      "Yes. The ACATS (Automated Customer Account Transfer Service) system moves stocks, ETFs, and mutual funds in kind, usually within 5 to 7 business days. You do not have to sell anything, which means no capital gains event. Most brokers will reimburse transfer fees (typically $75) to win your business.",
  },
  {
    question: "Why does Vanguard have a higher options commission?",
    answer:
      "Vanguard charges $1.00 per options contract because its business is built around buy-and-hold index investing, not active trading. The pricing is intentional: it signals that Vanguard is not the right venue for options strategies. If you trade options regularly, consider Robinhood (free), Webull (free), or Fidelity (at $0.65).",
  },
];

function fmtMoney(n: number): string {
  if (n === 0) return "$0";
  return "$" + n.toLocaleString();
}

function fmtOpt(n: number): string {
  if (n === 0) return "$0";
  return "$" + n.toFixed(2);
}

export default function Page() {
  const brokers = loadBrokerages().sort((a, b) => b.rating - a.rating);

  return (
    <>
      <FAQPageSchema items={faqItems} />
      <BreadcrumbListSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Investing", href: "/investing" },
          { name: "Brokerages", href: "/investing/brokerages" },
        ]}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-bg">
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
        <div className="relative max-w-(--max-w-page) mx-auto px-6 pt-20 pb-16">
          <span className="chip chip-lime mb-6">
            <span className="pulse-dot" /> Brokerage comparison 2026
          </span>
          <h1 className="font-display font-extrabold text-[clamp(2.5rem,6vw,5rem)] leading-[1.02] tracking-[-0.03em] mb-6 max-w-3xl">
            The top 7 online brokers, side by side.
          </h1>
          <p className="text-lg md:text-xl text-mute leading-relaxed max-w-2xl mb-8">
            We tested every major US brokerage on commissions, account minimums, app quality, asset coverage, and research depth. Here is the honest grid, with reviews on each.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="#table" className="pill pill-ink">
              See the table
              <span aria-hidden>{"→"}</span>
            </Link>
            <Link href="#how-we-ranked" className="pill pill-ghost">
              How we ranked
            </Link>
          </div>
        </div>
      </section>

      {/* TABLE */}
      <section id="table" className="max-w-(--max-w-page) mx-auto px-6 py-20">
        <div className="grid grid-cols-12 gap-8 mb-8">
          <div className="col-span-12 md:col-span-7">
            <span className="chip chip-mute mb-4">
              <span className="pulse-dot" /> Live grid
            </span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-tight">
              Brokerage comparison table
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5 flex md:items-end md:justify-end">
            <p className="text-mute leading-relaxed md:text-right md:max-w-sm">
              Ranked by overall Fintiex score. Click any row to read the full review.
            </p>
          </div>
        </div>

        <div className="card-flush overflow-hidden">
          <div className="grid grid-cols-12 px-6 py-3 text-xs font-mono uppercase tracking-wider text-mute border-b border-line bg-bg-soft/50">
            <div className="col-span-12 md:col-span-4">Broker</div>
            <div className="hidden md:block md:col-span-2 text-right">Stocks</div>
            <div className="hidden md:block md:col-span-2 text-right">Options</div>
            <div className="hidden md:block md:col-span-2 text-right">Min</div>
            <div className="hidden md:block md:col-span-2 text-right">App</div>
          </div>
          {brokers.map((b, i) => (
            <Link
              key={b.slug}
              href={`/investing/brokerages/${b.slug}`}
              className={`grid grid-cols-12 px-6 py-4 items-center hover:bg-bg-soft/70 transition-colors ${
                i === brokers.length - 1 ? "" : "border-b border-line-soft"
              }`}
            >
              <div className="col-span-12 md:col-span-4">
                <div className="flex items-center gap-2 flex-wrap">
                  <div className="font-display font-semibold text-base">{b.broker}</div>
                  <span className="chip chip-mute">{b.rating.toFixed(1)}</span>
                </div>
                <div className="text-xs text-mute mt-1">{b.best_for}</div>
                <div className="md:hidden mt-2 flex gap-4 text-xs font-mono tabular text-mute">
                  <span>Stocks {fmtMoney(b.commission_stocks)}</span>
                  <span>Opt {fmtOpt(b.commission_options_per_contract)}</span>
                  <span>App {b.mobile_app_rating.toFixed(1)}</span>
                </div>
              </div>
              <div className="hidden md:block md:col-span-2 text-right font-mono tabular text-sm">
                {fmtMoney(b.commission_stocks)}
              </div>
              <div className="hidden md:block md:col-span-2 text-right font-mono tabular text-sm">
                {fmtOpt(b.commission_options_per_contract)}
              </div>
              <div className="hidden md:block md:col-span-2 text-right font-mono tabular text-sm">
                {fmtMoney(b.account_minimum)}
              </div>
              <div className="hidden md:block md:col-span-2 text-right font-mono tabular text-sm">
                {b.mobile_app_rating.toFixed(1)} / 5
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* HOW WE RANKED */}
      <section id="how-we-ranked" className="bg-bg-soft/60 border-y border-line">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-20">
          <div className="grid grid-cols-12 gap-10">
            <div className="col-span-12 lg:col-span-4">
              <span className="chip chip-mute mb-4">Methodology</span>
              <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-tight mb-6">
                How we ranked the brokers.
              </h2>
              <p className="text-mute leading-relaxed">
                Five factors, weighted. No broker paid for placement. No affiliate priority.
              </p>
            </div>
            <div className="col-span-12 lg:col-span-8 space-y-8 text-base leading-relaxed">
              <div>
                <h3 className="font-display font-bold text-xl mb-2 tracking-tight">Cost (30%)</h3>
                <p className="text-mute">
                  Stock and ETF commissions, options per-contract fees, mutual fund transaction fees, account minimums, and inactivity fees. Brokers that publish clean schedules with zero hidden gotchas score highest.
                </p>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl mb-2 tracking-tight">Account types (20%)</h3>
                <p className="text-mute">
                  Coverage of taxable, Traditional IRA, Roth IRA, 401(k) rollover, joint, custodial (UGMA/UTMA), and trust accounts. Full-service brokers (Fidelity, Schwab, Vanguard) cover everything. App-first brokers often drop joint and custodial accounts.
                </p>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl mb-2 tracking-tight">Asset coverage (20%)</h3>
                <p className="text-mute">
                  Range of investable assets: stocks, ETFs, options, mutual funds, bonds, futures, forex, and crypto. Interactive Brokers leads on breadth (33 countries, 8 asset classes). Robinhood is narrower but uniquely combines stocks and crypto in one account.
                </p>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl mb-2 tracking-tight">App and platform (15%)</h3>
                <p className="text-mute">
                  Mobile app App Store rating, desktop platform power, charting depth, paper trading, and customer service responsiveness. Fidelity tops the chart at 4.8 mobile rating, with Schwab and E*TRADE not far behind.
                </p>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl mb-2 tracking-tight">Research and education (15%)</h3>
                <p className="text-mute">
                  Quality of stock research, third-party reports (Morningstar, Argus, Credit Suisse), educational content, screeners, and analyst recommendations. Fidelity, Schwab, E*TRADE, and Interactive Brokers all score excellent. Robinhood remains light on research.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ACCOUNT TYPE COMPARISON */}
      <section className="max-w-(--max-w-page) mx-auto px-6 py-20">
        <div className="mb-10">
          <span className="chip chip-mute mb-4">Account types</span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight">
            Which broker supports which accounts?
          </h2>
          <p className="text-mute leading-relaxed mt-3 max-w-2xl">
            A quick reference. If you need joint, custodial, or trust accounts, stick with the full-service brokers. App-first brokers (Robinhood, Webull) limit you to individual taxable and IRAs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {brokers.map((b) => (
            <div key={b.slug} className="card p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="font-display font-bold text-lg">{b.broker}</div>
                  <div className="text-xs text-mute mt-1">{b.account_types.length} account types supported</div>
                </div>
                <Link href={`/investing/brokerages/${b.slug}`} className="text-mute text-sm u-link">
                  Review {"→"}
                </Link>
              </div>
              <div className="flex flex-wrap gap-2">
                {b.account_types.map((t) => (
                  <span key={t} className="chip chip-mute">
                    {formatAccountType(t)}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ASSET CLASS QUICK GRID */}
      <section className="bg-bg-soft/60 border-y border-line">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-20">
          <div className="mb-10">
            <span className="chip chip-mute mb-4">Asset classes</span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight">
              What can you actually trade?
            </h2>
            <p className="text-mute leading-relaxed mt-3 max-w-2xl">
              Most brokers cover stocks, ETFs, and options. Mutual funds, bonds, futures, forex, and crypto split the field. Pick a broker that covers what you actually plan to buy.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {brokers.map((b) => (
              <div key={b.slug} className="card p-6">
                <div className="font-display font-bold text-lg mb-3">{b.broker}</div>
                <div className="flex flex-wrap gap-2">
                  {b.asset_classes.map((c) => (
                    <span key={c} className="chip chip-lime">
                      {formatAssetClass(c)}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-(--max-w-page) mx-auto px-6 py-20">
        <div className="mb-10">
          <span className="chip chip-mute mb-4">FAQ</span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight">
            Common brokerage questions.
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

      {/* CTA */}
      <section className="bg-lime border-y border-ink">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-14 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight max-w-xl leading-tight">
              Got your shortlist? Read the full reviews.
            </h2>
            <p className="text-ink/70 mt-2">Each review covers pros, cons, fees, who it fits, and how to open.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/investing" className="pill pill-ink">
              Back to investing hub
              <span aria-hidden>{"→"}</span>
            </Link>
            <Link href="/calculators/investment" className="pill pill-ghost">
              Investment calculator
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
