import { Locator, Page, expect } from '@playwright/test';

export class CartPage {

    readonly page: Page
    readonly cartItemAdded: Locator
    readonly cartPageTitle: Locator
    readonly cartMenuItem: Locator
    readonly emptyCartState: Locator
    readonly hereButtonWhenCartEmpty: Locator
    readonly checkOutButton: Locator

    constructor(page: Page) {
        this.page = page
        this.cartItemAdded = page.locator('tr')
        this.cartPageTitle = page.getByText('Shopping Cart');
        this.cartMenuItem = page.getByRole('link').filter({ hasText: "Cart" })
        this.emptyCartState = page.locator('#empty_cart')
        this.hereButtonWhenCartEmpty = page.getByRole('link', { name: "here" })
        this.checkOutButton = page.locator('.btn.btn-default.check_out')
    }

    async navigateToCart() {
        await this.page.goto('/')
        await this.cartMenuItem.click()
    }

    getEmptyCartState(): Locator {
        return this.emptyCartState
    }

    getCartPageTitle(): Locator {
        return this.cartPageTitle
    }

    async clickHereButton() {
        await this.hereButtonWhenCartEmpty.click()
    }
    getCartItem(itemName: string): Locator {
        return this.cartItemAdded.filter({ hasText: itemName });
    }

    async proceedToCheckout() {
        await this.checkOutButton.click()
    }

    async deleteCartItem(itemName: string) {
        await this.getCartItem(itemName).locator('i.fa.fa-times').click()
    }
}