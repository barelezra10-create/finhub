/** Editorial review intervals, not guarantees that provider terms remain unchanged. */
export const auditCategories = {
  cards: { label: 'Credit cards', days: 30 },
  auto: { label: 'Auto insurance', days: 90 },
  home: { label: 'Home insurance', days: 90 },
  life: { label: 'Life insurance', days: 90 },
  brokerages: { label: 'Brokerages', days: 30 },
  personal: { label: 'Personal loans', days: 30 },
  student: { label: 'Student loans', days: 30 },
  savings: { label: 'Tracked savings accounts', days: 7 },
} as const;
export type AuditCategory = keyof typeof auditCategories;
export type ReviewStatus = 'needs-check' | 'overdue' | 'due-today' | 'scheduled';
export const reviewLabels: Record<ReviewStatus, string> = {
  'needs-check': 'Needs a dated check', overdue: 'Overdue',
  'due-today': 'Due today', scheduled: 'Scheduled',
};
export interface AuditProduct {
  id: string;
  category: AuditCategory;
  name: string;
  href: string;
  availability: string;
  checked?: string;
  source?: string;
  scope: string;
}
const DAY = 86_400_000;
function dateValue(value?: string): number | null {
  if (!value || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return null;
  const time = Date.parse(`${value}T00:00:00Z`);
  return Number.isFinite(time) && new Date(time).toISOString().slice(0, 10) === value ? time : null;
}
export function reviewDue(checked: string | undefined, intervalDays: number, now = new Date()) {
  const today = dateValue(now.toISOString().slice(0, 10))!;
  const check = dateValue(checked);
  if (check === null || check > today) {
    return { status: 'needs-check' as ReviewStatus, due: undefined, daysOverdue: 0 };
  }
  const due = check + intervalDays * DAY;
  return {
    status: (due < today ? 'overdue' : due === today ? 'due-today' : 'scheduled') as ReviewStatus,
    due: new Date(due).toISOString().slice(0, 10),
    daysOverdue: Math.max(0, Math.floor((today - due) / DAY)),
  };
}
export function buildReviewQueue(products: AuditProduct[], now = new Date()) {
  const priority: Record<ReviewStatus, number> = { 'needs-check': 0, overdue: 1, 'due-today': 2, scheduled: 3 };
  return products.map(p => ({ ...p, ...reviewDue(p.checked, auditCategories[p.category].days, now) }))
    .sort((a, b) => priority[a.status] - priority[b.status]
      || (a.due || '').localeCompare(b.due || '') || a.name.localeCompare(b.name) || a.id.localeCompare(b.id));
}
