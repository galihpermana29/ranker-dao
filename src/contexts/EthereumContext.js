import { createContext, useContext } from 'react';
// import { ethers } from 'ethers';
import { onConnectWallet } from 'services/interact';

// const INITIAL_STATE = {
//   walletAddress: '',
//   errorMessage: '',
//   balance: '',
//   chainId: '',
//   connected: false,
// };

const EthereumContext = createContext();
export const useEthereumContext = () => useContext(EthereumContext);

export const EthereumProvider = ({ children }) => {
  const onConnect = () => {
    const provider = onConnectWallet();
    console.log('provider: ', provider);
  };

  return (
    <EthereumContext.Provider value={{ onConnect }}>
      {children}
    </EthereumContext.Provider>
  );
};
