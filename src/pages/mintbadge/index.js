import './style.scss';
import { useState, useEffect } from 'react';
import ShieldBadge from '../../assets/img/shield-with-shadow.webp';
import {
  connectWallet,
  getAccounts,
  addNetwork,
} from '../../services/provider';
import { mint, getAccountBalance } from '../../services/mint';

const MintBadge = () => {
  const [txHash, setTxHash] = useState('');
  const [account, setAccount] = useState();
  const [balance, setBalance] = useState(-1);
  const [chainId, setChainId] = useState();
  const [loading, setLoading] = useState(false);

  const onConnect = async () => {
    const provider = await connectWallet();
    setChainId(Number(provider.chainId));
    const account = await getAccounts();
    setAccount(account);

    provider.on('accountsChanged', accounts => {
      setAccount(accounts[0]);
    });

    provider.on('chainChanged', chain => {
      setChainId(Number(chain));
    });
  };

  const onDisconnect = () => {
    setAccount();
  };

  const updateAccountBalance = async () => {
    const accountBalance = await getAccountBalance(account);

    setBalance(accountBalance.toString());
  };

  const onMint = async () => {
    setLoading(true);
    const tx = await mint();

    setTxHash(tx.hash);
    updateAccountBalance();
    setLoading(false);
  };

  useEffect(() => {
    if (account) {
      updateAccountBalance();
    } else {
      setTxHash('');
    }
  }, [account]);

  useEffect(() => {
    if (
      chainId &&
      Number(chainId) !== Number(process.env.REACT_APP_SUPPORTED_CHAIN_ID)
    ) {
      addNetwork();
    }
  }, [chainId]);

  const onSwitchNetwork = () => {
    addNetwork();
  };

  const renderError = () =>
    chainId &&
    Number(chainId) !== Number(process.env.REACT_APP_SUPPORTED_CHAIN_ID) ? (
      <a onClick={onSwitchNetwork} className="link">
        <p className="bold-15 text-white my-4 d-none d-lg-block pad-right error">
          {`Please connect to ${process.env.REACT_APP_NETWORK_NAME}`}
        </p>
      </a>
    ) : null;

  const isButtonDisabled = () => {
    return (
      (chainId &&
        Number(chainId) !== Number(process.env.REACT_APP_SUPPORTED_CHAIN_ID)) ||
      Number(balance) > 0 ||
      !account ||
      loading ||
      txHash
    );
  };

  const getButtonClass = () => {
    if (isButtonDisabled()) {
      return 'mint-btn-disabled';
    }

    return 'mint-btn';
  };

  const formatAccount = account =>
    `${account.slice(0, 6)}...${account.slice(
      account.length - 6,
      account.length,
    )}`;

  return (
    <div className="container-fluid p-0">
      <div className="row p-0 m-0 hero-hero gx-5">
        <div className="col-sm-12 col-lg-7 py-4 px-5 p-lg-5 pe-lg-3 d-flex flex-column align-items-center align-items-lg-start justify-content-start mt-3 mt-lg-5">
          <p className="akira-outlined-white">MINT YOUR</p>
          <p className="akira-fill-white">
            GUILD{' '}
            <span className="akira-fill-white yellow-half-bottom">BADGE</span>
          </p>
          <p className="bold-15 text-white my-4 d-none d-lg-block pad-right">
            You can enjoy our inventory of NFTs and other boons with your{' '}
            <span className="bold-white">RANKER Badge</span>. Exclusive NFTs,
            Tournaments, coaching sessions and beyond. Mint your RGUILD basic
            beta badge to become part of the RankerDAO guild today.
          </p>
          {account ? (
            <p className="bold-15 text-white my-4 d-none d-lg-block pad-right">
              You are currently connected with{' '}
              <a
                className="link"
                href={`${process.env.REACT_APP_EXPLORER_URL}/address/${account}`}
                target="_blank"
                rel="noreferrer">
                {formatAccount(account)}
              </a>
            </p>
          ) : null}
          <p className="bold-15 text-white my-4 d-block d-lg-none px-5">
            You can enjoy our inventory of NFTs and other boons with your{' '}
            <span className="bold-white">RANKER Badge</span>. Exclusive NFTs,
            Tournaments, coaching sessions and beyond. Mint your RGUILD basic
            beta badge to become part of the RankerDAO guild today.
          </p>
          {account ? (
            <p className="bold-15 text-white my-4 d-block d-lg-none px-5">
              You are currently connected with{' '}
              <a
                className="link"
                href={`${process.env.REACT_APP_EXPLORER_URL}/address/${account}`}
                target="_blank"
                rel="noreferrer">
                {formatAccount(account)}
              </a>
            </p>
          ) : null}
          <div className="d-flex flex-row">
            <div className="pe-4 d-none d-lg-block">
              <button
                onClick={isButtonDisabled() ? () => {} : onMint}
                className={`${getButtonClass()} my-4 bold-white`}>
                MINT YOUR BADGE
              </button>
            </div>

            {account ? (
              <div className="px-0 d-none d-lg-block">
                <button
                  onClick={onDisconnect}
                  className="connect-btn my-4 text-blue">
                  DISCONNECT WALLET
                </button>
              </div>
            ) : (
              <div className="px-0 d-none d-lg-block">
                <button
                  onClick={onConnect}
                  className="connect-btn my-4 text-blue">
                  CONNECT WALLET
                </button>
              </div>
            )}
          </div>
          <div className="row d-block d-lg-none">
            <div className="col-sm-12 col-lg-6">
              <button
                onClick={isButtonDisabled() ? () => {} : onMint}
                className={`${getButtonClass()} my-4 bold-white`}>
                MINT YOUR BADGE
              </button>
            </div>
            {account ? (
              <div className="col-sm-12 col-lg-6">
                <button
                  onClick={onDisconnect}
                  className="connect-btn my-4 text-blue">
                  DISCONNECT WALLET
                </button>
              </div>
            ) : (
              <div className="col-sm-12 col-lg-6">
                <button
                  onClick={onConnect}
                  className="connect-btn my-4 text-blue">
                  CONNECT WALLET
                </button>
              </div>
            )}
          </div>
          {txHash ? (
            <a
              className="link"
              href={`${process.env.REACT_APP_EXPLORER_URL}/tx/${txHash}`}
              target="_blank"
              rel="noreferrer">
              <p className="bold-15 text-white my-4 d-none d-lg-block pad-right">
                View your transaction on BscScan
              </p>
            </a>
          ) : null}
          {txHash ? (
            <a
              className="link"
              href={`${process.env.REACT_APP_EXPLORER_URL}/tx/${txHash}`}
              target="_blank"
              rel="noreferrer">
              <p className="bold-15 text-white my-4 d-block d-lg-none px-5">
                View your transaction on BscScan
              </p>
            </a>
          ) : null}
          {Number(balance) > 0 && account ? (
            <a
              className="link"
              href={`${process.env.REACT_APP_EXPLORER_URL}/token/${process.env.REACT_APP_NFT_ADDRESS}?a=${account}`}
              target="_blank"
              rel="noreferrer">
              <p className="bold-15 text-white my-4 d-none d-lg-block pad-right">
                You have already minted your badge
              </p>
            </a>
          ) : null}
          {Number(balance) > 0 && account ? (
            <a
              className="link"
              href={`${process.env.REACT_APP_EXPLORER_URL}/token/${process.env.REACT_APP_NFT_ADDRESS}?a=${account}`}
              target="_blank"
              rel="noreferrer">
              <p className="bold-15 text-white my-4 d-block d-lg-none px-5">
                You have already minted your badge
              </p>
            </a>
          ) : null}
          {renderError()}
        </div>

        <div className="col-sm-12 col-lg-5 pb-5 p-lg-5 d-flex justify-content-center">
          <img
            src={ShieldBadge}
            className="img-fluid mint-badge-shield-img w-100"
            alt="hero illustration"
          />
        </div>
      </div>
    </div>
  );
};

export default MintBadge;
