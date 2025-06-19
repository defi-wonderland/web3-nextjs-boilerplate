import { testWithSynpress } from '@synthetixio/synpress';
import { MetaMask, metaMaskFixtures } from '@synthetixio/synpress/playwright';
import basicSetup from '../wallet-setup/basic.setup';

export const testWithMetaMask = testWithSynpress(metaMaskFixtures(basicSetup)).extend<{
  metamask: MetaMask;
}>({
  metamask: async ({ context, metamaskPage, extensionId }, use) => {
    const metamask = new MetaMask(context, metamaskPage, basicSetup.walletPassword, extensionId);

    try {
      // Add local Sepolia fork network (forking Sepolia, so uses Sepolia chain ID)
      await metamask.addNetwork({
        name: 'Sepolia',
        rpcUrl: 'http://127.0.0.1:8545',
        chainId: 11155111, // Sepolia chain ID since we're forking Sepolia
        symbol: 'ETH',
        blockExplorerUrl: '',
      });

      // Wait a moment for the network to be added
      await metamaskPage.waitForTimeout(100);

      await metamask.switchNetwork('Sepolia');

      // Wait for network switch to complete
      await metamaskPage.waitForTimeout(100);
    } catch (error) {
      console.log('Network setup error (may already exist):', error);
      // Try to switch to Sepolia in case it already exists
      try {
        await metamask.switchNetwork('Sepolia');
      } catch {
        console.log('Network switch failed, continuing with current network');
      }
    }
    await use(metamask);
  },
});
