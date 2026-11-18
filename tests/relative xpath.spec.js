import{test,expect} from '@playwright/test'

test("register",async({page})=>{

    await page.goto("https://demoqa.com/login");
    await page.locator('//button[@id="newUser"]').click();
    expect(page.locator('//h4[text()="Register to Book Store"]'));
    await page.locator('//input[contains(@placeholder,"First Name")]').fill("fazil");
    await page.locator('//input[contains(@id,"lastname")and @class="mr-sm-2 form-control" ]').fill("Ahamed");
    await page.locator('//input[@id="userName"]').fill("ahamed02");
    await page.locator('//input[@class="mr-sm-2 form-control"][@id="password"]').fill("Password@123");
    await page.locator('//button[@class="btn btn-primary"and @id="register"]').click();
    await page.locator('//button[contains(text(),"Back to ")]').click();
    expect(page.locator('//h5[contains(text(),"Login in Book Store")]'));
    await page.locator('//input[@id="userName"]').fill('ahamed02');
    await page.locator('//input[@id="password" or placeholder="Password"]').fill("Password@123");
    await page.locator('//button[text()="Login" and @type="button"]').click();

    
})