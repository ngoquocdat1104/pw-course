import { test } from '@playwright/test';

test.describe(`Suite 1`, async () => {
    test("test1", async ({page}) => {
        await test.step(`Step 1: Truy cap website`, async () => {});
        await test.step(`Step 2: Click button`, async () => {});
    })

    test("test2", async ({page}) => {
        await test.step(`Step 1: Truy cap website`, async () => {});
        await test.step(`Step 2: Click button`, async () => {});
    })
})


