const { test, expect } = require('@playwright/test');

test.describe('feature foo', () => {
    test('basic test', async ({ page }) => {
      await page.goto('https://playwright.dev/');
      const title = page.locator('.navbar__inner .navbar__title');
      await expect(title).toHaveText('Playwright');
    });

    test('my test', async ({ page }) => {
      await page.goto('https://playwright.dev/');

      console.log(await page.title());
      await expect(page).toHaveTitle(/Playwright/);

      await expect(page.locator('text=Get Started').first()).toHaveAttribute('href', '/docs/intro');

      await page.click('text=Get started');
      await page.waitForSelector('.markdown header h1');

      const title = page.locator('.markdown header h1');
      await expect(title).toHaveText('Getting started');
    });
});