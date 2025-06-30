// playwright.config.js
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  timeout: 30000,
  use: {
    baseURL: 'https://the-internet.herokuapp.com',
    headless: true, // ubah jadi false kalau mau lihat browsernya
    viewport: { width: 1280, height: 720 },
  },
});