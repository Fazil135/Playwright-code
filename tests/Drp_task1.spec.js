import{test,expect} from '@playwright/test'

test("drp task",async({page})=>{
    //single select
await page.goto("https://letcode.in/dropdowns#google_vignette");
await page.locator('//select[@id="fruits"]').selectOption("Apple");

//multi select
var a=await page.locator('//select[@id="superheros"]').selectOption(["Ant-Man","Aquaman","Batman"])
// await page.pause();

for(let i of a){
    console.log(i.trim())
}

//select and print all options and count 

await page.locator('//select[@id="lang"]').selectOption({value:"sharp"});
let b=await page.locator('//select[@id="lang"]/option').allTextContents();
let count=await page.locator('//select[@id="lang"]/option').count();
console.log("count:",count);
for(let i of b){
    console.log(i.trim());
}

await page.locator('//select[@id="country"]').selectOption({value:"India"});

})

test("google",async({page})=>{
await page.goto("https://www.google.com/?zx=1792224651963");
let a=await page.locator('//div[@id="SIvCob"]/a').allTextContents();
for(let i of a){
    console.log(i.trim())
}

})