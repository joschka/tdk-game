import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { hot } from "react-hot-loader";

import "./Unlover.css";

function Unlover() {
  const dispatch = useDispatch();

  const activeActionsCount = useSelector(
    (state) => state.actions.filter((a) => a.state === "active").length
  );
  const tick = useSelector((state) => state.clock.tick);

  const idleSlotsCount = 1 //4 - activeActionsCount;

  useEffect(() => {
    const random = Math.random();
    const extra = random < 0.5 ? -1 * random : random - 0.5;
    const loveChange = idleSlotsCount * -0.025 + 1.5 * extra;
    dispatch({ type: "love/change", data: loveChange });
  }, [tick]);

  return <div className="unlover"></div>;
}

export default hot(module)(Unlover);
