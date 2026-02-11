import { expect } from '@playwright/test';
import { test } from '../utils/test-options';
import { faker } from '@faker-js/faker';
import testData from '../test-data/testData.json';

test.describe('Login Tests', () => {
    test.beforeEach(async ({ shop }) => {

        await shop.auth().navigateToLogin()
    })

    test('Login and logout with valid credentials', async ({ shop }) => {

        await shop.auth().loginWithCredentials(testData.validEmail, testData.validPassword)

        await expect(shop.auth().getLogoutButton()).toBeVisible()

        await shop.auth().logout()
        await expect(shop.auth().getLogInSignInButton()).toBeVisible()

    })

    test('Login with invalid credentials', async ({ shop }) => {

        await shop.auth().loginWithCredentials(testData.inValidEmail, testData.inValidPassword)

        await expect(shop.auth().getWrongLoginCredErrorMessage()).toBeVisible()

    })

    test('Sign up with valid data E2E flow', async ({ shop }) => {


        const randomName = faker.person.fullName();
        const randomFirstName = faker.person.firstName();
        const randomEmail = faker.internet.email()

        await shop.auth().signUp(randomName, randomEmail)

        await expect(shop.accountInfo().getAccountPageTitle()).toBeVisible()

        await shop.accountInfo().accountInfoFillUp(testData.validPassword, randomFirstName, testData.lastName)
        await expect(shop.accountInfo().getAccountCreatedMessage()).toBeVisible()
        await shop.accountInfo().getContinueButtonToProceedAndCreateAccount().click();

        await shop.auth().deleteAccount()

        await expect(shop.auth().getAccountDeletedSuccessMessage()).toBeVisible()

    })

})