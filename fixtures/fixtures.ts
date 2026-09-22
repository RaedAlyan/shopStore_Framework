import { test as base } from '@playwright/test';
import { LoginPage } from '@pages/loginPage.ts';
import { SignupPage } from '@pages/signupPage.ts';

type Fixtures = {
  loginPage: LoginPage;
  signupPage: SignupPage;
};

export const test = base.extend<Fixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  signupPage: async ({ page }, use) => {
    await use(new SignupPage(page));
  },
});

export { expect } from '@playwright/test';
