import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { hot } from "react-hot-loader";

import "./Level.css";

function Level({ label, percentage, inactive, first, last }) {
  return (
    <div className="level">
      <div
        className={`level__label ${inactive ? "level__label--inactive" : ""}`}
      >
        {label}
      </div>
      <div
        className={`level__bar-outer ${
          first ? "level__bar-outer--first" : ""
        } ${last ? "level__bar-outer--last" : ""}`}
      >
        <div className="level__bar-inner" style={{ width: `${percentage}%` }} />
      </div>
    </div>
  );
}

export default hot(module)(Level);
