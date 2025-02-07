import { expect } from '@playwright/test';

export async function searchProduct(page) {
    await page.goto('/');
    await expect(page.locator('#nav-logo-sprites')).toBeVisible();
    await page.locator('#twotabsearchtextbox').fill('wireless headphone');
    await page.locator('#twotabsearchtextbox').press('Enter');
}

export async function selectProduct(page){
    await page.locator('[data-cy="title-recipe"]').nth(4).click();
}
