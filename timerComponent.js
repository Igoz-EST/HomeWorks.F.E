import React, { useState, useEffect } from "react";

const TimerComponent = (props) => {
  const [timer, setTimer] = useState(0);
  const [isCounting, setIsCounting] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      isCounting &&
      setTimer((timer) => timer + 1);
    }, 1000);
  }, [isCounting]);
  const handleStart = () => {
    setIsCounting(true);
  };
  const handleStop = () => {
    setIsCounting(false);
  };
  if (timer > 60) {
    setTimer(0);
  }
  return (
    <div>
      <span>Timer: {timer}</span>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
};

export default TimerComponent;
