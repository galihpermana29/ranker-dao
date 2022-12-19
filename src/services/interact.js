import { ethers } from 'ethers';
import web3 from 'web3';
import Web3Modal from 'web3modal';
import WalletConnectProvider from '@walletconnect/web3-provider';
import BadgeContractAbi from 'artifacts/contracts/BadgeContract.json';
import ProductionBadgeContractAbi from 'artifacts/contracts/ProductionBadgeContract.json';

let provider = null;
let signer = null;

export const onConnectWallet = async () => {
  const providerOptions = {
    walletconnect: {
      package: WalletConnectProvider, // required
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
  provider = await web3Modal.connect();
  return provider;
};

console.log('process.env', process.env);
console.log('window.ethereum.networkVersion', window.ethereum.networkVersion);

export const onMintBadge = async (type, address, amount) => {
  const BSC_CHAIN_ID = 56; //0x38

  if (window.ethereum.networkVersion !== BSC_CHAIN_ID) {
    try {
      const response = await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: web3.utils.toHex(BSC_CHAIN_ID) }],
      });
      console.log('response: ', response);
    } catch (err) {
      // This error code indicates that the chain has not been added to MetaMask
      if (err.code === 4902) {
        await window.ethereum.request({
          method: 'wallet_addEthereumChain',
          params: [
            {
              chainName: 'Binance Smart Chain',
              chainId: web3.utils.toHex(BSC_CHAIN_ID),
              nativeCurrency: {
                name: 'Binance Coin',
                symbol: 'BNB',
                decimals: 18,
              },
              rpcUrls: ['https://bscrpc.com'],
              blockExplorerUrls: ['https://bscscan.com'],
            },
          ],
        });
      }
    }
  }

  provider = new ethers.providers.Web3Provider(window.ethereum);
  signer = provider.getSigner();

  const contractBadge = new ethers.Contract(
    process.env.REACT_APP_CONTRACT_BADGE_ADDRESS,
    process.env.NODE_ENV === 'development'
      ? BadgeContractAbi
      : process.env.NODE_ENV === 'production'
      ? ProductionBadgeContractAbi
      : null,
    signer,
  );
  try {
    const tx = await contractBadge.safeMint(type, amount);
    return tx;
  } catch (err) {
    console.log('err mint', err);
    throw err;
  }
};

export const onCheckBadgeLimit = async badgeType => {
  provider = new ethers.providers.Web3Provider(window.ethereum);
  signer = provider.getSigner();

  const contractBadge = new ethers.Contract(
    process.env.REACT_APP_CONTRACT_BADGE_ADDRESS,
    process.env.NODE_ENV === 'development'
      ? BadgeContractAbi
      : process.env.NODE_ENV === 'production'
      ? ProductionBadgeContractAbi
      : null,
    signer,
  );

  const tx = await contractBadge.totalSupplyPerBadge(badgeType);
  const { _hex = '' } = tx;
  // const convertToNumber = BigNumber.from(tx._hex);
  const convertToNumber = parseInt(_hex);
  return convertToNumber;
};
