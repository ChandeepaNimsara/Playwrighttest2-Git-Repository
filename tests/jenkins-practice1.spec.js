const { test, expect, chromium } = require("@playwright/test");

test('has title', async ({ page }) => {
    console.log("Start Jenkins Practice Test 1")
    await page.goto('https://playwright.dev/');
    await page.waitForTimeout(2000);
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Playwright/);
    console.log("Ending Jenkins Practice Test 1")
});