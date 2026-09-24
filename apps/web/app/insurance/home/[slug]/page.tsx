import type { Metadata } from 'next';
import {notFound} from 'next/navigation';
import {CheckedProductReview} from '@/components/checked-product-profile';
import {loadCarrier,loadCarriers} from '@/lib/insurance';
type Props={params:Promise<{slug:string}>};
export async function generateStaticParams(){return loadCarriers('home').map(c=>({slug:c.slug}));}
export async function generateMetadata({params}:Props):Promise<Metadata>{const {slug}=await params;const c=loadCarrier('home',slug);if(!c)return {title:'Insurance profile'};return {title:`${c.carrier} Home insurance: Coverage & Conditions`,description:`Explore ${c.carrier} home insurance coverage, conditions and provider sources. Compare policy details and questions to ask about your quote.`,alternates:{canonical:`/insurance/home/${slug}`}};}
export default async function Page({params}:Props){const {slug}=await params;const c=loadCarrier('home',slug);if(!c?.checked_profile)notFound();return <CheckedProductReview name={c.carrier} title={`${c.carrier} home insurance`} href={`/insurance/home/${slug}`} parentHref="/insurance/home" parentLabel="Home insurance" providerUrl={c.quote_url} checked={c.source_checked} profile={c.checked_profile}/>;}
