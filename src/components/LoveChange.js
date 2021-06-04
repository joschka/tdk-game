import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { hot } from "react-hot-loader";

import LoveChart from "./LoveChart";

import "./LoveChange.css";

function LoveChange({ text, love, silent, onClick }) {
  const dispatch = useDispatch();

  const currentLove = useSelector((state) => state.love);
  const records = useSelector((state) => state.records);
  const tick = useSelector((state) => state.tick);

  const initialChartProps = {
    love: currentLove,
    records,
    tick,
  };

  const [chartProps, setChartProps] = useState(initialChartProps);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    let timer = setTimeout(() => {
      setChartProps({
        love: currentLove + love,
        tick: tick + 1,
        records: records.concat([{ love: currentLove + love }]),
      });
    }, 500);

    return function () {
      clearTimeout(timer);
      dispatch({ type: "love/change", data: love });
    };
  }, []);

  if (silent && !finished) {
    setFinished(true);
    onClick();
  }

  if (silent) {
    return null;
  }

  return (
    <div className="love-change" onClick={onClick}>
      <div className="love-change__text">{text}</div>
      <div className="love-change__chart">
        <LoveChart {...chartProps} />
      </div>
    </div>
  );
}

export default hot(module)(LoveChange);
