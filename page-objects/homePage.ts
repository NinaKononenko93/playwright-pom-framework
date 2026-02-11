import { Locator, Page } from '@playwright/test';

export class HomePage {

    readonly page: Page
    readonly homePageBanner: Locator



    constructor(page: Page) {
        this.page = page
        this.homePageBanner = page.locator('#slider-carousel')


    }
    async navigateToHomePage() {
        await this.page.goto('/')

    }
    getHomPageBannerCarusel(): Locator {
        return this.homePageBanner
    }

}