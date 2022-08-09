import React, { useEffect, useRef, useState } from 'react';

import { Modal } from 'bootstrap';
import 'animate.css';

import { Footer } from '../../components';
import { ModalFriends, Sidebar } from 'components';
import { HomeButton } from './HomeButton';

import FirstBg from 'assets/img/home/background/blue-bg.png';
import FirstHero from 'assets/img/home/hero/first-hero.png';
import FirstBgMobile from 'assets/img/home/background/blue-bg-mobile.png';

import SecondBg from 'assets/img/home/background/orange-bg.png';
import SecondHero from 'assets/img/home/hero/second-hero.png';
import SecondBgMobile from 'assets/img/home/background/blue-bg-mobile.png';

import ThirdBg from 'assets/img/home/background/green-bg.png';
import ThirdHero from 'assets/img/home/hero/third-hero.png';
import ThirdBgMobile from 'assets/img/home/background/green-bg-mobile.png';

import FourthBg from 'assets/img/home/background/yellow-bg.png';
import FourthHero from 'assets/img/home/hero/fourth-hero.png';
import FourthHeroMobile from 'assets/img/home/background/yellow-bg-mobile.png';

import FifthBg from 'assets/img/home/background/red-bg.png';
import FifthHero from 'assets/img/home/hero/fifth-hero.png';
import FifthHeroMobile from 'assets/img/home/background/red-bg-mobile.png';

import SixthBg from 'assets/img/home/background/teal-bg.png';
import SixthHero from 'assets/img/home/hero/sixth-hero.png';
import SixthHeroMobile from 'assets/img/home/background/teal-bg-mobile.png';

import './style.scss';

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

const Home = () => {
  const [activeSection, setActiveSection] = useState('home-first-section');
  const [isOpenMintingSites, setIsOpenMintingSites] = useState(false);
  const modalRef = useRef(null);

  const showFriendsModal = () => {
    const modalEle = modalRef.current;
    const bsModal = new Modal(modalEle, {
      backdrop: 'static',
      keyboard: false,
    });
    bsModal.show();
  };
  const closeFriendsModal = () => {
    const modalEle = modalRef.current;
    const bsModal = Modal.getInstance(modalEle);
    bsModal.hide();
  };

  useEffect(() => {
    const showModal = () => {
      if (activeSection === 'home-sixth-section') {
        showFriendsModal();
      }
    };
    showModal();
  }, [activeSection]);

  // Couldnt create a reusable/map the component, bug with react-scroll
  // const RenderSection = useCallback(
  //   ({ id = '', bgImageDesktop, bgImageMobile, heroImage, children }) => {
  //     return (
  //       <section
  //         className={`home-section animate__animated ${
  //           activeSection === id ? 'animate__fadeIn' : 'animate__fadeOut'
  //         }`}
  //         id={id}>
  //         {/* Mobile */}
  //         <img
  //           src={bgImageMobile}
  //           alt="background section"
  //           className=" home-section-background d-block d-sm-none"
  //         />
  //         {/* Desktop */}
  //         <img
  //           src={bgImageDesktop}
  //           alt="background section"
  //           className=" home-section-background d-none d-sm-block"
  //         />
  //         {children}
  //         <div className="home-section-right">
  //           <img
  //             src={heroImage}
  //             alt="get set play earn"
  //             className="home-section-hero-image"
  //           />
  //         </div>
  //       </section>
  //     );
  //   },
  //   [activeSection],
  // );

  const animationClass = id => {
    if (id === activeSection) {
      return 'animate__fadeIn';
    }
    return 'animate__fadeOut';
  };

  return (
    <div className="container-fluid p-0 m-0 home-section-parent" id="home">
      <Sidebar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      <ModalFriends modalRef={modalRef} onClose={closeFriendsModal} />

      {/* First */}
      <section className="home-section px-4 pb-0" id={'home-first-section'}>
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
          className={`home-section-left animate__animated ${animationClass(
            'home-first-section',
          )}`}>
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
            className={`home-section-hero-image animate__animated ${animationClass(
              'home-first-section',
            )}`}
          />
        </div>
        <Footer />
      </section>

      {/* Second */}
      <section className="home-section px-4 pb-0" id={'home-second-section'}>
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
          className={`home-section-left animate__animated ${animationClass(
            'home-second-section',
          )}`}>
          <p className="home-title">
            YOUR ADVENTURE STARTS{' '}
            <span className="home-title yellow-half-bottom">NOW</span>
          </p>
          <p className="description-common">
            We currently owned 1000+ gaming NFTs and will add more in the
            future. You are free to explore each world according to your own
            tactics and gameplay.
          </p>
          <p className="description-common">
            All our members have full access to our DAO inventory of NFTs, and
            also a step by step guide on how to start P2E.
          </p>
          <p className="description-common">
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
            className={`home-section-hero-image animate__animated ${animationClass(
              'home-second-section',
            )}`}
          />
        </div>
      </section>

      {/* Third */}
      <section className="home-section px-4 pb-0" id={'home-third-section'}>
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
          className={`home-section-left animate__animated ${animationClass(
            'home-third-section',
          )}`}>
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
        </div>
        <div className="home-section-right">
          <img
            src={ThirdHero}
            alt="get set play earn"
            className={`home-section-hero-image animate__animated ${animationClass(
              'home-third-section',
            )}`}
          />
        </div>
      </section>

      {/* Fourth */}
      <section className="home-section px-4 pb-0" id={'home-fourth-section'}>
        {/* Mobile */}
        <img
          src={FourthHeroMobile}
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
          className={`home-section-left animate__animated ${animationClass(
            'home-fourth-section',
          )}`}>
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
          <p className="description-common">
            Or mint yours now on these websites:
          </p>
          <div className="minting-sites-container d-block d-sm-none">
            <button
              onClick={() => setIsOpenMintingSites(true)}
              className="pd-button"
              style={{ width: '172px' }}>
              <strong>
                <p className="regular-15 p-0 m-0 text-center">
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
            className={`home-section-hero-image animate__animated ${animationClass(
              'home-fourth-section',
            )}`}
          />
        </div>
      </section>

      {/* Fifth */}
      <section className="home-section px-4 pb-0" id={'home-fifth-section'}>
        {/* Mobile */}
        <img
          src={FifthHeroMobile}
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
          className={`home-section-left animate__animated ${animationClass(
            'home-fifth-section',
          )}`}>
          <p className="home-title">
            A DAO{' '}
            <span className="home-title yellow-half-bottom">COMMUNITY</span>
          </p>
          <p className="description-common">
            We are a collective community of crypto adopters that welcomes our
            guild badge owners to vote on how we grow our platform.
          </p>
          <p className="description-common">
            Participants of the DAO may vote on how we expand our portfolio, be
            it a metaverse land, sports NFTs, works of art, etc.
          </p>
        </div>
        <div className="home-section-right">
          <img
            src={FifthHero}
            alt="get set play earn"
            className={`home-section-hero-image animate__animated ${animationClass(
              'home-fifth-section',
            )}`}
          />
        </div>
      </section>

      {/* Sixth */}
      <section className="home-section px-4 pb-0" id={'home-sixth-section'}>
        {/* Mobile */}
        <img
          src={SixthHeroMobile}
          alt="background section"
          className=" home-section-background d-block d-sm-none"
        />
        {/* Desktop */}
        <img
          src={SixthBg}
          alt="background section"
          className=" home-section-background d-none d-sm-block"
        />
        <div
          className={`home-section-left animate__animated ${animationClass(
            'home-sixth-section',
          )}`}>
          <p className="home-title">
            SOCIAL-FI{' '}
            <span className="home-title yellow-half-bottom">STRONG</span>
          </p>
          <p className="description-common">
            Start your adventure together! Our community is ready to strategize,
            practice and formulate new ideas! Compete in the highest level of
            gaming against other guilds, and fellow rankers. Good luck, have
            fun!
          </p>
          <p className="description-common">
            Compete in the highest level of gaming against other guilds, and
            fellow rankers. Good luck, have fun!
          </p>
          <p className="description-common">
            As we grow, we will implement more Social-Fi features such as
            in-guild tournaments, and other exciting activities.
          </p>
          <HomeButton
            label="START YOUR ADVENTURE NOW!"
            href="/mint-badge"
            size={{ mobile: '213px', tablet: '218px', desktop: '359px' }}
          />
        </div>
        <div className="home-section-right">
          <img
            src={SixthHero}
            alt="get set play earn"
            className={`home-section-hero-image animate__animated ${animationClass(
              'home-sixth-section',
            )}`}
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
