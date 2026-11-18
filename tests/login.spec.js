import {test,expect } from '@playwright/test'

test("page navigation",async({page})=>{
    await page.goto("https://www.facebook.com");
    await page.locator("#_R_c9l6neappb6amH1_").fill("fazil@yopmail.com");
    await page.locator('[type="password"]').fill("Password@123");
    await page.locator('[aria-label="Log in"]').click;
    await page.waitForTimeout(3000)


})

