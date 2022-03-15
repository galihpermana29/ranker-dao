import HeroIllustration from '../../assets/img/hero-illustration2.png';
import './style.scss';
const Hero = () => {
  return (
    <div className="container-fluid p-0 mb-5 position-relative">
      <div className="row p-0 m-0 hero-container gx-3">
        <div className="col-sm-12 col-lg-6 py-1 px-5 p-lg-5 d-flex flex-column align-items-center align-items-lg-start justify-content-start mt-3 mt-xl-5">
          <p className="akira-outlined-white hero-font-size">
            GET SET, PLAY,{' '}
            <span className="akira-fill-white yellow-half-bottom hero-font-size">
              EARN
            </span>
          </p>
          <p className="regular-15 text-white text-content-wrapper my-4">
            We are a guild of gamers who are passionate about P2E. We aim to
            empower our guild members to enjoy all the benefits as they explore
            the vast emergent socialfi ecosystem.
          </p>
          <a
            href="https://t.me/rankerdao"
            target="_blank"
            rel="noopener noreferrer">
            <button className="join-our-guild-btn my-4 bold-white">
              JOIN OUR GUILD NOW
            </button>
          </a>
        </div>

        <div className="col-sm-12 col-lg-6 hero-illustration-wrapper d-flex justify-content-end align-items-end">
          <img
            src={HeroIllustration}
            className="w-100 hero-img"
            alt="hero illustration"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
