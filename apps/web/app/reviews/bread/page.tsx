import {SavingsReview,savingsReviewMetadata} from '@/components/savings-review';
export const metadata=savingsReviewMetadata('bread','/reviews/bread');
export default function Page(){return <SavingsReview offerKey="bread" path="/reviews/bread"/>;}
