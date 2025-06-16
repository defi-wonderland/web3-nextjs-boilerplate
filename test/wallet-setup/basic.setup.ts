import dotenv from '@dotenvx/dotenvx';
import { defineWalletSetup } from '@synthetixio/synpress';
import { MetaMask } from '@synthetixio/synpress/playwright';
import path from 'path';

// Load environment variables explicitly
dotenv.config({ path: path.resolve(process.cwd(), '.env') });
// dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const SEED_PHRASE = process.env.SEED_PHRASE || 'test test test test test test test test test test test junk';
const PASSWORD = process.env.PASSWORD || 'Test123456';

export default defineWalletSetup(PASSWORD, async (context, walletPage) => {
  const metamask = new MetaMask(context, walletPage, PASSWORD);

  await metamask.importWallet(SEED_PHRASE);
});
