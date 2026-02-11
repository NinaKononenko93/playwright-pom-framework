import { expect, request as playwrightRequest } from '@playwright/test';
import { test } from '../utils/test-options';


test.describe('Product filter and search tests', () => {
    test.beforeEach(async ({ shop }) => {
        await shop.products().navigateToProducts()
    })

    test('Product filter by Category', async ({ shop }) => {
        await shop.products().selectCategory('Dress')
        await expect(shop.products().getProductsHeadingCategory()).toBeVisible()
        await expect(shop.products().getBreadcrumbs()).toBeVisible()
    })

    test('Product filter by Brand', async ({ shop }) => {
        await shop.products().selectBrand()
        await expect(shop.products().getBrandHeading()).toBeVisible()
        await expect(shop.products().getBreadcrumbs()).toBeVisible()

    })

    test('Product Search', async ({ shop }) => {
        await shop.products().searchProduct()
        await expect(shop.products().getsearchedProducts()).toBeVisible()
    })


})