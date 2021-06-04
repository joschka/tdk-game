import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { hot } from "react-hot-loader";

import "./Vote.css";

function Vote({ onClick, others, text }) {
  const dispatch = useDispatch();

  const currentLove = useSelector((state) => state.love);

  const sumOthers = others.reduce((acc, val) => acc + val, 0);
  const remainder = 100 - currentLove * 1.0;
  const remainderPart = remainder / sumOthers;

  const values = [
    remainderPart * others[0],
    remainderPart * others[1],
    currentLove,
    remainderPart * others[2],
    remainderPart * others[3],
  ];

  function Bar(props) {
    return (
      <div
        className="vote__bar"
        style={{ height: `${props.percentage}%` }}
      ></div>
    );
  }

  const renderBars = () => {
    return values.map((v, i) => {
      return <Bar percentage={v} key={i} />;
    });
  };

  return (
    <div className="vote" onClick={onClick}>
      <div className="vote__text">{text}</div>

      <div className="vote__chart">{renderBars()}</div>
    </div>
  );
}

export default hot(module)(Vote);
