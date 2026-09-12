"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { searchEngine } from "@/lib/analytics/search-engine";

let attribution: {source: string; medium: string; campaign: string; referrer: string; keyword: string; keywordType: string; ad: string} | undefined;
export function AnalyticsTracker() {
  const path = usePathname();
  useEffect(() => {
    if (!path || /^\/(admin|api)(\/|$)/.test(path) || navigator.doNotTrack === "1" || (navigator as Navigator & {globalPrivacyControl?: boolean}).globalPrivacyControl || navigator.webdriver) return;
    if (!attribution) {
      const params = new URLSearchParams(location.search);
      let referrer = ''; let keyword = params.get('utm_term') || ''; let keywordType = keyword ? 'campaign' : '';
      if (document.referrer) {
        try {
          const ref = new URL(document.referrer); referrer = ref.origin;
          const engine = searchEngine(ref.hostname);
          if (!keyword && engine) {keyword = ref.searchParams.get(engine === 'Yahoo' ? 'p' : engine === 'Baidu' ? 'wd' : 'q') || ''; keywordType = keyword ? 'referrer' : '';}
        } catch { /* No usable referrer. */ }
      }
      attribution = {keyword,keywordType,ad:params.has('gclid') || params.has('gbraid') || params.has('wbraid') ? 'google' : params.has('msclkid') ? 'bing' : '', source: params.get('utm_source') || '', medium: params.get('utm_medium') || '', campaign: params.get('utm_campaign') || '', referrer };
    }
    const send = (kind: string, target = '', offer = '', placement = '') => {
      void fetch('/api/analytics', { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({id:crypto.randomUUID(),kind,path,target,offer,placement,deviceHint:navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1 ? 'tablet' : '',...attribution}), keepalive:true, credentials:'same-origin' }).catch(() => {});
    };
    // Wait until visible; cleanup avoids React development-mode duplicate effects.
    let sent = false;
    const visible = () => { if (!sent && document.visibilityState === 'visible') { sent = true; send('pageview'); } };
    const timer = setTimeout(visible, 0);
    document.addEventListener('visibilitychange',visible);
    const click = (event: MouseEvent) => {
      const link = (event.target as Element)?.closest?.('a[href]') as HTMLAnchorElement | null;
      if (!link || (event.type === 'auxclick' && event.button !== 1)) return;
      const url = new URL(link.href);
      if (/^https?:$/.test(url.protocol) && url.hostname.replace(/^www\./,'') !== location.hostname.replace(/^www\./,'')) send('outbound',url.origin,link.dataset.offer || '',link.dataset.placement || '');
    };
    document.addEventListener('click',click);
    document.addEventListener('auxclick',click);
    return () => {clearTimeout(timer);document.removeEventListener('visibilitychange',visible);document.removeEventListener('click',click);document.removeEventListener('auxclick',click);};
  },[path]);
  return null;
}
