import type { Metadata } from "next";
import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";
import { getBrand } from "@/lib/brands";

const brand = getBrand("wells-active-cash")!;

export const metadata: Metadata = {
  title: "Wells Fargo Active Cash Review: 2% Cash Back, No Annual Fee (2026)",
  description:
    "The Wells Fargo Active Cash earns unlimited 2% cash back on every purchase with no annual fee. Full 2026 review: rewards, fees, APR, sign-up bonus, and verdict.",
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
                Wells Fargo Active Cash Review (2026)
              </h1>
            </div>
          </div>
          <p className="text-lg text-mute max-w-2xl leading-relaxed">
            The Active Cash earns{" "}
            <span className="font-mono tabular font-semibold text-ink">2% cash back</span> on every
            purchase with no annual fee, no rotating categories, and no cap. Here is our full 2026
            review.
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
            <Stat label="Rewards Rate" value="2% flat" />
            <Stat label="Annual Fee" value="$0" />
            <Stat label="Sign-Up Bonus" value="$200 cash" />
            <Stat label="Fintiex Score" value="8.6 / 10" />
          </div>
        </div>
      </section>

      {/* Pros / Cons */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card p-7">
            <div className="chip chip-lime mb-5">Pros</div>
            <ul className="space-y-3 text-[0.9375rem]">
              <li className="flex gap-3"><span className="text-mint font-bold">+</span> Unlimited 2% cash rewards on all purchases, no categories to track</li>
              <li className="flex gap-3"><span className="text-mint font-bold">+</span> $0 annual fee</li>
              <li className="flex gap-3"><span className="text-mint font-bold">+</span> $200 cash rewards bonus after $500 in purchases in the first 3 months</li>
              <li className="flex gap-3"><span className="text-mint font-bold">+</span> 0% intro APR for 12 months on purchases and qualifying balance transfers</li>
              <li className="flex gap-3"><span className="text-mint font-bold">+</span> Cell phone protection up to $600 per claim (2 claims per year) when you pay your phone bill with the card</li>
              <li className="flex gap-3"><span className="text-mint font-bold">+</span> Visa Signature perks including travel emergency assistance and roadside dispatch</li>
            </ul>
          </div>
          <div className="card p-7">
            <div className="chip chip-mute mb-5">Cons</div>
            <ul className="space-y-3 text-[0.9375rem]">
              <li className="flex gap-3"><span className="text-rose font-bold">-</span> No bonus categories for dining, travel, or groceries to outpace the flat 2%</li>
              <li className="flex gap-3"><span className="text-rose font-bold">-</span> 3% foreign transaction fee makes it a poor choice for international travel</li>
              <li className="flex gap-3"><span className="text-rose font-bold">-</span> Balance transfer fee of 3% intro (then up to 5%) reduces net BT value</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <h2 className="font-display font-bold text-3xl tracking-tight mb-6">Overview</h2>
        <div className="space-y-5 text-[1.0625rem] leading-relaxed text-ink-soft max-w-3xl">
          <p>
            The Wells Fargo Active Cash Card is one of the clearest value propositions in consumer
            credit: unlimited 2% cash rewards on every purchase you make, with no annual fee and no
            complicated category structure to manage. For cardholders who want maximum simplicity,
            the math is straightforward. Everything earns 2%. Pay your grocery bill, your utility,
            your Amazon order, your insurance premium. All of it earns 2% without any mental
            overhead.
          </p>
          <p>
            Wells Fargo launched the Active Cash in 2021, positioning it as a direct competitor to
            the Citi Double Cash. The key differentiators are the sign-up bonus ($200 after $500
            spend in 3 months, one of the lowest spend thresholds in its class), the introductory
            0% APR on purchases, and the cell phone protection benefit. Cell phone protection is
            rare among no-fee cards and provides real financial value if you carry a flagship phone
            worth $800 or more.
          </p>
          <p>
            The card belongs in a wallet as either a primary daily driver or a catch-all for
            purchases that do not hit bonus categories on other cards. A household spending $30,000
            per year across all categories earns $600 in cash rewards with zero annual cost to
            subtract from that figure. That is a real, consistent return with zero behavioral
            changes required.
          </p>
        </div>
      </section>

      {/* Rewards Structure */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <h2 className="font-display font-bold text-3xl tracking-tight mb-6">Rewards Structure</h2>
        <div className="card-flush p-6 max-w-2xl mb-5">
          <ul className="space-y-3 text-[0.9375rem]">
            <li className="flex justify-between border-b border-line pb-3">
              <span className="text-mute">All purchases</span>
              <span className="font-mono tabular font-semibold">2% cash rewards</span>
            </li>
            <li className="flex justify-between border-b border-line pb-3">
              <span className="text-mute">Earnings cap</span>
              <span className="font-mono tabular font-semibold">Unlimited</span>
            </li>
            <li className="flex justify-between">
              <span className="text-mute">Redemption options</span>
              <span className="font-mono tabular font-semibold">Statement credit, direct deposit, ATM</span>
            </li>
          </ul>
        </div>
        <div className="max-w-3xl text-[1.0625rem] leading-relaxed text-ink-soft">
          <p>
            Cash rewards are earned as a percentage of net purchases and can be redeemed starting
            at $1 with no minimum. You can redeem directly to a Wells Fargo checking or savings
            account, apply as a statement credit, or withdraw at a Wells Fargo ATM in $20
            increments using your card.
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
              <span className="font-mono tabular font-semibold">$0</span>
            </li>
            <li className="flex justify-between border-b border-line pb-3">
              <span className="text-mute">Intro APR (purchases)</span>
              <span className="font-mono tabular font-semibold">0% for 12 months</span>
            </li>
            <li className="flex justify-between border-b border-line pb-3">
              <span className="text-mute">Intro APR (balance transfers)</span>
              <span className="font-mono tabular font-semibold">0% for 12 months</span>
            </li>
            <li className="flex justify-between border-b border-line pb-3">
              <span className="text-mute">Ongoing APR</span>
              <span className="font-mono tabular font-semibold">19.49%--29.49% variable</span>
            </li>
            <li className="flex justify-between border-b border-line pb-3">
              <span className="text-mute">Balance transfer fee</span>
              <span className="font-mono tabular font-semibold">3% intro, then up to 5%</span>
            </li>
            <li className="flex justify-between">
              <span className="text-mute">Foreign transaction fee</span>
              <span className="font-mono tabular font-semibold">3%</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Sign-up Bonus */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <h2 className="font-display font-bold text-3xl tracking-tight mb-6">Sign-Up Bonus</h2>
        <div className="max-w-3xl text-[1.0625rem] leading-relaxed text-ink-soft">
          <p>
            Earn a <span className="font-mono tabular font-semibold text-ink">$200</span> cash
            rewards bonus after spending $500 on purchases in the first 3 months from account
            opening. The $500 threshold is among the lowest in the 2% cash back card category,
            making this attainable for nearly any new cardholder within the qualification window.
            The bonus appears as cash rewards in your account and can be redeemed immediately
            through any of the standard redemption channels.
          </p>
        </div>
      </section>

      {/* Perks */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <h2 className="font-display font-bold text-3xl tracking-tight mb-6">Additional Perks</h2>
        <div className="max-w-3xl text-[1.0625rem] leading-relaxed text-ink-soft space-y-4">
          <p>
            <span className="font-semibold text-ink">Cell phone protection:</span> Receive up to
            $600 per claim (with a $25 deductible) against covered damage or theft when you pay
            your monthly wireless bill with the Active Cash. Up to 2 claims per 12-month period,
            maximum $1,200 per year. This is a standout benefit for a no-annual-fee card.
          </p>
          <p>
            <span className="font-semibold text-ink">Visa Signature benefits:</span> Includes
            24/7 travel and emergency assistance, roadside dispatch, travel accident insurance,
            and access to the Visa Signature Luxury Hotel Collection.
          </p>
          <p>
            <span className="font-semibold text-ink">My Wells Fargo Deals:</span> Earn additional
            cash back from select merchant offers activated directly in the Wells Fargo app or
            online portal.
          </p>
        </div>
      </section>

      {/* Who it's for */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card p-7">
            <div className="chip chip-lime mb-4">Best for</div>
            <ul className="space-y-3 text-[0.9375rem]">
              <li>Anyone who wants maximum simplicity: one card, one rate, no tracking</li>
              <li>Households with diverse spending that does not concentrate in any single category</li>
              <li>People who want a strong catch-all card to pair with a category bonus card</li>
            </ul>
          </div>
          <div className="card p-7">
            <div className="chip chip-mute mb-4">Look elsewhere if</div>
            <ul className="space-y-3 text-[0.9375rem]">
              <li>You spend heavily on travel and dining (Chase Sapphire Preferred or Amex Gold will outperform)</li>
              <li>You plan to use the card abroad (3% foreign transaction fee is avoidable)</li>
              <li>You need 21 months of 0% APR (Wells Fargo Reflect goes longer)</li>
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
            <div className="col-span-1 text-right">Cash Back</div>
            <div className="col-span-1 text-right">Annual Fee</div>
            <div className="col-span-1 text-right">Bonus</div>
          </div>
          {[
            { name: "Active Cash", rate: "2% flat", fee: "$0", bonus: "$200", highlight: true },
            { name: "Citi Double Cash", rate: "2% (1+1)", fee: "$0", bonus: "None" },
            { name: "Discover it", rate: "5% / 1%", fee: "$0", bonus: "Match yr 1" },
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
          <Faq q="Is the 2% cash back on the Active Cash truly unlimited?">
            Yes. There is no quarterly cap, no annual spending limit, and no category restriction.
            Every net purchase earns 2% cash rewards regardless of merchant type or purchase size.
          </Faq>
          <Faq q="What counts toward the $500 sign-up bonus spend requirement?">
            Net purchases including everyday spending count. Balance transfers, cash advances, and
            Wells Fargo-specific fees do not count toward the $500 threshold.
          </Faq>
          <Faq q="How does the cell phone protection work?">
            Pay your monthly phone bill with the Active Cash. If your phone is damaged or stolen,
            file a claim for reimbursement up to $600 per occurrence with a $25 deductible.
            Coverage applies to phones on your plan. Up to 2 claims allowed per 12 months.
          </Faq>
          <Faq q="Can I redeem cash rewards to a non-Wells Fargo account?">
            Standard redemptions go to Wells Fargo accounts or as a statement credit. You can also
            redeem at a Wells Fargo ATM in $20 increments using the card and your PIN.
          </Faq>
          <Faq q="How does the Active Cash compare to the Citi Double Cash?">
            Both earn 2% with no annual fee. The Active Cash wins on the upfront bonus ($200 after
            $500 spend) and the cell phone protection. The Double Cash allows ThankYou Points
            conversion and has a slightly longer balance transfer 0% period of 18 months versus 12.
            For pure cash back with a bonus, Active Cash wins. For balance transfers, Double Cash
            is marginally better.
          </Faq>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-20">
        <div className="flex items-center gap-4">
          <Link href="/credit-cards" className="pill pill-ink">
            Compare all credit cards <span aria-hidden>→</span>
          </Link>
          <Link href="/credit-cards/cash-back" className="pill pill-ghost">
            Best cash back cards
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
