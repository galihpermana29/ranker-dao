import Coin from '../../assets/img/about/coin.png';

import './style.scss';

const PRICE_DICT = [
  { title: '$RANKER PRICE', price: '700,000', symbol: '$RANKER' },
  { title: 'TOTAL DISTRIBUTED REWARDS', price: '1000,000', symbol: '$RANKER' },
  { title: 'TOTAL RANKER STAKED', price: '1000,000', symbol: '$RANKER' },
];

const STAKE_DICT = [
  { title: 'TODAY’S REWARD', price: '700,000', symbol: '$RANKER' },
  { title: 'TOTAL REWARD', price: '700,000', symbol: '$RANKER' },
  { title: 'TOTAL STAKED IN POOL', price: '700,000', symbol: '$RANKER' },
];

const Staking = () => {
  return (
    <div className="staking-container w-100" id="staking">
      <div className="hero w-100">
        <div className="left">
          <div className="title">
            <p className="title-black">MAKE YOUR TOKEN WORK</p>
            <p className="title-yellow">FOR YOU</p>
          </div>

          <img
            src={Coin}
            alt="ranker badge"
            className="ranker-badge d-block d-sm-none"
          />

          <p className="description mt-5 mt-md-2">
            Stake your coin and make it work for your gain! Earn more while you
            have fun exploring the world of P2E!.
          </p>

          <p className="description">
            Or if you have not own a badge yet, you can unlock all our NFTs and
            other benefits by purchasing our badge!
          </p>

          <button className="mint-button my-4">MINT YOURS NOW</button>
        </div>

        <img
          src={Coin}
          alt="ranker badge"
          className="ranker-badge d-none d-sm-block"
        />
      </div>
      <p className="title-black text-center mt-5">
        STAKE YOUR COIN <span className="title-yellow">NOW</span>
      </p>
      <p className="text-center description mt-2">
        Maximize your gain through $RANKER!
      </p>

      <div className="price-container row w-100 m-0">
        {PRICE_DICT.map(({ title = '', price = '', symbol = '' }) => {
          return (
            <div className="price-wrapper text-center d-flex flex-column mt-5 col-12 col-md-4">
              <p className="title text-center w-100">{title}</p>
              <p className="price text-center">
                {price} <span className="symbol">{symbol}</span>
              </p>
            </div>
          );
        })}
      </div>

      <div className="stake-card-container row">
        <p className="stake-title my-5 text-center">FLEXIBLE RANKER STAKING</p>

        <div className="price-container d-none d-sm-block stake text-center mb-5 mb-md-0 col-12 col-md-4">
          {STAKE_DICT.map(({ title = '', price = '', symbol = '' }, index) => {
            return (
              <div
                className={`${
                  index === 0 ? '' : 'mt-3'
                } price-wrapper text-center w-100 d-flex flex-column col-12 col-md-4`}>
                <p className="title text-center w-100">{title}</p>
                <p className="price text-center w-100">
                  {price} <span className="symbol">{symbol}</span>
                </p>
              </div>
            );
          })}
        </div>

        <div className="stake text-center mb-5 mb-md-0 col-12 col-md-4">
          <div className="stake-card text-center">
            <p className="stake-sub-title">YOUR STAKE</p>

            <p className="label mb-2">AVAILABLE TOKEN</p>
            <input
              className="stake-input mb-2"
              placeholder="1000.000.000.000"
            />
            <button className="stake-button mb-3">BUY $RANKER</button>

            <p className="label mt-3 mb-2">STAKED TOKEN</p>
            <input
              className="stake-input mb-2"
              placeholder="1000.000.000.000"
            />
            <button className="stake-button mb-2">STAKE</button>
            <button className="stake-button">UNSTAKE</button>
          </div>
        </div>

        <div className="stake text-center mb-5 mb-md-0 col-12 col-md-4">
          <div className="stake-card text-center">
            <p className="stake-sub-title">YOUR REWARDS</p>

            <p className="label mb-2">UNCLAIMED REWARDS</p>
            <input
              className="stake-input mb-2"
              disabled
              placeholder="1000.000.000.000"
            />

            <p className="label mt-3 mb-2">CLAIMED REWARDS</p>
            <input
              className="stake-input mb-2"
              disabled
              placeholder="1000.000.000.000"
            />
            <p className="reward-claimable-text">REWARDS CLAIMABLE IN</p>
            <p className="time-remain">XX:XX:XX</p>
            <button className="stake-button mb-2">CLAIM</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Staking;
