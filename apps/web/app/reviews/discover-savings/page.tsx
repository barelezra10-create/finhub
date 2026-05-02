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

const brand = getBrand("discover-savings")!;

export const metadata: Metadata = {
  title: "Discover Online Savings Review: 4.30% APY, No Fees (2026)",
  description:
    "Discover Online Savings pays 4.30% APY with no minimum and no fees. Top-rated customer service and strong app. Full 2026 review with pros, cons, and who it is best for.",
  alternates: { canonical: "/reviews/discover-savings" },
};

const faqs: FAQItem[] = [
  {
    question: "Is Discover Online Savings FDIC insured?",
    answer:
      "Yes. Discover Bank is a federally chartered bank, Member FDIC, with deposit coverage up to $250,000 per depositor per ownership category.",
  },
  {
    question: "Do I need a Discover credit card to open a Discover savings account?",
    answer:
      "No. The savings account is a standalone product open to any eligible U.S. resident. However, existing Discover cardholders can add the savings account within their existing login, which is significantly faster.",
  },
  {
    question: "How does Discover's customer service compare to other HYSAs?",
    answer:
      "Discover consistently earns J.D. Power top scores in direct banking customer satisfaction. The company has a published policy of no automated phone trees for customer service calls, meaning you reach a human faster than at most competing institutions.",
  },
  {
    question: "Does Discover offer a checking account?",
    answer:
      "Yes. Discover offers a Cashback Debit checking account with 1% cash back on up to $3,000 in monthly debit card purchases and no fees, which pairs well with the savings account.",
  },
  {
    question: "Why is Discover's rate lower than Bask or Bread?",
    answer:
      "Discover invests heavily in customer service infrastructure, brand recognition, and a broader product suite. The 55 basis point gap between Discover and Bask costs about $55 per year on a $10,000 balance. For customers already in the Discover ecosystem, the convenience and service quality may outweigh that difference.",
  },
];

export default function Page() {
  return (
    <article className="bg-bg">
      <FinancialProductSchema
        name="Discover Online Savings Review (2026)"
        description="Discover Online Savings pays 4.30% APY with no minimum and no fees. Top-rated customer service and strong app. Full 2026 review with pros, cons, and who it is best for."
        slug="/reviews/discover-savings"
        brandName="Discover"
        category="Savings Account"
        apr="4.30"
        ratingValue={8.0}
        reviewCount={1}
      />
      <FAQPageSchema items={faqs} />
      <BreadcrumbListSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Savings", href: "/savings" },
          { name: "Reviews", href: "/reviews" },
          { name: "Discover", href: "/reviews/discover-savings" },
        ]}
      />
      {/* HERO */}
      <section className="relative overflow-hidden bg-bg border-b border-line">
        <div className="max-w-(--max-w-page) mx-auto px-6 pt-14 pb-12">
          <div className="flex items-center gap-4 mb-6">
            <BrandLogo brand={brand} size={72} rounded="lg" />
            <div>
              <span className="chip chip-lime mb-2">Savings Review</span>
              <h1 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight leading-tight">
                Discover Online Savings Review (2026)
              </h1>
            </div>
          </div>
          <p className="text-lg text-mute max-w-2xl leading-relaxed">
            Discover Online Savings pays{" "}
            <span className="font-mono tabular font-semibold text-ink">4.30% APY</span> with no minimum, no fees, and some of the highest-rated customer service in consumer banking. Here is our full 2026 review.
          </p>
          <div className="mt-4 text-xs font-mono text-mute uppercase tracking-wider">
            By the Fintiex Rate Desk · Updated April 28, 2026
          </div>
        </div>
      </section>

      {/* TL;DR card */}
      <section className="max-w-(--max-w-page) mx-auto px-6 py-10">
        <div className="card-flush p-8" style={{ boxShadow: "var(--shadow-pop)" }}>
          <div className="chip chip-ink mb-6">TL;DR</div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <Stat label="APY" value="4.30%" />
            <Stat label="Min Deposit" value="$0" />
            <Stat label="Monthly Fee" value="$0" />
            <Stat label="Fintiex Score" value="8.0 / 10" />
          </div>
        </div>
      </section>

      {/* Pros / Cons */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card p-7">
            <div className="chip chip-lime mb-5">Pros</div>
            <ul className="space-y-3 text-[0.9375rem]">
              <li className="flex gap-3"><span className="text-mint font-bold">+</span> 4.30% APY with no minimum and no fees</li>
              <li className="flex gap-3"><span className="text-mint font-bold">+</span> Top-rated U.S.-based customer service, 24/7</li>
              <li className="flex gap-3"><span className="text-mint font-bold">+</span> Strong mobile app rated above 4.8 on the App Store</li>
              <li className="flex gap-3"><span className="text-mint font-bold">+</span> Seamlessly integrated with Discover credit cards under one login</li>
              <li className="flex gap-3"><span className="text-mint font-bold">+</span> FDIC insured via Discover Bank</li>
              <li className="flex gap-3"><span className="text-mint font-bold">+</span> Simple, no-condition rate with no direct deposit or balance requirements</li>
            </ul>
          </div>
          <div className="card p-7">
            <div className="chip chip-mute mb-5">Cons</div>
            <ul className="space-y-3 text-[0.9375rem]">
              <li className="flex gap-3"><span className="text-rose font-bold">-</span> APY is 55 basis points below Bask's top rate</li>
              <li className="flex gap-3"><span className="text-rose font-bold">-</span> No savings goal Buckets feature like Ally</li>
              <li className="flex gap-3"><span className="text-rose font-bold">-</span> No joint savings account option for most account types</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <h2 className="font-display font-bold text-3xl tracking-tight mb-6">Overview</h2>
        <div className="space-y-5 text-[1.0625rem] leading-relaxed text-ink-soft max-w-3xl">
          <p>
            Discover Bank is a federally chartered bank headquartered in Greenwood, Delaware, and a subsidiary of Discover Financial Services, a company that has operated consumer credit and banking products since the 1980s. Discover Bank is regulated by the Federal Deposit Insurance Corporation (FDIC) and the Federal Reserve, with total assets of approximately $137 billion as of Q4 2025. Discover Financial Services is publicly traded on the NYSE under the ticker DFS.
          </p>
          <p>
            The Online Savings Account pays 4.30% APY with no minimum deposit requirement and no monthly maintenance fee. Interest compounds daily and posts monthly. The account requires no direct deposit, no minimum balance, and no promotional period to access the stated rate. What you see is what you earn from day one, which is a meaningful simplicity advantage over accounts like SoFi that gate their top rate behind a direct deposit requirement.
          </p>
          <p>
            The strongest argument for Discover in this category is the existing Discover customer experience. If you already use a Discover credit card, your bank account and card are accessible from the same login, the same app, and the same customer service line. That integration eliminates account fragmentation for the tens of millions of existing Discover cardholders. Customer service is a genuine differentiator: Discover regularly earns J.D. Power recognition for satisfaction in direct banking, and the 24/7 phone line is staffed with U.S.-based agents.
          </p>
        </div>
      </section>

      {/* Rate history */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <h2 className="font-display font-bold text-3xl tracking-tight mb-6">Rate History</h2>
        <div className="max-w-3xl text-[1.0625rem] leading-relaxed text-ink-soft">
          <p>
            Discover's savings rate has tracked the Federal Reserve cycle since 2022, moving upward through 2023 and stabilizing in 2024 as rate cuts began. The account peaked near 4.65% APY in late 2023 and has since settled at 4.30% following two Fed cuts. Discover has historically positioned its savings rate slightly below the very top of the market, consistent with its emphasis on product breadth and service quality over absolute rate maximization. Savers who value simplicity and brand trust over chasing the last 50 basis points will find the current rate acceptable.
          </p>
        </div>
      </section>

      {/* Fees + Limits */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <h2 className="font-display font-bold text-3xl tracking-tight mb-6">Fees and Limits</h2>
        <div className="card-flush p-6 max-w-2xl">
          <ul className="space-y-3 text-[0.9375rem]">
            <li className="flex justify-between border-b border-line pb-3">
              <span className="text-mute">Monthly fee</span>
              <span className="font-mono tabular font-semibold">$0</span>
            </li>
            <li className="flex justify-between border-b border-line pb-3">
              <span className="text-mute">Minimum opening deposit</span>
              <span className="font-mono tabular font-semibold">$0</span>
            </li>
            <li className="flex justify-between border-b border-line pb-3">
              <span className="text-mute">Minimum balance for full APY</span>
              <span className="font-mono tabular font-semibold">$0.01</span>
            </li>
            <li className="flex justify-between border-b border-line pb-3">
              <span className="text-mute">Outgoing wire fee</span>
              <span className="font-mono tabular font-semibold">$0</span>
            </li>
            <li className="flex justify-between">
              <span className="text-mute">Direct deposit required?</span>
              <span className="font-mono tabular font-semibold">No</span>
            </li>
          </ul>
        </div>
      </section>

      {/* How to open */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <h2 className="font-display font-bold text-3xl tracking-tight mb-6">How to Open</h2>
        <div className="max-w-3xl text-[1.0625rem] leading-relaxed text-ink-soft mb-5">
          <p>
            Existing Discover cardholders can add a savings account directly through their existing Discover account login, making the process take under two minutes. New customers can apply at discover.com in about five minutes, needing only a Social Security number and a linked external bank account for funding.
          </p>
        </div>
        <ul className="space-y-2 text-[0.9375rem] max-w-2xl ml-4">
          <li className="list-disc ml-4">Visit discover.com/online-banking/savings or log in to your existing Discover account</li>
          <li className="list-disc ml-4">Complete identity verification (SSN and basic personal details)</li>
          <li className="list-disc ml-4">Link an external bank account for the initial funding transfer</li>
          <li className="list-disc ml-4">Fund with any amount via ACH (arrives in 1-3 business days)</li>
          <li className="list-disc ml-4">Existing cardholders manage everything from the same Discover app</li>
        </ul>
      </section>

      {/* UX */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <h2 className="font-display font-bold text-3xl tracking-tight mb-6">App and Online Banking Experience</h2>
        <div className="max-w-3xl text-[1.0625rem] leading-relaxed text-ink-soft">
          <p>
            The Discover app is one of the top-rated banking apps on both iOS and Android, with App Store ratings consistently above 4.8 out of 5. The interface is clean, fast, and integrates credit card and bank account management in one place. Customer service is available by phone 24 hours a day, 7 days a week, with no automated phone trees according to the company's published service standard. Discover has won J.D. Power awards for customer satisfaction in direct banking multiple years running, which gives their service claims credibility beyond marketing copy.
          </p>
        </div>
      </section>

      {/* Safety */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <h2 className="font-display font-bold text-3xl tracking-tight mb-6">FDIC Insurance and Safety</h2>
        <div className="max-w-3xl text-[1.0625rem] leading-relaxed text-ink-soft">
          <p>
            Discover Bank is a federally chartered bank, Member FDIC (FDIC certificate number 5649). All savings account deposits are insured up to $250,000 per depositor per ownership category, with joint account coverage up to $500,000. Discover Financial Services had total assets of approximately $137 billion as of Q4 2025, representing a substantial and well-capitalized institution.
          </p>
        </div>
      </section>

      {/* Who it's for */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card p-7">
            <div className="chip chip-lime mb-4">Best for</div>
            <ul className="space-y-3 text-[0.9375rem]">
              <li>Existing Discover cardholders who want everything in one app</li>
              <li>Savers who want a simple, no-conditions account with strong service</li>
              <li>Anyone who values consistent customer service quality over maximizing yield</li>
            </ul>
          </div>
          <div className="card p-7">
            <div className="chip chip-mute mb-4">Look elsewhere if</div>
            <ul className="space-y-3 text-[0.9375rem]">
              <li>You want the highest available APY (Bask at 4.85% is 55 bps more)</li>
              <li>You need goal-based savings Buckets or Vaults features</li>
              <li>You want full online banking including checking in one place (Ally or SoFi)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <h2 className="font-display font-bold text-3xl tracking-tight mb-6">How It Compares</h2>
        <div className="card-flush overflow-hidden max-w-3xl">
          <div className="grid grid-cols-4 px-5 py-3 text-xs font-mono uppercase tracking-wider text-mute border-b border-line bg-bg-soft/50">
            <div className="col-span-1">Bank</div>
            <div className="col-span-1 text-right">APY</div>
            <div className="col-span-1 text-right">Min</div>
            <div className="col-span-1 text-right">Service Rating</div>
          </div>
          {[
            { name: "SoFi", apy: "4.40%*", min: "$0", svc: "Top" },
            { name: "Discover", apy: "4.30%", min: "$0", svc: "Top", highlight: true },
            { name: "CIT Bank", apy: "4.25%", min: "$5,000", svc: "Average" },
          ].map((row) => (
            <div
              key={row.name}
              className={`grid grid-cols-4 px-5 py-4 items-center border-b border-line-soft last:border-0 ${row.highlight ? "bg-lime/10" : ""}`}
            >
              <div className="col-span-1 font-display font-semibold text-sm">{row.name}</div>
              <div className="col-span-1 text-right font-mono tabular font-semibold">{row.apy}</div>
              <div className="col-span-1 text-right text-mute text-sm">{row.min}</div>
              <div className="col-span-1 text-right text-mute text-sm">{row.svc}</div>
            </div>
          ))}
        </div>
        <p className="text-xs text-mute mt-3 max-w-2xl">* SoFi 4.40% requires direct deposit; otherwise 1.20%</p>
      </section>

      {/* FAQ */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <h2 className="font-display font-bold text-3xl tracking-tight mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6 max-w-3xl">
          <Faq q="Is Discover Online Savings FDIC insured?">
            Yes. Discover Bank is a federally chartered bank, Member FDIC, with deposit coverage up to $250,000 per depositor per ownership category.
          </Faq>
          <Faq q="Do I need a Discover credit card to open a Discover savings account?">
            No. The savings account is a standalone product open to any eligible U.S. resident. However, existing Discover cardholders can add the savings account within their existing login, which is significantly faster.
          </Faq>
          <Faq q="How does Discover's customer service compare to other HYSAs?">
            Discover consistently earns J.D. Power top scores in direct banking customer satisfaction. The company has a published policy of no automated phone trees for customer service calls, meaning you reach a human faster than at most competing institutions.
          </Faq>
          <Faq q="Does Discover offer a checking account?">
            Yes. Discover offers a Cashback Debit checking account with 1% cash back on up to $3,000 in monthly debit card purchases and no fees, which pairs well with the savings account.
          </Faq>
          <Faq q="Why is Discover's rate lower than Bask or Bread?">
            Discover invests heavily in customer service infrastructure, brand recognition, and a broader product suite. The 55 basis point gap between Discover and Bask costs about $55 per year on a $10,000 balance. For customers already in the Discover ecosystem, the convenience and service quality may outweigh that difference.
          </Faq>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-20">
        <div className="flex items-center gap-4">
          <Link href="/savings" className="pill pill-ink">
            Compare all HYSA rates <span aria-hidden>→</span>
          </Link>
          <Link href="/savings" className="pill pill-ghost">
            See the full savings table
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
