import {SavingsReview,savingsReviewMetadata} from '@/components/savings-review';
export const metadata=savingsReviewMetadata('marcus','/reviews/marcus');
export default function Page(){return <SavingsReview offerKey="marcus" path="/reviews/marcus"/>;}
