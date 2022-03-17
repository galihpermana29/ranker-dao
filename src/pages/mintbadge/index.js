import { useState, useEffect } from 'react';
import ShieldBadge from '../../assets/img/sharper-shield.png';
import PegaxyBadge from '../../assets/img/mint/pegaxy-badge.png';
import WonderheroBadge from '../../assets/img/mint/wonderhero-badge.png';
import AxieBadge from '../../assets/img/mint/axie-badge.png';
import CyballBadge from '../../assets/img/mint/cyball-badge.png';
import {
  connectWallet,
  getAccounts,
  addNetwork,
} from '../../services/provider';
import { mint, getAccountBalance } from '../../services/mint';

import './style.scss';
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
      <div className="row p-0 m-0 hero-hero gx-5 px-lg-5">
        <div className="col-sm-12 col-lg-7 py-4 d-flex flex-column align-items-center align-items-lg-start justify-content-start mt-3 mt-lg-5">
          <p className="akira-outlined-white hero-font-size">MINT YOUR</p>
          <p className="akira-fill-white hero-font-size">
            GUILD{' '}
            <span className="akira-fill-white yellow-half-bottom hero-font-size">
              BADGE
            </span>
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
          <div className="row d-block d-lg-none mb-4">
            <div className="col-sm-12 col-lg-6">
              <button
                onClick={isButtonDisabled() ? () => {} : onMint}
                className={`${getButtonClass()} my-2 bold-white`}>
                MINT YOUR BADGE
              </button>
            </div>
            {account ? (
              <div className="col-sm-12 col-lg-6">
                <button
                  onClick={onDisconnect}
                  className="connect-btn my-2 text-blue">
                  DISCONNECT WALLET
                </button>
              </div>
            ) : (
              <div className="col-sm-12 col-lg-6">
                <button
                  onClick={onConnect}
                  className="connect-btn my-2 text-blue">
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

        <div className="col-sm-12 col-lg-5 d-flex justify-content-center align-items-center">
          <img
            src={ShieldBadge}
            className="img-fluid mint-badge-shield-img w-100"
            alt="hero illustration"
          />
        </div>
      </div>

      <div className="my-5 d-flex justify-content-center flex-column">
        <div className="mb-5 px-5">
          <p className="akira-fill-blue text-center">
            MINT <span className="akira-outlined-blue">YOURS NOW</span>
          </p>

          <p className="bold-15 text-blue text-center">
            And start Your P2E Journey As a RankerDAO Scholar Today!
          </p>
        </div>

        <div className="row row-cols-1 row-cols-lg-4 px-5 gx-5 pb-5">
          <div className="col d-flex justify-content-center flex-column px-3 mb-3">
            <img src={PegaxyBadge} className="img-fluid" />
            <p className="mint-title mb-5">PEGAXY</p>
            <p className="mint-sub-title">Fees:</p>
            <p className="bold-15 text-center">5000 $RANKER</p>
            <p className="mint-sub-title">Durations:</p>
            <p className="bold-15 text-center">30 days</p>
            <p className="mint-sub-title">Split:</p>
            <p className="bold-15 text-center">60/40</p>
            <p className="mint-sub-title">Limit / Availability:</p>
            <p className="bold-15 text-center">10000 / 40</p>
            <button className="join-our-guild-btn mt-5">MINT THIS BADGE</button>
          </div>
          <div className="col d-flex justify-content-center flex-column px-3 mb-3">
            <img src={WonderheroBadge} className="img-fluid" />
            <p className="mint-title mb-5">WONDER HERO</p>
            <p className="mint-sub-title">Fees:</p>
            <p className="bold-15 text-center">5000 $RANKER</p>
            <p className="mint-sub-title">Durations:</p>
            <p className="bold-15 text-center">30 days</p>
            <p className="mint-sub-title">Split:</p>
            <p className="bold-15 text-center">60/40</p>
            <p className="mint-sub-title">Limit / Availability:</p>
            <p className="bold-15 text-center">10000 / 40</p>
            <button className="join-our-guild-btn mt-5">MINT THIS BADGE</button>
          </div>
          <div className="col d-flex justify-content-center flex-column px-3 mb-3">
            <img src={AxieBadge} className="img-fluid" />
            <p className="mint-title mb-5">AXIE INFINITY</p>
            <p className="mint-sub-title">Fees:</p>
            <p className="bold-15 text-center">5000 $RANKER</p>
            <p className="mint-sub-title">Durations:</p>
            <p className="bold-15 text-center">30 days</p>
            <p className="mint-sub-title">Split:</p>
            <p className="bold-15 text-center">60/40</p>
            <p className="mint-sub-title">Limit / Availability:</p>
            <p className="bold-15 text-center">10000 / 40</p>
            <button className="join-our-guild-btn mt-5">MINT THIS BADGE</button>
          </div>
          <div className="col d-flex justify-content-center flex-column px-3 mb-3">
            <img src={CyballBadge} className="img-fluid" />
            <p className="mint-title mb-5">CYBALL</p>
            <p className="mint-sub-title">Fees:</p>
            <p className="bold-15 text-center">5000 $RANKER</p>
            <p className="mint-sub-title">Durations:</p>
            <p className="bold-15 text-center">30 days</p>
            <p className="mint-sub-title">Split:</p>
            <p className="bold-15 text-center">60/40</p>
            <p className="mint-sub-title">Limit / Availability:</p>
            <p className="bold-15 text-center">10000 / 40</p>
            <button className="join-our-guild-btn mt-5">MINT THIS BADGE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MintBadge;
