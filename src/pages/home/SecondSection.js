import { useRef } from 'react';
import { useIntersectionObserver } from 'usehooks-ts';
// import { useNavigate } from 'react-router-dom';

import SecondBg from 'assets/img/home/background/orange-bg.png';
import SecondHero from 'assets/img/home/hero/second-hero.png';
import SecondBgMobile from 'assets/img/home/background/orange-bg-mobile.png';

import { HomeButton } from './HomeButton';

export const SecondSection = ({ id = '' }) => {
  const secondRef = useRef();
  const entry = useIntersectionObserver(secondRef, {
    threshold: 0.1,
    freezeOnceVisible: false,
  });
  const isVisible = entry ? !!entry.isIntersecting : false;

  return (
    <section className="home-section px-4 pb-0" id={id} ref={secondRef}>
      {/* Mobile */}
      <img
        src={SecondBgMobile}
        alt="background section"
        className=" home-section-background d-block d-sm-none"
      />
      {/* Desktop */}
      <img
        src={SecondBg}
        alt="background section"
        className="home-section-background d-none d-sm-block"
      />
      <div
        className={`home-section-left animate__animated ${
          isVisible ? 'animate__fadeInLeft' : 'animate__fadeOut'
        }`}>
        <p className="home-title">
          YOUR ADVENTURE STARTS{' '}
          <span className="home-title yellow-half-bottom">NOW</span>
        </p>
        <p className="description-common">
          We currently owned 1000+ gaming NFTs and will add more in the future.
          You are free to explore each world according to your own tactics and
          gameplay.
        </p>
        <p className="d-none d-sm-block description-common">
          All our members have full access to our DAO inventory of NFTs, and
          also a step by step guide on how to start P2E.
        </p>
        <p className="d-none d-sm-block description-common">
          Here are samples of our top games, and theres many more waiting for
          you!
        </p>
        <div className="second-section-button-wrapper">
          {[
            {
              label: 'PLAY AXIE INFINITY',
              href: 'https://axieinfinity.com/',
              target: '_blank',
              rel: 'noopener noreferrer',
            },
            {
              label: 'PLAY SOUNI ',
              href: 'https://souni.io/',
              target: '_blank',
              rel: 'noopener noreferrer',
            },
            {
              label: 'PLAY METAGEAR',
              href: 'https://metagear.game/',
              target: '_blank',
              rel: 'noopener noreferrer',
            },
            {
              label: 'PLAY APEIRON',
              href: 'https://www.apeironnft.com/',
              target: '_blank',
              rel: 'noopener noreferrer',
            },
          ].map((item, index) => {
            return (
              <HomeButton
                {...item}
                key={index}
                size={{ mobile: '136px', tablet: '136px', desktop: '234px' }}
              />
            );
          })}
        </div>
      </div>
      <div className="home-section-right">
        <img
          src={SecondHero}
          alt="get set play earn"
          className={`home-section-hero-image animate__animated ${
            isVisible ? 'animate__fadeIn' : 'animate__fadeOut'
          }  `}
        />
      </div>
    </section>
  );
};
