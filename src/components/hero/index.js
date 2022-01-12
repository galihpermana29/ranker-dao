import { Link } from 'react-router-dom';

import HeroIllustration from '../../assets/img/hero-illustration.png';

import './style.scss';
const Hero = () => {
  return (
    <div className="container-fluid p-0 mb-5">
      <div className="row p-0 m-0 hero-container gx-5">
        <div className="col-sm-12 col-lg-6 p-3 p-lg-5 d-flex flex-column align-items-start justify-content-start mt-5">
          <p className="akira-outlined-white">
            GET SET, PLAY, <span className="akira-fill-white">EARN</span>
          </p>
          <p className="hero-desc">
            We are a guild of gamers who are passionate about P2E. We aim to
            empower our guild members to enjoy all the benefits as they explore
            the vast emergent socialfi ecosystem.
          </p>
          <Link to="/about">
            <button className="join-our-guild">JOIN OUR GUILD NOW</button>
          </Link>
        </div>

        <div className="col-sm-12 col-lg-6 p-3 p-lg-5">
          <img
            src={HeroIllustration}
            className="hero-illustration"
            alt="illustration hero"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
