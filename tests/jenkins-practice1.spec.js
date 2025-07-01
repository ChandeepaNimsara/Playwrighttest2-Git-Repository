const { test, expect, chromium } = require("@playwright/test");

test('has title test 1', async ({ page }) => {
    console.log("Start Jenkins Practice Test 1")
    await page.goto('https://playwright.dev/');
    await page.waitForTimeout(3000);
    await expect(page).toHaveTitle(/Playwright/)
    console.log("Ending Jenkins Practice Test 1");
});

// test('has title test 2', async ({ page }) => {
//     console.log("Start Jenkins Practice Test 2")
//     await page.goto('https://playwright.dev/');
//     await page.waitForTimeout(3000);
//     await expect(page).toHaveTitle(/abc/)
//     console.log("Ending Jenkins Practice Test 2");
// });