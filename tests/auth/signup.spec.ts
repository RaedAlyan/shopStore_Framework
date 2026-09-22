import {test, expect} from '@fixtures/fixtures.ts';
import {FakeData} from '@utils/fakeData.ts';

test.describe('Signup Page Suite', () => {

  test.beforeEach(async ({ signupPage }) => {
    await signupPage.goToSignupPage();
  });

  test('Check the signup page title', async ({ page }) => {
    await expect(page).toHaveTitle(/Sign Up/);
  });

  test('Signup with valid credentials', async ({ page, signupPage }) => {
    const user = FakeData.user();
    await signupPage.signup(user.fullName, user.email, user.password);
    await expect(page.getByTestId("nav-user-menu")).toContainText(user.firstName);
  });

});
