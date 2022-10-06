import { WalletContextProvider } from './WalletContext';
import { MintContextProvider } from './MintContext';
const MainContext = ({ children }) => {
  return (
    <WalletContextProvider>
      <MintContextProvider>{children}</MintContextProvider>
    </WalletContextProvider>
  );
};

export default MainContext;
