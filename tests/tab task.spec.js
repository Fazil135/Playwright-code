import { test, expect } from "@playwright/test";
test("new tab",async({browser})=>{
const context=await browser.newContext();
const page =await context.newPage();


await page.goto('https://www.flipkart.com/');
console.log(await page.title());


await page.locator('//div[text()="Fashion"]').click()
await page.waitForEvent

await page.locator('//div[@class="css-g5y9jx r-1awozwy"]/child::div[text()="Shirts,tees "]').click()

const[tab2]=await Promise.all
([context.waitForEvent('page'),
    page.locator('//div[@data-id="TSHH4D2FGURWBGAS"]/descendant::img[@class="MZeksS"]').click()])
await tab2.waitForLoadState();
console.log(await tab2.title());

})