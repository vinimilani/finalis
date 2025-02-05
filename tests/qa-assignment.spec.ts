import { test, expect } from '@playwright/test';

test.describe('QA Assignment', () =>{
    test('First exercise', async ({ page }) => {
        await page.goto('/');
        await expect (page.locator('#nav-logo-sprites')).toBeVisible();
        await page.locator('#twotabsearchtextbox').fill('wireless headphone');
        await page.locator('#twotabsearchtextbox').press('Enter');
        await page.locator('#a-autoid-0-announce').click();
        await page.getByLabel('Price: High to Low').click();
        const productCard = await page.locator('[data-cy="title-recipe"]').nth(4);
        await productCard.click();
        const stockAvailability =  await page.locator('#availability');
        await expect (stockAvailability).toHaveText('In Stock');
      });
})

