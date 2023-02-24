import stakingSuccessImg from 'assets/img/staking/staking-successful.png';
import unstakingSuccessImg from 'assets/img/staking/unstaking-successful.png';
import rewardClaimedImg from 'assets/img/staking/reward-claimed.png';

export const ConfirmAlert = ({ type }) => {
  const contentDict = {
    STAKE_SUCCESS: {
      title: 'STAKING SUCCESSFUL',
      subtitle: 'Look forward to your rewards!',
      image: stakingSuccessImg,
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
