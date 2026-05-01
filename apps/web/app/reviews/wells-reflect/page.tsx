import type { Metadata } from "next";
import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";
import { getBrand } from "@/lib/brands";

const brand = getBrand("wells-reflect")!;

export const metadata: Metadata = {
  title: "Wells Fargo Reflect Review: 21-Month 0% APR, No Annual Fee (2026)",
  description:
    "Wells Fargo Reflect offers 21 months of 0% intro APR on purchases and balance transfers with no annual fee. Full 2026 review: APR terms, fees, and who it's for.",
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
                Wells Fargo Reflect Review (2026)
              </h1>
            </div>
          </div>
          <p className="text-lg text-mute max-w-2xl leading-relaxed">
            The Reflect card offers{" "}
            <span className="font-mono tabular font-semibold text-ink">21 months</span> of 0%
            intro APR on both purchases and qualifying balance transfers, with no annual fee. The
            longest intro APR window available from a major issuer. Here is our full 2026 review.
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
            <Stat label="Rewards Rate" value="None" />
            <Stat label="Annual Fee" value="$0" />
            <Stat label="Intro APR" value="0% / 21mo" />
            <Stat label="Fintiex Score" value="8.2 / 10" />
          </div>
        </div>
      </section>

      {/* Pros / Cons */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card p-7">
            <div className="chip chip-lime mb-5">Pros</div>
            <ul className="space-y-3 text-[0.9375rem]">
              <li className="flex gap-3"><span className="text-mint font-bold">+</span> 21 months of 0% intro APR on purchases, tied for longest available</li>
              <li className="flex gap-3"><span className="text-mint font-bold">+</span> 21 months of 0% intro APR on qualifying balance transfers</li>
              <li className="flex gap-3"><span className="text-mint font-bold">+</span> $0 annual fee</li>
              <li className="flex gap-3"><span className="text-mint font-bold">+</span> Cell phone protection up to $600 per claim when you pay your phone bill with the card</li>
              <li className="flex gap-3"><span className="text-mint font-bold">+</span> No penalty APR: a late payment does not trigger a punitive rate increase</li>
              <li className="flex gap-3"><span className="text-mint font-bold">+</span> My Wells Fargo Deals for bonus cash back at select merchants</li>
            </ul>
          </div>
          <div className="card p-7">
            <div className="chip chip-mute mb-5">Cons</div>
            <ul className="space-y-3 text-[0.9375rem]">
              <li className="flex gap-3"><span className="text-rose font-bold">-</span> No rewards program: zero cash back, miles, or points on purchases</li>
              <li className="flex gap-3"><span className="text-rose font-bold">-</span> Balance transfer fee of 3% intro (then up to 5%) reduces net BT savings</li>
              <li className="flex gap-3"><span className="text-rose font-bold">-</span> 3% foreign transaction fee makes it a poor travel companion</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <h2 className="font-display font-bold text-3xl tracking-tight mb-6">Overview</h2>
        <div className="space-y-5 text-[1.0625rem] leading-relaxed text-ink-soft max-w-3xl">
          <p>
            The Wells Fargo Reflect Card is purpose-built for one scenario: financing a large
            purchase or consolidating credit card debt without paying interest for the longest
            possible introductory window. At 21 months of 0% APR on both purchases and balance
            transfers, it matches or beats every major competitor in the category. The Citi Diamond
            Preferred offers the same 21-month BT window but only 12 months on new purchases.
            The Reflect covers both simultaneously.
          </p>
          <p>
            If you have $5,000 in credit card debt currently accruing at 24% APR, moving it to the
            Reflect saves approximately $1,200 in interest over 21 months (before the 3% transfer
            fee of $150). Net interest savings: roughly $1,050. That math is why 0% balance
            transfer cards exist and why the Reflect is a meaningful tool for debt reduction.
          </p>
          <p>
            The card has no rewards program. Do not use it as a daily driver once the intro window
            expires. The ongoing variable APR of 17.49% to 29.24% is entirely typical for a
            no-fee consumer card and provides no advantage over any rewards card with a similar
            rate structure. The Reflect is a financial instrument for a specific 21-month window,
            not a long-term relationship card.
          </p>
        </div>
      </section>

      {/* Rewards Structure */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <h2 className="font-display font-bold text-3xl tracking-tight mb-6">Rewards Structure</h2>
        <div className="max-w-3xl text-[1.0625rem] leading-relaxed text-ink-soft">
          <p>
            The Wells Fargo Reflect has no points, miles, or cash back program on everyday
            spending. The sole exception is My Wells Fargo Deals, which provides limited-time
            bonus cash back at select merchants when you activate offers in the Wells Fargo mobile
            app. These deals are merchant-driven promotions, not a structured rewards program.
            If rewards matter to you, this is not your card.
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
              <span className="font-mono tabular font-semibold">0% for 21 months</span>
            </li>
            <li className="flex justify-between border-b border-line pb-3">
              <span className="text-mute">Intro APR (balance transfers)</span>
              <span className="font-mono tabular font-semibold">0% for 21 months</span>
            </li>
            <li className="flex justify-between border-b border-line pb-3">
              <span className="text-mute">Ongoing APR</span>
              <span className="font-mono tabular font-semibold">17.49%--29.24% variable</span>
            </li>
            <li className="flex justify-between border-b border-line pb-3">
              <span className="text-mute">Balance transfer fee</span>
              <span className="font-mono tabular font-semibold">3% intro, then up to 5%</span>
            </li>
            <li className="flex justify-between border-b border-line pb-3">
              <span className="text-mute">Foreign transaction fee</span>
              <span className="font-mono tabular font-semibold">3%</span>
            </li>
            <li className="flex justify-between">
              <span className="text-mute">Penalty APR</span>
              <span className="font-mono tabular font-semibold">None</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Sign-Up Details */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <h2 className="font-display font-bold text-3xl tracking-tight mb-6">Balance Transfer Terms</h2>
        <div className="max-w-3xl text-[1.0625rem] leading-relaxed text-ink-soft">
          <p>
            Balance transfers must be initiated within 120 days of account opening to qualify for
            the 0% intro APR. The transfer fee is 3% of the transferred amount during this intro
            period (minimum $5), rising to up to 5% (minimum $5) after the intro period ends.
            Transfers from Wells Fargo accounts are not eligible. The minimum payment must be
            made on time each month to maintain the 0% APR; missing a payment can forfeit the
            promotional rate.
          </p>
        </div>
      </section>

      {/* Perks */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <h2 className="font-display font-bold text-3xl tracking-tight mb-6">Additional Benefits</h2>
        <div className="max-w-3xl text-[1.0625rem] leading-relaxed text-ink-soft space-y-4">
          <p>
            <span className="font-semibold text-ink">Cell phone protection:</span> Pay your monthly
            wireless bill with the Reflect and receive up to $600 in coverage per claim (with a
            $25 deductible) for covered damage or theft. Up to 2 claims per 12-month period.
          </p>
          <p>
            <span className="font-semibold text-ink">No penalty APR:</span> A late payment will
            not result in Wells Fargo applying a higher penalty interest rate to your balance.
            This is notable during the intro period: a late payment may still forfeit the 0%
            rate, but re-read the terms carefully as Wells Fargo's Reflect has consumer-friendly
            policies relative to some competitors.
          </p>
          <p>
            <span className="font-semibold text-ink">Visa Signature benefits:</span> Travel and
            emergency assistance, roadside dispatch, and access to the Visa Signature concierge.
          </p>
        </div>
      </section>

      {/* Who it's for */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card p-7">
            <div className="chip chip-lime mb-4">Best for</div>
            <ul className="space-y-3 text-[0.9375rem]">
              <li>Anyone financing a large purchase (appliance, home renovation, medical bill) over 21 months interest-free</li>
              <li>People moving high-rate credit card balances to eliminate interest</li>
              <li>Disciplined payers who will pay the balance before month 22</li>
            </ul>
          </div>
          <div className="card p-7">
            <div className="chip chip-mute mb-4">Look elsewhere if</div>
            <ul className="space-y-3 text-[0.9375rem]">
              <li>You want rewards on everyday spending (any cash back card will outperform)</li>
              <li>Your primary need is balance transfers only (Citi Diamond Preferred has the same BT window)</li>
              <li>You plan to travel internationally (3% foreign transaction fee)</li>
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
            <div className="col-span-1 text-right">Purchase APR</div>
            <div className="col-span-1 text-right">BT APR</div>
            <div className="col-span-1 text-right">Annual Fee</div>
          </div>
          {[
            { name: "WF Reflect", purchase: "0% / 21mo", bt: "0% / 21mo", fee: "$0", highlight: true },
            { name: "Citi Diamond", purchase: "0% / 12mo", bt: "0% / 21mo", fee: "$0" },
            { name: "Active Cash", purchase: "0% / 12mo", bt: "0% / 12mo", fee: "$0" },
          ].map((row) => (
            <div
              key={row.name}
              className={`grid grid-cols-4 px-5 py-4 items-center border-b border-line-soft last:border-0 ${row.highlight ? "bg-lime/10" : ""}`}
            >
              <div className="col-span-1 font-display font-semibold text-sm">{row.name}</div>
              <div className="col-span-1 text-right font-mono tabular font-semibold text-sm">{row.purchase}</div>
              <div className="col-span-1 text-right text-mute text-sm">{row.bt}</div>
              <div className="col-span-1 text-right text-mute text-sm">{row.fee}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <h2 className="font-display font-bold text-3xl tracking-tight mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6 max-w-3xl">
          <Faq q="Does the Reflect have a sign-up bonus?">
            No. The Wells Fargo Reflect does not offer a traditional cash bonus or points bonus.
            The value proposition is entirely in the interest savings from the 21-month 0% APR.
          </Faq>
          <Faq q="What happens to my balance after 21 months?">
            Any remaining balance converts to the ongoing variable APR of 17.49% to 29.24%.
            Plan to pay the balance in full before the intro period ends to avoid interest charges.
            Set a calendar reminder at month 18 to assess your payoff position.
          </Faq>
          <Faq q="Can I earn rewards on purchases while paying off a balance transfer?">
            The Reflect has no rewards program. Any purchase earns nothing. If rewards matter,
            use a separate rewards card for new purchases and use the Reflect solely for the
            balance transfer.
          </Faq>
          <Faq q="How quickly must I initiate a balance transfer?">
            Balance transfers must be requested within 120 days of account opening to qualify for
            the 0% intro rate. Transfers initiated after that window are subject to the ongoing
            purchase APR plus the balance transfer fee.
          </Faq>
          <Faq q="Is the Reflect better than the Citi Diamond Preferred?">
            For the purchase APR window, yes: Reflect gives 21 months on purchases versus 12
            months for the Diamond Preferred. For pure balance transfers, they are equivalent at
            21 months. If your goal is financing a new purchase, the Reflect wins. If your goal
            is exclusively balance transfers, either card works and you should compare current
            offers at the time of application.
          </Faq>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-20">
        <div className="flex items-center gap-4">
          <Link href="/credit-cards" className="pill pill-ink">
            Compare all credit cards <span aria-hidden>→</span>
          </Link>
          <Link href="/credit-cards/zero-apr" className="pill pill-ghost">
            Best 0% APR cards
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
