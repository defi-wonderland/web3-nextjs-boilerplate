import { connectorsForWallets, Wallet, WalletDetailsParams } from '@rainbow-me/rainbowkit';
import { rainbowWallet, walletConnectWallet, injectedWallet } from '@rainbow-me/rainbowkit/wallets';
import { e2eConnector } from '@wonderland/walletless';
import { createConfig, http, cookieStorage, createStorage, createConnector } from 'wagmi';
import { sepolia } from 'wagmi/chains';
import { getConfig as getAppConfig } from '~/config';

const {
  env: { PROJECT_ID },
  constants: { RPC_URL_TESTING },
} = getAppConfig();

const isE2E = process.env.NEXT_PUBLIC_IS_PLAYWRIGHT === 'true';

// For E2E testing only
export const e2eWallet = (): Wallet => ({
  id: 'e2e',
  name: 'E2E Test Wallet',
  iconUrl:
    'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect fill="%234F46E5" width="100" height="100" rx="20"/><text x="50" y="65" font-size="50" text-anchor="middle" fill="white">E2E</text></svg>',
  iconBackground: '#4F46E5',
  installed: true,
  createConnector: (walletDetails: WalletDetailsParams) => {
    const connector = e2eConnector({
      rpcUrls: {
        [sepolia.id]: RPC_URL_TESTING,
      },
      chains: [sepolia],
    });

    return createConnector((config) => ({
      ...connector(config),
      ...walletDetails,
    }));
  },
});

const getWallets = () => {
  if (isE2E) {
    return [e2eWallet];
  }

  if (PROJECT_ID) {
    return [injectedWallet, rainbowWallet, walletConnectWallet];
  } else {
    return [injectedWallet];
  }
};

export function getConfig() {
  const connectors = connectorsForWallets(
    [
      {
        groupName: 'Recommended',
        wallets: getWallets(),
      },
    ],
    {
      appName: 'Web3 React boilerplate',
      projectId: PROJECT_ID,
    },
  );

  return createConfig({
    chains: [sepolia],
    ssr: true,
    storage: createStorage({
      storage: cookieStorage,
    }),
    transports: {
      [sepolia.id]: isE2E ? http(RPC_URL_TESTING) : http(),
    },
    batch: { multicall: true },
    connectors,
  });
}
