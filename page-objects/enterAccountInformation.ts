import { v } from '@faker-js/faker/dist/airline-CWrCIUHH';
import { Page, Locator } from '@playwright/test';

export class AccountInformationPage {

    readonly page: Page
    readonly accountPageTitle: Locator
    readonly accountCreatedMessage: Locator
    readonly continueButtonToProceedAndCreateAccount: Locator
    readonly accountDeletedMessage: Locator
    readonly title: Locator
    readonly passwordTexbox: Locator
    readonly selectDays: Locator
    readonly pickADay: Locator
    readonly selectMonths: Locator
    readonly pickAMonth: Locator
    readonly selectYearDropDown: Locator
    readonly pickAYear: Locator
    readonly signUpNewsLetterCheckbox: Locator
    readonly receiveSpecialOffersfromPartnersCheckbox: Locator
    readonly firstNameTextBox: Locator
    readonly lastNameTextBox: Locator
    readonly address1Checkbox: Locator
    readonly country: Locator
    readonly state: Locator
    readonly city: Locator
    readonly zipcode: Locator
    readonly mobileTextbox: Locator
    readonly createAccountButton: Locator

    constructor(page: Page) {
        this.page = page
        this.accountPageTitle = page.getByText('Enter Account Information')
        this.accountCreatedMessage = page.getByText('Account Created!')
        this.continueButtonToProceedAndCreateAccount = page.getByRole('link', { name: 'Continue' })
        this.accountDeletedMessage = page.getByText('Account Deleted!')
        this.title = page.getByRole('radio', { name: 'Mr.' })
        this.passwordTexbox = page.getByLabel('Password')
        this.selectDays = page.locator('#uniform-days')
        this.pickADay = page.locator('#days')
        this.selectMonths = page.locator('#uniform-months')
        this.pickAMonth = page.locator('#months')
        this.selectYearDropDown = page.locator('#uniform-years')
        this.pickAYear = page.locator('#years')
        this.signUpNewsLetterCheckbox = page.getByLabel('Sign up for our newsletter!')
        this.receiveSpecialOffersfromPartnersCheckbox = page.getByLabel('Receive special offers from our partners!')
        this.firstNameTextBox = page.getByRole('textbox', { name: "First name" })
        this.lastNameTextBox = page.getByRole('textbox', { name: "Last name" })
        this.address1Checkbox = page.locator('#address1')
        this.country = page.locator('#country')
        this.state = page.getByRole('textbox', { name: 'State' })
        this.city = page.locator('#city')
        this.zipcode = page.locator('#zipcode')
        this.mobileTextbox = page.getByRole('textbox', { name: 'Mobile Number' })
        this.createAccountButton = page.getByRole('button', { name: 'Create Account' })




    }

    getAccountPageTitle(): Locator {
        return this.accountPageTitle
    }

    getAccountCreatedMessage(): Locator {
        return this.accountCreatedMessage
    }

    getContinueButtonToProceedAndCreateAccount(): Locator {
        return this.continueButtonToProceedAndCreateAccount
    }

    getAccountDeletedMessage(): Locator {
        return this.accountDeletedMessage
    }

    async accountInfoFillUp(Password: string, FirstName: string, LastName: string) {
        await this.title.check()
        await this.passwordTexbox.fill(Password)
        await this.selectDays.click()
        await this.pickADay.selectOption('6');

        await this.selectMonths.click()
        await this.pickAMonth.selectOption('June')

        await this.selectYearDropDown.click()
        await this.pickAYear.selectOption('1990')
        await this.signUpNewsLetterCheckbox.check()
        await this.receiveSpecialOffersfromPartnersCheckbox.check()
        await this.firstNameTextBox.fill(FirstName)
        await this.lastNameTextBox.fill(LastName)
        await this.address1Checkbox.fill('TestAddress')
        await this.country.click();
        await this.country.selectOption('United States');
        await this.state.fill('TestState')
        await this.city.fill('TestCity')
        await this.zipcode.fill('TestZipcode')
        await this.mobileTextbox.fill('1234567890')
        await this.createAccountButton.click()

    }


}