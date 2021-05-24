import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {hot} from 'react-hot-loader';

import Thermometer from './Thermometer';

import IconEnded from "../images/todo-ended.inline.svg";
import imageNewspaper from "../images/newspaper.jpg";
import imageInterview from "../images/interview.jpg";

import './FollowUp.css';

function FollowUp(props) {
  const dispatch = useDispatch();

  const [step, setStep] = useState(1);
  const [currentAnswer, setCurrentAnswer] = useState(null);

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

  useEffect(() => {
    if (step !== 4) return;

    dispatch({type: "love/change", data: currentAnswer.love});
  }, [step]);

  const renderCheckmark = () => {
    return <div className="follow-up__checkmark"><IconEnded width={200} height={200} viewBox="0 0 400 400" /></div>;
  }

  const nextStep = () => {
    if (step === 2 && !future.questions) {
      return props.onClose();
    } else if (step === 4 && future.questions.length === 1) {
      return props.onClose();
    } else if (step === 6 && future.questions.length === 2) {
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

  const renderStep3 = () => {
    const question = future.questions[0];

    const onAnswerClick = (index) => {
      return function () {
        setCurrentAnswer(question.answers[index]);
        nextStep();
      };
    }

    const renderAnswers = () => {
      return question.answers.map((a, index) => {
        return <div className="follow-up__answer" onClick={onAnswerClick(index)} key={index}>{a.text}</div>
      });
    };

    return <div>
      <div className="follow-up__question">{question.text}</div>
      {renderAnswers()}
      <img className="follow-up__interview" src={imageInterview} />
    </div>
  };

  const renderStep4 = () => {
    return <div onClick={nextStep}>
      <div className="follow-up__reaction">{currentAnswer.reaction}<br />Zeitungsartikel(?)</div>
      <div className="follow-up__love">
        Ihre Beliebheit verändert sich um {currentAnswer.love}%.
        <br />
        (TODO: visualisieren)
      </div>
    </div>
  };

  return (
    <div className='follow-up fixed-screen'>
      {future.type === 'follow-up' && step === 1 && renderStep1()}
      {future.type === 'follow-up' && step === 2 && renderStep2()}
      {future.type === 'follow-up' && step === 3 && renderStep3()}
      {future.type === 'follow-up' && step === 4 && renderStep4()}
    </div>
  );
}

export default hot(module)(FollowUp);

