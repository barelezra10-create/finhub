import { test, expect } from "@playwright/test";

test("comparison shows data and presets expose profile details", async ({ page }) => {
  await page.goto("/credit-cards/compare");
  await page.waitForLoadState("networkidle");
  await expect(page.getByRole("table")).toBeVisible();
  await expect(page.getByRole("table")).toContainText("Double Cash");
  await expect(page.getByRole("row", { name: /Rewards & benefits/ })).toContainText("Earn 1%");
  await page.getByRole("link", { name: "Sapphire Preferred vs Reserve", exact: true }).click();
  await expect(page.getByRole("row", { name: /^Welcome offer/ })).toContainText("75,000 points");
  await expect(page.getByRole("row", { name: /Rewards & benefits/ })).toContainText("5 points per dollar");
  await expect(page.getByRole("row", { name: /Restrictions & tradeoffs/ })).toContainText("$95 annual fee");
  await expect(page.getByRole("link", { name: "View issuer source" })).toHaveCount(2);
  await page.reload();
  await expect(page.getByRole("table")).toContainText("Sapphire Preferred");
});

test("invalid card URLs recover to a usable comparison", async ({ page }) => {
  await page.goto("/credit-cards/compare?c=missing-card&c=missing-card");
  await expect(page.getByRole("table")).toBeVisible();
  await expect(page.getByRole("table")).toContainText("Double Cash");
});
