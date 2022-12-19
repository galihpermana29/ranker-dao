import { ethers } from 'ethers';
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

export const onMintBadge = async (type, address, amount) => {
  // const contractToken = ethers.Contract(
  //   TokenContractAbi,
  //   CONTRACT_TOKEN_ADDRESS,
  //   address,
  // );

  provider = new ethers.providers.Web3Provider(window.ethereum);
  signer = provider.getSigner();

  const contractBadge = new ethers.Contract(
    process.env.REACT_APP_CONTRACT_BADGE_ADDRESS,
    process.env.NODE_ENV === 'development'
      ? BadgeContractAbi
      : ProductionBadgeContractAbi,
    signer,
  );

  const tx = await contractBadge.safeMint(type, amount);
  return tx;
};

export const onCheckBadgeLimit = async badgeType => {
  provider = new ethers.providers.Web3Provider(window.ethereum);
  signer = provider.getSigner();

  const contractBadge = new ethers.Contract(
    process.env.REACT_APP_CONTRACT_BADGE_ADDRESS,
    process.env.NODE_ENV === 'development'
      ? BadgeContractAbi
      : ProductionBadgeContractAbi,
    signer,
  );

  const tx = await contractBadge.totalSupplyPerBadge(badgeType);
  const { _hex = '' } = tx;
  // const convertToNumber = BigNumber.from(tx._hex);
  const convertToNumber = parseInt(_hex);
  return convertToNumber;
};
