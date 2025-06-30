const { test, expect } = require('@playwright/test');

test('Submit form sukses', async ({ page }) => {
  await page.goto('https://demoqa.com/automation-practice-form');

  // Isi nama depan dan nama belakang
  await page.fill('#firstName', 'Wahyu');
  await page.fill('#lastName', 'Utomo');

  // Isi email
  await page.fill('#userEmail', 'wahyu@example.com');

  // Pilih gender (radio button)
 await page.click('label[for="gender-radio-1"]');

  // Isi nomor HP
  await page.fill('#userNumber', '081234567890');

  // Isi tanggal lahir (opsional)
  await page.click('#dateOfBirthInput');
  await page.click('.react-datepicker__day--015'); // tanggal 15

  // Isi subjek
  await page.fill('#subjectsInput', 'Math');
  await page.keyboard.press('Enter');

  // Centang hobi
  await page.check('label[for="hobbies-checkbox-1"]'); // Sports

  // Upload gambar (opsional, pastikan file ada)
  // await page.setInputFiles('#uploadPicture', 'path/to/file.png');

  // Isi alamat
  await page.fill('#currentAddress', 'Ini alamat dummy dari automation script');

  // Scroll ke bawah biar tombol kelihatan
  await page.evaluate(() => window.scrollBy(0, 500));

  // Klik tombol submit
  await page.click('#submit');

  // Validasi hasil
  await expect(page.locator('#example-modal-sizes-title-lg')).toHaveText('Thanks for submitting the form');
});