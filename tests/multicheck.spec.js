import { test, expect } from '@playwright/test';

test('multi', async ({ page }) => {
await page.goto("https://testautomationpractice.blogspot.com/");

let locat=['//input[@id="tuesday"],//input[@id="monday"],//input[@id="sunday"],//input[@id="friday"]'];
for (let i of locat){
await page.locator(i).check();

}

// let days=["monday","wednesday","friday","sunday","tuesday"];

// for (let i of days){
//     await page.locator(`//input[@id=${i}`).check
// }
// await page.pause


})