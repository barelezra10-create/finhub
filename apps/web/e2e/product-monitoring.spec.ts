import {test,expect} from '@playwright/test';

const profiles = [
 ['/insurance/auto/progressive-auto','insurance-auto-progressive-auto'],
 ['/insurance/home/lemonade-home','insurance-home-lemonade-home'],
 ['/investing/brokerages/webull','investing-brokerages-webull'],
 ['/loans/personal/lendingclub-personal-loan','loans-personal-lendingclub-personal-loan'],
] as const;
test('provider buttons identify products while source citations remain ordinary links',async({page})=>{
 for(const [route,offer] of profiles){
  await page.goto(route);
  const cta=page.getByRole('link',{name:'Provider website'});
  await expect(cta).toHaveAttribute('data-offer',offer);
  await expect(cta).toHaveAttribute('data-placement','product-profile-hero');
  await expect(page.locator('a[data-offer]')).toHaveCount(1);
  await expect(page.locator('li[id^="source-"] a[data-offer]')).toHaveCount(0);
 }
});
test('review queue remains behind admin authentication',async({page})=>{
 await page.goto('/admin?tab=audit&auditCategory=brokerages');
 await expect(page).toHaveURL(/\/admin\/login/);
 await expect(page.getByRole('heading',{name:'Product source review queue'})).toHaveCount(0);
});
test('primary and middle clicks carry product labels without sending test events',async({page,baseURL})=>{
 test.skip(!baseURL?.includes('localhost') || process.env.TEST_ANALYTICS_TRANSPORT !== 'true', 'Requires a local analytics-enabled build and explicit TEST_ANALYTICS_TRANSPORT=true.');
 const events:Record<string,string>[]=[];
 // Capture every ingestion request locally; no test event reaches any database.
 await page.route('**/api/analytics',async route=>{
  events.push(route.request().postDataJSON());
  await route.fulfill({status:204});
 });
 await page.addInitScript(()=>{
  Object.defineProperty(navigator,'webdriver',{get:()=>false});
  const preventExternal=(event:MouseEvent)=>{
   const link=(event.target as Element)?.closest('a');
   if(link&&new URL(link.href).origin!==location.origin)event.preventDefault();
  };
  document.addEventListener('click',preventExternal,true);
  document.addEventListener('auxclick',preventExternal,true);
 });
 await page.goto('/investing/brokerages/webull?utm_source=local-test');
 await expect.poll(()=>events.filter(e=>e.kind==='pageview').length).toBe(1);
 const cta=page.getByRole('link',{name:'Provider website'});
 await cta.click();await cta.click({button:'middle'});
 await expect.poll(()=>events.filter(e=>e.kind==='outbound').length).toBe(2);
 for(const event of events.filter(e=>e.kind==='outbound')){
  expect(event.offer).toBe('investing-brokerages-webull');
  expect(event.placement).toBe('product-profile-hero');
  expect(event.target).toBe('https://www.webull.com');
  expect(event.path).toBe('/investing/brokerages/webull');
 }
 await page.locator('#source-main a').click();
 await expect.poll(()=>events.filter(e=>e.kind==='outbound').length).toBe(3);
 expect(events.at(-1)?.offer).toBe('');
});

test('rendered review queue keeps wide records inside a scrollable table on mobile',async({page,baseURL},testInfo)=>{
 test.skip(!baseURL?.includes('localhost'), 'Local server-rendered audit fixture.');
 const {readFileSync,mkdirSync}=await import('node:fs');
 const {execFileSync}=await import('node:child_process');
 mkdirSync(testInfo.outputDir,{recursive:true});
 const preview=testInfo.outputPath('audit.html');
 execFileSync(process.execPath,['lib/product-freshness-test.mjs'],{env:{...process.env,AUDIT_PREVIEW_PATH:preview}});
 await page.setViewportSize({width:1440,height:1000});
 await page.setContent(readFileSync(preview,'utf8'));
 await expect(page.getByRole('heading',{name:'Product source review queue'})).toBeVisible();
 await page.screenshot({path:testInfo.outputPath('audit-desktop.png')});
 await page.setViewportSize({width:390,height:844});
 expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
 expect(await page.locator('.analytics-scroll').evaluate(e=>e.scrollWidth>e.clientWidth)).toBe(true);
 await page.screenshot({path:testInfo.outputPath('audit-mobile.png')});
});
