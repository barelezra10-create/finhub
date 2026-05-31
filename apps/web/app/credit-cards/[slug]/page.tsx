import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  FAQPageSchema,
  BreadcrumbListSchema,
  FinancialProductSchema,
  type FAQItem,
} from "@/components/schemas";
import {
  cardCategories,
  fullCardName,
  formatPct,
  formatFeePct,
  formatAprRange,
  formatAnnualFee,
  formatCurrency,
  topRewardRate,
  bestRewardEntries,
  cardHref,
  CATEGORY_LABEL,
  CATEGORY_LISTICLE,
  type CardData,
} from "@/lib/cards";
import { loadCards, loadCard, relatedCards } from "@/lib/cards-server";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return loadCards().map((c) => ({ slug: c.slug }));
}

function truncate(str: string, max = 160): string {
  if (str.length <= max) return str;
  const cut = str.slice(0, max - 1);
  const space = cut.lastIndexOf(" ");
  return `${cut.slice(0, space > 80 ? space : cut.length - 3)}...`;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const card = loadCard(slug);
  if (!card) return { title: "Card Review | Fintiex" };
  const fullName = fullCardName(card);
  const title = `${fullName} Review | Fintiex`;
  const lede = buildLede(card);
  return {
    title: title.length > 60 ? `${card.name} Review | Fintiex` : title,
    description: truncate(lede, 160),
    alternates: { canonical: `/credit-cards/${card.slug}` },
  };
}

function buildLede(card: CardData): string {
  const fullName = fullCardName(card);
  const fee = card.annual_fee === 0 ? "no annual fee" : `a ${formatAnnualFee(card.annual_fee)} annual fee`;
  const reward = topRewardRate(card);
  const bonus = card.signup_bonus
    ? `, a ${card.signup_bonus} welcome offer`
    : "";
  return `The ${fullName} earns ${reward.toLowerCase()} with ${fee}${bonus}. Here is the full Fintiex review for 2026.`;
}

function whoItsForCopy(card: CardData): string {
  const cats = cardCategories(card);
  const credit = card.credit_score_required;
  const labels = cats.map((c) => CATEGORY_LABEL[c].toLowerCase());
  const segment =
    labels.length === 0
      ? "anyone shopping for a new card"
      : labels.length === 1
      ? `people who want a ${labels[0]} card`
      : `people who want a ${labels.slice(0, -1).join(", ")} or ${labels.at(-1)} card`;
  const scoreLine =
    credit.min === credit.recommended
      ? `Plan to have a FICO score around ${credit.recommended} or higher before applying`
      : `Most approvals land at FICO ${credit.min} and above, but issuers prefer scores near ${credit.recommended}`;
  return `The ${card.name} is built for ${segment}. ${scoreLine}. If your credit profile is below the minimum, look at one of the secured or student picks on our hub before applying to avoid an unnecessary hard inquiry.`;
}

function buildFaqs(card: CardData): FAQItem[] {
  const fullName = fullCardName(card);
  const items: FAQItem[] = [];

  // Q1: foreign tx
  items.push({
    question: `Does the ${card.name} have a foreign transaction fee?`,
    answer:
      card.foreign_tx_fee === 0
        ? `No. The ${fullName} charges no foreign transaction fees, so it works well for travel abroad. You pay the same network exchange rate you would get at home.`
        : `Yes. The ${fullName} charges a ${formatFeePct(card.foreign_tx_fee)} foreign transaction fee on purchases made outside the United States. If you travel internationally often, pair this card with a no-foreign-fee travel card.`,
  });

  // Q2: credit score
  items.push({
    question: `What credit score do I need for the ${card.name}?`,
    answer:
      card.credit_score_required.min === card.credit_score_required.recommended
        ? `Plan to have a FICO score of at least ${card.credit_score_required.recommended} before you apply. Issuers also look at income, debt-to-income ratio, and existing accounts with the bank.`
        : `Approvals typically start around a FICO score of ${card.credit_score_required.min}, but ${card.issuer} prefers ${card.credit_score_required.recommended} and above. Income, debt-to-income ratio, and existing relationships with the issuer also factor in.`,
  });

  // Q3: signup bonus
  if (card.signup_bonus) {
    items.push({
      question: `How much is the ${card.name} signup bonus?`,
      answer: card.signup_bonus_spend
        ? `New cardholders earn ${card.signup_bonus} after spending ${formatCurrency(card.signup_bonus_spend)} in the first few months${
            card.signup_bonus_value_usd
              ? `. Fintiex values that at about ${formatCurrency(card.signup_bonus_value_usd)} based on current redemption rates`
              : ""
          }. Match the bonus to a real planned purchase so you do not overspend chasing it.`
        : `The ${fullName} offers ${card.signup_bonus}${
            card.signup_bonus_value_usd
              ? ` worth roughly ${formatCurrency(card.signup_bonus_value_usd)} in the first year`
              : ""
          }. Activation rules vary by issuer, so read the terms before you apply.`,
    });
  } else {
    items.push({
      question: `Does the ${card.name} have a welcome offer?`,
      answer: `No. The ${fullName} does not run a traditional signup bonus right now. The ongoing rewards rate is the main reason to apply, not a one-time promotion.`,
    });
  }

  // Q4: intro APR
  if (card.apr_intro === 0 && card.apr_intro_months > 0) {
    items.push({
      question: `Does the ${card.name} have an intro APR?`,
      answer: `Yes. The ${fullName} offers a ${card.apr_intro_months}-month 0% intro APR. After the promo period ends, the standard variable APR of ${formatAprRange(card.apr_purchase)} applies. Pay off the balance before the intro window closes to avoid back interest.`,
    });
  } else {
    items.push({
      question: `Does the ${card.name} have a 0% intro APR offer?`,
      answer: `No. The ${fullName} does not currently offer a 0% intro APR period. The standard variable purchase APR is ${formatAprRange(card.apr_purchase)}. If you need a 0% intro card for a big purchase or balance transfer, check our 0% APR picks instead.`,
    });
  }

  // Q5: annual fee
  items.push({
    question: `How much is the annual fee on the ${card.name}?`,
    answer:
      card.annual_fee === 0
        ? `${formatAnnualFee(card.annual_fee)}. The ${fullName} has no annual fee, so the math is simple: every dollar of rewards is pure savings.`
        : `${formatAnnualFee(card.annual_fee)} per year. To break even you need to earn enough rewards and credits to cover that fee. We walk through the math in the rewards detail section above.`,
  });

  // Q6: how good
  items.push({
    question: `Is the ${card.name} worth it?`,
    answer: `Fintiex rates the ${fullName} ${card.rating.toFixed(1)} out of 5 for 2026. It is best for ${
      cardCategories(card)
        .map((c) => CATEGORY_LABEL[c].toLowerCase())
        .join(" and ") || "everyday spending"
    }. Compare against our top picks in each category before you apply to make sure it matches your spending pattern.`,
  });

  return items;
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const card = loadCard(slug);
  if (!card) notFound();

  const fullName = fullCardName(card);
  const faqs = buildFaqs(card);
  const lede = buildLede(card);
  const cats = cardCategories(card);
  const primaryCat = cats[0];
  const related = relatedCards(card, 4);
  const rewards = bestRewardEntries(card);
  const maxRate = rewards[0]?.value ?? 1;
  const rewardUnit = card.rewards_type === "cashback" ? "%" : "x";

  return (
    <article className="bg-bg">
      <FAQPageSchema items={faqs} />
      <BreadcrumbListSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Credit Cards", href: "/credit-cards" },
          { name: card.name, href: `/credit-cards/${card.slug}` },
        ]}
      />
      <FinancialProductSchema
        name={fullName}
        description={lede}
        slug={`/credit-cards/${card.slug}`}
        brandName={card.issuer}
        category="CreditCard"
        apr={`${card.apr_purchase.min} to ${card.apr_purchase.max}`}
        ratingValue={card.rating}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-bg border-b border-line">
        <div className="hero-blob hero-blob-1" />
        <div className="relative max-w-(--max-w-page) mx-auto px-6 pt-16 pb-12">
          <div className="mb-4 text-xs font-mono text-mute uppercase tracking-wider">
            <Link href="/credit-cards" className="u-link">
              Credit Cards
            </Link>
            {primaryCat ? (
              <>
                {" / "}
                <Link href={CATEGORY_LISTICLE[primaryCat]} className="u-link">
                  {CATEGORY_LABEL[primaryCat]}
                </Link>
              </>
            ) : null}
          </div>
          <span className="chip chip-lime mb-5">
            <span className="pulse-dot" /> Credit card review
          </span>
          <h1 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight leading-tight mb-5 max-w-3xl">
            {fullName} Review
          </h1>
          <div className="flex flex-wrap items-center gap-2 mb-5">
            <span className="chip chip-mute">{card.issuer}</span>
            <span className="chip chip-mute">{card.network}</span>
            {cats.map((c) => (
              <span key={c} className="chip chip-violet">
                {CATEGORY_LABEL[c]}
              </span>
            ))}
          </div>
          <p className="text-lg text-mute max-w-2xl leading-relaxed mb-6">
            {fullName} earned{" "}
            <span className="font-mono tabular font-semibold text-ink">
              {card.rating.toFixed(1)} / 5
            </span>{" "}
            in our 2026 review. {lede}
          </p>
          <div className="text-xs font-mono text-mute uppercase tracking-wider mb-6">
            By the Fintiex Card Desk &middot; Updated {card.last_updated}
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={card.application_url}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="pill pill-lime"
            >
              Apply at {card.issuer} <span aria-hidden>↗</span>
            </a>
            <Link href="/credit-cards" className="pill pill-ghost">
              Compare all cards
            </Link>
          </div>
        </div>
      </section>

      {/* TL;DR STAT CARD */}
      <section className="max-w-(--max-w-page) mx-auto px-6 py-10">
        <div className="card-flush p-8" style={{ boxShadow: "var(--shadow-pop)" }}>
          <div className="chip chip-ink mb-6">TL;DR</div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <Stat label="Annual fee" value={formatAnnualFee(card.annual_fee)} mono />
            <Stat
              label="Signup bonus"
              value={card.signup_bonus_value_usd ? formatCurrency(card.signup_bonus_value_usd) : card.signup_bonus ? "Yes" : "None"}
              mono
            />
            <Stat label="Top reward rate" value={topRewardRate(card)} mono />
            <Stat
              label="Intro APR"
              value={
                card.apr_intro === 0 && card.apr_intro_months > 0
                  ? `0% for ${card.apr_intro_months} mo`
                  : "None"
              }
              mono
            />
          </div>
          <div className="mt-6 pt-6 border-t border-line grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
            <KV label="Issuer" value={card.issuer} />
            <KV label="Network" value={card.network} />
            <KV label="Min credit score" value={String(card.credit_score_required.min)} />
            <KV label="Fintiex rating" value={`${card.rating.toFixed(1)} / 5`} />
          </div>
        </div>
      </section>

      {/* PROS / CONS */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card p-7">
            <div className="chip chip-lime mb-5">Pros</div>
            <ul className="space-y-3 text-[0.9375rem]">
              {card.perks.map((perk) => (
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
              {card.drawbacks.map((drawback) => (
                <li key={drawback} className="flex gap-3">
                  <span className="text-rose font-bold">-</span>
                  <span>{drawback}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* REWARDS DETAIL */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <h2 className="font-display font-bold text-3xl tracking-tight mb-6">Rewards detail</h2>
        {rewards.length > 0 && rewards.some((r) => r.value > 0) ? (
          <div className="card p-7">
            <div className="space-y-4">
              {rewards.map((r) => {
                const widthPct = maxRate > 0 ? (r.value / maxRate) * 100 : 0;
                return (
                  <div key={r.key}>
                    <div className="flex items-baseline justify-between mb-2 gap-4">
                      <div className="font-display font-semibold text-base capitalize">
                        {r.label}
                      </div>
                      <div className="font-mono tabular font-semibold text-sm">
                        {r.value}
                        {rewardUnit}
                      </div>
                    </div>
                    <div className="h-2 w-full rounded-full bg-bg-soft overflow-hidden">
                      <div
                        className="h-full bg-lime rounded-full"
                        style={{ width: `${Math.max(widthPct, 4)}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
            {card.points_value_cents != null && card.rewards_type === "points" ? (
              <p className="text-mute text-sm mt-6 leading-relaxed">
                Fintiex values {card.issuer} points at about{" "}
                <span className="font-mono tabular font-semibold text-ink">
                  {card.points_value_cents.toFixed(2)} cents
                </span>{" "}
                each, based on current transfer-partner redemption rates. Your real value
                will depend on how you redeem.
              </p>
            ) : null}
          </div>
        ) : (
          <div className="card p-7">
            <p className="text-mute leading-relaxed">
              The {fullName} is built for credit building, not rewards. There is no cash
              back or points program attached to spending. The value here is in reporting
              positive payment history to all three credit bureaus while you rebuild your
              score.
            </p>
          </div>
        )}
      </section>

      {/* RATES AND FEES */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <h2 className="font-display font-bold text-3xl tracking-tight mb-6">Rates and fees</h2>
        <div className="card-flush overflow-hidden">
          <FeeRow label="Annual fee" value={formatAnnualFee(card.annual_fee)} />
          <FeeRow
            label="Purchase APR"
            value={formatAprRange(card.apr_purchase)}
            note="Variable, based on prime rate and creditworthiness"
          />
          <FeeRow
            label="Intro APR"
            value={
              card.apr_intro === 0 && card.apr_intro_months > 0
                ? `0% for ${card.apr_intro_months} months`
                : "Not offered"
            }
          />
          <FeeRow
            label="Balance transfer APR"
            value={formatAprRange(card.apr_balance_transfer)}
          />
          <FeeRow label="Cash advance APR" value={formatPct(card.apr_cash_advance)} />
          <FeeRow
            label="Balance transfer fee"
            value={formatFeePct(card.balance_transfer_fee)}
            note={card.balance_transfer_fee > 0 ? "Or $5 minimum, whichever is greater" : undefined}
          />
          <FeeRow
            label="Foreign transaction fee"
            value={formatFeePct(card.foreign_tx_fee)}
            last
          />
        </div>
      </section>

      {/* MID-PAGE PREMIUM CTA */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <aside className="not-prose">
          <div className="relative overflow-hidden rounded-3xl border border-line bg-ink text-bg p-7 md:p-10">
            <div
              className="absolute -top-24 -right-24 w-72 h-72 rounded-full opacity-30 blur-3xl pointer-events-none bg-lime"
              aria-hidden
            />
            <div className="relative grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 md:gap-8 items-center">
              <div className="min-w-0">
                <div className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.18em] text-lime mb-3">
                  <span className="pulse-dot" style={{ background: "var(--color-lime)" }} />
                  Editor reviewed
                </div>
                <div className="font-display font-extrabold text-2xl md:text-3xl tracking-tight leading-tight mb-2">
                  Apply for the {card.name} at {card.issuer}
                </div>
                <p className="text-white/65 text-[0.9375rem] leading-relaxed max-w-md">
                  Takes about 5 minutes online. Most applicants get an instant decision.
                </p>
              </div>
              <div className="shrink-0 md:text-right">
                <a
                  href={card.application_url}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-lime text-ink font-display font-bold text-base px-6 py-4 rounded-full hover:bg-white transition-colors duration-150 whitespace-nowrap"
                >
                  Apply at {card.issuer}
                  <span aria-hidden className="text-lg">
                    ↗
                  </span>
                </a>
                <div className="mt-3 text-[11px] font-mono uppercase tracking-[0.14em] text-white/45">
                  Opens at {new URL(card.application_url).hostname.replace(/^www\./, "")}
                </div>
              </div>
            </div>
          </div>
        </aside>
      </section>

      {/* WHO IT IS FOR */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <div className="card p-7 border-l-4 border-lime">
          <div className="chip chip-lime mb-4">Who it&apos;s for</div>
          <p className="text-[1.0625rem] leading-relaxed">{whoItsForCopy(card)}</p>
          {primaryCat ? (
            <p className="text-mute text-sm mt-4">
              Not sure this is the right fit? See our{" "}
              <Link href={CATEGORY_LISTICLE[primaryCat]} className="u-link">
                best {CATEGORY_LABEL[primaryCat].toLowerCase()} cards
              </Link>{" "}
              roundup.
            </p>
          ) : null}
        </div>
      </section>

      {/* RELATED CARDS */}
      {related.length > 0 ? (
        <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
          <h2 className="font-display font-bold text-3xl tracking-tight mb-6">
            Compare with similar cards
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {related.map((r) => (
              <Link key={r.slug} href={cardHref(r.slug)} className="card p-5 block group">
                <div className="text-xs font-mono uppercase tracking-wider text-mute mb-2">
                  {r.issuer}
                </div>
                <div className="font-display font-bold text-base mb-2 tracking-tight">
                  {r.name}
                </div>
                <div className="text-sm text-mute leading-relaxed mb-3">
                  {topRewardRate(r)}
                </div>
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="tabular text-ink font-semibold">
                    {formatAnnualFee(r.annual_fee)} fee
                  </span>
                  <span className="text-mute group-hover:text-ink group-hover:translate-x-1 transition-all">
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      ) : null}

      {/* FAQ */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <h2 className="font-display font-bold text-3xl tracking-tight mb-8">
          Frequently asked questions
        </h2>
        <div className="space-y-6 max-w-3xl">
          {faqs.map((faq) => (
            <div key={faq.question} className="border-b border-line pb-6">
              <div className="font-display font-semibold text-lg mb-2">{faq.question}</div>
              <div className="text-mute text-[0.9375rem] leading-relaxed">{faq.answer}</div>
            </div>
          ))}
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="bg-lime border-y border-ink">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-14 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight max-w-xl leading-tight">
              Ready to apply for the {card.name}?
            </h2>
            <p className="text-ink/70 mt-2">
              Takes about 5 minutes. Most applicants see a decision in seconds.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={card.application_url}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="pill pill-ink"
            >
              Apply at {card.issuer} <span aria-hidden>↗</span>
            </a>
            <Link href="/credit-cards" className="pill pill-ghost">
              Compare other cards
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
      <div className={`font-display font-extrabold text-2xl ${mono ? "tabular" : ""}`}>
        {value}
      </div>
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

function FeeRow({
  label,
  value,
  note,
  last = false,
}: {
  label: string;
  value: string;
  note?: string;
  last?: boolean;
}) {
  return (
    <div
      className={`grid grid-cols-12 gap-4 px-6 py-4 items-center ${
        last ? "" : "border-b border-line-soft"
      }`}
    >
      <div className="col-span-6 md:col-span-4 font-mono text-xs uppercase tracking-wider text-mute">
        {label}
      </div>
      <div className="col-span-6 md:col-span-4 font-display font-semibold text-base tabular">
        {value}
      </div>
      {note ? (
        <div className="col-span-12 md:col-span-4 text-xs text-mute">{note}</div>
      ) : (
        <div className="hidden md:block md:col-span-4" />
      )}
    </div>
  );
}
