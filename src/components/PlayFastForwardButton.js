import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { hot } from "react-hot-loader";

import "./PlayFastForwardButton.css";

function PlayFastForwardButton() {
  const dispatch = useDispatch();

  const isRunning = useSelector((state) => state.clock.isRunning);
  const isFast = useSelector((state) => state.clock.isFast);

  function renderIcon() {
    if (isRunning) {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -256 1850 1850">
          <path
            d="M82.966 1435.644q-19 19-32 13t-13-32v-1472q0-26 13-32t32 13l710 710q8 8 13 19v-710q0-26 13-32t32 13l710 710q8 8 13 19v-678q0-26 19-45t45-19h128q26 0 45 19t19 45v1408q0 26-19 45t-45 19h-128q-26 0-45-19t-19-45v-678q-5 10-13 19l-710 710q-19 19-32 13t-13-32v-710q-5 10-13 19z"
            fill="currentColor"
          />
        </svg>
      );
    } else {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -256 1792 1792">
          <path
            d="M1611.797 699.203l-1328 738q-23 13-39.5 3t-16.5-36v-1472q0-26 16.5-36t39.5 3l1328 738q23 13 23 31t-23 31z"
            fill="currentColor"
          />
        </svg>
      );
    }
  }

  function onClick() {
    if (!isRunning) {
      dispatch({ type: "clock/start" });
      dispatch({ type: "ui/state", data: "top" });
      window.scrollTo(0, 0);
    }
  }

  function onMouseDown() {
    console.log("mousedown");
    if (isRunning && !isFast) {
      console.log("mousedown! fast");
      dispatch({ type: "clock/fast" });
    }
  }

  function onMouseUp() {
    console.log("mouseUP");
    if (isRunning && isFast) {
      console.log("mouseUP! normal");
      dispatch({ type: "clock/normal" });
    }
  }

  return (
    <div
      onClick={onClick}
      onMouseDown={onMouseDown}
      onTouchStart={onMouseDown}
      onTouchEnd={onMouseUp}
      onMouseUp={onMouseUp}
      className="play-fast-forward-button"
    >
      {renderIcon()}
    </div>
  );
}

export default hot(module)(PlayFastForwardButton);
