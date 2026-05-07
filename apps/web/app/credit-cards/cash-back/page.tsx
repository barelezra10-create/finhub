import Link from "next/link";
import type { Metadata } from "next";
import { FAQPageSchema, BreadcrumbListSchema, type FAQItem } from "@/components/schemas";
import { BrandLogo } from "@/components/brand-logo";

export const metadata: Metadata = {
  title: "Best Cash-Back Credit Cards 2026: Flat 2% to 5% Rotating | Fintiex",
  description:
    "The cash-back cards that actually pay the most. Flat-rate, tiered, and rotating-category picks ranked by real-world spending. No annual fees on most. Updated weekly.",
  alternates: { canonical: "/credit-cards/cash-back" },
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
    name: "Wells Fargo Active Cash",
    brand: "wells-active-cash",
    tag: "Best flat-rate",
    perk: "2% cash back on everything",
    detail: "0% intro APR for 12 months on purchases and balance transfers, then a 20.24% to 29.99% variable APR.",
    bestFor: "People who want one card to cover all spending without tracking categories.",
    annualFee: "$0",
    signupBonus: "$200 after $500 in purchases in the first 3 months",
    href: "/credit-cards/wells-fargo-active-cash",
  },
  {
    rank: 2,
    name: "Citi Double Cash",
    brand: "citi-double-cash",
    tag: "Best for payers",
    perk: "1% when you buy, 1% when you pay",
    detail: "Earn 2% total on every purchase, but only after you pay the bill. Includes 18 months 0% on balance transfers.",
    bestFor: "Cardholders who pay the statement balance every month and want flat-rate simplicity.",
    annualFee: "$0",
    signupBonus: "$200 after $1,500 in purchases in the first 6 months",
    href: "/credit-cards/citi-double-cash",
  },
  {
    rank: 3,
    name: "Discover it Cash Back",
    brand: "discover-it-cash-back",
    tag: "Best rotating 5%",
    perk: "5% in quarterly rotating categories",
    detail: "5% cash back in rotating categories like grocery, gas, and Amazon, capped at $1,500 per quarter. 1% on everything else.",
    bestFor: "Spenders who can shift purchases to match the calendar and activate categories on time.",
    annualFee: "$0",
    signupBonus: "Cashback Match: Discover doubles all cash back earned in your first year",
    href: "/credit-cards/discover-it",
  },
  {
    rank: 4,
    name: "Chase Freedom Unlimited",
    brand: "Chase Freedom Unlimited",
    tag: "Best tiered",
    perk: "1.5% flat, plus 3% on dining and drugstores",
    detail: "5% on travel booked through Chase, 3% on dining and drugstores, 1.5% on everything else. Pairs well with Sapphire for point transfers.",
    bestFor: "Households who eat out often and want flexibility to upgrade rewards later.",
    annualFee: "$0",
    signupBonus: "$200 after $500 in purchases in the first 3 months, plus 5% on grocery up to $12K in year one",
    href: "/credit-cards/chase-freedom-unlimited",
  },
  {
    rank: 5,
    name: "Capital One Quicksilver",
    brand: "Capital One Quicksilver",
    tag: "Best easy approval",
    perk: "1.5% cash back on everything",
    detail: "Flat 1.5% on all purchases with no foreign transaction fees. Often approves applicants with good (not just excellent) credit.",
    bestFor: "Travelers who want a no-fuss flat-rate card that works overseas.",
    annualFee: "$0",
    signupBonus: "$200 after $500 in purchases in the first 3 months",
    href: "/credit-cards/capital-one-quicksilver",
  },
];

const faqItems: FAQItem[] = [
  {
    question: "Flat-rate vs rotating-category cash back: which earns more?",
    answer: "It depends on how much you spend in the bonus categories. A flat 2% card earns $1,200 on $60,000 of annual spend. A 5% rotating card earns up to $300 per quarter on $1,500 of category spend, plus 1% on the rest, for roughly $1,200 too. Rotating cards win only if you can consistently shift spending into the active category.",
  },
  {
    question: "Is cash back taxable income?",
    answer: "No. The IRS treats credit card cash back and rewards as a rebate on your purchases, not income. You do not report it on your tax return. Sign-up bonuses earned without a spending requirement (rare) can be taxable, but standard purchase rewards never are.",
  },
  {
    question: "How quickly can I redeem cash back?",
    answer: "Most issuers post rewards within one billing cycle of the qualifying purchase. Redemption is usually instant: you can apply rewards as a statement credit, deposit to a linked bank account, or use them at checkout on the issuer site. Discover and Chase both allow $1 minimum redemptions.",
  },
  {
    question: "Do cash-back cards have foreign transaction fees?",
    answer: "Most do, typically 3% per transaction. The Capital One Quicksilver is the major exception among cash-back cards: it carries no foreign transaction fee. If you travel internationally regularly, that alone can save more than the 0.5% rewards-rate gap.",
  },
  {
    question: "What credit score do I need for a top cash-back card?",
    answer: "The flat 2% cards (Wells Fargo Active Cash, Citi Double Cash) generally require a FICO score of 700 or higher. Discover it Cash Back is approachable with scores in the upper 600s. Capital One Quicksilver is the most flexible of the top picks, frequently approving applicants with scores from 670 up.",
  },
  {
    question: "Should I have more than one cash-back card?",
    answer: "A pair works well: one flat-rate card for general spending and one rotating or tiered card for higher-rate categories. Keep both balances at zero by paying the statement in full. Adding a third card rarely improves earnings enough to justify tracking another due date.",
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
          { name: "Cash Back", href: "/credit-cards/cash-back" },
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
            The cash-back cards that actually pay you back.
          </h1>
          <p className="text-lg md:text-xl text-mute leading-relaxed max-w-2xl mb-8">
            We modeled five years of spending data against every cash-back card on the market. The picks below win on math, not marketing. Expect 2% flat across all spending or up to 5% in rotating categories. Pick one, pay the statement in full, and let it run in the background.
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
            <h2 className="font-display font-bold text-2xl tracking-tight">Cash-back snapshot</h2>
            <span className="text-xs font-mono text-mute">Reviewed weekly</span>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "Top flat rate", value: "2.00%", caption: "Wells Fargo Active Cash" },
              { label: "Top rotating", value: "5.00%", caption: "Discover it (capped quarterly)" },
              { label: "Best signup", value: "$200", caption: "Most picks, after $500 spend" },
              { label: "Cards with no fee", value: "5 / 5", caption: "Every pick has $0 annual fee" },
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
              Five cash-back cards we recommend right now
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5 flex md:items-end md:justify-end">
            <p className="text-mute leading-relaxed md:text-right md:max-w-sm">
              Ranked by net rewards on $30,000 of typical household spend after fees, signup bonuses, and APR risk.
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
                    <div className="text-xs font-mono text-mute uppercase tracking-wider mb-1">Annual fee</div>
                    <div className="font-mono tabular">{p.annualFee}</div>
                  </div>
                  <div className="col-span-2 md:col-span-1">
                    <div className="text-xs font-mono text-mute uppercase tracking-wider mb-1">Signup bonus</div>
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
                Net rewards. Not gross. Not gross marketing.
              </h2>
              <p className="text-mute leading-relaxed">
                Three filters separate the real winners from cards designed to look good in ads.
              </p>
            </div>
            <div className="col-span-12 lg:col-span-8 space-y-8 text-base leading-relaxed">
              <div>
                <h3 className="font-display font-bold text-xl mb-2 tracking-tight">We model spending, not marketing</h3>
                <p className="text-mute">
                  Every pick was tested against $30,000 in annual household spend split across grocery, gas, dining, travel, and online retail. The Bureau of Labor Statistics Consumer Expenditure Survey informs the category weights. We then subtract annual fees and add the first-year signup bonus to get net first-year value. The cards above generate at least $400 in net rewards in year one.
                </p>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl mb-2 tracking-tight">We weight redemption flexibility</h3>
                <p className="text-mute">
                  A 2% rate that only redeems at 0.5 cents per point is really a 1% rate. All picks above redeem at 1 cent per point or better, with statement credit, direct deposit, or merchant checkout as standard options. We dock cards that lock you into limited gift card catalogs.
                </p>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl mb-2 tracking-tight">We test the fine print, not just the headline</h3>
                <p className="text-mute">
                  Foreign transaction fees, balance transfer fees, late fees, and APR ranges all factor into the score. The Consumer Financial Protection Bureau publishes credit card data that we cross-check against issuer disclosures. Cards with deceptive deferred-interest clauses are excluded entirely.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMMON PITFALLS */}
      <section className="max-w-(--max-w-page) mx-auto px-6 py-20">
        <div className="grid grid-cols-12 gap-10 mb-10">
          <div className="col-span-12 lg:col-span-5">
            <span className="chip chip-mute mb-4">Watch out</span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-tight">
              Three pitfalls that quietly erase cash back.
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-7 text-mute leading-relaxed">
            Even the best cash-back card loses the math battle if you fall into one of these traps. The Federal Reserve reports the average credit card APR is now above 21%. A single carried balance of $3,000 over 12 months costs roughly $630 in interest, more than triple a year of typical 2% rewards.
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card p-6">
            <h3 className="font-display font-bold text-lg mb-2 tracking-tight">Carrying a balance</h3>
            <p className="text-sm text-mute leading-relaxed">
              Cash-back cards charge 19% to 30% APR. Any balance carried month to month wipes out a year of rewards in 90 days. If you cannot pay in full, switch to a low-APR card and skip rewards entirely.
            </p>
          </div>
          <div className="card p-6">
            <h3 className="font-display font-bold text-lg mb-2 tracking-tight">Missing rotating activations</h3>
            <p className="text-sm text-mute leading-relaxed">
              Discover and Chase rotating cards require quarterly category activation. Forgetting drops your rate to 1% on those purchases. Set a calendar reminder for the first week of each quarter.
            </p>
          </div>
          <div className="card p-6">
            <h3 className="font-display font-bold text-lg mb-2 tracking-tight">Spending more to earn more</h3>
            <p className="text-sm text-mute leading-relaxed">
              Stretching to hit a $4,000 spending bonus on a card you do not need usually nets out negative. Compute net value: bonus minus extra spending you would not have made otherwise.
            </p>
          </div>
        </div>
      </section>

      {/* CROSS-LINKS */}
      <section className="bg-bg-soft/60 border-y border-line">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-16">
          <div className="mb-8">
            <span className="chip chip-mute mb-4">Tools and related</span>
            <h2 className="font-display font-extrabold text-3xl tracking-tight">Run the numbers, then keep exploring.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "Debt payoff calculator", href: "/calculators/debt-payoff", detail: "See how fast a card balance disappears." },
              { label: "Travel cards", href: "/credit-cards/travel", detail: "Points and miles for trips." },
              { label: "0% APR cards", href: "/credit-cards/zero-apr", detail: "Float a big purchase interest-free." },
              { label: "No annual fee", href: "/credit-cards/no-fee", detail: "Strong rewards with $0 yearly cost." },
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
          <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight">Common questions about cash back.</h2>
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
              See what 2% cash back actually adds up to.
            </h2>
            <p className="text-ink/70 mt-2">Plug in your monthly spend. We will show the annual rebate.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/calculators/debt-payoff" className="pill pill-ink">
              Open the calculator
              <span aria-hidden>→</span>
            </Link>
            <Link href="/credit-cards/no-fee" className="pill pill-ghost">
              All no-fee picks
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
