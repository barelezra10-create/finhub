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
  title: "Valon Mortgage Review (2026): Is Valon a Legit Servicer?",
  description:
    "Valon is a legitimate, licensed mortgage servicer. If your loan was transferred to Valon, here is what changes, your rights under RESPA, and what to watch.",
  alternates: { canonical: "/reviews/valon" },
};

const brand: Brand = {
  slug: "valon",
  name: "Valon Mortgage",
  domain: "valon.com",
  color: "#1B1F3B",
  category: "mortgage",
};

const faqs: FAQItem[] = [
  {
    question: "Why is Valon collecting my mortgage payment?",
    answer:
      "Your loan's servicing rights were sold or transferred to Valon. This is routine in the mortgage industry and does not change your rate, your balance, or your loan terms. The company that owns your loan simply hired Valon to collect payments, manage escrow, and handle customer service.",
  },
  {
    question: "Is Valon Mortgage legit?",
    answer:
      "Yes. Valon Mortgage, Inc. is a licensed mortgage servicer registered with the NMLS (ID 1907140) and regulated by state banking authorities, including the New York State Department of Financial Services. It is a venture-backed company founded in 2019 that services hundreds of thousands of loans nationwide.",
  },
  {
    question: "Do my loan terms change when my mortgage moves to Valon?",
    answer:
      "No. A servicing transfer cannot change your interest rate, remaining balance, loan term, or monthly principal and interest. Only the company you pay and the customer service you deal with change. If your payment amount changes after a transfer, it is usually an escrow recalculation, and you can request an escrow analysis to verify it.",
  },
  {
    question: "What if I already sent a payment to my old servicer?",
    answer:
      "Federal law protects you. For 60 days after a servicing transfer, a payment sent to your old servicer on time cannot be treated as late, and no late fee can be charged. The old servicer is required to forward the payment. Keep confirmation records for anything paid during the transfer window.",
  },
  {
    question: "How do I set up payments with Valon?",
    answer:
      "Create an account at valon.com using your new loan number from the welcome letter. From the dashboard you can set up autopay, make one-time payments, view escrow details, and download statements. Verify that your first autopay draft actually processes, and confirm your homeowners insurance and tax details carried over correctly.",
  },
];

export default function Page() {
  return (
    <article className="bg-bg">
      <FinancialProductSchema
        name="Valon Mortgage Review"
        description="Valon is a technology-first mortgage servicer founded in 2019. This review covers what happens when your loan transfers to Valon, your rights, and known complaint patterns."
        slug="/reviews/valon"
        brandName="Valon Mortgage"
        category="Mortgage Servicing"
        ratingValue={7.4}
        reviewCount={1}
      />
      <FAQPageSchema items={faqs} />
      <BreadcrumbListSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Mortgages", href: "/mortgages" },
          { name: "Reviews", href: "/reviews" },
          { name: "Valon Mortgage", href: "/reviews/valon" },
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
                Valon Mortgage Review
              </h1>
              <div className="text-sm text-mute font-mono uppercase tracking-wider mt-3">
                Updated August 2026 · By the Fintiex Rate Desk
              </div>
            </div>
          </div>

          <div className="card-flush p-6 grid grid-cols-2 md:grid-cols-4 gap-6">
            <Stat label="Company type" value="Servicer" />
            <Stat label="Founded" value="2019" />
            <Stat label="Loans serviced" value="590K+" />
            <Stat label="Fintiex score" value="7.4/10" />
          </div>
          <div className="mt-6">
            <VisitBrandCta brand={brand} variant="lime" label="Go to valon.com" />
          </div>
        </div>
      </section>

      {/* PROS + CONS */}
      <section className="max-w-(--max-w-page) mx-auto px-6 py-14">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card p-7">
            <h2 className="font-display font-bold text-xl mb-5 tracking-tight">What works</h2>
            <ul className="space-y-3 text-[1.0rem] leading-relaxed">
              <li className="flex gap-3"><span className="chip chip-lime shrink-0">+</span>Modern online dashboard and app: autopay, escrow detail, and statements are easy to find</li>
              <li className="flex gap-3"><span className="chip chip-lime shrink-0">+</span>Licensed and regulated servicer (NMLS 1907140), backed by major investors</li>
              <li className="flex gap-3"><span className="chip chip-lime shrink-0">+</span>Fast-growing platform: serviced roughly 593,000 loans in 2025, up from about 371,000 the year before</li>
              <li className="flex gap-3"><span className="chip chip-lime shrink-0">+</span>No fee to pay online by bank transfer, and clear payment history in the portal</li>
              <li className="flex gap-3"><span className="chip chip-lime shrink-0">+</span>Large partners trust the platform: Rithm Capital expanded its Valon partnership in 2026 for Newrez servicing</li>
            </ul>
          </div>
          <div className="card p-7">
            <h2 className="font-display font-bold text-xl mb-5 tracking-tight">What to watch</h2>
            <ul className="space-y-3 text-[1.0rem] leading-relaxed">
              <li className="flex gap-3"><span className="chip chip-mute shrink-0">-</span>Recurring complaints about escrow errors after transfers, including PMI charged past its removal date</li>
              <li className="flex gap-3"><span className="chip chip-mute shrink-0">-</span>Insurance record mix-ups reported, including force-placed policies while proof of coverage was pending</li>
              <li className="flex gap-3"><span className="chip chip-mute shrink-0">-</span>Slow written support in some cases: customers report email replies taking 10 days or more</li>
              <li className="flex gap-3"><span className="chip chip-mute shrink-0">-</span>Rapid growth means onboarding waves, and transfer months are when most problems happen</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <VisitBrandCard
          brand={brand}
          headline="Loan transferred to Valon?"
          tagline="Register your account, verify escrow, and set up autopay in one sitting"
          ctaLabel="Set up your account"
        />
      </section>

      {/* OVERVIEW */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-14">
        <span className="chip chip-mute mb-4">Overview</span>
        <h2 className="font-display font-extrabold text-3xl tracking-tight mb-6 leading-tight">
          Why is Valon collecting my mortgage payment?
        </h2>
        <div className="space-y-5 text-[1.0625rem] leading-relaxed text-ink-soft max-w-3xl">
          <p>
            If you searched for Valon, chances are you got a letter saying your mortgage was transferred to them and you are wondering if it is real. It is. Valon Mortgage is a licensed mortgage servicer founded in 2019 and headquartered in New York. Servicing transfers are normal: the investor who owns your loan can hire or switch the company that collects payments at any time. Your rate, balance, and loan terms do not change. Only the company you pay changes.
          </p>
          <p>
            Valon is not a traditional servicer. It is a technology company backed by investors including Andreessen Horowitz and WestCap, and it built its own servicing software instead of licensing the decades-old systems most servicers run on. In practice that means the borrower experience is closer to a modern banking app: a clean dashboard, self-serve autopay, escrow breakdowns, and document downloads without calling anyone. The company has grown fast, servicing roughly 593,000 loans in 2025, and in 2026 Rithm Capital deepened a partnership to run parts of Newrez servicing on Valon&rsquo;s platform.
          </p>
          <p>
            The catch is the same one every fast-growing servicer has: transfers are messy. Complaint patterns on BBB and ConsumerAffairs cluster around the weeks right after a loan moves, with escrow miscalculations, PMI that should have dropped off, insurance records that did not carry over, and slow written responses. Most accounts settle into a smooth routine after the first cycle or two, but you should actively verify your details in the first 60 days rather than assume the handoff was clean.
          </p>
        </div>
      </section>

      {/* YOUR RIGHTS */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-14">
        <span className="chip chip-mute mb-4">Your Rights</span>
        <h2 className="font-display font-extrabold text-3xl tracking-tight mb-6 leading-tight">
          What federal law guarantees during a transfer
        </h2>
        <div className="card p-7 max-w-2xl">
          <ul className="space-y-3 text-[1.0rem] leading-relaxed">
            <li className="flex gap-3"><span className="font-mono text-violet">01</span>Your old servicer must notify you at least 15 days before the transfer date</li>
            <li className="flex gap-3"><span className="font-mono text-violet">02</span>Valon must send its own welcome notice with the new loan number and payment address</li>
            <li className="flex gap-3"><span className="font-mono text-violet">03</span>For 60 days after transfer, an on-time payment sent to the old servicer cannot be treated as late</li>
            <li className="flex gap-3"><span className="font-mono text-violet">04</span>No late fees can be charged on those misdirected payments during the 60-day window</li>
            <li className="flex gap-3"><span className="font-mono text-violet">05</span>Your rate, balance, term, and loan type cannot change because of a servicing transfer</li>
            <li className="flex gap-3"><span className="font-mono text-violet">06</span>You can send a written &ldquo;notice of error&rdquo; and the servicer must investigate, generally within 30 business days</li>
          </ul>
          <p className="text-sm text-mute mt-5 leading-relaxed">These protections come from RESPA, the federal Real Estate Settlement Procedures Act. If a dispute stalls, you can file a complaint with the CFPB at consumerfinance.gov, which servicers are required to answer.</p>
        </div>
      </section>

      {/* FIRST 60 DAYS CHECKLIST */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-14">
        <span className="chip chip-mute mb-4">Checklist</span>
        <h2 className="font-display font-extrabold text-3xl tracking-tight mb-6 leading-tight">
          Your first 60 days with Valon
        </h2>
        <div className="space-y-4 text-[1.0625rem] leading-relaxed text-ink-soft max-w-3xl">
          <p>
            Register at valon.com with the loan number from your welcome letter, then do a five-minute audit. Check that your principal balance, rate, and next due date match your last statement from the old servicer. Open the escrow section and confirm your property tax parcel and homeowners insurance policy are both listed correctly. If you pay PMI, note the scheduled removal date.
          </p>
          <p>
            If you use autopay, set it up fresh in Valon&rsquo;s portal and confirm the first draft actually clears; autopay agreements do not always survive a transfer. Send your insurance agent Valon&rsquo;s mortgagee clause information so renewal notices go to the right place, which is the single best way to avoid a force-placed insurance surprise. Keep screenshots of your old servicer&rsquo;s final statement until two clean cycles have posted.
          </p>
        </div>
      </section>

      {/* WHO FOR / WHO AVOID */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-14">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card p-7" style={{ borderTop: "3px solid var(--color-lime)" }}>
            <h2 className="font-display font-bold text-xl mb-4 tracking-tight">Good news if</h2>
            <ul className="space-y-2 text-[1.0rem] leading-relaxed text-ink-soft">
              <li>You prefer managing your loan online instead of by phone or mail</li>
              <li>Your escrow and insurance are simple and current</li>
              <li>You were coming from an older servicer with a clunky portal</li>
              <li>You want fast self-serve access to statements and payoff quotes</li>
            </ul>
          </div>
          <div className="card p-7" style={{ borderTop: "3px solid var(--color-coral)" }}>
            <h2 className="font-display font-bold text-xl mb-4 tracking-tight">Stay alert if</h2>
            <ul className="space-y-2 text-[1.0rem] leading-relaxed text-ink-soft">
              <li>You are mid-dispute, mid-modification, or in forbearance during the transfer</li>
              <li>Your PMI removal date is coming up soon</li>
              <li>Your insurance recently changed carriers and records may lag</li>
              <li>You rely on phone or email support: written responses can be slow</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SERVICER VS LENDER */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-14">
        <span className="chip chip-mute mb-4">Context</span>
        <h2 className="font-display font-extrabold text-3xl tracking-tight mb-6 leading-tight">
          Servicer vs. lender: what Valon can and cannot do
        </h2>
        <div className="card-flush overflow-hidden">
          <div className="grid grid-cols-3 px-6 py-3 text-xs font-mono uppercase tracking-wider text-mute border-b border-line bg-bg-soft/50">
            <div>Task</div>
            <div className="text-center">Valon handles it</div>
            <div className="text-center">Who does</div>
          </div>
          {[
            { task: "Collect monthly payments", a: "Yes", b: "Valon" },
            { task: "Manage escrow, taxes, insurance", a: "Yes", b: "Valon" },
            { task: "Handle hardship and loss mitigation", a: "Yes", b: "Valon" },
            { task: "Change your interest rate", a: "No", b: "Refinance with a lender" },
            { task: "Approve a new loan", a: "No", b: "A mortgage lender" },
            { task: "Own your loan", a: "Usually no", b: "Investor (Fannie, Freddie, etc.)" },
          ].map((r, i, arr) => (
            <div key={r.task} className={`grid grid-cols-3 px-6 py-4 items-center text-sm ${i < arr.length - 1 ? "border-b border-line-soft" : ""}`}>
              <div className="font-medium">{r.task}</div>
              <div className="text-center font-mono">{r.a}</div>
              <div className="text-center text-mute">{r.b}</div>
            </div>
          ))}
        </div>
        <p className="text-xs text-mute mt-3 font-mono">If you want a lower rate, that is a refinance conversation with a lender, not with your servicer.</p>
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
          headline="Manage your loan at valon.com"
          tagline="Register with your new loan number · Verify escrow · Set up autopay"
          ctaLabel="Go to Valon"
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
