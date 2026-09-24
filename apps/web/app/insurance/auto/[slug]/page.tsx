import type { Metadata } from 'next';
import {notFound} from 'next/navigation';
import {CheckedProductReview} from '@/components/checked-product-profile';
import {loadCarrier,loadCarriers} from '@/lib/insurance';
type Props={params:Promise<{slug:string}>};
export async function generateStaticParams(){return loadCarriers('auto').map(c=>({slug:c.slug}));}
export async function generateMetadata({params}:Props):Promise<Metadata>{const {slug}=await params;const c=loadCarrier('auto',slug);if(!c)return {title:'Insurance profile'};return {title:`${c.carrier} Auto insurance: Coverage & Conditions`,description:`Explore ${c.carrier} auto insurance coverage, conditions and provider sources. Compare policy details and questions to ask about your quote.`,alternates:{canonical:`/insurance/auto/${slug}`}};}
export default async function Page({params}:Props){const {slug}=await params;const c=loadCarrier('auto',slug);if(!c?.checked_profile)notFound();return <CheckedProductReview name={c.carrier} title={`${c.carrier} auto insurance`} href={`/insurance/auto/${slug}`} parentHref="/insurance/auto" parentLabel="Auto insurance" providerUrl={c.quote_url} checked={c.source_checked} profile={c.checked_profile}/>;}
