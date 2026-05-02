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

const brand = getBrand("discover-it-cash-back")!;

export const metadata: Metadata = {
  title: "Discover it Cash Back Review: 5% Rotating Categories + Cashback Match (2026)",
  description:
    "The Discover it Cash Back earns 5% on rotating quarterly categories and doubles all first-year cash back automatically. No annual fee. Full 2026 review with pros, cons, and FAQ.",
  alternates: { canonical: "/reviews/discover-it-cash-back" },
};

const faqs: FAQItem[] = [
  {
    question: "Do I have to activate the 5% categories every quarter?",
    answer:
      "Yes. Activation is required each quarter by the deadline (typically the 14th of the first month of the quarter). You can activate via the Discover app, online account, or by calling customer service. Forgetting to activate means you earn only 1% during that quarter.",
  },
  {
    question: "Is the Cashback Match a sign-up bonus?",
    answer:
      "Discover positions it as an automatic first-year benefit rather than a traditional bonus. It requires no minimum spend threshold and applies to all cash back earned in months 1 through 12. The match is paid in one lump sum at the end of that period.",
  },
  {
    question: "What categories are included in the 5% rotation for 2026?",
    answer:
      "Discover announces categories each year and they can vary. Historically the Q1 category has been grocery stores and fitness clubs, Q2 has been gas stations and home improvement, Q3 has been restaurants and PayPal, and Q4 has been Amazon and online shopping. Check Discover's site each quarter for the confirmed current category.",
  },
  {
    question: "Can I use the Discover it internationally?",
    answer:
      "You can use it wherever Discover or Diners Club is accepted. The card has no foreign transaction fee, which is unusually good for a no-fee card. However, Discover acceptance abroad is lower than Visa or Mastercard, so carrying a backup Visa is advisable for international travel.",
  },
  {
    question: "Is the Discover it a good card for building credit?",
    answer:
      "Yes. Discover is known for approving applicants with shorter or thinner credit histories compared to major bank issuers. The card reports to all three major bureaus, comes with free monthly FICO Score access, and allows a credit limit increase request after 7 months of on-time payments.",
  },
];

export default function Page() {
  return (
    <article className="bg-bg">
      <FinancialProductSchema
        name="Discover it Cash Back Review (2026)"
        description="The Discover it Cash Back earns 5% on rotating quarterly categories and doubles all first-year cash back automatically. No annual fee. Full 2026 review with pros, cons, and FAQ."
        slug="/reviews/discover-it-cash-back"
        brandName="Discover it Cash Back"
        category="Credit Card"
        ratingValue={7.8}
        reviewCount={1}
      />
      <FAQPageSchema items={faqs} />
      <BreadcrumbListSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Credit Cards", href: "/credit-cards" },
          { name: "Reviews", href: "/reviews" },
          { name: "Discover it Cash Back", href: "/reviews/discover-it-cash-back" },
        ]}
      />
      {/* HERO */}
      <section className="relative overflow-hidden bg-bg border-b border-line">
        <div className="max-w-(--max-w-page) mx-auto px-6 pt-14 pb-12">
          <div className="flex items-center gap-4 mb-6">
            <BrandLogo brand={brand} size={72} rounded="lg" />
            <div>
              <span className="chip chip-lime mb-2">Credit Card Review</span>
              <h1 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight leading-tight">
                Discover it Cash Back Review (2026)
              </h1>
            </div>
          </div>
          <p className="text-lg text-mute max-w-2xl leading-relaxed">
            The Discover it Cash Back earns{" "}
            <span className="font-mono tabular font-semibold text-ink">5% on rotating quarterly categories</span> (up to $1,500 per quarter, activation required) and 1% on everything else. In year one, Discover automatically doubles every cent of cash back you earn with Cashback Match.
          </p>
          <div className="mt-4 text-xs font-mono text-mute uppercase tracking-wider">
            Updated April 2026 · By the Fintiex Rate Desk
          </div>
        </div>
      </section>

      {/* TL;DR card */}
      <section className="max-w-(--max-w-page) mx-auto px-6 py-10">
        <div className="card-flush p-8" style={{ boxShadow: "var(--shadow-pop)" }}>
          <div className="chip chip-ink mb-6">TL;DR</div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <Stat label="Rewards rate" value="5% / 1%" />
            <Stat label="Annual fee" value="$0" />
            <Stat label="Sign-up bonus" value="Cashback Match" />
            <Stat label="Fintiex Score" value="7.8 / 10" />
          </div>
        </div>
      </section>

      {/* Pros / Cons */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card p-7">
            <div className="chip chip-lime mb-5">Pros</div>
            <ul className="space-y-3 text-[0.9375rem]">
              <li className="flex gap-3"><span className="text-mint font-bold">+</span> 5% on rotating categories including groceries, gas, restaurants, Amazon, and PayPal at different points in the year</li>
              <li className="flex gap-3"><span className="text-mint font-bold">+</span> Cashback Match doubles all first-year earnings automatically, no enrollment needed</li>
              <li className="flex gap-3"><span className="text-mint font-bold">+</span> $0 annual fee, always</li>
              <li className="flex gap-3"><span className="text-mint font-bold">+</span> No foreign transaction fee (rare for a no-fee card)</li>
              <li className="flex gap-3"><span className="text-mint font-bold">+</span> Discover often approves applicants with shorter credit histories, making it accessible for credit-builders</li>
              <li className="flex gap-3"><span className="text-mint font-bold">+</span> Freeze your card instantly through the app; free Social Security number alerts</li>
            </ul>
          </div>
          <div className="card p-7">
            <div className="chip chip-mute mb-5">Cons</div>
            <ul className="space-y-3 text-[0.9375rem]">
              <li className="flex gap-3"><span className="text-rose font-bold">-</span> 5% categories require quarterly activation; forgetting to activate costs you real money</li>
              <li className="flex gap-3"><span className="text-rose font-bold">-</span> 5% earning caps at $1,500 per quarter ($75 maximum per quarter at the top rate)</li>
              <li className="flex gap-3"><span className="text-rose font-bold">-</span> Discover acceptance is lower than Visa and Mastercard internationally, though domestic coverage is near-universal in the U.S.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <h2 className="font-display font-bold text-3xl tracking-tight mb-6">Overview</h2>
        <div className="space-y-5 text-[1.0625rem] leading-relaxed text-ink-soft max-w-3xl">
          <p>
            The Discover it Cash Back is a perennial recommendation for two types of cardholders: those who actively manage their spending to maximize rotating category bonuses, and those who are building or rebuilding their credit history and want a forgiving issuer with real rewards. Discover's approval criteria tend to accommodate thinner credit files than Chase, Citi, or American Express, and the card's $0 annual fee means there is no carrying cost for holding it long-term.
          </p>
          <p>
            The Cashback Match is the card's most distinctive feature. At the end of your first 12 months as a cardmember, Discover tallies up all the cash back you earned and automatically matches it, dollar for dollar, deposited directly to your account. There is no enrollment, no spending threshold, and no maximum on the match. If you earned $300 in cash back during year one, Discover gives you another $300. For cardholders who max out the 5% category each quarter and layer in 1% on base spending, first-year totals of $500 to $700 in matched cash back are achievable.
          </p>
          <p>
            After year one, the Discover it competes on the strength of its 5% rotating categories alone. Historically, Discover has included high-value categories such as grocery stores, gas stations, restaurants, Amazon.com, PayPal, home improvement stores, and wholesale clubs. The rotation roughly aligns with seasonal spending: groceries in Q1, gas stations in Q2, restaurants in Q3, and Amazon or online shopping in Q4. Cardholders who plan purchases around these quarters can extract significant value above a flat-rate card.
          </p>
        </div>
      </section>

      {/* Rewards structure */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <h2 className="font-display font-bold text-3xl tracking-tight mb-6">Rewards Structure</h2>
        <div className="card-flush p-6 max-w-2xl mb-6">
          <ul className="space-y-3 text-[0.9375rem]">
            <li className="flex justify-between border-b border-line pb-3">
              <span className="text-mute">Rotating quarterly categories (activated)</span>
              <span className="font-mono tabular font-semibold">5%</span>
            </li>
            <li className="flex justify-between border-b border-line pb-3">
              <span className="text-mute">Quarterly spend cap for 5%</span>
              <span className="font-mono tabular font-semibold">$1,500</span>
            </li>
            <li className="flex justify-between border-b border-line pb-3">
              <span className="text-mute">All other purchases</span>
              <span className="font-mono tabular font-semibold">1%</span>
            </li>
            <li className="flex justify-between border-b border-line pb-3">
              <span className="text-mute">Year 1 Cashback Match</span>
              <span className="font-mono tabular font-semibold">2x all earnings</span>
            </li>
            <li className="flex justify-between">
              <span className="text-mute">Maximum 5% earnings per quarter</span>
              <span className="font-mono tabular font-semibold">$75</span>
            </li>
          </ul>
        </div>
        <div className="max-w-3xl text-[1.0625rem] leading-relaxed text-ink-soft">
          <p>
            Cash back is redeemable in any amount as a statement credit, direct deposit, or gift card. Discover does not have a minimum redemption threshold, which is unusual and convenient. Rewards do not expire as long as the account is open and in good standing.
          </p>
        </div>
      </section>

      {/* Fees + APR */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <h2 className="font-display font-bold text-3xl tracking-tight mb-6">Fees and APR</h2>
        <div className="card-flush p-6 max-w-2xl">
          <ul className="space-y-3 text-[0.9375rem]">
            <li className="flex justify-between border-b border-line pb-3">
              <span className="text-mute">Annual fee</span>
              <span className="font-mono tabular font-semibold">$0</span>
            </li>
            <li className="flex justify-between border-b border-line pb-3">
              <span className="text-mute">Purchase APR (variable)</span>
              <span className="font-mono tabular font-semibold">18.24% – 27.24%</span>
            </li>
            <li className="flex justify-between border-b border-line pb-3">
              <span className="text-mute">Intro APR (purchases)</span>
              <span className="font-mono tabular font-semibold">0% for 15 months</span>
            </li>
            <li className="flex justify-between border-b border-line pb-3">
              <span className="text-mute">Balance transfer fee</span>
              <span className="font-mono tabular font-semibold">3% (intro); 5% after</span>
            </li>
            <li className="flex justify-between border-b border-line pb-3">
              <span className="text-mute">Foreign transaction fee</span>
              <span className="font-mono tabular font-semibold">$0</span>
            </li>
            <li className="flex justify-between">
              <span className="text-mute">Late payment fee</span>
              <span className="font-mono tabular font-semibold">Up to $41</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Sign-up bonus terms */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <h2 className="font-display font-bold text-3xl tracking-tight mb-6">Cashback Match Terms</h2>
        <div className="max-w-3xl text-[1.0625rem] leading-relaxed text-ink-soft">
          <p>
            Cashback Match applies to all cash back earned in your first 12 months as a new cardmember. Discover matches all cash back at the end of that period and deposits it as a lump sum. There is no cap on the match amount and no spending requirement to trigger it. The match applies whether you earned at 5% or 1%; both rates are doubled. New cardmembers only (not existing Discover cardholders). The match is not ongoing after year one; from year 2, you earn at the standard 5%/1% rates.
          </p>
        </div>
      </section>

      {/* Travel benefits */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <h2 className="font-display font-bold text-3xl tracking-tight mb-6">Perks and Additional Benefits</h2>
        <div className="max-w-3xl text-[1.0625rem] leading-relaxed text-ink-soft mb-5">
          <p>
            The Discover it Cash Back includes free overnight card replacement if your card is lost or stolen. Discover provides free access to your FICO Score monthly, displayed within the app and on statements. Social Security number monitoring alerts you if your SSN appears on dark-web sites. There is no annual fee, no foreign transaction fee, and Discover charges no fee for your first late payment. The card does not carry travel insurance or extended purchase warranty programs, keeping the benefit set lean and the annual fee at zero.
          </p>
        </div>
      </section>

      {/* Who it's for */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card p-7">
            <div className="chip chip-lime mb-4">Best for</div>
            <ul className="space-y-3 text-[0.9375rem]">
              <li>People who actively track quarterly bonus categories and remember to activate</li>
              <li>Credit-builders who want a real rewards card with lenient approval standards</li>
              <li>Anyone who wants to maximize year-one earnings with Cashback Match</li>
            </ul>
          </div>
          <div className="card p-7">
            <div className="chip chip-mute mb-4">Look elsewhere if</div>
            <ul className="space-y-3 text-[0.9375rem]">
              <li>You prefer a simple flat-rate card with no activation or tracking</li>
              <li>You spend heavily outside the U.S. where Discover acceptance is limited</li>
              <li>You want a large, guaranteed sign-up bonus rather than a matched earn</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <h2 className="font-display font-bold text-3xl tracking-tight mb-6">How It Compares</h2>
        <div className="card-flush overflow-hidden max-w-3xl">
          <div className="grid grid-cols-4 px-5 py-3 text-xs font-mono uppercase tracking-wider text-mute border-b border-line bg-bg-soft/50">
            <div className="col-span-1">Card</div>
            <div className="col-span-1 text-right">Top Rate</div>
            <div className="col-span-1 text-right">Ann. Fee</div>
            <div className="col-span-1 text-right">Year 1 Bonus</div>
          </div>
          {[
            { name: "Discover it Cash Back", rate: "5% (rotating)", fee: "$0", bonus: "Cashback Match", highlight: true },
            { name: "Chase Freedom Flex", rate: "5% (rotating)", fee: "$0", bonus: "$200" },
            { name: "Citi Double Cash", rate: "2% flat", fee: "$0", bonus: "None" },
          ].map((row) => (
            <div
              key={row.name}
              className={`grid grid-cols-4 px-5 py-4 items-center border-b border-line-soft last:border-0 ${row.highlight ? "bg-lime/10" : ""}`}
            >
              <div className="col-span-1 font-display font-semibold text-sm">{row.name}</div>
              <div className="col-span-1 text-right font-mono tabular font-semibold">{row.rate}</div>
              <div className="col-span-1 text-right text-mute text-sm">{row.fee}</div>
              <div className="col-span-1 text-right text-mute text-sm">{row.bonus}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <h2 className="font-display font-bold text-3xl tracking-tight mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6 max-w-3xl">
          <Faq q="Do I have to activate the 5% categories every quarter?">
            Yes. Activation is required each quarter by the deadline (typically the 14th of the first month of the quarter). You can activate via the Discover app, online account, or by calling customer service. Forgetting to activate means you earn only 1% during that quarter.
          </Faq>
          <Faq q="Is the Cashback Match a sign-up bonus?">
            Discover positions it as an automatic first-year benefit rather than a traditional bonus. It requires no minimum spend threshold and applies to all cash back earned in months 1 through 12. The match is paid in one lump sum at the end of that period.
          </Faq>
          <Faq q="What categories are included in the 5% rotation for 2026?">
            Discover announces categories each year and they can vary. Historically the Q1 category has been grocery stores and fitness clubs, Q2 has been gas stations and home improvement, Q3 has been restaurants and PayPal, and Q4 has been Amazon and online shopping. Check Discover's site each quarter for the confirmed current category.
          </Faq>
          <Faq q="Can I use the Discover it internationally?">
            You can use it wherever Discover or Diners Club is accepted. The card has no foreign transaction fee, which is unusually good for a no-fee card. However, Discover acceptance abroad is lower than Visa or Mastercard, so carrying a backup Visa is advisable for international travel.
          </Faq>
          <Faq q="Is the Discover it a good card for building credit?">
            Yes. Discover is known for approving applicants with shorter or thinner credit histories compared to major bank issuers. The card reports to all three major bureaus, comes with free monthly FICO Score access, and allows a credit limit increase request after 7 months of on-time payments.
          </Faq>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-20">
        <div className="flex items-center gap-4">
          <Link href="/credit-cards" className="pill pill-ink">
            Compare all credit cards <span aria-hidden>→</span>
          </Link>
          <Link href="/credit-cards" className="pill pill-ghost">
            See the full card table
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
