import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { hot } from "react-hot-loader";

import "./ExampleEvent.css";

function ExampleEvent() {
  const dispatch = useDispatch();

  const tick = useSelector((state) => state.clock.tick);

  function handleOption1() {
    dispatch({ type: "temperature/decrease", data: 30 });
    dispatch({ type: "clock/start" });
  }

  function handleOption2() {
    dispatch({ type: "clock/start" });
    dispatch({ type: "love/decrease", data: 30 });
  }

  useEffect(() => {
    if (tick === 10) {
      //dispatch({ type: 'clock/stop' });
    }
  });

  const show = tick === 10;

  if (!show) return "";

  return "";

  return (
    <div className="example-event">
      <h2>Klimaplan umsetzen?</h2>

      <button onClick={handleOption1}>Yes, save the world</button>
      <br />
      <br />
      <button onClick={handleOption2}>No, save the CDU</button>
    </div>
  );
}

export default hot(module)(ExampleEvent);
