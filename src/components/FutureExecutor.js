import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { hot } from "react-hot-loader";

import "./FutureExecutor.css";

function FutureExecutor() {
  const dispatch = useDispatch();

  const clockIsRunning = useSelector((state) => state.clock.isRunning);
  const currentTick = useSelector((state) => state.clock.tick);
  const currentFutures = useSelector((state) => state.futures[currentTick]);

  const [currentFutureIndex, setCurrentFutureIndex] = useState(null);
  const [clockStoppedAtTick, setClockStoppedAtTick] = useState(null);
  const [minimumTick, setMinimumTick] = useState(0);

  let currentFuture;

  if (
    minimumTick <= currentTick &&
    Array.isArray(currentFutures) &&
    currentFutures.length > 0
  ) {
    if (currentFutureIndex === null) {
      setCurrentFutureIndex(0);

      if (clockIsRunning) {
        setClockStoppedAtTick(currentTick);
        dispatch({ type: "clock/stop", data: "overlay" });
      }
    } else if (currentFutureIndex >= currentFutures.length) {
      setCurrentFutureIndex(null);
      setMinimumTick(currentTick + 1);

      if (!clockIsRunning && clockStoppedAtTick === currentTick) {
        dispatch({ type: "clock/start", data: "overlay" });
      }
    }

    currentFuture = currentFutures[currentFutureIndex];
  }

  const onFutureClose = () => {
    setCurrentFutureIndex(currentFutureIndex + 1);
  };

  const renderFuture = (future) => {
    return (
      <div className="future fixed-screen">
        {future.type}
        <button onClick={onFutureClose}>Close</button>
      </div>
    );
  };

  if (!currentFuture) {
    return null;
  }

  return renderFuture(currentFuture);
}

export default hot(module)(FutureExecutor);
