import { Page } from '@playwright/test';
import { LoginPage } from '../page-objects/loginPage';
import { AccountInformationPage } from '../page-objects/enterAccountInformation';
import { ProductsPage } from '../page-objects/products';
import { CartPage } from '../page-objects/cart';
import { CheckoutPage } from './checkoutPage';
import { PaymentPage } from './paymentPage';
import { HomePage } from './homePage';

export class PageManager {
    private readonly page: Page;
    private readonly loginPage: LoginPage;
    private readonly accountInformationPage: AccountInformationPage;
    private readonly productsPage: ProductsPage;
    private readonly cartPage: CartPage;
    private readonly checkoutPage: CheckoutPage;
    private readonly paymentPage: PaymentPage;
    private readonly homePage: HomePage;

    constructor(page: Page) {
        this.page = page;
        this.loginPage = new LoginPage(this.page);
        this.accountInformationPage = new AccountInformationPage(this.page);
        this.productsPage = new ProductsPage(this.page);
        this.cartPage = new CartPage(this.page);
        this.checkoutPage = new CheckoutPage(this.page);
        this.paymentPage = new PaymentPage(this.page);
        this.homePage = new HomePage(this.page);
    }

    auth() {
        return this.loginPage;
    }
    accountInfo() {
        return this.accountInformationPage
    }
    products() {
        return this.productsPage
    }
    cart() {
        return this.cartPage
    }

    checkout() {
        return this.checkoutPage
    }
    payment() {
        return this.paymentPage
    }
    goHome() {
        return this.homePage
    }
}