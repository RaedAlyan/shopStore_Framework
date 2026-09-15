import {test, expect} from '@playwright/test';

test.describe('Login Page Suite', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/login.html');
  });

  test('Check the login page title', async ({ page }) => {
    await expect(page).toHaveTitle(/Log In/);
  });

  test('Login with valid admin credentials', async ({ page }) => {
    const adminEmail = process.env.TEST_ADMIN_EMAIL!;
    const adminPassword = process.env.TEST_ADMIN_PASSWORD!;
    await page.getByTestId('login-email').fill(adminEmail);
    await page.getByTestId('login-password').fill(adminPassword);
    await page.getByTestId('login-submit').click();
    await expect(page.getByTestId("nav-user-menu")).toContainText('Admin');
  });

  test('Login with valid customer credentials', async ({ page }) => {
    const customerEmail = process.env.TEST_CUSTOMER_EMAIL!;
    const customerPassword = process.env.TEST_CUSTOMER_PASSWORD!;
    await page.getByTestId('login-email').fill(customerEmail);
    await page.getByTestId('login-password').fill(customerPassword);
    await page.getByTestId('login-submit').click();
    await expect(page.getByTestId("nav-user-menu")).toContainText('Raed');
  });
});

