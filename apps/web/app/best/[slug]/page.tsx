import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import {
  ArticleSchema,
  BreadcrumbListSchema,
} from "@/components/schemas";
import { VisitBrandCta } from "@/components/visit-brand-cta";
import { fintiexMdxComponents } from "@/components/mdx-components";
import { loadListicles, loadListicle } from "@/lib/listicles";
import { getBrand } from "@/lib/brands";

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
  if (!l) return { title: "List not found | Fintiex" };
  const desc = truncate(
    l.description ?? `${l.title} from the Fintiex editorial team.`,
  );
  return {
    title: `${l.title} | Fintiex`,
    description: desc,
    alternates: { canonical: `/best/${slug}` },
  };
}

// Brand slugs the brand library knows about that might be referenced in MDX bodies.
// We surface a CTA only if the MDX explicitly mentions the brand name.
const CARD_BRAND_SLUGS = [
  "citi-double-cash",
  "chase-sapphire-preferred",
  "wells-active-cash",
  "wells-reflect",
  "citi-diamond-preferred",
  "ink-business-preferred",
  "discover-it-cash-back",
  "amex-gold",
];

function findReferencedBrands(body: string) {
  const lower = body.toLowerCase();
  const seen = new Set<string>();
  const matches: ReturnType<typeof getBrand>[] = [];
  for (const slug of CARD_BRAND_SLUGS) {
    const brand = getBrand(slug);
    if (!brand) continue;
    const name = brand.name.toLowerCase();
    if (lower.includes(name) && !seen.has(slug)) {
      seen.add(slug);
      matches.push(brand);
    }
  }
  return matches.filter((b): b is NonNullable<typeof b> => Boolean(b));
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

  const referencedBrands = findReferencedBrands(listicle.body);

  return (
    <>
      <ArticleSchema
        headline={listicle.title}
        description={listicle.description ?? listicle.title}
        slug={`/best/${slug}`}
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
          <span className="chip chip-lime mb-4">Editorial picks</span>
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
              Fintiex Editorial &middot; Updated 2026
            </span>
            <span className="chip chip-mute">Ranked</span>
          </div>
        </header>

        {/* BODY */}
        <div className="text-[1.0625rem] leading-relaxed text-ink-soft">
          <MDXRemote source={listicle.body} components={fintiexMdxComponents} />
        </div>

        {/* INLINE BRAND CTAS */}
        {referencedBrands.length > 0 ? (
          <section className="border-t border-line pt-10 mt-12 mb-10">
            <div className="font-mono text-xs uppercase tracking-wider text-mute mb-4">
              Cards mentioned in this list
            </div>
            <div className="flex flex-wrap gap-3">
              {referencedBrands.map((brand) => (
                <VisitBrandCta
                  key={brand.slug}
                  brand={brand}
                  variant="ink"
                />
              ))}
            </div>
          </section>
        ) : null}

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
              We rank cards by job, not by overall score. Browse the full set
              of category winners.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/best" className="pill pill-ink">
              All categories &rarr;
            </Link>
            <Link href="/reviews" className="pill pill-ghost">
              Read reviews
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
