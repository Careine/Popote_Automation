const { Before, After, BeforeAll } = require('@cucumber/cucumber');
const { chromium } = require('@playwright/test');

// Avant chaque scénario, lancer le navigateur et créer une nouvelle page
Before(async function () {
        this.browser = await chromium.launch({ headless: false });
        this.context = await this.browser.newContext();
        this.page = await this.context.newPage();
});

// Après chaque scénario, fermer le navigateur
After(async function () {
    await this.page.close();
    await this.browser.close();
});
