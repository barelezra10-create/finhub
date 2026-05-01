import type { Metadata } from "next";
import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";
import { getBrand } from "@/lib/brands";

const brand = getBrand("citi-double-cash")!;

export const metadata: Metadata = {
  title: "Citi Double Cash Review: 2% Cash Back, No Annual Fee (2026)",
  description:
    "Citi Double Cash earns 2% cash back (1% when you buy, 1% when you pay) with no annual fee and ThankYou Points conversion. Full 2026 review: rewards, fees, and verdict.",
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
                Citi Double Cash Review (2026)
              </h1>
            </div>
          </div>
          <p className="text-lg text-mute max-w-2xl leading-relaxed">
            The Double Cash earns{" "}
            <span className="font-mono tabular font-semibold text-ink">2% cash back</span> on
            everything (1% when you buy, 1% when you pay) with no annual fee and the option to
            convert cash to Citi ThankYou points. Here is our full 2026 review.
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
            <Stat label="Rewards Rate" value="2% cash back" />
            <Stat label="Annual Fee" value="$0" />
            <Stat label="BT Intro APR" value="0% / 18mo" />
            <Stat label="Fintiex Score" value="8.5 / 10" />
          </div>
        </div>
      </section>

      {/* Pros / Cons */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card p-7">
            <div className="chip chip-lime mb-5">Pros</div>
            <ul className="space-y-3 text-[0.9375rem]">
              <li className="flex gap-3"><span className="text-mint font-bold">+</span> Effective 2% cash back on all purchases with no category restrictions</li>
              <li className="flex gap-3"><span className="text-mint font-bold">+</span> $0 annual fee</li>
              <li className="flex gap-3"><span className="text-mint font-bold">+</span> 0% intro APR for 18 months on balance transfers (3% fee)</li>
              <li className="flex gap-3"><span className="text-mint font-bold">+</span> Cash back converts to Citi ThankYou points at 1:1, enabling transfer to airline partners</li>
              <li className="flex gap-3"><span className="text-mint font-bold">+</span> No rotating categories or activation requirements</li>
              <li className="flex gap-3"><span className="text-mint font-bold">+</span> Free FICO score access through Citi mobile</li>
            </ul>
          </div>
          <div className="card p-7">
            <div className="chip chip-mute mb-5">Cons</div>
            <ul className="space-y-3 text-[0.9375rem]">
              <li className="flex gap-3"><span className="text-rose font-bold">-</span> No traditional sign-up bonus (unlike Wells Fargo Active Cash at $200)</li>
              <li className="flex gap-3"><span className="text-rose font-bold">-</span> ThankYou partner transfers require a separate premium card (Citi Strata Premier) to unlock full value</li>
              <li className="flex gap-3"><span className="text-rose font-bold">-</span> 3% foreign transaction fee</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <h2 className="font-display font-bold text-3xl tracking-tight mb-6">Overview</h2>
        <div className="space-y-5 text-[1.0625rem] leading-relaxed text-ink-soft max-w-3xl">
          <p>
            The Citi Double Cash Card has been the benchmark for no-annual-fee flat-rate cash back
            since Citi introduced it in 2014. The mechanics are simple: earn 1% when you make a
            purchase and another 1% when you pay the bill. Net result: 2% on everything, with the
            structure designed to nudge cardholders toward paying in full rather than revolving a
            balance. It is an elegant alignment of incentives.
          </p>
          <p>
            The more interesting development is the ThankYou points angle. Since Citi relaunched
            the Double Cash as a ThankYou points card, cash back rewards can be converted to
            ThankYou points and, when paired with a premium Citi card like the Strata Premier,
            transferred to airline partners including Turkish Airlines Miles&amp;Smiles, Avianca
            LifeMiles, and Singapore KrisFlyer. For cardholders willing to engage with the transfer
            game, the effective value per point can exceed 2 cents, making the Double Cash a
            surprisingly versatile everyday earner.
          </p>
          <p>
            Without a premium Citi card, cash back redemption is straightforward: statement credit,
            direct deposit, or check starting at $25. The card does not offer a traditional
            upfront bonus, which is the main reason it occasionally loses in head-to-head
            comparisons to the Wells Fargo Active Cash. For cardholders who plan to keep a card
            for years and do not place high value on bonuses, the Double Cash is equally strong.
          </p>
        </div>
      </section>

      {/* Rewards Structure */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <h2 className="font-display font-bold text-3xl tracking-tight mb-6">Rewards Structure</h2>
        <div className="card-flush p-6 max-w-2xl mb-5">
          <ul className="space-y-3 text-[0.9375rem]">
            <li className="flex justify-between border-b border-line pb-3">
              <span className="text-mute">All purchases (buy phase)</span>
              <span className="font-mono tabular font-semibold">1% cash back</span>
            </li>
            <li className="flex justify-between border-b border-line pb-3">
              <span className="text-mute">All purchases (pay phase)</span>
              <span className="font-mono tabular font-semibold">1% cash back</span>
            </li>
            <li className="flex justify-between border-b border-line pb-3">
              <span className="text-mute">Effective rate (full payer)</span>
              <span className="font-mono tabular font-semibold">2% cash back</span>
            </li>
            <li className="flex justify-between border-b border-line pb-3">
              <span className="text-mute">Earnings cap</span>
              <span className="font-mono tabular font-semibold">Unlimited</span>
            </li>
            <li className="flex justify-between">
              <span className="text-mute">ThankYou conversion</span>
              <span className="font-mono tabular font-semibold">1:1 (100 pts per $1 cash back)</span>
            </li>
          </ul>
        </div>
        <div className="max-w-3xl text-[1.0625rem] leading-relaxed text-ink-soft">
          <p>
            Cash back is earned as ThankYou points at a rate of 2 points per $1. Redemption as
            cash back gives 1 cent per point. Transferring to airline partners (when paired with
            a premium Citi card) can unlock higher value. Minimum redemption for cash is $25.
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
              <span className="font-mono tabular font-semibold">None</span>
            </li>
            <li className="flex justify-between border-b border-line pb-3">
              <span className="text-mute">Intro APR (balance transfers)</span>
              <span className="font-mono tabular font-semibold">0% for 18 months</span>
            </li>
            <li className="flex justify-between border-b border-line pb-3">
              <span className="text-mute">Ongoing APR</span>
              <span className="font-mono tabular font-semibold">18.74%--28.74% variable</span>
            </li>
            <li className="flex justify-between border-b border-line pb-3">
              <span className="text-mute">Balance transfer fee</span>
              <span className="font-mono tabular font-semibold">3% (min $5)</span>
            </li>
            <li className="flex justify-between">
              <span className="text-mute">Foreign transaction fee</span>
              <span className="font-mono tabular font-semibold">3%</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Sign-Up Details */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <h2 className="font-display font-bold text-3xl tracking-tight mb-6">Sign-Up Offer</h2>
        <div className="max-w-3xl text-[1.0625rem] leading-relaxed text-ink-soft">
          <p>
            Citi periodically offers a limited-time balance transfer promotion for new Double Cash
            cardholders: 0% intro APR for 18 months on balance transfers with a 3% fee. There
            is no traditional upfront cash bonus. This puts the Double Cash at a slight
            disadvantage versus the Active Cash's $200 bonus for new-account value, but the
            card's long-term earn rate is identical and the ThankYou points flexibility is an
            added dimension the Active Cash lacks.
          </p>
        </div>
      </section>

      {/* Who it's for */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card p-7">
            <div className="chip chip-lime mb-4">Best for</div>
            <ul className="space-y-3 text-[0.9375rem]">
              <li>Cardholders who pay in full each month and want simple, unlimited 2% back</li>
              <li>Citi ecosystem users who also carry a Strata Premier for ThankYou partner transfers</li>
              <li>Anyone who wants a 2% catch-all and plans to hold the card long-term</li>
            </ul>
          </div>
          <div className="card p-7">
            <div className="chip chip-mute mb-4">Look elsewhere if</div>
            <ul className="space-y-3 text-[0.9375rem]">
              <li>You want an upfront cash bonus (Active Cash offers $200 after $500 spend)</li>
              <li>You need 0% intro APR on new purchases (the Double Cash offers none)</li>
              <li>You want cell phone protection on a 2% card (Active Cash includes it)</li>
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
            <div className="col-span-1 text-right">Bonus</div>
            <div className="col-span-1 text-right">Transfer Option</div>
          </div>
          {[
            { name: "Double Cash", rate: "2% (1+1)", bonus: "None", transfer: "Yes (w/ premium)", highlight: true },
            { name: "Active Cash", rate: "2% flat", bonus: "$200", transfer: "No" },
            { name: "Discover it", rate: "5% / 1%", bonus: "Match yr 1", transfer: "No" },
          ].map((row) => (
            <div
              key={row.name}
              className={`grid grid-cols-4 px-5 py-4 items-center border-b border-line-soft last:border-0 ${row.highlight ? "bg-lime/10" : ""}`}
            >
              <div className="col-span-1 font-display font-semibold text-sm">{row.name}</div>
              <div className="col-span-1 text-right font-mono tabular font-semibold text-sm">{row.rate}</div>
              <div className="col-span-1 text-right text-mute text-sm">{row.bonus}</div>
              <div className="col-span-1 text-right text-mute text-sm">{row.transfer}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <h2 className="font-display font-bold text-3xl tracking-tight mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6 max-w-3xl">
          <Faq q="Do I earn cash back if I only pay the minimum?">
            Yes, but only partially. You earn 1% when you make purchases and a second 1% as you
            pay off the balance. If you revolve a balance and only pay the minimum, you will
            eventually earn the second 1% but interest charges will far outweigh the rewards.
            Pay in full each month to capture the full 2% effectively.
          </Faq>
          <Faq q="How do I convert cash back to ThankYou points?">
            Your Double Cash rewards accumulate as ThankYou points in your account (2 points per
            $1 in purchases). Redemption as cash back converts at 1 cent per point. To use them
            for airline transfers, you need to link the Double Cash to a premium Citi ThankYou
            card like the Strata Premier and then transfer through the ThankYou portal.
          </Faq>
          <Faq q="Is the Double Cash the same as the Active Cash?">
            Both earn 2% with no annual fee, but the structure differs. The Active Cash earns
            a flat 2% on every purchase. The Double Cash earns 1% on purchase and 1% on payment.
            The Active Cash also has a $200 sign-up bonus and cell phone protection. The Double
            Cash has ThankYou points flexibility and an 18-month 0% BT offer.
          </Faq>
          <Faq q="Does the Double Cash have a minimum redemption?">
            Yes. Cash back can be redeemed as a statement credit or check starting at $25.
            ThankYou points have a 500-point minimum for most redemptions.
          </Faq>
          <Faq q="Can I use the Double Cash abroad?">
            Technically yes, but the 3% foreign transaction fee makes it expensive. Plan to
            use a no-foreign-fee card like the Chase Sapphire Preferred for international travel.
          </Faq>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-20">
        <div className="flex items-center gap-4">
          <Link href="/credit-cards" className="pill pill-ink">
            Compare all credit cards <span aria-hidden>→</span>
          </Link>
          <Link href="/credit-cards/no-fee" className="pill pill-ghost">
            Best no-annual-fee cards
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
