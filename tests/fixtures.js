const { test: base } = require('@playwright/test');
const { validUser } = require('../utils/helpers');

exports.test = base.extend({
  pageWithLogin: async ({ page }, use) => {
    await page.goto('https://the-internet.herokuapp.com/login');
    await page.fill('#username', validUser.username);
    await page.fill('#password', validUser.password);
    await page.click('button[type="submit"]');
    await use(page); // expose pageWithLogin ke test lain
  },
});