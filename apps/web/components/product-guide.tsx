import Link from 'next/link';
import {ArticleSchema, BreadcrumbListSchema} from '@/components/schemas';
export interface ProductGuideProps {
 title:string; intro:string; href:string; label:string;
 sections:{title:string; text:string; href?:string; link?:string}[];
 links:{href:string;label:string;text:string}[];
 sources?:{href:string;label:string}[];
 children?:React.ReactNode;
}
export function ProductGuide({title,intro,href,label,sections,links,sources,children}:ProductGuideProps){return <article>
 <ArticleSchema headline={title} description={intro} slug={href} dateModified="2026-09-24"/>
 <BreadcrumbListSchema items={[{name:'Home',href:'/'},{name:label,href}]}/>
 <section className="relative overflow-hidden bg-bg border-b border-line"><div className="hero-blob hero-blob-1"/><div className="hero-blob hero-blob-2"/><div className="relative max-w-(--max-w-page) mx-auto px-6 py-16 md:py-20"><span className="chip chip-violet mb-6">{label} · Make an informed choice</span><h1 className="font-display font-extrabold text-4xl md:text-6xl tracking-tight max-w-4xl mb-6">{title}</h1><p className="text-lg md:text-xl text-mute leading-relaxed max-w-3xl mb-8">{intro}</p><div className="flex flex-wrap gap-3">{links.slice(0,2).map((l,i)=><Link key={l.href} className={i===0?'pill pill-ink':'pill pill-ghost'} href={l.href}>{l.label} →</Link>)}</div></div></section>
 <div className="max-w-(--max-w-page) mx-auto px-6 py-12"><section><h2 className="font-display font-bold text-3xl mb-7">Start with the details that matter</h2><div className="grid md:grid-cols-2 gap-6">{sections.map((s,i)=><div className="card p-7" key={s.title}><span className="chip chip-lime mb-4">0{i+1}</span><h3 className="font-display font-bold text-2xl mb-4">{s.title}</h3><p className="text-mute leading-relaxed">{s.text}</p>{s.href&&<Link className="u-link inline-block mt-5" href={s.href}>{s.link} →</Link>}</div>)}</div></section>
 {children}
 <section className="py-12"><h2 className="font-display font-bold text-3xl mb-7">Explore tools and comparisons</h2><div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">{links.map(l=><Link href={l.href} key={l.href} className="card p-6 block"><h3 className="font-display font-bold text-xl mb-3">{l.label} →</h3><p className="text-sm text-mute leading-relaxed">{l.text}</p></Link>)}</div></section>
 {sources&&<section className="border-t border-line pt-8"><h2 className="font-display font-bold text-xl mb-4">Sources and further reading</h2><ul className="space-y-3">{sources.map(s=><li key={s.href}><a className="u-link" href={s.href}>{s.label} ↗</a></li>)}</ul></section>}
 <p className="text-sm text-mute mt-8">Updated September 24, 2026. Product profiles show their own source-check dates and scope. <Link className="u-link" href="/editorial-policy">Our editorial policy</Link>.</p>
 </div></article>}
