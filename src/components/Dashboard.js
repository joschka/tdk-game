import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { hot } from "react-hot-loader";

import "./Dashboard.css";

import Thermometer from "./Thermometer.js";
import LoveChart from "./LoveChart.js";
import ProgressBar from "./ProgressBar.js";
import Calendar from "./Calendar";
import PauseButton from "./PauseButton";

import DashboardImage from "../images/dashboard.inline.svg";

function Dashboard(props) {
  const dispatch = useDispatch();

  // large, medium, small
  const uiState = useSelector((state) => state.ui.state);
  const vote1 = useSelector((state) => state.clock.tick >= 194);
  const vote2 = useSelector((state) => state.clock.tick >= 388);
  const vote3 = useSelector((state) => state.clock.tick >= 582);
  const love = useSelector((state) => parseInt(state.love, 10));

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

  const loveThresholdPercentage = 35;

  const opts = {
    className: [
      "dashboard-new",
      vote1 ? "dashboard-new--vote1" : "",
      vote2 ? "dashboard-new--vote2" : "",
      vote3 ? "dashboard-new--vote3" : "",
      love < loveThresholdPercentage ? "dashboard-new--negative-heart" : "",
    ].join(" "),
  };

  return (
    <div>
      <div {...opts}>
        <div className="dashboard-new__container">
          <div className="dashboard-new__progress">
            <ProgressBar newDashboard={true} />
          </div>
          <DashboardImage />
          <div className="dashboard-new__year">2035</div>
          <div className="dashboard-new__love">{love}%</div>
          <div className="dashboard-new__calendar">
            <Calendar />
          </div>
        </div>
      </div>
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
