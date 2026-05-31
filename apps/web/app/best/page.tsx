import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbListSchema, FAQPageSchema } from "@/components/schemas";
import { loadListicles } from "@/lib/listicles";

export const metadata: Metadata = {
  title: "Best Credit Cards in 2026: 15 Category Winners | Fintiex",
  description:
    "Fintiex picks for the best credit cards in 2026 across cashback, travel, balance transfer, student, secured, and 12 other categories. Honest ranking, no affiliate bias.",
  alternates: { canonical: "/best" },
};

const FAQ_ITEMS = [
  {
    question: "How does Fintiex rank these cards?",
    answer:
      "Every list is built around a single use case (best for groceries, best for students, and so on). We rank on the four to six attributes that actually drive value for that use case: signup bonus, ongoing rewards rate, fees, intro APR length, foreign transaction fees, and credit access. We do not weight cards by affiliate payout.",
  },
  {
    question: "Why no scores or stars?",
    answer:
      "Scores compress too much information into a single number and tend to flatter cards with high marketing budgets. We use a category-by-category ranking with a clear best-for label on each pick so you can see exactly what trade-off you are picking up.",
  },
  {
    question: "How often are the listicles updated?",
    answer:
      "Every list is reviewed quarterly and refreshed whenever an issuer changes terms or a new card materially changes the category. Each page lists its last update date in the frontmatter.",
  },
  {
    question: "Do you cover business credit cards?",
    answer:
      "Yes. The Best Business Credit Cards listicle covers sole proprietors and small businesses, and several of the cashback and travel lists include the best business card for that use case as one of the picks.",
  },
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
            <span className="pulse-dot" /> {listicles.length} category winners
          </span>
          <h1 className="font-display font-extrabold text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[1.03] tracking-[-0.03em] mb-6 max-w-3xl">
            Best credit cards, ranked by use case.
          </h1>
          <p className="text-lg md:text-xl text-mute leading-relaxed max-w-2xl mb-8">
            One list per real-world job: paying down debt, building credit,
            earning travel rewards, financing a large purchase. Each pick is
            ranked on the attributes that matter for that job, not on affiliate
            payout.
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
              {listicles.length} ranked lists
            </h2>
          </div>
          <span className="font-mono text-xs text-mute tabular">
            Updated 2026
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
                <span className="chip chip-mute">Best for</span>
                <span className="font-mono text-xs text-mute tabular">
                  2026
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
                  Ranked Fintiex picks for this category.
                </p>
              )}
              <div className="mt-5 flex items-center justify-between">
                <span className="font-medium text-sm group-hover:text-violet">
                  Read picks
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
                How Fintiex ranks credit cards.
              </h2>
              <p className="text-mute leading-relaxed">
                Every list is built to answer a single question. We pick the
                card that solves the use case best, the runner-up that
                addresses a different trade-off, and a third option for a
                meaningfully different profile.
              </p>
            </div>
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                {
                  n: "01",
                  title: "Use-case first",
                  body: "We start with the job (groceries, balance transfer, travel) and build the ranking from there. The card that wins one list often does not win another.",
                },
                {
                  n: "02",
                  title: "Real math, not vibes",
                  body: "We compute the dollars-and-cents value of each card at a representative spending profile. Bonus categories are weighted by realistic usage.",
                },
                {
                  n: "03",
                  title: "Honest trade-offs",
                  body: "If a card has the best rewards but a steep annual fee, we say so. If a low-fee card returns more for the average user, it ranks higher.",
                },
                {
                  n: "04",
                  title: "No affiliate weighting",
                  body: "We do not move a pick because an issuer pays better. Rankings are editorial and update whenever terms change, not when commissions do.",
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
          Listicle FAQ
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
