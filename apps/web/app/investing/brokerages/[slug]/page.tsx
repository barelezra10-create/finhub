import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  FinancialProductSchema,
  FAQPageSchema,
  BreadcrumbListSchema,
  type FAQItem,
} from "@/components/schemas";
import {
  loadBrokerages,
  loadBrokerage,
  formatAccountType,
  formatAssetClass,
  formatResearchQuality,
  type Brokerage,
} from "@/lib/investing";

export async function generateStaticParams() {
  return loadBrokerages().map((b) => ({ slug: b.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> },
): Promise<Metadata> {
  const { slug } = await params;
  const b = loadBrokerage(slug);
  if (!b) return { title: "Broker not found | Fintiex" };
  const title = `${b.broker} Review 2026: Fees, Pros, Cons | Fintiex`;
  const description = `${b.broker} review for 2026. ${b.best_for}. ${b.commission_stocks === 0 ? "$0 stock trades" : "$" + b.commission_stocks + " stocks"}, ${b.account_minimum === 0 ? "no minimum" : "$" + b.account_minimum + " min"}.`;
  return {
    title,
    description: description.slice(0, 158),
    alternates: { canonical: `/investing/brokerages/${b.slug}` },
  };
}

function fmtMoney(n: number): string {
  if (n === 0) return "$0";
  return "$" + n.toLocaleString();
}

function fmtOpt(n: number): string {
  if (n === 0) return "$0";
  return "$" + n.toFixed(2);
}

function buildFaqs(b: Brokerage): FAQItem[] {
  const optStr = b.commission_options_per_contract === 0
    ? "$0 per contract (truly free)"
    : "$" + b.commission_options_per_contract.toFixed(2) + " per contract";
  const fracStr = b.fractional_shares_available
    ? "Yes, fractional shares are available, often starting at $1."
    : "No, fractional shares are not currently supported. You must buy whole shares.";

  return [
    {
      question: `Is ${b.broker} SIPC insured?`,
      answer: `Yes. ${b.broker} is a member of SIPC, which insures securities and cash up to $500,000 per account (including up to $250,000 in cash) if the broker fails. Many brokers also carry private excess insurance well beyond the SIPC limit. SIPC does not protect against market losses.`,
    },
    {
      question: `What does it cost to trade stocks and options at ${b.broker}?`,
      answer: `Stock and ETF trades are ${fmtMoney(b.commission_stocks)}. Options are ${optStr}. Mutual funds are ${fmtMoney(b.commission_mutual_funds)} for no-transaction-fee funds. The account minimum is ${fmtMoney(b.account_minimum)}.`,
    },
    {
      question: `Does ${b.broker} offer fractional shares?`,
      answer: fracStr,
    },
    {
      question: `What account types can I open at ${b.broker}?`,
      answer: `${b.broker} supports ${b.account_types.length} account types: ${b.account_types.map((t) => formatAccountType(t)).join(", ")}. Visit the application page to start.`,
    },
    {
      question: `What can I trade at ${b.broker}?`,
      answer: `Asset coverage includes ${b.asset_classes.map((c) => formatAssetClass(c)).join(", ")}. Research quality is rated ${formatResearchQuality(b.research_quality)} and the mobile app scores ${b.mobile_app_rating.toFixed(1)} out of 5.`,
    },
    {
      question: `Who is ${b.broker} best for?`,
      answer: `${b.best_for}. The Fintiex overall rating is ${b.rating.toFixed(1)} out of 5. Read the full pros and cons above to decide if it fits your goals.`,
    },
  ];
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const b = loadBrokerage(slug);
  if (!b) notFound();

  const faqs = buildFaqs(b);
  const tagline = `${b.best_for}. ${fmtMoney(b.commission_stocks)} stock trades, ${fmtMoney(b.account_minimum)} minimum.`;

  return (
    <article className="bg-bg">
      <FinancialProductSchema
        name={`${b.broker} Review (2026)`}
        description={`${b.broker} review for 2026. ${b.best_for}.`}
        slug={`/investing/brokerages/${b.slug}`}
        brandName={b.broker}
        category="Brokerage Account"
        ratingValue={b.rating * 2}
        reviewCount={1}
      />
      <FAQPageSchema items={faqs} />
      <BreadcrumbListSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Investing", href: "/investing" },
          { name: "Brokerages", href: "/investing/brokerages" },
          { name: b.broker, href: `/investing/brokerages/${b.slug}` },
        ]}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-bg border-b border-line">
        <div className="hero-blob hero-blob-1" />
        <div className="relative max-w-(--max-w-page) mx-auto px-6 pt-16 pb-12">
          <div className="mb-4 flex items-center gap-3 text-xs font-mono uppercase tracking-wider text-mute">
            <Link href="/investing" className="u-link">Investing</Link>
            <span>/</span>
            <Link href="/investing/brokerages" className="u-link">Brokerages</Link>
          </div>
          <span className="chip chip-lime mb-4">
            <span className="pulse-dot" /> Brokerage Review
          </span>
          <h1 className="font-display font-extrabold text-[clamp(2.25rem,5vw,4rem)] tracking-tight leading-[1.05] mb-5 max-w-3xl">
            {b.broker} Review (2026)
          </h1>
          <p className="text-lg md:text-xl text-mute max-w-2xl leading-relaxed mb-6">
            <span className="font-semibold text-ink">Best for:</span> {b.best_for}. Our Fintiex score is{" "}
            <span className="font-mono tabular font-semibold text-ink">{b.rating.toFixed(1)} / 5</span>{" "}
            based on commissions, account coverage, app quality, and research depth.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={b.application_url}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="pill pill-lime"
            >
              Open {b.broker} account
              <span aria-hidden>{"↗"}</span>
            </a>
            <Link href="/investing/brokerages" className="pill pill-ghost">
              See all 7 brokers
            </Link>
          </div>
          <div className="mt-4 text-xs font-mono text-mute uppercase tracking-wider">
            By the Fintiex Investing Desk · Updated {b.last_updated}
          </div>
        </div>
      </section>

      {/* TL;DR STATS */}
      <section className="max-w-(--max-w-page) mx-auto px-6 py-10">
        <div className="card-flush p-8" style={{ boxShadow: "var(--shadow-pop)" }}>
          <div className="chip chip-ink mb-6">At a glance</div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <Stat label="Stock trades" value={fmtMoney(b.commission_stocks)} />
            <Stat label="Options / contract" value={fmtOpt(b.commission_options_per_contract)} />
            <Stat label="Mutual funds" value={fmtMoney(b.commission_mutual_funds)} />
            <Stat label="Account minimum" value={fmtMoney(b.account_minimum)} />
            <Stat label="Mobile app" value={`${b.mobile_app_rating.toFixed(1)} / 5`} />
            <Stat label="Research" value={formatResearchQuality(b.research_quality)} />
            <Stat label="Fractional shares" value={b.fractional_shares_available ? "Yes" : "No"} />
            <Stat label="Fintiex score" value={`${b.rating.toFixed(1)} / 5`} />
          </div>
        </div>
      </section>

      {/* PROS / CONS */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card p-7">
            <div className="chip chip-lime mb-5">Pros</div>
            <ul className="space-y-3 text-[0.9375rem]">
              {b.perks.map((p) => (
                <li key={p} className="flex gap-3">
                  <span className="text-mint font-bold">+</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="card p-7">
            <div className="chip chip-mute mb-5">Cons</div>
            <ul className="space-y-3 text-[0.9375rem]">
              {b.drawbacks.map((d) => (
                <li key={d} className="flex gap-3">
                  <span className="text-rose font-bold">-</span>
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <h2 className="font-display font-bold text-3xl tracking-tight mb-6">Overview</h2>
        <div className="space-y-5 text-[1.0625rem] leading-relaxed text-ink-soft max-w-3xl">
          <p>
            {b.broker} earns a Fintiex score of {b.rating.toFixed(1)} out of 5, placing it among the brokers we recommend to readers who fit the profile of "{b.best_for.toLowerCase()}." Stock and ETF trades cost {fmtMoney(b.commission_stocks)}, options are {fmtOpt(b.commission_options_per_contract)} per contract, and the account opens with {b.account_minimum === 0 ? "no minimum balance" : `a ${fmtMoney(b.account_minimum)} minimum`}.
          </p>
          <p>
            The mobile app rates {b.mobile_app_rating.toFixed(1)} out of 5 on App Store reviews, and research quality is {b.research_quality}. {b.fractional_shares_available ? "Fractional shares are supported, so you can buy partial shares of expensive stocks starting from $1." : "Fractional shares are not currently offered, which can be a drawback for investors building positions with small recurring deposits."} The account supports {b.account_types.length} account types and {b.asset_classes.length} asset classes, covered in detail in the sections below.
          </p>
          <p>
            Use this review alongside our full brokerage comparison to confirm whether {b.broker} is the best fit for your goals or whether another broker on our list is more cost-effective for your trading style.
          </p>
        </div>
      </section>

      {/* ACCOUNT TYPES */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <h2 className="font-display font-bold text-3xl tracking-tight mb-6">Account types supported</h2>
        <p className="text-mute leading-relaxed mb-6 max-w-3xl">
          {b.broker} supports {b.account_types.length} account types. If you need a specific structure (custodial for a minor, trust for estate planning), confirm eligibility before applying.
        </p>
        <div className="flex flex-wrap gap-2 max-w-3xl">
          {b.account_types.map((t) => (
            <span key={t} className="chip chip-violet">
              {formatAccountType(t)}
            </span>
          ))}
        </div>
      </section>

      {/* ASSET CLASSES */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <h2 className="font-display font-bold text-3xl tracking-tight mb-6">What you can trade</h2>
        <p className="text-mute leading-relaxed mb-6 max-w-3xl">
          {b.broker} gives you access to {b.asset_classes.length} asset classes. The broader the coverage, the less likely you will need to open a second account later.
        </p>
        <div className="flex flex-wrap gap-2 max-w-3xl">
          {b.asset_classes.map((c) => (
            <span key={c} className="chip chip-lime">
              {formatAssetClass(c)}
            </span>
          ))}
        </div>
      </section>

      {/* FEES TABLE */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <h2 className="font-display font-bold text-3xl tracking-tight mb-6">Fees and minimums</h2>
        <div className="card-flush p-6 max-w-2xl">
          <ul className="space-y-3 text-[0.9375rem]">
            <li className="flex justify-between border-b border-line pb-3">
              <span className="text-mute">Stock and ETF trades</span>
              <span className="font-mono tabular font-semibold">{fmtMoney(b.commission_stocks)}</span>
            </li>
            <li className="flex justify-between border-b border-line pb-3">
              <span className="text-mute">Options per contract</span>
              <span className="font-mono tabular font-semibold">{fmtOpt(b.commission_options_per_contract)}</span>
            </li>
            <li className="flex justify-between border-b border-line pb-3">
              <span className="text-mute">Mutual funds (NTF)</span>
              <span className="font-mono tabular font-semibold">{fmtMoney(b.commission_mutual_funds)}</span>
            </li>
            <li className="flex justify-between border-b border-line pb-3">
              <span className="text-mute">Account minimum</span>
              <span className="font-mono tabular font-semibold">{fmtMoney(b.account_minimum)}</span>
            </li>
            <li className="flex justify-between border-b border-line pb-3">
              <span className="text-mute">Fractional shares</span>
              <span className="font-mono tabular font-semibold">{b.fractional_shares_available ? "Yes" : "No"}</span>
            </li>
            <li className="flex justify-between">
              <span className="text-mute">Mobile app rating</span>
              <span className="font-mono tabular font-semibold">{b.mobile_app_rating.toFixed(1)} / 5</span>
            </li>
          </ul>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card p-7">
            <div className="chip chip-lime mb-4">Best for</div>
            <p className="text-[0.9375rem] leading-relaxed">
              {b.best_for}. If that describes how you plan to invest, {b.broker} is a strong fit.
            </p>
            <ul className="space-y-3 text-[0.9375rem] mt-4">
              {b.perks.slice(0, 3).map((p) => (
                <li key={p} className="flex gap-3">
                  <span className="text-mint font-bold">+</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="card p-7">
            <div className="chip chip-mute mb-4">Look elsewhere if</div>
            <p className="text-[0.9375rem] leading-relaxed mb-4">
              No broker is a fit for everyone. Here is where {b.broker} falls short.
            </p>
            <ul className="space-y-3 text-[0.9375rem]">
              {b.drawbacks.slice(0, 3).map((d) => (
                <li key={d} className="flex gap-3">
                  <span className="text-rose font-bold">-</span>
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* HOW TO OPEN */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <h2 className="font-display font-bold text-3xl tracking-tight mb-6">How to open an account</h2>
        <div className="max-w-3xl text-[1.0625rem] leading-relaxed text-ink-soft mb-5">
          <p>
            Opening a {b.broker} account takes roughly 10 to 15 minutes online. You will need a Social Security number, a government-issued ID, and a linked bank account for funding. No hard credit pull is made for standard cash accounts.
          </p>
        </div>
        <ul className="space-y-2 text-[0.9375rem] max-w-2xl ml-4">
          <li className="list-disc ml-4">Visit the {b.broker} application page</li>
          <li className="list-disc ml-4">Select your account type (taxable, IRA, Roth IRA, joint, etc.)</li>
          <li className="list-disc ml-4">Enter personal details and verify identity</li>
          <li className="list-disc ml-4">Link an external bank via routing and account number</li>
          <li className="list-disc ml-4">Fund the account via ACH transfer (1 to 3 business days)</li>
          <li className="list-disc ml-4">Place your first trade once funds settle</li>
        </ul>
      </section>

      {/* FAQ */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <h2 className="font-display font-bold text-3xl tracking-tight mb-8">Frequently asked questions</h2>
        <div className="space-y-6 max-w-3xl">
          {faqs.map((faq) => (
            <div key={faq.question} className="border-b border-line pb-6">
              <div className="font-display font-semibold text-lg mb-2">{faq.question}</div>
              <div className="text-mute text-[0.9375rem] leading-relaxed">{faq.answer}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA CARD */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-20">
        <div className="card-flush p-8 md:p-10" style={{ boxShadow: "var(--shadow-pop)" }}>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:items-center">
            <div className="md:col-span-8">
              <div className="chip chip-lime mb-3">Ready to start</div>
              <h3 className="font-display font-extrabold text-2xl md:text-3xl tracking-tight mb-2">
                Open your {b.broker} account
              </h3>
              <p className="text-mute leading-relaxed">{tagline}</p>
            </div>
            <div className="md:col-span-4 flex md:justify-end">
              <a
                href={b.application_url}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="pill pill-ink"
              >
                Go to {b.broker}
                <span aria-hidden>{"↗"}</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/investing/brokerages" className="pill pill-ghost">
            Back to brokerage comparison <span aria-hidden>{"→"}</span>
          </Link>
          <Link href="/investing" className="pill pill-ghost">
            Investing hub
          </Link>
        </div>
      </section>
    </article>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-xs text-mute uppercase tracking-wider font-mono mb-1">{label}</div>
      <div className="font-display font-extrabold text-xl md:text-2xl tabular">{value}</div>
    </div>
  );
}
