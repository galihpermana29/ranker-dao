import './style.scss';

export const UnstakeModal = ({ onClickUnstake }) => {
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
      />

      <label className="staking-modal-input-label" htmlFor="unstake-balance">
        UNSTAKE BALANCE
      </label>
      <input
        className="staking-modal-input-field"
        id="unstake-balance"
        name="unstake-balance"
      />

      <button
        className="staking-modal-button gray"
        style={{ marginTop: '1rem', marginBottom: '0.5rem' }}
        onClick={() => {}}>
        MAX AMOUNT
      </button>
      <button className="staking-modal-button" onClick={onClickUnstake}>
        UNSTAKE
      </button>
    </div>
  );
};

export const UnstakeConfirmationModal = ({ onClickConfirm, onClickBack }) => {
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
