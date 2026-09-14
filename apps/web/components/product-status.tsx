import Link from 'next/link';
import { ArticleSchema, BreadcrumbListSchema } from '@/components/schemas';
import { EditorialNote } from '@/components/editorial-note';

export interface ProductStatusInfo {
  title: string;
  description: string;
  checked: string;
  sections: { title: string; text: string }[];
  sources: { label: string; url: string }[];
}

export function ProductStatus({ info, href, parentHref, parentLabel }: { info: ProductStatusInfo; href: string; parentHref: string; parentLabel: string }) {
  return <article className="max-w-3xl mx-auto px-6 py-14">
    <ArticleSchema headline={info.title} description={info.description} slug={href} dateModified={info.checked} />
    <BreadcrumbListSchema items={[{ name: 'Home', href: '/' }, { name: parentLabel, href: parentHref }, { name: info.title, href }]} />
    <nav aria-label="Breadcrumb" className="text-sm text-mute mb-8"><Link href={parentHref} className="u-link">{parentLabel}</Link> / Product status</nav>
    <span className="chip chip-mute mb-5">Not a current application option</span>
    <h1 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight mb-6">{info.title}</h1>
    <p className="text-lg text-mute leading-relaxed">{info.description}</p>
    <EditorialNote checked={info.checked} />
    {info.sections.map(section => <section key={section.title} className="my-9"><h2 className="font-display font-bold text-2xl mb-4">{section.title}</h2><p className="leading-relaxed">{section.text}</p></section>)}
    <section className="my-9"><h2 className="font-display font-bold text-2xl mb-4">Sources and account help</h2><ul className="space-y-4">{info.sources.map(source => <li key={source.url}><a href={source.url} className="u-link">{source.label} ↗</a></li>)}</ul></section>
    <Link href={parentHref} className="pill pill-ink">Explore {parentLabel.toLowerCase()} →</Link>
  </article>;
}
