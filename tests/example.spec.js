// @ts-check
import { test, expect } from '@playwright/test';

 test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});



test("My first Test", async ({ page }) => {
  await page.goto("http://example.com");
  const title = await page.title();
  expect(title).toBe("Example Domain");
});

test("H1 has some content", async ({ page }) => {

  await page.goto('https://example.com')

  const H1_TEXT = await page.textContent("h1")

  expect(H1_TEXT).not.toBe("")

})
