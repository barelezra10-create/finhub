import {SavingsReview,savingsReviewMetadata} from '@/components/savings-review';
export const metadata=savingsReviewMetadata('discover-savings','/reviews/discover-savings');
export default function Page(){return <SavingsReview offerKey="discover-savings" path="/reviews/discover-savings"/>;}
