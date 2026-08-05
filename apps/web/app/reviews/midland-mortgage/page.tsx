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
  title: "Midland Mortgage Review (2026): Who They Are & Your Rights",
  description:
    "Midland Mortgage is the servicing division of MidFirst Bank. If your loan was transferred to Midland, here is why, your rights, and how to manage your account.",
  alternates: { canonical: "/reviews/midland-mortgage" },
};

const brand: Brand = {
  slug: "midland-mortgage",
  name: "Midland Mortgage",
  domain: "mymidlandmortgage.com",
  color: "#004990",
  category: "mortgage",
};

const faqs: FAQItem[] = [
  {
    question: "Why was my mortgage transferred to Midland Mortgage?",
    answer:
      "The investor who owns your loan moved its servicing rights to Midland, a division of MidFirst Bank. Midland specializes in servicing government-backed loans, especially FHA, and regularly takes over portfolios from other companies. Your rate, balance, and loan terms do not change; only where you send payments changes.",
  },
  {
    question: "Is Midland Mortgage a real company?",
    answer:
      "Yes. Midland Mortgage is not a standalone startup; it is the mortgage servicing division of MidFirst Bank, a federally chartered bank headquartered in Oklahoma City and one of the largest privately owned banks in the United States. It has serviced loans for decades and manages accounts through mymidlandmortgage.com.",
  },
  {
    question: "Can I get a new loan from Midland Mortgage?",
    answer:
      "Not really. Midland is a servicer, not a retail lender with published rates and an application funnel. If you want to refinance the loan Midland services, shop with mortgage lenders. Nothing stops you from refinancing away from Midland; your loan is not locked to them.",
  },
  {
    question: "Why did my monthly payment change after moving to Midland?",
    answer:
      "Almost always escrow, not the loan itself. When servicing transfers, the new servicer runs its own escrow analysis, and differences in tax or insurance estimates change the escrow portion of your payment. Request the escrow analysis, check the tax and insurance figures against your actual bills, and dispute in writing if a number is wrong.",
  },
  {
    question: "What should I do if Midland misapplies a payment?",
    answer:
      "Send a written notice of error, not just a phone call. Under RESPA, a servicer must acknowledge a written error notice quickly and resolve or explain within about 30 business days. Keep dated copies. If it stalls, file a complaint with the CFPB at consumerfinance.gov and, for FHA loans, you can also contact HUD.",
  },
];

export default function Page() {
  return (
    <article className="bg-bg">
      <FinancialProductSchema
        name="Midland Mortgage Review"
        description="Midland Mortgage is the mortgage servicing division of MidFirst Bank, focused on government-backed loans. This review explains transfers, borrower rights, and complaint patterns."
        slug="/reviews/midland-mortgage"
        brandName="Midland Mortgage"
        category="Mortgage Servicing"
        ratingValue={6.8}
        reviewCount={1}
      />
      <FAQPageSchema items={faqs} />
      <BreadcrumbListSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Mortgages", href: "/mortgages" },
          { name: "Reviews", href: "/reviews" },
          { name: "Midland Mortgage", href: "/reviews/midland-mortgage" },
        ]}
      />
      {/* HERO */}
      <section className="border-b border-line">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-16">
          <div className="flex items-start gap-5 mb-8">
            <BrandLogo brand={brand} size={72} rounded="lg" />
            <div>
              <span className="chip chip-violet mb-3">Mortgage Servicer Review</span>
              <h1 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight leading-tight">
                Midland Mortgage Review
              </h1>
              <div className="text-sm text-mute font-mono uppercase tracking-wider mt-3">
                Updated August 2026 · By the Fintiex Rate Desk
              </div>
            </div>
          </div>

          <div className="card-flush p-6 grid grid-cols-2 md:grid-cols-4 gap-6">
            <Stat label="Company type" value="Servicer" />
            <Stat label="Parent" value="MidFirst Bank" />
            <Stat label="Focus" value="FHA / gov loans" />
            <Stat label="Fintiex score" value="6.8/10" />
          </div>
          <div className="mt-6">
            <VisitBrandCta brand={brand} variant="lime" label="Go to mymidlandmortgage.com" />
          </div>
        </div>
      </section>

      {/* PROS + CONS */}
      <section className="max-w-(--max-w-page) mx-auto px-6 py-14">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card p-7">
            <h2 className="font-display font-bold text-xl mb-5 tracking-tight">What works</h2>
            <ul className="space-y-3 text-[1.0rem] leading-relaxed">
              <li className="flex gap-3"><span className="chip chip-lime shrink-0">+</span>Backed by a real bank: MidFirst is a federally chartered, family-owned bank, not a thinly capitalized servicing shop</li>
              <li className="flex gap-3"><span className="chip chip-lime shrink-0">+</span>Decades of experience servicing FHA and other government-backed loans</li>
              <li className="flex gap-3"><span className="chip chip-lime shrink-0">+</span>Functional online account center with autopay, statements, and escrow detail</li>
              <li className="flex gap-3"><span className="chip chip-lime shrink-0">+</span>Established loss mitigation programs for borrowers who fall behind, including FHA options</li>
            </ul>
          </div>
          <div className="card p-7">
            <h2 className="font-display font-bold text-xl mb-5 tracking-tight">What to watch</h2>
            <ul className="space-y-3 text-[1.0rem] leading-relaxed">
              <li className="flex gap-3"><span className="chip chip-mute shrink-0">-</span>Consistently poor customer review scores, with complaints about escrow math after transfers</li>
              <li className="flex gap-3"><span className="chip chip-mute shrink-0">-</span>Reports of misapplied payments and funds parked in suspense accounts instead of being applied</li>
              <li className="flex gap-3"><span className="chip chip-mute shrink-0">-</span>Many serviced loans are already stressed or delinquent, so collections-style interactions are common</li>
              <li className="flex gap-3"><span className="chip chip-mute shrink-0">-</span>Dated digital experience versus newer servicers; phone support gets mixed marks</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <VisitBrandCard
          brand={brand}
          headline="Loan transferred to Midland?"
          tagline="Register online, verify your escrow numbers, and set up autopay"
          ctaLabel="Manage your account"
        />
      </section>

      {/* OVERVIEW */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-14">
        <span className="chip chip-mute mb-4">Overview</span>
        <h2 className="font-display font-extrabold text-3xl tracking-tight mb-6 leading-tight">
          Why is Midland Mortgage collecting my payment?
        </h2>
        <div className="space-y-5 text-[1.0625rem] leading-relaxed text-ink-soft max-w-3xl">
          <p>
            Nobody chooses Midland Mortgage. You end up with them when the owner of your loan transfers servicing, which is why almost everyone searching this name just got a letter. Here is the reassuring part: Midland Mortgage is the servicing division of MidFirst Bank, a federally chartered bank based in Oklahoma City and one of the largest privately owned banks in the country. This is a decades-old, regulated institution, not a fly-by-night collector.
          </p>
          <p>
            Midland&rsquo;s specialty is government-backed loans, particularly FHA. It services large portfolios that investors and agencies hand off, and a meaningful share of those loans are already behind on payments when Midland takes them over. That shapes the experience: Midland runs disciplined, collections-aware servicing operations, and borrowers with spotless accounts sometimes feel that machinery more than they would at a retail-friendly servicer. It also means Midland has real depth in FHA loss mitigation if you hit hardship, which matters more than app polish when things go wrong.
          </p>
          <p>
            The complaint file is genuinely rough. Across BBB, PissedConsumer, and CFPB complaint data, the recurring themes are escrow recalculations that raise payments right after transfer, payments held in suspense accounts instead of being applied, fee disputes, and slow error resolution. Some complaints escalate to foreclosure-practice allegations and lawsuits, as happens with most large special servicers. Our advice is not fear, it is paperwork: verify everything in writing during your first two payment cycles, and use your RESPA rights the moment something looks off.
          </p>
        </div>
      </section>

      {/* YOUR RIGHTS */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-14">
        <span className="chip chip-mute mb-4">Your Rights</span>
        <h2 className="font-display font-extrabold text-3xl tracking-tight mb-6 leading-tight">
          Your rights when servicing transfers
        </h2>
        <div className="card p-7 max-w-2xl">
          <ul className="space-y-3 text-[1.0rem] leading-relaxed">
            <li className="flex gap-3"><span className="font-mono text-violet">01</span>15 days advance notice from your old servicer, plus a welcome letter from Midland</li>
            <li className="flex gap-3"><span className="font-mono text-violet">02</span>60-day grace window: payments sent to the old servicer cannot trigger late fees</li>
            <li className="flex gap-3"><span className="font-mono text-violet">03</span>No changes to your rate, balance, term, or loan type from the transfer itself</li>
            <li className="flex gap-3"><span className="font-mono text-violet">04</span>Right to a written escrow analysis explaining any payment change</li>
            <li className="flex gap-3"><span className="font-mono text-violet">05</span>Written error notices must be investigated, generally within 30 business days</li>
            <li className="flex gap-3"><span className="font-mono text-violet">06</span>Free escalation path: CFPB complaints at consumerfinance.gov, HUD for FHA loans</li>
          </ul>
          <p className="text-sm text-mute mt-5 leading-relaxed">Phone calls do not create legal obligations. When money is involved, put it in writing and keep dated copies. Servicers respond to paper trails.</p>
        </div>
      </section>

      {/* MANAGING */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-14">
        <span className="chip chip-mute mb-4">Managing Your Account</span>
        <h2 className="font-display font-extrabold text-3xl tracking-tight mb-6 leading-tight">
          Getting set up with Midland
        </h2>
        <div className="space-y-4 text-[1.0625rem] leading-relaxed text-ink-soft max-w-3xl">
          <p>
            Register at mymidlandmortgage.com with the loan number from your welcome letter. Compare your first Midland statement against the final statement from your old servicer: principal balance, interest rate, next due date, and escrow balance should all match. Then open the escrow detail and check the actual tax and insurance amounts against your county bill and policy declarations page. Transfer-time escrow math is the single biggest source of Midland complaints, and catching an inflated estimate early is a five-minute fix instead of a six-month dispute.
          </p>
          <p>
            Set up autopay fresh; assume nothing carried over. Give your insurance agent Midland&rsquo;s mortgagee clause so renewals route correctly, which prevents force-placed insurance. If you are behind on payments or heading that way, contact loss mitigation before missing a payment: FHA loans have structured options like partial claims and modifications, and Midland processes these routinely. And if you simply do not want to be with Midland, refinancing with any lender moves your loan away from them.
          </p>
        </div>
      </section>

      {/* WHO FOR / WHO AVOID */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-14">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card p-7" style={{ borderTop: "3px solid var(--color-lime)" }}>
            <h2 className="font-display font-bold text-xl mb-4 tracking-tight">Good news if</h2>
            <ul className="space-y-2 text-[1.0rem] leading-relaxed text-ink-soft">
              <li>You want your servicer backed by an actual regulated bank</li>
              <li>You have an FHA loan and may need hardship options someday</li>
              <li>Your escrow situation is simple and your account is current</li>
            </ul>
          </div>
          <div className="card p-7" style={{ borderTop: "3px solid var(--color-coral)" }}>
            <h2 className="font-display font-bold text-xl mb-4 tracking-tight">Stay alert if</h2>
            <ul className="space-y-2 text-[1.0rem] leading-relaxed text-ink-soft">
              <li>Your payment changed right after the transfer: audit the escrow analysis</li>
              <li>You recently used assistance funds or a modification; confirm they were applied</li>
              <li>You are delinquent: get every agreement in writing before sending money</li>
              <li>You expect app-first, chat-style support; Midland is old-school</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SERVICER VS LENDER */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-14">
        <span className="chip chip-mute mb-4">Context</span>
        <h2 className="font-display font-extrabold text-3xl tracking-tight mb-6 leading-tight">
          What Midland can and cannot do
        </h2>
        <div className="card-flush overflow-hidden">
          <div className="grid grid-cols-3 px-6 py-3 text-xs font-mono uppercase tracking-wider text-mute border-b border-line bg-bg-soft/50">
            <div>Task</div>
            <div className="text-center">Midland handles it</div>
            <div className="text-center">Who does</div>
          </div>
          {[
            { task: "Collect payments and manage escrow", a: "Yes", b: "Midland" },
            { task: "FHA loss mitigation and modifications", a: "Yes", b: "Midland" },
            { task: "Remove PMI / MIP when eligible", a: "Yes", b: "Midland, per loan rules" },
            { task: "Lower your interest rate", a: "No", b: "Refinance with a lender" },
            { task: "Issue new purchase loans", a: "No", b: "A mortgage lender" },
            { task: "Own your loan", a: "Usually no", b: "Investor / agency" },
          ].map((r, i, arr) => (
            <div key={r.task} className={`grid grid-cols-3 px-6 py-4 items-center text-sm ${i < arr.length - 1 ? "border-b border-line-soft" : ""}`}>
              <div className="font-medium">{r.task}</div>
              <div className="text-center font-mono">{r.a}</div>
              <div className="text-center text-mute">{r.b}</div>
            </div>
          ))}
        </div>
        <p className="text-xs text-mute mt-3 font-mono">FHA loans carry MIP for the life of the loan in many cases; removing it usually requires refinancing, not a servicer request.</p>
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
          headline="Manage your loan at mymidlandmortgage.com"
          tagline="Register your account · Audit the escrow analysis · Set up autopay"
          ctaLabel="Go to Midland"
        />
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/mortgages" className="pill pill-ghost">
            Want out? Compare refinance lenders <span aria-hidden>→</span>
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
