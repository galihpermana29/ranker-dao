import { createContext, useContext } from 'react';
import { useMutation, useQuery } from '@tanstack/react-query';
import { onConnectWallet } from 'services/interact';
import { ethers } from 'ethers';

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

  return (
    <WalletContext.Provider
      value={{
        onConnect: walletConnectQuery.mutateAsync,
        isError: walletConnectQuery.isError,
        errorMessage: walletConnectQuery.error?.message,
        isLoading: walletConnectQuery.isLoading,
        isConnect: connected,
        address: walletAddress,
      }}>
      {children}
    </WalletContext.Provider>
  );
};
