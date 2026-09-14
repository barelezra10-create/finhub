import Link from 'next/link';
import type { Metadata } from 'next';
import { ArticleSchema, BreadcrumbListSchema } from '@/components/schemas';
import { EditorialNote } from '@/components/editorial-note';
import { loadStudentLoans } from '@/lib/loans';

const updated = '2026-09-14';
const federalSource = 'https://www.consumerfinance.gov/ask-cfpb/should-i-choose-federal-student-loans-or-private-student-loans-en-567/';
const refinanceSource = 'https://www.consumerfinance.gov/ask-cfpb/should-i-consolidate-refinance-student-loans-en-561/';
export const metadata: Metadata = {
  title: 'Compare Student Loans & Refinancing: Terms and Provider Profiles',
  description: 'Compare private student loans and refinancing by eligibility, repayment, cosigner rules and lender role. Explore nine profiles with dated provider sources.',
  alternates: { canonical: '/loans/student' },
};
const questions = [
  ['APR and discounts', 'Request fixed and variable APRs separately for the same amount and term. Which discounts are included, and what happens if you stop qualifying for them?'],
  ['Payments and total cost', 'What is due during school and after graduation? Ask when unpaid interest is added to principal, and compare total payments alongside the monthly bill.'],
  ['Eligibility and amount', 'Does your school, degree, enrollment status and state qualify? What amount can you borrow after school certification and other aid?'],
  ['Cosigner obligations', 'Is a cosigner required? If release is available, ask about qualifying payments, graduation, income and credit review. Get the conditions in writing.'],
  ['Fees and hardship', 'Check origination, late and returned-payment fees. What assistance is available if you cannot pay, and how does it affect interest and cosigner release?'],
  ['Who makes the loan', 'Is the website a lender or a marketplace? Identify the legal lender, servicer and final credit-check steps before completing an application.'],
];
export default function Page() {
  const loans = loadStudentLoans().filter(l => l.availability !== 'unavailable');
  return <article>
    <ArticleSchema headline="Compare student loans and refinancing" description="Compare actual loan terms and explore source-linked student loan profiles." slug="/loans/student" dateModified={updated} />
    <BreadcrumbListSchema items={[{name:'Home',href:'/'},{name:'Loans',href:'/loans'},{name:'Student loans',href:'/loans/student'}]} />
    <section className="bg-bg border-b border-line"><div className="max-w-(--max-w-page) mx-auto px-6 pt-16 pb-14">
      <nav aria-label="Breadcrumb" className="text-sm text-mute mb-8"><Link href="/loans" className="u-link">Loans</Link> / Student loans</nav>
      <span className="chip chip-lime mb-6">Borrowing for school or replacing existing debt?</span>
      <h1 className="font-display font-extrabold text-4xl md:text-6xl tracking-tight mb-6 max-w-3xl">Compare student loans and refinancing.</h1>
      <p className="text-lg text-mute leading-relaxed max-w-2xl mb-6">Start with the type of borrowing you need. Then compare your actual offers using the questions below and explore profiles with checked provider sources.</p>
      <p className="text-sm text-mute mb-6">Page revised <time dateTime={updated}>{updated}</time></p>
      <div className="flex flex-wrap gap-3"><Link href="#private" className="pill pill-ink">New private loans ↓</Link><Link href="#refinance" className="pill pill-ghost">Refinancing ↓</Link><Link href="/calculators/student-loan-payoff" className="pill pill-ghost">Estimate payoff →</Link></div>
    </div></section>
    <section className="max-w-(--max-w-page) mx-auto px-6 py-12"><div className="grid md:grid-cols-2 gap-6">
      <div className="card p-6"><h2 className="font-display font-bold text-2xl mb-4">New borrowing for school</h2><p className="text-mute leading-relaxed">Review your aid package and federal loan options with your school’s financial aid office before choosing a private loan. Federal loans generally offer more flexible repayment protections. <a className="u-link" href={federalSource}>CFPB borrowing guidance ↗</a></p></div>
      <div className="card p-6"><h2 className="font-display font-bold text-2xl mb-4">Refinancing existing loans</h2><p className="text-mute leading-relaxed">Private refinancing replaces existing debt with a new private loan. Refinancing federal loans removes federal repayment and forgiveness protections and cannot be reversed. Federal Direct Consolidation is a separate process. <a className="u-link" href={refinanceSource}>CFPB refinancing guidance ↗</a></p></div>
    </div><p className="text-sm text-mute mt-5">CFPB sources checked September 14, 2026; their review dates are May 14 and December 3, 2024. Confirm current federal program eligibility with <a className="u-link" href="https://studentaid.gov/">Federal Student Aid</a> and your servicer.</p></section>
    <section id="comparison" className="scroll-mt-24 bg-bg-soft border-y border-line"><div className="max-w-(--max-w-page) mx-auto px-6 py-12">
      <h2 className="font-display font-bold text-3xl mb-7">Compare the actual offer</h2><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">{questions.map(([title,text])=><div key={title} className="card p-6"><h3 className="font-display font-bold text-xl mb-3">{title}</h3><p className="text-mute leading-relaxed">{text}</p></div>)}</div>
      <p className="text-sm text-mute mt-6">A smaller monthly payment can come with a longer term and higher total cost. Use the <Link href="/calculators/student-loan-payoff" className="u-link">student loan payoff calculator</Link> to explore your own inputs, then check the lender’s repayment schedule.</p>
    </div></section>
    <div className="max-w-(--max-w-page) mx-auto px-6 py-12">
      <p className="text-mute leading-relaxed max-w-3xl mb-8">The profiles below are alphabetical within each borrowing category. Each identifies the provider’s role and the scope of its source check. They are not a ranking or a complete market survey; use the provider’s current application for a personal offer.</p>
      {(['private','refinance'] as const).map(type=><section id={type} key={type} className="pb-12 scroll-mt-24"><h2 className="font-display font-bold text-3xl mb-7">{type==='private'?'Private loans for school':'Student loan refinancing'}</h2><div className="grid md:grid-cols-2 gap-5">{loans.filter(l=>l.type===type).map(l=><div className="card p-6" key={l.slug}><h3 className="font-display font-bold text-xl mb-3">{l.lender} {l.product_name}</h3><p className="text-sm text-mute mb-3">{l.checked_profile?.role} · Sources checked {l.source_checked}</p><p className="text-mute leading-relaxed mb-5">{l.checked_profile?.summary}</p><Link href={`/loans/student/${l.slug}`} className="u-link">Read facts and conditions →</Link></div>)}</div></section>)}
      <aside className="card p-6"><h2 className="font-display font-bold text-xl mb-3">Looking for Discover student loans?</h2><p className="text-mute mb-4">Discover is no longer a new student loan option. Existing borrowers can find status and servicing information on its dedicated page.</p><Link href="/loans/student/discover-student-loans" className="u-link">Discover status and servicing help →</Link></aside>
      <EditorialNote checked={updated} />
    </div>
  </article>;
}
