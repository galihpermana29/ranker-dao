import { createContext, useContext } from 'react';
import { useMutation, useQuery } from '@tanstack/react-query';
import { onConnectWallet } from 'services/interact';
import { ethers } from 'ethers';

import stakeToken from '../services/stakeToken.json';

const INITIAL_STATE = {
  isLoading: '',
  isError: '',
  isConnect: '',
  address: '',
};

const WalletContext = createContext(INITIAL_STATE);

export const useWalletContext = () => useContext(WalletContext);

export const WalletContextProvider = ({ children }) => {
  const ethereum = window.ethereum;
  const web3Service = ethereum && new ethers.providers.Web3Provider(ethereum);
  const walletConnectQuery = useMutation(onConnectWallet);
  let walletAddress = '';

  const listAccountQuery = useQuery(['init'], () => {
    if (!web3Service) {
      throw new Error('No web 3 service found');
    }
    return web3Service.listAccounts();
  });

  const connected = !!listAccountQuery.data?.length;
  if (connected) {
    walletAddress = listAccountQuery.data[0];
  }

  const getBalanceForSpesificToken = async () => {
    const contract = new ethers.Contract(
      process.env.REACT_APP_CONTRACT_STAKE_TOKEN_SAMPLE,
      stakeToken.result,
      web3Service,
    );
    let list = await web3Service.listAccounts();
    walletAddress = list[0];
    const balance = (await contract.balanceOf(walletAddress)).toString();
    return parseInt(balance);
  };

  return (
    <WalletContext.Provider
      value={{
        onConnect: walletConnectQuery.mutateAsync,
        isError: walletConnectQuery.isError,
        errorMessage: walletConnectQuery.error?.message,
        isLoading: walletConnectQuery.isLoading,
        isConnect: connected,
        address: walletAddress,
        getBalance: getBalanceForSpesificToken,
        provider: web3Service,
      }}>
      {children}
    </WalletContext.Provider>
  );
};
