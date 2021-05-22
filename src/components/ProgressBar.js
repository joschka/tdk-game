import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { hot } from "react-hot-loader";

import "./ProgressBar.css";

function ProgressBar(props) {
  const dispatch = useDispatch();

  const currentTick = useSelector((state) => state.clock.tick);
  const duration = useSelector((state) => state.clock.duration);

  const months = duration / 4;

  let month;
  let year;

  if (currentTick >= 1 && currentTick <= 4) {
    month = "Okt"; // 2021
    year = "2021";
  } else if (currentTick >= 5 && currentTick <= 8) {
    month = "Nov"; // 2021
    year = "2021";
  } else if (currentTick >= 9 && currentTick <= 12) {
    month = "Dez"; // 2021
    year = "2021";
  } else {
    // 2022 - 2035
    const normalizedTick = (currentTick - 12) % 48;
    switch (normalizedTick) {
      case 1:
      case 2:
      case 3:
      case 4:
        month = "Jan";
        break;
      case 5:
      case 6:
      case 7:
      case 8:
        month = "Feb";
        break;
      case 9:
      case 10:
      case 11:
      case 12:
        month = "März";
        break;
      case 13:
      case 14:
      case 15:
      case 16:
        month = "April";
        break;
      case 17:
      case 18:
      case 19:
      case 20:
        month = "Mai";
        break;
      case 21:
      case 22:
      case 23:
      case 24:
        month = "Juni";
        break;
      case 25:
      case 26:
      case 27:
      case 28:
        month = "Juli";
        break;
      case 29:
      case 30:
      case 31:
      case 32:
        month = "Aug";
        break;
      case 33:
      case 34:
      case 35:
      case 36:
        month = "Sep";
        break;
      case 37:
      case 38:
      case 39:
      case 40:
        month = "Okt";
        break;
      case 41:
      case 42:
      case 43:
      case 44:
        month = "Nov";
        break;
      case 45:
      case 46:
      case 47:
      case 0:
        month = "Dez";
        break;
      default:
        month = "ERR";
    }

    year = [
      "2022",
      "2023",
      "2024",
      "2025",
      "2026",
      "2027",
      "2028",
      "2029",
      "2030",
      "2031",
      "2032",
      "2033",
      "2034",
    ][parseInt((currentTick - 12) / 48)];
  }

  const percentage = (currentTick / duration) * 100;

  const label = (duration - currentTick) / 52; // years
  const formattedLabel = `noch ${Math.round(label * 10) / 10} Jahre bis 2035`;

  const opts = {
    className: ["progress-bar", `progress-bar--${props.size}`].join(" "),
  };

  return (
    <div {...opts}>
      <div className="progress-bar__calendar">
        <div className="progress-bar__year">{year}</div>
        <div className="progress-bar__month">{month}</div>
      </div>
      {props.size !== "small" && (
        <div className="progress-bar__outer">
          <div
            className="progress-bar__inner"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      )}
    </div>
  );
}

export default hot(module)(ProgressBar);
