import { Accordion } from 'components/accordion';
import { useState } from 'react';

const StakingCard = () => {
  return (
    <div className="staking-card">
      <h5 className="staking-card-title">YOUR STAKE</h5>

      <label className="staking-card-label" htmlFor="available-token">
        AVAILABLE TOKEN
      </label>
      <input
        className="staking-card-input"
        id="available-token"
        name="available-token"
      />

      <button className="staking-card-button">BUY $RANKER</button>

      <label className="staking-card-label" htmlFor="staked-token">
        STAKED TOKEN
      </label>
      <input
        className="staking-card-input"
        id="staked-token"
        name="staked-token"
      />

      <button
        className="staking-card-button"
        style={{ marginBottom: '0.5rem' }}>
        STAKE
      </button>
      <button className="staking-card-button">UNSTAKE</button>
    </div>
  );
};
const RewardsCard = () => {
  return (
    <div className="staking-card">
      <h5 className="staking-card-title">YOUR REWARDS</h5>

      <label className="staking-card-label" htmlFor="unclaimed-rewards">
        UNCLAIMED REWARDS
      </label>
      <input
        className="staking-card-input"
        id="unclaimed-rewards"
        name="unclaimed-rewards"
      />

      <label className="staking-card-label" htmlFor="claimed-token">
        CLAIMED REWARDS
      </label>
      <input
        className="staking-card-input"
        id="claimed-token"
        name="claimed-token"
      />

      <p className="staking-card-reward">REWADS CLAIMABLE IN</p>
      <p className="staking-card-time yellow">XX:XX:XX</p>

      <button className="staking-card-button">CLAIM</button>
    </div>
  );
};

const InnerAccordion = () => {
  return (
    <div className="staking-accordion">
      <div className="staking-accordion-info">
        <div>
          <h5 className="staking-accordion-info-label">TODAY'S REWARD</h5>
          <p className="staking-accordion-info-price">
            <span className="yellow">700,000</span> $RANKER
          </p>
        </div>
        <div>
          <h5 className="staking-accordion-info-label">TOTAL REWARD</h5>
          <p className="staking-accordion-info-price">
            <span className="yellow">700,000</span> $RANKER
          </p>
        </div>
        <div>
          <h5 className="staking-accordion-info-label">TOTAL STAKED IN POOL</h5>
          <p className="staking-accordion-info-price">
            <span className="yellow">700,000</span> $RANKER
          </p>
        </div>
      </div>
      <StakingCard />
      <RewardsCard />
    </div>
  );
};

export const StakingThirdSection = () => {
  const [isOpen, setIsOpen] = useState(null);

  return (
    <section className="staking-section">
      {/* <Accordion title="LOCKER RANKER STAKING" key="locker_ranker_staking" /> */}
      <Accordion
        title="LOCKER RANKER STAKING"
        key="locker_ranker_staking"
        onClick={() => {
          setIsOpen(prev =>
            prev === 'LOCKER_RANKER' ? null : 'LOCKER_RANKER',
          );
        }}
        isOpen={isOpen === 'LOCKER_RANKER'}>
        <InnerAccordion />
      </Accordion>
      <Accordion
        title="LOCKED RANKER-USDT LP STAKING"
        key="locker_ranker_ustd_lp_staking"
        onClick={() => {
          setIsOpen(prev => (prev === 'LP_STAKING' ? null : 'LP_STAKING'));
        }}
        isOpen={isOpen === 'LP_STAKING'}>
        <InnerAccordion />
      </Accordion>
      <Accordion
        title="FLEXIBLE RANKER STAKING"
        key="flexible_ranker_staking"
        onClick={() => {
          setIsOpen(prev => (prev === 'FLEXIBLE' ? null : 'FLEXIBLE'));
        }}
        isOpen={isOpen === 'FLEXIBLE'}>
        <InnerAccordion />
      </Accordion>
    </section>
  );
};
