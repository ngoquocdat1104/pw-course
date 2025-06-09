import { test } from "@playwright/test";

test("Full suite", async ({ page }) => {
    let titles, contents;

    await test.step("Get data", async() => {
        await page.goto("https://vnexpress.net/khoa-hoc-cong-nghe", { waitUntil: "domcontentloaded" });
        titles = await page.locator("//h3[@class='title-news']/a").allTextContents();
        contents = await page.locator("//p[@class='description']").allTextContents();
        console.log(titles);
    })


    await test.step("Go to the notes", async() => {
        await page.goto("https://material.playwrightvn.com/04-xpath-personal-notes.html");

        for (let i = 0; i < titles.length; i++) {
            console.log(titles[i]);
            await page.locator("//input[@id='note-title']").fill(titles[i]);
            await page.locator("//textarea[@id='note-content']").fill(contents[i]);
            await page.click("//button[@id='add-note']");

        }
    })
    

    await test.step("Search topic", async() => {
        await page.locator("//input[@type='text' and @id='search']").fill("AI");
        await page.waitForTimeout(2000);
        await page.locator("//input[@type='text' and @id='search']").clear();
        await page.locator("//input[@type='text' and @id='search']").fill("Apple");

    })
    
})

