/*
 *  <Overlay> … </Overlay>
 *  - stops the clock while displayed
 *  - hides action list while displayed (limit viewport height)
 *  - scrolls to top on overlay show and hide
 */

import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { hot } from "react-hot-loader";

import "./Overlay.css";

function Overlay(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    // run once when component mounted
    dispatch({ type: "clock/stop" });
    dispatch({ type: "actions/hide" });
    window.scrollTo(0, 0);

    return function () {
      // run once when component unmounted
      dispatch({ type: "actions/show" });
      dispatch({ type: "clock/start" });
      window.scrollTo(0, 0);
    };
  }, []);

  return (
    <div className="overlay">
      <div className="overlay__content">{props.children}</div>
    </div>
  );
}

export default hot(module)(Overlay);
