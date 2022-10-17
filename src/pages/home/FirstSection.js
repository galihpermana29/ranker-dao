import { useRef } from 'react';
import { useIntersectionObserver } from 'usehooks-ts';

import { HomeButton } from './HomeButton';
import FirstBg from 'assets/img/home/background/blue-bg.png';
import FirstHero from 'assets/img/home/hero/first-hero.png';
import FirstHeroMobile from 'assets/img/home/hero/first-hero-mobile.png';
import FirstBgMobile from 'assets/img/home/background/blue-bg-mobile.png';

export const FirstSection = ({ id = '' }) => {
  const firstRef = useRef();
  const entry = useIntersectionObserver(firstRef, {
    threshold: 0.1,
    freezeOnceVisible: false,
  });
  const isVisible = entry ? !!entry.isIntersecting : false;

  return (
    <section className={`home-section px-4 pb-0`} id={id} ref={firstRef}>
      {/* Mobile */}

      <img
        src={FirstBgMobile}
        alt="background section"
        className="home-section-background d-block d-sm-none"
      />
      {/* Desktop */}
      <img
        src={FirstBg}
        alt="background section"
        className="home-section-background d-none d-sm-block"
      />
      <div
        className={`home-section-left animate__animated ${
          isVisible ? 'animate__fadeInLeft' : 'animate__fadeOut'
        }`}>
        <p className="home-title">
          GET SET, PLAY{' '}
          <span className="home-title yellow-half-bottom">EARN</span>
        </p>
        <p className="description-common">
          We are a guild of gamers who are passionate about P2E. We aim to
          empower our guild members to enjoy all the benefits as they explore
          the vast emergent socialfi ecosystem.
        </p>
        <HomeButton
          href="https://t.me/rankerdao"
          target="_blank"
          rel="noopener noreferrer"
          label="JOIN OUR GUILD"
          size={{ mobile: '157px', tablet: '136px', desktop: '234px' }}
        />
      </div>
      <div className="home-section-right">
        <img
          src={FirstHero}
          alt="get set play earn"
          className={`d-none d-md-flex home-section-hero-image animate__animated ${
            isVisible ? 'animate__fadeIn' : 'animate__fadeOut'
          }`}
        />
        <img
          src={FirstHeroMobile}
          alt="get set play earn"
          className={`d-md-none home-section-hero-image animate__animated ${
            isVisible ? 'animate__fadeIn' : 'animate__fadeOut'
          }`}
        />
      </div>
    </section>
  );
};
