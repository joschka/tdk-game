import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { hot } from "react-hot-loader";

import Action from "./Action.js";

import "./ActiveActions.css";

function ActiveActions() {
  const dispatch = useDispatch();

  const actions = useSelector((state) => state.actions);
  const uiState = useSelector((state) => state.ui.state);

  const activeActions = actions.filter((a) => a.state === "active");

  const minimized = false; //uiState === 'bottom';

  const opts = {
    className: [
      "active-actions",
      minimized && "active-actions--minimized",
      minimized && `active-actions--minimized-${activeActions.length}`,
    ].join(" "),
  };

  return (
    <div {...opts}>
      {activeActions.map((a) => (
        <Action key={a.id} {...a} minimized={minimized} />
      ))}
    </div>
  );
}

export default hot(module)(ActiveActions);
