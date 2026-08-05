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
  title: "RoundPoint Mortgage Review (2026): Servicer Facts & Rights",
  description:
    "RoundPoint Mortgage Servicing is a legitimate servicer owned by Two Harbors. If your loan moved to RoundPoint, here is what to verify and your rights under RESPA.",
  alternates: { canonical: "/reviews/roundpoint" },
};

const brand: Brand = {
  slug: "roundpoint",
  name: "RoundPoint Mortgage Servicing",
  domain: "roundpointmortgage.com",
  color: "#008C95",
  category: "mortgage",
};

const faqs: FAQItem[] = [
  {
    question: "Is RoundPoint Mortgage Servicing legit?",
    answer:
      "Yes. RoundPoint Mortgage Servicing LLC has operated since 2007 and is owned by Two Harbors Investment Corp., a publicly traded real estate investment trust (NYSE: TWO) that acquired it in 2023. A transfer letter naming RoundPoint is almost certainly a routine servicing transfer, not a scam. Verify by matching the loan number on the letter to your existing statement.",
  },
  {
    question: "Why did my mortgage get transferred to RoundPoint?",
    answer:
      "Investors that own mortgage servicing rights, including RoundPoint's parent Two Harbors, buy servicing portfolios regularly. When yours was purchased or reassigned, collection duties moved to RoundPoint. Your interest rate, balance, and loan terms are unchanged; only the company you pay and deal with is different.",
  },
  {
    question: "Why have I not received a statement from RoundPoint?",
    answer:
      "Statement gaps are one of the most common complaints in the months around a transfer. Do not wait: register on RoundPoint's online portal, confirm your mailing address and email, and download the current statement there. Your payment is still due even if paper statements lag, and the portal is the fastest way to confirm the amount and due date.",
  },
  {
    question: "What if RoundPoint's escrow analysis looks wrong?",
    answer:
      "Pull your county tax bill and insurance declarations page, compare them to the line items in the analysis, and dispute in writing if the numbers do not match. Under RESPA, a written notice of error forces an investigation, generally within 30 business days. Double-charged insurance and stale tax estimates are the usual culprits after transfers.",
  },
  {
    question: "Can I refinance away from RoundPoint?",
    answer:
      "Yes, any time. Servicers do not control whether you refinance. If you are unhappy, get quotes from lenders, and the new loan pays off the one RoundPoint services. Just weigh closing costs against your current rate before switching only out of frustration.",
  },
];

export default function Page() {
  return (
    <article className="bg-bg">
      <FinancialProductSchema
        name="RoundPoint Mortgage Review"
        description="RoundPoint Mortgage Servicing is a national servicer owned by Two Harbors Investment Corp. This review covers transfers, borrower rights, and known complaint patterns."
        slug="/reviews/roundpoint"
        brandName="RoundPoint Mortgage Servicing"
        category="Mortgage Servicing"
        ratingValue={6.6}
        reviewCount={1}
      />
      <FAQPageSchema items={faqs} />
      <BreadcrumbListSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Mortgages", href: "/mortgages" },
          { name: "Reviews", href: "/reviews" },
          { name: "RoundPoint Mortgage", href: "/reviews/roundpoint" },
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
                RoundPoint Mortgage Review
              </h1>
              <div className="text-sm text-mute font-mono uppercase tracking-wider mt-3">
                Updated August 2026 · By the Fintiex Rate Desk
              </div>
            </div>
          </div>

          <div className="card-flush p-6 grid grid-cols-2 md:grid-cols-4 gap-6">
            <Stat label="Company type" value="Servicer" />
            <Stat label="Founded" value="2007" />
            <Stat label="Owner" value="Two Harbors" />
            <Stat label="Fintiex score" value="6.6/10" />
          </div>
          <div className="mt-6">
            <VisitBrandCta brand={brand} variant="lime" label="Go to roundpointmortgage.com" />
          </div>
        </div>
      </section>

      {/* PROS + CONS */}
      <section className="max-w-(--max-w-page) mx-auto px-6 py-14">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card p-7">
            <h2 className="font-display font-bold text-xl mb-5 tracking-tight">What works</h2>
            <ul className="space-y-3 text-[1.0rem] leading-relaxed">
              <li className="flex gap-3"><span className="chip chip-lime shrink-0">+</span>Legitimate, long-running servicer, owned since 2023 by publicly traded Two Harbors (NYSE: TWO)</li>
              <li className="flex gap-3"><span className="chip chip-lime shrink-0">+</span>Online portal covers the basics: payments, autopay, statements, escrow detail, payoff quotes</li>
              <li className="flex gap-3"><span className="chip chip-lime shrink-0">+</span>Services loans nationwide with standard hardship and loss mitigation programs</li>
              <li className="flex gap-3"><span className="chip chip-lime shrink-0">+</span>No fees for standard online bank-transfer payments</li>
            </ul>
          </div>
          <div className="card p-7">
            <h2 className="font-display font-bold text-xl mb-5 tracking-tight">What to watch</h2>
            <ul className="space-y-3 text-[1.0rem] leading-relaxed">
              <li className="flex gap-3"><span className="chip chip-mute shrink-0">-</span>Weak customer review scores across Trustpilot, BBB, and complaint boards, mostly 1 to 2 stars</li>
              <li className="flex gap-3"><span className="chip chip-mute shrink-0">-</span>Reports of missing or inaccurate billing statements in the months around transfers</li>
              <li className="flex gap-3"><span className="chip chip-mute shrink-0">-</span>Escrow complaints: double-charged insurance and analyses borrowers say were not corrected promptly</li>
              <li className="flex gap-3"><span className="chip chip-mute shrink-0">-</span>Long phone hold times and limited live support reported by customers</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <VisitBrandCard
          brand={brand}
          headline="Loan transferred to RoundPoint?"
          tagline="Register online, confirm your first due date, and audit the escrow numbers"
          ctaLabel="Set up your account"
        />
      </section>

      {/* OVERVIEW */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-14">
        <span className="chip chip-mute mb-4">Overview</span>
        <h2 className="font-display font-extrabold text-3xl tracking-tight mb-6 leading-tight">
          Why is RoundPoint collecting my mortgage payment?
        </h2>
        <div className="space-y-5 text-[1.0625rem] leading-relaxed text-ink-soft max-w-3xl">
          <p>
            RoundPoint Mortgage Servicing is a non-bank mortgage servicer founded in 2007 and headquartered in Fort Mill, South Carolina. In 2023 it was acquired by Two Harbors Investment Corp., a publicly traded real estate investment trust that owns a large portfolio of mortgage servicing rights. That ownership is exactly why your loan probably landed here: Two Harbors buys servicing rights at scale, and RoundPoint is the arm that collects payments, manages escrow, and answers the phone.
          </p>
          <p>
            First things first: a RoundPoint transfer letter is almost certainly legitimate, and the transfer changes nothing about your loan itself. Your rate, balance, term, and payoff math are untouched. What changes is operational, and that is where you should focus. RoundPoint&rsquo;s customer reviews are poor even by mortgage servicing standards, with ratings clustering between 1 and 2 stars across Trustpilot, BBB, and complaint boards. The recurring themes are statements that arrive late or not at all after a transfer, escrow analyses with wrong insurance or tax figures, double-charged insurance policies, and long waits to reach a human who can fix any of it.
          </p>
          <p>
            The practical read: treat your first 60 days with RoundPoint as a verification project. Register on the portal immediately instead of waiting for paper mail, screenshot your balances, confirm your first due date, and check every escrow line item against your real tax and insurance bills. Most borrowers settle into an uneventful routine; the ones who end up in six-month disputes are usually the ones who noticed a problem late. And remember that you always hold the exit card: refinancing with any lender moves your loan away from RoundPoint entirely.
          </p>
        </div>
      </section>

      {/* YOUR RIGHTS */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-14">
        <span className="chip chip-mute mb-4">Your Rights</span>
        <h2 className="font-display font-extrabold text-3xl tracking-tight mb-6 leading-tight">
          Your rights during the transfer
        </h2>
        <div className="card p-7 max-w-2xl">
          <ul className="space-y-3 text-[1.0rem] leading-relaxed">
            <li className="flex gap-3"><span className="font-mono text-violet">01</span>Advance notice: your old servicer must tell you about the transfer at least 15 days ahead</li>
            <li className="flex gap-3"><span className="font-mono text-violet">02</span>60-day protection: on-time payments sent to the old servicer cannot be treated as late</li>
            <li className="flex gap-3"><span className="font-mono text-violet">03</span>No late fees on misdirected payments during that 60-day window</li>
            <li className="flex gap-3"><span className="font-mono text-violet">04</span>Loan terms are frozen: a transfer cannot change rate, balance, or term</li>
            <li className="flex gap-3"><span className="font-mono text-violet">05</span>Written error notices trigger a mandatory investigation, generally within 30 business days</li>
            <li className="flex gap-3"><span className="font-mono text-violet">06</span>CFPB complaints at consumerfinance.gov get logged and require a servicer response</li>
          </ul>
          <p className="text-sm text-mute mt-5 leading-relaxed">A missing statement does not pause your obligation to pay. If mail is lagging, get the amount due from the portal or by phone and keep proof of payment.</p>
        </div>
      </section>

      {/* FIRST 60 DAYS */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-14">
        <span className="chip chip-mute mb-4">Checklist</span>
        <h2 className="font-display font-extrabold text-3xl tracking-tight mb-6 leading-tight">
          Your first 60 days with RoundPoint
        </h2>
        <div className="space-y-4 text-[1.0625rem] leading-relaxed text-ink-soft max-w-3xl">
          <p>
            Create your account at roundpointmortgage.com using the loan number from the welcome letter, then verify the fundamentals against your old servicer&rsquo;s final statement: principal balance, rate, next due date, and escrow balance. Set up autopay fresh and watch that the first draft actually posts. Given the statement-delivery complaints, opt into electronic statements and confirm your email address so you are not dependent on the mail.
          </p>
          <p>
            Then audit escrow. Match the insurance premium in RoundPoint&rsquo;s records to your actual declarations page and send your agent the new mortgagee clause so the renewal bills route correctly; that single step prevents both force-placed insurance and the double-payment scenario borrowers complain about. If anything is off, skip the phone-only route: send a written notice of error through the portal or by mail and keep dated copies. Paper trails get fixed; hold music does not.
          </p>
        </div>
      </section>

      {/* WHO FOR / WHO AVOID */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-14">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card p-7" style={{ borderTop: "3px solid var(--color-lime)" }}>
            <h2 className="font-display font-bold text-xl mb-4 tracking-tight">Good news if</h2>
            <ul className="space-y-2 text-[1.0rem] leading-relaxed text-ink-soft">
              <li>Your account is current with simple escrow: most transfers post cleanly</li>
              <li>You are comfortable self-serving through an online portal</li>
              <li>You keep records: RoundPoint responds to documented written disputes</li>
            </ul>
          </div>
          <div className="card p-7" style={{ borderTop: "3px solid var(--color-coral)" }}>
            <h2 className="font-display font-bold text-xl mb-4 tracking-tight">Stay alert if</h2>
            <ul className="space-y-2 text-[1.0rem] leading-relaxed text-ink-soft">
              <li>Your insurance or taxes changed recently: escrow errors cluster there</li>
              <li>You rely on paper statements: delivery gaps are a known issue</li>
              <li>You are mid-hardship or mid-modification during the transfer</li>
              <li>You need fast phone support: hold times run long</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SERVICER VS LENDER */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-14">
        <span className="chip chip-mute mb-4">Context</span>
        <h2 className="font-display font-extrabold text-3xl tracking-tight mb-6 leading-tight">
          What RoundPoint can and cannot do
        </h2>
        <div className="card-flush overflow-hidden">
          <div className="grid grid-cols-3 px-6 py-3 text-xs font-mono uppercase tracking-wider text-mute border-b border-line bg-bg-soft/50">
            <div>Task</div>
            <div className="text-center">RoundPoint handles it</div>
            <div className="text-center">Who does</div>
          </div>
          {[
            { task: "Collect payments and manage escrow", a: "Yes", b: "RoundPoint" },
            { task: "Hardship plans and loss mitigation", a: "Yes", b: "RoundPoint" },
            { task: "PMI removal when eligible", a: "Yes", b: "RoundPoint, per loan rules" },
            { task: "Lower your interest rate", a: "No", b: "Refinance with a lender" },
            { task: "Originate new loans", a: "No", b: "A mortgage lender" },
            { task: "Own your loan", a: "Usually no", b: "Investor / agency" },
          ].map((r, i, arr) => (
            <div key={r.task} className={`grid grid-cols-3 px-6 py-4 items-center text-sm ${i < arr.length - 1 ? "border-b border-line-soft" : ""}`}>
              <div className="font-medium">{r.task}</div>
              <div className="text-center font-mono">{r.a}</div>
              <div className="text-center text-mute">{r.b}</div>
            </div>
          ))}
        </div>
        <p className="text-xs text-mute mt-3 font-mono">Unhappy with servicing? The only permanent exit is refinancing to a new loan, which will be assigned its own servicer.</p>
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
          headline="Manage your loan at roundpointmortgage.com"
          tagline="Register your account · Go paperless · Verify escrow line items"
          ctaLabel="Go to RoundPoint"
        />
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/mortgages" className="pill pill-ghost">
            Thinking about refinancing? Compare lenders <span aria-hidden>→</span>
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
