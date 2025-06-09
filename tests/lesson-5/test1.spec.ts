import { test } from "@playwright/test";

const PAGE_URL = "https://material.playwrightvn.com/01-xpath-register-page.html"

test("Full suite", async ({ page }) => {
    await page.goto(PAGE_URL);

    await page.locator("//input[@id='username']").fill("nqd2001");

    await page.locator("//input[@id='email']").fill("nqd2001@gmail.com");

    await page.locator("//input[@id='male']").check();

    await page.locator("//input[@id='reading']").check();

    await page.locator("//select[@id='interests']").selectOption([
        "Science", "Art"
    ]);

    await page.locator("//select[@id='country']").selectOption("Australia");

    await page.locator("//input[@id='dob']").fill("2000-09-12");

    await page.locator("//input[@id='profile']").setInputFiles("pw-course/tests/lesson-5/picture.png");

    await page.locator("//textarea[@id='bio']").fill("Hello World!!");

    await page.locator("//input[@id='rating']").fill("10");

    await page.locator("//input[@id='favcolor']").fill("#ffffff");

    await page.locator("//div[@class='tooltip']").hover();

    await page.locator("//input[@id='toggleOption']").scrollIntoViewIfNeeded();
    await page.locator("//label[@class='switch']").click();

    await page.locator("//div[@id='starRating']").click({ position: { x: 90, y: 10 } });

    await page.locator("//button[@type='submit']").click();
})