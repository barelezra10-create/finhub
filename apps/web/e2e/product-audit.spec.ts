import {test, expect} from '@playwright/test';

test('insurance profiles retain coverage qualifications and provider roles', async ({page})=>{
 await page.goto('/insurance/auto/progressive-auto');
 await expect(page.locator('#facts')).toContainText(/increase/i);
 await page.goto('/insurance/home/progressive-home');
 await expect(page.locator('#facts')).toContainText(/unaffiliated/i);
 await expect(page.locator('article')).not.toContainText('Not verified');
 await expect(page.locator('article')).not.toContainText('AM Best');
 await page.locator('#facts a').first().click();
 await expect(page.locator('#source-main')).toBeInViewport();
});
test('brokerage fees retain contract and account exceptions',async({page})=>{
 await page.goto('/investing/brokerages/webull');
 await expect(page.locator('#facts')).toContainText('$0.50');
 await expect(page.locator('#facts')).toContainText('500 contracts');
 await expect(page.locator('#facts')).toContainText('$0.10');
 await page.goto('/investing/brokerages/vanguard');
 await expect(page.locator('#facts')).toContainText('$25 annual');
 await expect(page.locator('#facts')).toContainText('electronic delivery');
 expect((await page.locator('script[type="application/ld+json"]').allTextContents()).join('')).not.toContain('aggregateRating');
});
test('personal loan profiles include changed eligibility and fee choices',async({page})=>{
 await page.goto('/loans/personal/pnc-personal-loan');
 await expect(page.locator('#facts')).toContainText('eligible PNC personal checking');
 await expect(page.locator('#facts')).toContainText('$35,000');
 await page.goto('/loans/personal/sofi-personal-loan');
 await expect(page.locator('#facts')).toContainText('10 years');
 await expect(page.locator('#facts')).toContainText('in exchange for a lower interest rate');
 await expect(page.locator('article')).not.toContainText('Unemployment protection');
});
test('legacy loan URLs resolve to the current product and retired product status remains',async({page})=>{
 await page.goto('/reviews/lendingclub');
 await expect(page).toHaveURL(/\/loans\/personal\/lendingclub-personal-loan$/);
 await expect(page.locator('h1')).toContainText('Happen Bank (formerly LendingClub)');
 await expect(page.getByRole('link',{name:'Provider website'})).toHaveAttribute('href','https://www.happen.com/personal-loan');
 await page.goto('/loans/personal/marcus-personal-loan');
 await expect(page.locator('h1')).toContainText('Status and Servicing');
 await expect(page.getByRole('link',{name:'Provider website'})).toHaveCount(0);
});
test('directories show complete sourced profiles without synthetic rankings',async({page})=>{
 for(const [route,count] of [['/insurance/auto',8],['/insurance/home',8],['/investing/brokerages',7],['/loans/personal',11]] as const){
  await page.goto(route);
  await expect(page.locator('#profiles h3')).toHaveCount(count);
  await expect(page.locator('#profiles')).toContainText('Alphabetical order');
  await expect(page.locator('#profiles')).not.toContainText('Not verified');
  await expect(page.locator('#profiles')).not.toContainText('Not scored');
 }
});
test('mobile directory and product details fit the viewport',async({page})=>{
 await page.setViewportSize({width:390,height:844});
 for(const route of ['/insurance','/investing','/loans','/loans/personal','/loans/personal/lendingclub-personal-loan','/investing/brokerages/webull']){
  await page.goto(route);
  expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),route).toBe(true);
 }
 await page.screenshot({path:'/private/tmp/fintiex-product-audit-2026-09-24/mobile-profile.png',fullPage:true});
});
test('related guides no longer promise loan rates by credit score or job-loss protection',async({page})=>{
 for(const route of ['/loans','/loans/by-credit-tier','/loans/debt-consolidation','/loans/home-improvement','/loans/wedding','/loans/medical','/calculators/personal-loan-payoff']){
  await page.goto(route);
  await expect(page.locator('main')).not.toContainText(/unemployment protection|No fees of any kind|FICO 740\+ typically/i);
 }
});
