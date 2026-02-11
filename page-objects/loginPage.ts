import { Locator, Page } from '@playwright/test';

export class LoginPage {

    readonly page: Page
    readonly loginForm: Locator
    readonly logoutButton: Locator
    readonly loginSignIn: Locator
    readonly incorrectPassOrEmailMessage: Locator
    readonly successfulAccountDeletedMessage: Locator
    readonly emailField: Locator
    readonly passwordField: Locator
    readonly loginButton: Locator
    readonly signUpForm: Locator
    readonly nameTextBox: Locator
    readonly emailTextBoxSignUp: Locator
    readonly signUpButton: Locator
    readonly deleteAccountButton: Locator

    constructor(page: Page) {
        this.page = page
        this.loginForm = page.locator('.login-form')
        this.logoutButton = page.getByText(' Logout')
        this.incorrectPassOrEmailMessage = page.getByText("Your email or password is incorrect!")
        this.loginSignIn = page.getByText(' Signup / Login')
        this.successfulAccountDeletedMessage = page.getByText('Account Deleted!')
        this.emailField = this.loginForm.getByPlaceholder('Email Address')
        this.passwordField = this.loginForm.getByRole('textbox', { name: 'Password' })
        this.loginButton = this.loginForm.getByRole('button', { name: 'Login' })
        this.signUpForm = page.locator('.signup-form')
        this.nameTextBox = this.signUpForm.getByPlaceholder('Name')
        this.emailTextBoxSignUp = this.signUpForm.getByRole('textbox', { name: 'Email Address' })
        this.signUpButton = this.signUpForm.getByRole('button', { name: 'Signup' })
        this.deleteAccountButton = page.getByText(' Delete Account')




    }
    async navigateToLogin() {
        await this.page.goto('/')
        await this.loginSignIn.click()
    }

    async loginWithCredentials(Email: string, Password: string) {
        await this.emailField.fill(Email)
        await this.passwordField.fill(Password)
        await this.loginButton.click()
    }

    async signUp(Name: string, Email: string) {
        await this.nameTextBox.fill(Name)
        await this.emailTextBoxSignUp.fill(Email)
        await this.signUpButton.click()
    }
    async logout() {
        await this.logoutButton.click()
    }
    async deleteAccount() {
        await this.deleteAccountButton.click()
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
