import {test, expect} from '@fixtures/fixtures.ts';

test.describe('Logout Suite', () => {

  test.beforeEach(async ({ loginPage }) => {
    const customerEmail = process.env.TEST_CUSTOMER_EMAIL!;
    const customerPassword = process.env.TEST_CUSTOMER_PASSWORD!;
    await loginPage.goToLoginPage();
    await loginPage.login(customerEmail, customerPassword);
  });

  test('Logout redirects to the home page and shows the login link', async ({ page, userMenu }) => {
    await userMenu.logout();
    await expect(page).toHaveURL(/index\.html/);
    await expect(userMenu.loginLink).toBeVisible();
  });
});
