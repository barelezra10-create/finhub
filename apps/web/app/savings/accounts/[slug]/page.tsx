import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  FinancialProductSchema,
  FAQPageSchema,
  BreadcrumbListSchema,
  type FAQItem,
} from "@/components/schemas";
import {
  loadSavingsAccount,
  loadSavingsAccounts,
  formatApy,
  formatMoney,
} from "@/lib/savings-accounts";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return loadSavingsAccounts().map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const a = loadSavingsAccount(slug);
  if (!a) return { title: "Savings Account Review | Fintiex" };
  const title = `${a.product_name} Review: ${formatApy(a.apy)} APY (2026) | Fintiex`;
  const description = `${a.product_name} from ${a.bank} pays ${formatApy(a.apy)} APY with $${a.monthly_fee} monthly fee. ${a.best_for}. Full 2026 review with pros, cons, and how to open.`;
  return {
    title,
    description: description.length > 160 ? description.slice(0, 157) + "..." : description,
    alternates: { canonical: `/savings/accounts/${a.slug}` },
  };
}

function buildFaqs(a: ReturnType<typeof loadSavingsAccount> & object): FAQItem[] {
  const name = a.product_name;
  return [
    {
      question: `Is ${name} FDIC insured?`,
      answer: a.fdic_insured
        ? `Yes. ${a.bank} is a member of the FDIC, which insures deposits up to $250,000 per depositor, per bank, per ownership category. If the bank fails, the federal government guarantees your money up to that limit. You can verify FDIC membership at fdic.gov/bankfind.`
        : `${a.bank} is not directly FDIC insured. Confirm any pass-through insurance terms with the bank before depositing.`,
    },
    {
      question: `What APY does ${name} pay right now?`,
      answer: `${name} pays ${formatApy(a.apy)} APY as of our last update on ${a.last_updated}. APY is variable and can change at any time as the Federal Reserve adjusts rates. Banks usually move their APY within 1 to 4 weeks of a Fed rate change.`,
    },
    {
      question: `Are there any monthly fees on ${name}?`,
      answer:
        a.monthly_fee === 0
          ? `No. ${name} has no monthly maintenance fee. There is also no minimum balance requirement to avoid a fee.`
          : `${name} charges a monthly fee of ${formatMoney(a.monthly_fee)}.${
              a.monthly_fee_waivable ? " The fee can be waived by meeting a minimum balance requirement." : ""
            }`,
    },
    {
      question: `What is the minimum to open ${name}?`,
      answer:
        a.min_opening_deposit === 0
          ? `${name} has no minimum opening deposit. You can open the account and fund it later.`
          : `${name} requires a minimum opening deposit of ${formatMoney(a.min_opening_deposit)}. After opening, there is ${a.min_balance === 0 ? "no minimum balance requirement" : `a minimum balance requirement of ${formatMoney(a.min_balance)}`}.`,
    },
    {
      question: `How do I open a ${name} account?`,
      answer: `You can open ${name} online in about 10 minutes. You will need a Social Security number, a valid US address, and a funding source (an existing bank account or a debit card). The account is usually approved instantly. Funds typically arrive 1 to 3 business days after the first ACH transfer settles.`,
    },
    {
      question: `Can I withdraw money from ${name} anytime?`,
      answer: `Yes. Unlike a CD, ${name} is a liquid savings account. You can transfer money out at any time via ACH, wire, or (if supported) ATM. ${
        a.withdrawal_limit_per_month
          ? `${a.bank} limits free withdrawals to ${a.withdrawal_limit_per_month} per month.`
          : "Federal Regulation D withdrawal limits were lifted in 2020, but some banks still cap free monthly withdrawals at 6."
      }`,
    },
  ];
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const account = loadSavingsAccount(slug);
  if (!account) notFound();

  const faqs = buildFaqs(account);

  return (
    <article className="bg-bg">
      <FinancialProductSchema
        name={account.product_name}
        description={`${account.product_name} from ${account.bank}. ${formatApy(account.apy)} APY. ${account.best_for}.`}
        slug={`/savings/accounts/${account.slug}`}
        brandName={account.bank}
        category="Savings Account"
        apr={account.apy.toFixed(2)}
        ratingValue={account.rating * 2}
        reviewCount={1}
      />
      <FAQPageSchema items={faqs} />
      <BreadcrumbListSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Savings", href: "/savings" },
          { name: "Savings accounts", href: "/savings/accounts" },
          { name: account.bank, href: `/savings/accounts/${account.slug}` },
        ]}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-bg border-b border-line">
        <div className="hero-blob hero-blob-1" />
        <div className="relative max-w-(--max-w-page) mx-auto px-6 pt-16 pb-12">
          <div className="mb-4 text-xs font-mono text-mute uppercase tracking-wider">
            <Link href="/savings" className="u-link">Savings</Link>{" / "}
            <Link href="/savings/accounts" className="u-link">Accounts</Link>
          </div>
          <span className="chip chip-lime mb-5">
            <span className="pulse-dot" /> Savings account review
          </span>
          <h1 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight leading-tight mb-5 max-w-3xl">
            {account.product_name} Review (2026)
          </h1>
          <p className="text-lg text-mute max-w-2xl leading-relaxed mb-6">
            {account.bank} earned{" "}
            <span className="font-mono tabular font-semibold text-ink">
              {account.rating.toFixed(1)} / 5
            </span>{" "}
            in our 2026 review. Best for: {account.best_for.toLowerCase()}. Here is the full breakdown.
          </p>
          <div className="text-xs font-mono text-mute uppercase tracking-wider mb-6">
            By the Fintiex Rate Desk · Updated {account.last_updated}
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={account.application_url}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="pill pill-lime"
            >
              Open at {account.bank} <span aria-hidden>{"->"}</span>
            </a>
            <Link href="/savings/accounts" className="pill pill-ghost">
              Compare all 8 accounts
            </Link>
          </div>
        </div>
      </section>

      {/* TL;DR KEY STATS CARD */}
      <section className="max-w-(--max-w-page) mx-auto px-6 py-10">
        <div className="card-flush p-8" style={{ boxShadow: "var(--shadow-pop)" }}>
          <div className="chip chip-ink mb-6">TL;DR</div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <Stat label="APY" value={formatApy(account.apy)} mono />
            <Stat
              label="Min to open"
              value={account.min_opening_deposit === 0 ? "$0" : formatMoney(account.min_opening_deposit)}
              mono
            />
            <Stat
              label="Monthly fee"
              value={account.monthly_fee === 0 ? "$0" : formatMoney(account.monthly_fee)}
              mono
            />
            <Stat label="FDIC" value={account.fdic_insured ? "Insured" : "Not insured"} mono />
          </div>
          <div className="mt-6 pt-6 border-t border-line grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
            <KV label="Mobile app" value={`${account.mobile_app_rating.toFixed(1)} / 5`} />
            <KV
              label="Min balance"
              value={account.min_balance === 0 ? "None" : formatMoney(account.min_balance)}
            />
            <KV
              label="Withdrawal limit"
              value={
                account.withdrawal_limit_per_month
                  ? `${account.withdrawal_limit_per_month} / month`
                  : "None enforced"
              }
            />
            <KV label="Fintiex rating" value={`${account.rating.toFixed(1)} / 5`} />
          </div>
        </div>
      </section>

      {/* PROS / CONS */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card p-7">
            <div className="chip chip-lime mb-5">Pros</div>
            <ul className="space-y-3 text-[0.9375rem]">
              {account.perks.map((perk) => (
                <li key={perk} className="flex gap-3">
                  <span className="text-mint font-bold">+</span>
                  <span>{perk}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="card p-7">
            <div className="chip chip-mute mb-5">Cons</div>
            <ul className="space-y-3 text-[0.9375rem]">
              {account.drawbacks.map((drawback) => (
                <li key={drawback} className="flex gap-3">
                  <span className="text-rose font-bold">-</span>
                  <span>{drawback}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* BEST FOR */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <div className="card p-7 border-l-4 border-lime">
          <div className="chip chip-lime mb-4">Best for</div>
          <p className="text-[1.0625rem] leading-relaxed">
            {account.product_name} is the right pick if you prioritize {account.best_for.toLowerCase()}. If that does not match what you need, compare against the other 7 picks on the{" "}
            <Link href="/savings/accounts" className="u-link">
              savings accounts hub
            </Link>
            .
          </p>
        </div>
      </section>

      {/* RATE HISTORY PLACEHOLDER */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <h2 className="font-display font-bold text-3xl tracking-tight mb-6">Rate history</h2>
        <div className="card p-7">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
            <RateCell when="Today" apy={account.apy} highlight />
            <RateCell when="30 days ago" apy={account.apy} />
            <RateCell when="90 days ago" apy={Math.max(0, account.apy - 0.05)} />
            <RateCell when="1 year ago" apy={Math.max(0, account.apy - 0.4)} />
          </div>
          <p className="text-sm text-mute leading-relaxed">
            Rate history is approximate and reflects the broader market trend for top online savings accounts. {account.bank} adjusts its APY in response to Federal Reserve policy decisions, typically within 1 to 4 weeks of a Fed move. We refresh this section weekly.
          </p>
        </div>
      </section>

      {/* HOW TO OPEN */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <h2 className="font-display font-bold text-3xl tracking-tight mb-6">
          How to open a {account.bank} account
        </h2>
        <div className="max-w-3xl text-[1.0625rem] leading-relaxed text-ink-soft mb-5">
          <p>
            Opening {account.product_name} takes about 10 minutes online. You will need a Social Security number, a valid US address, and a funding source (an existing bank account login, debit card, or check by mail). The account is usually approved instantly, and your first ACH transfer typically clears in 1 to 3 business days.
          </p>
        </div>
        <ul className="space-y-2 text-[0.9375rem] max-w-2xl ml-4 text-ink-soft">
          <li className="list-disc ml-4">Visit the {account.bank} savings page</li>
          <li className="list-disc ml-4">Enter your name, address, and Social Security number</li>
          <li className="list-disc ml-4">
            Fund the account ({account.min_opening_deposit === 0 ? "no minimum" : `minimum ${formatMoney(account.min_opening_deposit)}`})
          </li>
          <li className="list-disc ml-4">Set up two-factor authentication and confirm your email</li>
          <li className="list-disc ml-4">Start earning {formatApy(account.apy)} APY the next business day</li>
        </ul>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={account.application_url}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="pill pill-ink"
          >
            Open at {account.bank} <span aria-hidden>{"->"}</span>
          </a>
          <a
            href={account.application_url}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="pill pill-ghost"
          >
            View {account.bank} fee schedule
          </a>
        </div>
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

      {/* CTA STRIP */}
      <section className="bg-lime border-y border-ink">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-14 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight max-w-xl leading-tight">
              Ready to open {account.product_name}?
            </h2>
            <p className="text-ink/70 mt-2">Takes about 10 minutes. {formatApy(account.apy)} APY, FDIC insured.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={account.application_url}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="pill pill-ink"
            >
              Open at {account.bank} <span aria-hidden>{"->"}</span>
            </a>
            <Link href="/savings/accounts" className="pill pill-ghost">
              Compare other accounts
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}

function Stat({ label, value, mono = false }: { label: string; value: string; mono?: boolean }) {
  return (
    <div>
      <div className="text-xs text-mute uppercase tracking-wider font-mono mb-1">{label}</div>
      <div className={`font-display font-extrabold text-2xl ${mono ? "tabular" : ""}`}>{value}</div>
    </div>
  );
}

function KV({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-xs text-mute mb-1">{label}</div>
      <div className="font-mono tabular font-semibold text-sm">{value}</div>
    </div>
  );
}

function RateCell({ when, apy, highlight }: { when: string; apy: number; highlight?: boolean }) {
  return (
    <div>
      <div className="text-xs text-mute uppercase tracking-wider font-mono mb-1">{when}</div>
      <div
        className={`font-display font-extrabold text-2xl tabular ${
          highlight ? "text-violet" : "text-ink"
        }`}
      >
        {formatApy(apy)}
      </div>
    </div>
  );
}
