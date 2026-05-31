import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import {
  ArticleSchema,
  BreadcrumbListSchema,
} from "@/components/schemas";
import { fintiexMdxComponents } from "@/components/mdx-components";
import { loadGlossary, loadGlossaryEntry } from "@/lib/glossary";

export async function generateStaticParams() {
  return loadGlossary().map((g) => ({ slug: g.slug }));
}

function truncate(text: string, max = 158) {
  if (text.length <= max) return text;
  const cut = text.slice(0, max - 1);
  const space = cut.lastIndexOf(" ");
  return `${cut.slice(0, space > 80 ? space : cut.length)}.`;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const entry = loadGlossaryEntry(slug);
  if (!entry) return { title: "Term not found | Fintiex" };
  const desc = truncate(
    entry.description ??
      `Plain-English definition of ${entry.title} from the Fintiex finance glossary.`,
  );
  return {
    title: `${entry.title}: Definition | Fintiex Glossary`,
    description: desc,
    alternates: { canonical: `/glossary/${slug}` },
  };
}

export default async function GlossaryEntryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = loadGlossaryEntry(slug);
  if (!entry) notFound();

  const all = loadGlossary();
  const idx = all.findIndex((g) => g.slug === slug);
  const prev = idx > 0 ? all[idx - 1] : null;
  const next = idx >= 0 && idx < all.length - 1 ? all[idx + 1] : null;

  const related =
    entry.related
      ?.map((r) => all.find((g) => g.slug === r))
      .filter((g): g is (typeof all)[number] => Boolean(g)) ?? [];

  // Pull the first paragraph (before the first ## heading) as the lede.
  const beforeFirstHeading = entry.body.split(/\n##\s/)[0]?.trim() ?? "";
  const firstParagraph =
    beforeFirstHeading
      .split(/\n\s*\n/)
      .map((s) => s.trim())
      .find((s) => s.length > 0 && !s.startsWith("#")) ?? "";

  return (
    <>
      <ArticleSchema
        headline={entry.title}
        description={entry.description ?? `Definition of ${entry.title}.`}
        slug={`/glossary/${slug}`}
      />
      <BreadcrumbListSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Glossary", href: "/glossary" },
          { name: entry.title, href: `/glossary/${slug}` },
        ]}
      />

      <article className="max-w-3xl mx-auto px-6 pt-12 pb-20">
        {/* BREADCRUMB */}
        <nav className="font-mono text-xs uppercase tracking-wider text-mute mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="u-link hover:text-ink">
            Home
          </Link>
          <span aria-hidden="true">/</span>
          <Link href="/glossary" className="u-link hover:text-ink">
            Glossary
          </Link>
          <span aria-hidden="true">/</span>
          <span className="text-ink">{entry.title}</span>
        </nav>

        {/* HERO */}
        <header className="mb-10">
          <span className="chip chip-violet mb-4">Glossary term</span>
          <h1 className="font-display font-extrabold text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] tracking-[-0.03em] mt-4 mb-4">
            {entry.title}
          </h1>
          {entry.description ? (
            <p className="text-lg leading-relaxed text-mute max-w-2xl">
              {entry.description}
            </p>
          ) : null}
        </header>

        {/* DEFINITION CALLOUT */}
        {firstParagraph ? (
          <aside className="card p-7 mb-12 bg-bg-soft/60">
            <div className="font-mono text-xs uppercase tracking-wider text-mute mb-3">
              Definition
            </div>
            <p className="text-xl md:text-2xl font-display font-semibold leading-snug tracking-tight text-ink">
              {firstParagraph}
            </p>
          </aside>
        ) : null}

        {/* BODY */}
        <div className="text-[1.0625rem] leading-relaxed text-ink-soft">
          <MDXRemote source={entry.body} components={fintiexMdxComponents} />
        </div>

        {/* RELATED TERMS */}
        {related.length > 0 ? (
          <section className="border-t border-line pt-10 mt-12 mb-10">
            <div className="font-mono text-xs uppercase tracking-wider text-mute mb-5">
              Related terms
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/glossary/${r.slug}`}
                  className="card p-4 block group"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-display font-bold text-sm tracking-tight">
                      {r.title}
                    </span>
                    <span className="text-mute group-hover:text-ink group-hover:translate-x-1 transition-all">
                      &rarr;
                    </span>
                  </div>
                  {r.description ? (
                    <p className="text-mute text-xs leading-relaxed mt-1 line-clamp-2">
                      {r.description}
                    </p>
                  ) : null}
                </Link>
              ))}
            </div>
          </section>
        ) : null}

        {/* PREV / NEXT NAV */}
        <nav className="grid grid-cols-1 sm:grid-cols-2 gap-3 border-t border-line pt-8 mt-10">
          {prev ? (
            <Link
              href={`/glossary/${prev.slug}`}
              className="card p-5 block group"
            >
              <div className="font-mono text-xs uppercase tracking-wider text-mute mb-2">
                &larr; Previous
              </div>
              <div className="font-display font-bold text-base tracking-tight group-hover:text-violet">
                {prev.title}
              </div>
            </Link>
          ) : (
            <span aria-hidden="true" />
          )}
          {next ? (
            <Link
              href={`/glossary/${next.slug}`}
              className="card p-5 block group text-right"
            >
              <div className="font-mono text-xs uppercase tracking-wider text-mute mb-2">
                Next &rarr;
              </div>
              <div className="font-display font-bold text-base tracking-tight group-hover:text-violet">
                {next.title}
              </div>
            </Link>
          ) : (
            <span aria-hidden="true" />
          )}
        </nav>
      </article>

      {/* CTA STRIP */}
      <section className="bg-lime border-y border-ink">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-xl">
            <div className="font-mono text-xs uppercase tracking-wider mb-3">
              Browse more terms
            </div>
            <h3 className="font-display font-extrabold text-2xl md:text-3xl tracking-tight mb-2">
              The full A-Z is one click away.
            </h3>
            <p className="text-ink-soft text-base leading-relaxed">
              30 personal finance and credit card terms, defined in plain
              English with worked examples.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/glossary" className="pill pill-ink">
              Back to glossary &rarr;
            </Link>
            <Link href="/learn" className="pill pill-ghost">
              Read the guides
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
