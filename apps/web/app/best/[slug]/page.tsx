import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import {
  ArticleSchema,
  BreadcrumbListSchema,
} from "@/components/schemas";
import { EditorialNote } from "@/components/editorial-note";
import { fintiexMdxComponents } from "@/components/mdx-components";
import { loadListicles, loadListicle } from "@/lib/listicles";


export async function generateStaticParams() {
  return loadListicles().map((l) => ({ slug: l.slug }));
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
  const l = loadListicle(slug);
  if (!l) return { title: "List not found" };
  const desc = truncate(
    l.description ?? `${l.title} from the Fintiex editorial team.`,
  );
  return {
    title: `${l.title}`,
    description: desc,
    alternates: { canonical: `/best/${slug}` },
  };
}

export default async function BestEntryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const listicle = loadListicle(slug);
  if (!listicle) notFound();

  const all = loadListicles();
  const idx = all.findIndex((l) => l.slug === slug);
  const prev = idx > 0 ? all[idx - 1] : null;
  const next = idx >= 0 && idx < all.length - 1 ? all[idx + 1] : null;


  return (
    <>
      <ArticleSchema
        headline={listicle.title}
        description={listicle.description ?? listicle.title}
        slug={`/best/${slug}`}
        dateModified={listicle.lastUpdated}
      />
      <BreadcrumbListSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Best Cards", href: "/best" },
          { name: listicle.title, href: `/best/${slug}` },
        ]}
      />

      <article className="max-w-3xl mx-auto px-6 pt-12 pb-20">
        {/* BREADCRUMB */}
        <nav className="font-mono text-xs uppercase tracking-wider text-mute mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="u-link hover:text-ink">
            Home
          </Link>
          <span aria-hidden="true">/</span>
          <Link href="/best" className="u-link hover:text-ink">
            Best Cards
          </Link>
          <span aria-hidden="true">/</span>
          <span className="text-ink">{listicle.title}</span>
        </nav>

        {/* HERO */}
        <header className="mb-10">
          <span className="chip chip-lime mb-4">Card decision guide</span>
          <h1 className="font-display font-extrabold text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] tracking-[-0.03em] mt-4 mb-4">
            {listicle.title}
          </h1>
          {listicle.description ? (
            <p className="text-lg leading-relaxed text-mute max-w-2xl mb-6">
              {listicle.description}
            </p>
          ) : null}
          <div className="flex items-center gap-3 flex-wrap">
            <span className="text-mute text-sm">
              Published by <Link href="/about" className="u-link">Fintiex</Link>
              {listicle.lastUpdated && <> &middot; Guide updated <time dateTime={listicle.lastUpdated}>{listicle.lastUpdated}</time></>}
            </span>
            <span className="chip chip-mute">Worked examples</span>
          </div>
        </header>

        <EditorialNote />
        {listicle.comparisonHref && (
          <aside className="card p-6 mb-8">
            <h2 className="font-display font-bold text-xl mb-2">Compare card terms</h2>
            <p className="text-sm text-mute mb-4">Use this guide to decide what matters, then check source-linked card details. Each profile identifies which facts were checked and when; unconfirmed figures are withheld.</p>
            <Link href={listicle.comparisonHref} className="pill pill-ink">Compare this category &rarr;</Link>
          </aside>
        )}

        {/* BODY */}
        <div className="text-[1.0625rem] leading-relaxed text-ink-soft">
          <MDXRemote source={listicle.body} components={fintiexMdxComponents} />
        </div>

        {/* PREV / NEXT NAV */}
        <nav className="grid grid-cols-1 sm:grid-cols-2 gap-3 border-t border-line pt-8 mt-10">
          {prev ? (
            <Link
              href={`/best/${prev.slug}`}
              className="card p-5 block group"
            >
              <div className="font-mono text-xs uppercase tracking-wider text-mute mb-2">
                &larr; Previous list
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
              href={`/best/${next.slug}`}
              className="card p-5 block group text-right"
            >
              <div className="font-mono text-xs uppercase tracking-wider text-mute mb-2">
                Next list &rarr;
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
              Compare more categories
            </div>
            <h3 className="font-display font-extrabold text-2xl md:text-3xl tracking-tight mb-2">
              Different use case? Different best card.
            </h3>
            <p className="text-ink-soft text-base leading-relaxed">
              Explore fees, repayment plans and rewards trade-offs for
              the way you intend to use a card.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/best" className="pill pill-ink">
              All categories &rarr;
            </Link>
            <Link href="/credit-cards/compare" className="pill pill-ghost">
              Compare cards
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
