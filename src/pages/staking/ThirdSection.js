import { Accordion } from 'components/accordion';
import { Modal } from 'components/modal';
import { useState } from 'react';
import { ConfirmAlert } from './modal/confirm-alert';
import { StakeConfirmationModal, StakeModal } from './modal/stake';
import { UnstakeConfirmationModal, UnstakeModal } from './modal/unstake';

const StakingCard = ({ onClickBuyRanker, onClickStake, onClickUnstake }) => {
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

      <button className="staking-card-button" onClick={onClickBuyRanker}>
        BUY $RANKER
      </button>

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
        style={{ marginBottom: '0.5rem' }}
        onClick={onClickStake}>
        STAKE
      </button>
      <button className="staking-card-button" onClick={onClickUnstake}>
        UNSTAKE
      </button>
    </div>
  );
};
const RewardsCard = ({ onClickClaim }) => {
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

      <button className="staking-card-button" onClick={onClickClaim}>
        CLAIM
      </button>
    </div>
  );
};

const InnerAccordion = ({ handleModal }) => {
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
      <StakingCard
        onClickBuyRanker={() => handleModal('BUY_RANKER')}
        onClickStake={() => handleModal('STAKE')}
        onClickUnstake={() => handleModal('UNSTAKE')}
      />
      <RewardsCard onClickClaim={() => handleModal('CLAIM')} />
    </div>
  );
};

export const StakingThirdSection = () => {
  const [isOpen, setIsOpen] = useState(null);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [modalType, setModalType] = useState(null);

  const handleModal = (type, visibility = true) => {
    setIsOpenModal(visibility);
    setModalType(type);
  };
  const modalTypeDict = {
    STAKE: (
      <StakeModal onClickStake={() => handleModal('STAKE_CONFIRMATION')} />
    ),
    STAKE_CONFIRMATION: (
      <StakeConfirmationModal
        onClickBack={() => handleModal('STAKE')}
        onClickConfirm={() => handleModal('STAKE_SUCCESS')}
      />
    ),
    STAKE_SUCCESS: <ConfirmAlert type="STAKE_SUCCESS" />,
    UNSTAKE: (
      <UnstakeModal
        onClickUnstake={() => handleModal('UNSTAKE_CONFIRMATION')}
      />
    ),
    UNSTAKE_CONFIRMATION: (
      <UnstakeConfirmationModal
        onClickBack={() => handleModal('UNSTAKE')}
        onClickConfirm={() => handleModal('UNSTAKE_SUCCESS')}
      />
    ),
    UNSTAKE_SUCCESS: <ConfirmAlert type="UNSTAKE_SUCCESS" />,
    CLAIM: <ConfirmAlert type="CLAIM" />,
  };

  return (
    <section className="staking-section">
      <Modal
        isOpen={isOpenModal}
        onClose={() => {
          handleModal(null, false);
        }}>
        {modalTypeDict?.[modalType] || <></>}
      </Modal>
      <Accordion
        title="LOCKER RANKER STAKING"
        key="locker_ranker_staking"
        onClick={() => {
          setIsOpen(prev =>
            prev === 'LOCKER_RANKER' ? null : 'LOCKER_RANKER',
          );
        }}
        isOpen={isOpen === 'LOCKER_RANKER'}>
        <InnerAccordion handleModal={handleModal} />
      </Accordion>
      <Accordion
        title="LOCKED RANKER-USDT LP STAKING"
        key="locker_ranker_ustd_lp_staking"
        onClick={() => {
          setIsOpen(prev => (prev === 'LP_STAKING' ? null : 'LP_STAKING'));
        }}
        isOpen={isOpen === 'LP_STAKING'}>
        <InnerAccordion handleModal={handleModal} />
      </Accordion>
      <Accordion
        title="FLEXIBLE RANKER STAKING"
        key="flexible_ranker_staking"
        onClick={() => {
          setIsOpen(prev => (prev === 'FLEXIBLE' ? null : 'FLEXIBLE'));
        }}
        isOpen={isOpen === 'FLEXIBLE'}>
        <InnerAccordion handleModal={handleModal} />
      </Accordion>
    </section>
  );
};
