import ButtonApeswap from '../../assets/img/about/apeswap-color.png';
import ButtonGateio from '../../assets/img/about/gateio-color.png';
import ButtonHuobi from '../../assets/img/about/huobi-color.png';
import ButtonKucoin from '../../assets/img/about/kucoin-color.png';
import ButtonMexci from '../../assets/img/about/mexc-color.png';
import Coin from '../../assets/img/about/token.png';
import GraphFirst from '../../assets/img/about/Graph-1.png';
import GraphSecond from '../../assets/img/about/Graph-2.png';
import GraphThird from '../../assets/img/about/Graph-3.png';
import MobileEighth from '../../assets/img/about/MobileEighth.png';
import MobileEleventh from '../../assets/img/about/MobileEleventh.png';
import MobileFifth from '../../assets/img/about/MobileFifth.png';
import MobileFirst from '../../assets/img/about/MobileFirst.png';
import MobileFourth from '../../assets/img/about/MobileFourth.png';
import MobileNineth from '../../assets/img/about/MobileNineth.png';
import MobileSecond from '../../assets/img/about/MobileSecond.png';
import MobileSeventh from '../../assets/img/about/MobileSeventh.png';
import MobileSixth from '../../assets/img/about/MobileSixth.png';
import MobileTenth from '../../assets/img/about/MobileTenth.png';
import MobileThird from '../../assets/img/about/MobileThird.png';
import RankersBadge from '../../assets/img/about/rankers-badge-2.png';
import RankersBadgeMobile from '../../assets/img/about/rankers-badge-mobile.png';
import './style.scss';

const About = () => {
  const mobileGraphList = [
    { img: MobileFirst, alt: 'mobile graph 1' },
    { img: MobileSecond, alt: 'mobile graph 2' },
    { img: MobileThird, alt: 'mobile graph 3' },
    { img: MobileFourth, alt: 'mobile graph 4' },
    { img: MobileFifth, alt: 'mobile graph 5' },
    { img: MobileSixth, alt: 'mobile graph 6' },
    { img: MobileSeventh, alt: 'mobile graph 7' },
    { img: MobileEighth, alt: 'mobile graph 8' },
    { img: MobileNineth, alt: 'mobile graph 9' },
    { img: MobileTenth, alt: 'mobile graph 10' },
    { img: MobileEleventh, alt: 'mobile graph 11' },
  ];

  const RenderMintList = () => {
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
      {
        img: ButtonGateio,
        link: 'https://www.gate.io/trade/RANKER_USDT',
        alt: 'gate io',
      },
      { img: ButtonApeswap, link: 'https://apeswap.finance/', alt: 'apeswap' },
      {
        img: ButtonHuobi,
        link: 'https://www.huobi.com/en-us/exchange/ranker_usdt/',
        alt: 'huobi',
      },
    ];

    return (
      <section className="container-fluid my-5">
        <div className="d-flex flex-row flex-wrap flex-lg-nowrap justify-content-center align-items-center gy-4">
          {mintLinkList.map(({ img, alt, link }) => {
            return (
              <div
                className="d-flex justify-content-center align-items-center m-2"
                key={link}>
                <button type="button" className="btn btn-mint-link-ranker-page">
                  <a
                    href={link}
                    className="mint-link"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img
                      src={img}
                      alt={alt}
                      className="mint-link-ranker-page-image"
                    />
                  </a>
                </button>
              </div>
            );
          })}
        </div>
      </section>
    );
  };

  return (
    <div className="container-fluid h-100 p-0">
      <div className="about-wrapper px-3">
        <div className="d-flex justify-content-center flex-column pt-2 pt-md-3 pt-lg-5 ">
          <img src={Coin} className="img-fluid coin mx-auto" />
          <p className="akira-fill-white text-center">
            <span className="akira-fill-white yellow-half-bottom">$RANKER</span>{' '}
            <span className="akira-outlined-white">TOKEN</span>
          </p>
          <p className="bold-15 text-white text-center">
            Level up your badge with $RANKER and unlock our exclusive NFTs,
            tournaments, coaching sessions and many more!<br></br> You can get
            our tokens at these following site:
          </p>
          <RenderMintList />
        </div>
        {/* DESKTOP ONLY */}
        <img src={GraphFirst} className="img-fluid d-none d-sm-block" />
        <img src={GraphSecond} className="img-fluid d-none d-sm-block" />
        <img src={GraphThird} className="img-fluid d-none d-sm-block" />

        {/* MOBILE ONLY */}
        {mobileGraphList.map(img => (
          <img
            key={img.alt}
            className="img-fluid d-block d-sm-none"
            src={img.img}
            alt={img.alt}
          />
        ))}
        <p className="bold-15 text-white text-center d-block d-sm-none py-5">
          *DISCLAIMER : The information in this document is subject to change
          without notice
        </p>
      </div>

      <p className="akira-outlined-blue text-center my-5">
        RANKERS <span className="akira-fill-blue">BADGE</span>
      </p>

      <img
        src={RankersBadge}
        alt="rankers badge"
        className="img-fluid w-100 d-block d-none d-sm-block"
      />
      <img
        src={RankersBadgeMobile}
        alt="rankers badge mobile"
        className="img-fluid w-100 d-block d-sm-none"
      />
      <div className="d-flex">
        <a
          href="/mint-badge"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-auto">
          <button className="mint-badge-btn mb-5 mt-1 bold-white">
            MINT YOUR BADGE
          </button>
        </a>
      </div>
    </div>
  );
};

export default About;
