import { test as base } from '@playwright/test';
import { LoginPage } from '@pages/loginPage.ts';
import { SignupPage } from '@pages/signupPage.ts';
import { UserMenu } from '@pages/userMenu.ts';

type Fixtures = {
  loginPage: LoginPage;
  signupPage: SignupPage;
  userMenu: UserMenu;
};

export const test = base.extend<Fixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  signupPage: async ({ page }, use) => {
    await use(new SignupPage(page));
  },
  userMenu: async ({ page }, use) => {
    await use(new UserMenu(page));
  },
});

export { expect } from '@playwright/test';
