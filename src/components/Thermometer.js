import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { hot } from "react-hot-loader";

import "./Thermometer.css";

function Thermometer(props) {
  const dispatch = useDispatch();

  const temperature =
    "" +
    (props.temperature || useSelector((state) => state.temperature.current));

  const formatted = `${(Math.round(temperature * 10) / 10)
    .toFixed(1)
    .replace(".", ",")}°`;

  const barHeight = `${(temperature - 1.5) * 24.8 + 1}%`;

  const opts = {
    className: ["thermometer", `thermometer--${props.size}`].join(" "),
  };

  return (
    <div {...opts}>
      <div className="thermometer__container">
        <div className="thermometer__mask"></div>
        <div className="thermometer__mask-background"></div>
        <div className="thermometer__bar" style={{ height: barHeight }}>
          <div className="thermometer__bar-background"></div>
        </div>
      </div>
      <div
        className="thermometer__current-temperature"
        style={
          props.size === "large"
            ? { top: `${140 - 48 * (temperature - 1.5)}px` }
            : {
                color:
                  props.changeDisplay && temperature < 0
                    ? "var(--green)"
                    : "black",
              }
        }
      >
        {formatted}
      </div>
      {props.size === "large" && temperature > 2.3 && (
        <div className="thermometer__target-temperature">1,5°</div>
      )}
    </div>
  );
}

export default hot(module)(Thermometer);
