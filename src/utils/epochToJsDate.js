export const epochToJsDate = (ts) => {
  // ts = epoch timestamp
  // returns date obj
  return new Date(ts*1000);
}

export const calculateTimeLeft = () => {
  const year = new Date().getFullYear();
  const difference = +new Date(`${year}-10-1`) - +new Date();
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  }

  return timeLeft;
}