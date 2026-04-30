import { test, expect } from "@playwright/test";

test("homepage renders Fintiex headline and all 5 vertical cards", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1, name: "Fintiex" })).toBeVisible();

  for (const vertical of ["Mortgages", "Savings & CDs", "Personal & Auto Loans", "Credit Cards", "Calculators"]) {
    await expect(page.getByRole("heading", { level: 2, name: vertical })).toBeVisible();
  }
});

test("header nav links go to the right URLs", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("link", { name: "Mortgages" }).first()).toHaveAttribute("href", "/mortgages");
  // The "Calculators" header nav link points to /calculators (cards link there too — first() picks the header one).
  await expect(page.getByRole("link", { name: "Calculators" }).first()).toHaveAttribute("href", "/calculators");
});
