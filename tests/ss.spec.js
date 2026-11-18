
import { test, expect } from '@playwright/test'

test("screenshot", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.screenshot({path:"C:/Users/DELL/OneDrive/Desktop/Playwright_7am/node_modules/file/"+"automation.png"});

    await page.screenshot({path:"C:/Users/DELL/OneDrive/Desktop/Playwright_7am/node_modules/file/"+"fullpage.png", fullPage:true});

    await page.locator('//div[@id="HTML8"]').screenshot({path:"C:/Users/DELL/OneDrive/Desktop/Playwright_7am/node_modules/file/"+"table.png"})

})
