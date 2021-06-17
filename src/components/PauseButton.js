import React, {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {hot} from "react-hot-loader";

import "./PauseButton.css";

import IconPlay from "../images/play.inline.svg";
import IconPause from "../images/pause.inline.svg";

function PauseButton() {
  const dispatch = useDispatch();

  const isRunning = useSelector((state) => state.clock.isRunning);

  function renderIcon() {
    if (isRunning) {
      return <IconPause width={40} height={40} />;
    }
    return <IconPlay width={40} height={40} style={{marginLeft: '4px'}} />;
  }

  function onClick() {
    console.log("click");
    if (isRunning) {
      dispatch({type: "clock/stop"});
    } else {
      dispatch({type: "clock/start"});
    }
  }

  return (
    <div onClick={onClick} className="pause-button">
      {renderIcon()}
    </div>
  );
}

export default hot(module)(PauseButton);
