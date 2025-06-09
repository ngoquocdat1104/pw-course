import { test } from '@playwright/test';

const PAGE_URL = "https://material.playwrightvn.com/02-xpath-product-page.html"

test("Shopping", async({ page }) => {
    await page.goto(PAGE_URL);

    await page.locator("//button[@data-product-id='1']").click({clickCount: 2});
    await page.locator("//button[@data-product-id='2']").click({clickCount: 3});
    await page.locator("//button[@data-product-id='3']").click({clickCount: 1});
})