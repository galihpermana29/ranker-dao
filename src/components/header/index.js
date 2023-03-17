import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { useWalletContext } from 'contexts/WalletContext';

import Logo from 'assets/img/ranker-dao-logo.png';
import BurgerIcon from 'assets/img/header/mobile-menu-hamburger.png';
import './style.scss';
import { PdToast } from 'components/toast';
const Header = () => {
  const {
    onConnect,
    isConnect,
    isError = false,
    errorMessage = '',
  } = useWalletContext();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { pathname } = useLocation();
  const NAV_LIST_MOBILE = [
    {
      href: '/mint-badge',
      label: 'MINT BADGE',
    },
    // { href: '/shop', label: 'OUR SHOP' },
    // { href: '/staking', label: 'STAKING' },
    {
      href: 'https://t.me/rankerdao',
      label: 'TELEGRAM',
      target: '_blank',
      rel: 'noopener noreferrer',
    },
    {
      href: 'https://twitter.com/rankerdao',
      label: 'TWITTER',
      target: '_blank',
      rel: 'noopener noreferrer',
    },
    {
      href: 'http://discord.gg/rankerdao',
      label: 'DISCORD',
      target: '_blank',
      rel: 'noopener noreferrer',
    },
    {
      href: '/ranker-token',
      label: '$RANKER',
    },
    {
      href: 'https://rankerdao.com/axies/index.html',
      label: 'INVENTORY',
      target: '_blank',
      rel: 'noopener noreferrer',
    },
    {
      href: '[RNKR] Handout Page.pdf',
      label: 'LITEPAPER',
      download: true,
    },
    {
      label: 'CONNECT TO WALLET',
    },
  ];
  const NAV_LIST_DESKTOP = [
    {
      href: '/mint-badge',
      label: 'MINT BADGE',
    },
    // { href: '/shop', label: 'OUR SHOP' },
    // { href: '/staking', label: 'STAKING' },
    {
      href: 'https://t.me/rankerdao',
      label: 'TELEGRAM',
      target: '_blank',
      rel: 'noopener noreferrer',
    },
    {
      href: 'https://twitter.com/rankerdao',
      label: 'TWITTER',
      target: '_blank',
      rel: 'noopener noreferrer',
    },
    {
      label: 'CONNECT WALLET',
    },
    {
      href: 'http://discord.gg/rankerdao',
      label: 'DISCORD',
      target: '_blank',
      rel: 'noopener noreferrer',
    },
    {
      href: '/ranker-token',
      label: '$RANKER',
    },
    {
      href: 'https://rankerdao.com/axies/index.html',
      label: 'INVENTORY',
      target: '_blank',
      rel: 'noopener noreferrer',
    },
    {
      href: '[RNKR] Handout Page.pdf',
      label: 'LITEPAPER',
      download: true,
    },
  ];

  const onClickConnect = () => {
    if (!isConnect) {
      onConnect()
        .then(response => console.log('response', response))
        .catch(error => console.log('error: ', error));
    }
  };

  return (
    <nav
      className="pd-nav px-4 py-4"
      style={{ backgroundColor: pathname === '/' ? 'transparent' : 'black' }}>
      <PdToast
        isOpen={isError}
        message={`${errorMessage}, please open metamask`}
      />

      {/* Tablet && Desktop */}
      <div className="d-flex justify-content-between align-items-center">
        <Link to="/">
          <img src={Logo} className="pd-nav-logo" alt="ranker dao" />
        </Link>
        <button
          className="pd-nav-button d-md-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <img
            onClick={() => setIsMenuOpen(prevState => !prevState)}
            src={BurgerIcon}
            alt="hamburger"
            className="pd-nav-hamburger-icon"
          />
        </button>

        <ul className="pd-nav-list-desktop-wrapper d-none d-md-flex">
          {NAV_LIST_DESKTOP.map((item, index) => {
            if (item.label === 'CONNECT WALLET') {
              return (
                <li
                  onClick={onClickConnect}
                  key={index}
                  className="pd-nav-list-desktop-wrapper-item">
                  <p className="m-0 p-0">
                    {isConnect ? 'CONNECTED' : item.label}
                  </p>
                </li>
              );
            }

            return (
              <li key={index} className="pd-nav-list-desktop-wrapper-item">
                <a {...item}>{item.label}</a>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Mobile */}
      <div className="d-flex justify-content-end d-md-none">
        {isMenuOpen && (
          <ul className="pd-nav-list-wrapper d-flex flex-column p-0 px-3">
            {NAV_LIST_MOBILE.map((item, index) => {
              if (item.label === 'CONNECT TO WALLET') {
                return (
                  <li
                    onClick={onClickConnect}
                    key={index}
                    className="pd-nav-list-wrapper-item">
                    <p className="m-0 p-0">
                      {isConnect ? 'CONNECTED' : item.label}
                    </p>
                  </li>
                );
              }
              return (
                <li key={index} className="pd-nav-list-wrapper-item">
                  <a {...item}>{item.label}</a>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Header;
