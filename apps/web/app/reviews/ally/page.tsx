import {SavingsReview,savingsReviewMetadata} from '@/components/savings-review';
export const metadata=savingsReviewMetadata('ally','/reviews/ally');
export default function Page(){return <SavingsReview offerKey="ally" path="/reviews/ally"/>;}
