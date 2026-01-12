import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('should display connect wallet button', async ({ page }) => {
  await expect(page.getByTestId('rk-account-button')).toBeVisible();
});
