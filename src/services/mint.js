import { ethers } from 'ethers';
import ERC721Abi from './ERC721.json';
import { getProvider } from './provider';

export const mint = async () => {
  const provider = getProvider();
  const signer = provider.getSigner();
  const contract = new ethers.Contract(
    process.env.REACT_APP_NFT_ADDRESS,
    ERC721Abi,
    signer,
  );

  const tx = await contract.mint();

  return tx;
};

export const getAccountBalance = async account => {
  const provider = getProvider();
  console.log(provider, 'provider');
  const signer = provider.getSigner();
  const contract = new ethers.Contract(
    process.env.REACT_APP_NFT_ADDRESS,
    ERC721Abi,
    signer,
  );

  return await contract.balanceOf(account);
};
