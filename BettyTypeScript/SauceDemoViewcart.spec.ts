import {test,expect} from '@playwright/test';
import {Login} from '../Utils/Login';

test('SauceDemoAdd', async ({page}) => {
    await Login(page);
    await page.waitForTimeout(1000);
    await expect(page).toHaveURL(/inventory/);
    await page.getByRole('button', { name: 'Add to cart' }).first().click();
    await page.waitForTimeout(1000);
    await page.locator('.shopping_cart_link').first().click();
    await expect(page).toHaveURL(/cart/);
    await page.waitForTimeout(1000);
});