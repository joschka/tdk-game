import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { hot } from "react-hot-loader";

import "./Calendar.css";

function Calendar() {
  const currentTick = useSelector((state) => state.clock.tick);

  let month;
  let year;

  if (currentTick >= 1 && currentTick <= 4) {
    month = "Oktober"; // 2021
    year = "2021";
  } else if (currentTick >= 5 && currentTick <= 8) {
    month = "November"; // 2021
    year = "2021";
  } else if (currentTick >= 9 && currentTick <= 12) {
    month = "Dezember"; // 2021
    year = "2021";
  } else {
    // 2022 - 2035
    const normalizedTick = (currentTick - 12) % 48;
    switch (normalizedTick) {
      case 1:
      case 2:
      case 3:
      case 4:
        month = "Januar";
        break;
      case 5:
      case 6:
      case 7:
      case 8:
        month = "Februar";
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
        month = "August";
        break;
      case 33:
      case 34:
      case 35:
      case 36:
        month = "September";
        break;
      case 37:
      case 38:
      case 39:
      case 40:
        month = "Oktober";
        break;
      case 41:
      case 42:
      case 43:
      case 44:
        month = "November";
        break;
      case 45:
      case 46:
      case 47:
      case 0:
        month = "Dezember";
        break;
      default:
        month = "Oktober";
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

  return (
    <div className="calendar">
      <div className="calendar__year">{year}</div>
      <div className="calendar__month">{month}</div>
    </div>
  );
}

export default hot(module)(Calendar);
