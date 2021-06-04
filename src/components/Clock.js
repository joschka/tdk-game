import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { hot } from "react-hot-loader";

import "./Clock.css";

function Clock() {
  const dispatch = useDispatch();
  const isRunning = useSelector((state) => state.clock.isRunning);
  const isFast = useSelector((state) => state.clock.isFast);
  const tick = useSelector((state) => state.clock.tick);

  useEffect(() => {
    if (!isRunning) return;

    const intervalId = setInterval(
      () => {
        dispatch({ type: "clock/tick" });
      },
      isFast ? 200 : 500
    );

    return function () {
      clearInterval(intervalId);
    };
  }, [isRunning, isFast]);

  return <div className="clock">tick: {tick}</div>;
}

export default hot(module)(Clock);
