// Test Case: Form Gagal Disubmit Karena Nama Kosong
// Buka halaman form: https://demoqa.com/automation-practice-form

// Biarkan field “Nama” kosong

// Isi field email, nomor HP, dan lainnya dengan data valid

// Klik tombol Submit

// Verifikasi bahwa:

// Ada error atau validasi muncul (misalnya elemen #firstName berwarna merah atau :invalid)

// Form tidak berpindah halaman

const { test, expect } = require('@playwright/test');

test('Gagal submit form karena nama kosong', async ({ page }) => {
  await page.goto('https://demoqa.com/automation-practice-form');

  // Biarkan nama kosong
  await page.fill('#userEmail', 'invalid@example.com');
  await page.fill('#userNumber', '081234567890');
  await page.click('label[for="gender-radio-1"]');

  // Submit form
  await page.click('#submit');

  // Tunggu hingga elemen error muncul atau validasi selesai
  const isFirstNameInvalid = await page.$eval('#firstName', el => el.checkValidity());

  // Harus false karena field kosong
  expect(isFirstNameInvalid).toBe(false);
});