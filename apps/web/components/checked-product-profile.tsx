import Link from 'next/link';
import { ArticleSchema, BreadcrumbListSchema } from '@/components/schemas';
import { EditorialNote } from '@/components/editorial-note';

export interface CheckedProductProfile {
  role: string;
  summary: string;
  scope: string;
  facts: { label: string; text: string; source: string }[];
  questions: string[];
  sources: { id: string; label: string; url: string; document_date?: string }[];
}
export function CheckedProductReview({name,title,href,parentHref,parentLabel,providerUrl,checked,profile}: {
  name:string; title:string; href:string; parentHref:string; parentLabel:string; providerUrl:string;
  checked?:string; profile:CheckedProductProfile;
}) {
  return <article>
    <ArticleSchema headline={title} description={profile.summary} slug={href} dateModified={checked} />
    <BreadcrumbListSchema items={[{name:'Home',href:'/'},{name:parentLabel,href:parentHref},{name,href}]} />
    <section className="bg-bg border-b border-line"><div className="max-w-(--max-w-page) mx-auto px-6 py-14">
      <nav aria-label="Breadcrumb" className="text-sm text-mute mb-8"><Link href={parentHref} className="u-link">{parentLabel}</Link> / {name}</nav>
      <span className="chip chip-lime mb-5">{profile.role}</span>
      <h1 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight mb-6 max-w-3xl">{title}</h1>
      <p className="text-lg text-mute leading-relaxed mb-6 max-w-2xl">{profile.summary}</p>
      <div className="flex flex-wrap gap-3"><Link href="#facts" className="pill pill-ink">Explore product details ↓</Link><a href={providerUrl} className="pill pill-ghost" rel="nofollow noopener noreferrer" target="_blank">Provider website ↗</a></div>
    </div></section>
    <div className="max-w-(--max-w-page) mx-auto px-6 py-10">
      <aside className="card p-6 mb-8 max-w-3xl"><h2 className="font-display font-bold text-xl mb-3">What this review covers</h2><p className="text-mute leading-relaxed">{profile.scope}</p><p className="text-sm text-mute mt-4">Sources checked <time dateTime={checked}>{checked}</time>. Document dates, when supplied, are shown separately below.</p></aside>
      <section id="facts" className="py-4"><h2 className="font-display font-bold text-3xl mb-7">Product details and conditions</h2><div className="grid md:grid-cols-2 gap-5">{profile.facts.map(f => <div key={f.label} className="card p-6"><h3 className="font-display font-bold text-xl mb-4">{f.label}</h3><p className="text-mute leading-relaxed mb-5">{f.text}</p><a href={`#source-${f.source}`} className="u-link text-sm">{profile.sources.find(s=>s.id===f.source)?.label} ↓</a></div>)}</div></section>
      <section className="py-10 max-w-3xl"><h2 className="font-display font-bold text-3xl mb-6">Before you choose</h2><ul className="space-y-4 list-disc pl-5 text-ink-soft">{profile.questions.map(q=><li key={q}>{q}</li>)}</ul></section>
      <section className="py-4 max-w-3xl"><h2 className="font-display font-bold text-3xl mb-6">Provider sources</h2><ol className="space-y-5">{profile.sources.map(s=><li id={`source-${s.id}`} key={s.id} className="border-l-2 border-line pl-4"><a href={s.url} className="u-link">{s.label} ↗</a><p className="text-sm text-mute mt-2">Checked {checked}{s.document_date && <> · Document date: {s.document_date}</>}</p></li>)}</ol></section>
      <EditorialNote checked={checked} />
      <Link href={parentHref} className="pill pill-ink mt-4">Compare {parentLabel.toLowerCase()} →</Link>
    </div>
  </article>;
}
