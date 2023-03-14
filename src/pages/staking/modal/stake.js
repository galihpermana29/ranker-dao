import './style.scss';

/**
 *
 * @param {integer} stakeValue - user input for stake value of their token
 * @param {integer} walletToken - user current avail token from wallet
 */

export const StakeModal = ({
  onClickStake,
  stakeValue,
  onChangeStakeValue,
  walletToken,
}) => {
  return (
    <div className="staking-modal">
      <h5 className="staking-modal-title">YOUR STAKE</h5>

      <p className="staking-modal-subtitle">
        YOUR $RANKER WILL BE
        <br />
        STAKED FOR
        <br />
        <span className="bold">(X DAYS)</span>
      </p>

      <label className="staking-modal-input-label" htmlFor="available-token">
        AVAILABLE TOKEN
      </label>
      <input
        className="staking-modal-input-field"
        id="available-token"
        name="available-token"
        disabled
        value={`${walletToken} $RNKR`}
      />

      <label className="staking-modal-input-label" htmlFor="staking-now">
        STAKING NOW
      </label>
      <input
        className="staking-modal-input-field"
        id="staking-now"
        name="staking-now"
        value={`${stakeValue}`}
        onChange={e => {
          onChangeStakeValue(e.target.value);
          // console.log(e.target.value, 'if');
          // if (
          //   ['$RNK', '$RNR', '$NKR', '$RKR'].includes(
          //     e.target.value.split(' ')[1],
          //   ) ||
          //   e.target.value.split(' ')[1] !== '$RNKR'
          // ) {
          //   return;
          // } else {
          //   onChangeStakeValue(e.target.value);
          //   // console.log(e.target.value.replace('$RNKR', ''), 'not if');
          //   // onChangeStakeValue(e.target.value.replace('$RNKR', ''));
          // }
        }}
      />

      <button
        className="staking-modal-button yellow"
        style={{ marginTop: '1rem', marginBottom: '0.5rem' }}
        onClick={() => onChangeStakeValue(walletToken)}>
        MAX AMOUNT
      </button>
      <button
        disabled={stakeValue === 0 ? true : false}
        className="staking-modal-button"
        onClick={onClickStake}>
        STAKE
      </button>
    </div>
  );
};

export const StakeConfirmationModal = ({
  onClickConfirm,
  onClickBack,
  stakeValue,
}) => {
  return (
    <div className="staking-modal">
      <h5 className="staking-modal-title">YOUR STAKE</h5>

      <p className="staking-modal-subtitle">
        YOUR $RANKER WILL BE
        <br />
        STAKED FOR
        <br />
        <span className="bold">(X DAYS)</span>
      </p>

      <label className="staking-modal-input-label" htmlFor="staking-now">
        STAKING NOW
      </label>
      <input
        className="staking-modal-input-field"
        id="staking-now"
        name="staking-now"
        disabled
        value={stakeValue + ' $RNKR'}
      />

      <button
        className="staking-modal-button yellow"
        style={{ marginTop: '1rem', marginBottom: '0.5rem' }}
        onClick={onClickConfirm}>
        CONFIRM
      </button>
      <button className="staking-modal-button" onClick={onClickBack}>
        BACK
      </button>
    </div>
  );
};
