import { Locator, Page } from '@playwright/test';

export class LoginPage {

    readonly page: Page
    readonly loginForm: Locator
    readonly logoutButton: Locator
    readonly loginSignIn: Locator
    readonly incorrectPassOrEmailMessage: Locator
    readonly successfulAccountDeletedMessage: Locator

    constructor(page: Page) {
        this.page = page
        this.loginForm = page.locator('.login-form')
        this.logoutButton = page.getByText(' Logout')
        this.incorrectPassOrEmailMessage = page.getByText("Your email or password is incorrect!")
        this.loginSignIn = page.getByText(' Signup / Login')
        this.successfulAccountDeletedMessage = page.getByText('Account Deleted!')


    }
    async navigateToLogin() {
        await this.page.goto('/')
        await this.loginSignIn.click()
    }

    async loginWithCredentials(Email: string, Password: string) {
        await this.loginForm.getByPlaceholder('Email Address').fill(Email)
        await this.loginForm.getByRole('textbox', { name: 'Password' }).fill(Password)
        await this.loginForm.getByRole('button', { name: 'Login' }).click()
    }

    async signUp(Name: string, Email: string) {
        await this.page.locator('.signup-form').getByPlaceholder('Name').fill(Name)
        await this.page.locator('.signup-form').getByRole('textbox', { name: 'Email Address' }).fill(Email)
        await this.page.locator('.signup-form').getByRole('button', { name: 'Signup' }).click()
    }
    async logout() {
        await this.page.getByText(' Logout').click()
    }
    async deleteAccount() {
        await this.page.getByText(' Delete Account').click()
    }
    getLogInSignInButton(): Locator {
        return this.loginSignIn
    }
    getLogoutButton(): Locator {
        return this.logoutButton
    }

    getWrongLoginCredErrorMessage(): Locator {
        return this.incorrectPassOrEmailMessage
    }
    getAccountDeletedSuccessMessage(): Locator {
        return this.successfulAccountDeletedMessage
    }
}
