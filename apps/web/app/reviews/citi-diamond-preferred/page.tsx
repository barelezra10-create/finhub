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

const brand = getBrand("citi-diamond-preferred")!;

export const metadata: Metadata = {
  title: "Citi Diamond Preferred Review: 21-Month 0% Balance Transfer (2026)",
  description:
    "Citi Diamond Preferred offers 21 months of 0% APR on balance transfers and 12 months on purchases, with no annual fee. Full 2026 review: fees, math, and verdict.",
  alternates: { canonical: "/reviews/citi-diamond-preferred" },
};

const faqs: FAQItem[] = [
  {
    question: "Is the 5% balance transfer fee worth it?",
    answer:
      "On large balances accruing high APRs, almost certainly. On a $5,000 balance at 25% APR, you save roughly $1,700 in interest over 21 months. The $250 transfer fee leaves you with net savings of $1,450. The fee is only a dealbreaker on very small balances or very low existing APRs.",
  },
  {
    question: "Does the Diamond Preferred offer a sign-up bonus?",
    answer:
      "No. There is no cash or points bonus for new cardholders. The interest savings from the 0% intro APR is the only new-account value on offer.",
  },
  {
    question: "Can I product-change to the Citi Double Cash after the intro period?",
    answer:
      "Yes. Citi allows product changes between consumer cards within the same family after 12 months of account ownership. Calling Citi customer service to request a change to the Double Cash is a reasonable strategy once your balance is paid off.",
  },
  {
    question: "What credit score do I need?",
    answer:
      "Citi typically approves Diamond Preferred applicants with good to excellent credit, generally 690 FICO or above. Applicants with recent derogatory marks or high utilization may need to address those before applying.",
  },
  {
    question: "What happens if I miss a payment during the intro APR period?",
    answer:
      "Missing a minimum payment can result in Citi applying the standard purchase APR to your balance and revoking the 0% promotional rate. Late fees also apply. Set up autopay for at least the minimum payment to protect the promotional rate.",
  },
];

export default function Page() {
  return (
    <article className="bg-bg">
      <FinancialProductSchema
        name="Citi Diamond Preferred Review (2026)"
        description="Citi Diamond Preferred offers 21 months of 0% APR on balance transfers and 12 months on purchases, with no annual fee. Full 2026 review: fees, math, and verdict."
        slug="/reviews/citi-diamond-preferred"
        brandName="Citi Diamond Preferred"
        category="Credit Card"
        ratingValue={7.9}
        reviewCount={1}
      />
      <FAQPageSchema items={faqs} />
      <BreadcrumbListSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Credit Cards", href: "/credit-cards" },
          { name: "Reviews", href: "/reviews" },
          { name: "Citi Diamond Preferred", href: "/reviews/citi-diamond-preferred" },
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
                Citi Diamond Preferred Review (2026)
              </h1>
            </div>
          </div>
          <p className="text-lg text-mute max-w-2xl leading-relaxed">
            The Diamond Preferred offers{" "}
            <span className="font-mono tabular font-semibold text-ink">21 months</span> of 0% APR
            on balance transfers and 12 months on new purchases, with no annual fee. The premier
            tool for pure balance transfer math. Here is our full 2026 review.
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
            <Stat label="BT Intro APR" value="0% / 21mo" />
            <Stat label="Fintiex Score" value="7.9 / 10" />
          </div>
        </div>
      </section>

      {/* Pros / Cons */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card p-7">
            <div className="chip chip-lime mb-5">Pros</div>
            <ul className="space-y-3 text-[0.9375rem]">
              <li className="flex gap-3"><span className="text-mint font-bold">+</span> 21 months of 0% intro APR on balance transfers, one of the longest windows available</li>
              <li className="flex gap-3"><span className="text-mint font-bold">+</span> 12 months of 0% intro APR on new purchases</li>
              <li className="flex gap-3"><span className="text-mint font-bold">+</span> $0 annual fee</li>
              <li className="flex gap-3"><span className="text-mint font-bold">+</span> Citi Entertainment access for ticket presales and events</li>
              <li className="flex gap-3"><span className="text-mint font-bold">+</span> $0 liability on unauthorized charges</li>
              <li className="flex gap-3"><span className="text-mint font-bold">+</span> Free FICO score access through Citi's mobile app</li>
            </ul>
          </div>
          <div className="card p-7">
            <div className="chip chip-mute mb-5">Cons</div>
            <ul className="space-y-3 text-[0.9375rem]">
              <li className="flex gap-3"><span className="text-rose font-bold">-</span> 5% balance transfer fee (minimum $5) is one of the highest in the category</li>
              <li className="flex gap-3"><span className="text-rose font-bold">-</span> No rewards program on purchases</li>
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
            The Citi Diamond Preferred exists for one purpose: balance transfers. The 21-month
            0% APR window on balance transfers is among the longest offered by any major U.S.
            issuer, and the card has no annual fee to erode those interest savings. If you are
            carrying high-rate credit card debt and want the maximum runway to pay it off without
            accruing additional interest, the Diamond Preferred is the instrument.
          </p>
          <p>
            The math is direct. Take a $6,000 balance at 24% APR. Over 21 months, that balance
            would generate roughly $2,100 in interest charges at the existing rate. Transfer it
            to the Diamond Preferred and pay a 5% transfer fee of $300. Your total cost drops to
            $300 versus $2,100, saving $1,800 over the intro period. The savings compound further
            if your monthly payments go entirely toward principal rather than interest.
          </p>
          <p>
            The notable weakness versus the Wells Fargo Reflect is the 5% balance transfer fee.
            The Reflect charges a 3% intro fee, which meaningfully narrows the gap on larger
            balances. On a $10,000 transfer, the Diamond Preferred costs $500 versus $300 for the
            Reflect. The Diamond Preferred's 21-month BT window matches the Reflect's, but the
            Reflect also offers 21 months on purchases. The Diamond Preferred is for cardholders
            who specifically want the Citi platform or are comparing current sign-up offers.
          </p>
        </div>
      </section>

      {/* Rewards Structure */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <h2 className="font-display font-bold text-3xl tracking-tight mb-6">Rewards Structure</h2>
        <div className="max-w-3xl text-[1.0625rem] leading-relaxed text-ink-soft">
          <p>
            The Citi Diamond Preferred has no rewards program. Purchases earn no cash back,
            points, or miles. The card's value comes entirely from the interest savings during the
            introductory period. Once the 21-month window expires, this card has no ongoing value
            advantage versus a standard rewards card. Plan to either product-change to the Citi
            Double Cash or stop using it in favor of a card that earns rewards.
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
              <span className="font-mono tabular font-semibold">0% for 21 months</span>
            </li>
            <li className="flex justify-between border-b border-line pb-3">
              <span className="text-mute">Ongoing APR</span>
              <span className="font-mono tabular font-semibold">17.49%--28.24% variable</span>
            </li>
            <li className="flex justify-between border-b border-line pb-3">
              <span className="text-mute">Balance transfer fee</span>
              <span className="font-mono tabular font-semibold">5% (min $5)</span>
            </li>
            <li className="flex justify-between">
              <span className="text-mute">Foreign transaction fee</span>
              <span className="font-mono tabular font-semibold">3%</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Sign-up / BT Details */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <h2 className="font-display font-bold text-3xl tracking-tight mb-6">Balance Transfer Terms</h2>
        <div className="max-w-3xl text-[1.0625rem] leading-relaxed text-ink-soft">
          <p>
            Balance transfers must be completed within 4 months of account opening to receive the
            0% intro APR. The 5% fee (minimum $5) applies to each transfer. Transfers from other
            Citi accounts are not eligible. The minimum payment must be made each month; failure
            to do so can result in the promotional rate being revoked and the standard APR applied
            to the remaining balance. There is no sign-up bonus.
          </p>
        </div>
      </section>

      {/* Perks */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <h2 className="font-display font-bold text-3xl tracking-tight mb-6">Additional Benefits</h2>
        <div className="max-w-3xl text-[1.0625rem] leading-relaxed text-ink-soft space-y-4">
          <p>
            <span className="font-semibold text-ink">Citi Entertainment:</span> Access to
            presales and VIP packages for concerts, sporting events, dining experiences, and
            more. This benefit is shared across all Citi consumer cards.
          </p>
          <p>
            <span className="font-semibold text-ink">Free FICO score:</span> Citi provides free
            FICO score monitoring through the mobile app and online portal. Useful for tracking
            your score as you pay down transferred balances.
          </p>
          <p>
            <span className="font-semibold text-ink">$0 liability on unauthorized charges:</span>{" "}
            Standard Citi fraud protection; you are not responsible for unauthorized purchases
            reported promptly.
          </p>
        </div>
      </section>

      {/* Who it's for */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card p-7">
            <div className="chip chip-lime mb-4">Best for</div>
            <ul className="space-y-3 text-[0.9375rem]">
              <li>People carrying high-APR credit card debt who need the longest BT window</li>
              <li>Citi customers who prefer to consolidate within one bank's ecosystem</li>
              <li>Anyone running precise interest-savings math on a defined payoff timeline</li>
            </ul>
          </div>
          <div className="card p-7">
            <div className="chip chip-mute mb-4">Look elsewhere if</div>
            <ul className="space-y-3 text-[0.9375rem]">
              <li>You also need to finance new purchases at 0% (Wells Fargo Reflect gives 21mo on both)</li>
              <li>The 5% BT fee makes the math unfavorable compared to the Reflect's 3% intro fee</li>
              <li>You want any rewards on spending after the intro window</li>
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
            <div className="col-span-1 text-right">BT Window</div>
            <div className="col-span-1 text-right">BT Fee</div>
            <div className="col-span-1 text-right">Annual Fee</div>
          </div>
          {[
            { name: "Citi Diamond", window: "21 months", fee: "5%", annual: "$0", highlight: true },
            { name: "WF Reflect", window: "21 months", fee: "3% intro", annual: "$0" },
            { name: "Citi Double Cash", window: "18 months", fee: "3%", annual: "$0" },
          ].map((row) => (
            <div
              key={row.name}
              className={`grid grid-cols-4 px-5 py-4 items-center border-b border-line-soft last:border-0 ${row.highlight ? "bg-lime/10" : ""}`}
            >
              <div className="col-span-1 font-display font-semibold text-sm">{row.name}</div>
              <div className="col-span-1 text-right font-mono tabular font-semibold text-sm">{row.window}</div>
              <div className="col-span-1 text-right text-mute text-sm">{row.fee}</div>
              <div className="col-span-1 text-right text-mute text-sm">{row.annual}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <h2 className="font-display font-bold text-3xl tracking-tight mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6 max-w-3xl">
          <Faq q="Is the 5% balance transfer fee worth it?">
            On large balances accruing high APRs, almost certainly. On a $5,000 balance at 25%
            APR, you save roughly $1,700 in interest over 21 months. The $250 transfer fee leaves
            you with net savings of $1,450. The fee is only a dealbreaker on very small balances
            or very low existing APRs.
          </Faq>
          <Faq q="Does the Diamond Preferred offer a sign-up bonus?">
            No. There is no cash or points bonus for new cardholders. The interest savings from
            the 0% intro APR is the only new-account value on offer.
          </Faq>
          <Faq q="Can I product-change to the Citi Double Cash after the intro period?">
            Yes. Citi allows product changes between consumer cards within the same family after
            12 months of account ownership. Calling Citi customer service to request a change to
            the Double Cash is a reasonable strategy once your balance is paid off.
          </Faq>
          <Faq q="What credit score do I need?">
            Citi typically approves Diamond Preferred applicants with good to excellent credit,
            generally 690 FICO or above. Applicants with recent derogatory marks or high
            utilization may need to address those before applying.
          </Faq>
          <Faq q="What happens if I miss a payment during the intro APR period?">
            Missing a minimum payment can result in Citi applying the standard purchase APR to
            your balance and revoking the 0% promotional rate. Late fees also apply. Set up
            autopay for at least the minimum payment to protect the promotional rate.
          </Faq>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-20">
        <div className="flex items-center gap-4">
          <Link href="/credit-cards" className="pill pill-ink">
            Compare all credit cards <span aria-hidden>→</span>
          </Link>
          <Link href="/credit-cards/balance-transfer" className="pill pill-ghost">
            Best balance transfer cards
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
