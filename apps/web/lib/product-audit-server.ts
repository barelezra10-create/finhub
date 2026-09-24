import 'server-only';
import { loadCards } from './cards-server';
import { loadCarriers } from './insurance';
import { loadBrokerages } from './investing';
import { loadPersonalLoans, loadStudentLoans } from './loans';
import { savingsOffers } from './savings-rates';
import type { AuditProduct } from './product-freshness';

export function loadAuditProducts(): AuditProduct[] {
  return [
    ...loadCards().map(c => ({
      id: `cards-${c.slug}`, category: 'cards' as const, name: `${c.issuer} ${c.name}`,
      href: `/credit-cards/${c.slug}`, availability: c.availability || 'Unconfirmed',
      checked: c.source_checked, source: c.source_url || c.application_url,
      scope: c.verified_fields?.join(', ') || 'No confirmed fields recorded',
    })),
    ...(['auto', 'home', 'life'] as const).flatMap(category => loadCarriers(category).map(c => ({
      id: `${category}-${c.slug}`, category, name: c.carrier,
      href: `/insurance/${category}/${c.slug}`, availability: c.availability || 'Listed profile',
      checked: c.source_checked || c.status_page?.checked,
      source: c.checked_profile?.sources[0]?.url || c.status_page?.sources[0]?.url || c.quote_url,
      scope: c.checked_profile ? c.checked_profile.facts.map(f => f.label).join(', ')
        : c.status_page ? 'Product status and servicing' : 'Check scope not recorded',
    }))),
    ...loadBrokerages().map(b => ({
      id: `brokerages-${b.slug}`, category: 'brokerages' as const, name: b.broker,
      href: `/investing/brokerages/${b.slug}`, availability: 'Listed profile',
      checked: b.source_checked, source: b.checked_profile.sources[0]?.url || b.application_url,
      scope: b.checked_profile.facts.map(f => f.label).join(', '),
    })),
    ...loadPersonalLoans().map(l => ({
      id: `personal-${l.slug}`, category: 'personal' as const, name: `${l.lender} — ${l.product_name}`,
      href: `/loans/personal/${l.slug}`, availability: l.availability || 'Listed profile',
      checked: l.source_checked, source: l.checked_profile?.sources[0]?.url || l.source_url || l.application_url,
      scope: l.checked_profile ? l.checked_profile.facts.map(f => f.label).join(', ')
        : l.availability === 'unavailable' ? 'Product status and servicing' : 'Check scope not recorded',
    })),
    ...loadStudentLoans().map(l => ({
      id: `student-${l.slug}`, category: 'student' as const, name: `${l.lender} — ${l.product_name}`,
      href: `/loans/student/${l.slug}`, availability: l.availability || 'Listed profile',
      checked: l.source_checked || l.status_page?.checked,
      source: l.checked_profile?.sources[0]?.url || l.status_page?.sources[0]?.url || l.application_url,
      scope: l.checked_profile ? l.checked_profile.facts.map(f => f.label).join(', ')
        : l.status_page ? 'Product status and servicing' : 'Check scope not recorded',
    })),
    ...savingsOffers.map(o => ({
      id: `savings-${o.key}`, category: 'savings' as const, name: o.name,
      href: o.review, availability: o.status, checked: o.checked, source: o.source,
      scope: o.status === 'confirmed' ? 'Observed APY, opening minimum and conditions'
        : o.status === 'closed' ? 'Product availability' : 'Rate not confirmed; review source note',
    })),
  ];
}
