import{test,expect} from "@playwright/test"

test("Date",async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/");
await page.locator('//input[@id="datepicker"]').fill(10/26/2026)

})