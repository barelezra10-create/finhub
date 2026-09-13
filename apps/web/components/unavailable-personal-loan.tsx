import Link from "next/link";
import { ArticleSchema, BreadcrumbListSchema } from "@/components/schemas";
import { EditorialNote } from "@/components/editorial-note";
import type { PersonalLoan } from "@/lib/loans";

export function UnavailablePersonalLoan({ loan }: { loan: PersonalLoan }) {
  const href = `/loans/personal/${loan.slug}`;
  const title = "Marcus Personal Loans: Status and Servicing";
  return (
    <article className="max-w-3xl mx-auto px-6 py-14">
      <ArticleSchema headline={title} description="Servicing information for existing Marcus borrowers and next steps when comparing loan options." slug={href} dateModified={loan.source_checked} />
      <BreadcrumbListSchema items={[{ name: "Home", href: "/" }, { name: "Personal loans", href: "/loans/personal" }, { name: "Marcus loan status", href }]} />
      <nav aria-label="Breadcrumb" className="text-sm text-mute mb-8"><Link className="u-link" href="/loans/personal">Personal loans</Link> / Marcus status</nav>
      <span className="chip chip-mute mb-5">Not a current application option</span>
      <h1 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight mb-6">{title}</h1>
      <p className="text-lg text-mute leading-relaxed">Fintiex does not list Marcus as a current personal loan application option. Older rates and application instructions on this page have been removed.</p>
      <EditorialNote checked={loan.source_checked} />
      <section className="my-9">
        <h2 className="font-display font-bold text-2xl mb-4">Already have a Marcus loan?</h2>
        <p className="leading-relaxed mb-4">Marcus’s official FAQ describes the transfer of personal loan servicing to Systems &amp; Services Technologies (SST), effective December 11, 2023. It says the transfer did not change the loan’s interest rate or payment due date.</p>
        <p className="leading-relaxed mb-4">Use your latest account notices to confirm your current servicer and payment instructions. The transfer information concerns existing accounts and is not a new loan offer.</p>
        <a href={loan.source_url} className="u-link">Read the official Marcus servicing FAQ &rarr;</a>
      </section>
      <section className="my-9">
        <h2 className="font-display font-bold text-2xl mb-4">Looking for a new personal loan?</h2>
        <p className="leading-relaxed mb-5">Compare the APR, fees, net funds received and total scheduled payments in actual lender offers. Check product availability and eligibility directly with the lender.</p>
        <div className="flex flex-wrap gap-3"><Link className="pill pill-ink" href="/loans/personal">Compare personal loans</Link><Link className="pill pill-ghost" href="/calculators/personal-loan-payoff">Model repayments</Link></div>
      </section>
      <p className="text-sm text-mute">Looking for savings instead? See our <Link className="u-link" href="/reviews/marcus">Marcus savings review</Link>; deposit accounts are a separate product.</p>
    </article>
  );
}
