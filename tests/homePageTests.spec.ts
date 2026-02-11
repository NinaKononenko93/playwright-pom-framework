import testData from '../test-data/testData.json';
import { expect, request as playwrightRequest } from '@playwright/test';
import { test } from '../utils/test-options';

test.beforeEach(async ({ shop }) => {
    await shop.goHome().navigateToHomePage()
})

test('Home Page Banner', async ({ shop }) => {

    await expect(shop.goHome().getHomPageBannerCarusel()).toBeVisible()
})