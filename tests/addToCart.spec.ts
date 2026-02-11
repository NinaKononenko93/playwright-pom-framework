import testData from '../test-data/testData.json';
import { expect, request as playwrightRequest } from '@playwright/test';
import { test } from '../utils/test-options';


test.describe('Product Tests', () => {

    test("End-to-end login, add to cart and checkout", async ({ shop }) => {
        await shop.auth().navigateToLogin()
        await shop.auth().loginWithCredentials(testData.validEmail, testData.validPassword)
        await shop.products().addToCartFromDetailedProductView(testData.itemtoCartOne, '2')

        await expect(shop.products().addedToCartToaster).toBeVisible()

        await shop.products().continueShoppingButton.click()
        await shop.products().addItemtoCartFromProductsPage(testData.itemtoCartTwo)

        await expect(shop.products().addedToCartToaster).toBeVisible()

        await shop.products().viewCartButton.click()

        await expect(shop.cart().getCartPageTitle()).toBeVisible()

        await expect(shop.cart().getCartItem(testData.itemtoCartOne)).toBeVisible()
        await expect(shop.cart().getCartItem(testData.itemtoCartTwo)).toBeVisible()
        await shop.cart().deleteCartItem(testData.itemtoCartTwo)

        await shop.cart().proceedToCheckout()
        await expect(shop.checkout().getCheckoutPageTitle()).toBeVisible()
        await expect(shop.checkout().getOrderReviewItem(testData.itemtoCartOne)).toBeVisible()
        await expect(shop.checkout().getOrderReviewItem(testData.itemtoCartTwo)).not.toBeVisible()
        await shop.checkout().placeOrder()

        await expect(shop.payment().getPaymentPageTitle()).toBeVisible()
        await shop.payment().fillInCardDetailsAndPay(testData.cardName, testData.cardNumber, testData.cvc, testData.cardMonth, testData.cardYear)
        await expect(shop.payment().getOrderPlacedSuccessMessage()).toBeVisible()
    })

    test('Verify Cart Empty State', async ({ shop }) => {
        await shop.cart().navigateToCart()
        await shop.cart().clickHereButton()

        await expect(shop.products().getAllProductsHeading()).toBeVisible()
    })
})
