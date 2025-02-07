import { test, expect } from '@playwright/test';
import { searchProduct, selectProduct } from '../utils/utils';

test.describe('QA Assignment', () =>{
    test('First exercise', async ({ page }) => {
        await searchProduct(page);
        await page.locator('#a-autoid-0-announce').click();
        await page.getByLabel('Price: High to Low').click();
        await selectProduct(page);
        const stockAvailability =  await page.locator('#availability');
        await expect(stockAvailability).toHaveText(/In Stock/i);
      });

      test('Second exercise', async ({ page }) => {
        await searchProduct(page);
        await selectProduct(page);

        const addToCart = await page.locator('#add-to-cart-button');
        await expect(addToCart).toBeEnabled();

        const checkTitle = await page.locator('#titleSection');
        await expect(checkTitle).toContainText(/headphone/i);

        const quantity = await page.locator('#quantity').inputValue();
        await expect(parseInt(quantity)).toBe(1);

        const priceElement = await page.locator('#corePrice_feature_div');
        let priceText = await priceElement.textContent();
        const originalPrice = parseFloat(priceText.replace(/[^\d.-]+/g, ''));
        const quantityDropdown = await page.locator('#quantity');
        await quantityDropdown.click({ force: true });
        await page.getByLabel('2', { exact: true }).getByText('2').click();
      
        await addToCart.click();
        const updatedPriceElement = await page.locator('.a-price-whole');
        const updatedPriceText = await updatedPriceElement.textContent();

      
        const updatedPrice = parseFloat(updatedPriceText.replace(/[^\d.-]+/g, ''));
        expect(updatedPrice).toBeCloseTo(originalPrice * 2, 2);
      });
})

