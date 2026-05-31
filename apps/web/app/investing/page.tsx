import Link from "next/link";
import type { Metadata } from "next";
import { FAQPageSchema, BreadcrumbListSchema, type FAQItem } from "@/components/schemas";
import { loadBrokerages } from "@/lib/investing";

export const metadata: Metadata = {
  title: "Investing: Brokers, Account Types & How to Start | Fintiex",
  description:
    "Compare top online brokerages, learn how investing accounts work, and find the best fit for your goals. Plain English investing guides from Fintiex.",
  alternates: { canonical: "/investing" },
};

const faqItems: FAQItem[] = [
  {
    question: "How much money do I need to start investing?",
    answer:
      "You can start with $1 at most modern brokerages. Fidelity, Schwab, and Robinhood all support fractional shares, which lets you buy a slice of expensive stocks like Berkshire or Amazon for a few dollars. There is no minimum account balance at any of our top picks.",
  },
  {
    question: "What is the difference between a taxable account and an IRA?",
    answer:
      "A taxable brokerage account has no contribution limits and no withdrawal rules, but you pay capital gains tax on profits. A Traditional or Roth IRA limits contributions ($7,000 per year in 2026) but offers tax advantages. Most investors use both: a taxable account for flexibility and an IRA for retirement.",
  },
  {
    question: "Are online brokers safe?",
    answer:
      "Yes. All brokers in our comparison are members of SIPC, which insures securities and cash up to $500,000 per account if the broker fails. Many also carry private excess insurance well beyond that. Your stocks themselves are held in your name at a central clearinghouse, not on the broker's balance sheet.",
  },
  {
    question: "Should I pick one broker or use several?",
    answer:
      "Most people are best served by one main brokerage. Splitting accounts adds tax complexity at year end and makes rebalancing harder. The exception: if you want crypto plus traditional investing, you might pair Fidelity with Robinhood. For pure stocks and funds, one broker is plenty.",
  },
  {
    question: "What does commission-free really mean?",
    answer:
      "Every major US broker offers commission-free trades for stocks and ETFs. They make money in other ways: payment for order flow, margin lending, securities lending, and idle cash spreads. Commission-free is real, but no broker is truly free. Read the fee schedule for options and mutual funds.",
  },
  {
    question: "When should I open a Roth IRA?",
    answer:
      "Open a Roth IRA as soon as you have earned income and a stable emergency fund. Roth contributions grow tax-free for life and can be withdrawn (the contributions, not the earnings) at any time without penalty. The 2026 limit is $7,000, or $8,000 if you are 50 or older.",
  },
];

export default function Page() {
  const brokers = loadBrokerages().sort((a, b) => b.rating - a.rating);
  const topThree = brokers.slice(0, 3);

  return (
    <>
      <FAQPageSchema items={faqItems} />
      <BreadcrumbListSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Investing", href: "/investing" },
        ]}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-bg">
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
        <div className="relative max-w-(--max-w-page) mx-auto px-6 pt-20 pb-16">
          <span className="chip chip-lime mb-6">
            <span className="pulse-dot" /> Investing at Fintiex
          </span>
          <h1 className="font-display font-extrabold text-[clamp(2.5rem,6vw,5rem)] leading-[1.02] tracking-[-0.03em] mb-6 max-w-3xl">
            Start investing without the jargon.
          </h1>
          <p className="text-lg md:text-xl text-mute leading-relaxed max-w-2xl mb-8">
            Fintiex breaks down brokerages, account types, and investing strategy in plain English. No paid placements, no affiliate hierarchy. Just clear comparisons from people who actually use these accounts.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/investing/brokerages" className="pill pill-ink">
              Compare brokerages
              <span aria-hidden>{"→"}</span>
            </Link>
            <Link href="/calculators/investment" className="pill pill-ghost">
              Investment calculator
            </Link>
          </div>
        </div>
      </section>

      {/* SNAPSHOT */}
      <section className="border-y border-line bg-bg-soft/60">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-display font-bold text-2xl tracking-tight">Top picks this month</h2>
            <span className="text-xs font-mono text-mute">Updated today</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {topThree.map((b) => (
              <Link key={b.slug} href={`/investing/brokerages/${b.slug}`} className="card p-6 block group">
                <div className="flex items-center justify-between mb-3">
                  <span className="chip chip-lime">{b.best_for.split(" ").slice(0, 3).join(" ")}</span>
                  <span className="font-mono tabular text-sm text-mute">{b.rating.toFixed(1)} / 5</span>
                </div>
                <div className="font-display font-extrabold text-2xl mb-2 tracking-tight">{b.broker}</div>
                <div className="text-sm text-mute leading-relaxed">{b.best_for}.</div>
                <div className="mt-4 text-xs font-mono text-mute uppercase tracking-wider group-hover:text-ink transition-colors">
                  Read review {"→"}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SUB-SECTIONS */}
      <section className="max-w-(--max-w-page) mx-auto px-6 py-20">
        <div className="mb-10">
          <span className="chip chip-mute mb-4">Explore</span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight">
            Where to start in investing.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link href="/investing/brokerages" className="card p-8 block group">
            <div className="flex items-center justify-between mb-4">
              <span className="chip chip-lime">Brokerages</span>
              <span className="text-mute text-xl group-hover:text-ink group-hover:translate-x-1 transition-all">
                {"→"}
              </span>
            </div>
            <div className="font-display font-extrabold text-2xl mb-3 tracking-tight">
              Compare the top 7 online brokers
            </div>
            <p className="text-mute leading-relaxed">
              Commissions, account minimums, mobile app ratings, and what each broker is genuinely good at. Side-by-side data for Fidelity, Schwab, Vanguard, and four others.
            </p>
          </Link>
          <div className="card p-8 block opacity-70">
            <div className="flex items-center justify-between mb-4">
              <span className="chip chip-mute">Coming soon</span>
            </div>
            <div className="font-display font-extrabold text-2xl mb-3 tracking-tight">
              Robo-advisors, IRAs, and more
            </div>
            <p className="text-mute leading-relaxed">
              We are building out coverage of robo-advisors, retirement accounts, target-date funds, and tax-loss harvesting tools. Check back as we expand the section.
            </p>
          </div>
        </div>
      </section>

      {/* HOW TO START */}
      <section className="bg-bg-soft/60 border-y border-line">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-20">
          <div className="grid grid-cols-12 gap-10">
            <div className="col-span-12 lg:col-span-4">
              <span className="chip chip-mute mb-4">How to start</span>
              <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-tight mb-6">
                Five steps to your first investment.
              </h2>
              <p className="text-mute leading-relaxed">
                You do not need a finance degree. You need an account, a few dollars, and a habit. The rest follows.
              </p>
            </div>
            <div className="col-span-12 lg:col-span-8 space-y-8 text-base leading-relaxed">
              <div>
                <h3 className="font-display font-bold text-xl mb-2 tracking-tight">1. Build a small emergency fund first</h3>
                <p className="text-mute">
                  Before you invest a dollar, park three months of expenses in a high-yield savings account. Investing money you might need next month is how people panic sell at the worst time. A HYSA earns 4 to 5 percent right now and stays liquid.
                </p>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl mb-2 tracking-tight">2. Pick the right account type</h3>
                <p className="text-mute">
                  For retirement, open a Roth IRA if your income qualifies. For shorter goals, open a taxable brokerage account. If your employer offers a 401(k) match, get the full match first. Free money beats every other strategy. After that, choose between a Roth IRA and additional 401(k) contributions based on your tax bracket today versus retirement.
                </p>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl mb-2 tracking-tight">3. Open at a low-cost broker</h3>
                <p className="text-mute">
                  Fidelity, Schwab, and Vanguard all offer zero-commission stock and ETF trades, no account minimums, and excellent index fund lineups. Avoid brokers that charge for trades, mutual fund transaction fees, or inactivity fees. Our brokerage comparison page lays out the full grid.
                </p>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl mb-2 tracking-tight">4. Start with a broad index fund</h3>
                <p className="text-mute">
                  A total stock market ETF (VTI, ITOT, or SCHB) or an S&P 500 ETF (VOO, IVV, or SPY) gives you instant diversification across hundreds of US companies for a yearly fee of about 0.03 percent. That is $3 per $10,000 invested. Vanguard, Fidelity, and Schwab versions are all essentially identical.
                </p>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl mb-2 tracking-tight">5. Automate and ignore</h3>
                <p className="text-mute">
                  Set up an automatic monthly transfer and buy. Then close the app. The single biggest predictor of long-term investing success is doing nothing. Studies consistently show that investors who check their balance daily underperform the buy-and-hold crowd by 1 to 3 percent per year. Make it boring.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BROKERS OVERVIEW */}
      <section className="max-w-(--max-w-page) mx-auto px-6 py-20">
        <div className="grid grid-cols-12 gap-8 mb-8">
          <div className="col-span-12 md:col-span-7">
            <span className="chip chip-mute mb-4">
              <span className="pulse-dot" /> Brokers covered
            </span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-tight">
              Seven brokerages, one honest grid.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5 flex md:items-end md:justify-end">
            <p className="text-mute leading-relaxed md:text-right md:max-w-sm">
              Each broker review covers commissions, account types, asset coverage, app quality, and who it actually serves best.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {brokers.map((b) => (
            <Link key={b.slug} href={`/investing/brokerages/${b.slug}`} className="card p-6 block group">
              <div className="flex items-start justify-between mb-3">
                <div className="font-display font-bold text-lg tracking-tight">{b.broker}</div>
                <span className="font-mono tabular text-xs text-mute">{b.rating.toFixed(1)}</span>
              </div>
              <div className="text-sm text-mute leading-relaxed mb-4">{b.best_for}.</div>
              <div className="text-xs font-mono uppercase tracking-wider text-mute group-hover:text-ink transition-colors">
                View review {"→"}
              </div>
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
              Investing basics, answered.
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
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="bg-lime border-y border-ink">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-14 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight max-w-xl leading-tight">
              Pick a broker. Open the account. Start small.
            </h2>
            <p className="text-ink/70 mt-2">Our brokerage comparison ranks the top 7 across cost, app, and account types.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/investing/brokerages" className="pill pill-ink">
              Compare brokerages
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
