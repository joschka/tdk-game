import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { hot } from "react-hot-loader";

import "./LoveDisplay.css";

function LoveDisplay() {
  const dispatch = useDispatch();

  const love = useSelector((state) => state.love);

  const formatted = `${love}%`;

  const style = {
    top: `${250 - love * 2.5}px`,
  };

  return (
    <div className="love-display" style={style}>
      {formatted}
    </div>
  );
}

export default hot(module)(LoveDisplay);
