import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { hot } from "react-hot-loader";

import "./Background.css";

function Background(props) {
  const dispatch = useDispatch();

  const [fading, setFading] = useState(true);

  let cssClasses = "";

  cssClasses = [
    "background",
    `background--${props.name}`,
    fading ? "-active" : "",
  ].join(" ");

  useEffect(() => {
    setFading(true);
    setTimeout(() => {
      setFading(false);
    }, 500);
  }, [props.name]);

  return <div className={cssClasses}>{props.children}</div>;
}

export default hot(module)(Background);
