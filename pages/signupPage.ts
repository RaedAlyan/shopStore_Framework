import { type Locator, type Page } from "@playwright/test";

export class SignupPage {
  readonly page: Page;
  readonly fullNameInput: Locator;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly confirmPasswordInput: Locator;
  readonly termsCheckbox: Locator;
  readonly signupButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.fullNameInput = page.getByTestId('register-name');
    this.emailInput = page.getByTestId('register-email');
    this.passwordInput = page.getByTestId('register-password');
    this.confirmPasswordInput = page.getByTestId('register-confirm-password');
    this.termsCheckbox = page.getByTestId('register-terms');
    this.signupButton = page.getByTestId('register-submit');
  }

  async goToSignupPage() {
    await this.page.goto('register.html');
  }

  async signup(fullName: string, email: string, password: string) {
    await this.fullNameInput.fill(fullName);
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.confirmPasswordInput.fill(password);
    await this.termsCheckbox.check();
    await this.signupButton.click();
  }
}
