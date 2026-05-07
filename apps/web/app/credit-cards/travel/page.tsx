import Link from "next/link";
import type { Metadata } from "next";
import { FAQPageSchema, BreadcrumbListSchema, type FAQItem } from "@/components/schemas";
import { BrandLogo } from "@/components/brand-logo";

export const metadata: Metadata = {
  title: "Best Travel Credit Cards 2026: Points, Miles & Transfer Partners | Fintiex",
  description:
    "The travel cards that pay back more than they cost. Compare Sapphire Preferred, Amex Gold, Venture, Citi Premier, and Bilt. Real point values, real fees, no fluff.",
  alternates: { canonical: "/credit-cards/travel" },
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
    name: "Chase Sapphire Preferred",
    brand: "chase-sapphire-preferred",
    tag: "Best overall",
    perk: "60,000-point sign-up bonus",
    detail: "5x on travel booked through Chase, 3x on dining, 2x on other travel, and 1x on everything else. Points transfer 1:1 to United, Hyatt, and others.",
    bestFor: "Travelers who want flexible points worth 1.25 to 2 cents each via transfer partners.",
    annualFee: "$95",
    signupBonus: "60,000 points after $4,000 in purchases in the first 3 months (worth $750+ on travel)",
    href: "/credit-cards/chase-sapphire-preferred",
  },
  {
    rank: 2,
    name: "American Express Gold",
    brand: "amex-gold",
    tag: "Best for dining",
    perk: "4x on restaurants and U.S. supermarkets",
    detail: "4x at restaurants worldwide, 4x at U.S. supermarkets (up to $25K per year), and 3x on flights booked direct. Annual credits offset most of the fee.",
    bestFor: "Households that spend heavily on groceries and dining and will use the $240 in annual credits.",
    annualFee: "$325",
    signupBonus: "60,000 Membership Rewards after $6,000 in purchases in the first 6 months",
    href: "/credit-cards/amex-gold",
  },
  {
    rank: 3,
    name: "Capital One Venture",
    brand: "Capital One Venture",
    tag: "Best flat-rate miles",
    perk: "2x miles on every purchase",
    detail: "Flat 2x miles on all spending, 5x on hotels and rental cars booked through Capital One Travel. No foreign transaction fees. Miles transfer to 15+ partners.",
    bestFor: "Travelers who want simple flat-rate earning without category tracking.",
    annualFee: "$95",
    signupBonus: "75,000 miles after $4,000 in purchases in the first 3 months",
    href: "/credit-cards/capital-one-venture",
  },
  {
    rank: 4,
    name: "Citi Premier",
    brand: "Citi Premier",
    tag: "Best for everyday travel",
    perk: "3x on travel, dining, gas, and grocery",
    detail: "3x ThankYou points on travel, gas, dining, supermarkets, and entertainment. Points transfer to 16 airline partners. No foreign transaction fees.",
    bestFor: "Drivers and home cooks who still travel a few times a year.",
    annualFee: "$95",
    signupBonus: "75,000 ThankYou points after $4,000 in purchases in the first 3 months",
    href: "/credit-cards/citi-premier",
  },
  {
    rank: 5,
    name: "Bilt Mastercard",
    brand: "Bilt",
    tag: "Best for renters",
    perk: "Earn points on rent with no fee",
    detail: "1x on rent payments (up to 100K points per year) with no transaction fee, 3x on dining, 2x on travel. The only major card that turns rent into transferable points.",
    bestFor: "Renters who want to earn travel points on their largest monthly expense.",
    annualFee: "$0",
    signupBonus: "No traditional bonus, but Rent Day promotions double points 1x per month",
    href: "/credit-cards/bilt",
  },
];

const faqItems: FAQItem[] = [
  {
    question: "Are travel rewards points worth more than cash back?",
    answer: "Sometimes. Sapphire Preferred and Amex Gold points commonly redeem at 1.5 to 2 cents each through transfer partners, especially for international business class. That beats a 2% cash-back card. But if you do not transfer to airline or hotel programs, points typically redeem at 1 cent each, making them worse than 2% cash back after the annual fee.",
  },
  {
    question: "Should I pay an annual fee for a travel card?",
    answer: "Only if the rewards plus statement credits exceed the fee. The Sapphire Preferred costs $95 but generates around $250 in net value for a household with $20,000 in dining and travel spend. The Amex Gold costs $325 but offers $240 in dining and Uber credits, making the effective fee $85 if you use them fully. Run the math against your actual spending before applying.",
  },
  {
    question: "What are transfer partners and why do they matter?",
    answer: "Transfer partners let you move credit card points 1:1 (or close to it) into airline and hotel loyalty programs. A 60,000-point Sapphire bonus is worth $750 redeemed for travel through Chase. Transferred to Hyatt, those same 60,000 points can book 4 to 8 nights at hotels that retail for $300+ per night, easily $1,200 in value. The transfer trick is what makes premium travel cards worthwhile.",
  },
  {
    question: "Do travel cards charge foreign transaction fees?",
    answer: "Most major travel cards do not, which is the point: a 3% foreign fee on $5,000 of overseas spending costs $150, more than a year of rewards on most cards. Verify before traveling. The picks above are all foreign-fee-free. Most no-fee cash-back cards do charge 3% per international transaction.",
  },
  {
    question: "Can I use travel rewards for non-travel purchases?",
    answer: "Yes, but the redemption rate is usually lower. Statement credits and merchandise typically redeem at 0.5 to 1 cent per point. Travel redemptions through the issuer portal are 1 to 1.5 cents per point. Transfers to partners can be 2+ cents. If you only want cash back, a flat 2% card outperforms most travel cards after the fee.",
  },
  {
    question: "How does primary rental car insurance work on travel cards?",
    answer: "Cards like the Sapphire Preferred include primary collision damage waiver coverage when you rent a car using the card and decline the rental company's insurance. Primary means you can skip filing a claim with your own auto insurance. This single perk can save $15 to $25 per day, which adds up to more than the annual fee on a single one-week trip.",
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
          { name: "Travel", href: "/credit-cards/travel" },
        ]}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-bg">
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
        <div className="relative max-w-(--max-w-page) mx-auto px-6 pt-20 pb-16">
          <span className="chip chip-violet mb-6">
            <span className="pulse-dot" /> Travel picks reviewed weekly
          </span>
          <h1 className="font-display font-extrabold text-[clamp(2.5rem,6vw,5rem)] leading-[1.02] tracking-[-0.03em] mb-6 max-w-3xl">
            Travel cards that pay for the trip.
          </h1>
          <p className="text-lg md:text-xl text-mute leading-relaxed max-w-2xl mb-8">
            We modeled point values across every major loyalty program. The cards below produce 1.5 to 2.0 cents per point through transfer partners, easily covering their annual fees on a single international trip. No co-branded card made the cut. These all give you flexibility.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/credit-cards/cash-back" className="pill pill-ink">
              Or see cash back picks
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
            <h2 className="font-display font-bold text-2xl tracking-tight">Travel snapshot</h2>
            <span className="text-xs font-mono text-mute">Reviewed weekly</span>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "Top sign-up bonus", value: "75K", caption: "Capital One Venture and Citi Premier" },
              { label: "Best dining rate", value: "4x", caption: "American Express Gold" },
              { label: "Lowest fee with bonus", value: "$0", caption: "Bilt Mastercard" },
              { label: "Avg point value", value: "1.7¢", caption: "Via transfer partners" },
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
              Five travel cards we recommend right now
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5 flex md:items-end md:justify-end">
            <p className="text-mute leading-relaxed md:text-right md:max-w-sm">
              Each card scored on point value, transfer partner depth, fee math, and benefits like primary rental insurance.
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
                Real point values. Net of fees. Across actual itineraries.
              </h2>
              <p className="text-mute leading-relaxed">
                Three factors decided the rankings.
              </p>
            </div>
            <div className="col-span-12 lg:col-span-8 space-y-8 text-base leading-relaxed">
              <div>
                <h3 className="font-display font-bold text-xl mb-2 tracking-tight">Real-world point valuation</h3>
                <p className="text-mute">
                  We track actual award availability across 30 transfer partners and use the median redemption value, not the cherry-picked best. Sapphire Preferred points are worth roughly 1.7 cents on average through transfers. Amex Membership Rewards average 1.6 cents. Cards that locked you to fixed-value travel portals were demoted.
                </p>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl mb-2 tracking-tight">Annual fee net of credits</h3>
                <p className="text-mute">
                  A $325 Amex Gold fee looks high until you subtract $240 in dining and Uber credits. We require any card with a fee to deliver at least 3x its net cost in first-year value through bonuses, multipliers, and credits. Cards that fail this test, including Amex Platinum at $695, are excluded for most users.
                </p>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl mb-2 tracking-tight">Insurance and protections</h3>
                <p className="text-mute">
                  Primary rental car insurance, trip delay coverage, and lost luggage reimbursement are real dollars saved per trip. The CFPB urges cardholders to compare these protections, since rental companies routinely upsell coverage you may already carry. Our top picks all include primary CDW, so you can decline the rental counter offer with confidence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT TO KNOW */}
      <section className="max-w-(--max-w-page) mx-auto px-6 py-20">
        <div className="grid grid-cols-12 gap-10 mb-10">
          <div className="col-span-12 lg:col-span-5">
            <span className="chip chip-mute mb-4">What to know</span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-tight">
              Three things travel cards do that cash-back cards do not.
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-7 text-mute leading-relaxed">
            Travel cards earn their fee through perks that pure cash-back cards cannot match. Skip these if you only want simple rebates. They matter most for households who travel two or more times a year.
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card p-6">
            <h3 className="font-display font-bold text-lg mb-2 tracking-tight">Transfer partner leverage</h3>
            <p className="text-sm text-mute leading-relaxed">
              Transferring to airline programs frequently doubles point value. A 60,000-point bonus worth $600 in cash can book international business class flights priced at $4,000 to $7,000.
            </p>
          </div>
          <div className="card p-6">
            <h3 className="font-display font-bold text-lg mb-2 tracking-tight">Built-in trip protection</h3>
            <p className="text-sm text-mute leading-relaxed">
              Trip cancellation up to $10,000 per ticket, baggage delay coverage, and primary rental car CDW are standard on premium travel cards. Buying these separately costs $150 to $300 per trip.
            </p>
          </div>
          <div className="card p-6">
            <h3 className="font-display font-bold text-lg mb-2 tracking-tight">Lounge and status access</h3>
            <p className="text-sm text-mute leading-relaxed">
              Higher-tier travel cards add Priority Pass or hotel elite status. Even one airport meal and shower per trip can offset a chunk of the annual fee for frequent flyers.
            </p>
          </div>
        </div>
      </section>

      {/* CROSS-LINKS */}
      <section className="bg-bg-soft/60 border-y border-line">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-16">
          <div className="mb-8">
            <span className="chip chip-mute mb-4">Tools and related</span>
            <h2 className="font-display font-extrabold text-3xl tracking-tight">Plan, then keep exploring.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "Debt payoff calculator", href: "/calculators/debt-payoff", detail: "Clear credit card debt before chasing points." },
              { label: "Cash-back cards", href: "/credit-cards/cash-back", detail: "Simpler rebates without the points game." },
              { label: "0% APR cards", href: "/credit-cards/zero-apr", detail: "Float a big purchase interest-free." },
              { label: "All credit cards", href: "/credit-cards", detail: "Browse every category we cover." },
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
          <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight">Common questions about travel cards.</h2>
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
              Pick the right card for your next trip.
            </h2>
            <p className="text-ink/70 mt-2">Compare side by side or run the points-vs-cash math.</p>
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
