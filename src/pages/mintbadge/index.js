import './style.scss';
import ShieldBadge from '../../assets/img/shield-with-shadow.png';
const MintBadge = () => {
  return (
    <div className="container-fluid p-0">
      <div className="row p-0 m-0 hero-hero gx-5">
        <div className="col-sm-12 col-lg-6 py-4 px-5 p-lg-5 d-flex flex-column align-items-center align-items-lg-start justify-content-start mt-3 mt-lg-5">
          <p className="akira-outlined-white">MINT YOUR</p>
          <p className="akira-fill-white">
            GUILD{' '}
            <span className="akira-fill-white yellow-half-bottom">BADGE</span>
          </p>
          <p className="bold-15 text-white my-4 d-none d-lg-block pad-right">
            You can enjoy our inventory of NFTs and other boons with your{' '}
            <span className="bold-white">RANKER Badge</span>. Exclusive NFTs,
            Tournaments, coaching sessions and beyond.
          </p>
          <p className="bold-15 text-white my-4 d-block d-lg-none px-5">
            You can enjoy our inventory of NFTs and other boons with your{' '}
            <span className="bold-white">RANKER Badge</span>. Exclusive NFTs,
            Tournaments, coaching sessions and beyond.
          </p>
          <div className="d-flex flex-row">
            <div className="px-0 d-none d-lg-block">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <button className="mint-btn my-4 bold-white">
                  MINT YOUR BADGE
                </button>
              </a>
            </div>
            <div className="px-4 d-none d-lg-block">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <button className="connect-btn my-4 text-blue">
                  CONNECT WALLET
                </button>
              </a>
            </div>
          </div>
          <div className="row d-block d-lg-none">
            <div className="col-sm-12 col-lg-6">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <button className="mint-btn my-4 bold-white">
                  MINT YOUR BADGE
                </button>
              </a>
            </div>
            <div className="col-sm-12 col-lg-6">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <button className="connect-btn my-4 text-blue">
                  CONNECT WALLET
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="col-sm-12 col-lg-6 pb-5 p-lg-5">
          <img
            src={ShieldBadge}
            className="img-fluid"
            alt="hero illustration"
          />
        </div>
      </div>
    </div>
  );
};

export default MintBadge;
