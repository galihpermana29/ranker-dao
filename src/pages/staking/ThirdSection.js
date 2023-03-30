import { Accordion } from 'components/accordion';
import { ConfirmAlert } from './modal/confirm-alert';
import { Modal } from 'components/modal';
import { StakeConfirmationModal, StakeModal } from './modal/stake';
import { UnstakeConfirmationModal, UnstakeModal } from './modal/unstake';
import { useState } from 'react';
import { useWalletContext } from 'contexts/WalletContext';
import { useEffect } from 'react';

import { useStakingHooks } from 'services/stacking';
import CountDown from 'components/countdown';
import { PdToast } from 'components/toast';

/**
 *
 * @typedef {'STAKE' | 'STAKE_CONFIRMATION' | 'STAKE_SUCCESS' | 'UNSTAKE' | 'UNSTAKE_CONFIRMATION' | 'UNSTAKE_SUCCESS' | 'CLAIM'} TmodalType
 */

const StakingCard = ({
  onClickBuyRanker,
  onClickStake,
  onClickUnstake,
  currentStakeValue,
  buyRanker,
  data,
  type,
}) => {
  return (
    <div className="staking-card">
      <h5 className="staking-card-title">YOUR STAKE</h5>

      <label className="staking-card-label" htmlFor="available-token">
        AVAILABLE TOKEN
      </label>
      {/* <label className="currency-label">RANKER</label> */}
      <input
        className="staking-card-input"
        id="available-token"
        name="available-token"
        value={`${data} $RNKR`}
        disabled
      />

      <button
        className="staking-card-button"
        // disabled={!data}
        onClick={onClickBuyRanker}>
        BUY $RANKER
        <div className={`dropdown ${buyRanker ? 'active' : ''}`}>
          <a
            href="https://www.mexc.com/id-ID/pioneer"
            target={'_blank'}
            rel="noreferrer"
            className="market-item">
            MEXC PIONEER
          </a>
          <a
            href="https://www.kucoin.com/"
            target={'_blank'}
            rel="noreferrer"
            className="market-item">
            KUCOIN
          </a>
          <a
            href="https://apeswap.finance/"
            target={'_blank'}
            rel="noreferrer"
            className="market-item">
            APESWAP
          </a>
          <a
            href="https://www.huobi.com/en-us/"
            target={'_blank'}
            rel="noreferrer"
            className="market-item">
            HUOBI GLOBAL
          </a>
          <a
            href="https://www.gate.io/"
            target={'_blank'}
            rel="noreferrer"
            className="market-item">
            GATE.IO
          </a>
        </div>
      </button>

      <label className="staking-card-label" htmlFor="staked-token">
        STAKED TOKEN
      </label>
      <input
        className="staking-card-input"
        id="staked-token"
        name="staked-token"
        value={`${currentStakeValue} $RNKR`}
        disabled
      />

      <button
        disabled={!currentStakeValue}
        className="staking-card-button"
        style={{ marginBottom: '0.5rem' }}
        onClick={onClickStake}>
        STAKE
      </button>
      <button
        disabled={!currentStakeValue}
        className="staking-card-button"
        onClick={onClickUnstake}>
        UNSTAKE
      </button>
    </div>
  );
};

const RewardsCard = ({ onClickClaim, data, claimDate }) => {
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
        disabled
        value={`${data} $RNKR`}
      />

      <label className="staking-card-label" htmlFor="claimed-token">
        CLAIMED REWARDS
      </label>
      <input
        className="staking-card-input"
        id="claimed-token"
        name="claimed-token"
        disabled
        value={`${data} $RNKR`}
      />

      <p className="staking-card-reward">REWARDS CLAIMABLE IN</p>
      <p className="staking-card-time yellow">
        <CountDown date={claimDate} />
      </p>
      <button
        disabled={!data}
        className="staking-card-button"
        onClick={onClickClaim}>
        CLAIM
      </button>
    </div>
  );
};

const InnerAccordion = ({
  handleModal,
  data,
  currentStakeValue,
  claimDate,
  handleClaimReward,
  isBuyClicked,
  setIsBuyClicked,
  type,
}) => {
  return (
    <div className="staking-accordion">
      <div className="staking-accordion-info">
        <div>
          <h5 className="staking-accordion-info-label">TODAY'S REWARD</h5>
          <p className="staking-accordion-info-price">
            <span className="yellow">
              {data.todaysReward === '-'
                ? '-'
                : parseFloat(data.todaysReward)
                    .toFixed(2)
                    .replace(/\d(?=(\d{3})+\.)/g, '$&,')}
            </span>{' '}
            $RANKER
          </p>
        </div>
        <div>
          <h5 className="staking-accordion-info-label">TOTAL REWARD</h5>
          <p className="staking-accordion-info-price">
            <span className="yellow">
              {data.totalRewardEachSection === '-'
                ? '-'
                : parseFloat(data.totalRewardEachSection)
                    .toFixed(2)
                    .replace(/\d(?=(\d{3})+\.)/g, '$&,')}
            </span>{' '}
            $RANKER
          </p>
        </div>
        <div>
          <h5 className="staking-accordion-info-label">TOTAL STAKED IN POOL</h5>
          <p className="staking-accordion-info-price">
            <span className="yellow">
              {data.totalStakeInPool === '-'
                ? '-'
                : parseFloat(data.totalStakeInPool)
                    .toFixed(2)
                    .replace(/\d(?=(\d{3})+\.)/g, '$&,')}
            </span>{' '}
            $RANKER
          </p>
        </div>
      </div>
      <StakingCard
        onClickBuyRanker={() => setIsBuyClicked(!isBuyClicked)}
        onClickStake={() => handleModal(type, 'STAKE')}
        onClickUnstake={() => handleModal(type, 'UNSTAKE')}
        currentStakeValue={currentStakeValue}
        data={data.availToken}
        buyRanker={isBuyClicked}
        type={type}
      />
      <RewardsCard
        onClickClaim={handleClaimReward}
        data={data.unclaimedReward}
        claimDate={claimDate}
        type={type}
      />
    </div>
  );
};

/**
 *
 * @param {integer} availToken - value for avail token from metamask user
 */
export const StakingThirdSection = ({ availToken }) => {
  //staking hooks
  const { address = '', provider, isConnect } = useWalletContext();
  const {
    allowanceAmount,
    // checkCurrentLP,
    checkCurrentStakeValue,
    checkFinishedAt,
    checkTodaysReward,
    checkTotalRewardEachSection,
    checkTotalStakeInPool,
    checkUnclaimableReward,
    claimRewardStacking,
    stacking,
    unstacking,
  } = useStakingHooks(address, provider);

  const [isOpen, setIsOpen] = useState(null);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [modalType, setModalType] = useState(null);

  //stake value
  const [stakeValue, setStakeValue] = useState(0);
  const [unstakeValue, setUnstakeValue] = useState(0);
  const [currentStakeValue, setCurrentStakeValue] = useState({
    nonLockCurrentStake: 0,
    lockCurrentStake: 0,
  });
  const { nonLockCurrentStake, lockCurrentStake } = currentStakeValue;

  // statistics
  const [poolStat, setPoolStat] = useState({
    todaysReward: isConnect ? 0 : '-',
    totalStakeInPool: isConnect ? 0 : '-',
    totalReward: isConnect ? 0 : '-',
    totalRewardEachSection: isConnect ? 0 : '-',
  });

  //reward value
  const [unclaimedReward, setUnclaimedReward] = useState({
    nonLockReward: 0,
    lockReward: 0,
  });
  const { nonLockReward, lockReward } = unclaimedReward;

  const [claimedTime, setClaimedTime] = useState(0);
  //buy ranker
  const [isBuyClicked, setIsBuyClicked] = useState(false);

  //staking type
  const [activeStakingType, setActiveStakingType] = useState('');
  const [isError, setIsError] = useState({ message: '', visible: false });

  //allowance and stacking a token to blockchain
  const actionStacking = async () => {
    const variableOfContract = ['lpLocker', 'locker'].includes(
      activeStakingType,
    )
      ? process.env.REACT_APP_CONTRACT_STAKING_ADDRESS_LOCK
      : process.env.REACT_APP_CONTRACT_STAKING_ADDRESS;

    try {
      await allowanceAmount(variableOfContract, stakeValue);
      await stacking(stakeValue, variableOfContract);
      handleModal(activeStakingType, 'STAKE_SUCCESS');
    } catch (error) {
      handleModal(activeStakingType, 'STAKE_FAILED');
      console.log(error);
    }
  };

  const actionUnstake = async () => {
    const variableOfContract = ['lpLocker', 'locker'].includes(
      activeStakingType,
    )
      ? process.env.REACT_APP_CONTRACT_STAKING_ADDRESS_LOCK
      : process.env.REACT_APP_CONTRACT_STAKING_ADDRESS;
    try {
      await unstacking(unstakeValue, variableOfContract);
      handleModal(activeStakingType, 'UNSTAKE_SUCCESS');
    } catch (error) {
      handleModal(activeStakingType, 'UNSTAKE_FAILED');
      // handleModal('', null, false);

      console.log(error);
    }
  };

  const actionClaimReward = async () => {
    const variableOfContract = ['lpLocker', 'locker'].includes(
      activeStakingType,
    )
      ? process.env.REACT_APP_CONTRACT_STAKING_ADDRESS_LOCK
      : process.env.REACT_APP_CONTRACT_STAKING_ADDRESS;
    try {
      await claimRewardStacking(variableOfContract);
      handleModal(activeStakingType, 'CLAIM');
    } catch (error) {
      setIsError({
        visible: true,
        message: 'Failed when claiming reward!',
      });
      console.log(error, 'Errow while claiming reward');
    }
  };

  /**
   * @param {TmodalType | null} type
   * @param {boolean} [visibility]
   */
  const handleModal = (typeStaking, type, visibility = true) => {
    setIsOpenModal(visibility);
    setModalType(type);
    setActiveStakingType(typeStaking);
  };

  /** @type {Record<TmodalType, React.ReactNode>} */
  const modalTypeDict = {
    STAKE: (
      <StakeModal
        onClickStake={() =>
          handleModal(activeStakingType, 'STAKE_CONFIRMATION')
        }
        stakeValue={stakeValue}
        onChangeStakeValue={setStakeValue}
        walletToken={availToken}
      />
    ),
    STAKE_CONFIRMATION: (
      <StakeConfirmationModal
        onClickBack={() => handleModal(activeStakingType, 'STAKE')}
        onClickConfirm={actionStacking}
        stakeValue={stakeValue}
      />
    ),
    STAKE_SUCCESS: <ConfirmAlert type="STAKE_SUCCESS" />,
    STAKE_FAILED: <ConfirmAlert type="STAKE_FAILED" />,
    UNSTAKE_FAILED: <ConfirmAlert type="UNSTAKE_FAILED" />,
    UNSTAKE: (
      <UnstakeModal
        onClickUnstake={() =>
          handleModal(activeStakingType, 'UNSTAKE_CONFIRMATION')
        }
        unstakeValue={unstakeValue}
        onChangeUnstakeValue={setUnstakeValue}
        currentStakeValue={
          ['lpLocker', 'locker'].includes(activeStakingType)
            ? lockCurrentStake
            : nonLockCurrentStake
        }
      />
    ),
    UNSTAKE_CONFIRMATION: (
      <UnstakeConfirmationModal
        onClickBack={() => handleModal(activeStakingType, 'UNSTAKE')}
        onClickConfirm={actionUnstake}
        unstakeValue={unstakeValue}
      />
    ),
    UNSTAKE_SUCCESS: <ConfirmAlert type="UNSTAKE_SUCCESS" />,
    CLAIM: <ConfirmAlert type="CLAIM" />,
  };

  useEffect(() => {
    const getRewardForUser = async () => {
      const earnedInRankerLock = await checkUnclaimableReward(
        address,
        process.env.REACT_APP_CONTRACT_STAKING_ADDRESS_LOCK,
      );
      const currentStakeValueLock = await checkCurrentStakeValue(
        address,
        process.env.REACT_APP_CONTRACT_STAKING_ADDRESS_LOCK,
      );
      const earnedInRanker = await checkUnclaimableReward(
        address,
        process.env.REACT_APP_CONTRACT_STAKING_ADDRESS,
      );
      const currentStakeValues = await checkCurrentStakeValue(
        address,
        process.env.REACT_APP_CONTRACT_STAKING_ADDRESS,
      );

      setCurrentStakeValue({
        nonLockCurrentStake: currentStakeValues,
        lockCurrentStake: currentStakeValueLock,
      });
      setUnclaimedReward({
        nonLockReward: earnedInRanker,
        lockReward: earnedInRankerLock,
      });
    };

    const getStat = async () => {
      try {
        const env = ['LOCKER_RANKER', 'LP_STAKING'].includes(isOpen)
          ? process.env.REACT_APP_CONTRACT_STAKING_ADDRESS_LOCK
          : process.env.REACT_APP_CONTRACT_STAKING_ADDRESS;
        const todaysReward = await checkTodaysReward(env, address);
        const totalStakeInPool = await checkTotalStakeInPool(env);
        // const totalStakeLP = await checkCurrentLP(
        //   process.env.REACT_APP_CONTRACT_LP_APESWAP,
        //   process.env.REACT_APP_CONTRACT_RANKER_PRODUCTION,
        // );
        const totalRewardEachSection = await checkTotalRewardEachSection(env);
        setPoolStat({ todaysReward, totalStakeInPool, totalRewardEachSection });
      } catch (error) {
        console.log('Error while getting stats', error);
      }
    };

    if (address) {
      setInterval(() => {
        getRewardForUser();
        getStat();
      }, 1000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [address, activeStakingType]);

  useEffect(() => {
    const getTiming = async () => {
      const timing = await checkFinishedAt();
      setClaimedTime(timing);
    };
    if (address) getTiming();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [claimedTime]);

  return (
    <section className="staking-section">
      <PdToast isOpen={isError.visible} message={isError.message} />
      <Modal
        isOpen={isOpenModal}
        onClose={() => {
          handleModal('', null, false);
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
        <InnerAccordion
          handleModal={handleModal}
          data={{
            availToken,
            unclaimedReward: lockReward,
            ...poolStat,
          }}
          currentStakeValue={lockCurrentStake}
          claimDate={claimedTime !== 0 ? claimedTime : Date.now()}
          handleClaimReward={actionClaimReward}
          isBuyClicked={isBuyClicked}
          setIsBuyClicked={setIsBuyClicked}
          type="locker"
        />
      </Accordion>
      <Accordion
        title="LOCKED RANKER-USDT LP STAKING"
        key="locker_ranker_ustd_lp_staking"
        onClick={() => {
          setIsOpen(prev => (prev === 'LP_STAKING' ? null : 'LP_STAKING'));
        }}
        isOpen={isOpen === 'LP_STAKING'}>
        <InnerAccordion
          handleModal={handleModal}
          data={{
            availToken,
            unclaimedReward: lockReward,
            ...poolStat,
          }}
          currentStakeValue={lockCurrentStake}
          claimDate={claimedTime !== 0 ? claimedTime : Date.now()}
          handleClaimReward={actionClaimReward}
          isBuyClicked={isBuyClicked}
          setIsBuyClicked={setIsBuyClicked}
          type="lpLocker"
        />
      </Accordion>
      <Accordion
        title="FLEXIBLE RANKER STAKING"
        key="flexible_ranker_staking"
        onClick={() => {
          setIsOpen(prev => (prev === 'FLEXIBLE' ? null : 'FLEXIBLE'));
        }}
        isOpen={isOpen === 'FLEXIBLE'}>
        <InnerAccordion
          handleModal={handleModal}
          data={{
            availToken,
            unclaimedReward: nonLockReward,
            ...poolStat,
          }}
          currentStakeValue={nonLockCurrentStake}
          claimDate={claimedTime !== 0 ? claimedTime : Date.now()}
          handleClaimReward={actionClaimReward}
          isBuyClicked={isBuyClicked}
          setIsBuyClicked={setIsBuyClicked}
          type="flexible"
        />
      </Accordion>
    </section>
  );
};
