import {test, expect} from '@fixtures/fixtures.ts';

test.describe('Logout Suite', () => {

  test.beforeEach(async ({ loginPage }) => {
    await test.step('Navigate to the login page', async () => {
      await loginPage.goToLoginPage();
    });

    await test.step('Fill in the login form with valid customer credentials and submit', async () => {
      const customerEmail = process.env.TEST_CUSTOMER_EMAIL!;
      const customerPassword = process.env.TEST_CUSTOMER_PASSWORD!;
      await loginPage.login(customerEmail, customerPassword);
    });
  });

  test('Logout redirects to the home page and shows the login link', async ({ page, userMenu }) => {
    await test.step('Click the logout button in the user menu', async () => {
      await userMenu.logout();
    });

    await test.step('Verify that the user is redirected to the home page and the login link is visible', async () => {
      await expect(page).toHaveURL(/index\.html/);
      await expect(userMenu.loginLink).toBeVisible();
    });
  });
});
