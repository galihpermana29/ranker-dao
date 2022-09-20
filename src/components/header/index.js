/* eslint-disable no-unused-vars */

import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

// import LitePaperPDF from '../../../public/[RNKR] Litepaper.pdf';

import Logo from 'assets/img/ranker-dao-logo.png';
import BurgerIcon from 'assets/img/header/mobile-menu-hamburger.png';
import './style.scss';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { pathname } = useLocation();
  const NAV_LIST = [
    {
      href: '/mint-badge',
      label: 'MINT BADGE',
    },
    { href: '/shop', label: 'OUR SHOP' },
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
  ];

  return (
    <nav
      className="pd-nav px-4 py-4"
      style={{ backgroundColor: pathname === '/' ? 'transparent' : 'black' }}>
      <div className="d-flex justify-content-between align-items-center">
        <Link to="/">
          <img src={Logo} className="pd-nav-logo" />
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
          {NAV_LIST.map((item, index) => {
            return (
              <li key={index} className="pd-nav-list-desktop-wrapper-item">
                <a {...item}>{item.label}</a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="d-flex justify-content-end d-md-none">
        {isMenuOpen && (
          <ul className="pd-nav-list-wrapper d-flex flex-column p-0 px-3">
            {NAV_LIST.map((item, index) => {
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

{
  /* <button
          className="navbar-toggler"
          ">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a href="/mint-badge">MINT BADGE</a>
            </li>
            <li className="nav-item">
              <a
                href="https://t.me/rankerdao"
                target="_blank"
                rel="noopener noreferrer"
                aria-current="page">
                TELEGRAM
              </a>
            </li>
            <li className="nav-item">
              <a
                href="https://twitter.com/rankerdao"
                target="_blank"
                rel="noopener noreferrer">
                TWITTER
              </a>
            </li>
            <li className="nav-item">
              <a
                href="http://discord.gg/rankerdao"
                target="_blank"
                rel="noopener noreferrer">
                DISCORD
              </a>
            </li>
            <li className="nav-item">
              <a href="/ranker-token" className="nav-link-custom">
                $RANKER
              </a>
            </li>
            <li className="nav-item">
              <a href="https://rankerdao.com/axies/index.html">INVENTORY</a>
            </li>
            <li className="nav-item">
              <a href="[RNKR] Handout Page.pdf" download>
                LITEPAPER
              </a>
            </li>
          </ul>
        </div> */
}
