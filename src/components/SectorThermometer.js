import React, {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {hot} from "react-hot-loader";

import "./SectorThermometer.css";

import ThermometerImage from "../images/thermometer.inline.svg";

function SectorThermometer(props) {
  const dispatch = useDispatch();

  const actions = useSelector((state) => state.actions);

  const sumTemperature = Math.abs(
    actions.reduce((acc, a) => acc + a.temperature, 0)
  );

  const sumTemperatureEnded = Math.abs(
    actions
      .filter((a) => a.state === "ended")
      .reduce((acc, a) => acc + a.temperature, 0)
  );

  const sectors = [
    "industry",
    "agriculture",
    "mobility",
    "energy",
    "buildings",
  ];

  function tempToHeight(temp, state) {
    if (state && state === "ended") return null;
    return `${Math.abs((100 / sumTemperature) * temp)}%`;
  }

  function tempToBackground(temp) {
    return tempToHeight(temp);
  }

  function renderBlocks() {
    return sectors.map((sector) => {
      return actions
        .filter((a) => a.sector === sector)
        .map((a) => {
          return (
            <Block
              sector={sector}
              height={tempToHeight(a.temperature, a.state)}
            />
          );
        });
    });
  }

  function Block({height, sector}) {
    return (
      <div
        className={`sector-thermometer__block sector-thermometer__block--${sector}`}
        style={{height}}
      />
    );
  }

  return (
    <div className="sector-thermometer">
      <div className="sector-thermometer__container">
        <div className="sector-thermometer__blocks">
          <div
            className="sector-thermometer__temp"
            style={{
              top: tempToHeight(sumTemperatureEnded),
              backgroundPositionY: tempToBackground(sumTemperatureEnded),
            }}
          >
          </div>
        </div>
        <ThermometerImage />
        <div className="sector-thermometer__target">1,5°</div>
        <div className="sector-thermometer__blocks">
          <div
            className="sector-thermometer__bubble"
            style={{
              top: tempToHeight(sumTemperatureEnded),
              backgroundPositionY: tempToBackground(sumTemperatureEnded),
            }}
          >
            {(1.5 + sumTemperature - sumTemperatureEnded)
              .toFixed(1)
              .toString()
              .replace(".", ",")}
            °
          </div>
        </div>
      </div>
    </div>
  );
}

export default hot(module)(SectorThermometer);
