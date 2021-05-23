import React, {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {hot} from "react-hot-loader";

import "./Dashboard.css";

import Thermometer from "./Thermometer.js";
import LoveChart from "./LoveChart.js";
import ProgressBar from "./ProgressBar.js";
import PauseButton from "./PauseButton";

function Dashboard(props) {
  const dispatch = useDispatch();

  // large, medium, small
  const uiState = useSelector((state) => state.ui.state);

  const size =
    props.size ||
    (uiState === "top" && "large") ||
    (uiState === "bottom" && "small");

  const optsLarge = {
    className: ["dashboard", `dashboard--large`, "bg-gradient"].join(" "),
  };

  const optsSmall = {
    className: ["dashboard", `dashboard--small`, "bg-gradient"].join(" "),
  };

  return (
    <div>
      <div {...optsLarge}>
        <Thermometer size={"large"} />
        <LoveChart size={"large"} />
        <ProgressBar size={"large"} />
        <PauseButton size={"large"} />
      </div>
      {uiState === "bottom" && (
        <div className="dashboard-fixed">
          <div {...optsSmall}>
            <Thermometer size={"small"} />
            <LoveChart size={"small"} />
            <ProgressBar size={"small"} />
            <PauseButton size={"small"} />
          </div>
        </div>
      )}
    </div>
  );
}

export default hot(module)(Dashboard);
