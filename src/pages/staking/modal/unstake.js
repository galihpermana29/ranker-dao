import './style.scss';

/**
 *
 * @param {integer} unstakeValue - unstake value to be input to the popup
 * @param {integer} currentStakeValue - user current balance of stacked token
 * @returns
 */

export const UnstakeModal = ({
  onClickUnstake,
  unstakeValue,
  onChangeUnstakeValue,
  currentStakeValue,
}) => {
  return (
    <div className="staking-modal">
      <h5 className="staking-modal-title">UNSTAKE</h5>

      <label className="staking-modal-input-label" htmlFor="current-balance">
        CURRENT BALANCE
      </label>
      <input
        className="staking-modal-input-field"
        id="current-balance"
        name="current-balance"
        disabled
        value={currentStakeValue + ' $RNKR'}
      />

      <label className="staking-modal-input-label" htmlFor="unstake-balance">
        UNSTAKE BALANCE
      </label>
      <input
        className="staking-modal-input-field"
        id="unstake-balance"
        name="unstake-balance"
        value={unstakeValue}
        onChange={e => onChangeUnstakeValue(e.target.value)}
      />

      <button
        className="staking-modal-button gray"
        style={{ marginTop: '1rem', marginBottom: '0.5rem' }}
        onClick={() => onChangeUnstakeValue(currentStakeValue)}>
        MAX AMOUNT
      </button>
      <button disabled={unstakeValue === 0 ? true : false} className="staking-modal-button" onClick={onClickUnstake}>
        UNSTAKE
      </button>
    </div>
  );
};

export const UnstakeConfirmationModal = ({
  onClickConfirm,
  onClickBack,
  unstakeValue,
}) => {
  return (
    <div className="staking-modal">
      <h5 className="staking-modal-title">UNSTAKE</h5>

      <label className="staking-modal-input-label" htmlFor="unstake-balance">
        UNSTAKE BALANCE
      </label>
      <input
        className="staking-modal-input-field"
        id="unstake-balance"
        name="unstake-balance"
        value={unstakeValue + ' $RNKR'}
        disabled
      />

      <button
        className="staking-modal-button gray"
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
