import { useRef } from 'react';
import { useIntersectionObserver } from 'usehooks-ts';

import { useWalletContext } from 'contexts/WalletContext';

import { HomeButton } from './HomeButton';
import ThirdBg from 'assets/img/home/background/green-bg.png';
import ThirdHero from 'assets/img/home/hero/third-hero.png';
import ThirdBgMobile from 'assets/img/home/background/green-bg-mobile.png';

export const ThirdSection = ({ id = '' }) => {
  const { onConnect, isConnect } = useWalletContext();

  const thirdRef = useRef();
  const entry = useIntersectionObserver(thirdRef, {
    threshold: 0.1,
    freezeOnceVisible: false,
  });
  const isVisible = entry ? !!entry.isIntersecting : false;

  const onClickConnect = () => {
    if (!isConnect) {
      onConnect()
        .then(response => console.log('response', response))
        .catch(error => console.log('error: ', error));
    }
  };

  return (
    <section className="home-section px-4 pb-0" id={id} ref={thirdRef}>
      {/* Mobile */}
      <img
        src={ThirdBgMobile}
        alt="background section"
        className=" home-section-background d-block d-sm-none"
      />
      {/* Desktop */}
      <img
        src={ThirdBg}
        alt="background section"
        className=" home-section-background d-none d-sm-block"
      />
      <div
        className={`home-section-left animate__animated ${
          isVisible ? 'animate__fadeInLeft' : 'animate__fadeOut'
        }`}>
        <p className="home-title">
          MINT YOUR GUILD{' '}
          <span className="home-title yellow-half-bottom">BADGE</span>
        </p>
        <p className="description-common">
          You can enjoy our inventory of NFTs and other boons with yout RANKER
          Badge. Exclusive NFTs, Tournaments, coaching sessions and beyond.
        </p>
        <div className="second-section-button-wrapper">
          {[
            { label: 'TYPES OF BADGES', href: '/mint-badge' },
            { label: 'MINT YOURS NOW', href: '/ranker-token' },
          ].map((item, index) => {
            return (
              <HomeButton
                key={index}
                {...item}
                size={{ mobile: '150px', tablet: '136px', desktop: '234px' }}
              />
            );
          })}
        </div>
        <div className="third-section-button-wrapper mt-3">
          <p>Got a badge already? Check out our Inventory right here!</p>
        </div>
        <div className="second-section-button-wrapper">
          <HomeButton
            label="OUR SHOP"
            href="/shop"
            size={{ mobile: '150px', tablet: '136px', desktop: '234px' }}
          />
          <HomeButton
            label={isConnect ? 'CONNECTED' : 'CONNECT WALLET'}
            connectWallet={true}
            onClick={onClickConnect}
            size={{ mobile: '150px', tablet: '136px', desktop: '234px' }}
          />
        </div>
      </div>
      <div className="home-section-right">
        <img
          src={ThirdHero}
          alt="get set play earn"
          className={`home-section-hero-image animate__animated ${
            isVisible ? 'animate__fadeIn' : 'animate__fadeOut'
          }`}
        />
      </div>
    </section>
  );
};
