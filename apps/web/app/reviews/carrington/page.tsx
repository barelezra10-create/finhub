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
  title: "Carrington Mortgage Review (2026): Low-Credit Lender & Servicer",
  description:
    "Carrington Mortgage lends to credit scores as low as 500 and services loans nationwide. Full 2026 review: loan types, the 2022 CFPB action, and who it fits.",
  alternates: { canonical: "/reviews/carrington" },
};

const brand: Brand = {
  slug: "carrington",
  name: "Carrington Mortgage Services",
  domain: "carringtonmortgage.com",
  color: "#00355F",
  category: "mortgage",
};

const faqs: FAQItem[] = [
  {
    question: "Why is Carrington servicing my mortgage?",
    answer:
      "Carrington is both a lender and a large servicer. If you never applied with them, your loan's servicing rights were transferred to Carrington by the company that owns your loan. That is routine and legal, and it does not change your rate, balance, or terms. Register at carringtonmortgage.com with the loan number from your welcome letter to manage payments.",
  },
  {
    question: "What credit score does Carrington require?",
    answer:
      "Carrington is one of the few national lenders that works with FHA scores down to 500. Under FHA rules, scores from 500 to 579 need at least 10% down, while 580 and up can put 3.5% down. Carrington also offers non-QM programs for borrowers with recent credit events like bankruptcy or foreclosure.",
  },
  {
    question: "What was the CFPB action against Carrington?",
    answer:
      "In November 2022 the CFPB ordered Carrington to pay a $5.25 million penalty for misleading borrowers about CARES Act forbearance rights during the pandemic, charging improper late fees, and misreporting forbearance status to credit bureaus. Carrington refunded affected customers, and the consent order was formally terminated in July 2025.",
  },
  {
    question: "Does Carrington publish its mortgage rates?",
    answer:
      "No. You need to speak with a loan officer for a quote. Keep in mind that lenders serving lower credit scores price for that risk, so quotes often run above the national average. As of mid-2026, average 30-year fixed rates were in the mid to high 6 percent range; expect a premium if your score is low, and compare at least two other quotes.",
  },
  {
    question: "Does Carrington offer loans for self-employed borrowers?",
    answer:
      "Yes. Carrington's non-QM lineup includes bank statement loans that document income from deposits instead of tax returns, plus investor programs. These carry higher rates and larger down payments than agency loans, so treat them as a bridge, not a forever loan.",
  },
];

export default function Page() {
  return (
    <article className="bg-bg">
      <FinancialProductSchema
        name="Carrington Mortgage Review"
        description="Carrington Mortgage Services is a lender and servicer specializing in low-credit and non-QM borrowers, with FHA lending down to a 500 credit score. Full 2026 review."
        slug="/reviews/carrington"
        brandName="Carrington Mortgage Services"
        category="Mortgage"
        ratingValue={7.1}
        reviewCount={1}
      />
      <FAQPageSchema items={faqs} />
      <BreadcrumbListSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Mortgages", href: "/mortgages" },
          { name: "Reviews", href: "/reviews" },
          { name: "Carrington Mortgage", href: "/reviews/carrington" },
        ]}
      />
      {/* HERO */}
      <section className="border-b border-line">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-16">
          <div className="flex items-start gap-5 mb-8">
            <BrandLogo brand={brand} size={72} rounded="lg" />
            <div>
              <span className="chip chip-violet mb-3">Mortgage Review</span>
              <h1 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight leading-tight">
                Carrington Mortgage Review
              </h1>
              <div className="text-sm text-mute font-mono uppercase tracking-wider mt-3">
                Updated August 2026 · By the Fintiex Rate Desk
              </div>
            </div>
          </div>

          <div className="card-flush p-6 grid grid-cols-2 md:grid-cols-4 gap-6">
            <Stat label="Company type" value="Lender + servicer" />
            <Stat label="Min credit score" value="500 (FHA)" />
            <Stat label="Coverage" value="~48 states" />
            <Stat label="Fintiex score" value="7.1/10" />
          </div>
          <div className="mt-6">
            <VisitBrandCta brand={brand} variant="lime" />
          </div>
        </div>
      </section>

      {/* PROS + CONS */}
      <section className="max-w-(--max-w-page) mx-auto px-6 py-14">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card p-7">
            <h2 className="font-display font-bold text-xl mb-5 tracking-tight">What works</h2>
            <ul className="space-y-3 text-[1.0rem] leading-relaxed">
              <li className="flex gap-3"><span className="chip chip-lime shrink-0">+</span>One of the few national lenders accepting FHA credit scores down to 500</li>
              <li className="flex gap-3"><span className="chip chip-lime shrink-0">+</span>Non-QM programs for recent bankruptcy, foreclosure, or self-employed income</li>
              <li className="flex gap-3"><span className="chip chip-lime shrink-0">+</span>Full government lineup: FHA, VA, and USDA, plus conventional</li>
              <li className="flex gap-3"><span className="chip chip-lime shrink-0">+</span>Experienced with hardship workflows: loss mitigation is a core competency, not a side desk</li>
              <li className="flex gap-3"><span className="chip chip-lime shrink-0">+</span>2022 CFPB consent order was satisfied and formally terminated in July 2025</li>
            </ul>
          </div>
          <div className="card p-7">
            <h2 className="font-display font-bold text-xl mb-5 tracking-tight">What to watch</h2>
            <ul className="space-y-3 text-[1.0rem] leading-relaxed">
              <li className="flex gap-3"><span className="chip chip-mute shrink-0">-</span>CFPB fined Carrington $5.25M in 2022 for mishandling pandemic forbearance rights</li>
              <li className="flex gap-3"><span className="chip chip-mute shrink-0">-</span>Rates and fees skew above average; that is the price of low-credit flexibility</li>
              <li className="flex gap-3"><span className="chip chip-mute shrink-0">-</span>Servicing complaints follow the industry pattern: escrow disputes and payment posting issues</li>
              <li className="flex gap-3"><span className="chip chip-mute shrink-0">-</span>No published rates and a dated digital experience compared to online-first lenders</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <VisitBrandCard brand={brand} tagline="Credit-flexible lender · FHA from 500 FICO · Non-QM programs" ctaLabel="Check your options" />
      </section>

      {/* OVERVIEW */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-14">
        <span className="chip chip-mute mb-4">Overview</span>
        <h2 className="font-display font-extrabold text-3xl tracking-tight mb-6 leading-tight">
          What is Carrington Mortgage?
        </h2>
        <div className="space-y-5 text-[1.0625rem] leading-relaxed text-ink-soft max-w-3xl">
          <p>
            Carrington Mortgage Services is a California-based lender and servicer that operates in all or nearly all states. People land on this page for two very different reasons: either they are shopping for a mortgage with damaged credit, or a letter just told them Carrington now services their existing loan. Both are legitimate. Carrington originates new loans and also services a large portfolio of loans it did not originate, many of them government-backed loans transferred from other companies.
          </p>
          <p>
            As a lender, Carrington&rsquo;s niche is borrowers other lenders decline. It accepts FHA scores down to 500, works with recent bankruptcies and foreclosures through its non-QM &ldquo;Flexible Advantage&rdquo; style programs, and offers bank statement loans for self-employed borrowers. The trade-off is cost: lenders that take more credit risk charge for it, so expect pricing above the national average, which sat in the mid to high 6 percent range for 30-year fixed loans as of mid-2026. Get a full Loan Estimate and compare it against at least two other lenders before committing.
          </p>
          <p>
            The record is not clean. In November 2022 the CFPB ordered Carrington to pay a $5.25 million penalty for misleading homeowners about CARES Act forbearance protections, charging improper late fees, and botching credit reporting for borrowers in forbearance. Carrington refunded affected customers and the consent order was terminated in July 2025, which formally closed the matter. Ongoing customer complaints look like those of most large servicers: escrow analysis disputes, payment posting delays, and slow paperwork. None of that makes Carrington a scam; it makes it a company you should monitor closely, especially in your first months after a transfer.
          </p>
        </div>
      </section>

      {/* RATES AND PRODUCTS */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-14">
        <span className="chip chip-mute mb-4">Rates and Products</span>
        <h2 className="font-display font-extrabold text-3xl tracking-tight mb-6 leading-tight">
          Loan types and credit floors
        </h2>
        <div className="card-flush overflow-hidden">
          <div className="grid grid-cols-3 px-6 py-3 text-xs font-mono uppercase tracking-wider text-mute border-b border-line bg-bg-soft/50">
            <div>Product</div>
            <div className="text-right">Typical min score</div>
            <div className="text-right">Notes</div>
          </div>
          {[
            { product: "FHA", score: "500", note: "10% down under 580; 3.5% at 580+" },
            { product: "VA", score: "~500", note: "0% down for eligible veterans" },
            { product: "USDA", score: "~550", note: "0% down, rural areas" },
            { product: "Conventional", score: "620", note: "Standard agency terms" },
            { product: "Non-QM / bank statement", score: "Varies", note: "Recent credit events OK" },
          ].map((r, i, arr) => (
            <div key={r.product} className={`grid grid-cols-3 px-6 py-4 items-center text-sm ${i < arr.length - 1 ? "border-b border-line-soft" : ""}`}>
              <div className="font-medium">{r.product}</div>
              <div className="text-right font-mono tabular font-semibold">{r.score}</div>
              <div className="text-right text-mute">{r.note}</div>
            </div>
          ))}
        </div>
        <p className="text-xs text-mute mt-3 font-mono">Carrington does not publish live rates. Low-credit and non-QM pricing runs above national averages; always confirm with a Loan Estimate.</p>
      </section>

      {/* IF CARRINGTON SERVICES YOUR LOAN */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-14">
        <span className="chip chip-mute mb-4">Existing Customers</span>
        <h2 className="font-display font-extrabold text-3xl tracking-tight mb-6 leading-tight">
          If Carrington took over your loan
        </h2>
        <div className="card p-7 max-w-2xl">
          <ul className="space-y-3 text-[1.0rem] leading-relaxed">
            <li className="flex gap-3"><span className="font-mono text-violet">01</span>Your rate, balance, and terms cannot change because of the transfer</li>
            <li className="flex gap-3"><span className="font-mono text-violet">02</span>For 60 days, payments sent to your old servicer cannot be counted late or fee&rsquo;d</li>
            <li className="flex gap-3"><span className="font-mono text-violet">03</span>Re-establish autopay in Carrington&rsquo;s portal; old autopay setups rarely carry over</li>
            <li className="flex gap-3"><span className="font-mono text-violet">04</span>Verify escrow line items: taxes, insurance, and any PMI removal date</li>
            <li className="flex gap-3"><span className="font-mono text-violet">05</span>If something is wrong, send a written notice of error; servicers must investigate under RESPA</li>
            <li className="flex gap-3"><span className="font-mono text-violet">06</span>Unresolved disputes can be escalated free at consumerfinance.gov</li>
          </ul>
        </div>
      </section>

      {/* WHO FOR / WHO AVOID */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-14">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card p-7" style={{ borderTop: "3px solid var(--color-lime)" }}>
            <h2 className="font-display font-bold text-xl mb-4 tracking-tight">Best for</h2>
            <ul className="space-y-2 text-[1.0rem] leading-relaxed text-ink-soft">
              <li>Borrowers with credit scores between 500 and 620 who keep getting declined</li>
              <li>Buyers a few years out from bankruptcy or foreclosure</li>
              <li>Self-employed borrowers who need bank statement documentation</li>
              <li>FHA and VA borrowers with thin or rebuilding credit</li>
            </ul>
          </div>
          <div className="card p-7" style={{ borderTop: "3px solid var(--color-coral)" }}>
            <h2 className="font-display font-bold text-xl mb-4 tracking-tight">May not be the right fit if</h2>
            <ul className="space-y-2 text-[1.0rem] leading-relaxed text-ink-soft">
              <li>Your credit is 680+: mainstream lenders will beat Carrington&rsquo;s pricing</li>
              <li>You want a slick app-first experience with instant online quotes</li>
              <li>Regulatory history is a dealbreaker for you regardless of remediation</li>
            </ul>
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-14">
        <span className="chip chip-mute mb-4">How it compares</span>
        <h2 className="font-display font-extrabold text-3xl tracking-tight mb-6 leading-tight">
          Carrington vs. Rocket vs. Guild
        </h2>
        <div className="card-flush overflow-hidden">
          <div className="grid grid-cols-4 px-6 py-3 text-xs font-mono uppercase tracking-wider text-mute border-b border-line bg-bg-soft/50">
            <div>Feature</div>
            <div className="text-center">Carrington</div>
            <div className="text-center">Rocket</div>
            <div className="text-center">Guild</div>
          </div>
          {[
            { feature: "Min FICO (FHA)", a: "500", b: "580", c: "~540" },
            { feature: "Non-QM loans", a: "Yes", b: "No", c: "Limited" },
            { feature: "Bank statement docs", a: "Yes", b: "No", c: "No" },
            { feature: "Published rates", a: "No", b: "Yes", c: "No" },
            { feature: "Pricing posture", a: "Above avg", b: "Average", c: "Average" },
            { feature: "Digital experience", a: "Basic", b: "Excellent", c: "Good" },
          ].map((r, i, arr) => (
            <div key={r.feature} className={`grid grid-cols-4 px-6 py-4 items-center text-sm ${i < arr.length - 1 ? "border-b border-line-soft" : ""}`}>
              <div className="font-medium text-mute">{r.feature}</div>
              <div className="text-center font-mono">{r.a}</div>
              <div className="text-center font-mono">{r.b}</div>
              <div className="text-center font-mono">{r.c}</div>
            </div>
          ))}
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
          headline="See what Carrington can do for your credit profile"
          tagline="FHA from 500 FICO · Bankruptcy and foreclosure programs · Bank statement loans"
          ctaLabel="Check your options"
        />
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/mortgages" className="pill pill-ghost">
            Compare all lenders <span aria-hidden>→</span>
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
