import Link from 'next/link';
import type { Metadata } from 'next';
import { ArticleSchema, BreadcrumbListSchema } from '@/components/schemas';
import { EditorialNote } from '@/components/editorial-note';
import { loadCarriers } from '@/lib/insurance';

const updated = '2026-09-14';
export const metadata: Metadata = {
  title: 'Compare Life Insurance: Policies, Quotes & Provider Profiles',
  description: 'Compare life insurance policy terms, quote assumptions and insurer details. Explore provider profiles and Haven Life policyholder status information.',
  alternates: { canonical: '/insurance/life' },
};
const questions = [
  ['Coverage and duration', 'What death benefit is payable, for how long, and under which exclusions? Compare equivalent coverage amounts and terms.'],
  ['Premium guarantees', 'Is the premium guaranteed for the full period? Request the renewal schedule and the cost of any riders.'],
  ['Underwriting', 'Is the price an estimate or an approved offer? Ask what health evidence is required and whether the terms can change after review.'],
  ['Issuing insurer', 'Which legal insurance company issues the contract? Check its authorization in your state and dated financial-strength information.'],
  ['Cash value and surrender', 'For cash-value policies, separate guaranteed values from projections and ask about surrender charges and policy-loan effects.'],
  ['Existing coverage', 'Compare any replacement with the policy you already own. Ask about costs and new conditions before making a change.'],
];
export default function Page() {
  const providers = loadCarriers('life').filter(c => c.availability !== 'unavailable').sort((a,b) => a.carrier.localeCompare(b.carrier));
  return <article>
    <ArticleSchema headline="Compare life insurance" description="A practical checklist for comparing policy quotes and exploring provider profiles." slug="/insurance/life" dateModified={updated} />
    <BreadcrumbListSchema items={[{name:'Home',href:'/'},{name:'Insurance',href:'/insurance'},{name:'Life insurance',href:'/insurance/life'}]} />
    <section className="bg-bg border-b border-line"><div className="max-w-(--max-w-page) mx-auto px-6 pt-16 pb-14">
      <nav aria-label="Breadcrumb" className="text-sm text-mute mb-8"><Link href="/insurance" className="u-link">Insurance</Link> / Life insurance</nav>
      <span className="chip chip-lime mb-6">Make the policy terms comparable</span>
      <h1 className="font-display font-extrabold text-4xl md:text-6xl tracking-tight mb-6 max-w-3xl">Compare life insurance.</h1>
      <p className="text-lg text-mute leading-relaxed max-w-2xl mb-6">A useful comparison starts with your coverage needs and the actual policy offer. Use these questions to evaluate quotes, then explore the provider profiles below.</p>
      <p className="text-sm text-mute mb-6">Page revised <time dateTime={updated}>{updated}</time></p>
      <div className="flex flex-wrap gap-3"><Link href="#comparison" className="pill pill-ink">Compare policy terms ↓</Link><Link href="#providers" className="pill pill-ghost">Explore provider profiles</Link></div>
    </div></section>
    <section id="comparison" className="max-w-(--max-w-page) mx-auto px-6 py-14">
      <h2 className="font-display font-bold text-3xl mb-6">Questions to ask about each quote</h2>
      <div className="grid md:grid-cols-2 gap-5">{questions.map(([title,text]) => <div key={title} className="card p-6"><h3 className="font-display font-bold text-xl mb-3">{title}</h3><p className="text-mute leading-relaxed">{text}</p></div>)}</div>
      <p className="text-sm text-mute mt-6">Based on the NAIC’s <a className="u-link" href="https://content.naic.org/article/consumer-insight-want-purchase-life-insurance-here-are-tips-help-you-through-process">policy-shopping guidance</a> and <a className="u-link" href="https://content.naic.org/article/consumer-insight-what-type-life-insurance-right-you">term and cash-value overview</a>, checked September 14, 2026.</p>
    </section>
    <section className="bg-bg-soft border-y border-line"><div className="max-w-(--max-w-page) mx-auto px-6 py-14">
      <h2 className="font-display font-bold text-3xl mb-6">Term and cash-value coverage</h2>
      <div className="grid md:grid-cols-2 gap-6"><div className="card p-6"><h3 className="font-display font-bold text-xl mb-3">Term life</h3><p className="text-mute leading-relaxed">Covers a specified period. Ask how long premiums are guaranteed and what renewal or conversion options apply when that period ends.</p></div><div className="card p-6"><h3 className="font-display font-bold text-xl mb-3">Cash-value life</h3><p className="text-mute leading-relaxed">Includes whole, universal and variable life products. These combine coverage with cash-value features; examine the guarantees, ongoing costs and conditions needed to keep coverage in force.</p></div></div>
    </div></section>
    <section id="providers" className="max-w-(--max-w-page) mx-auto px-6 py-14">
      <h2 className="font-display font-bold text-3xl mb-4">Provider profiles</h2>
      <p className="text-mute leading-relaxed max-w-3xl mb-7">These {providers.length} existing profiles are listed alphabetically. We have removed the numerical scores and unsupported best-provider rankings. Detailed product terms in the legacy profiles still need a fresh provider check; no current price or approval is promised here.</p>
      <div className="grid md:grid-cols-2 gap-5">{providers.map(c => <div key={c.slug} className="card p-6"><h3 className="font-display font-bold text-xl mb-3">{c.carrier}</h3><p className="text-sm text-mute mb-5">Product details awaiting verification.</p><div className="flex flex-wrap gap-3"><Link href={`/insurance/life/${c.slug}`} className="u-link">Read profile →</Link><a href={c.quote_url} className="u-link" rel="nofollow noopener noreferrer" target="_blank">Provider website ↗</a></div></div>)}</div>
      <aside className="card p-6 mt-6"><h3 className="font-display font-bold text-xl mb-3">Looking for Haven Life?</h3><p className="text-mute mb-4">Haven is no longer included as a new application option. Its page now explains the status and directs existing policyholders to MassMutual’s account portal.</p><Link href="/insurance/life/haven-life" className="u-link">Haven Life status and policyholder help →</Link></aside>
      <EditorialNote />
    </section>
  </article>;
}
