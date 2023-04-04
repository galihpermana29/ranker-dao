import stakingSuccessImg from 'assets/img/staking/staking-successful.png';
import unstakingSuccessImg from 'assets/img/staking/unstaking-successful.png';
import rewardClaimedImg from 'assets/img/staking/reward-claimed.png';
import stakingFailImg from 'assets/img/staking/unsuccesfull-stake.png';

export const ConfirmAlert = ({ type }) => {
  const contentDict = {
    STAKE_SUCCESS: {
      title: 'STAKING SUCCESSFUL',
      subtitle: 'Look forward to your rewards!',
      image: stakingSuccessImg,
    },
    STAKE_FAILED: {
      title: 'STAKING UNUCCESSFUL',
      subtitle: 'See you next time!!',
      image: stakingFailImg,
    },
    CLAIM: {
      title: 'REWARDS CLAIMED',
      subtitle: 'Enjoy what you sow!',
      image: rewardClaimedImg,
    },
    UNSTAKE_SUCCESS: {
      title: 'UNSTAKING SUCCESSFUL',
      subtitle: 'See you next time!',
      image: unstakingSuccessImg,
    },
    UNSTAKE_FAILED: {
      title: 'UNSTAKING UNUCCESSFUL',
      subtitle: 'See you next time!!',
      image: stakingFailImg,
    },
    UNSTAKE_FAILED_LOCKED: {
      title: 'UNSTAKING UNUCCESSFUL',
      subtitle: 'Stacking period is still locked!',
      image: stakingFailImg,
    },
  };

  return (
    <div className="staking-modal confirm">
      <img
        src={contentDict?.[type]?.image || ''}
        alt="staking"
        className="staking-modal-image"
      />
      <h5
        className={`staking-modal-confirm-title ${
          type !== 'UNSTAKING_SUCCESS' ? 'yellow' : ''
        }`}>
        {contentDict?.[type]?.title}
      </h5>
      <p className="staking-modal-confirm-subtitle">
        {contentDict?.[type]?.subtitle}
      </p>
    </div>
  );
};
