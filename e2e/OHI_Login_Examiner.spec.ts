import { test, expect } from '@playwright/test';
import { Loginpage } from './login.page';

test('Login Success', async ({ page }) => {
  const loginpage = new Loginpage(page);

  // Go to the login page
  await loginpage.gotoUrl('http://160.1.86.115:8080/prweb/app/default/beEBp4uRVTogorRwSwWqbOtn9IL2fwdI*/!STANDARD');

  // Perform the login with the specified credentials
  await loginpage.login('OHIVoucherExaminer1', 'Daper@123');

  // Click the 'Log in' button to submit the login form
  await page.getByRole('button', { name: 'Log in' }).click();

  // Verify that DOCMP is visible verifying successful login
  await expect(page.locator('[data-test-id="\\32 014100609491604293426"]')).toBeVisible();
});
