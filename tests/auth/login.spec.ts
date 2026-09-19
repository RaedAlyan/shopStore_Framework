import {test, expect} from '@playwright/test';
import {LoginPage} from '@pages/loginPage.ts';

test.describe('Login Page Suite', () => {

  let loginPage: LoginPage;
  
  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goToLoginPage();
  });

  test('Check the login page title', async ({ page }) => {
    await expect(page).toHaveTitle(/Log In/);
  });

  test('Login with valid admin credentials', async ({ page }) => {
    const adminEmail = process.env.TEST_ADMIN_EMAIL!;
    const adminPassword = process.env.TEST_ADMIN_PASSWORD!;
    await loginPage.login(adminEmail, adminPassword);
    await expect(page.getByTestId("nav-user-menu")).toContainText('Admin');
  });

  test('Login with valid customer credentials', async ({ page }) => {
    const customerEmail = process.env.TEST_CUSTOMER_EMAIL!;
    const customerPassword = process.env.TEST_CUSTOMER_PASSWORD!;
    await loginPage.login(customerEmail, customerPassword);
    await expect(page.getByTestId("nav-user-menu")).toContainText('Raed');
  });
});

