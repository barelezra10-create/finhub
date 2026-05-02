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

const brand = getBrand("amex-savings")!;

export const metadata: Metadata = {
  title: "American Express High Yield Savings Review: 4.15% APY (2026)",
  description:
    "American Express HYSA pays 4.15% APY with no minimum and no fees. Ideal for existing Amex cardholders. Full 2026 review: pros, cons, slow ACH, app limitations, and verdict.",
  alternates: { canonical: "/reviews/amex-savings" },
};

const faqs: FAQItem[] = [
  {
    question: "Is the American Express HYSA managed in the same app as my Amex credit card?",
    answer:
      "No. The savings account uses a separate application and login from the main American Express credit card app. You will need to download the Amex Savings app or use americanexpress.com/savings to manage your deposit account.",
  },
  {
    question: "Why are ACH transfers so slow at American Express?",
    answer:
      "American Express National Bank uses standard ACH rails without same-day or expedited transfer options. Most transfers take 3 to 5 business days. This is a known limitation and has been reported consistently by users since the savings account launched. If fast access to funds is important, Ally or Marcus are better choices.",
  },
  {
    question: "Is the American Express HYSA FDIC insured?",
    answer:
      "Yes. American Express National Bank is a federally chartered bank, Member FDIC, with standard deposit insurance up to $250,000 per depositor per ownership category.",
  },
  {
    question: "Does American Express offer checking accounts?",
    answer:
      "American Express offers a Rewards Checking account with 1.00% APY and debit card access, which can be paired with the savings account. The combined product still lacks the breadth of Ally's full-service banking platform but provides more daily usability than the savings account alone.",
  },
  {
    question: "Is the APY rate guaranteed?",
    answer:
      "No HYSA rate is permanently guaranteed. The 4.15% APY is the current variable rate and will adjust as the Federal Reserve changes the federal funds rate and as competitive dynamics shift. American Express typically provides advance notice of rate changes through account communication.",
  },
];

export default function Page() {
  return (
    <article className="bg-bg">
      <FinancialProductSchema
        name="American Express High Yield Savings Review (2026)"
        description="American Express HYSA pays 4.15% APY with no minimum and no fees. Ideal for existing Amex cardholders. Full 2026 review: pros, cons, slow ACH, app limitations, and verdict."
        slug="/reviews/amex-savings"
        brandName="American Express"
        category="Savings Account"
        apr="4.15"
        ratingValue={7.2}
        reviewCount={1}
      />
      <FAQPageSchema items={faqs} />
      <BreadcrumbListSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Savings", href: "/savings" },
          { name: "Reviews", href: "/reviews" },
          { name: "American Express", href: "/reviews/amex-savings" },
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
                American Express High Yield Savings Review (2026)
              </h1>
            </div>
          </div>
          <p className="text-lg text-mute max-w-2xl leading-relaxed">
            The American Express High Yield Savings Account pays{" "}
            <span className="font-mono tabular font-semibold text-ink">4.15% APY</span> with no minimum deposit and no monthly fees. Here is our full 2026 review, including the ACH speed issue you need to know about before opening.
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
            <Stat label="APY" value="4.15%" />
            <Stat label="Min Deposit" value="$0" />
            <Stat label="Monthly Fee" value="$0" />
            <Stat label="Fintiex Score" value="7.2 / 10" />
          </div>
        </div>
      </section>

      {/* Pros / Cons */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card p-7">
            <div className="chip chip-lime mb-5">Pros</div>
            <ul className="space-y-3 text-[0.9375rem]">
              <li className="flex gap-3"><span className="text-mint font-bold">+</span> 4.15% APY with zero minimum and zero monthly fees</li>
              <li className="flex gap-3"><span className="text-mint font-bold">+</span> American Express brand trust with over 170 years in financial services</li>
              <li className="flex gap-3"><span className="text-mint font-bold">+</span> FDIC insured via American Express National Bank</li>
              <li className="flex gap-3"><span className="text-mint font-bold">+</span> Seamless integration with Amex card accounts on the same login</li>
              <li className="flex gap-3"><span className="text-mint font-bold">+</span> Interest compounded daily, posted monthly</li>
              <li className="flex gap-3"><span className="text-mint font-bold">+</span> No hard credit inquiry to open</li>
            </ul>
          </div>
          <div className="card p-7">
            <div className="chip chip-mute mb-5">Cons</div>
            <ul className="space-y-3 text-[0.9375rem]">
              <li className="flex gap-3"><span className="text-rose font-bold">-</span> Slowest ACH transfers in the category, often 3 to 5 business days</li>
              <li className="flex gap-3"><span className="text-rose font-bold">-</span> Savings app is separate from the main Amex card app, requiring two logins</li>
              <li className="flex gap-3"><span className="text-rose font-bold">-</span> APY is 70 basis points below Bask's leading rate</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <h2 className="font-display font-bold text-3xl tracking-tight mb-6">Overview</h2>
        <div className="space-y-5 text-[1.0625rem] leading-relaxed text-ink-soft max-w-3xl">
          <p>
            American Express National Bank is a federally chartered national bank regulated by the Office of the Comptroller of the Currency, headquartered in Sandy, Utah. It is a wholly owned subsidiary of American Express Company, a financial services corporation founded in 1850 and publicly traded on the NYSE under the ticker AXP. American Express National Bank had total assets of approximately $84 billion as of Q4 2025. The brand's 170-plus year history in financial services gives it a level of institutional trust that few direct competitors can match.
          </p>
          <p>
            The High Yield Savings Account pays 4.15% APY with no minimum deposit requirement and no monthly fee. Interest compounds daily and credits to the account monthly. The rate is unconditional: there is no direct deposit requirement, no minimum balance tier, and no promotional period. However, the account has a practical limitation that matters for people who move money frequently: ACH transfer times at American Express National Bank are among the slowest in the industry. Transfers to and from external bank accounts often take 3 to 5 business days, versus 1 to 3 business days at most competitors and near-instant at some.
          </p>
          <p>
            The other structural consideration is the app situation. American Express runs its credit card app (the main Amex app) and its savings account app as separate products. Existing Amex cardholders who expect to manage their savings alongside their Blue Cash or Platinum card in one interface will be disappointed to find they need to download and log into a different application. The savings web portal and separate savings app function adequately, but the fragmentation adds friction for everyday use.
          </p>
        </div>
      </section>

      {/* Rate history */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <h2 className="font-display font-bold text-3xl tracking-tight mb-6">Rate History</h2>
        <div className="max-w-3xl text-[1.0625rem] leading-relaxed text-ink-soft">
          <p>
            The American Express HYSA rate has tracked the Federal Reserve rate cycle since 2022, moving from near 0.50% in early 2022 to a peak of approximately 4.65% APY in mid-to-late 2023. The rate has declined to 4.15% as the Fed reduced rates in 2024 and into 2025. American Express has historically positioned the savings rate slightly below the top of the HYSA market, consistent with the premium brand trust it provides. The account is unlikely to lead the market on rate but is equally unlikely to fall far below the competitive tier.
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
              <span className="text-mute">ACH transfer time</span>
              <span className="font-mono tabular font-semibold">3-5 business days</span>
            </li>
            <li className="flex justify-between">
              <span className="text-mute">Wire transfer fee</span>
              <span className="font-mono tabular font-semibold">$0</span>
            </li>
          </ul>
        </div>
      </section>

      {/* How to open */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <h2 className="font-display font-bold text-3xl tracking-tight mb-6">How to Open</h2>
        <div className="max-w-3xl text-[1.0625rem] leading-relaxed text-ink-soft mb-5">
          <p>
            Opening an American Express HYSA account takes about five minutes at americanexpress.com/savings or via the dedicated savings app. You will need a Social Security number and an external bank account for the initial ACH funding. Existing Amex cardholders can pre-fill some information from their card account.
          </p>
        </div>
        <ul className="space-y-2 text-[0.9375rem] max-w-2xl ml-4">
          <li className="list-disc ml-4">Visit americanexpress.com/savings or download the Amex Savings app</li>
          <li className="list-disc ml-4">Complete identity verification with SSN and personal information</li>
          <li className="list-disc ml-4">Link an external bank account for the initial deposit via routing and account number</li>
          <li className="list-disc ml-4">Fund with any amount via ACH (plan for 3-5 business days for the first transfer)</li>
          <li className="list-disc ml-4">Note: this is a separate app from your main American Express credit card app</li>
        </ul>
      </section>

      {/* UX */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <h2 className="font-display font-bold text-3xl tracking-tight mb-6">App and Online Banking Experience</h2>
        <div className="max-w-3xl text-[1.0625rem] leading-relaxed text-ink-soft">
          <p>
            The American Express savings app (separate from the main Amex credit card app) has App Store ratings around 4.2 out of 5 and Google Play ratings near 4.0. The interface is functional and straightforward for a savings-only account: balance display, transfer initiation, and account settings are accessible. The primary friction point is that Amex cardholders must manage two separate applications for their credit cards and their savings account. Unlike Discover, which integrates both on a single login, American Express has not unified these experiences. For infrequent savers who check the account once a month, the app limitation is minor. For those who want a fully integrated experience, Discover or Ally is a better fit.
          </p>
        </div>
      </section>

      {/* Safety */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <h2 className="font-display font-bold text-3xl tracking-tight mb-6">FDIC Insurance and Safety</h2>
        <div className="max-w-3xl text-[1.0625rem] leading-relaxed text-ink-soft">
          <p>
            American Express National Bank is a nationally chartered bank, Member FDIC (FDIC certificate number 27471). Deposits are insured up to $250,000 per depositor per ownership category, with joint accounts covered up to $500,000. American Express National Bank had total assets of approximately $84 billion as of Q4 2025 and is backed by American Express Company, one of the most recognized financial brands globally.
          </p>
        </div>
      </section>

      {/* Who it's for */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card p-7">
            <div className="chip chip-lime mb-4">Best for</div>
            <ul className="space-y-3 text-[0.9375rem]">
              <li>Existing American Express cardholders who want to keep everything in the Amex ecosystem</li>
              <li>Savers who value brand trust and stability over chasing the highest APY</li>
              <li>Those who rarely need to move money quickly and can tolerate slower ACH</li>
            </ul>
          </div>
          <div className="card p-7">
            <div className="chip chip-mute mb-4">Look elsewhere if</div>
            <ul className="space-y-3 text-[0.9375rem]">
              <li>You want the highest APY available (Bask at 4.85% is 70 bps more)</li>
              <li>You need fast ACH transfers for emergency fund access</li>
              <li>You want your savings and credit card in one unified app (consider Discover)</li>
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
            <div className="col-span-1 text-right">ACH Speed</div>
          </div>
          {[
            { name: "CIT Bank", apy: "4.25%*", min: "$5,000", ach: "1-3 days" },
            { name: "Amex HYSA", apy: "4.15%", min: "$0", ach: "3-5 days", highlight: true },
            { name: "Ally Bank", apy: "4.45%", min: "$0", ach: "1-3 days" },
          ].map((row) => (
            <div
              key={row.name}
              className={`grid grid-cols-4 px-5 py-4 items-center border-b border-line-soft last:border-0 ${row.highlight ? "bg-lime/10" : ""}`}
            >
              <div className="col-span-1 font-display font-semibold text-sm">{row.name}</div>
              <div className="col-span-1 text-right font-mono tabular font-semibold">{row.apy}</div>
              <div className="col-span-1 text-right text-mute text-sm">{row.min}</div>
              <div className="col-span-1 text-right text-mute text-sm">{row.ach}</div>
            </div>
          ))}
        </div>
        <p className="text-xs text-mute mt-3 max-w-2xl">* CIT Bank 4.25% only on balances of $5,000 or more; under that rate is 0.25%</p>
      </section>

      {/* FAQ */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <h2 className="font-display font-bold text-3xl tracking-tight mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6 max-w-3xl">
          <Faq q="Is the American Express HYSA managed in the same app as my Amex credit card?">
            No. The savings account uses a separate application and login from the main American Express credit card app. You will need to download the Amex Savings app or use americanexpress.com/savings to manage your deposit account.
          </Faq>
          <Faq q="Why are ACH transfers so slow at American Express?">
            American Express National Bank uses standard ACH rails without same-day or expedited transfer options. Most transfers take 3 to 5 business days. This is a known limitation and has been reported consistently by users since the savings account launched. If fast access to funds is important, Ally or Marcus are better choices.
          </Faq>
          <Faq q="Is the American Express HYSA FDIC insured?">
            Yes. American Express National Bank is a federally chartered bank, Member FDIC, with standard deposit insurance up to $250,000 per depositor per ownership category.
          </Faq>
          <Faq q="Does American Express offer checking accounts?">
            American Express offers a Rewards Checking account with 1.00% APY and debit card access, which can be paired with the savings account. The combined product still lacks the breadth of Ally's full-service banking platform but provides more daily usability than the savings account alone.
          </Faq>
          <Faq q="Is the APY rate guaranteed?">
            No HYSA rate is permanently guaranteed. The 4.15% APY is the current variable rate and will adjust as the Federal Reserve changes the federal funds rate and as competitive dynamics shift. American Express typically provides advance notice of rate changes through account communication.
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
