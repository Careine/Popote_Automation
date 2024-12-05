const { Given, When, Then } = require('@cucumber/cucumber')
const { expect } = require('@playwright/test')
const generateFormData = require('../../fixture/faker.js')

const formDataLastname = generateFormData().lastname;
const formDataFirstname = generateFormData().firstname;
const formDataEmail = generateFormData().email;
const formDataPhone = generateFormData().phone_number;

//Scenario 1: Create user account
Given('I click on account menu', async function () {
    await this.page.locator('//*[@id="navbar-nav"]/li[3]/a', { state: 'visible', timeout: 10000 });
    await this.page.locator('//*[@id="navbar-nav"]/li[3]/a').click();
    await this.page.locator('//*[@id="sidebarConfigs"]/ul/li[1]/a', { state: 'visible', timeout: 10000 });
    await this.page.locator('//*[@id="sidebarConfigs"]/ul/li[1]/a').click();
    await this.page.waitForTimeout(2000);
});

Given('I should be redirect on list of users', async function () {
    const userPageTitle = await this.page.locator('//*[@id="layout-wrapper"]/div[2]/div/div/div[1]/div/div/div[1]/h4')
    expect(userPageTitle).toContainText('Utilisateurs')
});

Given('I navigate to New user page', async function () {
    await this.page.locator('//*[@id="layout-wrapper"]/div[2]/div/div/div[2]/div/div/div/div[1]/div/button').click();
    await this.page.waitForTimeout(2000);
    expect(this.page).toHaveURL(/.*staff/);
});

When('I enter surname as {string}', async function (surname) {
    await this.page.locator('//*[@id="lastname"]').fill(surname || formDataLastname);
});

When('I enter firstname as {string}', async function (firstname) {
    await this.page.locator('//*[@id="name"]').fill(firstname || formDataFirstname);
    await this.page.waitForTimeout(2000);
});

// When('I enter phone_number as {string}', async function (string) {
//     console.log(formDataPhone)
//     await this.page.locator('//*[@id="__BVID__550802___BV_modal__-body"]/form/div[2]/div[1]/div/div/input').fill(string);
//     //await this.page.waitForTimeout(2000);
// });

When('I enter email as {string}', async function (email) {
    await this.page.locator('//*[@id="email"]').fill(email || formDataEmail);
    await this.page.waitForTimeout(2000);
});

When('I select the role', async function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

When('I click on button save', async function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

Then('I should see successfully message', async function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

//Scenario 2: Create user account with invalid format email and phone number 

When('I enter fixe phone number as {string}', async function (string) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

When('I enter invalid email as {string}', async function (string) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

Then('I should see failure message', async function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

// Scenario 3: Recherche user 

When('I enter user email as {string}', async function (string) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

Then('I should see the list of users containing only search information', async function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

// Scenario 4: Update user information 

When('I click on button edit', async function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

When('I should be redirect on udapte page', async function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

When('I modify user surname as {string}', async function (string) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

// Scenario 5: Delete user information 

When('I click on button Delete', async function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

Then('I click OK to redirect on the list of users', async function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});