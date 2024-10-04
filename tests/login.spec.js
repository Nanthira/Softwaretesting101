// const { test, expect } = require('@playwright/test');
import { test, expect } from '@playwright/test';
test.beforeEach(async ({ page }) => {
await page.goto('https://practicetestautomation.com/practice-test-login/');
});
test('TC01', async ({ page }) => {
await page.locator('#username').fill('student');
await page.getByLabel('Password').fill('Password123');
await page.getByRole('button', { name: 'Submit' }).click();

const currentURL = page.url();
expect(currentURL).toBe('https://practicetestautomation.com/logged-in-successfully/');
console.log(page.url('https://practicetestautomation.com/logged-in-successfully/'));
await page.screenshot({ path: './tests/img/login.png' });
});

test('TC02', async ({ page }) => {
await page.locator('#username').fill('incorrectUser');
await page.getByLabel('Password').fill('Password123');
await page.getByRole('button', { name: 'Submit' }).click();
await expect(page.locator('#error')).toHaveText('Your username is invalid!');
});

test('TC03', async ({ page }) => {
await page.locator('#username').fill('student');
await page.getByLabel('Password').fill('incorrectPassword');
await page.getByRole('button', { name: 'Submit' }).click();
await expect(page.locator('#error')).toHaveText('Your password is invalid!');
});