const { test, expect } = require('@playwright/test');
const { invalidUser } = require('../../utils/helpers');

test('Login gagal dengan kredensial salah', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');

  await page.fill('#username', invalidUser.username);
  await page.fill('#password', invalidUser.password);
  await page.click('button[type="submit"]');

  const errorMsg = await page.locator('#flash');
  await expect(errorMsg).toContainText('Your username is invalid!');
});