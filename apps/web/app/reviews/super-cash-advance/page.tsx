import type { Metadata } from "next";
import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";
import { VisitBrandCta, VisitBrandCard } from "@/components/visit-brand-cta";
import type { Brand } from "@/lib/brands";
import {
  FinancialProductSchema,
  FAQPageSchema,
  BreadcrumbListSchema,
  type FAQItem,
} from "@/components/schemas";

export const metadata: Metadata = {
  title: "Super.com Cash Advance Review (2026): Is SuperCash Legit?",
  description:
    "Super.com's cash advance is real: up to $250 with no interest, but it requires a $15 a month Super+ membership. When the math works, when it does not, and free alternatives.",
  alternates: { canonical: "/reviews/super-cash-advance" },
};

const brand: Brand = {
  slug: "super-cash-advance",
  name: "Super.com",
  domain: "super.com",
  color: "#6B4EFF",
  category: "loan",
};

const faqs: FAQItem[] = [
  {
    question: "Is the Super.com cash advance legit?",
    answer:
      "Yes. SuperCash is a real feature of the Super.com app, a company that started in travel booking and expanded into fintech. It is BBB accredited with an A+ rating. Advances of up to $250 carry no interest, no credit check, and no late fees. The catch is that access requires a paid Super+ membership, around $15 a month as of mid-2026, and that fee is the real cost of the money.",
  },
  {
    question: "How much can I actually borrow?",
    answer:
      "Up to $250 is the advertised maximum, but most new users start much lower, commonly $25 to $50, with limits growing as the app verifies your employment and deposit history. If you are subscribing specifically to get $250 on day one, expect to be disappointed. The realistic first advance for many people is small enough that the membership fee eats a big share of it.",
  },
  {
    question: "What does the Super.com cash advance cost?",
    answer:
      "There is no interest and no mandatory per-advance fee. Costs come from two places: the Super+ membership at roughly $15 a month, which is required, and an optional instant transfer fee of up to about $6.99 if you do not want to wait around three business days for the free transfer. A $50 advance delivered instantly can effectively cost you around $22 in the first month, which is a very high price for $50.",
  },
  {
    question: "How does repayment work?",
    answer:
      "The advance is repaid from your linked bank account around your next payday. There are no late fees and no interest, and Super.com does not report the advance to credit bureaus, so it neither builds nor directly hurts your credit. The main operational risk is the same as any cash advance app: an auto-debit hitting your account at a bad time can trigger bank overdraft fees.",
  },
  {
    question: "What complaints does Super.com get?",
    answer:
      "The most common patterns reported by users involve the subscription, not the advance: surprise recurring $15 charges, friction canceling Super+, and membership sign-ups bundled with hotel bookings that users say they did not knowingly agree to. The company does respond to BBB complaints and has issued refunds. If you subscribe, note the renewal date and know the cancellation path before you need it.",
  },
];

export default function Page() {
  return (
    <article className="bg-bg">
      <FinancialProductSchema
        name="Super.com Cash Advance Review"
        description="SuperCash is Super.com's cash advance feature offering up to $250 with no interest, gated behind a roughly $15 a month Super+ membership. Full 2026 review with real cost math."
        slug="/reviews/super-cash-advance"
        brandName="Super.com"
        category="Cash Advance Apps"
        ratingValue={4.8}
        reviewCount={1}
      />
      <FAQPageSchema items={faqs} />
      <BreadcrumbListSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Loans", href: "/loans" },
          { name: "Reviews", href: "/reviews" },
          { name: "Super.com Cash Advance", href: "/reviews/super-cash-advance" },
        ]}
      />
      {/* HERO */}
      <section className="border-b border-line">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-16">
          <div className="flex items-start gap-5 mb-8">
            <BrandLogo brand={brand} size={72} rounded="lg" />
            <div>
              <span className="chip chip-violet mb-3">Cash Advance App Review</span>
              <h1 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight leading-tight">
                Super.com Cash Advance Review
              </h1>
              <div className="text-sm text-mute font-mono uppercase tracking-wider mt-3">
                Updated August 2026 · By the Fintiex Rate Desk
              </div>
            </div>
          </div>

          <div className="card-flush p-6 grid grid-cols-2 md:grid-cols-4 gap-6">
            <Stat label="Max advance" value="$250" />
            <Stat label="Membership" value="~$15/mo" />
            <Stat label="Interest" value="0%" />
            <Stat label="Fintiex score" value="4.8/10" />
          </div>
          <div className="mt-6">
            <VisitBrandCta brand={brand} variant="lime" label="Go to super.com" />
          </div>
        </div>
      </section>

      {/* PROS + CONS */}
      <section className="max-w-(--max-w-page) mx-auto px-6 py-14">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card p-7">
            <h2 className="font-display font-bold text-xl mb-5 tracking-tight">What works</h2>
            <ul className="space-y-3 text-[1.0rem] leading-relaxed">
              <li className="flex gap-3"><span className="chip chip-lime shrink-0">+</span>Genuinely no interest, no late fees, and no credit check on advances</li>
              <li className="flex gap-3"><span className="chip chip-lime shrink-0">+</span>Real company: BBB accredited with an A+ rating and responsive to complaints</li>
              <li className="flex gap-3"><span className="chip chip-lime shrink-0">+</span>Free standard transfer, about three business days, if you can wait</li>
              <li className="flex gap-3"><span className="chip chip-lime shrink-0">+</span>Membership bundles other perks, travel discounts and cashback, that add value if you actually use them</li>
              <li className="flex gap-3"><span className="chip chip-lime shrink-0">+</span>No credit reporting, so a repaid advance cannot damage your credit file</li>
            </ul>
          </div>
          <div className="card p-7">
            <h2 className="font-display font-bold text-xl mb-5 tracking-tight">What to watch</h2>
            <ul className="space-y-3 text-[1.0rem] leading-relaxed">
              <li className="flex gap-3"><span className="chip chip-mute shrink-0">-</span>The advance is gated behind a roughly $15 a month subscription: that is the real APR in disguise</li>
              <li className="flex gap-3"><span className="chip chip-mute shrink-0">-</span>Most new users start at $25 to $50, not the advertised $250</li>
              <li className="flex gap-3"><span className="chip chip-mute shrink-0">-</span>Instant transfer costs up to about $6.99 per advance</li>
              <li className="flex gap-3"><span className="chip chip-mute shrink-0">-</span>User complaints report surprise recurring charges and friction canceling the membership</li>
              <li className="flex gap-3"><span className="chip chip-mute shrink-0">-</span>Auto-debit on payday can trigger overdrafts if your balance is thin</li>
            </ul>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-14">
        <span className="chip chip-mute mb-4">Overview</span>
        <h2 className="font-display font-extrabold text-3xl tracking-tight mb-6 leading-tight">
          Is the Super.com cash advance legit?
        </h2>
        <div className="space-y-5 text-[1.0625rem] leading-relaxed text-ink-soft max-w-3xl">
          <p>
            Short answer: yes, it is legit, and unlike most products people search &ldquo;is it legit&rdquo; about, this one really does charge zero interest. Super.com began as a hotel booking service and grew into a super app with cashback, a credit-building card, and SuperCash, a paycheck advance of up to $250. The company is BBB accredited with an A+ rating. The advance itself has no interest, no credit check, and no late fees, and the standard three-day transfer is free.
          </p>
          <p>
            The honest problem is the gate in front of it. SuperCash requires a Super+ membership at roughly $15 a month as of mid-2026, and most new users are approved for $25 to $50 at first, not $250. Do the math on the realistic case: a $50 advance, delivered instantly for $6.99, inside a $15 membership month, costs about $22 to access $50 for two weeks. Converted to an APR the way regulators annualize short-term credit, that is deep into triple digits, worse than many payday loans, despite the honest &ldquo;0% interest&rdquo; label. The subscription is the price; the interest-free advance is the marketing.
          </p>
          <p>
            The complaint pattern fits: as reported by users to the BBB, the friction is around the membership, surprise recurring charges and difficult cancellations, not around the advances themselves. Our verdict: a legitimate app whose cash advance only makes sense if you were already paying for Super+ for the travel and cashback perks, or if you can reach the higher limits and use the free slow transfer. As a standalone way to borrow $50, it is one of the more expensive apps in its category. Several competitors and, better, the free options below do the same job for less.
          </p>
        </div>
      </section>

      {/* REAL COST */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-14">
        <span className="chip chip-mute mb-4">The Math</span>
        <h2 className="font-display font-extrabold text-3xl tracking-tight mb-6 leading-tight">
          The membership math on a two-week advance
        </h2>
        <div className="card-flush overflow-hidden">
          <div className="grid grid-cols-3 px-6 py-3 text-xs font-mono uppercase tracking-wider text-mute border-b border-line bg-bg-soft/50">
            <div>Scenario</div>
            <div className="text-right">Cost to access</div>
            <div className="text-right">Cost as % of advance</div>
          </div>
          {[
            { s: "$50 advance, instant, 1 month of Super+", c: "~$22", p: "~44%" },
            { s: "$50 advance, free transfer, 1 month of Super+", c: "~$15", p: "~30%" },
            { s: "$250 advance, instant, 1 month of Super+", c: "~$22", p: "~9%" },
            { s: "$250 advance, free transfer, member anyway", c: "~$0 extra", p: "~0%" },
          ].map((r, i, arr) => (
            <div key={r.s} className={`grid grid-cols-3 px-6 py-4 items-center text-sm ${i < arr.length - 1 ? "border-b border-line-soft" : ""}`}>
              <div className="font-medium">{r.s}</div>
              <div className="text-right font-mono tabular font-semibold">{r.c}</div>
              <div className="text-right text-mute">{r.p}</div>
            </div>
          ))}
        </div>
        <p className="text-xs text-mute mt-3 font-mono">Approximate figures as of mid-2026; membership pricing and instant fees vary by offer. The pattern is the point: small advances make the subscription brutally expensive, big limits plus patience make it nearly free.</p>
      </section>

      {/* CHEAPER OPTIONS */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-14">
        <span className="chip chip-mute mb-4">Do This First</span>
        <h2 className="font-display font-extrabold text-3xl tracking-tight mb-6 leading-tight">
          Cheaper ways to bridge to payday
        </h2>
        <div className="card p-7 max-w-2xl">
          <ul className="space-y-3 text-[1.0rem] leading-relaxed">
            <li className="flex gap-3"><span className="font-mono text-violet">01</span>Your employer's earned wage access benefit, often free through payroll providers</li>
            <li className="flex gap-3"><span className="font-mono text-violet">02</span>Asking your employer directly for a payroll advance; many small employers will just say yes</li>
            <li className="flex gap-3"><span className="font-mono text-violet">03</span>Cash advance apps without mandatory subscriptions, if you skip the instant-transfer tip traps</li>
            <li className="flex gap-3"><span className="font-mono text-violet">04</span>A credit union PAL for anything bigger than a payday gap: up to $2,000 at a capped 28% APR</li>
            <li className="flex gap-3"><span className="font-mono text-violet">05</span>Moving the bill instead of the money: most billers will shift a due date by two weeks for free</li>
            <li className="flex gap-3"><span className="font-mono text-violet">06</span>Overdraft grace programs: several large banks now waive fees on small short overdrafts</li>
          </ul>
        </div>
      </section>

      {/* WHO FOR / WHO AVOID */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-14">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card p-7" style={{ borderTop: "3px solid var(--color-lime)" }}>
            <h2 className="font-display font-bold text-xl mb-4 tracking-tight">Can make sense if</h2>
            <ul className="space-y-2 text-[1.0rem] leading-relaxed text-ink-soft">
              <li>You already pay for Super+ for the travel discounts and cashback</li>
              <li>You have built up to a meaningful advance limit</li>
              <li>You can wait three days and skip the instant fee</li>
              <li>You want a no-credit-check bridge with no late fees, not a loan</li>
            </ul>
          </div>
          <div className="card p-7" style={{ borderTop: "3px solid var(--color-coral)" }}>
            <h2 className="font-display font-bold text-xl mb-4 tracking-tight">Skip it if</h2>
            <ul className="space-y-2 text-[1.0rem] leading-relaxed text-ink-soft">
              <li>You would subscribe only to borrow $25 to $50; the fee math is terrible</li>
              <li>You need money every month; a recurring gap needs a budget fix, not a subscription</li>
              <li>Your employer already offers free earned wage access</li>
              <li>You tend to forget subscriptions; cancellation friction is the top complaint</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-14">
        <span className="chip chip-mute mb-4">FAQ</span>
        <h2 className="font-display font-extrabold text-3xl tracking-tight mb-8 leading-tight">
          Common questions
        </h2>
        <div className="space-y-5 max-w-3xl">
          {faqs.map((item) => (
            <div key={item.question} className="card p-6">
              <div className="font-display font-semibold text-lg mb-2 tracking-tight">{item.question}</div>
              <div className="text-ink-soft leading-relaxed">{item.answer}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-20">
        <VisitBrandCard
          brand={brand}
          headline="Thinking about SuperCash?"
          tagline="Know the membership price going in · Use the free transfer · Set a reminder for the renewal date"
          ctaLabel="Go to Super.com"
        />
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/loans" className="pill pill-ghost">
            Compare lower-cost borrowing options <span aria-hidden>→</span>
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
