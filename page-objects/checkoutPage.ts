import { Locator, Page, expect } from '@playwright/test';

export class CheckoutPage {

    readonly page: Page
    readonly checkoutTitle: Locator
    readonly itemInOrder: Locator
    readonly placeOrderButton: Locator


    constructor(page: Page) {
        this.page = page
        this.checkoutTitle = page.getByText('Checkout');
        this.itemInOrder = page.locator('tr')
        this.placeOrderButton = page.getByRole('link', { name: 'Place Order' });

    }

    getCheckoutPageTitle(): Locator {
        return this.checkoutTitle
    }

    getOrderReviewItem(itemName: string): Locator {
        return this.itemInOrder.filter({ hasText: itemName });
    }

    async placeOrder() {
        await this.placeOrderButton.click()
    }



}