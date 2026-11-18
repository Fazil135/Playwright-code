import{test,expect} from "@playwright/test"

test("simp alerts",async({page})=>{
await page.goto("https://demo.automationtesting.in/Alerts.html#google_vignette");

await page.on("dialog",async alert=>{
console .log(await alert.message());
console.log(await alert.type());
await alert.accept();


})
await page.locator('//div[@id="OKTab"]').click();



})

test("confirm alert",async({page})=>{

await page.goto("https://demo.automationtesting.in/Alerts.html#google_vignette");

page.on("dialog",async alert2=>{
console.log(alert2.type());
console.log(alert2.message());
alert2.accept();

} )
await page.locator('//li[@class="active"]').click();
await page.locator('//button[contains(text(), "display a confirm box")]').click();
await expect(page.locator('//p[@id="demo"]')).toHaveText("You pressed Ok");


})

test("prompt alert", async ({ page }) => {
    await page.goto("https://demo.automationtesting.in/Alerts.html#google_vignette");

    page.on("dialog", async alert => {
        console.log(alert.type());

        console.log((alert.message()))
        alert.accept("Hi");
    });

    await page.locator('//a[contains(text(),"Alert with Textbox" )]').click();
    await page.locator('//button[contains(text(),"to demonstrate the" )]').click();
    await expect(page.locator("//p[@id='demo1']")).toHaveText("Hello Hi How are you today");




})


