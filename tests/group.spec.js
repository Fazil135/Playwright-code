import { test, expect } from '@playwright/test';

test.describe("personal", () => {

    test("name and address", async () => {
        console.log("name and address details");
    });

    test("aadhar", async () => {
        console.log("aadhar details");
    });

    test("pan", async () => {
        console.log("pan details");
    });

});

test.describe("other", () => {

    test("education", async () => {
        console.log("education details");
    });

    test("experience", async () => {
        console.log("experience details");
    });

    test("bank", async () => {
        console.log("bank details");
    });

    test("pf", async () => {
        console.log("pf details");
    });

    test("agreement", async () => {
        console.log("agreement details");
    });

});