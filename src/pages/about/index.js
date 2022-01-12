import Coin from '../../assets/img/about/coin.png';
import GraphFirst from '../../assets/img/about/Graph-1.png';
import GraphSecond from '../../assets/img/about/Graph-2.png';
import GraphThird from '../../assets/img/about/Graph-3.png';

import MobileFirst from '../../assets/img/about/MobileFirst.png';
import MobileSecond from '../../assets/img/about/MobileSecond.png';
import MobileThird from '../../assets/img/about/MobileThird.png';
import MobileFourth from '../../assets/img/about/MobileFourth.png';
import MobileFifth from '../../assets/img/about/MobileFifth.png';
import MobileSixth from '../../assets/img/about/MobileSixth.png';
import MobileSeventh from '../../assets/img/about/MobileSeventh.png';
import MobileEighth from '../../assets/img/about/MobileEighth.png';
import MobileNineth from '../../assets/img/about/MobileNineth.png';
import MobileTenth from '../../assets/img/about/MobileTenth.png';
import MobileEleventh from '../../assets/img/about/MobileEleventh.png';
import RankersBadge from '../../assets/img/about/rankers-badge.png';
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

  return (
    <div className="container-fluid h-100 p-0">
      <div className="about-wrapper px-3">
        <div className="d-flex justify-content-center flex-column pt-5">
          <img src={Coin} className="img-fluid coin mx-auto" />
          <p className="akira-fill-white text-center">
            $RANKER <span className="akira-outlined-white">TOKEN</span>
          </p>
          <p className="bold-15 text-white text-center">
            Level up your badge with $RANKER and unlock our exclusive NFTs,
            tournaments, coaching sessions and many more!
          </p>
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

      <img src={RankersBadge} alt="rankers badge" className="img-fluid" />
    </div>
  );
};

export default About;
