import React, {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {hot} from "react-hot-loader";

import "./FinalScreen.css";

function FinalScreen() {
  const dispatch = useDispatch();

  const duration = useSelector((state) => state.clock.duration);
  const tick = useSelector((state) => state.clock.tick);
  const currentTemperature = useSelector((state) => state.temperature.current);
  const threshold = useSelector((state) => state.temperature.threshold);

  const show = tick >= duration;

  useEffect(() => {
    if (show) {
      dispatch({type: "clock/stop", data: "overlay"});
      dispatch({type: "clock/stop", data: "main"});
      dispatch({type: "game/stop"});
    }
  });

  if (!show) return "";

  const won = currentTemperature <= threshold;

  function Won() {
    return <div>Yeah, du hast es geschafft!</div>;
  }

  function Lost() {
    return <div>Gnah, you didn't make it</div>;
  }

  function Text() {
    return won ? <Won /> : <Lost />;
  }

  const cssClasses = ["final-screen"];

  if (won) cssClasses.push("final-screen__won");
  if (!won) cssClasses.push("final-screen__lost");

  return (
    <div className={cssClasses.join(" ")}>
      <Text />
    </div>
  );
}

export default hot(module)(FinalScreen);
