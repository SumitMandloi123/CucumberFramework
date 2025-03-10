import { Page, expect } from "@playwright/test";

export class LoginPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto("https://www.saucedemo.com/");
  }

  async enterCredentials(username: string, password: string) {
    await this.page.fill("#user-name", username);
    await this.page.fill("#password", password);
  }

  async clickLogin() {
    await this.page.click("#login-button");
  }
  
  async verifyLogin() {
    await expect(this.page).toHaveURL("https://www.saucedemo.com/inventory.html");
  }
}
