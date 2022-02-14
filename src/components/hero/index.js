import HeroIllustration from '../../assets/img/hero-illustration.png';
import './style.scss';
const Hero = () => {
  return (
    <div className="container-fluid p-0 mb-5">
      <div className="row p-0 m-0 hero-container gx-5">
        <div className="col-sm-12 col-lg-6 py-1 px-5 p-lg-5 d-flex flex-column align-items-center align-items-lg-start justify-content-start mt-3 mt-lg-5">
          <p className="akira-outlined-white">
            GET SET, PLAY,{' '}
            <span className="akira-fill-white yellow-half-bottom">EARN</span>
          </p>
          <p className="bold-15 text-white my-4">
            We are a guild of gamers who are passionate about P2E. We aim to
            empower our guild members to enjoy all the benefits as they explore
            the vast emergent socialfi ecosystem.
          </p>
          <a
            href="https://t.me/rankerdao"
            target="_blank"
            rel="noopener noreferrer">
            <button className="join-our-guild my-4 bold-white">
              JOIN OUR GUILD NOW
            </button>
          </a>
        </div>

        <div className="col-sm-12 col-lg-6 pb-5 p-lg-5">
          <img
            src={HeroIllustration}
            className="img-fluid"
            alt="hero illustration"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
