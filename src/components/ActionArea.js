import React, {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {hot} from "react-hot-loader";

import ActionList from "./ActionList.js";
import Thermometer from "./Thermometer";
import LoveChart from "./LoveChart";

import "./ActionArea.css";

function ActionArea() {
  const dispatch = useDispatch();

  return (
    <div className="action-area">
      <div className="action-area__thermometer">
        <LoveChart newDashboard={true} />
        <Thermometer size="large" />
      </div>
      <div className="action-area__list">
        <ActionList />
      </div>
    </div>
  );
}

export default hot(module)(ActionArea);
