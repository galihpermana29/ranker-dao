import { Link } from 'react-router-dom';

import { Hero } from '../../components';
import Apeswap from '../../assets/img/partnership/Apeswap.png';
import Avg from '../../assets/img/partnership/Avg.png';
import AxieBtn from '../../assets/img/home/axie-btn.png';
import BGFourthSection from '../../assets/img/bg-fourth-section.png';
import BGThirdSection from '../../assets/img/bg-third-section.png';
import Bitcoin from '../../assets/img/partnership/Bitcoin Addict.png';
import BlackMamba from '../../assets/img/partnership/Black Mamba.png';
import ButtonApeswap from '../../assets/img/home/apeswap-button.png';
import ButtonGateio from '../../assets/img/home/gateio-button.png';
import ButtonHuobi from '../../assets/img/home/huobi-button.png';
import ButtonKucoin from '../../assets/img/home/kucoin-button.png';
import ButtonMexci from '../../assets/img/home/mexc-button.png';
import Coin from '../../assets/img/home/coin.png';
import Cyball from '../../assets/img/partnership/Cyball.png';
import CyballBtn from '../../assets/img/home/cyball-btn.png';
import DegenGang from '../../assets/img/partnership/Degen-Gang-Purple.png';
import Frontier from '../../assets/img/partnership/Frontier.png';
import Gameplay from '../../assets/img/gameplay2.png';
import Gems from '../../assets/img/partnership/Gems.png';
import Getio from '../../assets/img/partnership/Getio.png';
import GuildIllustration from '../../assets/img/guild-illustration.png';
import HelixFund from '../../assets/img/partnership/Helix-Fund-Purple.png';
import Hooga from '../../assets/img/partnership/Hooga Hooga.png';
import HotCross from '../../assets/img/partnership/Hot Cross.png';
import HouseOfChimera from '../../assets/img/partnership/HouseOfChimera.png';
import Huobi from '../../assets/img/partnership/Huobi.png';
import J8Venture from '../../assets/img/partnership/J8 Ventures.png';
import Koakuma2 from '../../assets/img/partnership/Koakuma2.png';
import Kucoin from '../../assets/img/partnership/Kucoin.png';
import LightNite from '../../assets/img/partnership/Light-Nite-Purple.png';
import Metagear from '../../assets/img/partnership/Metagear.png';
import Mexc from '../../assets/img/partnership/Mexc.png';
import Monstax from '../../assets/img/partnership/Monstax-Purple.png';
import Monstropoly from '../../assets/img/partnership/Monstropoly-purple.png';
import NothingResearch from '../../assets/img/partnership/Nothing-Research-Purple.png';
import Oddz from '../../assets/img/partnership/Oddz.png';
import Pawtime from '../../assets/img/partnership/Pawtime.png';
import Pegaxy from '../../assets/img/partnership/Pegaxy-Purple.png';
import PegaxyBtn from '../../assets/img/home/pegaxy-btn.png';
import ProjectSeed from '../../assets/img/partnership/Project Seed.png';
import RankersBadge from '../../assets/img/home/five-shields.webp';
import ReignOfTerror from '../../assets/img/partnership/ReignOfTerror.png';
import Remnant from '../../assets/img/partnership/Remnant.png';
import Shiba from '../../assets/img/partnership/Shiba-Friends-Purple.png';
import Sidus from '../../assets/img/partnership/Sidus.png';
import SouniSovi from '../../assets/img/partnership/Souni.png';
import SpaceFalcon from '../../assets/img/partnership/Space-Falcon-Purple.png';
import TheKillBox from '../../assets/img/partnership/The-Kill-Box-Purple.png';
import TofuNFT from '../../assets/img/partnership/TofuNFT.png';
import TogetherIllustration from '../../assets/img/home/TogetherIllustration2.png';
import WonderHero from '../../assets/img/partnership/Wonder-Hero-Purple.png';
import WonderheroBtn from '../../assets/img/home/wonderhero-btn.png';
import Zephyrus from '../../assets/img/partnership/Zephyrus-Capital-Purple.png';
import './style.scss';

const Home = () => {
  // YOUR ADVENTURE
  const RenderFirstHomeSection = () => {
    return (
      <section className="container-fluid my-5">
        <div className="row">
          <p className="akira-outlined-blue d-block d-lg-none">
            YOUR ADVENTURE <span className="akira-fill-blue">STARTS NOW</span>
          </p>
          <div className="col-sm-12 col-lg-6 px-4 py-3 p-lg-5 my-auto">
            <div className="border-gradient-image">
              <img
                src={Gameplay}
                alt="gameplay"
                className="image-section p-0 gameplay-image w-100"
              />
            </div>
          </div>
          <div className="col-sm-12 col-lg-6 px-4 py-3 p-lg-5">
            <p className="akira-outlined-blue d-none d-lg-block">
              YOUR ADVENTURE <span className="akira-fill-blue">STARTS NOW</span>
            </p>

            <p className="regular-15 mt-3 d-none d-sm-block">
              We currently owned 1000+ gaming NFTs and will add more in the
              future. You are free to explore each world according to your own
              tactics and gameplay.
            </p>
            <p className="bold-15 text-blue d-none d-sm-block">
              All our members have full access to our DAO inventory of NFTs, and
              also a step by step guide on how to start P2E.
            </p>

            <p className="regular-15 mt-3 d-block d-sm-none px-5 mb-3">
              We currently owned 1000+ gaming NFTs and will add more in the
              future. You are free to explore each world according to your own
              tactics and gameplay.
            </p>
            <p className="bold-15 text-blue d-block d-sm-none px-5 mb-3">
              All our members have full access to our DAO inventory of NFTs, and
              also a step by step guide on how to start P2E.
            </p>

            <div className="row gx-0 gy-0">
              <div className="col-6 col-lg-3 p-2 d-flex justify-content-center align-items-center">
                <a
                  href="https://cyball.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="adventure-btn">
                  <img
                    src={CyballBtn}
                    alt="cyball"
                    className="w-100 adventure-image-btn"
                  />
                </a>
              </div>
              <div className="col-6 col-lg-3 p-2 d-flex justify-content-center align-items-center">
                <a
                  href="https://pegaxy.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="adventure-btn">
                  <img
                    src={PegaxyBtn}
                    alt="pegaxy io"
                    className="w-100 adventure-image-btn"
                  />
                </a>
              </div>

              <div className="col-6 col-lg-3 p-2 d-flex justify-content-center align-items-center">
                <a
                  href="https://wonderhero.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="adventure-btn">
                  <img
                    src={WonderheroBtn}
                    alt="wonderhero"
                    className="w-100 adventure-image-btn"
                  />
                </a>
              </div>
              <div className="col-6 col-lg-3 p-2 d-flex justify-content-center align-items-center">
                <a
                  href="https://axieinfinity.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="adventure-btn">
                  <img
                    src={AxieBtn}
                    alt="axie infinity"
                    className="w-100 adventure-image-btn"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  // MINT YOUR BADGE
  const RenderSecondSection = () => {
    return (
      <section className="container-fluid p-0">
        <div className="row gx-0 p-0 m-0">
          {/* DESKTOP ONLY */}
          <div className="col-sm-12 col-lg-6 p-0 d-none d-lg-flex justify-content-center align-items-center align-items-lg-start align flex-column">
            <p className="akira-outlined-blue">
              MINT YOUR <span className="akira-fill-blue">GUILD BADGE</span>
            </p>
            <p className="regular-15 mt-3 text-content-wrapper">
              You can enjoy our inventory of NFTs and other boons with yout
              RANKER Badge. Exclusive NFTs, Tournaments, coaching sessions and
              beyond.
            </p>
            <Link to="/about" className="mt-3">
              <button className="learn-about-ranker-btn">
                LEARN ABOUT $RANKER
              </button>
            </Link>
          </div>
          <div className="col-sm-12 col-lg-6 px-4 py-3 p-lg-5 pe-lg-0 my-auto d-none d-lg-block">
            <img
              src={RankersBadge}
              alt="rankers badge"
              className="img-fluid display-block"
            />
          </div>
        </div>

        {/* MOBILE ONLY */}
        <div className="col-sm-12 col-lg-6 px-4 py-3 p-lg-5 my-auto d-block d-lg-none">
          <p className="akira-outlined-blue">
            MINT YOUR <span className="akira-fill-blue">GUILD BADGE</span>
          </p>
          <img
            src={RankersBadge}
            alt="rankers badge"
            className="img-fluid display-block mt-3"
          />
        </div>
        <div className="col-sm-12 col-lg-6 px-4 py-3 pe-lg-0 ps-lg-5 my-auto d-block d-lg-none">
          <p className="regular-15 mt-3 px-5">
            You can enjoy our inventory of NFTs and other boons with yout RANKER
            Badge. Exclusive NFTs, Tournaments, coaching sessions and beyond.
          </p>
        </div>
        <div className="d-flex d-block d-lg-none">
          <Link to="/about" className="mx-auto">
            <button className="learn-about-ranker-btn">
              LEARN ABOUT $RANKER
            </button>
          </Link>
        </div>
      </section>
    );
  };

  // GET YOUR RANKER
  const RenderThirdSection = () => {
    const mintLinkList = [
      {
        img: ButtonMexci,
        link: 'https://www.mexc.com/exchange/RANKER_USDT',
        alt: 'mexc',
      },
      {
        img: ButtonKucoin,
        link: 'https://www.kucoin.com/trade/RANKER-USDT',
        alt: 'kucon',
      },
      { img: ButtonGateio, link: 'https://www.gate.io/', alt: 'gate io' },
      { img: ButtonApeswap, link: 'https://apeswap.finance/', alt: 'apeswap' },
      {
        img: ButtonHuobi,
        link: 'https://www.huobi.com/en-us/exchange/ranker_usdt/',
        alt: 'huobi',
      },
    ];

    return (
      <section className="container-fluid my-5">
        <div className="row">
          <p className="akira-outlined-blue d-block d-lg-none">
            GET YOUR <span className="akira-fill-blue">RANKER</span>
          </p>
          <div className="col-sm-12 col-lg-6 px-4 py-3 p-lg-5 ps-lg-0 my-auto">
            <img src={Coin} alt="guild member plus" className="img-fluid" />
          </div>
          <div className="col-sm-12 col-lg-6 px-4 py-3 p-lg-5 d-flex justify-content-center flex-column">
            <p className="akira-outlined-blue d-none d-lg-block mt-5">
              GET YOUR <span className="akira-fill-blue">RANKER</span>
            </p>

            <p className="regular-15 mt-3 d-none d-sm-block">
              Use $RANKER tokens to mint your guild badge and unlock access to
              the DAO! You can get our tokens at these following site.
            </p>

            <p className="regular-15 mt-3 d-block d-sm-none px-5 mb-3">
              Use $RANKER tokens to mint your guild badge and unlock access to
              the DAO! You can get our tokens at these following site.
            </p>
            <div className="mink-link-list-wrapper mt-3">
              <div className="row d-flex justify-content-lg-start justify-content-center flex-wrap px-4 px-lg-1">
                {mintLinkList.map(({ img, alt, link }) => {
                  return (
                    <div className="col-6 col-sm-4 col-lg-4 p-2 " key={link}>
                      <button type="button" className="btn btn-mint-link">
                        <a
                          href={link}
                          className="mint-link"
                          target="_blank"
                          rel="noopener noreferrer">
                          <img
                            src={img}
                            alt={alt}
                            className="mint-link-image"
                          />
                        </a>
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  // A DAO COMMUNITY
  const RenderFourthSection = () => {
    return (
      <section className="container-fluid p-0 my-5">
        <div className="row">
          <p className="akira-outlined-blue d-block d-lg-none">
            A DAO <span className="akira-fill-blue">COMMUNITY</span>
          </p>
          <div className="col-sm-12 col-lg-6 px-4 py-3 p-lg-5 d-flex justify-content-center flex-column">
            <p className="akira-outlined-blue d-none d-lg-block mt-5">
              A DAO <span className="akira-fill-blue">COMMUNITY</span>
            </p>

            <p className="regular-15 w-100 mt-3 d-none d-sm-block">
              We are a collective community of crypto adopters that welcomes our
              guild badge owners to vote on how we grow our platform.
            </p>
            <p className="bold-15 w-100 text-blue d-none d-sm-block">
              Participants of the DAO may vote on how we expand our portfolio,
              be it a metaverse land, sports NFTs, works of art, etc.
            </p>

            <p className="regular-15 mt-3 d-block d-sm-none px-5">
              We are a collective community of crypto adopters that welcomes our
              guild badge owners to vote on how we grow our platform.
            </p>
            <p className="bold-15 text-blue d-block d-sm-none px-5">
              Participants of the DAO may vote on how we expand our portfolio,
              be it a metaverse land, sports NFTs, works of art, etc.
            </p>
          </div>
          <div className="col-sm-12 col-lg-6 px-4 py-3 p-lg-5 pe-lg-0 my-auto">
            <div className="position-relative">
              <img src={BGThirdSection} className="background-section" />
              <img
                src={GuildIllustration}
                alt="guild member plus"
                className="image-section pe-3 pe-lg-5"
              />
            </div>
          </div>
        </div>
      </section>
    );
  };

  // SOCIAL FI
  const RenderFifthSection = () => {
    return (
      <section className="container-fluid p-0 my-5">
        <div className="row gx-0 p-0 m-0">
          <div className="col-sm-12 col-lg-6 px-4 py-3 p-lg-5 ps-lg-0 my-auto d-none d-lg-block">
            <div className="position-relative">
              <img
                src={TogetherIllustration}
                alt="together we are strong"
                className="image-section ps-3 ps-lg-5"
              />
              <img src={BGFourthSection} className="background-section" />
            </div>
          </div>
          <div className="col-sm-12 col-lg-6 px-4 py-3 p-lg-5 d-none d-lg-flex justify-content-evenly flex-column">
            <p className="akira-outlined-blue mt-5">
              SOCIAL - FI <span className="akira-fill-blue">STRONG</span>
            </p>
            <p className="regular-15">
              Start your adventure together! Our community is ready to
              strategize, practice and formulate new ideas!
            </p>

            <p className="regular-15">
              Compete in the highest level of gaming against other guilds, and
              fellow rankers. Good luck, have fun!
            </p>
            <p className="bold-15 text-blue">
              As we grow, we will implement more SocialFi features such as
              in-guild tournaments, and other exciting activities
            </p>
          </div>
        </div>

        {/* MOBILE */}
        <div className="col-sm-12 col-lg-6 px-4 py-3 p-lg-5 my-auto d-block d-lg-none">
          <p className="akira-outlined-blue">
            SOCIAL - FI <span className="akira-fill-blue">STRONG</span>
          </p>
          <div className="position-relative">
            <img
              src={TogetherIllustration}
              alt="together we are strong"
              className="image-section ps-3 ps-lg-5"
            />
            <img src={BGFourthSection} className="background-section" />
          </div>
        </div>
        <div className="col-sm-12 col-lg-6 px-4 py-3 pe-lg-0 ps-lg-5 my-auto d-block d-lg-none">
          <p className="regular-15 mt-3 px-5">
            Start your adventure together! Our community is ready to strategize,
            practice and formulate new ideas!
          </p>
          <p className="regular-15 mt-3 px-5">
            Compete in the highest level of gaming against other guilds, and
            fellow rankers. Good luck, have fun!
          </p>
          <p className="bold-15 text-blue px-5">
            As we grow, we will implement more SocialFi features such as in
            house tournaments and other exciting activities and portfolios!
          </p>
        </div>
      </section>
    );
  };

  const Partnership = () => {
    const imageDesktopFirstList = [ProjectSeed, Kucoin, HotCross, Mexc];
    const imageDesktopSecondList = [
      BlackMamba,
      J8Venture,
      Getio,
      Avg,

      WonderHero,
      Oddz,
    ];
    const imageDesktopThirdList = [
      Frontier,

      Apeswap,
      TheKillBox,
      Metagear,
      SpaceFalcon,
    ];
    const imageDesktopFourthList = [
      Sidus,
      HelixFund,
      Pegaxy,
      Pawtime,
      Bitcoin,
      ReignOfTerror,
      Gems,
      Zephyrus,
      TofuNFT,
      NothingResearch,
      SouniSovi,
      Monstax,
      Remnant,
      Shiba,
      Monstropoly,
      HouseOfChimera,
      Koakuma2,
      LightNite,
    ];
    const imageDesktopFifthList = [DegenGang, Hooga, Cyball, Huobi];
    const imageMobileList = [
      ProjectSeed,
      Kucoin,
      HotCross,
      Mexc,

      BlackMamba,
      J8Venture,
      Getio,
      Avg,

      WonderHero,
      Oddz,
      Frontier,
      TheKillBox,

      Apeswap,
      Metagear,
      SpaceFalcon,
      Sidus,

      HelixFund,
      Pegaxy,
      Pawtime,
      Bitcoin,

      ReignOfTerror,
      Gems,
      Zephyrus,
      TofuNFT,

      NothingResearch,
      SouniSovi,
      Monstax,
      Remnant,

      Shiba,
      Monstropoly,
      HouseOfChimera,
      Koakuma2,

      // Raptor,
      // MexC,
    ];

    const imageMobileListLastFive = [
      LightNite,
      Huobi,
      DegenGang,
      Hooga,
      Cyball,
    ];

    return (
      <section className="container-fluid pb-5 my-5">
        <p className="akira-outlined-blue text-center">
          OUR <span className="akira-fill-blue">FRIENDS</span>
        </p>

        {/* DESKTOP ONLY */}
        <div className="d-none d-lg-block">
          <div className="row row-cols-4 px-5 mt-2 gy-4">
            {imageDesktopFirstList.map((img, index) => {
              return (
                <div
                  className="col d-flex justify-content-center align-items-center"
                  key={index}>
                  <img
                    src={img}
                    className="img-fluid partnership-image mx-auto p-1"
                  />
                </div>
              );
            })}
          </div>
          <div className="row row-cols-6 px-5 mt-2 gy-4">
            {imageDesktopSecondList.map((img, index) => {
              return (
                <div
                  className="col d-flex justify-content-between align-items-center"
                  key={index}>
                  <img
                    src={img}
                    className="img-fluid partnership-image-big mx-auto p-1"
                  />
                </div>
              );
            })}
          </div>
          <div className="row row-cols-5 px-5 mt-2 gy-4">
            {imageDesktopThirdList.map((img, index) => {
              return (
                <div
                  className="col d-flex justify-content-between align-items-center"
                  key={index}>
                  <img
                    src={img}
                    className="img-fluid partnership-image mx-auto p-1"
                  />
                </div>
              );
            })}
          </div>
          <div className="row row-cols-6 px-5 mt-2 gy-4">
            {imageDesktopFourthList.map((img, index) => {
              return (
                <div
                  className="col d-flex justify-content-between align-items-center"
                  key={index}>
                  <img
                    src={img}
                    className="img-fluid partnership-image-big mx-auto p-1"
                  />
                </div>
              );
            })}
          </div>
          <div className="row row-cols-4 px-5 mt-2 gy-4 gx-0">
            {imageDesktopFifthList.map((img, index) => {
              return (
                <div
                  className="col d-flex justify-content-between align-items-center"
                  key={index}>
                  <img
                    src={img}
                    className="img-fluid partnership-image-big mx-auto p-1"
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* MOBILE & TABLET*/}
        <div className="d-block d-lg-none">
          <div className="row row-cols-4 row-cols-lg-5 px-3 mt-2 gy-4">
            {imageMobileList.map((img, index) => {
              return (
                <div
                  className="col d-flex justify-content-center align-items-center px-1"
                  key={index}>
                  <img src={img} className="img-fluid partnership-image p-0 " />
                </div>
              );
            })}
          </div>
          <div className="row row-cols-5 row-cols-lg-5 px-3 mt-2 gy-4">
            {imageMobileListLastFive.map((img, index) => {
              return (
                <div
                  className="col d-flex justify-content-center align-items-center px-1"
                  key={index}>
                  <img src={img} className="img-fluid partnership-image p-0 " />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  };

  return (
    <div className="container-fluid p-0 m-0">
      <Hero />
      <RenderFirstHomeSection />
      <RenderSecondSection />
      <RenderThirdSection />
      <RenderFourthSection />
      <RenderFifthSection />
      <Partnership />
    </div>
  );
};

export default Home;
