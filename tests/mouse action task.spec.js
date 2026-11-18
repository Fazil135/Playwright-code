import { test, expect } from '@playwright/test';

test("keyboard action", async ({ page }) => {
    await page.goto("https://www.myntra.com/?utm_source=dms_google&utm_medium=dms_searchbrand_cpc&utm_campaign=dms_google_searchbrand_cpc_Search_Brand_Myntra_Brand_India_BM_TROAS_SOK_New&gad_source=1&gad_campaignid=20443628324&gbraid=0AAAAADoxBh5X0x83P5gFiBKnX9b-yZSXf&gclid=CjwKCAjwl4HXBhAjEiwAHlpWhKeeJZpRE6Y5WN3gZ5Nr4LGTQ05fZYSinylcXPEwmmI27AE3x7otHRoCCNQQAvD_BwE");

    await page.locator('//div[@class="desktop-navLinks"]/div[@data-reactid="19" ]').hover


})

test("double click", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    await page.fill('//input[@id="field1"]', "playwright");

    await page.locator('//button[text()="Copy Text"]').dblclick();

    await expect(
        page.locator('//input[@id="field2"]')
    ).toHaveValue("playwright");

    await page.pause();
});

test("scroll", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    await page.mouse.wheel(0, 2000);

    await page.pause();

    await page.mouse.wheel(0, -2000);

    await page.pause();

    await page.locator('//div[@id="footer-3"]/descendant::div[@class="widget-content"]').scrollIntoViewIfNeeded();

    await page.pause();
});

test("drag and drop", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    // const source = page.locator('//div[@id="draggable"]');
    // const target = page.locator('//div[@id="droppable"]');

    // await source.dragTo(target);

    await page.locator('//div[@id="draggable"]').dragTo(
        page.locator('//div[@id="droppable"]')
    );

    await page.pause();
});