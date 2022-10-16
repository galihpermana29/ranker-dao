import { useRef } from 'react';
import { useIntersectionObserver } from 'usehooks-ts';

import { HomeButton } from './HomeButton';
import FourthBg from 'assets/img/home/background/yellow-bg.png';
import FourthHero from 'assets/img/home/hero/fourth-hero.png';
import FourthHeroMobile from 'assets/img/home/hero/fourth-hero-mobile.png';
import FourthBgMobile from 'assets/img/home/background/yellow-bg-mobile.png';

const MINTING_SITES = [
  {
    label: 'MEXC PIONEER',
    href: 'https://www.mexc.com/pioneer',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
  {
    label: 'KUCOIN',
    href: 'https://www.kucoin.com/',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
  {
    label: 'APESWAP',
    href: 'https://apeswap.finance/',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
  {
    label: 'HUOBI GLOBAL',
    href: 'https://www.huobi.com/',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
  {
    label: 'GATE.IO',
    href: 'https://www.gate.io/',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
];

export const FourthSection = ({
  setIsOpenMintingSites,
  isOpenMintingSites,
  id = '',
}) => {
  const fourthRef = useRef();
  const entry = useIntersectionObserver(fourthRef, {
    threshold: 0.1,
    freezeOnceVisible: false,
  });
  const isVisible = entry ? !!entry.isIntersecting : false;

  return (
    <section className="home-section px-4 pb-0" id={id} ref={fourthRef}>
      {/* Mobile */}
      <img
        src={FourthBgMobile}
        alt="background section"
        className=" home-section-background d-block d-sm-none"
      />
      {/* Desktop */}
      <img
        src={FourthBg}
        alt="background section"
        className=" home-section-background d-none d-sm-block"
      />
      <div
        className={`home-section-left animate__animated ${
          isVisible ? 'animate__fadeInLeft' : 'animate__fadeOut'
        }`}>
        <p className="home-title">
          GET YOUR{' '}
          <span className="home-title yellow-half-bottom">$RANKER</span>
        </p>
        <p className="description-common">
          Use $RANKER tokens to mint your guild badge and unlock access to the
          DAO! You can get our tokens at these following site.
        </p>

        <HomeButton
          label="LEARN ABOUT $RANKER"
          href="/ranker-token"
          size={{ mobile: '172px', tablet: '175px', desktop: '278px' }}
        />
        <p className="description-common mt-4">
          Or mint yours now on these websites:
        </p>
        <div className="minting-sites-container d-block d-sm-none">
          <button
            onClick={() => setIsOpenMintingSites(true)}
            className="pd-button"
            style={{ width: '172px' }}>
            <strong>
              <p className="pd-button-text p-0 m-0 text-center">
                OUR MINTING SITES
              </p>
            </strong>
          </button>
          {isOpenMintingSites && (
            <div className="minting-sites-wrapper">
              {MINTING_SITES.map(({ label, url }, index) => {
                return (
                  <HomeButton
                    key={index}
                    label={label}
                    size={{ mobile: '172px' }}
                    url={url}>
                    {label}
                  </HomeButton>
                );
              })}
            </div>
          )}
        </div>

        <div className="second-section-button-wrapper d-none d-sm-flex">
          {MINTING_SITES.map((item, index) => {
            return (
              <HomeButton
                key={index}
                {...item}
                size={{ mobile: '172px', tablet: '119px', desktop: '233px' }}
              />
            );
          })}
        </div>
      </div>
      <div className="home-section-right">
        <img
          src={FourthHero}
          alt="get set play earn"
          className={`d-none d-md-flex m-0 p-0 home-section-hero-image animate__animated ${
            isVisible ? 'animate__fadeIn' : 'animate__fadeOut'
          }`}
        />
        <img
          src={FourthHeroMobile}
          alt="get set play earn"
          className={`d-md-none m-0 p-0 home-section-hero-image animate__animated ${
            isVisible ? 'animate__fadeIn' : 'animate__fadeOut'
          }`}
        />
      </div>
    </section>
  );
};
