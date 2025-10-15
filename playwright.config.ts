import dotenv from '@dotenvx/dotenvx';
import { defineConfig, devices } from '@playwright/test';
import path from 'path';

// Load environment variables from .env file
dotenv.config({ path: path.resolve(process.cwd(), '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel - disabled for Synpress compatibility */
  fullyParallel: false,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Use single worker for Synpress compatibility */
  workers: 1,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Global test timeout */
  timeout: 60000,
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: 'http://localhost:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',

    /* Screenshot on failure */
    screenshot: 'only-on-failure',

    /* Video on failure */
    video: 'retain-on-failure',

    /* Synpress specific configurations */
    headless: process.env.HEADLESS !== 'false',

    /* Increase timeouts for MetaMask operations */
    actionTimeout: 30000,
    navigationTimeout: 30000,

    /* Browser context configurations for better extension support */
    ignoreHTTPSErrors: true,

    /* Additional Chrome args for better extension compatibility */
    launchOptions: {
      args: [
        '--disable-web-security',
        '--disable-features=VizDisplayCompositor',
        '--disable-dev-shm-usage',
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-gpu',
        '--disable-background-timer-throttling',
        '--disable-backgrounding-occluded-windows',
        '--disable-renderer-backgrounding',
      ],
    },
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        /* Override headless for Synpress */
        headless: process.env.HEADLESS !== 'false',
      },
    },
  ],

  /* Run your forked Sepolia & local dev server before starting the tests */
  webServer: [
    {
      command: 'pnpm test:fork:latest',
      url: 'http://127.0.0.1:8545',
      reuseExistingServer: true,
      timeout: 120 * 1000,
    },
    {
      command: 'pnpm dev',
      url: 'http://localhost:3000',
      reuseExistingServer: !process.env.CI,
      timeout: 120 * 1000,
    },
  ],
});
