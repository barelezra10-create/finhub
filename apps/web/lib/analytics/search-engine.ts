export function searchEngine(host: string) {
  const h = host.toLowerCase().replace(/^www\./,'');
  if (/^google\.(com|[a-z]{2}|co\.[a-z]{2}|com\.[a-z]{2})$/.test(h) || h === 'google') return 'Google';
  if (h === 'bing' || /(^|\.)bing\.com$/.test(h)) return 'Bing';
  if (h === 'yahoo' || /(^|\.)search\.yahoo\.com$/.test(h)) return 'Yahoo';
  if (h === 'duckduckgo' || /(^|\.)duckduckgo\.com$/.test(h)) return 'DuckDuckGo';
  if (/^(www\.)?baidu\.com$/.test(h)) return 'Baidu';
  if (/^(www\.)?yandex\.(com|ru)$/.test(h)) return 'Yandex';
  if (h === 'search.brave.com') return 'Brave';
  if (h === 'ecosia.org') return 'Ecosia';
  return '';
}
