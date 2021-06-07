import React, {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {hot} from "react-hot-loader";

import Thermometer from "./Thermometer";

import "./TemperatureChange.css";

function TemperatureChange({onClick, text, silent, temperature}) {
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
    let timer = setTimeout(() => {
      setThermometerProps({
        temperature: currentTemperature + temperature,
      });
    }, 500);

    return function () {
      clearTimeout(timer);
      dispatch({type: "temperature/increase", data: temperature});
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
