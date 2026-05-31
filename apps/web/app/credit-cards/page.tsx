import Link from "next/link";
import type { Metadata } from "next";
import { FAQPageSchema, BreadcrumbListSchema, type FAQItem } from "@/components/schemas";
import {
  fullCardName,
  formatAnnualFee,
  topRewardRate,
  SYNTHETIC_CATEGORIES,
  type CardData,
  type SyntheticCategory,
} from "@/lib/cards";
import { loadCards, cardsByCategory } from "@/lib/cards-server";
import { CardsExplorer } from "./cards-explorer";

export const metadata: Metadata = {
  title: "Best Credit Cards 2026: Cash Back, Travel, 0% APR, Balance Transfer | Fintiex",
  description:
    "Compare 50 credit cards across cash back, travel, 0% APR, balance transfer, business, student, and secured. Independent rankings updated weekly.",
  alternates: { canonical: "/credit-cards" },
};

const subPages: { label: string; href: string; detail: string; category: SyntheticCategory }[] = [
  { label: "Cash Back", href: "/credit-cards/cash-back", detail: "Flat-rate and rotating-category cash back cards.", category: "cashback" },
  { label: "Travel Rewards", href: "/credit-cards/travel", detail: "Points and miles for flights, hotels, and transfers.", category: "travel" },
  { label: "0% APR", href: "/credit-cards/zero-apr", detail: "Intro APR cards for large purchases over time.", category: "0-apr" },
  { label: "Balance Transfer", href: "/credit-cards/balance-transfer", detail: "Move high-rate debt to 0% for up to 21 months.", category: "balance-transfer" },
  { label: "No Annual Fee", href: "/credit-cards/no-fee", detail: "Strong rewards with zero annual cost.", category: "no-annual-fee" },
  { label: "Business Cards", href: "/credit-cards/business", detail: "Expense management and big bonuses for businesses.", category: "business" },
  { label: "Student Cards", href: "/credit-cards/student", detail: "Build credit history with forgiving approval standards.", category: "student" },
  { label: "Secured Cards", href: "/credit-cards/secured", detail: "Rebuild credit with a refundable security deposit.", category: "secured" },
];

const faqItems: FAQItem[] = [
  {
    question: "How is credit card APR calculated on a monthly bill?",
    answer:
      "Your daily periodic rate is your APR divided by 365. The issuer multiplies that rate by your average daily balance for the billing period to get your interest charge. If you pay your full statement balance by the due date each month, you pay zero interest regardless of your APR.",
  },
  {
    question: "Will applying for a new card hurt my credit score?",
    answer:
      "A new card application triggers a hard inquiry, typically dropping your score 2 to 5 points for a few months. The card also lowers your average account age. That said, a new card increases your total available credit, which improves your utilization ratio. The net effect is usually neutral or slightly positive within 6 to 12 months.",
  },
  {
    question: "How many credit cards is too many?",
    answer:
      "There is no universal limit. What matters is your ability to manage payments and keep utilization low across all cards. Most credit-savvy consumers hold 3 to 5 cards covering different categories: one flat-rate, one travel or dining, one 0% APR option. Adding more cards is fine as long as you do not carry balances.",
  },
  {
    question: "Is an annual fee ever worth paying?",
    answer:
      "Yes, if the rewards and credits exceed the fee. The Chase Sapphire Preferred costs $95 but generates far more in travel value if you use the dining and travel multipliers. The Amex Gold costs $325 but offers up to $240 in statement credits, making the effective fee much lower if you use them. Model your actual spending before deciding.",
  },
  {
    question: "Statement balance vs minimum vs full balance: what should I pay?",
    answer:
      "Pay the full statement balance every month to avoid interest. The minimum payment keeps you in good standing but accrues interest on the remainder at your full APR. Never pay less than the minimum or you risk late fees and a credit score penalty. The statement balance (not the current balance) is the number to pay to avoid interest.",
  },
  {
    question: "Does adding someone as an authorized user help their credit?",
    answer:
      "Yes, if the primary account holder has a long, clean history on that card. The account typically appears on the authorized user's credit report, boosting their average account age and available credit. The primary holder remains fully responsible for all charges. This is a common strategy for parents helping young adults build credit.",
  },
];

export default function Page() {
  const allCards = loadCards();

  const topByCat: Record<SyntheticCategory, CardData | undefined> = Object.fromEntries(
    SYNTHETIC_CATEGORIES.map((c) => [c, cardsByCategory(c)[0]]),
  ) as Record<SyntheticCategory, CardData | undefined>;

  return (
    <>
      <FAQPageSchema items={faqItems} />
      <BreadcrumbListSchema
        items={[{ name: "Home", href: "/" }, { name: "Credit Cards", href: "/credit-cards" }]}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-bg">
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
        <div className="relative max-w-(--max-w-page) mx-auto px-6 pt-20 pb-16">
          <span className="chip chip-violet mb-6">
            <span className="pulse-dot" /> {allCards.length} cards reviewed
          </span>
          <h1 className="font-display font-extrabold text-[clamp(2.5rem,6vw,5rem)] leading-[1.02] tracking-[-0.03em] mb-6 max-w-3xl">
            Cards picked on math, not marketing.
          </h1>
          <p className="text-lg md:text-xl text-mute leading-relaxed max-w-2xl mb-8">
            We model real spending patterns against published rewards rates and annual fees. The winner is the card that puts the most money back in your pocket, not the one with the largest advertising budget.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/credit-cards/cash-back" className="pill pill-ink">
              Best cash back cards
              <span aria-hidden>→</span>
            </Link>
            <Link href="/credit-cards/travel" className="pill pill-ghost">
              Best travel cards
            </Link>
          </div>
        </div>
      </section>

      {/* RATE SNAPSHOT */}
      <section className="border-y border-line bg-bg-soft/60">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-display font-bold text-2xl tracking-tight">
              Category leaders today
            </h2>
            <span className="text-xs font-mono text-mute">
              {allCards.length} cards &middot; Reviewed weekly
            </span>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <SnapshotTile
              label="Top cash back"
              card={topByCat.cashback}
              metric={topByCat.cashback ? topRewardRate(topByCat.cashback) : "N/A"}
            />
            <SnapshotTile
              label="Top travel"
              card={topByCat.travel}
              metric={
                topByCat.travel?.signup_bonus
                  ? topByCat.travel.signup_bonus
                  : topByCat.travel
                  ? topRewardRate(topByCat.travel)
                  : "N/A"
              }
            />
            <SnapshotTile
              label="Longest 0% APR"
              card={getLongestIntro(allCards)}
              metric={
                getLongestIntro(allCards)
                  ? `${getLongestIntro(allCards)!.apr_intro_months} mo`
                  : "N/A"
              }
            />
            <SnapshotTile
              label="Top no annual fee"
              card={topByCat["no-annual-fee"]}
              metric={
                topByCat["no-annual-fee"]
                  ? topRewardRate(topByCat["no-annual-fee"])
                  : "N/A"
              }
            />
          </div>
        </div>
      </section>

      {/* INTERACTIVE EXPLORER */}
      <section className="pt-12 pb-4">
        <div className="max-w-(--max-w-page) mx-auto px-6 mb-2">
          <span className="chip chip-mute mb-4">
            <span className="pulse-dot" /> Browse all cards
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-tight">
            Filter {allCards.length} cards by what you actually care about.
          </h2>
        </div>
        <CardsExplorer cards={allCards} />
      </section>

      {/* EXPLAINER */}
      <section className="bg-bg-soft/60 border-y border-line">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-20">
          <div className="grid grid-cols-12 gap-10">
            <div className="col-span-12 lg:col-span-4">
              <span className="chip chip-mute mb-4">How it works</span>
              <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-tight mb-6">
                APR vs rewards rate. When 0% wins. Balance transfer math.
              </h2>
              <p className="text-mute leading-relaxed">
                The three decisions most people get wrong.
              </p>
            </div>
            <div className="col-span-12 lg:col-span-8 space-y-8 text-base leading-relaxed">
              <div>
                <h3 className="font-display font-bold text-xl mb-2 tracking-tight">
                  APR vs rewards rate: the core trade-off
                </h3>
                <p className="text-mute">
                  Rewards cards carry higher standard APRs than no-frills cards, typically 19 to 27 percent vs 14 to 20 percent. If you carry a balance even occasionally, the interest you pay will quickly exceed any rewards you earn. Rewards cards only make financial sense if you pay the full statement balance every single month. If you carry balances, a low-APR card with no rewards will cost you less over time.
                </p>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl mb-2 tracking-tight">
                  When a 0% APR card is the right tool
                </h3>
                <p className="text-mute">
                  A 0% intro APR card is the right choice for a known large purchase you can pay off within the promotional window. Divide the total cost by the number of months in the intro period to find your required monthly payment. If that number fits your budget, the card is essentially a free loan. Watch for deferred interest traps on store cards: with deferred interest, you owe all back-interest if the balance is not fully paid by the deadline.
                </p>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl mb-2 tracking-tight">
                  Balance transfer math: is it worth it?
                </h3>
                <p className="text-mute">
                  A balance transfer moves existing high-rate debt to a new card with a 0% intro period. The typical fee is 3 to 5 percent of the transferred balance. Calculate your break-even: if your current card charges 22 percent APR on a $5,000 balance, you are paying roughly $1,100 in interest per year. A 5 percent transfer fee on $5,000 is $250, which you recoup in under 3 months. The key risk is accumulating new spending on the old card while paying down the transfer, which defeats the purpose.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SUB-PAGE LINKS */}
      <section className="max-w-(--max-w-page) mx-auto px-6 py-20">
        <div className="mb-10">
          <span className="chip chip-mute mb-4">Explore</span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight">
            Cards by category.
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {subPages.map((p) => (
            <Link key={p.href} href={p.href} className="card p-6 block group">
              <div className="flex items-center justify-between mb-3">
                <span className="chip chip-violet">{p.label}</span>
                <span className="text-mute text-lg group-hover:text-ink group-hover:translate-x-1 transition-all">
                  →
                </span>
              </div>
              <div className="text-sm text-mute leading-relaxed">{p.detail}</div>
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
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="bg-lime border-y border-ink">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-14 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight max-w-xl leading-tight">
              See how fast you can pay off your card debt.
            </h2>
            <p className="text-ink/70 mt-2">
              Credit card payoff calculator. No signup, no nonsense.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/calculators/debt-payoff" className="pill pill-ink">
              Card payoff calculator
              <span aria-hidden>→</span>
            </Link>
            <Link href="/credit-cards/balance-transfer" className="pill pill-ghost">
              Balance transfer picks
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function getLongestIntro(cards: CardData[]): CardData | undefined {
  return cards
    .filter((c) => c.apr_intro === 0 && (c.apr_intro_months ?? 0) > 0)
    .sort((a, b) => (b.apr_intro_months ?? 0) - (a.apr_intro_months ?? 0))[0];
}

function SnapshotTile({
  label,
  card,
  metric,
}: {
  label: string;
  card: CardData | undefined;
  metric: string;
}) {
  return (
    <div className="card p-5">
      <div className="text-xs text-mute mb-2">{label}</div>
      <div className="font-display font-extrabold text-2xl md:text-3xl tabular tracking-tight mb-2 truncate">
        {metric}
      </div>
      <div className="text-xs text-mute mt-2 line-clamp-2">
        {card ? `${fullCardName(card)} · ${formatAnnualFee(card.annual_fee)} annual fee` : "No card available"}
      </div>
    </div>
  );
}

