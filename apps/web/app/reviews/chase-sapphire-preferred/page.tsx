import type { Metadata } from "next";
import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";
import { getBrand } from "@/lib/brands";

const brand = getBrand("chase-sapphire-preferred")!;

export const metadata: Metadata = {
  title: "Chase Sapphire Preferred Review: 60K Bonus, 5x Travel Points (2026)",
  description:
    "Chase Sapphire Preferred earns 5x on travel via Chase and 3x on dining for $95/year. Full 2026 review: rewards, transfer partners, sign-up bonus, and verdict.",
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
              <span className="chip chip-violet mb-2">Credit Card Review</span>
              <h1 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight leading-tight">
                Chase Sapphire Preferred Review (2026)
              </h1>
            </div>
          </div>
          <p className="text-lg text-mute max-w-2xl leading-relaxed">
            The Sapphire Preferred earns{" "}
            <span className="font-mono tabular font-semibold text-ink">5x on Chase travel</span>{" "}
            and 3x on dining with a 60,000-point sign-up bonus worth at least $750 through Chase
            Travel. Here is our full 2026 review.
          </p>
          <div className="mt-4 text-xs font-mono text-mute uppercase tracking-wider">
            By the Fintiex Rate Desk · Updated April 28, 2026
          </div>
        </div>
      </section>

      {/* TL;DR */}
      <section className="max-w-(--max-w-page) mx-auto px-6 py-10">
        <div className="card-flush p-8" style={{ boxShadow: "var(--shadow-pop)" }}>
          <div className="chip chip-ink mb-6">TL;DR</div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <Stat label="Rewards Rate" value="5x / 3x / 2x" />
            <Stat label="Annual Fee" value="$95" />
            <Stat label="Sign-Up Bonus" value="60K UR pts" />
            <Stat label="Fintiex Score" value="9.1 / 10" />
          </div>
        </div>
      </section>

      {/* Pros / Cons */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card p-7">
            <div className="chip chip-lime mb-5">Pros</div>
            <ul className="space-y-3 text-[0.9375rem]">
              <li className="flex gap-3"><span className="text-mint font-bold">+</span> 60,000 Ultimate Rewards points after $4,000 spend in first 3 months</li>
              <li className="flex gap-3"><span className="text-mint font-bold">+</span> 5x points on travel booked through Chase Travel portal</li>
              <li className="flex gap-3"><span className="text-mint font-bold">+</span> 3x on dining, including delivery services and eligible takeout</li>
              <li className="flex gap-3"><span className="text-mint font-bold">+</span> 25% bonus when redeeming through Chase Travel (points worth 1.25 cents each)</li>
              <li className="flex gap-3"><span className="text-mint font-bold">+</span> Transfer to 14 airline and hotel partners at 1:1 ratio, including United, Hyatt, Southwest</li>
              <li className="flex gap-3"><span className="text-mint font-bold">+</span> Primary rental car insurance, trip cancellation up to $10,000 per person</li>
              <li className="flex gap-3"><span className="text-mint font-bold">+</span> $50 annual hotel credit through Chase Travel</li>
            </ul>
          </div>
          <div className="card p-7">
            <div className="chip chip-mute mb-5">Cons</div>
            <ul className="space-y-3 text-[0.9375rem]">
              <li className="flex gap-3"><span className="text-rose font-bold">-</span> $95 annual fee (not waived the first year)</li>
              <li className="flex gap-3"><span className="text-rose font-bold">-</span> No lounge access (requires upgrading to Sapphire Reserve at $550/year)</li>
              <li className="flex gap-3"><span className="text-rose font-bold">-</span> 5x on travel is only in the Chase portal; direct airline bookings earn 2x</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <h2 className="font-display font-bold text-3xl tracking-tight mb-6">Overview</h2>
        <div className="space-y-5 text-[1.0625rem] leading-relaxed text-ink-soft max-w-3xl">
          <p>
            The Chase Sapphire Preferred is the most recommended entry-level travel card in the
            United States for a reason: it combines a substantial sign-up bonus, a strong ongoing
            earn rate on the two biggest discretionary categories (travel and dining), and access
            to the most valuable points currency in consumer credit, Chase Ultimate Rewards. For
            $95 a year, the value proposition is difficult to beat if you travel at least a couple
            of times per year and eat out regularly.
          </p>
          <p>
            Ultimate Rewards points are not like airline miles that lock you into a single carrier.
            They transfer at a 1:1 ratio to 14 partners including United Airlines, Southwest,
            British Airways, Air France/KLM, Hyatt, Marriott, and IHG. The Hyatt transfer is
            particularly valuable: 60,000 UR points can cover multiple nights at Park Hyatt
            properties that retail for $400 to $800 per night. When used this way, the effective
            value per point exceeds 2 cents, more than doubling the 1.25 cents-per-point Chase
            Travel redemption rate.
          </p>
          <p>
            The card requires good to excellent credit (typically 700+ FICO). Chase applies its
            5/24 rule, meaning applicants who have opened 5 or more credit cards in the past 24
            months from any issuer will generally be denied. Plan your application timing
            accordingly if you are managing a credit card strategy.
          </p>
        </div>
      </section>

      {/* Rewards Structure */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <h2 className="font-display font-bold text-3xl tracking-tight mb-6">Rewards Structure</h2>
        <div className="card-flush p-6 max-w-2xl mb-5">
          <ul className="space-y-3 text-[0.9375rem]">
            <li className="flex justify-between border-b border-line pb-3">
              <span className="text-mute">Chase Travel portal</span>
              <span className="font-mono tabular font-semibold">5x points</span>
            </li>
            <li className="flex justify-between border-b border-line pb-3">
              <span className="text-mute">Dining + eligible delivery</span>
              <span className="font-mono tabular font-semibold">3x points</span>
            </li>
            <li className="flex justify-between border-b border-line pb-3">
              <span className="text-mute">Online grocery purchases</span>
              <span className="font-mono tabular font-semibold">3x points</span>
            </li>
            <li className="flex justify-between border-b border-line pb-3">
              <span className="text-mute">Select streaming services</span>
              <span className="font-mono tabular font-semibold">3x points</span>
            </li>
            <li className="flex justify-between border-b border-line pb-3">
              <span className="text-mute">All other travel</span>
              <span className="font-mono tabular font-semibold">2x points</span>
            </li>
            <li className="flex justify-between">
              <span className="text-mute">All other purchases</span>
              <span className="font-mono tabular font-semibold">1x points</span>
            </li>
          </ul>
        </div>
        <div className="max-w-3xl text-[1.0625rem] leading-relaxed text-ink-soft">
          <p>
            Transfer partners include United MileagePlus, Southwest Rapid Rewards, British Airways
            Avios, Air France/KLM Flying Blue, Singapore KrisFlyer, Hyatt, Marriott, IHG, and
            several others. All transfers are at a 1:1 ratio with no minimum transfer amount.
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
              <span className="text-mute">Intro APR</span>
              <span className="font-mono tabular font-semibold">None</span>
            </li>
            <li className="flex justify-between border-b border-line pb-3">
              <span className="text-mute">Ongoing APR</span>
              <span className="font-mono tabular font-semibold">20.49%--27.49% variable</span>
            </li>
            <li className="flex justify-between border-b border-line pb-3">
              <span className="text-mute">Foreign transaction fee</span>
              <span className="font-mono tabular font-semibold">$0</span>
            </li>
            <li className="flex justify-between">
              <span className="text-mute">Balance transfer fee</span>
              <span className="font-mono tabular font-semibold">5% (min $5)</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Sign-Up Bonus */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <h2 className="font-display font-bold text-3xl tracking-tight mb-6">Sign-Up Bonus</h2>
        <div className="max-w-3xl text-[1.0625rem] leading-relaxed text-ink-soft">
          <p>
            Earn{" "}
            <span className="font-mono tabular font-semibold text-ink">60,000</span> Ultimate
            Rewards points after spending $4,000 on purchases in the first 3 months. Through Chase
            Travel, those points are worth $750 in travel redemptions at 1.25 cents each. If
            transferred to Hyatt for peak-demand hotel redemptions, the same 60,000 points can
            realistically be worth $1,200 or more depending on the property and dates. The $4,000
            spend requirement is moderate; a household that puts groceries, gas, dining, and
            utilities on the card will typically hit it within 2 months.
          </p>
        </div>
      </section>

      {/* Travel Benefits */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <h2 className="font-display font-bold text-3xl tracking-tight mb-6">Travel Benefits and Insurance</h2>
        <div className="max-w-3xl text-[1.0625rem] leading-relaxed text-ink-soft space-y-4">
          <p>
            <span className="font-semibold text-ink">Primary rental car insurance:</span> Collision
            damage waiver covers the full value of the rental vehicle when you decline the rental
            company's coverage. Primary means it pays before your personal auto insurance, keeping
            your personal premiums intact.
          </p>
          <p>
            <span className="font-semibold text-ink">Trip cancellation and interruption:</span> Up
            to $10,000 per person and $20,000 per trip for non-refundable travel expenses if a
            trip is canceled or interrupted due to covered reasons such as illness or severe weather.
          </p>
          <p>
            <span className="font-semibold text-ink">Baggage delay insurance:</span> Up to $100
            per day for 5 days when checked bags are delayed more than 6 hours.
          </p>
          <p>
            <span className="font-semibold text-ink">$50 hotel credit:</span> Earned annually on
            hotel stays booked through Chase Travel. Effectively reduces the net annual fee to $45
            for cardholders who use it.
          </p>
        </div>
      </section>

      {/* Who it's for */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card p-7">
            <div className="chip chip-lime mb-4">Best for</div>
            <ul className="space-y-3 text-[0.9375rem]">
              <li>Travel beginners who want points flexibility across 14 partners</li>
              <li>Households with high dining and food delivery spend</li>
              <li>Anyone willing to pay $95/year for primary rental car coverage alone</li>
            </ul>
          </div>
          <div className="card p-7">
            <div className="chip chip-mute mb-4">Look elsewhere if</div>
            <ul className="space-y-3 text-[0.9375rem]">
              <li>You want lounge access (requires the Sapphire Reserve at $550/year)</li>
              <li>You prefer flat-rate simplicity (Active Cash or Double Cash at $0 annual fee)</li>
              <li>You spend heavily on non-travel, non-dining categories (catch-all rate is only 1x)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <h2 className="font-display font-bold text-3xl tracking-tight mb-6">How It Compares</h2>
        <div className="card-flush overflow-hidden max-w-3xl">
          <div className="grid grid-cols-4 px-5 py-3 text-xs font-mono uppercase tracking-wider text-mute border-b border-line bg-bg-soft/50">
            <div className="col-span-1">Card</div>
            <div className="col-span-1 text-right">Top Rate</div>
            <div className="col-span-1 text-right">Annual Fee</div>
            <div className="col-span-1 text-right">Bonus</div>
          </div>
          {[
            { name: "Sapphire Preferred", rate: "5x travel", fee: "$95", bonus: "60K pts", highlight: true },
            { name: "Amex Gold", rate: "4x dining", fee: "$325", bonus: "See terms" },
            { name: "Active Cash", rate: "2% flat", fee: "$0", bonus: "$200" },
          ].map((row) => (
            <div
              key={row.name}
              className={`grid grid-cols-4 px-5 py-4 items-center border-b border-line-soft last:border-0 ${row.highlight ? "bg-lime/10" : ""}`}
            >
              <div className="col-span-1 font-display font-semibold text-sm">{row.name}</div>
              <div className="col-span-1 text-right font-mono tabular font-semibold text-sm">{row.rate}</div>
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
          <Faq q="What is the Chase 5/24 rule and does it affect this card?">
            Chase generally declines applications from people who have opened 5 or more credit
            cards (from any issuer) in the past 24 months. The Sapphire Preferred is subject to
            this rule. Check your application timing carefully before applying.
          </Faq>
          <Faq q="Are Ultimate Rewards points worth more than 1 cent each?">
            Yes. Through Chase Travel, they are worth 1.25 cents each. When transferred to Hyatt
            for premium redemptions, experienced travelers report values of 1.5 to 2.5 cents per
            point or higher. Cash back redemption gives only 1 cent per point.
          </Faq>
          <Faq q="Can I product-change from Sapphire Preferred to Sapphire Reserve?">
            Yes. Chase allows product changes between Sapphire cards. You can call the number on
            the back of your card to request the upgrade. You may receive a new bonus offer but
            cannot receive a Sapphire sign-up bonus if you have already received one in the past
            48 months.
          </Faq>
          <Faq q="Does the Sapphire Preferred charge foreign transaction fees?">
            No. There are no foreign transaction fees, making it a solid card for international
            travel. The lack of lounge access is the main gap at this price point for frequent
            international travelers.
          </Faq>
          <Faq q="How long does it take for the sign-up bonus to post?">
            The 60,000-point bonus typically posts within 6 to 8 weeks of meeting the spending
            requirement. Once posted, points can be immediately transferred to airline and hotel
            partners or redeemed through Chase Travel.
          </Faq>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-20">
        <div className="flex items-center gap-4">
          <Link href="/credit-cards" className="pill pill-ink">
            Compare all credit cards <span aria-hidden>→</span>
          </Link>
          <Link href="/credit-cards/travel" className="pill pill-ghost">
            Best travel cards
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
