import { test, expect } from "@playwright/test";

test("comparisons show verified rewards and preserve conditions", async ({ page }) => {
  await page.goto("/credit-cards/compare?c=chase-freedom-flex&c=capital-one-platinum-secured");
  const table = page.getByRole("table");
  await expect(table).toContainText("$1,500/quarter");
  await expect(table).toContainText("No rewards");
  await expect(table).toContainText("No welcome bonus");
  await expect(table).toContainText("Not applicable");
  await expect(table).not.toContainText("Check issuer");
});

test("missing fees stay unknown rather than becoming free", async ({ page }) => {
  await page.goto("/credit-cards/compare?c=aspire&c=capital-one-platinum-secured");
  const fee = page.getByRole("row").filter({ has: page.getByRole("rowheader", { name: "Annual fee", exact: true }) });
  await expect(fee).toContainText("Not verified");
  await expect(fee).toContainText("$0");
});

test("card review exposes reward source and genuine absence of an offer", async ({ page }) => {
  await page.goto("/credit-cards/capital-one-platinum-secured");
  await expect(page.getByText("No welcome bonus", { exact: true })).toBeVisible();
  await expect(page.getByText("No rewards", { exact: true }).first()).toBeVisible();
  await expect(page.locator('a[href="https://www.capitalone.com/learn-grow/money-management/secured-vs-unsecured-credit-card/"]')).toBeVisible();
});
