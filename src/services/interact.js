import Web3Modal from 'web3modal';
// import WalletConnectProvider from '@walletconnect/web3-provider';

// import { ethers } from 'ethers';

export const onConnectWallet = async () => {
  const providerOptions = {
    walletconnect: {
      //   package: WalletConnectProvider, // required
      cacheProvider: true,
      disableInjectedProvider: false,
    },
  };

  const web3Modal = new Web3Modal({
    // network: "mainnet",
    cacheProvider: false,
    providerOptions,
  });

  web3Modal.clearCachedProvider();
  const provider = await web3Modal.connect();
  return provider;
};
