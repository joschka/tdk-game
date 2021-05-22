import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { hot } from "react-hot-loader";

import "./ActionDetailView.css";

function ActionDetailView(props) {
  const dispatch = useDispatch();

  const {
    title,
    description,
    duration,
    temperature,
    love,
    state,
    actionable,
    onStartClick,
    onBackClick,
  } = props;

  const renderButtons = () => {
    if (state === "available" && actionable) {
      return (
        <div className="action-detail-view__buttons">
          <button onClick={onBackClick}>Nein, doch nicht</button>
          <button onClick={onStartClick}>Ja, starten!</button>
        </div>
      );
    }

    return (
      <div className="action-detail-view__buttons">
        <button onClick={onBackClick}>Schließen</button>
      </div>
    );
  };

  return (
    <div className="action-detail-view fixed-screen">
      <img src="/" />
      <h1>{title}</h1>
      <p>Klimawirkung: 1-5</p>
      <hr />
      {renderButtons()}
      <div style={{ height: "100vh" }} />
      <strong>...{state}</strong>
    </div>
  );
}

export default hot(module)(ActionDetailView);
