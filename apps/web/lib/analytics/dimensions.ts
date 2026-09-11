import { cleanTag, externalHost } from './core';

import { searchEngine } from './search-engine';
export { searchEngine } from './search-engine';
export function cleanKeyword(value: unknown) {
  if (typeof value !== 'string') return '';
  const text = value.trim().replace(/\s+/g,' ');
  if (!text || text.length > 120 || /[@\r\n<>]/.test(text) || /https?:|\b\d{7,}\b/i.test(text)) return '';
  return text;
}
export function acquisition(data: Record<string, unknown>) {
  const referrer = externalHost(data.referrer);
  const tagged = cleanTag(data.source);
  const paid = data.ad === 'google' || data.ad === 'bing' ? data.ad : '';
  const search_engine = searchEngine(tagged || paid || referrer);
  const source = search_engine || tagged || (paid ? paid : referrer) || 'Direct / unknown';
  const medium = cleanTag(data.medium).toLowerCase() || (paid ? 'cpc' : '');
  const social = /(^|\.)(facebook\.com|instagram\.com|t\.co|twitter\.com|x\.com|linkedin\.com|pinterest\.com|reddit\.com|tiktok\.com)$/.test(referrer);
  const ai = /(^|\.)(chatgpt\.com|chat\.openai\.com|perplexity\.ai|claude\.ai|gemini\.google\.com|copilot\.microsoft\.com)$/.test(referrer);
  let channel = source === 'Direct / unknown' ? 'Direct / unknown' : 'Referral';
  if (search_engine) channel = 'Organic search';
  if (social || /social/.test(medium)) channel = 'Social';
  if (ai) channel = 'AI assistants';
  if (medium === 'email' || medium === 'newsletter') channel = 'Email';
  if (paid || /^(cpc|ppc|paid|paidsearch|paid_search|paid-social|paid_social|display|cpm)$/.test(medium)) channel = search_engine ? 'Paid search' : 'Paid campaigns';
  if (tagged && !medium && !search_engine) channel = 'Campaign';
  const keyword = cleanKeyword(data.keyword);
  const keyword_type = keyword && ['campaign','referrer'].includes(String(data.keywordType)) ? String(data.keywordType) : '';
  return {source,medium,referrer,channel,search_engine,keyword:keyword_type?keyword:'',keyword_type};
}
export function countryName(code: string) {
  if (!code || !/^[A-Z]{2}$/.test(code)) return 'Unknown';
  return new Intl.DisplayNames(['en'],{type:'region'}).of(code) || code;
}
