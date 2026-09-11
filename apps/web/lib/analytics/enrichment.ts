import Bowser from 'bowser';
import type { Lookup } from 'geoip-lite';
export async function enrich(ip: string, userAgent: string, acceptLanguage: string, deviceHint?: unknown) {
  let geo: Lookup | null = null;
  try { const geoip = await import('geoip-lite'); geo = geoip.lookup(ip); } catch { /* Geo failure must not block tracking. */ }
  const parsed = Bowser.parse(userAgent);
  const platform = deviceHint === 'tablet' ? 'tablet' : parsed.platform.type;
  const device = platform === 'mobile' ? 'Mobile' : platform === 'tablet' ? 'Tablet' : platform === 'desktop' ? 'Desktop' : 'Unknown';
  const language = acceptLanguage.split(',')[0]?.split(';')[0]?.trim().slice(0,30) || '';
  return {country:geo?.country || '',region:(geo?.region || '').slice(0,100),city:(geo?.city || '').slice(0,120),device,browser:(parsed.browser.name || 'Unknown').slice(0,60),os:(parsed.os.name || 'Unknown').slice(0,60),language:/^[a-zA-Z-]{2,30}$/.test(language)?language:''};
}
