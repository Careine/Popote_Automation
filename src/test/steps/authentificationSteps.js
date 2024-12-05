const {Given, When, Then} = require('@cucumber/cucumber')
const {expect} = require('@playwright/test');

Given('User navigate to popote application', async function () {
    const baseURLpopote = process.env.baseURL || 'https://test-office.popotegroup.com/login';
    await this.page.goto(baseURLpopote);
});

Given('user is on the popote site login page', async function () {
    await expect(this.page).toHaveURL(/.*login/);
    const title = await this.page.title()
    expect(title).toBe('Login | Popote Office')
});

Given('user selects the type of connection email', async function () {
    await this.page.locator('//*[@id="app"]/div/div[2]/div/div[2]/div/div/div/div[2]/div/button[1]').click();
});

Given('user enter valid email as {string}', async function (email) {
    await this.page.locator('//*[@id="email"]').fill(email)
});

Given('user enter valid password as {string}', async function (password) {
    await this.page.locator('//*[@id="password-input"]').fill(password);
});

When('user click on connection button', async function () {
    await this.page.locator('//*[@id="app"]/div/div[2]/div/div[2]/div/div/div/div[2]/form/div[2]/button').click();
    await this.page.waitForTimeout(2000);
});

Then('user should be redirect on dashbord', async function () {
    const title = await this.page.title()
    expect(title).toBe('Dashboard | Popote Office')
});