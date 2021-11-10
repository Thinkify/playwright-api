const { test, expect } = require('@playwright/test');
const { FBPageObject } = require('../page-object/fb-object');


test.describe('feature facebook', () => {
    test.beforeEach(async ({ page }) => {
        const FB = new FBPageObject(page);
        await FB.goto();
    });

    test('facebook Signup 1', async ({ page }) => {
        const FB = new FBPageObject(page);
        await FB.SignUp();
    });

      test('facebook Login 2', async ({ page }) => {
        const FB = new FBPageObject(page);
        await FB.Login();
    });
});