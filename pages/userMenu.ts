import { type Locator, type Page } from "@playwright/test";

export class UserMenu {
  readonly page: Page;
  readonly userMenuButton: Locator;
  readonly logoutButton: Locator;
  readonly loginLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.userMenuButton = page.getByTestId('nav-user-menu');
    this.logoutButton = page.getByTestId('nav-logout');
    this.loginLink = page.getByTestId('nav-login');
  }

  async logout() {
    await this.userMenuButton.click();
    await this.logoutButton.click();
  }
}
