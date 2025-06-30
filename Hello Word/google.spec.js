//hari pertama test google
const { test, expect } = require('@playwright/test');

test('Buka Google dan cek judul', async ({ page }) => {
  await page.goto('https://www.google.com');
  await expect(page).toHaveTitle(/Google/);
});