import React, {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {hot} from "react-hot-loader";

import LoveChart from "./LoveChart";

import "./LoveChange.css";

function LoveChange({id, text, love, silent, onClick}) {
  const dispatch = useDispatch();

  const currentLove = useSelector((state) => state.love);
  const records = useSelector((state) => state.records);
  const tick = useSelector((state) => state.tick);

  const initialChartProps = {
    love: love,
    size: 'small',
  };

  const [chartProps, setChartProps] = useState(initialChartProps);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    window.loveChange = window.loveChange || {};
    window.loveChange[id] = love;
    // let timer = setTimeout(() => {
    //   setChartProps({
    //     love: currentLove + love,
    //     tick: tick + 1,
    //     records: records.concat([{love: currentLove + love}]),
    //   });
    // }, 500);

    // return function () {
    //   clearTimeout(timer);
    // };
    if (silent) {
      onClick();
    }
    console.log("use effect");

    return function () {
      // dispatch({type: "love/change", data: love});
      // clearTimeout(timer);

    }
  }, []);

  // if (silent && !finished) {
  //   setFinished(true);
  //   onClick();
  // }

  if (silent) {
    return null;
  }

  return (
    <div className="love-change" onClick={onClick}>
      <div className="love-change__text">{text}</div>
      <div className="love-change__chart">
        {true && <LoveChart {...chartProps} changeDisplay={true} />}
      </div>
    </div>
  );
}

export default hot(module)(LoveChange);
