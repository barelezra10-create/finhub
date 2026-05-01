import type { Metadata } from "next";
import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";
import { getBrand } from "@/lib/brands";

const brand = getBrand("ink-business-preferred")!;

export const metadata: Metadata = {
  title: "Chase Ink Business Preferred Review: 100K Bonus + 3x on Travel (2026)",
  description:
    "The Chase Ink Business Preferred earns 3x on travel, shipping, internet, phone, and online ads up to $150K combined. 100K UR bonus after $8K spend. Full 2026 review.",
};

export default function Page() {
  return (
    <article className="bg-bg">
      {/* HERO */}
      <section className="relative overflow-hidden bg-bg border-b border-line">
        <div className="max-w-(--max-w-page) mx-auto px-6 pt-14 pb-12">
          <div className="flex items-center gap-4 mb-6">
            <BrandLogo brand={brand} size={72} rounded="lg" />
            <div>
              <span className="chip chip-lime mb-2">Credit Card Review</span>
              <h1 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight leading-tight">
                Chase Ink Business Preferred Review (2026)
              </h1>
            </div>
          </div>
          <p className="text-lg text-mute max-w-2xl leading-relaxed">
            The Ink Business Preferred offers{" "}
            <span className="font-mono tabular font-semibold text-ink">3x Ultimate Rewards</span> on travel, shipping, internet, phone, and online advertising up to $150K combined annually. A 100K point sign-up bonus and cell phone insurance round out one of the strongest small-business card offers available.
          </p>
          <div className="mt-4 text-xs font-mono text-mute uppercase tracking-wider">
            Updated April 2026 · By the Fintiex Rate Desk
          </div>
        </div>
      </section>

      {/* TL;DR card */}
      <section className="max-w-(--max-w-page) mx-auto px-6 py-10">
        <div className="card-flush p-8" style={{ boxShadow: "var(--shadow-pop)" }}>
          <div className="chip chip-ink mb-6">TL;DR</div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <Stat label="Rewards rate" value="3x / 1x" />
            <Stat label="Annual fee" value="$95" />
            <Stat label="Sign-up bonus" value="100K UR" />
            <Stat label="Fintiex Score" value="9.0 / 10" />
          </div>
        </div>
      </section>

      {/* Pros / Cons */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card p-7">
            <div className="chip chip-lime mb-5">Pros</div>
            <ul className="space-y-3 text-[0.9375rem]">
              <li className="flex gap-3"><span className="text-mint font-bold">+</span> 100K Ultimate Rewards sign-up bonus after $8K spend in 3 months (worth $1,250 to $2,000+ depending on redemption)</li>
              <li className="flex gap-3"><span className="text-mint font-bold">+</span> 3x on five high-volume business categories up to $150K combined per year</li>
              <li className="flex gap-3"><span className="text-mint font-bold">+</span> Cell phone insurance up to $1,000 per claim ($100 deductible) when you pay your monthly bill with the card</li>
              <li className="flex gap-3"><span className="text-mint font-bold">+</span> Trip cancellation and interruption insurance up to $5,000 per trip</li>
              <li className="flex gap-3"><span className="text-mint font-bold">+</span> Primary rental car insurance when renting for business purposes</li>
              <li className="flex gap-3"><span className="text-mint font-bold">+</span> No foreign transaction fees, making it usable internationally</li>
            </ul>
          </div>
          <div className="card p-7">
            <div className="chip chip-mute mb-5">Cons</div>
            <ul className="space-y-3 text-[0.9375rem]">
              <li className="flex gap-3"><span className="text-rose font-bold">-</span> $95 annual fee, though most businesses recoup it in the first month of 3x earning</li>
              <li className="flex gap-3"><span className="text-rose font-bold">-</span> 3x categories cap at $150K combined annual spend, dropping to 1x above that threshold</li>
              <li className="flex gap-3"><span className="text-rose font-bold">-</span> Requires a business entity or demonstrated self-employment income for approval</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <h2 className="font-display font-bold text-3xl tracking-tight mb-6">Overview</h2>
        <div className="space-y-5 text-[1.0625rem] leading-relaxed text-ink-soft max-w-3xl">
          <p>
            The Chase Ink Business Preferred is the most widely recommended entry-level business travel card in the Chase small-business lineup. At $95 per year, it sits below the premium Ink Business Cash tier and offers the broadest category coverage of any Ink card. The 3x multiplier applies to five spending categories that cover the core operating expenses of most small businesses: travel, shipping, internet and cable services, phone plans, and online advertising. Few other $95 cards match that breadth.
          </p>
          <p>
            The 100K Ultimate Rewards bonus is the card's headline feature and the primary reason most businesses apply. At Chase's baseline redemption of 1.25 cents per point through the Chase Travel portal, 100K points is worth $1,250. Transferred to Hyatt, however, that same pool can cover multiple nights at Category 5 and 6 properties worth $300 to $500 per night, bringing total value well above $2,000. For a business that can organically hit $8,000 in spend over three months, the effective first-year value is exceptional relative to the $95 fee.
          </p>
          <p>
            The cell phone protection benefit is frequently overlooked and genuinely valuable. When you pay your wireless bill with the Ink Business Preferred, Chase provides up to $1,000 per claim for theft or damage to covered phones, with a $100 deductible and a maximum of three claims per year. For a business owner covering a team of phones, this benefit alone can offset the annual fee and then some.
          </p>
        </div>
      </section>

      {/* Rewards structure */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <h2 className="font-display font-bold text-3xl tracking-tight mb-6">Rewards Structure</h2>
        <div className="card-flush p-6 max-w-2xl mb-6">
          <ul className="space-y-3 text-[0.9375rem]">
            <li className="flex justify-between border-b border-line pb-3">
              <span className="text-mute">Travel (airfare, hotels, rideshare, transit)</span>
              <span className="font-mono tabular font-semibold">3x UR</span>
            </li>
            <li className="flex justify-between border-b border-line pb-3">
              <span className="text-mute">Shipping purchases</span>
              <span className="font-mono tabular font-semibold">3x UR</span>
            </li>
            <li className="flex justify-between border-b border-line pb-3">
              <span className="text-mute">Internet, cable, and phone services</span>
              <span className="font-mono tabular font-semibold">3x UR</span>
            </li>
            <li className="flex justify-between border-b border-line pb-3">
              <span className="text-mute">Online advertising (search and social)</span>
              <span className="font-mono tabular font-semibold">3x UR</span>
            </li>
            <li className="flex justify-between border-b border-line pb-3">
              <span className="text-mute">Combined 3x category cap</span>
              <span className="font-mono tabular font-semibold">$150K/yr</span>
            </li>
            <li className="flex justify-between">
              <span className="text-mute">Everything else</span>
              <span className="font-mono tabular font-semibold">1x UR</span>
            </li>
          </ul>
        </div>
        <div className="max-w-3xl text-[1.0625rem] leading-relaxed text-ink-soft">
          <p>
            Ultimate Rewards points earned on the Ink Business Preferred can be redeemed at 1.25 cents per point through the Chase Travel portal, transferred 1:1 to airline partners (United MileagePlus, British Airways Avios, Air Canada Aeroplan, Singapore Airlines KrisFlyer) or hotel partners (World of Hyatt, IHG One Rewards, Marriott Bonvoy). The Hyatt transfer partner consistently delivers the best cents-per-point value for domestic and international hotel redemptions.
          </p>
        </div>
      </section>

      {/* Fees + APR */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <h2 className="font-display font-bold text-3xl tracking-tight mb-6">Fees and APR</h2>
        <div className="card-flush p-6 max-w-2xl">
          <ul className="space-y-3 text-[0.9375rem]">
            <li className="flex justify-between border-b border-line pb-3">
              <span className="text-mute">Annual fee</span>
              <span className="font-mono tabular font-semibold">$95</span>
            </li>
            <li className="flex justify-between border-b border-line pb-3">
              <span className="text-mute">Purchase APR (variable)</span>
              <span className="font-mono tabular font-semibold">20.49% – 26.49%</span>
            </li>
            <li className="flex justify-between border-b border-line pb-3">
              <span className="text-mute">Foreign transaction fee</span>
              <span className="font-mono tabular font-semibold">$0</span>
            </li>
            <li className="flex justify-between border-b border-line pb-3">
              <span className="text-mute">Balance transfer APR</span>
              <span className="font-mono tabular font-semibold">20.49% – 26.49%</span>
            </li>
            <li className="flex justify-between">
              <span className="text-mute">Cash advance APR</span>
              <span className="font-mono tabular font-semibold">29.99% (variable)</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Sign-up bonus terms */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <h2 className="font-display font-bold text-3xl tracking-tight mb-6">Sign-up Bonus Terms</h2>
        <div className="max-w-3xl text-[1.0625rem] leading-relaxed text-ink-soft">
          <p>
            The current offer is 100,000 Ultimate Rewards points after spending $8,000 on purchases in the first 3 months from account opening. Chase defines purchases as most consumer and business spending, excluding balance transfers, cash advances, and certain fees. Employee card spending counts toward the threshold. The $8,000 minimum is achievable for most small businesses that use the card as their primary payment method across payroll services, vendor payments, advertising, and travel. The bonus posts within 6 to 8 weeks of meeting the spend requirement.
          </p>
        </div>
      </section>

      {/* Travel benefits */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <h2 className="font-display font-bold text-3xl tracking-tight mb-6">Travel Benefits and Insurance</h2>
        <div className="max-w-3xl text-[1.0625rem] leading-relaxed text-ink-soft mb-5">
          <p>
            The Ink Business Preferred includes primary rental car coverage when renting for business purposes, meaning it pays before your personal auto insurance and avoids raising your rates on a claim. Trip cancellation and interruption coverage pays up to $5,000 per trip for prepaid non-refundable travel expenses when your trip is canceled for covered reasons. Baggage delay insurance covers essential purchases after a 6-hour delay. Purchase protection covers new purchases against damage or theft for 120 days up to $10,000 per claim.
          </p>
        </div>
      </section>

      {/* Who it's for */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card p-7">
            <div className="chip chip-lime mb-4">Best for</div>
            <ul className="space-y-3 text-[0.9375rem]">
              <li>Small businesses with meaningful spend across travel, ads, shipping, or phone</li>
              <li>Owners who want to maximize Ultimate Rewards for personal and business travel</li>
              <li>Teams with multiple employee phones who can use the cell protection benefit</li>
            </ul>
          </div>
          <div className="card p-7">
            <div className="chip chip-mute mb-4">Look elsewhere if</div>
            <ul className="space-y-3 text-[0.9375rem]">
              <li>Your business spend is concentrated in one category (the Ink Cash earns 5x on office supplies and telecom up to $25K)</li>
              <li>You want a no-annual-fee business card (consider the Ink Business Cash or Unlimited)</li>
              <li>You need lounge access or elevated travel perks (consider the Amex Business Platinum)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <h2 className="font-display font-bold text-3xl tracking-tight mb-6">How It Compares</h2>
        <div className="card-flush overflow-hidden max-w-3xl">
          <div className="grid grid-cols-4 px-5 py-3 text-xs font-mono uppercase tracking-wider text-mute border-b border-line bg-bg-soft/50">
            <div className="col-span-1">Card</div>
            <div className="col-span-1 text-right">Top Rate</div>
            <div className="col-span-1 text-right">Ann. Fee</div>
            <div className="col-span-1 text-right">Bonus</div>
          </div>
          {[
            { name: "Ink Business Preferred", rate: "3x", fee: "$95", bonus: "100K UR", highlight: true },
            { name: "Amex Business Gold", rate: "4x (2 cats)", fee: "$295", bonus: "70K MR" },
            { name: "Ink Business Cash", rate: "5x (telecom)", fee: "$0", bonus: "75K UR" },
          ].map((row) => (
            <div
              key={row.name}
              className={`grid grid-cols-4 px-5 py-4 items-center border-b border-line-soft last:border-0 ${row.highlight ? "bg-lime/10" : ""}`}
            >
              <div className="col-span-1 font-display font-semibold text-sm">{row.name}</div>
              <div className="col-span-1 text-right font-mono tabular font-semibold">{row.rate}</div>
              <div className="col-span-1 text-right text-mute text-sm">{row.fee}</div>
              <div className="col-span-1 text-right text-mute text-sm">{row.bonus}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <h2 className="font-display font-bold text-3xl tracking-tight mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6 max-w-3xl">
          <Faq q="Does the Ink Business Preferred count as a personal or business card?">
            It is a business card issued by Chase, but it reports to your personal credit for approval purposes. The account itself does not appear on your personal credit report unless you default. You need a business entity or sole proprietorship income to apply.
          </Faq>
          <Faq q="Can I combine Ink Business Preferred points with my personal Chase Sapphire Reserve?">
            Yes. Ultimate Rewards points transfer freely between Chase accounts held by the same person. Points earned on the Ink can be moved to a Sapphire Reserve, where they redeem at 1.5 cents per point through the Chase Travel portal.
          </Faq>
          <Faq q="Does online advertising on Facebook and Google count for the 3x bonus?">
            Yes. Social media advertising and search engine advertising are explicitly included in the online advertising category and earn 3x, subject to the $150,000 annual combined cap across all 3x categories.
          </Faq>
          <Faq q="Is the cell phone insurance worth it?">
            For most businesses it is. Coverage of up to $1,000 per claim with a $100 deductible, and up to 3 claims per 12 months, provides meaningful protection. Simply paying your wireless bill with the card activates the benefit with no additional enrollment.
          </Faq>
          <Faq q="What happens to my 3x earning after the $150K cap?">
            All purchases above the $150,000 combined 3x category threshold in a cardmember year drop to 1x Ultimate Rewards. Chase resets the cap on each account anniversary date, not January 1.
          </Faq>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-20">
        <div className="flex items-center gap-4">
          <Link href="/credit-cards" className="pill pill-ink">
            Compare all credit cards <span aria-hidden>→</span>
          </Link>
          <Link href="/credit-cards" className="pill pill-ghost">
            See the full card table
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
      <div className="font-display font-extrabold text-2xl tabular">{value}</div>
    </div>
  );
}

function Faq({ q, children }: { q: string; children: React.ReactNode }) {
  return (
    <div className="border-b border-line pb-6">
      <div className="font-display font-semibold text-lg mb-2">{q}</div>
      <div className="text-mute text-[0.9375rem] leading-relaxed">{children}</div>
    </div>
  );
}
