import './style.scss';

export const StakeModal = ({ onClickStake }) => {
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
      />

      <label className="staking-modal-input-label" htmlFor="staking-now">
        STAKING NOW
      </label>
      <input
        className="staking-modal-input-field"
        id="staking-now"
        name="staking-now"
      />

      <button
        className="staking-modal-button yellow"
        style={{ marginTop: '1rem', marginBottom: '0.5rem' }}
        onClick={() => {}}>
        MAX AMOUNT
      </button>
      <button className="staking-modal-button" onClick={onClickStake}>
        STAKE
      </button>
    </div>
  );
};

export const StakeConfirmationModal = ({ onClickConfirm, onClickBack }) => {
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
