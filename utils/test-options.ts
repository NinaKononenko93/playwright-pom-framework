import { test as base } from '@playwright/test'
import { PageManager } from '../page-objects/pageManager';

export type TestOptionss = {
    shop: PageManager

}

export const test = base.extend<TestOptionss>({
    shop: async ({ page }, use) => {
        const shop = new PageManager(page)
        await use(shop)
    }


})