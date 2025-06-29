const { test, expect } = require('@playwright/test');

test('Login berhasil dengan kredensial valid', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');

  await page.fill('#username', 'tomsmith');
  await page.fill('#password', 'SuperSecretPassword!');
  await page.click('button[type="submit"]');

  // ✅ Cek redirect ke halaman secure
  await expect(page).toHaveURL('https://the-internet.herokuapp.com/secure');

  // ✅ Cek pesan sukses muncul
  const successMsg = await page.locator('#flash');
  await expect(successMsg).toContainText('You logged into a secure area!');
});