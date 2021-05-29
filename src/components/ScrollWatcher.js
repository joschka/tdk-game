import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { hot } from "react-hot-loader";

import "./ScrollWatcher.css";

function ScrollWatcher() {
  const dispatch = useDispatch();

  const uiState = useSelector((state) => state.ui.state);

  function onScroll() {
    if (window.scrollY > 264 && uiState === "top") {
      dispatch({ type: "ui/state", data: "bottom" });
      //dispatch({ type: "clock/stop", data: "main" });
    } else if (window.scrollY <= 264 && uiState === "bottom") {
      dispatch({ type: "ui/state", data: "top" });
      //dispatch({ type: "clock/start", data: "main" });
    }
  }

  useEffect(() => {
    document.addEventListener("scroll", onScroll);

    return function () {
      document.removeEventListener("scroll", onScroll);
    };
  });

  return <div className="scroll-watcher"></div>;
}

export default hot(module)(ScrollWatcher);
