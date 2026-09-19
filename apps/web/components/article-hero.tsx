import { ArticleArt } from "@/components/article-art";

interface ArticleHeroProps {
  pillar: string;
  pillarLabel: string;
  title: string;
  description?: string;
  author: string;
  updated?: string | null;
  readTime?: number;
}

export function ArticleHero({ pillar, pillarLabel, title, description, author, updated, readTime }: ArticleHeroProps) {
  return (
    <header className="illustrated-article-hero">
      <div className="illustrated-article-copy">
        <span className="chip chip-violet mb-5">{pillarLabel}</span>
        <h1>{title}</h1>
        {description && <p className="article-description">{description}</p>}
        <div className="flex items-center gap-3 flex-wrap text-sm text-mute mt-6">
          <span>By {author}</span>
          {updated && <><span aria-hidden>·</span><span>Updated {updated}</span></>}
          {readTime ? <><span aria-hidden>·</span><span>{readTime} min read</span></> : null}
        </div>
      </div>
      <ArticleArt topic={pillar} />
    </header>
  );
}
