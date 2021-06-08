import React, {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {hot} from "react-hot-loader";

import Thermometer from "./Thermometer";

import "./TemperatureChange.css";

function TemperatureChange({id, onClick, text, silent, temperature, delayedDispatch}) {
  const dispatch = useDispatch();

  const currentTemperature = useSelector((state) => state.temperature.current);

  const [finished, setFinished] = useState(false);

  const initialThermometerProps = {
    temperature: currentTemperature,
  };

  const [thermometerProps, setThermometerProps] = useState(
    initialThermometerProps
  );

  useEffect(() => {
    console.log("tc");
    window.tempChange = window.tempChange || {};
    window.tempChange[id] = temperature;
    // let timer = setTimeout(() => {
    //   setThermometerProps({
    //     temperature: currentTemperature + temperature,
    //   });
    // }, 500);

    if (silent) {
      onClick();
    }

    //return function () {
    //  //dispatch({type: "temperature/increase", data: temperature});
    //  !finished && delayedDispatch({type: "temperature/increase", data: temperature});
    //  // clearTimeout(timer);
    //  setFinished(true);
    //};
  }, []);

  // if (silent && !finished) {
  //   setFinished(true);
  //   onClick();
  // }

  if (silent) {
    return null;
  }

  return (
    <div className="temperature-change" onClick={onClick}>
      <div
        className="temperature-change__text"
        dangerouslySetInnerHTML={{
          __html: text,
        }}
      ></div>
      <div className="temperature-change__thermometer">
        {false && <Thermometer {...thermometerProps} size="large" />}
      </div>
    </div>
  );
}

export default hot(module)(TemperatureChange);
