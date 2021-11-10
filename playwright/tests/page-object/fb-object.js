const { expect } = require('@playwright/test');

exports.FBPageObject = class PlaywrightDevPage {
    constructor(page) {
      this.page = page;
    }
  
    async goto() {
      await this.page.goto('https://www.facebook.com/');
      await this.page.waitForSelector('.fb_content [data-testid="royal_login_form"]');
    }
  
    async Login() {
      await this.page.fill('input[id="email"]', '9988776655');
      await this.page.fill('input[id="pass"]', 'test@123');
      await this.page.click('text=Log In');
    }
  
    async SignUp() {
        await this.page.click('[data-testid="open-registration-form-button"]');
      
        await this.page.fill('[placeholder="First name"]', 'asha');
      
        await this.page.fill('[aria-label="Surname"]', 'rani');
      
        await this.page.fill('[aria-label="Mobile number or email address"]', '9988776655');
      
        await this.page.fill('[aria-label="New password"]', 'test@123');
      
        await this.page.selectOption('[aria-label="Year"]', '2010');
        await this.page.waitForSelector('input[name="sex"]');
      
        await this.page.click('input[name="sex"][value="1"]');
      
        await this.page.click('button:has-text("Sign Up")')
    }
  }