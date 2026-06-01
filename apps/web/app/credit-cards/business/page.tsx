import Link from "next/link";
import type { Metadata } from "next";
import { FAQPageSchema, BreadcrumbListSchema, type FAQItem } from "@/components/schemas";
import { CardArt } from "@/components/card-art";
import { cardsByCategory } from "@/lib/cards-server";
import {
  formatAnnualFee,
  topRewardRate,
  type CardData,
} from "@/lib/cards";

export const metadata: Metadata = {
  title: "Best Business Credit Cards 2026: Big Bonuses, Real Tools | Fintiex",
  description:
    "The business credit cards that pay off for owners and operators. Big signup bonuses, expense tools, and category multipliers ranked by first-year value.",
  alternates: { canonical: "/credit-cards/business" },
};

interface CardPick {
  rank: number;
  name: string;
  brand: string;
  tag: string;
  perk: string;
  detail: string;
  bestFor: string;
  annualFee: string;
  signupBonus: string;
  href: string;
}

const picks: CardPick[] = [
  {
    rank: 1,
    name: "Chase Ink Business Preferred",
    brand: "ink-business-preferred",
    tag: "Best overall",
    perk: "100,000 points after $8,000 spend in 3 months",
    detail:
      "3x points on the first $150,000 spent each year in travel, shipping, internet, cable, phone, and online ads. 1x on everything else. Points transfer 1:1 to airline and hotel partners through Chase Ultimate Rewards.",
    bestFor: "Owners who run digital ads, ship product, or travel for client work and want premium point value.",
    annualFee: "$95",
    signupBonus: "100,000 points (worth roughly $1,250 toward travel through Chase)",
    href: "/credit-cards/chase-ink-business-preferred",
  },
  {
    rank: 2,
    name: "American Express Business Gold",
    brand: "Amex Business Gold",
    tag: "Best for flexible categories",
    perk: "4x on top two spending categories each month",
    detail:
      "Earn 4x Membership Rewards points on the two categories where you spend the most each billing cycle, on the first $150,000 in combined annual spend. Categories include U.S. advertising, technology, gas, dining, and shipping.",
    bestFor: "Businesses with shifting spend patterns who want the card to flex with the month.",
    annualFee: "$375",
    signupBonus: "70,000 Membership Rewards points after $10,000 spend in 3 months",
    href: "#",
  },
  {
    rank: 3,
    name: "Capital One Spark Cash Plus",
    brand: "Capital One Spark Cash Plus",
    tag: "Best flat-rate cash",
    perk: "2% cash back on every purchase",
    detail:
      "Unlimited 2% on all spending with no category caps and no foreign transaction fees. Pay-in-full charge card, so the entire balance is due each month. Annual fee is refunded if you spend $150,000 in a year.",
    bestFor: "Operators with high, consistent spend who want simple math and zero category tracking.",
    annualFee: "$150 (refundable at $150K spend)",
    signupBonus: "$2,000 cash back after $30,000 spend in 3 months",
    href: "#",
  },
  {
    rank: 4,
    name: "Chase Ink Business Cash",
    brand: "Chase Ink Business Cash",
    tag: "Best no-fee",
    perk: "5% cash back on office supplies and internet, cable, phone",
    detail:
      "Earn 5% on the first $25,000 spent annually at office supply stores and on internet, cable, and phone services. 2% on the first $25,000 in combined gas and restaurant purchases. 1% on everything else.",
    bestFor: "Small offices with steady recurring bills who want strong rewards at a $0 annual cost.",
    annualFee: "$0",
    signupBonus: "$750 cash back after $6,000 spend in 3 months",
    href: "#",
  },
  {
    rank: 5,
    name: "American Express Blue Business Plus",
    brand: "Amex Blue Business Plus",
    tag: "Best simple points",
    perk: "2x Membership Rewards on the first $50,000 each year",
    detail:
      "Flat 2x points on every purchase up to $50,000 annually, then 1x. No annual fee and access to Amex transfer partners makes this one of the strongest no-fee point cards on the market.",
    bestFor: "Sole proprietors and side hustlers who want premium points without paying a fee.",
    annualFee: "$0",
    signupBonus: "15,000 Membership Rewards points after $3,000 spend in 3 months",
    href: "#",
  },
];

const faqItems: FAQItem[] = [
  {
    question: "Do I need an LLC or EIN to apply for a business credit card?",
    answer:
      "No. Sole proprietors can apply using a Social Security number and report income from the business. Issuers ask for the legal business name, but a sole proprietor can list their personal name. An EIN is required only if you have employees or operate a multi-member entity.",
  },
  {
    question: "Will a business card show up on my personal credit report?",
    answer:
      "Most major issuers (Chase, Amex, Capital One) report business cards to commercial bureaus only, not personal credit bureaus, unless the account becomes seriously delinquent. Capital One is the exception: it reports business card activity to personal credit. The hard inquiry from the application will hit your personal credit either way.",
  },
  {
    question: "What credit score do I need for a top business card?",
    answer:
      "Issuers typically want a personal FICO score of 700 or higher for premium business cards like Ink Business Preferred or Business Gold. The Ink Business Cash and Blue Business Plus are slightly more flexible. Consumer Financial Protection Bureau guidance reminds applicants that business credit decisions still rely heavily on personal credit history for new businesses.",
  },
  {
    question: "Can I deduct credit card rewards as taxable income?",
    answer:
      "No. The IRS treats credit card rewards earned on business spending as a rebate that reduces the deductible expense, not income. So if you buy $1,000 in office supplies and earn $20 cash back, you deduct $980. Sign-up bonuses tied to a spending requirement are generally treated the same way.",
  },
  {
    question: "Are personal guarantees required on business cards?",
    answer:
      "Almost always, yes. Even when the card is in the business name, the owner usually signs a personal guarantee, which means you are personally on the hook if the business cannot pay. Pure corporate cards without a personal guarantee exist (Brex, Ramp), but they generally require significant business cash reserves to qualify.",
  },
  {
    question: "How many business cards should I have?",
    answer:
      "Two or three works for most businesses. Pair a category multiplier card (Ink Preferred or Business Gold) with a flat-rate card (Spark Cash Plus or Blue Business Plus) so every dollar of spending earns at the highest possible rate. Add a no-fee fallback for cycles when budgets tighten.",
  },
];

function BusinessCardRow({ card, rank }: { card: CardData; rank: number }) {
  // Optional editor tag pulled from the picks array above, matched by slug.
  const editorPick = picks.find((p) => p.brand === card.slug);
  const tag = editorPick?.tag;
  return (
    <div className="card-flush p-6 md:p-8 group hover:border-ink transition-colors duration-200">
      <div className="grid grid-cols-1 md:grid-cols-[280px_1fr_auto] gap-6 md:gap-8 items-start">
        {/* Card art */}
        <div className="shrink-0 flex justify-center md:justify-start">
          <CardArt card={card} width={280} />
        </div>

        {/* Body */}
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="font-mono text-xs text-mute">#{rank}</span>
            <h3 className="font-display font-bold text-xl md:text-2xl tracking-tight">
              {card.name}
            </h3>
            {tag && <span className="chip chip-lime">{tag}</span>}
          </div>
          <div className="text-xs font-mono uppercase tracking-wider text-mute mb-3">
            {card.issuer} · {card.network}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 max-w-2xl">
            <Spec label="Annual fee" value={formatAnnualFee(card.annual_fee ?? 0)} />
            <Spec label="Top reward" value={topRewardRate(card)} />
            <Spec
              label="Signup bonus"
              value={
                card.signup_bonus_value_usd != null
                  ? `$${card.signup_bonus_value_usd.toLocaleString()}`
                  : card.signup_bonus ?? "None"
              }
            />
            <Spec
              label="Min credit"
              value={card.credit_score_required?.min ? String(card.credit_score_required.min) : "Varies"}
            />
          </div>

          {card.signup_bonus && (
            <p className="text-sm text-ink-soft mb-3 max-w-2xl">
              <span className="font-semibold text-ink">Bonus: </span>
              {card.signup_bonus}
              {card.signup_bonus_spend ? ` after $${card.signup_bonus_spend.toLocaleString()} in spend` : ""}
            </p>
          )}

          <ul className="space-y-1.5 text-[0.9375rem] text-ink-soft max-w-2xl">
            {card.perks.slice(0, 3).map((p) => (
              <li key={p} className="flex gap-2">
                <span className="text-mint font-bold shrink-0">+</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Rating + CTAs */}
        <div className="md:text-right md:min-w-[200px] shrink-0 flex flex-col md:items-end gap-4">
          <div>
            <div className="text-[10px] font-mono uppercase tracking-wider text-mute mb-1">
              Fintiex score
            </div>
            <div className="font-display font-extrabold text-4xl md:text-5xl tabular leading-none text-ink">
              {card.rating.toFixed(1)}
            </div>
            <div className="text-xs text-mute mt-1">out of 5</div>
          </div>
          <div className="flex md:flex-col gap-2 md:gap-2 w-full md:w-auto">
            <a
              href={card.application_url}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="pill pill-ink"
            >
              Apply at {card.issuer.split(" ")[0]} <span aria-hidden>↗</span>
            </a>
            <Link href={`/credit-cards/${card.slug}`} className="pill pill-ghost">
              Read review
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-[10px] font-mono uppercase tracking-wider text-mute mb-0.5">
        {label}
      </div>
      <div className="font-display font-semibold text-sm tabular leading-tight">
        {value}
      </div>
    </div>
  );
}

export default function Page() {
  const businessCards = cardsByCategory("business");
  return (
    <>
      <FAQPageSchema items={faqItems} />
      <BreadcrumbListSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Credit Cards", href: "/credit-cards" },
          { name: "Business", href: "/credit-cards/business" },
        ]}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-bg">
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
        <div className="relative max-w-(--max-w-page) mx-auto px-6 pt-20 pb-16">
          <span className="chip chip-lime mb-6">
            <span className="pulse-dot" /> 5 picks reviewed weekly
          </span>
          <h1 className="font-display font-extrabold text-[clamp(2.5rem,6vw,5rem)] leading-[1.02] tracking-[-0.03em] mb-6 max-w-3xl">
            Business cards that pay for the business, not the brochure.
          </h1>
          <p className="text-lg md:text-xl text-mute leading-relaxed max-w-2xl mb-8">
            We modeled $120,000 of typical small-business spend across ads, shipping, software, travel, and supplies against every major business card. The picks below win on net first-year value after fees and signup bonuses. Pick one, pay the statement in full, and let it run in the background.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/calculators/debt-payoff" className="pill pill-ink">
              Run my numbers
              <span aria-hidden>→</span>
            </Link>
            <Link href="/credit-cards" className="pill pill-ghost">
              All categories
            </Link>
          </div>
        </div>
      </section>

      {/* RATE SNAPSHOT */}
      <section className="border-y border-line bg-bg-soft/60">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-display font-bold text-2xl tracking-tight">Business card snapshot</h2>
            <span className="text-xs font-mono text-mute">Reviewed weekly</span>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "Top signup bonus", value: "$2,000", caption: "Spark Cash Plus, after $30K spend" },
              { label: "Top point bonus", value: "100K", caption: "Ink Business Preferred, after $8K spend" },
              { label: "Best flat-rate", value: "2.00%", caption: "Spark Cash Plus, every purchase" },
              { label: "No-fee picks", value: "2 / 5", caption: "Ink Cash and Blue Business Plus" },
            ].map((tile) => (
              <div key={tile.label} className="card p-5">
                <div className="text-xs text-mute mb-2">{tile.label}</div>
                <div className="font-display font-extrabold text-3xl md:text-4xl tabular tracking-tight mb-2">
                  {tile.value}
                </div>
                <div className="text-xs text-mute mt-2">{tile.caption}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PICKS */}
      <section className="max-w-(--max-w-page) mx-auto px-6 py-20">
        <div className="grid grid-cols-12 gap-8 mb-10">
          <div className="col-span-12 md:col-span-7">
            <span className="chip chip-mute mb-4">
              <span className="pulse-dot" /> Top picks · No sponsored placements
            </span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-tight">
              The business cards we recommend right now
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5 flex md:items-end md:justify-end">
            <p className="text-mute leading-relaxed md:text-right md:max-w-sm">
              Ranked by net rewards on $120,000 of typical small-business spend after fees, signup bonuses, and APR risk.
            </p>
          </div>
        </div>

        <div className="space-y-5">
          {businessCards.map((card, i) => (
            <BusinessCardRow key={card.slug} card={card} rank={i + 1} />
          ))}
        </div>
      </section>

      {/* HOW WE PICKED */}
      <section className="bg-bg-soft/60 border-y border-line">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-20">
          <div className="grid grid-cols-12 gap-10">
            <div className="col-span-12 lg:col-span-4">
              <span className="chip chip-mute mb-4">How we picked</span>
              <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-tight mb-6">
                Operator value, not affiliate value.
              </h2>
              <p className="text-mute leading-relaxed">
                Three filters separate cards built for real businesses from cards built for sponsored review sites.
              </p>
            </div>
            <div className="col-span-12 lg:col-span-8 space-y-8 text-base leading-relaxed">
              <div>
                <h3 className="font-display font-bold text-xl mb-2 tracking-tight">We model real business spend, not theoretical category rates</h3>
                <p className="text-mute">
                  Every pick was tested against a realistic small-business spending mix: 30% digital ads, 20% software and subscriptions, 15% travel, 15% shipping, 10% client meals, and 10% supplies. We add the first-year signup bonus and subtract the annual fee to get net first-year value. The cards above all clear $1,500 in net value year one.
                </p>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl mb-2 tracking-tight">We weight expense management, not just rewards</h3>
                <p className="text-mute">
                  Free employee cards, automatic categorization, accounting software exports, and spending controls all matter when you have to close the books at month-end. Cards that integrate cleanly with QuickBooks and Xero score higher. A 5x category rate is worth less if your bookkeeper has to clean every transaction by hand.
                </p>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl mb-2 tracking-tight">We test the fine print, including reporting practices</h3>
                <p className="text-mute">
                  Foreign transaction fees, balance transfer fees, late fees, and APR ranges all factor into the score. We also flag whether the issuer reports activity to personal credit bureaus. The Consumer Financial Protection Bureau publishes guidance on credit card disclosures that we cross-check against issuer terms before scoring.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="max-w-(--max-w-page) mx-auto px-6 py-20">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 lg:col-span-4">
            <span className="chip chip-mute mb-4">How it works</span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-tight mb-6">
              Personal guarantees, EINs, and the 5/24 rule.
            </h2>
            <p className="text-mute leading-relaxed">
              The three things every applicant should know before pressing submit.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-8 space-y-8 text-base leading-relaxed">
            <div>
              <h3 className="font-display font-bold text-xl mb-2 tracking-tight">Personal guarantee is the default</h3>
              <p className="text-mute">
                On nearly every business card, the owner signs a personal guarantee. That means you are personally responsible for the balance even if the business closes. The protection that an LLC normally provides does not extend to credit card debt you guaranteed. Brex, Ramp, and a few corporate cards skip the guarantee, but they require business bank balances or revenue thresholds most small operators do not have.
              </p>
            </div>
            <div>
              <h3 className="font-display font-bold text-xl mb-2 tracking-tight">EIN vs SSN at application time</h3>
              <p className="text-mute">
                Sole proprietors can apply using only a Social Security number. The business name is your legal name, and the issuer pulls personal credit. If you have an EIN, list it. Either way, your personal credit history is the primary input for approval on any new business with a thin commercial credit file.
              </p>
            </div>
            <div>
              <h3 className="font-display font-bold text-xl mb-2 tracking-tight">Chase 5/24 still applies to business products</h3>
              <p className="text-mute">
                Chase will deny most applications, including business cards, if you have opened five or more cards across all issuers in the prior 24 months. Personal Chase cards count toward 5/24 because they show on personal credit. Business cards from Chase do not count toward 5/24, but they are still subject to the rule on the application side.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COMMON PITFALLS */}
      <section className="bg-bg-soft/60 border-y border-line">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-20">
          <div className="grid grid-cols-12 gap-10 mb-10">
            <div className="col-span-12 lg:col-span-5">
              <span className="chip chip-mute mb-4">Watch out</span>
              <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-tight">
                Three pitfalls that quietly drain business cards.
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-7 text-mute leading-relaxed">
              The Federal Reserve reports the average credit card APR is now above 21%. On a $20,000 business balance, a single year of unpaid interest costs more than four years of typical 2% rewards. Treat the card like a tool, not a line of credit.
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card p-6">
              <h3 className="font-display font-bold text-lg mb-2 tracking-tight">Carrying a balance to chase rewards</h3>
              <p className="text-sm text-mute leading-relaxed">
                Every business pick above carries APRs above 19%. Carrying $10,000 from month to month wipes out a full year of category rewards in a quarter. If cash is tight, switch to a low-APR card or a working capital line and stop chasing points.
              </p>
            </div>
            <div className="card p-6">
              <h3 className="font-display font-bold text-lg mb-2 tracking-tight">Mixing personal and business spend</h3>
              <p className="text-sm text-mute leading-relaxed">
                Running personal purchases through a business card complicates bookkeeping, can pierce LLC liability protection, and may trigger issuer reviews. Keep two cards: one for the business, one for personal life.
              </p>
            </div>
            <div className="card p-6">
              <h3 className="font-display font-bold text-lg mb-2 tracking-tight">Stretching for the signup bonus</h3>
              <p className="text-sm text-mute leading-relaxed">
                A 100,000-point bonus that requires $8,000 in three months is only valuable if you would have spent that money anyway. Pulling forward purchases to hit the threshold is fine. Inventing spend you do not need is not.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CROSS-LINKS */}
      <section className="max-w-(--max-w-page) mx-auto px-6 py-20">
        <div className="mb-8">
          <span className="chip chip-mute mb-4">Tools and related</span>
          <h2 className="font-display font-extrabold text-3xl tracking-tight">Run the numbers, then keep exploring.</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: "Debt payoff calculator", href: "/calculators/debt-payoff", detail: "See how fast a card balance disappears." },
            { label: "Cash-back cards", href: "/credit-cards/cash-back", detail: "Personal cards that pay flat or rotating cash." },
            { label: "Travel cards", href: "/credit-cards/travel", detail: "Points and miles for client trips." },
            { label: "0% APR cards", href: "/credit-cards/zero-apr", detail: "Float a big purchase interest-free." },
          ].map((p) => (
            <Link key={p.href} href={p.href} className="card p-6 block group">
              <div className="flex items-center justify-between mb-3">
                <span className="chip chip-violet">{p.label}</span>
                <span className="text-mute text-lg group-hover:text-ink group-hover:translate-x-1 transition-all">→</span>
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
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight">Common questions about business cards.</h2>
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
              See what your business spending is worth in points.
            </h2>
            <p className="text-ink/70 mt-2">Plug in monthly ad, software, and travel spend. We will show year-one value.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/calculators/debt-payoff" className="pill pill-ink">
              Open the calculator
              <span aria-hidden>→</span>
            </Link>
            <Link href="/credit-cards/no-fee" className="pill pill-ghost">
              No-fee picks
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
