import { test, expect } from "@playwright/test";

test("default comparison contains actual rates, bonuses and fee deadlines", async ({ page }) => {
  await page.goto("/credit-cards/compare");
  const table = page.getByRole("table");
  await expect(table).toContainText("18.49% to 28.74%");
  await expect(table).toContainText("18.74% to 28.74%");
  await expect(table).toContainText("120 days");
  await expect(table).toContainText("$5 minimum");
  await expect(table).not.toContainText("Not verified");
  await expect(table.getByText("Best", { exact: true })).toHaveCount(0);
});

test("unsupported transactions are distinct from zero interest", async ({ page }) => {
  await page.goto("/credit-cards/petal-2");
  await expect(page.getByText("Balance transfers are not supported").first()).toBeVisible();
  await expect(page.getByText("Cash advances are not supported").first()).toBeVisible();
  await expect(page.locator("dl")).toContainText("28.24% to 30.24%");
  await expect(page.locator("dl")).not.toContainText("Not verified");
});

test("charge-card payment terms and personalized offers retain qualifications", async ({ page }) => {
  await page.goto("/credit-cards/compare?c=amex-platinum&c=capital-one-spark-cash-business");
  const table = page.getByRole("table");
  await expect(table).toContainText("eligible Pay Over Time charges");
  await expect(table).toContainText("25.74% variable on the portion eligible to carry over");
  await expect(table).toContainText("Your offer may be lower");
});

test("unavailable terms are grouped honestly and unsupported listings are not offered", async ({ page }) => {
  await page.goto("/credit-cards/us-bank-cash-plus");
  await expect(page.getByRole("heading", { name: "Details still to confirm with the issuer" })).toBeVisible();
  await expect(page.locator("aside")).toContainText("Cash advance APR");
  await expect(page.locator("dl")).not.toContainText("Not verified");
  await page.goto("/credit-cards/compare?c=hawaiian-airlines-world-elite&c=wells-fargo-active-cash-student");
  await expect(page.getByRole("table")).toContainText("Double Cash");
  await expect(page.getByRole("table")).not.toContainText("Hawaiian Airlines World Elite");
});

test("mobile fee ranges remain readable", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/credit-cards/aspire");
  await expect(page.locator("dl")).toContainText("$49–$175 first year");
  await expect(page.locator("dl")).toContainText("$5–$15 monthly maintenance");
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  await page.screenshot({ path: "/private/tmp/fintiex-card-audit-2026-09-24/aspire-mobile.png", fullPage: true });
});
