import {SavingsReview,savingsReviewMetadata} from '@/components/savings-review';
export const metadata=savingsReviewMetadata('amex-savings','/reviews/amex-savings');
export default function Page(){return <SavingsReview offerKey="amex-savings" path="/reviews/amex-savings"/>;}
