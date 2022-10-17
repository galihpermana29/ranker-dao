import { useRef } from 'react';
import { useIntersectionObserver } from 'usehooks-ts';

import FifthBg from 'assets/img/home/background/red-bg.png';
import FifthBgMobile from 'assets/img/home/background/red-bg-mobile.png';
import FifthHero from 'assets/img/home/hero/fifth-hero.png';
import FifthHeroMobile from 'assets/img/home/hero/fifth-hero-mobile.png';

export const FifthSection = ({ id = '' }) => {
  const fifthRef = useRef();
  const entry = useIntersectionObserver(fifthRef, {
    threshold: 0.1,
    freezeOnceVisible: false,
  });
  const isVisible = entry ? !!entry.isIntersecting : false;

  return (
    <section className="home-section px-4 pb-0" id={id} ref={fifthRef}>
      {/* Mobile */}
      <img
        src={FifthBgMobile}
        alt="background section"
        className=" home-section-background d-block d-sm-none"
      />
      {/* Desktop */}
      <img
        src={FifthBg}
        alt="background section"
        className=" home-section-background d-none d-sm-block"
      />
      <div
        className={`home-section-left animate__animated ${
          isVisible ? 'animate__fadeInLeft' : 'animate__fadeOut'
        }`}>
        <p className="home-title">
          A DAO <span className="home-title yellow-half-bottom">COMMUNITY</span>
        </p>
        <p className="description-common">
          We are a collective community of crypto adopters that welcomes our
          guild badge owners to vote on how we grow our platform.
        </p>
        <p className="description-common">
          Participants of the DAO may vote on how we expand our portfolio, be it
          a metaverse land, sports NFTs, works of art, etc.
        </p>
      </div>
      <div className="home-section-right">
        <img
          src={FifthHero}
          alt="get set play earn"
          className={`d-none d-md-flex home-section-hero-image animate__animated ${
            isVisible ? 'animate__fadeIn' : 'animate__fadeOut'
          }`}
        />
        <img
          src={FifthHeroMobile}
          alt="get set play earn"
          className={`d-md-none home-section-hero-image animate__animated ${
            isVisible ? 'animate__fadeIn' : 'animate__fadeOut'
          }`}
        />
      </div>
    </section>
  );
};
