
import { test, expect } from '@playwright/test'

test("handling frames", async ({ page }) => {
    await page.goto("https://practice-automation.com/iframes/")

    await expect(page.locator('//h1[text()="Iframes"]')).toBeVisible()

    const automationFrame = await page.frames()

    console.log("Count :", automationFrame.length);

    for (let i of automationFrame) {
        console.log("URL :", i.url());
    }


    // frame => name, url
    // framelocator => locators

    const playwright = await page.frame({ name: "top-iframe" })

    await playwright.locator('//a[text()="Docs"]').click()

    const selenium = await page.frame({ url: "https://www.selenium.dev/" })

    await selenium.locator('//span[text()="Documentation"]').click()

    await page.pause()


})


