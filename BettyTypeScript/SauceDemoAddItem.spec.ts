import {test,expect} from '@playwright/test';
import {Login} from '../Utils/Login';

test('SauceDemoAdd', async ({page}) => {
    await Login(page);
    await page.waitForTimeout(1000);
    await expect(page).toHaveURL(/inventory/);
    await page.locator('.inventory_item_name').first().click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', {name: 'add to cart'}).first().click();
    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
    await page.waitForTimeout(1000);
});