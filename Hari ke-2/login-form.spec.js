const { test, expect } = require('@playwright/test');

test('Login gagal dengan kredensial salah', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');

  await page.fill('#username', 'user_salah');
  await page.fill('#password', 'password_salah');
  await page.click('button[type="submit"]');

  const errorMessage = await page.locator('#flash');
  await expect(errorMessage).toContainText('Your username is invalid!');
});