import { EthereumProvider } from './EthereumContext';

const MainContext = ({ children }) => {
  return <EthereumProvider>{children}</EthereumProvider>;
};

export default MainContext;
