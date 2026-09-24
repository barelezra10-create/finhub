import Link from 'next/link';
import { loadAuditProducts } from '@/lib/product-audit-server';
import { auditCategories, buildReviewQueue, reviewLabels, type AuditCategory, type ReviewStatus } from '@/lib/product-freshness';

export function OfferAuditPanel({ category = '', status = '' }: { category?: string; status?: string }) {
  const selectedCategory = Object.hasOwn(auditCategories, category) ? category as AuditCategory : '';
  const selectedStatus = Object.hasOwn(reviewLabels, status) ? status as ReviewStatus : '';
  const queue = buildReviewQueue(loadAuditProducts());
  const rows = queue.filter(p => (!selectedCategory || p.category === selectedCategory) && (!selectedStatus || p.status === selectedStatus));
  return <section className="analytics-panel">
    <h2>Product source review queue</h2>
    <p className="analytics-muted small">{queue.length} records across cards, insurance, brokerages, loans and tracked savings accounts. Missing checks and overdue records appear first. Dates use UTC and update when this dashboard is opened.</p>
    <div className="search-stats">
      {Object.entries(reviewLabels).map(([key, label]) => <div key={key}><strong>{queue.filter(p => p.status === key).length}</strong><span>{label}</span></div>)}
    </div>
    <p className="analytics-notice">Review schedule: savings every 7 days; cards, brokerages and loans every 30 days; insurance every 90 days. These are editorial reminders, not automatic provider checks or guarantees that terms are unchanged. Availability is shown separately. Closed products remain in the queue for status and servicing checks.</p>
    <form className="analytics-filters" action="/admin">
      <input type="hidden" name="tab" value="audit" />
      <label>Product category<select name="auditCategory" defaultValue={selectedCategory}><option value="">All categories</option>{Object.entries(auditCategories).map(([key, value]) => <option key={key} value={key}>{value.label}</option>)}</select></label>
      <label>Review status<select name="auditStatus" defaultValue={selectedStatus}><option value="">All review statuses</option>{Object.entries(reviewLabels).map(([key, value]) => <option key={key} value={key}>{value}</option>)}</select></label>
      <button>Filter queue</button><Link href="/admin?tab=audit">Reset</Link>
    </form>
    <p className="analytics-muted small">Showing {rows.length} of {queue.length} records. Summary counts cover the entire queue. Traffic audience filters do not apply. Coverage excludes mortgage profiles and savings accounts outside the rate tracker.</p>
    {rows.length ? <div className="analytics-scroll"><table className="analytics-audit"><thead><tr>
      {['Product / category', 'Availability', 'Last source check', 'Review due', 'Review status', 'Checked scope / source'].map(h => <th key={h} scope="col">{h}</th>)}
    </tr></thead><tbody>{rows.map(p => <tr key={p.id}>
      <td><Link href={p.href}>{p.name}</Link><small>{auditCategories[p.category].label}</small></td>
      <td>{p.availability}</td><td>{p.checked || 'No date recorded'}</td><td>{p.due || 'Check date required'}</td>
      <td><span className={`audit-status audit-${p.status}`}>{reviewLabels[p.status]}</span>{p.daysOverdue > 0 && <small>{p.daysOverdue} days overdue</small>}</td>
      <td><details><summary>View checked scope</summary><p>{p.scope}</p></details>{p.source && <a href={p.source} target="_blank" rel="noopener noreferrer">Official source ↗</a>}</td>
    </tr>)}</tbody></table></div> : <p className="analytics-empty">No records match these filters.</p>}
    <p className="analytics-muted small">A source-check date covers only the recorded scope. Review the linked evidence before editing product terms or advancing its check date. No dates are advanced automatically.</p>
  </section>;
}
