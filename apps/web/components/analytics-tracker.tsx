"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

let attribution: {source: string; medium: string; campaign: string; referrer: string} | undefined;
export function AnalyticsTracker() {
  const path = usePathname();
  useEffect(() => {
    if (!path || /^\/(admin|api)(\/|$)/.test(path) || navigator.doNotTrack === "1" || (navigator as Navigator & {globalPrivacyControl?: boolean}).globalPrivacyControl || navigator.webdriver) return;
    if (!attribution) {
      const params = new URLSearchParams(location.search);
      attribution = { source: params.get('utm_source') || '', medium: params.get('utm_medium') || '', campaign: params.get('utm_campaign') || '', referrer: document.referrer ? new URL(document.referrer).origin : '' };
    }
    const send = (kind: string, target = '') => {
      void fetch('/api/analytics', { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({id:crypto.randomUUID(),kind,path,target,...attribution}), keepalive:true, credentials:'same-origin' }).catch(() => {});
    };
    // Wait until visible; cleanup avoids React development-mode duplicate effects.
    let sent = false;
    const visible = () => { if (!sent && document.visibilityState === 'visible') { sent = true; send('pageview'); } };
    const timer = setTimeout(visible, 0);
    document.addEventListener('visibilitychange',visible);
    const click = (event: MouseEvent) => {
      const link = (event.target as Element)?.closest?.('a[href]') as HTMLAnchorElement | null;
      if (!link) return;
      const url = new URL(link.href);
      if (/^https?:$/.test(url.protocol) && url.hostname.replace(/^www\./,'') !== location.hostname.replace(/^www\./,'')) send('outbound',url.origin);
    };
    document.addEventListener('click',click);
    return () => {clearTimeout(timer);document.removeEventListener('visibilitychange',visible);document.removeEventListener('click',click);};
  },[path]);
  return null;
}
