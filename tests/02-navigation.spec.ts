import { test } from '@playwright/test';

test(`Basic action`, async ({ page }) => {
    await page.goto("https://material.playwrightvn.com/");
    await page.goto("https://google.com.vn")
});

test(`Clicking`, async ({ page }) => {
    await page.goto("https://material.playwrightvn.com/018-mouse.html");

    // single click
    await page.locator("//div[@id='clickArea']").click();

    // double click
    await page.locator("//div[@id='clickArea']").dblclick();

    // right click
    await page.locator("//div[@id='clickArea']").click({
        button: 'right'
    });

    // modifier click
    await page.locator("//div[@id='clickArea']").click({
        modifiers: ['Alt']
    });
})


test('Basic input', async ({ page }) => {
    await page.goto("https://material.playwrightvn.com/01-xpath-register-page.html");

    // input
    await page.locator("//input[@id='username']").fill("ngodat"); //copy paste text
    await page.locator("//input[@id='email']").pressSequentially("ngodat@mail.com", {
        delay: 100
    }); //typing


    // radio
    await page.locator("//input[@id='female']").check();

    // check box
    await page.locator("//input[@id='reading']").check();
    await page.locator("//input[@id='traveling']").check();
    await page.locator("//input[@id='traveling']").uncheck();

    // get check status
    const isCheck = await page.locator("//input[@id='traveling']").isChecked();
    console.log(isCheck);

})

test('select', async ({ page }) => {
    await page.goto("https://material.playwrightvn.com/01-xpath-register-page.html");

    await page.locator("//select[@id='country']").selectOption("Canada");

    await page.locator("//select[@id='interests']").selectOption([
        "Music", "Art"
    ]);
})

test('date', async ({ page }) => {
    await page.goto("https://material.playwrightvn.com/01-xpath-register-page.html");

    await page.locator("//input[@id='dob']").fill("2001-04-30");
    await page.locator("//input[@id='profile']").setInputFiles("pw-course/tests/test.txt");
    await page.locator("//div[@class='tooltip']").hover();
})