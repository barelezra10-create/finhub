import Link from "next/link";
import type { Metadata } from "next";
import { FAQPageSchema, BreadcrumbListSchema, type FAQItem } from "@/components/schemas";
import { BrandLogo } from "@/components/brand-logo";

export const metadata: Metadata = {
  title: "Best No Annual Fee Credit Cards 2026: Strong Rewards, $0 Yearly Cost | Fintiex",
  description:
    "The five strongest no-annual-fee credit cards: 2% flat cash back, rotating 5% bonuses, and 0% intro APR options. All $0 to keep, year after year.",
  alternates: { canonical: "/credit-cards/no-fee" },
};

interface CardPick {
  rank: number;
  name: string;
  brand: string;
  tag: string;
  perk: string;
  detail: string;
  bestFor: string;
  rewardsRate: string;
  signupBonus: string;
  href: string;
}

const picks: CardPick[] = [
  {
    rank: 1,
    name: "Wells Fargo Active Cash",
    brand: "wells-active-cash",
    tag: "Best overall",
    perk: "Flat 2% cash back, every purchase",
    detail: "Unlimited 2% cash back on every purchase, no categories. 12 months 0% intro APR on purchases and balance transfers. Zero annual fee, zero rewards caps.",
    bestFor: "People who want one no-fee card to handle all their spending without category tracking.",
    rewardsRate: "2% on everything",
    signupBonus: "$200 after $500 in purchases in the first 3 months",
    href: "/credit-cards/wells-fargo-active-cash",
  },
  {
    rank: 2,
    name: "Citi Double Cash",
    brand: "citi-double-cash",
    tag: "Best for disciplined payers",
    perk: "1% when you buy, 1% when you pay",
    detail: "Earn 2% total on every purchase, but only after you pay the bill. Includes 18 months 0% on balance transfers. Long-running classic with no annual fee.",
    bestFor: "Cardholders who pay the statement balance every month and want a simple flat-rate card.",
    rewardsRate: "2% on everything (1% + 1%)",
    signupBonus: "$200 after $1,500 in purchases in the first 6 months",
    href: "/credit-cards/citi-double-cash",
  },
  {
    rank: 3,
    name: "Discover it Cash Back",
    brand: "discover-it-cash-back",
    tag: "Best first-year value",
    perk: "5% rotating, plus first-year cashback match",
    detail: "5% cash back in rotating quarterly categories (capped at $1,500 spend per quarter). Discover doubles all cash back at the end of year one, effectively 10% in bonus categories.",
    bestFor: "Spenders willing to track quarterly categories for outsized first-year rewards.",
    rewardsRate: "5% rotating, 1% other",
    signupBonus: "Cashback Match: doubles all cash back earned in your first year",
    href: "/credit-cards/discover-it",
  },
  {
    rank: 4,
    name: "Chase Freedom Unlimited",
    brand: "Chase Freedom Unlimited",
    tag: "Best tiered rewards",
    perk: "5% travel, 3% dining, 1.5% on the rest",
    detail: "5% on travel through Chase, 3% on dining and drugstores, 1.5% everywhere else. 15 months 0% intro APR. Pairs with Sapphire cards for transfer partner access.",
    bestFor: "Households who eat out often and want flexibility to upgrade rewards later.",
    rewardsRate: "1.5% to 5% (tiered)",
    signupBonus: "$200 after $500 in purchases in the first 3 months",
    href: "/credit-cards/chase-freedom-unlimited",
  },
  {
    rank: 5,
    name: "Capital One Quicksilver",
    brand: "Capital One Quicksilver",
    tag: "Best for travelers and credit-builders",
    perk: "1.5% cash back with no foreign fees",
    detail: "Flat 1.5% cash back on every purchase, no foreign transaction fees. Often approves applicants with good (not just excellent) credit, with a path to credit limit increases.",
    bestFor: "International travelers and people building credit who want a no-fee everyday card.",
    rewardsRate: "1.5% on everything",
    signupBonus: "$200 after $500 in purchases in the first 3 months",
    href: "/credit-cards/capital-one-quicksilver",
  },
];

const faqItems: FAQItem[] = [
  {
    question: "Are no-fee cards weaker than cards with annual fees?",
    answer: "Not necessarily. The Wells Fargo Active Cash and Citi Double Cash both earn 2% flat cash back with no fee, matching or beating most $95-fee cards in pure rebate value. Annual fee cards win on travel perks (lounge access, primary rental car insurance, transfer partners) and large signup bonuses. For pure rewards on everyday spend, no-fee cards hold their own.",
  },
  {
    question: "Do no-fee cards have hidden fees?",
    answer: "Most no-fee cards still charge balance transfer fees (3% to 5%), foreign transaction fees (typically 3%), late fees (up to $40), and cash advance fees. The annual fee is the only thing waived. Read the cardholder agreement to identify which secondary fees apply. The Capital One Quicksilver is notable for waiving the foreign transaction fee, which most no-fee cards do not.",
  },
  {
    question: "Will keeping a no-fee card open improve my credit score?",
    answer: "Yes, generally. Keeping any unused credit account open preserves your average account age and adds to your total available credit. Both factors help your credit score, especially the credit utilization ratio. Even if you stop using a card, leave it open as long as it costs nothing. The FICO scoring model weighs account age at 15% of your score.",
  },
  {
    question: "Can I have multiple no-fee cards at the same time?",
    answer: "Yes. There is no penalty for holding multiple no-fee cards beyond the temporary credit score impact of new applications. Many credit-savvy households carry 3 to 5 no-fee cards, each optimized for a category: one flat 2%, one rotating 5% (Discover), one travel-friendly (Quicksilver), one with 0% intro APR for emergencies. Keep utilization low across all of them.",
  },
  {
    question: "Should I downgrade a fee-card to a no-fee card?",
    answer: "Yes, if you no longer use the perks that justify the fee. Issuers usually allow a product change to a related no-fee card, preserving your account history and credit score. The Chase Sapphire Preferred, for example, can typically be downgraded to the Chase Freedom Unlimited or Freedom Flex. Ask the issuer rather than closing the account, which would shorten your average account age.",
  },
  {
    question: "What credit score do I need for the top no-fee cards?",
    answer: "The Wells Fargo Active Cash and Citi Double Cash typically require a FICO score of 700 or higher. Discover it is approachable in the upper 600s. Capital One Quicksilver is the most flexible, often approving applicants with scores from 670 up. Use prequalification (a soft inquiry) before formally applying to gauge approval odds without affecting your score.",
  },
];

export default function Page() {
  return (
    <>
      <FAQPageSchema items={faqItems} />
      <BreadcrumbListSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Credit Cards", href: "/credit-cards" },
          { name: "No Annual Fee", href: "/credit-cards/no-fee" },
        ]}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-bg">
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
        <div className="relative max-w-(--max-w-page) mx-auto px-6 pt-20 pb-16">
          <span className="chip chip-lime mb-6">
            <span className="pulse-dot" /> 5 picks, all $0 yearly cost
          </span>
          <h1 className="font-display font-extrabold text-[clamp(2.5rem,6vw,5rem)] leading-[1.02] tracking-[-0.03em] mb-6 max-w-3xl">
            Strong rewards, $0 to keep them.
          </h1>
          <p className="text-lg md:text-xl text-mute leading-relaxed max-w-2xl mb-8">
            A no-annual-fee card is the simplest financial product on the market. There is no math to justify, no break-even calculation. If the rewards are anything more than zero, you are ahead. The five cards below earn 1.5% to 5% on real spending, with several adding 0% intro APR or first-year bonus matching on top.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/credit-cards/cash-back" className="pill pill-ink">
              See cash back picks
              <span aria-hidden>→</span>
            </Link>
            <Link href="/credit-cards" className="pill pill-ghost">
              All categories
            </Link>
          </div>
        </div>
      </section>

      {/* SNAPSHOT */}
      <section className="border-y border-line bg-bg-soft/60">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-display font-bold text-2xl tracking-tight">No-fee snapshot</h2>
            <span className="text-xs font-mono text-mute">Reviewed weekly</span>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "Top flat rate", value: "2.00%", caption: "Wells Fargo Active Cash and Citi Double Cash" },
              { label: "Best rotating rate", value: "5.00%", caption: "Discover it (with first-year doubling)" },
              { label: "Cards with 0% intro APR", value: "4 / 5", caption: "Up to 18 months on transfers" },
              { label: "Annual cost", value: "$0", caption: "Every card on this list" },
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
              Five no-fee cards we recommend right now
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5 flex md:items-end md:justify-end">
            <p className="text-mute leading-relaxed md:text-right md:max-w-sm">
              Ranked on rewards rate, signup bonus, intro APR, and total first-year value for typical $30K household spend.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {picks.map((p) => (
            <div key={p.name} className="card p-6 md:p-7">
              <div className="grid grid-cols-12 gap-6 items-start">
                <div className="col-span-12 md:col-span-1 flex items-center gap-3">
                  <BrandLogo brand={p.brand} size={48} />
                  <div className="md:hidden font-mono text-xs text-mute">#{p.rank}</div>
                </div>
                <div className="col-span-12 md:col-span-7">
                  <div className="flex items-center gap-2 flex-wrap mb-2">
                    <span className="hidden md:inline font-mono text-xs text-mute">#{p.rank}</span>
                    <h3 className="font-display font-bold text-xl tracking-tight">{p.name}</h3>
                    <span className="chip chip-lime">{p.tag}</span>
                  </div>
                  <p className="text-mute leading-relaxed mb-3">{p.detail}</p>
                  <p className="text-sm text-ink/80 leading-relaxed">
                    <span className="font-semibold">Best for: </span>
                    {p.bestFor}
                  </p>
                </div>
                <div className="col-span-12 md:col-span-4 grid grid-cols-2 md:grid-cols-1 gap-3 text-sm">
                  <div>
                    <div className="text-xs font-mono text-mute uppercase tracking-wider mb-1">Top perk</div>
                    <div className="font-semibold">{p.perk}</div>
                  </div>
                  <div>
                    <div className="text-xs font-mono text-mute uppercase tracking-wider mb-1">Rewards rate</div>
                    <div className="font-mono tabular">{p.rewardsRate}</div>
                  </div>
                  <div className="col-span-2 md:col-span-1">
                    <div className="text-xs font-mono text-mute uppercase tracking-wider mb-1">Welcome offer</div>
                    <div className="text-mute text-sm">{p.signupBonus}</div>
                  </div>
                </div>
              </div>
            </div>
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
                Real first-year value. Easy approvals. Honest fine print.
              </h2>
              <p className="text-mute leading-relaxed">
                The three filters that separate the strongest no-fee cards from the noise.
              </p>
            </div>
            <div className="col-span-12 lg:col-span-8 space-y-8 text-base leading-relaxed">
              <div>
                <h3 className="font-display font-bold text-xl mb-2 tracking-tight">First-year value, not just headline rate</h3>
                <p className="text-mute">
                  We model the rewards rate plus signup bonus across $30K of typical annual spend (BLS Consumer Expenditure Survey weights). The Wells Fargo Active Cash generates roughly $800 in first-year value (2% rewards plus the $200 bonus). The Discover it generates over $1,000 thanks to the bonus match doubling rotating-category rewards. We dock cards whose headline rate looks great but whose redemption ratio drops the realized value below 1 cent per point.
                </p>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl mb-2 tracking-tight">Approval odds for typical applicants</h3>
                <p className="text-mute">
                  Some no-fee cards have approval criteria as strict as $95 fee cards. We tested approval data across credit bureaus to estimate which cards reliably approve applicants with FICO scores from 670 to 740. The Capital One Quicksilver is the most accessible, often approving in the upper 600s. The Wells Fargo and Citi cards lean toward 700+. Discover sits in the middle.
                </p>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl mb-2 tracking-tight">Fine print and secondary fees</h3>
                <p className="text-mute">
                  No annual fee does not mean no fees. Foreign transaction fees, balance transfer fees, late fees, and cash advance fees all factor into the score. The Capital One Quicksilver is the only card on this list with $0 foreign transaction fees, which earned it inclusion despite a slightly lower rewards rate. The CFPB credit card data sheet shows that average late fees now hover near $32 across major issuers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO BENEFITS */}
      <section className="max-w-(--max-w-page) mx-auto px-6 py-20">
        <div className="grid grid-cols-12 gap-10 mb-10">
          <div className="col-span-12 lg:col-span-5">
            <span className="chip chip-mute mb-4">Who benefits most</span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-tight">
              Three profiles where a no-fee card is the obvious right answer.
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-7 text-mute leading-relaxed">
            Annual fees can be worth paying for households that spend heavily on travel and dining. For everyone else, a no-fee card is usually the smarter starting point. Add a fee card later only when the math clearly justifies it.
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card p-6">
            <h3 className="font-display font-bold text-lg mb-2 tracking-tight">Building or rebuilding credit</h3>
            <p className="text-sm text-mute leading-relaxed">
              No-fee cards eliminate ongoing cost while you build score history. Capital One Quicksilver and Discover it are commonly approved at 670 to 700 FICO ranges with paths to upgrades.
            </p>
          </div>
          <div className="card p-6">
            <h3 className="font-display font-bold text-lg mb-2 tracking-tight">Light or modest spenders</h3>
            <p className="text-sm text-mute leading-relaxed">
              Households spending under $25K per year on cards rarely earn enough rewards to recoup a $95 fee. A 2% no-fee card on $20K of spend is $400 cash, while a $95 fee card might net only $300 after the fee.
            </p>
          </div>
          <div className="card p-6">
            <h3 className="font-display font-bold text-lg mb-2 tracking-tight">Long-term keepers for credit history</h3>
            <p className="text-sm text-mute leading-relaxed">
              No-fee cards are easy to keep open forever. Holding one for 10+ years builds the average-account-age factor in your credit score, a 15% weighting in FICO calculations.
            </p>
          </div>
        </div>
      </section>

      {/* CROSS-LINKS */}
      <section className="bg-bg-soft/60 border-y border-line">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-16">
          <div className="mb-8">
            <span className="chip chip-mute mb-4">Tools and related</span>
            <h2 className="font-display font-extrabold text-3xl tracking-tight">Calculate, then keep exploring.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "Debt payoff calculator", href: "/calculators/debt-payoff", detail: "See how fast a balance disappears." },
              { label: "Cash-back cards", href: "/credit-cards/cash-back", detail: "Top picks ranked by net rebate value." },
              { label: "0% APR cards", href: "/credit-cards/zero-apr", detail: "Float a big purchase interest-free." },
              { label: "Travel cards", href: "/credit-cards/travel", detail: "When fee cards earn their cost back." },
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
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-(--max-w-page) mx-auto px-6 py-20">
        <div className="mb-10">
          <span className="chip chip-mute mb-4">FAQ</span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight">Common questions about no-fee cards.</h2>
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

      {/* CTA STRIP */}
      <section className="bg-lime border-y border-ink">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-14 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight max-w-xl leading-tight">
              See your real cash-back yield.
            </h2>
            <p className="text-ink/70 mt-2">Plug in monthly spend. We will show the annual rebate by card.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/calculators/debt-payoff" className="pill pill-ink">
              Open the calculator
              <span aria-hidden>→</span>
            </Link>
            <Link href="/credit-cards/cash-back" className="pill pill-ghost">
              Cash-back picks
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
