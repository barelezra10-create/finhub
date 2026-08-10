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
  title: "Cherry Payment Plans Review (2026): Is Cherry Legit?",
  description:
    "Cherry is a legitimate payment plan company for dental, medical, and aesthetic care. 0% plans are real for qualified borrowers, but APRs can reach 35.99%. Full 2026 review.",
  alternates: { canonical: "/reviews/cherry" },
};

const brand: Brand = {
  slug: "cherry",
  name: "Cherry",
  domain: "withcherry.com",
  color: "#E84F6B",
  category: "loan",
};

const faqs: FAQItem[] = [
  {
    question: "Is Cherry legit?",
    answer:
      "Yes. Cherry Technologies is a real payment plan platform used by tens of thousands of healthcare providers, mostly dental, med spa, aesthetic, and similar practices. Loans through Cherry are made by partner banks such as Lead Bank, Member FDIC. It is a genuine installment loan, not a scam, though the APR you personally get can range from 0% up to roughly 35.99%.",
  },
  {
    question: "Is Cherry really 0% interest?",
    answer:
      "Sometimes. Cherry offers genuinely interest-free short plans and promotional 0% APR terms for qualified borrowers, and unlike deferred-interest medical credit cards, Cherry says its 0% plans do not charge retroactive interest if you finish paying on time. But 0% is not guaranteed: applicants with weaker credit are commonly offered APRs up to about 35.99%. The APR shown on your specific offer is the one that counts.",
  },
  {
    question: "Does applying to Cherry hurt my credit?",
    answer:
      "Checking your eligibility uses a soft credit pull, which does not affect your score. Cherry advertises approvals for a high share of applicants because it looks beyond the credit score alone. As with any lender, missed payments can be sent to collections and hurt your credit, so treat it as a real loan obligation.",
  },
  {
    question: "How is Cherry different from CareCredit?",
    answer:
      "CareCredit is a medical credit card whose promotional periods use deferred interest: if you have not paid the full promo balance when the period ends, interest is charged retroactively on the original amount, often at a rate around 30%. Cherry is a fixed installment plan with no deferred interest. If your Cherry plan is 0%, it stays 0%. If it is 20%, you know that on day one. That predictability is Cherry's main advantage.",
  },
  {
    question: "What happens if I miss a Cherry payment?",
    answer:
      "Terms vary by plan and lending partner, but expect the usual installment loan consequences: possible late fees, collection activity, and credit damage if the account defaults. Cherry plans typically run on autopay from a linked card or bank account, so make sure the payment date fits your cash flow. If you hit trouble, contact Cherry support early; refunds for cancelled procedures also flow back through the provider, not the app.",
  },
];

export default function Page() {
  return (
    <article className="bg-bg">
      <FinancialProductSchema
        name="Cherry Payment Plans Review"
        description="Cherry is a buy now, pay later payment plan platform for dental, medical, and aesthetic care, with plans from interest-free to 35.99% APR through partner banks. Full 2026 review."
        slug="/reviews/cherry"
        brandName="Cherry"
        category="Medical Payment Plans"
        ratingValue={7.6}
        reviewCount={1}
      />
      <FAQPageSchema items={faqs} />
      <BreadcrumbListSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Loans", href: "/loans" },
          { name: "Reviews", href: "/reviews" },
          { name: "Cherry", href: "/reviews/cherry" },
        ]}
      />
      {/* HERO */}
      <section className="border-b border-line">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-16">
          <div className="flex items-start gap-5 mb-8">
            <BrandLogo brand={brand} size={72} rounded="lg" />
            <div>
              <span className="chip chip-violet mb-3">Payment Plan Review</span>
              <h1 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight leading-tight">
                Cherry Payment Plans Review
              </h1>
              <div className="text-sm text-mute font-mono uppercase tracking-wider mt-3">
                Updated August 2026 · By the Fintiex Rate Desk
              </div>
            </div>
          </div>

          <div className="card-flush p-6 grid grid-cols-2 md:grid-cols-4 gap-6">
            <Stat label="Financing up to" value="$50,000" />
            <Stat label="APR range" value="0 to 35.99%" />
            <Stat label="Terms" value="6wk to 60mo" />
            <Stat label="Fintiex score" value="7.6/10" />
          </div>
          <div className="mt-6">
            <VisitBrandCta brand={brand} variant="lime" label="Go to withcherry.com" />
          </div>
        </div>
      </section>

      {/* PROS + CONS */}
      <section className="max-w-(--max-w-page) mx-auto px-6 py-14">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card p-7">
            <h2 className="font-display font-bold text-xl mb-5 tracking-tight">What works</h2>
            <ul className="space-y-3 text-[1.0rem] leading-relaxed">
              <li className="flex gap-3"><span className="chip chip-lime shrink-0">+</span>Real 0% and interest-free plans for qualified borrowers, with no deferred or retroactive interest</li>
              <li className="flex gap-3"><span className="chip chip-lime shrink-0">+</span>Soft credit check to see your options; applying takes about a minute at the provider's office</li>
              <li className="flex gap-3"><span className="chip chip-lime shrink-0">+</span>High approval rates compared with medical credit cards; useful for fair-credit patients</li>
              <li className="flex gap-3"><span className="chip chip-lime shrink-0">+</span>Fixed installments with a known end date, no revolving balance to linger</li>
              <li className="flex gap-3"><span className="chip chip-lime shrink-0">+</span>Loans made by regulated partner banks such as Lead Bank, Member FDIC; used by tens of thousands of practices</li>
            </ul>
          </div>
          <div className="card p-7">
            <h2 className="font-display font-bold text-xl mb-5 tracking-tight">What to watch</h2>
            <ul className="space-y-3 text-[1.0rem] leading-relaxed">
              <li className="flex gap-3"><span className="chip chip-mute shrink-0">-</span>0% is not guaranteed: many applicants are offered APRs up to about 35.99%</li>
              <li className="flex gap-3"><span className="chip chip-mute shrink-0">-</span>A down payment is often collected up front as the first installment</li>
              <li className="flex gap-3"><span className="chip chip-mute shrink-0">-</span>Only usable at providers that offer Cherry; you cannot take the money elsewhere</li>
              <li className="flex gap-3"><span className="chip chip-mute shrink-0">-</span>Easy approval can tempt you into elective procedures you would not pay cash for</li>
              <li className="flex gap-3"><span className="chip chip-mute shrink-0">-</span>Refunds for cancelled treatment run through the provider and can take time to unwind</li>
            </ul>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-14">
        <span className="chip chip-mute mb-4">Overview</span>
        <h2 className="font-display font-extrabold text-3xl tracking-tight mb-6 leading-tight">
          Is Cherry legit?
        </h2>
        <div className="space-y-5 text-[1.0625rem] leading-relaxed text-ink-soft max-w-3xl">
          <p>
            Short answer: yes, Cherry is legitimate. If your dentist, dermatologist, med spa, or veterinarian offered you a Cherry payment plan and you are checking whether it is real, it is. Cherry Technologies is a San Francisco fintech whose platform is used by tens of thousands of healthcare and wellness practices, and the loans themselves are made by regulated partner banks such as Lead Bank, Member FDIC. This puts Cherry in a completely different category from the high-APR payday lenders people often compare it to: it is a buy now, pay later installment plan for care, closer to Affirm than to a payday shop.
          </p>
          <p>
            The structure is simple. You apply with a soft credit check, usually right in the office, and get offered a plan from 6 weeks up to 60 months. Short plans are often interest-free, and qualified borrowers can get promotional 0% APR on longer terms. Everyone else gets a fixed APR that can run up to about 35.99% as of mid-2026, varying by credit profile and offer. Cherry&rsquo;s genuinely consumer-friendly feature is what it does not have: deferred interest. Medical credit cards like CareCredit charge interest retroactively on the whole original balance if you miss the promo deadline by a day. Cherry&rsquo;s 0% plans stay 0% as long as you make your payments.
          </p>
          <p>
            The honest caution is not legitimacy, it is temptation. Cherry approves a high share of applicants, and an easy yes at the front desk makes a $4,000 elective procedure feel like $167 a month. Before signing, look at the APR on your specific offer, not the best case in the marketing. At 0%, Cherry is one of the better ways to pay for care. At 30%+, you should compare a 0% intro credit card, the provider&rsquo;s own cash discount, or simply waiting and saving.
          </p>
        </div>
      </section>

      {/* REAL COST */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-14">
        <span className="chip chip-mute mb-4">The Math</span>
        <h2 className="font-display font-extrabold text-3xl tracking-tight mb-6 leading-tight">
          What a $2,000 procedure costs on Cherry
        </h2>
        <div className="card-flush overflow-hidden">
          <div className="grid grid-cols-3 px-6 py-3 text-xs font-mono uppercase tracking-wider text-mute border-b border-line bg-bg-soft/50">
            <div>Plan</div>
            <div className="text-right">Approx. monthly</div>
            <div className="text-right">Approx. total paid</div>
          </div>
          {[
            { s: "0% APR, 12 months", m: "~$167", t: "$2,000" },
            { s: "9.99% APR, 24 months", m: "~$92", t: "~$2,215" },
            { s: "35.99% APR, 24 months", m: "~$118", t: "~$2,835" },
            { s: "35.99% APR, 36 months", m: "~$91", t: "~$3,290" },
          ].map((r, i, arr) => (
            <div key={r.s} className={`grid grid-cols-3 px-6 py-4 items-center text-sm ${i < arr.length - 1 ? "border-b border-line-soft" : ""}`}>
              <div className="font-medium">{r.s}</div>
              <div className="text-right font-mono tabular font-semibold">{r.m}</div>
              <div className="text-right text-mute">{r.t}</div>
            </div>
          ))}
        </div>
        <p className="text-xs text-mute mt-3 font-mono">Illustrative estimates; actual offers vary by credit profile and provider as of mid-2026. The same product can cost $2,000 or $3,290 depending on the APR tier you are approved for. Read your offer.</p>
      </section>

      {/* CHEAPER OPTIONS */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-14">
        <span className="chip chip-mute mb-4">Compare First</span>
        <h2 className="font-display font-extrabold text-3xl tracking-tight mb-6 leading-tight">
          Cheaper ways to pay for care, if your APR is high
        </h2>
        <div className="card p-7 max-w-2xl">
          <ul className="space-y-3 text-[1.0rem] leading-relaxed">
            <li className="flex gap-3"><span className="font-mono text-violet">01</span>Ask the provider for a cash or prepay discount; many practices quietly offer 5 to 10% off</li>
            <li className="flex gap-3"><span className="font-mono text-violet">02</span>Use HSA or FSA dollars for eligible medical and dental costs; that is pre-tax money</li>
            <li className="flex gap-3"><span className="font-mono text-violet">03</span>A 0% intro APR credit card, if you can pay it off inside the promo window</li>
            <li className="flex gap-3"><span className="font-mono text-violet">04</span>The provider's own in-house payment plan, which is sometimes interest-free with no lender at all</li>
            <li className="flex gap-3"><span className="font-mono text-violet">05</span>For hospital and urgent care bills: financial assistance and charity care programs before any financing</li>
            <li className="flex gap-3"><span className="font-mono text-violet">06</span>For elective work: getting a second quote; prices for the same procedure vary enormously</li>
          </ul>
          <p className="text-sm text-mute mt-5 leading-relaxed">If Cherry offers you 0%, it likely beats everything on this list for convenience. This list is for when your offer comes back at 20% or more.</p>
        </div>
      </section>

      {/* CHERRY VS CARECREDIT */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-14">
        <span className="chip chip-mute mb-4">How it compares</span>
        <h2 className="font-display font-extrabold text-3xl tracking-tight mb-6 leading-tight">
          Cherry vs. CareCredit vs. paying cash
        </h2>
        <div className="card-flush overflow-hidden">
          <div className="grid grid-cols-4 px-6 py-3 text-xs font-mono uppercase tracking-wider text-mute border-b border-line bg-bg-soft/50">
            <div>Feature</div>
            <div className="text-center">Cherry</div>
            <div className="text-center">CareCredit</div>
            <div className="text-center">Cash / savings</div>
          </div>
          {[
            { f: "Structure", a: "Installment loan", b: "Credit card", c: "None" },
            { f: "Deferred interest risk", a: "No", b: "Yes", c: "No" },
            { f: "0% possible", a: "Yes, if qualified", b: "Promo periods", c: "Always" },
            { f: "Max APR", a: "~35.99%", b: "~30%+", c: "0%" },
            { f: "Credit check to see options", a: "Soft", b: "Hard", c: "None" },
            { f: "Reusable account", a: "Per plan", b: "Revolving", c: "n/a" },
          ].map((r, i, arr) => (
            <div key={r.f} className={`grid grid-cols-4 px-6 py-4 items-center text-sm ${i < arr.length - 1 ? "border-b border-line-soft" : ""}`}>
              <div className="font-medium text-mute">{r.f}</div>
              <div className="text-center font-mono">{r.a}</div>
              <div className="text-center font-mono">{r.b}</div>
              <div className="text-center font-mono">{r.c}</div>
            </div>
          ))}
        </div>
        <p className="text-xs text-mute mt-3 font-mono">Figures approximate as of mid-2026 and vary by offer. The deferred interest row is the one that costs real people real money.</p>
      </section>

      {/* WHO FOR / WHO AVOID */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-14">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card p-7" style={{ borderTop: "3px solid var(--color-lime)" }}>
            <h2 className="font-display font-bold text-xl mb-4 tracking-tight">Good fit if</h2>
            <ul className="space-y-2 text-[1.0rem] leading-relaxed text-ink-soft">
              <li>You qualified for a 0% or low-APR plan and the payment fits your budget</li>
              <li>The care is needed now and paying cash would drain your emergency fund</li>
              <li>You want a fixed end date instead of a revolving medical credit card</li>
              <li>Your credit is fair and CareCredit or a bank loan turned you down</li>
            </ul>
          </div>
          <div className="card p-7" style={{ borderTop: "3px solid var(--color-coral)" }}>
            <h2 className="font-display font-bold text-xl mb-4 tracking-tight">Think twice if</h2>
            <ul className="space-y-2 text-[1.0rem] leading-relaxed text-ink-soft">
              <li>Your offer came back near 35.99% APR; compare the alternatives above first</li>
              <li>The financing is what makes an optional procedure feel affordable</li>
              <li>Your income is irregular and autopay dates could bounce</li>
              <li>You already carry several BNPL or installment balances</li>
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
          headline="Offered Cherry at your provider?"
          tagline="Check your options with a soft pull · Read the APR on your specific offer · 0% plans stay 0%"
          ctaLabel="Learn more at Cherry"
        />
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/loans" className="pill pill-ghost">
            Compare personal loan options <span aria-hidden>→</span>
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
