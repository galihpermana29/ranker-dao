import { Link } from 'react-router-dom';

import { Hero } from '../../components';
import AxieIcon from '../../assets/img/axie.png';
import BGFourthSection from '../../assets/img/bg-fourth-section.png';
import BGThirdSection from '../../assets/img/bg-third-section.png';
import Bitcoin from '../../assets/img/partnership/Bitcoin Addict.png';
import BlackMamba from '../../assets/img/partnership/Black Mamba.png';
import Frontier from '../../assets/img/partnership/Frontier.png';
import Gameplay from '../../assets/img/gameplay.png';
import Gems from '../../assets/img/partnership/Gems.png';
import GuildIllustration from '../../assets/img/guild-illustration.png';
import Hooga from '../../assets/img/partnership/Hooga Hooga.png';
import HotCross from '../../assets/img/partnership/Hot Cross.png';
import J8Venture from '../../assets/img/partnership/J8 Ventures.png';
import Oddz from '../../assets/img/partnership/Oddz.png';
import ProjectSeed from '../../assets/img/partnership/Project Seed.png';
import RankersBadge from '../../assets/img/about/rankers-badge.png';
import Raptor from '../../assets/img/partnership/Raptor Capital.png';
import ThetanIcon from '../../assets/img/thetan.png';
import TogetherIllustration from '../../assets/img/together-illustration.png';
import './style.scss';

const Home = () => {
  const RenderFirstHomeSection = () => {
    return (
      <section className="container-fluid">
        <div className="row">
          <div className="col-sm-12 col-lg-6 p-3 p-lg-5 my-auto">
            <img src={Gameplay} alt="gameplay" className="image-section" />
          </div>
          <div className="col-sm-12 col-lg-6 p-3 p-lg-5">
            <p className="akira-outlined-blue">
              YOUR ADVENTURE <span className="akira-fill-blue">STARTS NOW</span>
            </p>

            <p className="bold-15 mt-3">
              Currently guild members can choose between two of the biggest P2E
              games:{' '}
              <b className="text-blue fw-bold">
                {' '}
                Axie Infinity and Thetan Arena.
              </b>{' '}
              With out currently owned 500+ gaming NFTs, you are free to explore
              each world according to your own tactics and gameplay.
            </p>
            <p className="bold-15 text-blue fw-bold">
              All our members have full access to our DAO inventory of NFTs, and
              also a step by step guide on how to start P2E.
            </p>
            <div className="d-flex flex-row row ">
              <div className="col">
                <a
                  href="https://axieinfinity.com/"
                  target="_blank"
                  rel="noopener noreferrer">
                  <img
                    src={AxieIcon}
                    alt="axie infinity"
                    className="image-section"
                  />
                </a>
              </div>
              <div className="col">
                <a
                  href="https://thetanarena.com/"
                  target="_blank"
                  rel="noopener noreferrer">
                  <img
                    src={ThetanIcon}
                    alt="thetan arena"
                    className="image-section"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  const RenderSecondSection = () => {
    return (
      <section className="container-fluid p-0 mb-5">
        <div className="row gx-0 p-0 m-0">
          <div className="col-sm-12 col-lg-6 p-3 p-lg-5 d-flex justify-content-start align-items-center align-items-lg-start flex-column ">
            <p className="akira-outlined-blue">
              MINT YOUR <span className="akira-fill-blue">GUILD BADGE</span>
            </p>
            <p className="bold-15 mt-3">
              You can enjoy access to our NFTs and other boons with your ranker
              badge that you will receive upon joining up with us.
            </p>
            <p className="bold-15 text-blue">
              Level up your badge with $RANKER and unlock our exclusive NFTs,
              tournaments, coaching sessions and many more!
            </p>
            <Link to="/about">
              <button className="join-our-guild">LEARN ABOUT $RANKER</button>
            </Link>
          </div>
          <div className="col-sm-12 col-lg-6 ps-0 ps-lg-5 my-auto">
            <img src={RankersBadge} alt="rankers badge" className="img-fluid" />
          </div>
        </div>
      </section>
    );
  };

  const RenderThirdSection = () => {
    return (
      <section className="container-fluid p-0 mb-5">
        <div className="row flex-column-reverse flex-lg-row">
          <div className="col-sm-12 col-lg-6 pe-0 pe-lg-5 my-auto">
            <div className="position-relative">
              <img src={BGThirdSection} className="background-section" />
              <img
                src={GuildIllustration}
                alt="guild member plus"
                className="image-section pe-3 pe-lg-5"
              />
            </div>
          </div>
          <div className="col-sm-12 col-lg-6 p-3 p-lg-5 my-auto">
            <p className="akira-outlined-blue">
              A DAO <span className="akira-fill-blue">COMMUNITY</span>
            </p>
            <p className="bold-15 mt-3">
              We are for a community and made by the community. Our members have
              the previlege to vote on how we grow our platform, such as voting
              for our next collection of NFTs or the De-Fi assets to explore!
            </p>
            <p className="bold-15 text-blue">
              In the future, the participants of the DAO may vote on how we want
              to expand our portfolio, be it metaverses, sports NFTs, works of
              arts, etc.
            </p>
          </div>
        </div>
      </section>
    );
  };

  const RenderFourthSection = () => {
    return (
      <section className="container-fluid p-0 mb-5">
        <div className="row">
          <div className="col-sm-12 col-lg-6 p-3 p-lg-5 my-auto">
            <p className="akira-outlined-blue">
              SOCIAL - FI <span className="akira-fill-blue">STRONG</span>
            </p>
            <p className="bold-15 mt-3">
              Start your adventure together! With our network, you can socialize
              and strategize with your peers, create new tactics and earn more
              than ever before! Compete with your friends and rank up to get
              more of our guild’s exclusive NFTs!
            </p>
            <p className="bold-15 text-blue">
              As we grow, we will implement more SocialFi features such as in
              house tournaments and other exciting activities and portfolios!
            </p>
          </div>
          <div className="col-sm-12 col-lg-6 ps-0 ps-lg-5 my-auto">
            <div className="position-relative">
              <img
                src={TogetherIllustration}
                alt="together we are strong"
                className="image-section ps-3 ps-lg-5"
              />
              <img src={BGFourthSection} className="background-section" />
            </div>
          </div>
        </div>
      </section>
    );
  };

  const Partnership = () => {
    const imageList = [
      Oddz,
      Raptor,
      BlackMamba,
      Hooga,
      Bitcoin,
      Gems,
      Frontier,
      J8Venture,
      ProjectSeed,
      HotCross,
    ];

    return (
      <section className="container-fluid pb-5">
        <p className="akira-outlined-blue text-center">
          OUR <span className="akira-fill-blue">FRIENDS</span>
        </p>

        <div className="row row-cols-2 row-cols-lg-5 px-5 mt-4">
          {imageList.map((img, index) => {
            return (
              <div
                className="col d-flex justify-content-center align-items-center"
                key={index}>
                <img
                  src={img}
                  className="img-fluid partnership-image mx-auto p-3"
                />
              </div>
            );
          })}
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
      <Partnership />
    </div>
  );
};

export default Home;
