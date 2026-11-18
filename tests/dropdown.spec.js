import{test,expect} from '@playwright/test'

test("drp",async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/");

await page.locator('//select[@id="country"]').selectOption("canada");
await page.locator('//select[@id="country"]').selectOption({label:"canada"});
await page.locator('//select[@id="country"]').selectOption({Value:"uK"});
await page.locator('//select[@id="country"]').selectOption({index:5});
await page.pause();




})

test("multi-select drp",async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/");
await page.locator('//select[@id="colors"]').selectOption(["Red","Blue","White"])


})


   
test("dropdown", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    const text = await page.locator('//select[@id="country"]/option').allTextContents();

    for (let i of text) {
        console.log(i.trim());
    }

    const dummy = await page.locator('//select[@id="country"]/option').count();
    console.log("count :", dummy);

    await expect(page.locator('//select[@id="country"]/option')).toHaveCount(10);

    await page.pause();
});

test("multi-select dropdown", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    await page.locator('//select[@id="colors"]').selectOption(["Red", "Blue", "White"]);

    await page.pause();
})

