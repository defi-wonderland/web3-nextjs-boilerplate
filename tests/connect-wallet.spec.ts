import { testWithMetaMask as test } from '../test/fixture/testWithMetamask';

const { expect } = test;

test.setTimeout(60000); // Set timeout for all tests

test.beforeEach(async ({ page, metamask }) => {
  // Navigate to the app
  await page.goto('/');
  await page.getByText('Connect Wallet').click();
  await page.getByText('MetaMask').click();
  await metamask.connectToDapp();
});

test('should connect MetaMask wallet and display account', async ({ page }) => {
  await expect(page.getByText('Connect Wallet')).not.toBeVisible();
});
