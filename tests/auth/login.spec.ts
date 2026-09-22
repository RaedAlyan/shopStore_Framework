import {test, expect} from '@fixtures/fixtures.ts';

test.describe('Login Page Suite', () => {

  test.beforeEach(async ({ loginPage }) => {
    await loginPage.goToLoginPage();
  });

  test('Check the login page title', async ({ page }) => {
    await expect(page).toHaveTitle(/Log In/);
  });

  test('Login with valid admin credentials', async ({ page, loginPage }) => {
    const adminEmail = process.env.TEST_ADMIN_EMAIL!;
    const adminPassword = process.env.TEST_ADMIN_PASSWORD!;
    await loginPage.login(adminEmail, adminPassword);
    await expect(page.getByTestId("nav-user-menu")).toContainText('Admin');
  });

  test('Login with valid customer credentials', async ({ page, loginPage }) => {
    const customerEmail = process.env.TEST_CUSTOMER_EMAIL!;
    const customerPassword = process.env.TEST_CUSTOMER_PASSWORD!;
    await loginPage.login(customerEmail, customerPassword);
    await expect(page.getByTestId("nav-user-menu")).toContainText('Raed');
  });
});

