import type { Metadata } from "next";
import Link from "next/link";
import { FAQPageSchema, BreadcrumbListSchema, type FAQItem } from "@/components/schemas";
import { loadCards } from "@/lib/cards-server";
import { Calculator } from "./calculator";

export const metadata: Metadata = {
  title: "Credit Card Rewards Optimizer | Free Tool | Fintiex",
  description:
    "Enter monthly spend on groceries, dining, travel, gas, and other. We rank every card in our 50-card dataset by annual rewards value. See which card pays you the most.",
  alternates: { canonical: "/calculators/rewards-optimizer" },
};

const faqs: FAQItem[] = [
  {
    question: "How are points cards valued?",
    answer:
      "Each points card has a stored point value in cents (Chase Ultimate Rewards at 1.25 cents, Amex Membership Rewards at 2.0 cents, etc.). We multiply your rewards rate by that point value to get a dollar figure. For example, 5x Chase points on $1,000 of travel equals 5,000 points, which at 1.25 cents per point is worth $62.50.",
  },
  {
    question: "Why do my top picks ignore the signup bonus?",
    answer:
      "Signup bonuses pay out once and disappear. The optimizer focuses on recurring annual rewards because that is what determines which card you should keep in your wallet long-term. To factor in the bonus, just add it to year one. For a $200 bonus, your year-one rewards on a $400 annual earner become $600.",
  },
  {
    question: "Should I net the annual fee against the rewards?",
    answer:
      "Yes, and the table does. The Net Rewards column subtracts the annual fee from gross rewards. A card earning $500 in rewards with a $95 fee shows $405 net. A card earning $400 with $0 fee shows $400 net. They are nearly equal, but the no-fee card carries less risk if your spending pattern changes.",
  },
  {
    question: "Are statement credits counted in the rewards math?",
    answer:
      "Not in this calculator. Statement credits (Amex Gold $120 dining credit, etc.) require usage to capture full value, and many people forget them. The tool focuses on pure rewards earn rates. If you reliably use a card&apos;s credits, add them to the gross rewards manually. The Federal Trade Commission has good guidance on tracking annual benefits to make sure you actually use what you paid for.",
  },
  {
    question: "What if my spend categories do not match the inputs?",
    answer:
      "Group your spend into the five closest buckets: groceries (including online grocery delivery), dining (restaurants, takeout, food delivery), travel (flights, hotels, transit, ride share), gas, and everything else. The categories cover roughly 90% of typical card-eligible spend. Subscription bills, utilities, and bills paid by check or ACH usually fall into the everything-else bucket because most cards earn 1% on them anyway.",
  },
];

export default function Page() {
  const cards = loadCards();
  return (
    <>
      <FAQPageSchema items={faqs} />
      <BreadcrumbListSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Calculators", href: "/calculators" },
          { name: "Rewards Optimizer", href: "/calculators/rewards-optimizer" },
        ]}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-bg">
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
        <div className="relative max-w-(--max-w-page) mx-auto px-6 pt-16 pb-10">
          <span className="chip chip-violet mb-5">
            <span className="pulse-dot" /> Rewards Optimizer
          </span>
          <h1 className="font-display font-extrabold text-[clamp(2.25rem,5.5vw,4.5rem)] leading-[1.04] tracking-[-0.03em] mb-5 max-w-4xl">
            Find the card that pays you the most.
          </h1>
          <p className="text-lg md:text-xl text-mute max-w-2xl leading-relaxed mb-6">
            Enter your monthly spend across groceries, dining, travel, gas, and everything else. We score every card in our {cards.length}-card dataset and show the five that earn you the highest annual rewards.
          </p>
          <div className="flex items-center gap-6 text-sm text-mute">
            <div className="flex items-center gap-2">
              <span className="font-mono tabular text-ink font-semibold">{cards.length}</span> cards scored
            </div>
            <div className="flex items-center gap-2">
              <span className="font-mono tabular text-ink font-semibold">0</span> email walls
            </div>
            <div className="flex items-center gap-2">
              <span className="font-mono tabular text-ink font-semibold">100%</span> math visible
            </div>
          </div>
        </div>
      </section>

      {/* CALCULATOR */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-16">
        <Calculator cards={cards} />
      </section>

      {/* HOW IT WORKS */}
      <section className="border-t border-line bg-bg-soft/50">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-16">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-4">
              <span className="chip chip-mute mb-4">How this works</span>
              <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-tight">
                Annual rewards equals spend times rate.
              </h2>
            </div>
            <div className="col-span-12 md:col-span-8 space-y-5 text-[1.0625rem] leading-relaxed text-ink-soft">
              <p>
                For each card, we multiply your annual spend in a category by the card&apos;s earn rate for that category. For cash-back cards, the rate is a straight percentage. For points and miles cards, the rate is multiplied by the point&apos;s typical redemption value in cents.
              </p>
              <pre className="bg-ink text-bg p-5 rounded-xl font-mono text-sm overflow-x-auto">
                <code>{`Annual reward = sum(monthly_spend[cat] * 12 * rate[cat])
For points: rate * (point_value_cents / 100)
Net reward = annual reward - annual fee`}</code>
              </pre>
              <p>
                Categories without a card-specific rate fall back to the &quot;other&quot; rate (typically 1% on a cash-back card or 1x on a points card). The top five list is sorted by net reward (gross reward minus annual fee), but you can compare gross too because the table shows both columns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-line">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-16">
          <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight mb-10">
            Frequently asked questions
          </h2>
          <div className="space-y-5 max-w-3xl">
            {faqs.map((f) => (
              <div key={f.question} className="card p-6">
                <h3 className="font-display font-bold text-lg mb-2">{f.question}</h3>
                <p className="text-ink-soft leading-relaxed">{f.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-lime border-y border-ink">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <h2 className="font-display font-extrabold text-2xl md:text-3xl tracking-tight max-w-2xl leading-tight">
            Take the 30-second quiz to narrow it down to three.
          </h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/calculators/which-card" className="pill pill-ink">
              Which card quiz
              <span aria-hidden>{"->"}</span>
            </Link>
            <Link href="/calculators/balance-transfer" className="pill pill-ghost">
              Balance transfer
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
