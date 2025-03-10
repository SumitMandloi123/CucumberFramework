import { Given, When, Then } from "@cucumber/cucumber";
import { Page, chromium, Browser } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import dotenv from "dotenv";

dotenv.config();

const username = process.env.LOGIN_USERNAME as string;
const password = process.env.LOGIN_PASSWORD as string;

let browser: Browser;
let page: Page;
let loginPage: LoginPage;

Given("I open the login page", async function () {
  browser = await chromium.launch({ headless: process.env.CI ? true : false });
  page = await browser.newPage();
  loginPage = new LoginPage(page);
  await loginPage.navigate();
});

When("I enter valid credentials", async function () {
  await loginPage.enterCredentials(username, password);
});

When("I click on the login button", async function () {
  await loginPage.clickLogin();
});

Then("I should see the homepage", async function () {
  await loginPage.verifyLogin();
  await browser.close();
});
