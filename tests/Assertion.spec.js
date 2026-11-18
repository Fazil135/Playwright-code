import { test, expect } from '@playwright/test';

test('radio', async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.locator('//input[@id="male"]').check();
    await expect(page.locator('//input[@id="male"]')).toBeChecked();

    await  expect(page.locator('//input[@id="female"]')).not.toBeChecked();
    await page.locator('//input[@id="female"]').uncheck();


})

test('Checkbox', async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    await page.locator('//input[@id="monday"]').check();
    await expect(page.locator('//input[@id="monday"]')).toBeChecked();
    await page.pause();
    await page.locator('//input[@id="monday"]').uncheck();
})
