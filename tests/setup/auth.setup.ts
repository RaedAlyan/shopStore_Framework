import { test as setup } from '@fixtures/fixtures.ts';
import { CUSTOMER_AUTH_FILE, ADMIN_AUTH_FILE } from '@utils/authFiles.ts';

setup('authenticate as customer', async ({ page, loginPage }) => {
  const customerEmail = process.env.TEST_CUSTOMER_EMAIL!;
  const customerPassword = process.env.TEST_CUSTOMER_PASSWORD!;
  await loginPage.goToLoginPage();
  await loginPage.login(customerEmail, customerPassword);
  await page.waitForURL(/index\.html/);
  await page.context().storageState({ path: CUSTOMER_AUTH_FILE });
});

setup('authenticate as admin', async ({ page, loginPage }) => {
  const adminEmail = process.env.TEST_ADMIN_EMAIL!;
  const adminPassword = process.env.TEST_ADMIN_PASSWORD!;
  await loginPage.goToLoginPage();
  await loginPage.login(adminEmail, adminPassword);
  await page.waitForURL(/index\.html/);
  await page.context().storageState({ path: ADMIN_AUTH_FILE });
});
