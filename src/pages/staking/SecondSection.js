export const StakingSecondSection = ({ statistic }) => {
  return (
    <section className="staking-section">
      <h1 className="staking-title text-center">
        Stake Your Coin
        <span className="staking-title yellow">Now</span>
      </h1>
      <p
        className="staking-description text-center"
        style={{ maxWidth: 'unset' }}>
        Maximize your gain through $RANKER!
      </p>

      <div className="staking-pricing-container">
        <div>
          <h5 className="staking-pricing-label">$Ranker Price</h5>
          <p className="staking-pricing-price">
            <span className="yellow">{statistic.currentRankerPrice}</span> USD
          </p>
        </div>
        <div>
          <h5 className="staking-pricing-label">Total Distributed Rewards</h5>
          <p className="staking-pricing-price">
            <span className="yellow">
              {parseFloat(statistic.totalRewardEachSection)
                .toFixed(2)
                .replace(/\d(?=(\d{3})+\.)/g, '$&,')}
            </span>{' '}
            $RANKER
          </p>
        </div>
        <div>
          <h5 className="staking-pricing-label">Total Ranker Staked</h5>
          <p className="staking-pricing-price">
            <span className="yellow">
              {' '}
              {parseFloat(statistic.totalStakeInPool)
                .toFixed(2)
                .replace(/\d(?=(\d{3})+\.)/g, '$&,')}
            </span>{' '}
            $RANKER
          </p>
        </div>
      </div>
    </section>
  );
};
