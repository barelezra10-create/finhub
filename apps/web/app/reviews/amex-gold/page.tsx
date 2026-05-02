import type { Metadata } from "next";
import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";
import { getBrand } from "@/lib/brands";
import {
  FinancialProductSchema,
  FAQPageSchema,
  BreadcrumbListSchema,
  type FAQItem,
} from "@/components/schemas";

const brand = getBrand("amex-gold")!;

export const metadata: Metadata = {
  title: "American Express Gold Card Review: 4x Dining and Groceries (2026)",
  description:
    "The Amex Gold earns 4x on dining worldwide and 4x on U.S. supermarkets up to $25K per year. Up to $240 in annual credits offset the $325 fee. Full 2026 review with pros, cons, and FAQ.",
  alternates: { canonical: "/reviews/amex-gold" },
};

const faqs: FAQItem[] = [
  {
    question: "Does Costco count as a supermarket for the 4x Amex Gold bonus?",
    answer:
      "No. Amex classifies supermarkets based on merchant category codes. Warehouse clubs like Costco, Sam's Club, and BJ's Wholesale do not qualify for the 4x supermarket rate and earn only 1x. Traditional grocery chains, most natural food stores, and many specialty food shops do qualify.",
  },
  {
    question: "How do I use the $120 dining credit?",
    answer:
      "The dining credit is split as $10 per calendar month. It applies automatically when you pay with your Amex Gold at participating locations, including Grubhub and select other brands. Unused monthly credits expire at the end of each calendar month and do not carry forward.",
  },
  {
    question: "Can I upgrade from the Amex Gold to the Platinum?",
    answer:
      "Yes. American Express allows product changes between cards in the same family. Upgrading to the Platinum (currently $695) gives you airport lounge access, Global Entry credit, and enhanced travel protections, while retaining your existing Membership Rewards balance.",
  },
  {
    question: "Is the Amex Gold charge card or credit card?",
    answer:
      "The Gold is a pay-over-time card. It has no preset spending limit, and many charges must be paid in full each statement period (charge card behavior), but Amex's Pay Over Time feature allows you to carry a balance on eligible purchases at the standard variable APR. Not all charges qualify for Pay Over Time.",
  },
  {
    question: "What is the best use of 60K Membership Rewards points?",
    answer:
      "Transferring to an airline partner typically yields the highest value. Air Canada Aeroplan at 1:1 lets you book Star Alliance flights with reasonable availability and no fuel surcharges. British Airways Avios are valuable for short-haul American Airlines flights (e.g., 7,500 Avios for flights under 1,151 miles). At 1.5 to 2 cents per point via partners, 60K points can be worth $900 to $1,200 toward travel.",
  },
];

export default function Page() {
  return (
    <article className="bg-bg">
      <FinancialProductSchema
        name="American Express Gold Card Review (2026)"
        description="The Amex Gold earns 4x on dining worldwide and 4x on U.S. supermarkets up to $25K per year. Up to $240 in annual credits offset the $325 fee. Full 2026 review with pros, cons, and FAQ."
        slug="/reviews/amex-gold"
        brandName="American Express Gold"
        category="Credit Card"
        ratingValue={8.7}
        reviewCount={1}
      />
      <FAQPageSchema items={faqs} />
      <BreadcrumbListSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Credit Cards", href: "/credit-cards" },
          { name: "Reviews", href: "/reviews" },
          { name: "American Express Gold", href: "/reviews/amex-gold" },
        ]}
      />
      {/* HERO */}
      <section className="relative overflow-hidden bg-bg border-b border-line">
        <div className="max-w-(--max-w-page) mx-auto px-6 pt-14 pb-12">
          <div className="flex items-center gap-4 mb-6">
            <BrandLogo brand={brand} size={72} rounded="lg" />
            <div>
              <span className="chip chip-lime mb-2">Credit Card Review</span>
              <h1 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight leading-tight">
                American Express Gold Card Review (2026)
              </h1>
            </div>
          </div>
          <p className="text-lg text-mute max-w-2xl leading-relaxed">
            The Amex Gold earns{" "}
            <span className="font-mono tabular font-semibold text-ink">4x Membership Rewards</span> at restaurants worldwide and at U.S. supermarkets (up to $25K/year). Up to $240 in annual statement credits can reduce the effective cost of the $325 annual fee for high-frequency diners and grocery shoppers.
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
            <Stat label="Rewards rate" value="4x / 3x / 1x" />
            <Stat label="Annual fee" value="$325" />
            <Stat label="Sign-up bonus" value="60K MR pts" />
            <Stat label="Fintiex Score" value="8.7 / 10" />
          </div>
        </div>
      </section>

      {/* Pros / Cons */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card p-7">
            <div className="chip chip-lime mb-5">Pros</div>
            <ul className="space-y-3 text-[0.9375rem]">
              <li className="flex gap-3"><span className="text-mint font-bold">+</span> 4x at restaurants worldwide and at U.S. supermarkets (up to $25K/year), best category rates in their class</li>
              <li className="flex gap-3"><span className="text-mint font-bold">+</span> 3x on flights booked directly with airlines or through Amex Travel</li>
              <li className="flex gap-3"><span className="text-mint font-bold">+</span> $120/year Uber Cash credit ($10/month, usable on Uber Eats and rides)</li>
              <li className="flex gap-3"><span className="text-mint font-bold">+</span> $120/year dining credit at select restaurant brands ($10/month)</li>
              <li className="flex gap-3"><span className="text-mint font-bold">+</span> $7/month Dunkin credit (new benefit as of 2026)</li>
              <li className="flex gap-3"><span className="text-mint font-bold">+</span> Membership Rewards transfer to 20+ airline and hotel partners, frequently yielding 1.5 to 2+ cents per point</li>
            </ul>
          </div>
          <div className="card p-7">
            <div className="chip chip-mute mb-5">Cons</div>
            <ul className="space-y-3 text-[0.9375rem]">
              <li className="flex gap-3"><span className="text-rose font-bold">-</span> $325 annual fee is a meaningful commitment; requires disciplined credit usage to net positive</li>
              <li className="flex gap-3"><span className="text-rose font-bold">-</span> Credits are monthly-fractured and issuer-specific, so unused portions simply expire</li>
              <li className="flex gap-3"><span className="text-rose font-bold">-</span> No lounge access included; that benefit requires upgrading to the Amex Platinum ($695 fee)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <h2 className="font-display font-bold text-3xl tracking-tight mb-6">Overview</h2>
        <div className="space-y-5 text-[1.0625rem] leading-relaxed text-ink-soft max-w-3xl">
          <p>
            The American Express Gold Card occupies the sweet spot in the Amex consumer card lineup between the no-fee Amex EveryDay and the premium Amex Platinum. It is purpose-built for people whose largest discretionary spending categories are dining and groceries. For a household spending $500 per month at restaurants and $600 per month at supermarkets, the Amex Gold earns 4,400 Membership Rewards points per month on those categories alone: 13,200 points per quarter before accounting for any other spend. At a conservative transfer valuation of 1.5 cents per point, that is $1,980 per year in travel value from those two categories.
          </p>
          <p>
            The $325 annual fee is real, but the card's credit structure is designed to offset a significant portion of it for active users. The $120 Uber Cash credit ($10 per month, applied automatically to Uber and Uber Eats purchases when your Amex Gold is set as the default payment method) is straightforward for urban cardholders. The $120 dining credit requires more intentionality: it applies only at participating restaurants such as Grubhub, The Cheesecake Factory, Goldbelly, Wine.com, and select other partners, and it issues as $10 per month. Unused monthly portions do not roll over. The $7/month Dunkin credit added in 2026 rounds out an effective $324 in annual credits for maximizers.
          </p>
          <p>
            Membership Rewards points earned on the Gold transfer to over 20 airline and hotel programs. The most frequently cited high-value transfers are to Air Canada Aeroplan (for Star Alliance flights including United), British Airways Avios (short-haul redemptions), and Delta SkyMiles. Hotel partners include Hilton Honors (1:2 transfer ratio), Marriott Bonvoy (1:1), and Choice Privileges. The Gold's 4x earning rate in dining makes it a strong engine for accumulating points destined for premium cabin award flights.
          </p>
        </div>
      </section>

      {/* Rewards structure */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <h2 className="font-display font-bold text-3xl tracking-tight mb-6">Rewards Structure</h2>
        <div className="card-flush p-6 max-w-2xl mb-6">
          <ul className="space-y-3 text-[0.9375rem]">
            <li className="flex justify-between border-b border-line pb-3">
              <span className="text-mute">Restaurants worldwide</span>
              <span className="font-mono tabular font-semibold">4x MR</span>
            </li>
            <li className="flex justify-between border-b border-line pb-3">
              <span className="text-mute">U.S. supermarkets (first $25K/year)</span>
              <span className="font-mono tabular font-semibold">4x MR</span>
            </li>
            <li className="flex justify-between border-b border-line pb-3">
              <span className="text-mute">U.S. supermarkets above $25K/year</span>
              <span className="font-mono tabular font-semibold">1x MR</span>
            </li>
            <li className="flex justify-between border-b border-line pb-3">
              <span className="text-mute">Flights (direct or Amex Travel)</span>
              <span className="font-mono tabular font-semibold">3x MR</span>
            </li>
            <li className="flex justify-between">
              <span className="text-mute">All other purchases</span>
              <span className="font-mono tabular font-semibold">1x MR</span>
            </li>
          </ul>
        </div>
        <div className="max-w-3xl text-[1.0625rem] leading-relaxed text-ink-soft">
          <p>
            Membership Rewards points do not expire as long as your account is open. They can be redeemed via Amex Travel at 1 cent per point (1.25 cents per point for Platinum cardholders), transferred to partners, used for statement credits at 0.6 cents per point, or converted to gift cards. Transfers to airline partners consistently produce the highest per-point value and are the recommended redemption path for frequent travelers.
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
              <span className="font-mono tabular font-semibold">$325</span>
            </li>
            <li className="flex justify-between border-b border-line pb-3">
              <span className="text-mute">Purchase APR (variable)</span>
              <span className="font-mono tabular font-semibold">21.24% – 29.99%</span>
            </li>
            <li className="flex justify-between border-b border-line pb-3">
              <span className="text-mute">Foreign transaction fee</span>
              <span className="font-mono tabular font-semibold">$0</span>
            </li>
            <li className="flex justify-between border-b border-line pb-3">
              <span className="text-mute">Additional cardholder fee</span>
              <span className="font-mono tabular font-semibold">$0 (first 5)</span>
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
            The current welcome offer is 60,000 Membership Rewards points after spending $6,000 on eligible purchases within the first 6 months of card membership. Amex also periodically offers elevated bonuses of 75,000 or 90,000 points through targeted mailers or the CardMatch tool. At a 1.5 cent per point valuation, 60,000 points is worth $900 toward travel, making the effective net fee in year one approximately $0 to negative after credits. New cardmember offers are not available to current or previous Gold cardholders within the last 7 years per Amex's terms.
          </p>
        </div>
      </section>

      {/* Travel benefits */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <h2 className="font-display font-bold text-3xl tracking-tight mb-6">Credits, Perks, and Benefits</h2>
        <div className="max-w-3xl text-[1.0625rem] leading-relaxed text-ink-soft mb-5">
          <p>
            The Amex Gold's benefit package centers on its three statement credit programs. The $120 Uber Cash credit is the most flexible: $10 per month added automatically to your Uber account when Gold is your default. The $120 dining credit requires using the card at select Grubhub, participating restaurant brands, and a short list of approved merchants; it issues as $10 per month and unused amounts do not roll forward. The $7 monthly Dunkin credit is the newest addition. Beyond credits, the Gold provides baggage insurance up to $1,250 for carry-on and $500 for checked bags on covered common-carrier trips. Secondary car rental loss and damage insurance applies when you decline the rental company's collision coverage. No airport lounge access is included at this tier.
          </p>
        </div>
      </section>

      {/* Who it's for */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card p-7">
            <div className="chip chip-lime mb-4">Best for</div>
            <ul className="space-y-3 text-[0.9375rem]">
              <li>Heavy dining and grocery spenders who can extract value from the 4x categories</li>
              <li>Amex Membership Rewards collectors building toward premium cabin award redemptions</li>
              <li>Urban cardholders who already use Uber or Uber Eats regularly</li>
            </ul>
          </div>
          <div className="card p-7">
            <div className="chip chip-mute mb-4">Look elsewhere if</div>
            <ul className="space-y-3 text-[0.9375rem]">
              <li>You do not dine out frequently and shop at wholesale clubs (which are not classified as supermarkets by Amex)</li>
              <li>You want lounge access, which requires the Amex Platinum at $695</li>
              <li>You prefer a single flat-rate card with no category management or monthly credits to track</li>
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
            <div className="col-span-1 text-right">Dining Rate</div>
            <div className="col-span-1 text-right">Ann. Fee</div>
            <div className="col-span-1 text-right">Bonus</div>
          </div>
          {[
            { name: "Amex Gold", dining: "4x", fee: "$325", bonus: "60K MR", highlight: true },
            { name: "Chase Sapphire Preferred", dining: "3x", fee: "$95", bonus: "60K UR" },
            { name: "Capital One Savor Cash", dining: "3%", fee: "$95", bonus: "$300 cash" },
          ].map((row) => (
            <div
              key={row.name}
              className={`grid grid-cols-4 px-5 py-4 items-center border-b border-line-soft last:border-0 ${row.highlight ? "bg-lime/10" : ""}`}
            >
              <div className="col-span-1 font-display font-semibold text-sm">{row.name}</div>
              <div className="col-span-1 text-right font-mono tabular font-semibold">{row.dining}</div>
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
          <Faq q="Does Costco count as a supermarket for the 4x Amex Gold bonus?">
            No. Amex classifies supermarkets based on merchant category codes. Warehouse clubs like Costco, Sam's Club, and BJ's Wholesale do not qualify for the 4x supermarket rate and earn only 1x. Traditional grocery chains, most natural food stores, and many specialty food shops do qualify.
          </Faq>
          <Faq q="How do I use the $120 dining credit?">
            The dining credit is split as $10 per calendar month. It applies automatically when you pay with your Amex Gold at participating locations, including Grubhub and select other brands. Unused monthly credits expire at the end of each calendar month and do not carry forward.
          </Faq>
          <Faq q="Can I upgrade from the Amex Gold to the Platinum?">
            Yes. American Express allows product changes between cards in the same family. Upgrading to the Platinum (currently $695) gives you airport lounge access, Global Entry credit, and enhanced travel protections, while retaining your existing Membership Rewards balance.
          </Faq>
          <Faq q="Is the Amex Gold charge card or credit card?">
            The Gold is a pay-over-time card. It has no preset spending limit, and many charges must be paid in full each statement period (charge card behavior), but Amex's Pay Over Time feature allows you to carry a balance on eligible purchases at the standard variable APR. Not all charges qualify for Pay Over Time.
          </Faq>
          <Faq q="What is the best use of 60K Membership Rewards points?">
            Transferring to an airline partner typically yields the highest value. Air Canada Aeroplan at 1:1 lets you book Star Alliance flights with reasonable availability and no fuel surcharges. British Airways Avios are valuable for short-haul American Airlines flights (e.g., 7,500 Avios for flights under 1,151 miles). At 1.5 to 2 cents per point via partners, 60K points can be worth $900 to $1,200 toward travel.
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
