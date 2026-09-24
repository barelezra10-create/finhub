import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CheckedProductReview } from '@/components/checked-product-profile';
import { UnavailablePersonalLoan } from '@/components/unavailable-personal-loan';
import { loadPersonalLoan, loadPersonalLoans } from '@/lib/loans';
type Props = { params: Promise<{slug:string}> };
export async function generateStaticParams(){return loadPersonalLoans().map(l=>({slug:l.slug}));}
export async function generateMetadata({params}:Props):Promise<Metadata>{
  const {slug}=await params; const l=loadPersonalLoan(slug);
  if(!l)return {title:'Personal loan profile'};
  return {title:l.availability==='unavailable'?'Marcus Personal Loans: Status and Servicing':`${l.lender.replace(' (formerly LendingClub)','')} Personal Loan: Terms & Fees`,description:l.availability==='unavailable'?'Servicing information for existing Marcus borrowers and other personal loan options.':`Compare ${l.lender} loan terms, fees and eligibility conditions using dated provider sources. Review the details before requesting an offer.`,alternates:{canonical:`/loans/personal/${slug}`}};
}
export default async function Page({params}:Props){
 const {slug}=await params; const l=loadPersonalLoan(slug); if(!l)notFound();
 if(l.availability==='unavailable')return <UnavailablePersonalLoan loan={l}/>;
 if(!l.checked_profile)notFound();
 return <CheckedProductReview name={l.lender} title={`${l.lender}: personal loan terms and fees`} href={`/loans/personal/${slug}`} parentHref="/loans/personal" parentLabel="Personal loans" providerUrl={l.application_url} checked={l.source_checked} profile={l.checked_profile}/>;
}
