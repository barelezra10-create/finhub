import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArticleSchema, BreadcrumbListSchema } from '@/components/schemas';
import { EditorialNote } from '@/components/editorial-note';
import { ProductStatus } from '@/components/product-status';
import { loadStudentLoan, loadStudentLoans } from '@/lib/loans';

interface PageProps { params: Promise<{ slug: string }> }
export async function generateStaticParams() { return loadStudentLoans().map(c => ({slug:c.slug})); }
export async function generateMetadata({params}: PageProps): Promise<Metadata> {
  const {slug}=await params; const c=loadStudentLoan(slug);
  if (!c) return {title:'Student loan profile'};
  const href=`/loans/student/${c.slug}`;
  if(c.availability==='unavailable' && c.status_page) return {title:c.status_page.title,description:c.status_page.description,alternates:{canonical:href}};
  return {title:`${c.lender} ${c.product_name}: Facts & Sources`,description:`${c.lender} ${c.product_name}: checked eligibility, repayment conditions and provider sources. Questions to confirm before accepting a student loan offer.`,alternates:{canonical:href}};
}
export default async function Page({params}:PageProps) {
  const {slug}=await params; const c=loadStudentLoan(slug);
  if(!c) notFound();
  const href=`/loans/student/${c.slug}`;
  if(c.availability==='unavailable' && c.status_page) return <ProductStatus info={c.status_page} href={href} parentHref="/loans/student" parentLabel="Student loans" />;
  const profile=c.checked_profile;
  if(!profile) notFound();
  const title=`${c.lender} ${c.product_name}`;
  return <article>
    <ArticleSchema headline={title} description={profile.summary} slug={href} dateModified={c.source_checked} />
    <BreadcrumbListSchema items={[{name:'Home',href:'/'},{name:'Student loans',href:'/loans/student'},{name:c.lender,href}]} />
    <section className="bg-bg border-b border-line"><div className="max-w-(--max-w-page) mx-auto px-6 py-14">
      <nav aria-label="Breadcrumb" className="text-sm text-mute mb-8"><Link href="/loans/student" className="u-link">Student loans</Link> / {c.lender}</nav>
      <span className="chip chip-lime mb-5">{profile.role}</span>
      <h1 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight mb-6 max-w-3xl">{title}</h1>
      <p className="text-lg text-mute leading-relaxed mb-6 max-w-2xl">{profile.summary}</p>
      <div className="flex flex-wrap gap-3"><Link href="#facts" className="pill pill-ink">Read checked facts ↓</Link><a href={c.application_url} className="pill pill-ghost" rel="nofollow noopener noreferrer" target="_blank">Provider website ↗</a></div>
    </div></section>
    <div className="max-w-(--max-w-page) mx-auto px-6 py-10">
      <aside className="card p-6 mb-8 max-w-3xl"><h2 className="font-display font-bold text-xl mb-3">What this check covers</h2><p className="text-mute leading-relaxed">{profile.scope}</p><p className="text-sm text-mute mt-4">Sources checked <time dateTime={c.source_checked}>{c.source_checked}</time>. A source-check date is separate from a document’s publication date.</p></aside>
      <section id="facts" className="py-4 scroll-mt-24"><h2 className="font-display font-bold text-3xl mb-7">Checked facts and conditions</h2><div className="grid lg:grid-cols-3 gap-5">{profile.facts.map(f => <div key={f.label} className="card p-6"><h3 className="font-display font-bold text-xl mb-4">{f.label}</h3><p className="text-mute leading-relaxed mb-5">{f.text}</p><Link href={`#source-${f.source}`} className="u-link text-sm">Source: {profile.sources.find(s=>s.id===f.source)?.label} ↓</Link></div>)}</div></section>
      {c.type === "refinance" && <aside className="card p-6 mt-6 max-w-3xl"><h2 className="font-display font-bold text-xl mb-3">Before refinancing federal loans</h2><p className="text-mute">Private refinancing removes federal repayment and forgiveness protections and cannot be reversed. <a href="https://www.consumerfinance.gov/ask-cfpb/should-i-consolidate-refinance-student-loans-en-561/" className="u-link">Read the CFPB’s explanation</a>.</p></aside>}
      <section className="py-10 max-w-3xl"><h2 className="font-display font-bold text-3xl mb-6">Questions for your actual offer</h2><ul className="space-y-4 list-disc pl-5 text-ink-soft">{profile.questions.map(q=><li key={q}>{q}</li>)}</ul><p className="text-sm text-mute mt-6">Compare fixed and variable APRs separately, using the same amount and term. Review the final loan agreement for fees, total payments and cosigner obligations.</p></section>
      <section className="py-4 max-w-3xl"><h2 className="font-display font-bold text-3xl mb-6">Provider sources</h2><ol className="space-y-5">{profile.sources.map(s=><li id={`source-${s.id}`} key={s.id} className="border-l-2 border-line pl-4 scroll-mt-24"><a href={s.url} className="u-link">{s.label} ↗</a><p className="text-sm text-mute mt-2">Checked {c.source_checked}{s.document_date && <> · Document date: {s.document_date}</>}</p></li>)}</ol></section>
      <EditorialNote checked={c.source_checked} />
      <Link href="/loans/student" className="pill pill-ink mt-4">Compare student loans →</Link>
    </div>
  </article>;
}
