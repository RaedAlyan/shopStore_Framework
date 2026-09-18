import {test, expect} from '@playwright/test';
import {SignupPage} from '../../pages/signupPage.ts';
import {FakeData} from '../../utils/fakeData.ts';

test.describe('Signup Page Suite', () => {

  let signupPage: SignupPage;

  test.beforeEach(async ({ page }) => {
    signupPage = new SignupPage(page);
    await signupPage.goToSignupPage();
  });

  test('Check the signup page title', async ({ page }) => {
    await expect(page).toHaveTitle(/Sign Up/);
  });

  test('Signup with valid credentials', async ({ page }) => {
    const user = FakeData.user();
    await signupPage.signup(user.fullName, user.email, user.password);
    await expect(page.getByTestId("nav-user-menu")).toContainText(user.firstName);
  });

});
