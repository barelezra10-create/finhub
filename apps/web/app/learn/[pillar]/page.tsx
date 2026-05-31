import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BreadcrumbListSchema } from "@/components/schemas";
import {
  PILLAR_META,
  PILLAR_SLUGS,
  loadPillarArticles,
} from "@/lib/pillars";

export async function generateStaticParams() {
  return PILLAR_SLUGS.map((pillar) => ({ pillar }));
}

const CHIP_VARIANTS: Record<string, "lime" | "violet" | "mute" | "ink"> = {
  "credit-card-basics": "lime",
  "choosing-a-card": "violet",
  "maximizing-rewards": "ink",
  "building-credit": "lime",
  "business-credit": "violet",
};

interface PillarLongCopy {
  hook: string;
  who: string;
  method: string;
  habit: string;
  bottomLine: string;
}

const PILLAR_LONG_COPY: Record<string, PillarLongCopy> = {
  "credit-card-basics": {
    hook: "Credit cards are the most expensive consumer credit product most people will ever hold and also the most powerful free financial tool, depending entirely on whether you understand how the bill is built. This pillar walks through the math, the cycle, and the levers you actually control.",
    who: "If you are about to open your first card, if you have one and still are not sure why the balance never moves, or if you have been paying in full for years and want to know what you are doing right, start here. The articles below assume zero prior knowledge and add the technical detail later.",
    method: "Every guide in this pillar shows the actual formula behind the number. APR is broken into daily periodic rate. Utilization is computed across single cards and across totals. Statements are read line by line. Where math is involved, we run a worked example with real dollar figures so you can swap in your own numbers and see what they imply.",
    habit: "The single habit that separates people who get free credit from people who pay 25 percent a year is paying the full statement balance before the due date, every cycle, automatically. Set the autopay before you finish reading. Everything else is optimization.",
    bottomLine: "Master the basics and credit cards are a tool that pays you to use them. Skip them and credit cards are the most expensive way to borrow money in the country. This pillar gets you on the right side of that line.",
  },
  "choosing-a-card": {
    hook: "There are roughly 1,200 active consumer credit cards in the US market and on any given day five of them are right for you. The job is not to find the best card. It is to find the right card for how you actually spend, not how you imagine you spend. This pillar makes that practical.",
    who: "If you are picking your first card, replacing a card with an annual fee you stopped using, or trying to decide whether the new shiny premium card is worth it, the guides below give you a framework instead of a leaderboard. We will not tell you which card to get. We will tell you exactly which questions to answer first.",
    method: "We start from your actual spending categories and your stated goals. Cashback or points. Annual fee or no fee. Travel or everyday. Each guide ends with a break-even calculation in plain dollars. You should be able to look at a card, pull three numbers from the fine print, and tell yourself whether it earns its keep in your wallet.",
    habit: "Pull your last three months of statements before you read these guides. List your top five spending categories by dollar amount. The right card almost always reveals itself once you stare at that list for two minutes. Marketing tells you what is popular. Your statements tell you what is profitable for you.",
    bottomLine: "A card chosen against your actual spending earns hundreds or thousands of dollars per year. A card chosen against marketing copy costs you in fees and missed rewards. This pillar shows you how to pick the first kind, every time.",
  },
  "maximizing-rewards": {
    hook: "Most credit card holders earn between 1 and 2 percent back on their spending and then redeem those rewards at the lowest possible value. Power users earn 3 to 5 percent on average and routinely pull 3 to 8 cents per point on travel redemptions. The gap is not luck. It is a set of repeatable tactics that anyone willing to read for an hour can copy.",
    who: "If you already pay your balance in full every month, hold one or two cards, and want to step up to a system that returns real value without a second job, this pillar is the curriculum. We assume you understand the basics and want the playbook.",
    method: "Each guide walks through the actual mechanics: how signup bonuses work and how to legitimately meet the spend, how the Chase and Amex trifectas combine to multiply earnings, and how transfer partners let you book a 1,500 dollar flight for 60,000 points. Real award charts. Real timing rules. No fluff about lifestyle credit cards.",
    habit: "Keep a one-page spreadsheet of your cards, their bonus categories, and their annual fees. Update it once a quarter. Most rewards leakage happens because people forget which card earns what. A spreadsheet you review during your bill pay session beats every memory trick.",
    bottomLine: "Optimized correctly, rewards can fund 3 to 5 international trips a year for a household that travels at all. This pillar is the difference between earning rewards by accident and engineering them on purpose.",
  },
  "building-credit": {
    hook: "Credit scores are not magic. They are a deterministic formula that rewards specific, observable behaviors over time. If you do the right things consistently for 12 to 24 months, your score will go up. If you do the wrong things, it will come down on a predictable schedule. This pillar gives you the working playbook for both starting from zero and rebuilding after damage.",
    who: "First-time card holders, parents teaching teens about credit, people rebuilding after a bankruptcy or major delinquency, and anyone who just wants to move from a 680 to a 780 should read these guides in order. They build on each other.",
    method: "We use FICO model weights as the anchor: payment history 35 percent, utilization 30 percent, length of history 15 percent, credit mix 10 percent, new credit 10 percent. Every recommendation in this pillar maps back to one of those buckets with the expected score impact named. No tricks. No tradelines. Just the actual mechanics.",
    habit: "Set every credit card to autopay the full statement balance from your checking account. Late payments are the single largest score destroyer and they happen almost exclusively because someone forgot, not because they could not pay. Autopay removes the failure mode entirely.",
    bottomLine: "A 760 plus credit score saves the average homeowner 100,000 dollars or more in mortgage interest over a 30-year loan compared to a 680 score. This pillar shows you exactly how to get there and how long it should take.",
  },
  "business-credit": {
    hook: "Most small business owners use a personal credit card for business expenses, miss out on category bonuses designed for B2B spending, and never build the business credit profile that would let them borrow without a personal guarantee. This pillar fixes all three at once.",
    who: "Sole proprietors, freelancers, LLC owners, and growing small businesses who want to separate finances, deduct correctly, and eventually qualify for vendor net terms and credit lines that do not touch personal credit. If you have an EIN and any business revenue, you can start.",
    method: "We treat business credit as a 12 to 24 month project: register correctly, get a DUNS number, open vendor accounts that report, then layer business credit cards on top. Each step has a clear output and a typical timeline. We also cover the tax treatment of rewards and which expenses are deductible in plain English, with the caveat that taxes vary and a CPA is worth the fee.",
    habit: "Run business expenses through a dedicated business card from the first dollar of revenue. This single habit makes bookkeeping trivial, builds business credit by default, and keeps the IRS line item clean if you are ever audited. Mixing personal and business spending is the single most common avoidable mistake.",
    bottomLine: "A business with an established credit profile can qualify for 50,000 dollar credit lines, vendor terms, and SBA financing without putting the owner on the hook personally. This pillar is the on-ramp to that outcome.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ pillar: string }>;
}): Promise<Metadata> {
  const { pillar } = await params;
  const meta = PILLAR_META[pillar];
  if (!meta) return { title: "Topic not found | Fintiex" };
  const desc =
    meta.description.length > 158
      ? meta.description.slice(0, 158) + "."
      : meta.description;
  return {
    title: `${meta.title} | Fintiex Learn`,
    description: desc,
    alternates: { canonical: `/learn/${pillar}` },
  };
}

export default async function PillarHubPage({
  params,
}: {
  params: Promise<{ pillar: string }>;
}) {
  const { pillar } = await params;
  const meta = PILLAR_META[pillar];
  if (!meta) notFound();

  const articles = loadPillarArticles(pillar);
  const longCopy = PILLAR_LONG_COPY[pillar];
  const chip = CHIP_VARIANTS[pillar] ?? "violet";
  const otherPillars = PILLAR_SLUGS.filter((p) => p !== pillar);

  return (
    <>
      <BreadcrumbListSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Learn", href: "/learn" },
          { name: meta.title, href: `/learn/${pillar}` },
        ]}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-bg border-b border-line">
        <div className="max-w-(--max-w-page) mx-auto px-6 pt-20 pb-16">
          <div className="font-mono text-xs uppercase tracking-wider text-mute mb-5 flex items-center gap-3">
            <Link href="/learn" className="u-link hover:text-ink">
              Learn
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-ink">{meta.title}</span>
          </div>
          <span className={`chip chip-${chip} mb-6`}>Pillar</span>
          <h1 className="font-display font-extrabold text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[1.03] tracking-[-0.03em] mb-6 max-w-3xl">
            {meta.title}.
          </h1>
          <p className="text-lg md:text-xl text-mute leading-relaxed max-w-2xl">
            {meta.description}
          </p>
        </div>
      </section>

      {/* INTRO */}
      {longCopy ? (
        <section className="border-b border-line bg-bg">
          <div className="max-w-3xl mx-auto px-6 py-16">
            <p className="text-[1.0625rem] leading-relaxed text-ink-soft mb-6">
              {longCopy.hook}
            </p>
            <p className="text-[1.0625rem] leading-relaxed text-ink-soft mb-6">
              {longCopy.who}
            </p>
            <p className="text-[1.0625rem] leading-relaxed text-ink-soft mb-6">
              {longCopy.method}
            </p>
            <p className="text-[1.0625rem] leading-relaxed text-ink-soft">
              {longCopy.habit}
            </p>
          </div>
        </section>
      ) : null}

      {/* ARTICLES GRID */}
      <section className="bg-bg-soft/60 border-b border-line">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-16">
          <div className="flex items-end justify-between gap-6 mb-10">
            <h2 className="font-display font-extrabold text-2xl md:text-3xl tracking-tight">
              Articles in this pillar
            </h2>
            <span className="font-mono text-xs uppercase tracking-wider text-mute tabular">
              {articles.length} guides
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {articles.map((a) => (
              <Link
                key={a.slug}
                href={`/learn/${pillar}/${a.slug}`}
                className="card p-6 block group flex flex-col"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`chip chip-${chip}`}>{meta.title}</span>
                  {a.readTime ? (
                    <span className="font-mono text-xs text-mute tabular">
                      {a.readTime} min read
                    </span>
                  ) : null}
                </div>
                <h3 className="font-display font-bold text-lg leading-snug tracking-tight mb-3">
                  {a.title}
                </h3>
                {a.description ? (
                  <p className="text-mute text-sm leading-relaxed flex-1">
                    {a.description}
                  </p>
                ) : null}
                <div className="mt-5 flex items-center justify-end">
                  <span className="text-mute text-lg group-hover:text-ink group-hover:translate-x-1 transition-all">
                    &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM LINE */}
      {longCopy ? (
        <section className="border-b border-line bg-bg">
          <div className="max-w-3xl mx-auto px-6 py-16">
            <div className="font-mono text-xs uppercase tracking-wider text-mute mb-4">
              The bottom line
            </div>
            <p className="font-display font-bold text-2xl md:text-3xl leading-snug tracking-tight text-ink">
              {longCopy.bottomLine}
            </p>
          </div>
        </section>
      ) : null}

      {/* RELATED PILLARS */}
      <section className="bg-bg-soft/60 border-b border-line">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-16">
          <h2 className="font-display font-extrabold text-2xl tracking-tight mb-10">
            Related pillars
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {otherPillars.map((p) => {
              const m = PILLAR_META[p];
              if (!m) return null;
              return (
                <Link key={p} href={`/learn/${p}`} className="card p-6 block group">
                  <div className="font-mono text-xs uppercase tracking-wider text-mute mb-3">
                    Pillar
                  </div>
                  <div className="font-display font-bold text-base tracking-tight mb-2 group-hover:text-violet">
                    {m.title}
                  </div>
                  <p className="text-mute text-xs leading-relaxed line-clamp-3">
                    {m.description}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="bg-lime border-y border-ink">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-xl">
            <div className="font-mono text-xs uppercase tracking-wider mb-3">
              Apply what you learned
            </div>
            <h3 className="font-display font-extrabold text-2xl md:text-3xl tracking-tight mb-2">
              Run the math on your real numbers.
            </h3>
            <p className="text-ink-soft text-base leading-relaxed">
              Our calculators take what these guides teach and turn it into a
              dollar figure for your situation.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/calculators" className="pill pill-ink">
              Open calculators &rarr;
            </Link>
            <Link href="/learn" className="pill pill-ghost">
              All guides
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
