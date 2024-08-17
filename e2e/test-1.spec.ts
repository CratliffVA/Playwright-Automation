import { test, expect } from '@playwright/test';
import { Loginpage } from './login.page';

test('Login Success', async ({ page }) => {
  const loginpage = new Loginpage(page);

  // Go to the login page
  await loginpage.gotoUrl('http://160.1.86.115:8080/prweb/app/default/beEBp4uRVTogorRwSwWqbOtn9IL2fwdI*/!STANDARD');

  // Perform the login with the specified credentials
  await loginpage.login('TechUser1', 'Daper@1234');

  // Optionally, you can add an assertion here to verify that the login was successful.
  // This could be checking for a specific element on the homepage or a redirect URL.
  //await expect(page).toHaveURL('http://160.1.86.115:8080/prweb/app/default/home'); // Adjust the URL as needed
  //await expect(page.locator('text=Welcome')).toBeVisible(); // Adjust the text/content as needed
});



