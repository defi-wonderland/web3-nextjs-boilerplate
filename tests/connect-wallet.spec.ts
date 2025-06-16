import { testWithMetaMask as test } from '../test/fixture/testWithMetamask';

const { expect } = test;

test.beforeEach(async ({ page, metamask }) => {
  // Navigate to the app
  await page.goto('/');
  await page.getByText('Connect Wallet').click();
  await page.getByText('MetaMask').click();
  await metamask.connectToDapp();
});

test('should connect MetaMask wallet and display account', async ({ page, metamask }) => {
  await expect(page.getByText('Connect Wallet')).not.toBeVisible();
  const connectedAddress = await metamask.getAccountAddress();
  const truncatedAddress = `${connectedAddress.slice(0, 4)}…${connectedAddress.slice(-4)}`;

  await expect(page.getByTestId('rk-account-button')).toContainText(truncatedAddress);
});
