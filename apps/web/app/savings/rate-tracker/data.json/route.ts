import { savingsObservations } from '@/lib/savings-rates';
export const dynamic = 'force-static';
export function GET() {
  return Response.json(savingsObservations, { headers: { 'Content-Disposition': 'attachment; filename="fintiex-savings-observations.json"', 'X-Robots-Tag': 'noindex', 'X-Content-Type-Options': 'nosniff' } });
}
