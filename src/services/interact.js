import { ethers } from 'ethers';
import web3 from 'web3';
import Web3Modal from 'web3modal';
import WalletConnectProvider from '@walletconnect/web3-provider';

import BadgeContractAbi from 'artifacts/contracts/BadgeContract.json';
import ProductionBadgeContractAbi from 'artifacts/contracts/ProductionBadgeContract.json';

import TokenContractAbi from 'artifacts/contracts/TokenContract.json';
import ProductionTokenContractAbi from 'artifacts/contracts/ProductionTokenContract.json';

const PRIZE = {
  1: 20000000000000000000000n,
  2: 100000000000000000000000n,
  3: 500000000000000000000000n,
  4: 2000000000000000000000n,
};
// const GAMING_BADGE_PRICE = 1500;

let provider = null;
let signer = null;

const CONTRACT_TOKEN_ABI =
  process.env.NODE_ENV === 'production'
    ? ProductionTokenContractAbi
    : process.env.NODE_ENV === 'development'
    ? TokenContractAbi
    : null;

const CONTRACT_BADGE_ABI =
  process.env.NODE_ENV === 'production'
    ? ProductionBadgeContractAbi
    : process.env.NODE_ENV === 'development'
    ? BadgeContractAbi
    : null;

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

export const checkUserNetworkForTestnet = async setNetworkChain => {
  const BSC_CHAIN_ID = 97; //0x38

  if (window.ethereum.networkVersion !== BSC_CHAIN_ID) {
    try {
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: web3.utils.toHex(BSC_CHAIN_ID) }],
      });
      setNetworkChain(BSC_CHAIN_ID);
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
                symbol: 'BNBT',
                decimals: 18,
              },
              rpcUrls: [
                'https://endpoints.omniatech.io/v1/bsc/testnet/public',
                'https://bsc-testnet.public.blastapi.io',
                // 'https://data-seed-prebsc-1-s1.binance.org:8545',
                // 'https://www.ankr.com/rpc/bsc/bsc_testnet_chapel/',
              ],
              blockExplorerUrls: ['https://testnet.bscscan.com'],
            },
          ],
        });
        setNetworkChain(BSC_CHAIN_ID);
      }
    }
  }
};

export const checkUserNetwork = async () => {
  const BSC_CHAIN_ID = 56; //0x38

  if (window.ethereum.networkVersion !== BSC_CHAIN_ID) {
    try {
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: web3.utils.toHex(BSC_CHAIN_ID) }],
      });
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
};

export const onMintBadge = async (type, address, amount, isDisabled) => {
  // return true;
  await checkUserNetwork();
  const allowance = await getAllowance(address);
  const { _hex = '' } = allowance;
  const userAllowance = parseInt(_hex);
  if (userAllowance < PRIZE[type]) {
    await getApprove(type);
  }

  provider = new ethers.providers.Web3Provider(window.ethereum);
  signer = provider.getSigner();

  const contractBadge = new ethers.Contract(
    process.env.REACT_APP_CONTRACT_BADGE_ADDRESS,
    CONTRACT_BADGE_ABI,
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

const getApprove = async type => {
  const contractToken = new ethers.Contract(
    process.env.REACT_APP_CONTRACT_TOKEN_ADDRESS,
    CONTRACT_TOKEN_ABI,
    signer,
  );
  let receipt = null;

  while (receipt === null) {
    // console.log('price getApprove', PRIZE[type], type);
    try {
      receipt = await contractToken.approve(
        process.env.REACT_APP_CONTRACT_BADGE_ADDRESS,
        PRIZE[type],
      );
      // console.log('receipt', receipt);
      await receipt.wait();
      if (receipt === null) {
        continue;
      }
    } catch (e) {
      // console.log(`Receipt error:`, e);
      break;
    }
  }
};

export const getAllowance = async address => {
  await checkUserNetwork();
  provider = new ethers.providers.Web3Provider(window.ethereum);
  signer = provider.getSigner();

  const contractToken = new ethers.Contract(
    process.env.REACT_APP_CONTRACT_TOKEN_ADDRESS,
    CONTRACT_TOKEN_ABI,
    signer,
  );

  try {
    const tx = await contractToken.allowance(
      address,
      process.env.REACT_APP_CONTRACT_BADGE_ADDRESS,
    );
    return tx;
  } catch (err) {
    throw err;
  }
};

export const onCheckBadgeLimit = async badgeType => {
  provider = new ethers.providers.Web3Provider(window.ethereum);
  signer = provider.getSigner();

  const contractBadge = new ethers.Contract(
    process.env.REACT_APP_CONTRACT_BADGE_ADDRESS,
    CONTRACT_BADGE_ABI,
    signer,
  );

  const tx = await contractBadge.totalSupplyPerBadge(badgeType);
  const { _hex = '' } = tx;
  // const convertToNumber = BigNumber.from(tx._hex);
  const convertToNumber = parseInt(_hex);
  return convertToNumber;
};
