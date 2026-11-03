import {test,expect} from '@playwright/test';

test('SauceDemoLogin', async ({page}) => {

   await page.goto('https://www.saucedemo.com/');
   await page.locator('input[id="user-name"]').fill('standard_user');
   await page.locator('input[id="password"]').fill('secret_sauce');
   await page.locator('input[id="login-button"]').click();
   await page.waitForTimeout(2000);
   const results = await page.locator('title').allTextContents();
});