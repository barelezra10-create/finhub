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
  title: "Dollar Loan Center Review (2026): Is It Legit and What APR You Pay",
  description:
    "Dollar Loan Center is a licensed signature loan lender in Nevada and Utah since 1998, with APRs from roughly 197% to 389%. What it really costs and cheaper options first.",
  alternates: { canonical: "/reviews/dollar-loan-center" },
};

const brand: Brand = {
  slug: "dollar-loan-center",
  name: "Dollar Loan Center",
  domain: "dontbebroke.com",
  color: "#D22630",
  category: "loan",
};

const faqs: FAQItem[] = [
  {
    question: "Is Dollar Loan Center legit?",
    answer:
      "Yes. Dollar Loan Center is a licensed direct lender that has operated since 1998, with dozens of storefront locations across Nevada and Utah plus online lending. It is a real company with real branches, not a scam. The catch is cost: its signature loans have carried APRs from roughly 197 percent up to about 389 percent as of mid-2026, varying by state and offer.",
  },
  {
    question: "What is a signature loan at Dollar Loan Center?",
    answer:
      "It is an unsecured installment loan: no collateral, no title, just your signature and proof of income. Amounts run from about $100 to $5,000. Interest is simple interest that does not compound, there are no application, origination, or prepayment fees, and payments line up with your paydays over terms that can stretch to several months.",
  },
  {
    question: "What APR does Dollar Loan Center charge?",
    answer:
      "Reported APRs range from roughly 196.96 percent to 388.93 percent as of mid-2026, depending on the state and the loan. That is payday-territory pricing even though the product is structured as an installment loan. Because interest is simple and there is no prepayment penalty, paying it off early genuinely reduces what you owe, which is the single best move if you borrow here.",
  },
  {
    question: "Do I need good credit for Dollar Loan Center?",
    answer:
      "No. DLC markets to borrowers with damaged or thin credit, and approval leans on income and identity verification rather than a credit score threshold. Funding is fast, often within the hour at a branch. As always with subprime lenders, easy approval is priced into the APR.",
  },
  {
    question: "Why is Dollar Loan Center only in Nevada and Utah?",
    answer:
      "State law. Nevada and Utah place no meaningful cap on interest rates for this type of consumer loan, which is why high-APR signature lending clusters there. DLC has also operated in other states historically and exited when rate caps changed. If you live elsewhere, this lender likely is not available to you, and your state's cap is probably protecting you from this price range.",
  },
];

export default function Page() {
  return (
    <article className="bg-bg">
      <FinancialProductSchema
        name="Dollar Loan Center Review"
        description="Dollar Loan Center is a licensed Nevada and Utah signature loan lender operating since 1998, with loans of $100 to $5,000 at APRs from roughly 197% to 389%. Full 2026 review."
        slug="/reviews/dollar-loan-center"
        brandName="Dollar Loan Center"
        category="Personal Loans"
        ratingValue={4.6}
        reviewCount={1}
      />
      <FAQPageSchema items={faqs} />
      <BreadcrumbListSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Loans", href: "/loans" },
          { name: "Reviews", href: "/reviews" },
          { name: "Dollar Loan Center", href: "/reviews/dollar-loan-center" },
        ]}
      />
      {/* HERO */}
      <section className="border-b border-line">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-16">
          <div className="flex items-start gap-5 mb-8">
            <BrandLogo brand={brand} size={72} rounded="lg" />
            <div>
              <span className="chip chip-violet mb-3">High-Cost Lender Review</span>
              <h1 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight leading-tight">
                Dollar Loan Center Review
              </h1>
              <div className="text-sm text-mute font-mono uppercase tracking-wider mt-3">
                Updated August 2026 · By the Fintiex Rate Desk
              </div>
            </div>
          </div>

          <div className="card-flush p-6 grid grid-cols-2 md:grid-cols-4 gap-6">
            <Stat label="Loan amounts" value="$100 to $5K" />
            <Stat label="APR range" value="197 to 389%" />
            <Stat label="States" value="NV and UT" />
            <Stat label="Fintiex score" value="4.6/10" />
          </div>
          <div className="mt-6">
            <VisitBrandCta brand={brand} variant="lime" label="See their rates" />
          </div>
        </div>
      </section>

      {/* PROS + CONS */}
      <section className="max-w-(--max-w-page) mx-auto px-6 py-14">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card p-7">
            <h2 className="font-display font-bold text-xl mb-5 tracking-tight">What works</h2>
            <ul className="space-y-3 text-[1.0rem] leading-relaxed">
              <li className="flex gap-3"><span className="chip chip-lime shrink-0">+</span>Licensed direct lender since 1998 with real storefronts across Nevada and Utah</li>
              <li className="flex gap-3"><span className="chip chip-lime shrink-0">+</span>No application, origination, or prepayment fees; simple interest that does not compound</li>
              <li className="flex gap-3"><span className="chip chip-lime shrink-0">+</span>Fast funding, often cash in hand within about 30 minutes at a branch</li>
              <li className="flex gap-3"><span className="chip chip-lime shrink-0">+</span>Installment structure with payday-aligned payments beats a lump-sum payday balloon</li>
              <li className="flex gap-3"><span className="chip chip-lime shrink-0">+</span>Early payoff genuinely saves money, since interest accrues daily on the balance</li>
            </ul>
          </div>
          <div className="card p-7">
            <h2 className="font-display font-bold text-xl mb-5 tracking-tight">What to watch</h2>
            <ul className="space-y-3 text-[1.0rem] leading-relaxed">
              <li className="flex gap-3"><span className="chip chip-mute shrink-0">-</span>APRs of roughly 197 to 389%: payday-level pricing in an installment wrapper</li>
              <li className="flex gap-3"><span className="chip chip-mute shrink-0">-</span>Longer terms at these rates can mean paying back double what you borrowed or more</li>
              <li className="flex gap-3"><span className="chip chip-mute shrink-0">-</span>Only operates where state law allows uncapped rates; that fact should give you pause</li>
              <li className="flex gap-3"><span className="chip chip-mute shrink-0">-</span>Mixed reviews on some branch-level customer service experiences</li>
              <li className="flex gap-3"><span className="chip chip-mute shrink-0">-</span>Heavy local sports sponsorship marketing normalizes very expensive borrowing</li>
            </ul>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-14">
        <span className="chip chip-mute mb-4">Overview</span>
        <h2 className="font-display font-extrabold text-3xl tracking-tight mb-6 leading-tight">
          Is Dollar Loan Center legit?
        </h2>
        <div className="space-y-5 text-[1.0625rem] leading-relaxed text-ink-soft max-w-3xl">
          <p>
            Short answer: yes, Dollar Loan Center is a legitimate, licensed lender, and one of the most visible in its home markets. The company has been around since 1998, runs dozens of branches across Nevada and Utah under the &ldquo;Don&rsquo;t Be Broke&rdquo; slogan, and its name is on a sports arena in Henderson, Nevada. If you walk in with proof of income, you can walk out with cash the same hour. Nothing about it is a scam.
          </p>
          <p>
            Now the part the billboards skip. DLC&rsquo;s signature loans, $100 to $5,000 unsecured installment loans, have carried APRs from roughly 196.96 percent to 388.93 percent as of mid-2026, varying by state and offer. The structure is friendlier than a payday loan: simple interest instead of compounding, no origination or prepayment fees, and scheduled payments on your paydays instead of one balloon payment. Those are real advantages, and paying off early truly cuts your cost. But the price level itself is payday-tier, and it exists because Nevada and Utah are two of the few states without meaningful rate caps on this kind of loan.
          </p>
          <p>
            Our verdict: a legally operating, transparent, extremely expensive lender. Among high-cost options it is one of the more honest ones, and the no-prepayment-penalty structure gives disciplined borrowers an exit. But at roughly 200 percent APR and up, almost anything else you can qualify for will beat it. Run through the cheaper options below before you sign, and if you do borrow, make payoff speed your whole strategy.
          </p>
        </div>
      </section>

      {/* REAL COST */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-14">
        <span className="chip chip-mute mb-4">The Math</span>
        <h2 className="font-display font-extrabold text-3xl tracking-tight mb-6 leading-tight">
          What a $1,000 signature loan really costs
        </h2>
        <div className="card-flush overflow-hidden">
          <div className="grid grid-cols-3 px-6 py-3 text-xs font-mono uppercase tracking-wider text-mute border-b border-line bg-bg-soft/50">
            <div>Scenario</div>
            <div className="text-right">Approx. interest</div>
            <div className="text-right">Approx. total repaid</div>
          </div>
          {[
            { s: "Credit union PAL, 28% APR, 6 months", i: "~$80", t: "~$1,080" },
            { s: "DLC at ~197% APR, paid off in 2 months", i: "~$250", t: "~$1,250" },
            { s: "DLC at ~197% APR, 6-month term", i: "~$550", t: "~$1,550" },
            { s: "DLC at ~389% APR, 6-month term", i: "~$1,050", t: "~$2,050" },
          ].map((r, i, arr) => (
            <div key={r.s} className={`grid grid-cols-3 px-6 py-4 items-center text-sm ${i < arr.length - 1 ? "border-b border-line-soft" : ""}`}>
              <div className="font-medium">{r.s}</div>
              <div className="text-right font-mono tabular font-semibold">{r.i}</div>
              <div className="text-right text-mute">{r.t}</div>
            </div>
          ))}
        </div>
        <p className="text-xs text-mute mt-3 font-mono">Illustrative estimates using simple interest on a declining balance with equal payments. Actual pricing varies by state and offer as of mid-2026. Notice the payoff-speed rows: at these APRs, time is the entire cost.</p>
      </section>

      {/* CHEAPER OPTIONS */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-14">
        <span className="chip chip-mute mb-4">Do This First</span>
        <h2 className="font-display font-extrabold text-3xl tracking-tight mb-6 leading-tight">
          Cheaper options in Nevada and Utah
        </h2>
        <div className="card p-7 max-w-2xl">
          <ul className="space-y-3 text-[1.0rem] leading-relaxed">
            <li className="flex gap-3"><span className="font-mono text-violet">01</span>Credit unions: One Nevada, America First, Mountain America and others offer small loans and PALs capped at 28% APR</li>
            <li className="flex gap-3"><span className="font-mono text-violet">02</span>Your bank's small-dollar loan if you have a checking account with a major bank</li>
            <li className="flex gap-3"><span className="font-mono text-violet">03</span>A payment plan with the biller: NV Energy, Rocky Mountain Power, landlords, and hospitals all do them</li>
            <li className="flex gap-3"><span className="font-mono text-violet">04</span>Employer paycheck advances, common in casino, hospitality, and warehouse work</li>
            <li className="flex gap-3"><span className="font-mono text-violet">05</span>Local emergency assistance: dial 211 in Nevada or Utah for rent and utility programs</li>
            <li className="flex gap-3"><span className="font-mono text-violet">06</span>A pawn or secured loan on something you own; ugly, but often cheaper than 300% unsecured</li>
          </ul>
        </div>
      </section>

      {/* WHO FOR / WHO AVOID */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-14">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card p-7" style={{ borderTop: "3px solid var(--color-lime)" }}>
            <h2 className="font-display font-bold text-xl mb-4 tracking-tight">Only consider it if</h2>
            <ul className="space-y-2 text-[1.0rem] leading-relaxed text-ink-soft">
              <li>Credit unions and banks have declined you and the need is a true emergency</li>
              <li>You can pay it off in weeks; the no-prepayment-penalty term is your escape hatch</li>
              <li>You want a local licensed storefront rather than an anonymous online lender</li>
              <li>The alternative you are weighing is a payday or title loan</li>
            </ul>
          </div>
          <div className="card p-7" style={{ borderTop: "3px solid var(--color-coral)" }}>
            <h2 className="font-display font-bold text-xl mb-4 tracking-tight">Walk away if</h2>
            <ul className="space-y-2 text-[1.0rem] leading-relaxed text-ink-soft">
              <li>You would need the full term to repay; the 6-month math above is the warning</li>
              <li>Any cheaper option on the list above is still unexplored</li>
              <li>You would be covering routine monthly expenses with loan money</li>
              <li>A payment would compete with rent or car payments in your budget</li>
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
          headline="Still considering Dollar Loan Center?"
          tagline="Get the APR and total of payments in writing · No prepayment penalty, so plan an early payoff · Compare a credit union first"
          ctaLabel="See their rates"
        />
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/loans" className="pill pill-ghost">
            Compare lower-cost personal loans <span aria-hidden>→</span>
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
