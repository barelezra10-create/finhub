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
  title: "Bear Loan Review (2026): Is It Legit and What It Really Costs",
  description:
    "Bear Loan is a loan matching site, not a lender. It is legally operating but can connect you to loans with triple-digit APRs. Here is how it works and cheaper options.",
  alternates: { canonical: "/reviews/bear-loan" },
};

const brand: Brand = {
  slug: "bear-loan",
  name: "Bear Loan",
  domain: "bearloan.org",
  color: "#8B5E3C",
  category: "loan",
};

const faqs: FAQItem[] = [
  {
    question: "Is Bear Loan legit or a scam?",
    answer:
      "Bear Loan is not a scam in the sense of stealing your money outright. It is a loan matching site: it collects your application and passes it to a network of lenders, some of which may charge triple-digit APRs. The legal risk is low, but the cost risk is very high, and your personal data gets shared with multiple companies. Treat it as a last resort, not a first stop.",
  },
  {
    question: "Is Bear Loan a direct lender?",
    answer:
      "No. Based on how the site describes itself, Bear Loan does not lend money or make credit decisions. It forwards your information to third-party lenders who then make you an offer. The rate, fees, and terms come from whichever lender picks up your application, which is why Bear Loan cannot tell you your APR before you apply.",
  },
  {
    question: "What APR will I actually get through Bear Loan?",
    answer:
      "You will not know until a matched lender makes an offer, and that is the core problem. Marketing materials reference APRs as low as 5.99 to 35.99 percent, but reviewers and user complaints report short-term offers reaching several hundred percent APR, in some reports over 700 percent. As of mid-2026 rates vary by lender, loan type, and state. Read the actual loan agreement before you sign anything.",
  },
  {
    question: "Why do so many sites say Bear Loan is legit?",
    answer:
      "Search for the brand and you will find several near-identical sites answering the legitimacy question with a confident yes. Many of these appear to be affiliated with the brand or with lead-generation partners rather than independent reviewers. That does not prove wrongdoing, but you should weight independent sources, state regulator databases, and real user complaints more heavily than pages that profit when you apply.",
  },
  {
    question: "What happens to my information after I apply?",
    answer:
      "Loan matching sites typically share your application data, including contact details and sometimes bank information, with a network of lenders and marketing partners. Users of similar services commonly report a wave of calls, texts, and emails after applying. Read the privacy policy before submitting, and never share bank login credentials with any matching site.",
  },
];

export default function Page() {
  return (
    <article className="bg-bg">
      <FinancialProductSchema
        name="Bear Loan Review"
        description="Bear Loan is a loan matching site that connects borrowers to a network of lenders, including high-APR short-term lenders. This review covers how it works, real costs, and cheaper alternatives."
        slug="/reviews/bear-loan"
        brandName="Bear Loan"
        category="Personal Loans"
        ratingValue={3.2}
        reviewCount={1}
      />
      <FAQPageSchema items={faqs} />
      <BreadcrumbListSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Loans", href: "/loans" },
          { name: "Reviews", href: "/reviews" },
          { name: "Bear Loan", href: "/reviews/bear-loan" },
        ]}
      />
      {/* HERO */}
      <section className="border-b border-line">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-16">
          <div className="flex items-start gap-5 mb-8">
            <BrandLogo brand={brand} size={72} rounded="lg" />
            <div>
              <span className="chip chip-violet mb-3">Loan Matching Site Review</span>
              <h1 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight leading-tight">
                Bear Loan Review
              </h1>
              <div className="text-sm text-mute font-mono uppercase tracking-wider mt-3">
                Updated August 2026 · By the Fintiex Rate Desk
              </div>
            </div>
          </div>

          <div className="card-flush p-6 grid grid-cols-2 md:grid-cols-4 gap-6">
            <Stat label="Company type" value="Matcher" />
            <Stat label="Advertised amounts" value="$200 to $5K" />
            <Stat label="Reported APRs" value="To 700%+" />
            <Stat label="Fintiex score" value="3.2/10" />
          </div>
          <div className="mt-6">
            <VisitBrandCta brand={brand} variant="lime" label="See their disclosures" />
          </div>
        </div>
      </section>

      {/* PROS + CONS */}
      <section className="max-w-(--max-w-page) mx-auto px-6 py-14">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card p-7">
            <h2 className="font-display font-bold text-xl mb-5 tracking-tight">What works</h2>
            <ul className="space-y-3 text-[1.0rem] leading-relaxed">
              <li className="flex gap-3"><span className="chip chip-lime shrink-0">+</span>Fast application that reaches many lenders at once, including some that accept bad credit</li>
              <li className="flex gap-3"><span className="chip chip-lime shrink-0">+</span>Applying to the matching service itself is free; the lenders charge the fees</li>
              <li className="flex gap-3"><span className="chip chip-lime shrink-0">+</span>Can produce an offer when banks and credit unions have said no</li>
              <li className="flex gap-3"><span className="chip chip-lime shrink-0">+</span>Funding, when approved, is often next business day</li>
            </ul>
          </div>
          <div className="card p-7">
            <h2 className="font-display font-bold text-xl mb-5 tracking-tight">What to watch</h2>
            <ul className="space-y-3 text-[1.0rem] leading-relaxed">
              <li className="flex gap-3"><span className="chip chip-mute shrink-0">-</span>Not a lender: you cannot know your APR, fees, or even who the lender is until after you hand over your data</li>
              <li className="flex gap-3"><span className="chip chip-mute shrink-0">-</span>Matched offers can carry triple-digit APRs; user reports mention rates into the hundreds of percent</li>
              <li className="flex gap-3"><span className="chip chip-mute shrink-0">-</span>Users of similar networks report heavy marketing calls, texts, and emails after applying</li>
              <li className="flex gap-3"><span className="chip chip-mute shrink-0">-</span>Some matched lenders may operate under tribal sovereignty, which can limit your state law protections</li>
              <li className="flex gap-3"><span className="chip chip-mute shrink-0">-</span>Many of the sites vouching for the brand online appear to be affiliated with it, not independent</li>
            </ul>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-14">
        <span className="chip chip-mute mb-4">Overview</span>
        <h2 className="font-display font-extrabold text-3xl tracking-tight mb-6 leading-tight">
          Is Bear Loan legit?
        </h2>
        <div className="space-y-5 text-[1.0625rem] leading-relaxed text-ink-soft max-w-3xl">
          <p>
            Short answer: Bear Loan is legally operating, but it is not what most people expect, and it can be extremely expensive. Bear Loan is not a bank and not a direct lender. It is a loan matching site, sometimes called a lead generator. You fill out one application, and the site sells or forwards it to a network of lenders. If one of them wants your business, you get an offer. The offer, the APR, and the contract all come from that lender, not from Bear Loan.
          </p>
          <p>
            That structure explains the two biggest complaint patterns reported by users of this and similar services: rates that turn out far higher than the advertised range, and a flood of marketing contact after applying. Marketing pages cite APRs of roughly 6 to 36 percent, but small-dollar and short-term offers reached through networks like this commonly run in the triple digits, with some reports over 700 percent APR as of mid-2026. Rates vary by lender, loan type, and state, and some matched lenders may be tribal entities that claim exemption from state rate caps.
          </p>
          <p>
            One more thing worth knowing. If you searched &ldquo;is Bear Loan legit,&rdquo; you likely found several lookalike sites answering yes in almost identical words. Several of those appear affiliated with the brand or its marketing partners. That is a common pattern in this corner of lending, and it is a reason to lean on independent sources. Our verdict: not a scam, but a high-cost channel that shares your data widely. Exhaust the cheaper options below before applying.
          </p>
        </div>
      </section>

      {/* REAL COST */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-14">
        <span className="chip chip-mute mb-4">The Math</span>
        <h2 className="font-display font-extrabold text-3xl tracking-tight mb-6 leading-tight">
          What a $500 loan can really cost
        </h2>
        <div className="card-flush overflow-hidden">
          <div className="grid grid-cols-3 px-6 py-3 text-xs font-mono uppercase tracking-wider text-mute border-b border-line bg-bg-soft/50">
            <div>Scenario</div>
            <div className="text-right">Approx. total repaid</div>
            <div className="text-right">Cost of the $500</div>
          </div>
          {[
            { s: "Credit union PAL, 28% APR, 6 months", t: "~$540", c: "~$40" },
            { s: "Matched loan at 200% APR, 6 months", t: "~$800", c: "~$300" },
            { s: "Matched loan at 400% APR, 6 months", t: "~$1,100", c: "~$600" },
            { s: "Matched loan at 700% APR, 6 months", t: "~$1,550", c: "~$1,050" },
          ].map((r, i, arr) => (
            <div key={r.s} className={`grid grid-cols-3 px-6 py-4 items-center text-sm ${i < arr.length - 1 ? "border-b border-line-soft" : ""}`}>
              <div className="font-medium">{r.s}</div>
              <div className="text-right font-mono tabular font-semibold">{r.t}</div>
              <div className="text-right text-mute">{r.c}</div>
            </div>
          ))}
        </div>
        <p className="text-xs text-mute mt-3 font-mono">Illustrative estimates for a $500 installment loan with equal payments. Actual contracts vary by lender, state, and payment schedule. The point stands at any exact number: the APR tier decides everything.</p>
      </section>

      {/* CHEAPER OPTIONS */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-14">
        <span className="chip chip-mute mb-4">Do This First</span>
        <h2 className="font-display font-extrabold text-3xl tracking-tight mb-6 leading-tight">
          Cheaper options to try before any matched loan
        </h2>
        <div className="card p-7 max-w-2xl">
          <ul className="space-y-3 text-[1.0rem] leading-relaxed">
            <li className="flex gap-3"><span className="font-mono text-violet">01</span>Credit union payday alternative loans (PALs): $200 to $2,000 with APR capped at 28% by federal rule</li>
            <li className="flex gap-3"><span className="font-mono text-violet">02</span>Your own bank: several large banks offer small-dollar loans to existing customers at a fraction of these rates</li>
            <li className="flex gap-3"><span className="font-mono text-violet">03</span>A payment plan with whoever you owe: utilities, landlords, hospitals, and mechanics often say yes if asked</li>
            <li className="flex gap-3"><span className="font-mono text-violet">04</span>An employer paycheck advance or earned wage access benefit, often free or a few dollars</li>
            <li className="flex gap-3"><span className="font-mono text-violet">05</span>Local assistance: dial 211 or visit 211.org for emergency help with rent, utilities, and food</li>
            <li className="flex gap-3"><span className="font-mono text-violet">06</span>A secured card or credit-builder loan if the real goal is rebuilding access to credit</li>
          </ul>
          <p className="text-sm text-mute mt-5 leading-relaxed">Any one of these will usually cost less than the cheapest offer a matching network produces for a subprime borrower.</p>
        </div>
      </section>

      {/* WHO FOR / WHO AVOID */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-14">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card p-7" style={{ borderTop: "3px solid var(--color-lime)" }}>
            <h2 className="font-display font-bold text-xl mb-4 tracking-tight">Only consider it if</h2>
            <ul className="space-y-2 text-[1.0rem] leading-relaxed text-ink-soft">
              <li>You have already been declined by a credit union, your bank, and every option above</li>
              <li>The expense is a true emergency, not a want</li>
              <li>You will read the full loan agreement and the APR before signing</li>
              <li>You can repay fast; every extra month at these rates is expensive</li>
            </ul>
          </div>
          <div className="card p-7" style={{ borderTop: "3px solid var(--color-coral)" }}>
            <h2 className="font-display font-bold text-xl mb-4 tracking-tight">Walk away if</h2>
            <ul className="space-y-2 text-[1.0rem] leading-relaxed text-ink-soft">
              <li>Anyone asks for a fee before you receive loan money; advance-fee demands are a genuine scam sign</li>
              <li>The offer does not clearly state an APR and a total of payments</li>
              <li>You would be borrowing to cover ordinary monthly bills; a loan makes that hole deeper</li>
              <li>The lender contacts you from a generic email or pressures you to act within hours</li>
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
          headline="Still considering Bear Loan?"
          tagline="Read the rates page and privacy policy first · Get the APR in writing · Compare it to a credit union PAL"
          ctaLabel="Read their disclosures"
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
