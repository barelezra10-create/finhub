import { test, expect } from "@playwright/test";
const slugs = ["sapphire-preferred-vs-reserve", "venture-vs-venture-x", "double-cash-vs-freedom-unlimited"];
for (const slug of slugs) {
  test(`comparison is useful without JavaScript: ${slug}`, async ({ browser, baseURL }) => {
    const context = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 390, height: 844 } });
    const page = await context.newPage();
    await page.goto(`${baseURL}/credit-cards/compare/${slug}`);
    await expect(page.locator("h1")).toHaveCount(1);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", `https://www.fintiex.com/credit-cards/compare/${slug}`);
    await expect(page.getByRole("table")).toContainText("Annual fee");
    await expect(page.getByRole("heading", { name: /example|annual-fee gap/i }).first()).toBeVisible();
    await expect(page.getByRole("link", { name: "Customize this comparison" })).toHaveAttribute("href", /\?c=.*&c=/);
    await page.screenshot({ path: `/private/tmp/fintiex-seo-2026-09-23/${slug}-mobile.png`, fullPage: true });
    await context.close();
  });
}
test("partial savings updates retain older accounts and their dates", async ({ page }) => {
  await page.goto("/savings/accounts");
  await expect(page.getByRole("row").filter({ hasText: "Marcus Online Savings" })).toContainText("3.50%");
  await expect(page.getByRole("row").filter({ hasText: "Marcus Online Savings" })).toContainText("2026-09-23");
  await expect(page.getByRole("row").filter({ hasText: "Bask Interest Savings" })).toContainText("2026-09-14");
  await page.goto("/savings/rate-tracker");
  await expect(page.getByRole("status")).toContainText("2 accounts");
  await page.getByLabel("Check date").selectOption("2026-09-14");
  await expect(page.getByRole("heading", { name: "Bask Interest Savings", exact: true })).toBeVisible();
});
test("legacy Chime page stays informative without advertising it as a new account", async ({ page }) => {
  await page.goto("/credit-cards/chime-credit-builder");
  await expect(page.getByRole("heading", { name: "Chime Credit Builder is now a legacy product" })).toBeVisible();
  await expect(page.getByText("Credit Builder is closed to new members.", { exact: false }).first()).toBeVisible();
  await page.goto("/credit-cards/secured");
  await expect(page.getByRole("heading", { name: "Chime Credit Builder Secured Visa Credit Card", exact: true })).toHaveCount(0);
});
