import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { hot } from "react-hot-loader";

import "./Background.css";

function Background(props) {
  const dispatch = useDispatch();

  const cssClasses = ["background", `background--${props.name}`].join(" ");

  return <div className={cssClasses}>{props.children}</div>;
}

export default hot(module)(Background);
