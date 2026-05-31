import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbListSchema, FAQPageSchema } from "@/components/schemas";
import { loadGlossary } from "@/lib/glossary";

export const metadata: Metadata = {
  title: "Finance Glossary: 30 Money Terms Explained | Fintiex",
  description:
    "Plain-English definitions for 30 personal finance terms, from APR and APY to FICO scores and grace periods. A-Z index with worked examples and cross-links.",
  alternates: { canonical: "/glossary" },
};

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const FAQ_ITEMS = [
  {
    question: "What is the Fintiex finance glossary?",
    answer:
      "A curated set of 30 personal finance and credit card definitions written for real people, not finance majors. Each term ships with a plain-English explanation, a worked example where useful, and cross-links to related entries and guides.",
  },
  {
    question: "How are the terms chosen?",
    answer:
      "We focus on the words you actually run into when you apply for a credit card, open a savings account, or read a loan disclosure. APR, APY, balance transfer, FICO, credit utilization, grace period, statement credit, and similar high-traffic terms come first.",
  },
  {
    question: "How current are the definitions?",
    answer:
      "All entries are reviewed by the Fintiex editorial team and refreshed on a rolling basis. Each definition lists a published or updated date in its frontmatter and is rewritten whenever the underlying rule changes (for example, when CARD Act or CFPB guidance updates).",
  },
  {
    question: "Can I link to a single glossary entry from my own site?",
    answer:
      "Yes. Every term has a clean, stable URL at /glossary/[slug]. Direct linking is welcome and we keep the slugs stable so your references will not rot.",
  },
];

export default function GlossaryHubPage() {
  const entries = loadGlossary();
  const grouped: Record<string, typeof entries> = {};
  for (const e of entries) {
    const letter = e.title[0]?.toUpperCase() ?? "#";
    const key = /[A-Z]/.test(letter) ? letter : "#";
    if (!grouped[key]) grouped[key] = [];
    grouped[key].push(e);
  }
  const activeLetters = ALPHABET.filter((l) => grouped[l] && grouped[l].length > 0);

  return (
    <>
      <BreadcrumbListSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Glossary", href: "/glossary" },
        ]}
      />
      <FAQPageSchema items={FAQ_ITEMS} />

      {/* HERO */}
      <section className="relative overflow-hidden bg-bg border-b border-line">
        <div className="hero-blob hero-blob-1" aria-hidden="true" />
        <div className="hero-blob hero-blob-2" aria-hidden="true" />
        <div className="relative max-w-(--max-w-page) mx-auto px-6 pt-20 pb-16">
          <span className="chip chip-lime mb-6">Reference</span>
          <h1 className="font-display font-extrabold text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[1.03] tracking-[-0.03em] mb-6 max-w-3xl">
            Finance glossary.
          </h1>
          <p className="text-lg md:text-xl text-mute leading-relaxed max-w-2xl mb-8">
            {entries.length} essential personal finance and credit card terms,
            defined in plain English. Each entry skips the jargon, walks through
            the mechanics, and shows the math when it matters.
          </p>
          <div className="flex items-center gap-3 flex-wrap">
            <span className="font-mono text-xs uppercase tracking-wider text-mute">
              Jump to:
            </span>
            {activeLetters.map((letter) => (
              <a
                key={letter}
                href={`#letter-${letter}`}
                className="pill pill-ghost text-xs"
              >
                {letter}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* A-Z LIST */}
      <section className="max-w-(--max-w-page) mx-auto px-6 py-16">
        {activeLetters.map((letter) => {
          const letterEntries = grouped[letter] ?? [];
          return (
          <div key={letter} id={`letter-${letter}`} className="mb-14 scroll-mt-28">
            <div className="flex items-center gap-4 mb-6">
              <span className="font-display font-extrabold text-3xl tracking-tight text-ink">
                {letter}
              </span>
              <span className="flex-1 h-px bg-line" />
              <span className="font-mono text-xs uppercase tracking-wider text-mute">
                {letterEntries.length}{" "}
                {letterEntries.length === 1 ? "term" : "terms"}
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {letterEntries.map((entry) => (
                <Link
                  key={entry.slug}
                  href={`/glossary/${entry.slug}`}
                  className="card p-5 block group"
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="font-display font-bold text-base leading-snug tracking-tight">
                      {entry.title}
                    </h3>
                    <span className="text-mute text-base group-hover:text-ink group-hover:translate-x-1 transition-all">
                      &rarr;
                    </span>
                  </div>
                  {entry.description ? (
                    <p className="text-mute text-sm leading-relaxed line-clamp-3">
                      {entry.description}
                    </p>
                  ) : null}
                </Link>
              ))}
            </div>
          </div>
          );
        })}
      </section>

      {/* WHY A GLOSSARY MATTERS */}
      <section className="border-t border-line bg-bg-soft/60">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card p-7">
              <div className="font-mono text-xs uppercase tracking-wider text-mute mb-3">
                01
              </div>
              <h3 className="font-display font-bold text-lg tracking-tight mb-2">
                Built for fast answers
              </h3>
              <p className="text-mute text-sm leading-relaxed">
                Definitions open with one sentence you can read in five seconds,
                then go deeper if you need the full picture.
              </p>
            </div>
            <div className="card p-7">
              <div className="font-mono text-xs uppercase tracking-wider text-mute mb-3">
                02
              </div>
              <h3 className="font-display font-bold text-lg tracking-tight mb-2">
                Worked examples, not just theory
              </h3>
              <p className="text-mute text-sm leading-relaxed">
                Where dollars matter, we show dollars. APR on $1,000 over a
                year. PMI on a $400K loan. Real numbers, not formulas.
              </p>
            </div>
            <div className="card p-7">
              <div className="font-mono text-xs uppercase tracking-wider text-mute mb-3">
                03
              </div>
              <h3 className="font-display font-bold text-lg tracking-tight mb-2">
                Cross-linked, not orphaned
              </h3>
              <p className="text-mute text-sm leading-relaxed">
                Each entry links to related terms and the longer guides on
                Fintiex Learn so you can move from definition to deep dive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-(--max-w-page) mx-auto px-6 py-16">
        <h2 className="font-display font-extrabold text-3xl tracking-tight mb-10">
          Glossary FAQ
        </h2>
        <div className="space-y-4">
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
              Keep learning
            </div>
            <h3 className="font-display font-extrabold text-2xl md:text-3xl tracking-tight mb-2">
              From a definition to a full guide.
            </h3>
            <p className="text-ink-soft text-base leading-relaxed">
              The glossary covers the what. Fintiex Learn covers the why and
              the how, with calculators baked in.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/learn" className="pill pill-ink">
              Explore guides &rarr;
            </Link>
            <Link href="/calculators" className="pill pill-ghost">
              Open calculators
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
