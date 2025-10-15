import { connectorsForWallets } from '@rainbow-me/rainbowkit';
import { rainbowWallet, walletConnectWallet, injectedWallet } from '@rainbow-me/rainbowkit/wallets';
import { createConfig, http, cookieStorage, createStorage } from 'wagmi';
import { sepolia } from 'wagmi/chains';
import { getConfig as getAppConfig } from '~/config';

const { PROJECT_ID } = getAppConfig().env;

const getWallets = () => {
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
      [sepolia.id]: http(),
    },
    batch: { multicall: true },
    connectors,
  });
}
