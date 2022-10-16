import ScrollIndicatorTop from 'assets/img/home/scroll-indicator-top.png';
import ScrollIndicatorBottom from 'assets/img/home/scroll-indicator-bottom.png';

export const ScrollTop = ({ isTop = false }) => {
  return (
    !isTop && (
      <div className="scroll-indicator">
        <img
          className="scroll-indicator-icon"
          src={ScrollIndicatorBottom}
          alt="scroll bottom"
        />
      </div>
    )
  );
};

export const ScrollBottom = ({ isBottom = false }) => {
  return (
    !isBottom && (
      <div className="scroll-indicator">
        <img
          className="scroll-indicator-icon"
          src={ScrollIndicatorTop}
          alt="scroll top"
        />
      </div>
    )
  );
};
