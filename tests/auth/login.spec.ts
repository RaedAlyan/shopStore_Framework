import {test, expect} from '@fixtures/fixtures.ts';

test.describe('Login Page Suite', () => {

  test.beforeEach(async ({ loginPage }) => {
    await test.step('Navigate to the login page', async () => {
      await loginPage.goToLoginPage();
    });
  });

  test('Check the login page title', async ({ page }) => {
    await test.step('Verify the login page title', async () => {
      await expect(page).toHaveTitle(/Log In/);
    });
  });

  test('Login with valid admin credentials', async ({ page, loginPage }) => {
    await test.step('Fill in the login form with valid admin credentials and submit', async () => {
      const adminEmail = process.env.TEST_ADMIN_EMAIL!;
      const adminPassword = process.env.TEST_ADMIN_PASSWORD!;
      await loginPage.login(adminEmail, adminPassword);
    });

    await test.step('Verify that the user menu contains the admin name', async () => {
      await expect(page.getByTestId("nav-user-menu")).toContainText('Admin');
    });
  });

  test('Login with valid customer credentials', async ({ page, loginPage }) => {
    await test.step('Fill in the login form with valid customer credentials and submit', async () => {
      const customerEmail = process.env.TEST_CUSTOMER_EMAIL!;
      const customerPassword = process.env.TEST_CUSTOMER_PASSWORD!;
      await loginPage.login(customerEmail, customerPassword);
    });

    await test.step('Verify that the user menu contains the customer name', async () => {
      await expect(page.getByTestId("nav-user-menu")).toContainText('Raed');
    });
  });
});
