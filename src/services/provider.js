import {InjectedConnector} from '@web3-react/injected-connector'
import {ethers} from 'ethers';
import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3Modal from "web3modal";

let ethersProvider

export const injected = new InjectedConnector({supportedChainIds: [97, 56]})

export const setProvider = provider => {
  ethersProvider = new ethers.providers.Web3Provider(provider)
}

export const getProvider = () => ethersProvider

export const connectWallet = async () => {
  const providerOptions = {
    walletconnect: {
      package: WalletConnectProvider, // required
      options: {
        infuraId: process.env.REACT_APP_INFURA_URL // required
      }
    }
  };

  const web3Modal = new Web3Modal({
    network: "mainnet",
    cacheProvider: false,
    providerOptions
  });

  const provider = await web3Modal.connect();

  ethersProvider = new ethers.providers.Web3Provider(provider)

  return provider
}

export const getAccounts = () => {
  return ethersProvider.getSigner().getAddress()
}

export const addNetwork = async () => {
  try {
    // eslint-disable-next-line no-undef
    await ethereum.request({
      method: 'wallet_addEthereumChain',
      params: [{
        chainId: ethers.utils.hexlify(Number(process.env.REACT_APP_SUPPORTED_CHAIN_ID)),
        chainName: process.env.REACT_APP_NETWORK_NAME,
        rpcUrls: [process.env.REACT_APP_RPC_URL],
        nativeCurrency: {
          name: process.env.REACT_APP_NATIVE_TOKEN,
          decimals: Number(process.env.REACT_APP_NATIVE_TOKEN_DECIMALS),
          symbol: process.env.REACT_APP_NATIVE_TOKEN_SYMBOL
        },
        blockExplorerUrls: [process.env.REACT_APP_EXPLORER_URL]
      }]
    })
  }
  // eslint-disable-next-line no-empty
  catch(_) { }
}