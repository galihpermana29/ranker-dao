import HeroBadge from '../../assets/img/mint/hero.png';
import WhiteListBadge from '../../components/whitelist-badge';
import GamingBadge from '../../components/gaming-badge';

import './style.scss';

const MintBadge = () => {
  return (
    <div className="container-fluid p-0 mt-5">
      <div className="row p-0 m-0 gx-5 px-lg-5">
        <div className="col-sm-12 order-lg-1 order-2 col-lg-6 d-flex flex-column flex-lg-row justify-content-center align-items-center">
          <div className="h-100 d-flex align-items-center">
            <img
              src={HeroBadge}
              className="img-fluid mint-badge-shield-img w-100"
              alt="hero illustration"
            />
          </div>
          <div className="mx-ranker">
            <p className="regular-15 mt-3 d-lg-none d-block">
              You can enjoy our inventory of NFTs and other boons with yout
              RANKER Badge. Exclusive NFTs, Tournaments, coaching sessions and
              beyond.
            </p>
            <p className="bold-15 text-blue d-lg-none d-block">
              Different badges have their own unique features! Join our family
              and enjoy the boons that comes with badge ownership.{' '}
            </p>
          </div>
        </div>

        <div className="col-sm-12 order-lg-2 order-1 col-lg-6 py-4 d-flex flex-column align-items-center align-items-lg-center justify-content-center">
          <div style={{ overflowX: 'visible' }}>
            <p className="akira-outlined-blue mintbadge-font-size">
              be a part of
            </p>
            <p className="akira-fill-blue mintbadge-font-size">our family</p>
            <p className="regular-15 mt-3 d-none d-lg-block">
              You can enjoy our inventory of NFTs and other boons with yout
              RANKER Badge. Exclusive NFTs, Tournaments, coaching sessions and
              beyond.
            </p>
            <p className="bold-15 text-blue d-none d-lg-block">
              Different badges have their own unique features! Join our family
              and enjoy the boons that comes with badge ownership.{' '}
            </p>
          </div>
        </div>
      </div>

      <WhiteListBadge />
      <GamingBadge />
    </div>
  );
};

export default MintBadge;
