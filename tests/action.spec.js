import { test, expect } from '@playwright/test';

test("keyboard action", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    await page.locator('//input[@id="name"]').fill("hello");

    await page.keyboard.press('Control+A');
    await page.keyboard.press('Control+C');

    await page.keyboard.press('Tab');
    await page.keyboard.press('Control+V');

    await page.keyboard.press('Tab');
    await page.keyboard.press('Control+V');

    await page.keyboard.press('Tab');
    await page.keyboard.press('Control+V');

    await page.pause();
});


test("rightclick", async ({ page }) => {
    await page.goto("https://swisnl.github.io/jQuery-contextMenu/demo.html");

    await page.locator('//span[text()="right click me"]').click({ button: "right" });

    await page.pause();
});