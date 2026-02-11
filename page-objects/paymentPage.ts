import { Locator, Page, expect } from '@playwright/test';

export class PaymentPage {

    readonly page: Page
    readonly paymentPageTitle: Locator
    readonly cardNameTextbox: Locator
    readonly cardNumberTextbox: Locator
    readonly cardCvcTextbox: Locator
    readonly cardExpiryMonthTextbox: Locator
    readonly cardExpiryYearTextbox: Locator
    readonly payOrderButton: Locator
    readonly successfulOrderMessage: Locator


    constructor(page: Page) {
        this.page = page
        this.paymentPageTitle = page.locator('h2.heading').getByText("Payment")
        this.cardNameTextbox = page.locator('input[name="name_on_card"]')
        this.cardNumberTextbox = page.locator('input[name="card_number"]')
        this.cardCvcTextbox = page.getByRole('textbox', { name: 'ex.' })
        this.cardExpiryMonthTextbox = page.getByRole('textbox', { name: 'MM' })
        this.cardExpiryYearTextbox = page.getByRole('textbox', { name: 'YYYY' })
        this.payOrderButton = page.getByRole('button', { name: 'Pay and Confirm Order' })
        this.successfulOrderMessage = page.getByText('Congratulations! Your order has been confirmed!')
    }

    getPaymentPageTitle(): Locator {
        return this.paymentPageTitle
    }

    async fillInCardDetailsAndPay(cardName: string, cardNumber: string, cvc: string, expiryMonth: string, expiryYear: string) {
        await this.cardNameTextbox.fill(cardName)
        await this.cardNumberTextbox.fill(cardNumber)
        await this.cardCvcTextbox.fill(cvc)
        await this.cardExpiryMonthTextbox.fill(expiryMonth)
        await this.cardExpiryYearTextbox.fill(expiryYear)
        await this.payOrderButton.click()

    }

    getOrderPlacedSuccessMessage(): Locator {
        return this.successfulOrderMessage
    }
}