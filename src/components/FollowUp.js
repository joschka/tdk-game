import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {hot} from 'react-hot-loader';

import Thermometer from './Thermometer';

import IconEnded from "../images/todo-ended.inline.svg";
import imageNewspaper from "../images/newspaper.jpg";

import './FollowUp.css';

function FollowUp(props) {
  const dispatch = useDispatch();

  const [step, setStep] = useState(1);

  const future = props.future;

  let currentTemperature =
    "" + useSelector((state) => state.temperature.current);

  const [temperature, setTemperature] = useState(currentTemperature - future.temperature);

  let imageSrc;
  switch (future.successImage) {
    case "newspaper":
      imageSrc = imageNewspaper;
      break;
    default:
      imageSrc = imageNewspaper;
      break;
  }

  const renderCheckmark = () => {
    return <div className="follow-up__checkmark"><IconEnded width={200} height={200} viewBox="0 0 400 400" /></div>;
  }

  const nextStep = () => {
    if (step === 2 && !future.questions) {
      return props.onClose();
    }
    setStep(step + 1);
  };

  const renderStep1 = () => {
    return <div onClick={nextStep}>
      {renderCheckmark()}
      <div className="follow-up__header">
        <div>Die Maßnahme</div>
        <strong className="follow-up__title"
          dangerouslySetInnerHTML={{
            __html: future.title
          }}></strong>
        <div>wurde umgesetzt.</div>
      </div>
      <img className="follow-up__image" src={imageSrc} />
    </div>
  };

  const renderStep2 = () => {
    setTimeout(() => {
      if (temperature === currentTemperature - future.temperature) {
        setTemperature(temperature + future.temperature);
      }
    }, 500);
    return <div onClick={nextStep}>
      {renderCheckmark()}
      <div className="follow-up__header">
        <div>Die Maßnahme</div>
        <strong className="follow-up__title"
          dangerouslySetInnerHTML={{
            __html: future.title
          }}></strong>
        <div>senkt die Temperatur um {future.temperature}°:</div>
      </div>
      <div className='follow-up__thermometer'>
        <Thermometer temperature={temperature} size="large" />
      </div>
    </div>
  };

  return (
    <div className='follow-up fixed-screen'>
      {future.type === 'follow-up' && step === 1 && renderStep1()}
      {future.type === 'follow-up' && step === 2 && renderStep2()}
    </div>
  );
}

export default hot(module)(FollowUp);

