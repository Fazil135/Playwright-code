import{test,expect}from "@playwright/test"

test(" login using built-in-locators task2",async({page})=>{

await page.goto("https://demoqa.com/login");
await page.getByText("New User").click();
 await expect(page.getByText("Register to Book Store")).toBeVisible();
await page.getByPlaceholder("First Name").fill("Fazil");
await page.getByPlaceholder("Last Name").fill("Ahamed");
await page.getByPlaceholder("UserName").fill("fazil17");
await page.getByPlaceholder("Password").fill("Password@123");
await page.getByRole("button",{name:"Register"}).click();
await page.getByRole("button",{name:"Back to Login"}).click();
await expect(page.getByText("Login in Book Store")).toBeVisible();
await page.getByPlaceholder("UserName").fill("fazil17");
await page.getByPlaceholder("Password").fill("Password@123");
await page.getByRole("button",{name:"Login"}).click();
await page.pause();



})