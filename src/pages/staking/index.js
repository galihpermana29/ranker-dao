import './style.scss';

const Staking = () => {
  console.log('staking');
  return (
    <div className="staking-container" id="staking">
      <div className="staking-wrapper">
        <h3>Stak Your Coin Now</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam pretium
          tristique tortor in mi ornare arcu ultricies ac.
        </p>
        <div className="staking-wrapper__inner container">
          <div className="row">
            <div className="col">
              <label className="form-label" htmlFor="coin">
                COIN
              </label>
              <input className="form-control" id="coin" type="number" />
            </div>
            <div className="col">
              <label className="form-label" htmlFor="duration">
                Select Duration
              </label>
              <input className="form-control" id="duration" type="number" />
            </div>
          </div>
          <div className="row my-3">
            <div className="col">
              <label className="form-label" htmlFor="amount">
                Input your amount
              </label>
              <input className="form-control" id="amount" type="number" />
            </div>
            <div className="col">
              <label className="form-label" htmlFor="apy">
                Est APY
              </label>
              <input className="form-control" id="apy" type="number" />
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <button type="button" className="btn btn-light">
              Stake Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Staking;
