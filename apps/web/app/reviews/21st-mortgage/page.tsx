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
  title: "21st Mortgage Review (2026): Manufactured Home Loans",
  description:
    "21st Mortgage is the largest manufactured and mobile home lender in the US, with no minimum credit score but rates well above site-built mortgages. Full 2026 review.",
  alternates: { canonical: "/reviews/21st-mortgage" },
};

const brand: Brand = {
  slug: "21st-mortgage",
  name: "21st Mortgage",
  domain: "21stmortgage.com",
  color: "#004B8D",
  category: "mortgage",
};

const faqs: FAQItem[] = [
  {
    question: "What credit score do I need for 21st Mortgage?",
    answer:
      "21st Mortgage has no stated minimum credit score. Instead, weaker credit means a bigger down payment: borrowers with scores under roughly 575 may need to put down 35% or more, while stronger profiles can qualify with 5% down or, in some programs, 0% down. Your rate also moves sharply with your score.",
  },
  {
    question: "Why are 21st Mortgage rates so much higher than normal mortgage rates?",
    answer:
      "Most 21st loans are chattel loans: the home alone is collateral, without land. Chattel loans are personal-property financing, which carries more risk for the lender and no government backing, so rates have typically run in the roughly 7 to 14 percent range versus mid 6 percent for a standard 30-year mortgage as of mid-2026. If you own or are buying the land too, ask about land-home financing, and compare FHA and conventional manufactured-home programs before accepting a chattel rate.",
  },
  {
    question: "Is 21st Mortgage owned by Warren Buffett?",
    answer:
      "Effectively, yes. 21st Mortgage is a subsidiary of Clayton Homes, which is owned by Berkshire Hathaway. Clayton is also the largest builder of manufactured homes, so the same corporate family often builds the home, sells it through a dealer, and finances it. That vertical integration is why you should always collect at least one outside quote.",
  },
  {
    question: "Does 21st Mortgage finance older mobile homes or homes in parks?",
    answer:
      "Yes, and that is a genuine niche. 21st finances new and used manufactured homes, including older single-wides and homes sitting on rented lots in communities, which most banks and mortgage lenders refuse to touch. If your home does not qualify for traditional financing, 21st is often one of the only national options.",
  },
  {
    question: "Can I refinance a 21st Mortgage loan later?",
    answer:
      "Often, yes. If your home is titled as real property on land you own, you may be able to refinance into an FHA or conventional mortgage at a much lower rate once your credit improves. If the home is on a rented lot, options are thinner, but credit improvement still opens better chattel pricing. Treat a high-rate chattel loan as a starting point, not a life sentence.",
  },
];

export default function Page() {
  return (
    <article className="bg-bg">
      <FinancialProductSchema
        name="21st Mortgage Review"
        description="21st Mortgage is the largest manufactured and mobile home lender in the US, financing homes other lenders decline, with no minimum credit score but high rates. Full 2026 review."
        slug="/reviews/21st-mortgage"
        brandName="21st Mortgage"
        category="Manufactured Home Loans"
        ratingValue={7.2}
        reviewCount={1}
      />
      <FAQPageSchema items={faqs} />
      <BreadcrumbListSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Mortgages", href: "/mortgages" },
          { name: "Reviews", href: "/reviews" },
          { name: "21st Mortgage", href: "/reviews/21st-mortgage" },
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
                21st Mortgage Review
              </h1>
              <div className="text-sm text-mute font-mono uppercase tracking-wider mt-3">
                Updated August 2026 · By the Fintiex Rate Desk
              </div>
            </div>
          </div>

          <div className="card-flush p-6 grid grid-cols-2 md:grid-cols-4 gap-6">
            <Stat label="Specialty" value="Manufactured" />
            <Stat label="Min credit score" value="None" />
            <Stat label="Down payment" value="0 to 35%" />
            <Stat label="Fintiex score" value="7.2/10" />
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
              <li className="flex gap-3"><span className="chip chip-lime shrink-0">+</span>Largest manufactured home lender in the country, in business since 1995</li>
              <li className="flex gap-3"><span className="chip chip-lime shrink-0">+</span>Finances homes almost nobody else will: used units, older single-wides, homes on rented lots</li>
              <li className="flex gap-3"><span className="chip chip-lime shrink-0">+</span>No minimum credit score; approval is structured through down payment instead</li>
              <li className="flex gap-3"><span className="chip chip-lime shrink-0">+</span>Berkshire Hathaway family balance sheet: services roughly $16 billion in loans for 240,000+ borrowers</li>
              <li className="flex gap-3"><span className="chip chip-lime shrink-0">+</span>Home-only (chattel) and land-home options, available in nearly every state</li>
            </ul>
          </div>
          <div className="card p-7">
            <h2 className="font-display font-bold text-xl mb-5 tracking-tight">What to watch</h2>
            <ul className="space-y-3 text-[1.0rem] leading-relaxed">
              <li className="flex gap-3"><span className="chip chip-mute shrink-0">-</span>Rates have typically run about 7 to 14%, far above standard mortgage rates</li>
              <li className="flex gap-3"><span className="chip chip-mute shrink-0">-</span>Owned by Clayton Homes: dealers may steer you here without showing cheaper options</li>
              <li className="flex gap-3"><span className="chip chip-mute shrink-0">-</span>Investigative reporting has accused the Clayton lending family of predatory practices toward low-income buyers</li>
              <li className="flex gap-3"><span className="chip chip-mute shrink-0">-</span>Chattel loans build little equity early and can leave you owing more than the home is worth</li>
              <li className="flex gap-3"><span className="chip chip-mute shrink-0">-</span>Weak credit can require very large down payments, up to 35%</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <VisitBrandCard brand={brand} tagline="Manufactured and mobile home specialist · New, used, and in-park homes" ctaLabel="Check your options" />
      </section>

      {/* OVERVIEW */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-14">
        <span className="chip chip-mute mb-4">Overview</span>
        <h2 className="font-display font-extrabold text-3xl tracking-tight mb-6 leading-tight">
          What is 21st Mortgage?
        </h2>
        <div className="space-y-5 text-[1.0625rem] leading-relaxed text-ink-soft max-w-3xl">
          <p>
            21st Mortgage Corporation, based in Knoxville, Tennessee, is the biggest lender in a market most mortgage companies ignore: manufactured and mobile homes. It has operated since 1995, originates on the order of a billion dollars in loans a year, and services roughly $16 billion for more than 240,000 borrowers. It is a subsidiary of Clayton Homes, the largest manufactured home builder in the country, which itself is owned by Warren Buffett&rsquo;s Berkshire Hathaway.
          </p>
          <p>
            The reason 21st exists is that a mobile home on a rented lot is not real estate in the eyes of most lenders. Around three quarters of 21st&rsquo;s loans are chattel loans, meaning the home alone is the collateral, like an auto loan. Chattel lending is riskier and has no Fannie, Freddie, or FHA backing on standard terms, so it is priced accordingly: 21st&rsquo;s own materials have put typical rates around 7 to 14%, against a national 30-year fixed average in the mid to high 6% range as of mid-2026. That is not a scam premium; it is what this market costs. But it is also why you should exhaust cheaper paths first: if you own land, or can title the home as real property, FHA Title II, conventional MH programs, and land-home loans can be dramatically cheaper.
          </p>
          <p>
            Two honest warnings. First, the conflict of interest is structural: Clayton builds the homes, Clayton-affiliated dealers sell them, and 21st and its sister company Vanderbilt finance them, so a dealer&rsquo;s financing suggestion is not neutral advice. Second, investigations by The Seattle Times and the Center for Public Integrity in 2015 accused the Clayton lending operation of steering minority and low-income buyers into costly loans, allegations the company disputed. None of that erases 21st&rsquo;s genuine value: for used homes, older single-wides, and in-park homes, it is frequently the only national lender that says yes. Go in with an outside quote, read the rate and total-of-payments numbers, and treat the loan as refinance-bait for later.
          </p>
        </div>
      </section>

      {/* RATES AND PRODUCTS */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-14">
        <span className="chip chip-mute mb-4">Rates and Products</span>
        <h2 className="font-display font-extrabold text-3xl tracking-tight mb-6 leading-tight">
          Loan options and how pricing works
        </h2>
        <div className="card-flush overflow-hidden">
          <div className="grid grid-cols-3 px-6 py-3 text-xs font-mono uppercase tracking-wider text-mute border-b border-line bg-bg-soft/50">
            <div>Product</div>
            <div className="text-right">Typical down</div>
            <div className="text-right">Notes</div>
          </div>
          {[
            { product: "Home-only (chattel), new home", down: "5 to 10%", note: "Most common loan type" },
            { product: "Home-only, used home", down: "5 to 20%", note: "Older units accepted" },
            { product: "Land-home combo", down: "5 to 20%", note: "Land as added collateral" },
            { product: "In-park / community home", down: "5 to 20%", note: "Lot rent continues separately" },
            { product: "Low credit (under ~575)", down: "Up to 35%", note: "No minimum score" },
            { product: "Zero-down programs", down: "0%", note: "Qualifying buyers, often with land or co-signer" },
          ].map((r, i, arr) => (
            <div key={r.product} className={`grid grid-cols-3 px-6 py-4 items-center text-sm ${i < arr.length - 1 ? "border-b border-line-soft" : ""}`}>
              <div className="font-medium">{r.product}</div>
              <div className="text-right font-mono tabular font-semibold">{r.down}</div>
              <div className="text-right text-mute">{r.note}</div>
            </div>
          ))}
        </div>
        <p className="text-xs text-mute mt-3 font-mono">Rates have typically ranged from about 7 to 14% depending on credit, home age, and loan-to-value. Confirm current pricing with 21st directly; these are not standard mortgage rates.</p>
      </section>

      {/* ELIGIBILITY */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-14">
        <span className="chip chip-mute mb-4">Eligibility</span>
        <h2 className="font-display font-extrabold text-3xl tracking-tight mb-6 leading-tight">
          Who can qualify
        </h2>
        <div className="card p-7 max-w-2xl">
          <ul className="space-y-3 text-[1.0rem] leading-relaxed">
            <li className="flex gap-3"><span className="font-mono text-violet">01</span>No minimum credit score; weaker credit is offset by larger down payments</li>
            <li className="flex gap-3"><span className="font-mono text-violet">02</span>New and used manufactured homes, including homes already in place</li>
            <li className="flex gap-3"><span className="font-mono text-violet">03</span>Homes on owned land, family land, or rented lots in communities</li>
            <li className="flex gap-3"><span className="font-mono text-violet">04</span>Buyers, refinances of existing manufactured home loans, and some investor deals</li>
            <li className="flex gap-3"><span className="font-mono text-violet">05</span>Steady documented income; debt-to-income limits apply like any lender</li>
            <li className="flex gap-3"><span className="font-mono text-violet">06</span>Available in most states; a few have licensing exceptions, so confirm yours</li>
          </ul>
        </div>
      </section>

      {/* BEFORE YOU SIGN */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-14">
        <span className="chip chip-mute mb-4">Smart Shopping</span>
        <h2 className="font-display font-extrabold text-3xl tracking-tight mb-6 leading-tight">
          Before you sign with 21st
        </h2>
        <div className="space-y-4 text-[1.0625rem] leading-relaxed text-ink-soft max-w-3xl">
          <p>
            If your home can be titled as real property on land you own, price an FHA or conventional manufactured home mortgage first; the rate difference against a chattel loan can be several full percentage points, which on a 20-year loan is tens of thousands of dollars. Credit unions in manufactured-housing-heavy states are the other underused option. Come back to 21st if those say no, or if your home is in a park where they are not available.
          </p>
          <p>
            When you do take a 21st quote, look past the monthly payment. Compare the APR, the total of payments over the life of the loan, and whether there is any prepayment penalty, then ask how the rate would change with 5 or 10 points more down. Because the dealer selling you the home may be part of the same corporate family, treat their financing paperwork like any other quote to beat, not a default. And once the loan seasons and your credit improves, revisit refinancing; paying 12% one day longer than necessary is the real trap in this market.
          </p>
        </div>
      </section>

      {/* WHO FOR / WHO AVOID */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-14">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card p-7" style={{ borderTop: "3px solid var(--color-lime)" }}>
            <h2 className="font-display font-bold text-xl mb-4 tracking-tight">Best for</h2>
            <ul className="space-y-2 text-[1.0rem] leading-relaxed text-ink-soft">
              <li>Buyers of used or older mobile homes that banks refuse to finance</li>
              <li>Homes on rented lots in manufactured home communities</li>
              <li>Borrowers with damaged credit who can bring a real down payment</li>
              <li>Anyone who needs the largest, most experienced lender in this niche</li>
            </ul>
          </div>
          <div className="card p-7" style={{ borderTop: "3px solid var(--color-coral)" }}>
            <h2 className="font-display font-bold text-xl mb-4 tracking-tight">May not be the right fit if</h2>
            <ul className="space-y-2 text-[1.0rem] leading-relaxed text-ink-soft">
              <li>You own land and can qualify for FHA or conventional manufactured programs</li>
              <li>You are buying a site-built house: this is not that kind of lender</li>
              <li>A double-digit interest rate would break your budget; rent longer and build credit instead</li>
            </ul>
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-14">
        <span className="chip chip-mute mb-4">How it compares</span>
        <h2 className="font-display font-extrabold text-3xl tracking-tight mb-6 leading-tight">
          21st Mortgage vs. the alternatives
        </h2>
        <div className="card-flush overflow-hidden">
          <div className="grid grid-cols-4 px-6 py-3 text-xs font-mono uppercase tracking-wider text-mute border-b border-line bg-bg-soft/50">
            <div>Feature</div>
            <div className="text-center">21st (chattel)</div>
            <div className="text-center">FHA MH loan</div>
            <div className="text-center">Conventional MH</div>
          </div>
          {[
            { feature: "Home on rented lot", a: "Yes", b: "Rarely", c: "No" },
            { feature: "Used / older homes", a: "Yes", b: "Limited", c: "Limited" },
            { feature: "Min credit score", a: "None", b: "~580", c: "620+" },
            { feature: "Rate level", a: "High", b: "Near market", c: "Near market" },
            { feature: "Land required", a: "No", b: "Usually", c: "Yes" },
            { feature: "Builds equity early", a: "Slowly", b: "Better", c: "Better" },
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
          headline="Financing a manufactured home?"
          tagline="No minimum credit score · New, used, and in-park homes · Compare an outside quote first"
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
