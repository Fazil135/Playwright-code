import{test,expect} from '@playwright/test'

test("button",async({page})=>{
await page.goto("https://letcode.in/radio");


await page.locator('//input[@id="no"]').check(); //1
await expect(page.locator('//input[@id="no"]')).toBeChecked();

await page.locator('//input[@id="one"]').check(); //2
await expect(page.locator('//input[@id="one"]')).toBeChecked();

await page.locator('//input[@id="nobug"]').check(); //3
await expect(page.locator('//input[@id="nobug"]')).toBeChecked();
await page.locator('//input[@id="bug"]').check();
await expect(page.locator('//input[@id="bug"]')).toBeChecked();

await expect(page.locator('//input[@id="notfoo"]')).toBeChecked();//4

await expect(page.locator('//input[@id="maybe"]')).toBeDisabled();//5

await expect(page.locator('//span[text()="Remember me"]/preceding-sibling::input[@type="checkbox"]')).toBeChecked()//6


await page.locator("//label[contains(text(),'Accept the T&C')]/following-sibling::label/input[@type='checkbox']").check(); //7
await expect(page.locator("//label[contains(text(),'Accept the T&C')]/following-sibling::label/input[@type='checkbox']")).toBeChecked()











})