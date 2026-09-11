import {SavingsReview,savingsReviewMetadata} from '@/components/savings-review';
export const metadata=savingsReviewMetadata('cit','/reviews/cit');
export default function Page(){return <SavingsReview offerKey="cit" path="/reviews/cit"/>;}
