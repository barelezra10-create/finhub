import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbListSchema, FAQPageSchema } from "@/components/schemas";
import { loadListicles } from "@/lib/listicles";

export const metadata: Metadata = {
  title: "Best Credit Card for Your Needs: 15 Decision Guides",
  description:
    "Find a credit card that fits your needs. Explore 15 guides with fee calculations, payoff examples and links to source-checked card comparisons.",
  alternates: { canonical: "/best" },
};

const FAQ_ITEMS = [
  { question: "How should I choose a credit card?", answer: "Start with your main task: paying down debt, building credit or earning rewards. Compare the total cost and payment requirements before benefits. These guides show hypothetical examples; the category comparisons link to card records and official sources." },
  { question: "Are these rankings of every available card?", answer: "No. These are decision guides, and our card directory covers a limited selection of products. A guide explains trade-offs rather than declaring a universal winner. It does not guarantee eligibility or approval." },
  { question: "What does an update date mean?", answer: "The date on a guide records its content revision. Card profiles separately identify selected facts checked against issuer sources and their check dates. A guide revision does not mean every issuer offer was reverified that day." },
  { question: "Where can I check the methodology?", answer: "Our editorial policy explains sourcing, AI assistance, offer checks and corrections. Product examples use stated hypothetical inputs. Current issuer disclosures govern actual applications." },
];

export default function BestHubPage() {
  const listicles = loadListicles();

  return (
    <>
      <BreadcrumbListSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Best Cards", href: "/best" },
        ]}
      />
      <FAQPageSchema items={FAQ_ITEMS} />

      {/* HERO */}
      <section className="relative overflow-hidden bg-bg border-b border-line">
        <div className="hero-blob hero-blob-1" aria-hidden="true" />
        <div className="hero-blob hero-blob-2" aria-hidden="true" />
        <div className="relative max-w-(--max-w-page) mx-auto px-6 pt-20 pb-16">
          <span className="chip chip-violet mb-6">
            <span className="pulse-dot" /> {listicles.length} decision guides
          </span>
          <h1 className="font-display font-extrabold text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[1.03] tracking-[-0.03em] mb-6 max-w-3xl">
            Find the best credit card for your needs.
          </h1>
          <p className="text-lg md:text-xl text-mute leading-relaxed max-w-2xl mb-8">
            Start with your goal: paying down debt, building credit, earning
            rewards or financing a planned purchase. Work through the costs
            and trade-offs, then compare source-linked card details.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/credit-cards" className="pill pill-ink">
              Browse all cards &rarr;
            </Link>
            <Link href="/calculators" className="pill pill-ghost">
              Open calculators
            </Link>
          </div>
        </div>
      </section>

      {/* LISTICLE GRID */}
      <section className="max-w-(--max-w-page) mx-auto px-6 py-16">
        <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
          <div>
            <div className="font-mono text-xs uppercase tracking-wider text-mute mb-2">
              All categories
            </div>
            <h2 className="font-display font-extrabold text-2xl tracking-tight">
              {listicles.length} ways to compare
            </h2>
          </div>
          <span className="font-mono text-xs text-mute tabular">
            Fees, repayment and rewards
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {listicles.map((l) => (
            <Link
              key={l.slug}
              href={`/best/${l.slug}`}
              className="card p-6 block group flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="chip chip-mute">Decision guide</span>
                <span className="font-mono text-xs text-mute tabular">
                  {l.lastUpdated}
                </span>
              </div>
              <h3 className="font-display font-bold text-lg leading-snug tracking-tight mb-3">
                {l.title}
              </h3>
              {l.description ? (
                <p className="text-mute text-sm leading-relaxed flex-1 line-clamp-4">
                  {l.description}
                </p>
              ) : (
                <p className="text-mute text-sm leading-relaxed flex-1">
                  Compare the costs and trade-offs for this category.
                </p>
              )}
              <div className="mt-5 flex items-center justify-between">
                <span className="font-medium text-sm group-hover:text-violet">
                  Read guide
                </span>
                <span className="text-mute group-hover:text-ink group-hover:translate-x-1 transition-all">
                  &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* HOW WE RANK */}
      <section className="border-t border-line bg-bg-soft/60">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div>
              <div className="font-mono text-xs uppercase tracking-wider text-mute mb-3">
                Methodology
              </div>
              <h2 className="font-display font-extrabold text-3xl tracking-tight mb-4">
                How to use these guides.
              </h2>
              <p className="text-mute leading-relaxed">
                Each guide explains a specific decision with a worked example.
                Our directory covers a limited set of cards. Read our{" "}
                <Link href="/editorial-policy" className="u-link">editorial policy</Link> for sourcing and corrections.
              </p>
            </div>
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                {
                  n: "01",
                  title: "Start with your goal",
                  body: "Choose a category for your main task. Repayment terms matter for debt, while eligible spending and redemption rules matter for rewards.",
                },
                {
                  n: "02",
                  title: "Check the assumptions",
                  body: "Examples use hypothetical fees, spending and rates. Replace them with your own budget and the offer terms before drawing a conclusion.",
                },
                {
                  n: "03",
                  title: "Compare ongoing costs",
                  body: "Account for annual fees, caps and borrowing costs. Treat first-year bonuses separately from the value you expect in later years.",
                },
                {
                  n: "04",
                  title: "Verify the offer",
                  body: "Card records link to official sources and show selected-fact check dates. Unconfirmed figures are withheld; issuer disclosures govern.",
                },
              ].map((b) => (
                <div key={b.n} className="card p-6">
                  <div className="font-mono text-xs uppercase tracking-wider text-mute mb-3">
                    {b.n}
                  </div>
                  <h3 className="font-display font-bold text-base tracking-tight mb-2">
                    {b.title}
                  </h3>
                  <p className="text-mute text-sm leading-relaxed">{b.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-(--max-w-page) mx-auto px-6 py-16">
        <h2 className="font-display font-extrabold text-3xl tracking-tight mb-10">
          Credit card guide FAQ
        </h2>
        <div className="space-y-4 max-w-3xl">
          {FAQ_ITEMS.map((item, i) => (
            <details key={i} className="card p-6 group">
              <summary className="font-display font-bold text-base tracking-tight cursor-pointer flex items-center justify-between">
                <span>{item.question}</span>
                <span className="text-mute group-open:rotate-45 transition-transform text-xl">
                  +
                </span>
              </summary>
              <p className="text-mute text-sm leading-relaxed mt-4">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="bg-lime border-y border-ink">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-xl">
            <div className="font-mono text-xs uppercase tracking-wider mb-3">
              Compare specifically
            </div>
            <h3 className="font-display font-extrabold text-2xl md:text-3xl tracking-tight mb-2">
              Looking for a particular card?
            </h3>
            <p className="text-ink-soft text-base leading-relaxed">
              Read our full editorial reviews of the top issuers and lenders,
              each with rates, fees, and the honest verdict.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/reviews" className="pill pill-ink">
              See reviews &rarr;
            </Link>
            <Link href="/glossary" className="pill pill-ghost">
              Open the glossary
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
