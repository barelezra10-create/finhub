import {SavingsReview,savingsReviewMetadata} from '@/components/savings-review';
export const metadata=savingsReviewMetadata('bask','/reviews/bask');
export default function Page(){return <SavingsReview offerKey="bask" path="/reviews/bask"/>;}
