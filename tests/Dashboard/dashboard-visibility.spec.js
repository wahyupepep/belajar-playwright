const { expect } = require('@playwright/test');
const { test } = require('../fixtures');

test('Dashboard muncul setelah login', async ({ pageWithLogin }) => {
  // Halaman sudah login
  await expect(pageWithLogin).toHaveURL('https://the-internet.herokuapp.com/secure');
  await expect(pageWithLogin.locator('h2')).toHaveText('Secure Area');
});