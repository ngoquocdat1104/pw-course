import { test } from "@playwright/test";

test("TODO", async ({ page }) => {
    await page.goto("https://material.playwrightvn.com/03-xpath-todo-list.html");

    for (let i = 1; i <= 100; i++) {
        await page.locator("//input[@id='new-task']").fill(`TODO ${i}`);
        await page.locator("//button[@id='add-task']").click();
    }

    page.on("dialog", async dialog => dialog.accept());

    for (let i = 1; i <= 100; i+=2) {
        
        await page.locator(`//button[@id='todo-${i}-delete']`).click();
    }

})