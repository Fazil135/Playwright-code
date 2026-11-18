import { test, expect } from '@playwright/test';

test("test one @reg", async () => {
    console.log("test one executed successfully");
});

test("test two @reg", async () => {
    console.log("test two executed successfully");
});

test("test three @reg", async () => {
    console.log("test three executed successfully");
});

test("test four @reg @smoke", async () => {
    console.log("test four executed successfully");
});


// //# Run tests with either @reg OR @smoke
// npx playwright test tags.spec.js --grep "@reg|@smoke" --project=chromium

// # Exclude tests with @reg
// npx playwright test tags.spec.js --grep-invert "@reg" --project=chromium