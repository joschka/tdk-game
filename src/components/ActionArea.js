import React, {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {hot} from "react-hot-loader";

import ActiveActions from "./ActiveActions.js";
import ActionList from "./ActionList.js";
import ActionListHeader from "./ActionListHeader.js";

import "./ActionArea.css";

function ActionArea() {
  const dispatch = useDispatch();

  const uiState = useSelector((state) => state.ui.state);

  const style = {
    xxheight: `calc(100% - ${uiState === "top" ? 335 : 70}px)`,
  };

  return (
    <div className="action-area" style={style}>
      <div className="action-area__active-actions"></div>
      { false && <ActionListHeader />}
      <ActionList />
    </div>
  );
}

export default hot(module)(ActionArea);
