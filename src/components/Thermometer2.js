import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { hot } from "react-hot-loader";

import "./Thermometer2.css";

import Shape from "../images/thermometer/shape.inline.svg";
import MarkerLeft from "../images/thermometer/marker-left.inline.svg";
import MarkerRight from "../images/thermometer/marker-right.inline.svg";

function Thermometer2() {
  const dispatch = useDispatch();

  const temperature = useSelector((state) => state.temperature.current);

  const formattedTemperature = `${temperature.toFixed(1).replace(".", ",")}°`;

  // 1.5° -> 0%
  // 4.0° -> 52.5%
  const areaHeight = `${((temperature - 1.5) / 2.5) * 52.5}%`;

  // 1.5° -> 63%
  // 4.0° -> 11%
  const markerBottom = `${((temperature - 1.5) / 2.5) * 52 + 25}%`;

  const color =
    (temperature > 2.5 && "red") ||
    (temperature > 1.5 && "orange") ||
    "var(--green)";

  return (
    <div className="thermometer-2">
      <div className="thermometer-2__container">
        <div
          className="thermometer-2__area"
          style={{ height: areaHeight, backgroundColor: color }}
        />
        <div
          className="thermometer-2__filler-1"
          style={{ backgroundColor: color }}
        />
        <div
          className="thermometer-2__filler-2"
          style={{ backgroundColor: color }}
        />
        <Shape className="thermometer-2__shape" />
        <div className="thermometer-2__marker thermometer-2__marker--left">
          <MarkerLeft />
          1,5°
        </div>
        <div
          className="thermometer-2__marker thermometer-2__marker--right"
          style={{ bottom: markerBottom }}
        >
          <MarkerRight />
          {formattedTemperature}
        </div>
      </div>
    </div>
  );
}

export default hot(module)(Thermometer2);
