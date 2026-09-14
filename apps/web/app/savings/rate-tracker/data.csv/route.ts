import { savingsObservations } from '@/lib/savings-rates';
export const dynamic = 'force-static';

export function GET() {
  const columns = ['key', 'name', 'checked', 'status', 'apy', 'minimum', 'condition', 'source', 'source_date', 'review', 'note'] as const;
  const cell = (value: unknown) => {
    if (value === null || value === undefined) return '';
    const text = String(value);
    const safe = /^[=+@\-\t\r]/.test(text) ? `'${text}` : text;
    return `"${safe.replace(/"/g, '""')}"`;
  };
  const csv = [columns.join(','), ...savingsObservations.map(o => columns.map(key => cell(o[key])).join(','))].join('\r\n') + '\r\n';
  return new Response(csv, { headers: { 'Content-Type': 'text/csv; charset=utf-8', 'Content-Disposition': 'attachment; filename="fintiex-savings-observations.csv"', 'X-Robots-Tag': 'noindex', 'X-Content-Type-Options': 'nosniff' } });
}
