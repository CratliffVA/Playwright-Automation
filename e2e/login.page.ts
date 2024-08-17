import { expect, type Locator, type Page } from '@playwright/test';

// Class representing the login page and its actions
export class Loginpage {
  readonly page: Page;           // Page object for interacting with the browser
  readonly username: Locator;    // Locator for the username input field
  readonly password: Locator;    // Locator for the password input field

  // Constructor initializes the page and locators
  constructor(page: Page) {
    this.page = page;
    // Locate the username input field by its placeholder text
    this.username = page.getByPlaceholder('User name');
    // Locate the password input field by its exact placeholder text
    this.password = page.getByPlaceholder('Password', { exact: true });
  }

  // Method to navigate to the provided URL
  async gotoUrl(url: string) {
    await this.page.goto(url);  // Navigate to the specified URL
  }

  // Method to perform the login action
  async login(username: string, password: string) {
    await this.username.fill(username);  // Fill in the username field
    await this.password.click();         // Click on the password field to focus it
    await this.password.fill(password);  // Fill in the password field
  }
}
