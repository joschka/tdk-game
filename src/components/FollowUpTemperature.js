import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {hot} from 'react-hot-loader';

import IconEnded from "../images/todo-ended.inline.svg";
import Thermometer from "./Thermometer";

import './FollowUpTemperature.css';

function FollowUpTemperature({title, temperature, onClick}) {
  const dispatch = useDispatch();

  const currentTemperature = useSelector((state) => state.temperature.current);

  useEffect(() => {
    let timer = setTimeout(() => {
      dispatch({type: "temperature/increase", data: temperature});
    }, 500);

    return function () {
      clearTimeout(timer);
    }
  }, []);

  const renderCheckmark = () => {
    return <div className="follow-up__checkmark"><IconEnded width={200} height={200} viewBox="0 0 400 400" /></div>;
  }

  return (
    <div className='follow-up' onClick={onClick}>
      {renderCheckmark()}
      <div className="follow-up__header">
        <div>Die Maßnahme</div>
        <strong className="follow-up__title"
          dangerouslySetInnerHTML={{
            __html: title
          }}></strong>
        <div>senkt die Temperatur um {temperature}°:</div>
      </div>
      <div className='follow-up__thermometer'>
        <Thermometer temperature={currentTemperature} size="large" />
      </div>
    </div>
  );
}

export default hot(module)(FollowUpTemperature);
