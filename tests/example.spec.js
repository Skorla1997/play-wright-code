  // @ts-check
  import { test, expect } from '@playwright/test';

  test('has title', async ({ page }) => {
    await page.goto('https://dev2.batteryconnect.com/amaron/app');
    const pageTitle=page.title();

    console.log('Page title is:', pageTitle);

    await expect(page).toHaveTitle(/Amara Raja/);
   
    const pageURL = page.url();
    console.log('page URL is:, pageURL');
    await expect(page).toHaveURL('https://dev2.batteryconnect.com/amaron/app');
    await page.close();
  // test('login link', async ({ page }) => {
  //   await page.goto(' ');

  //   // Click the get started link.
  //   await page.getByRole('navigation').getByText('Login').click();
 });
