import Countdown from 'react-countdown';

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a complete state
    return '';
  } else {
    // Render a countdown
    return (
      <span>
        {days}d:{hours}h:{minutes}m:{seconds}s
      </span>
    );
  }
};

const CountDown = ({ date }) => {
  return <Countdown date={date * 1000} renderer={renderer}/>;
};

export default CountDown;
