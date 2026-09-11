import {SavingsReview,savingsReviewMetadata} from '@/components/savings-review';
export const metadata=savingsReviewMetadata('sofi','/reviews/sofi');
export default function Page(){return <SavingsReview offerKey="sofi" path="/reviews/sofi"/>;}
