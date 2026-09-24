import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import {CheckedProductReview} from '@/components/checked-product-profile';
import {loadBrokerage,loadBrokerages} from '@/lib/investing';
type Props={params:Promise<{slug:string}>};
export async function generateStaticParams(){return loadBrokerages().map(b=>({slug:b.slug}));}
export async function generateMetadata({params}:Props):Promise<Metadata>{const {slug}=await params;const b=loadBrokerage(slug);if(!b)return {title:'Brokerage profile'};return {title:`${b.broker} Review: Trading Fees & Conditions`,description:`Review ${b.broker} trading fees, pricing exceptions and provider disclosures. Compare the costs that apply to your planned investments.`,alternates:{canonical:`/investing/brokerages/${slug}`}};}
export default async function Page({params}:Props){const {slug}=await params;const b=loadBrokerage(slug);if(!b)notFound();return <CheckedProductReview name={b.broker} title={`${b.broker}: fees and conditions`} href={`/investing/brokerages/${slug}`} parentHref="/investing/brokerages" parentLabel="Brokerages" providerUrl={b.application_url} checked={b.source_checked} profile={b.checked_profile}/>;}
