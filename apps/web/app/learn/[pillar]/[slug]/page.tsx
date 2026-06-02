import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import {
  ArticleSchema,
  BreadcrumbListSchema,
  FAQPageSchema,
  HowToSchema,
} from "@/components/schemas";
import { fintiexMdxComponents } from "@/components/mdx-components";
import {
  PILLAR_META,
  loadAllPillarArticles,
  loadPillarArticle,
  loadPillarArticles,
} from "@/lib/pillars";

export async function generateStaticParams() {
  return loadAllPillarArticles().map((a) => ({
    pillar: a.pillar,
    slug: a.slug,
  }));
}

const CHIP_VARIANTS: Record<string, "lime" | "violet" | "mute" | "ink"> = {
  "credit-card-basics": "lime",
  "choosing-a-card": "violet",
  "maximizing-rewards": "ink",
  "building-credit": "lime",
  "business-credit": "violet",
  mortgages: "violet",
  savings: "lime",
  loans: "ink",
  insurance: "violet",
  investing: "lime",
};

function truncate(text: string, max = 158) {
  if (text.length <= max) return text;
  const cut = text.slice(0, max - 1);
  const space = cut.lastIndexOf(" ");
  return `${cut.slice(0, space > 80 ? space : cut.length)}.`;
}

function formatDate(value?: string): string | null {
  if (!value) return null;
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return null;
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ pillar: string; slug: string }>;
}): Promise<Metadata> {
  const { pillar, slug } = await params;
  const article = loadPillarArticle(pillar, slug);
  if (!article) return { title: "Article not found | Fintiex" };
  const meta = PILLAR_META[pillar];
  const pillarTitle = meta?.title ?? pillar;
  const desc = truncate(
    article.description ??
      `${article.title} from the Fintiex ${pillarTitle} pillar.`,
  );
  return {
    title: `${article.title} | Fintiex`,
    description: desc,
    alternates: { canonical: `/learn/${pillar}/${slug}` },
  };
}

export default async function PillarArticlePage({
  params,
}: {
  params: Promise<{ pillar: string; slug: string }>;
}) {
  const { pillar, slug } = await params;
  const article = loadPillarArticle(pillar, slug);
  if (!article) notFound();

  const meta = PILLAR_META[pillar];
  if (!meta) notFound();

  const chip = CHIP_VARIANTS[pillar] ?? "violet";
  const updated = formatDate(article.updatedAt ?? article.publishedAt);
  const author = article.author ?? "Fintiex Editorial";

  const related = loadPillarArticles(pillar).filter((a) => a.slug !== slug);

  return (
    <>
      <ArticleSchema
        headline={article.title}
        description={article.description ?? article.title}
        slug={`/learn/${pillar}/${slug}`}
        datePublished={article.publishedAt}
        dateModified={article.updatedAt ?? article.publishedAt}
        authorName={author}
      />
      <BreadcrumbListSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Learn", href: "/learn" },
          { name: meta.title, href: `/learn/${pillar}` },
          { name: article.title, href: `/learn/${pillar}/${slug}` },
        ]}
      />
      {article.faq && article.faq.length > 0 && (
        <FAQPageSchema
          items={article.faq.map((f) => ({
            question: f.question,
            answer: f.answer,
          }))}
        />
      )}
      {article.howto && article.howto.steps.length > 0 && (
        <HowToSchema
          name={article.howto.name}
          description={article.howto.description}
          totalTimeIso={article.howto.totalTimeIso}
          steps={article.howto.steps}
        />
      )}

      <article className="max-w-3xl mx-auto px-6 pt-12 pb-16">
        {/* BREADCRUMB */}
        <nav className="font-mono text-xs uppercase tracking-wider text-mute mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="u-link hover:text-ink">
            Home
          </Link>
          <span aria-hidden="true">/</span>
          <Link href="/learn" className="u-link hover:text-ink">
            Learn
          </Link>
          <span aria-hidden="true">/</span>
          <Link href={`/learn/${pillar}`} className="u-link hover:text-ink">
            {meta.title}
          </Link>
          <span aria-hidden="true">/</span>
          <span className="text-ink line-clamp-1">{article.title}</span>
        </nav>

        {/* HERO */}
        <header className="mb-10">
          <span className={`chip chip-${chip} mb-4`}>{meta.title}</span>
          <h1 className="font-display font-extrabold text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] tracking-[-0.03em] mt-4 mb-5">
            {article.title}
          </h1>
          {article.description ? (
            <p className="text-lg leading-relaxed text-mute max-w-2xl mb-6">
              {article.description}
            </p>
          ) : null}
          <div className="flex items-center gap-3 flex-wrap text-sm text-mute">
            <span>By {author}</span>
            {updated ? (
              <>
                <span aria-hidden="true">&middot;</span>
                <span>Updated {updated}</span>
              </>
            ) : null}
            {article.readTime ? (
              <>
                <span aria-hidden="true">&middot;</span>
                <span className="chip chip-mute">{article.readTime} min read</span>
              </>
            ) : null}
          </div>
        </header>

        {/* BODY */}
        <div className="text-[1.0625rem] leading-relaxed text-ink-soft">
          <MDXRemote source={article.body} components={fintiexMdxComponents} />
        </div>

        {/* RELATED IN PILLAR */}
        {related.length > 0 ? (
          <section className="border-t border-line pt-10 mt-12 mb-10">
            <div className="font-mono text-xs uppercase tracking-wider text-mute mb-5">
              Related articles in {meta.title}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/learn/${pillar}/${r.slug}`}
                  className="card p-5 block group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`chip chip-${chip}`}>{meta.title}</span>
                    {r.readTime ? (
                      <span className="font-mono text-xs text-mute tabular">
                        {r.readTime} min
                      </span>
                    ) : null}
                  </div>
                  <div className="font-display font-bold text-base leading-snug tracking-tight group-hover:text-violet">
                    {r.title}
                  </div>
                  {r.description ? (
                    <p className="text-mute text-xs leading-relaxed mt-2 line-clamp-2">
                      {r.description}
                    </p>
                  ) : null}
                </Link>
              ))}
            </div>
          </section>
        ) : null}

        {/* CTA BACK TO PILLAR */}
        <div className="card p-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <div className="font-mono text-xs uppercase tracking-wider text-mute mb-2">
              Keep going
            </div>
            <div className="font-display font-bold text-lg tracking-tight mb-1">
              See every article in {meta.title}.
            </div>
            <p className="text-mute text-sm leading-relaxed">
              {meta.description}
            </p>
          </div>
          <Link
            href={`/learn/${pillar}`}
            className="pill pill-ink flex-shrink-0"
          >
            Back to pillar &rarr;
          </Link>
        </div>
      </article>
    </>
  );
}
