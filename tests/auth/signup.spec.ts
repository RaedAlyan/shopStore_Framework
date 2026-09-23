import {test, expect} from '@fixtures/fixtures.ts';
import {FakeData} from '@utils/fakeData.ts';

test.describe('Signup Page Suite', () => {

  test.beforeEach(async ({ signupPage }) => {
    await test.step('Navigate to the signup page', async () => {
      await signupPage.goToSignupPage();
    });
  });

  test('Check the signup page title', async ({ page }) => {
    await test.step('Verify the signup page title', async () => {
      await expect(page).toHaveTitle(/Sign Up/);
    });
  });

  test('Signup with valid credentials', async ({ page, signupPage }) => {
    const user = FakeData.user();
    await test.step('Fill in the signup form with valid credentials and submit', async () => {
      await signupPage.signup(user.fullName, user.email, user.password);
    });

    await test.step('Verify that the user menu contains the user name', async () => {
      await expect(page.getByTestId("nav-user-menu")).toContainText(user.firstName);
    });
  });
});
