const { test, expect } = require('@playwright/test');

let globalCounter = 0;

test.beforeAll(async () => {
  console.log('🔥 BEFORE ALL - Sekali sebelum semua test');
  globalCounter = 10;
});

test.afterAll(async () => {
  console.log('🧯 AFTER ALL - Setelah semua test');
});

test.beforeEach(async () => {
  console.log('👉 BEFORE EACH');
});

test.afterEach(async () => {
  console.log('✅ AFTER EACH');
});

test('Test 1 - Cek globalCounter', async () => {
  expect(globalCounter).toBe(10);
});

test('Test 2 - Perbandingan sederhana', async () => {
  expect(5 + 5).toBe(10);
});