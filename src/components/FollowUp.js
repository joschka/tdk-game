import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { hot } from "react-hot-loader";

import Thermometer from "./Thermometer";
import Overlay from "./Overlay";

import IconEnded from "../images/todo-ended.inline.svg";
import imageInterview from "../images/interview.jpg";

import "./FollowUp.css";
import FollowUpTemperature from "./FollowUpTemperature";
import LoveChange from "./LoveChange";

function FollowUp(props) {
  const dispatch = useDispatch();

  const [step, setStep] = useState(1);
  const [currentAnswer, setCurrentAnswer] = useState(null);

  let currentTemperature =
    "" + useSelector((state) => state.temperature.current);

  const [temperature, setTemperature] = useState(
    currentTemperature - props.temperature
  );

  let imageSrc;
  switch (props.successImage) {
    case "newspaper":
      break;
    default:
      break;
  }

  useEffect(() => {
    if (step !== 4) return;

    dispatch({ type: "love/change", data: currentAnswer.love });
  }, [step]);

  const renderCheckmark = () => {
    return (
      <div className="follow-up__checkmark">
        <IconEnded width={200} height={200} viewBox="0 0 400 400" />
      </div>
    );
  };

  function onClose() {
    dispatch({ type: "action/end", data: { id: props.id } });
  }

  const nextStep = () => {
    if (step === 2 && !props.questions) {
      return onClose();
    } else if (step === 4 && props.questions.length === 1) {
      return onClose();
    } else if (step === 6 && props.questions.length === 2) {
      return onClose();
    }
    setStep(step + 1);
  };

  const renderStep1 = () => {
    return (
      <div onClick={nextStep}>
        {renderCheckmark()}
        <div className="follow-up__header">
          <div>Die Maßnahme</div>
          <strong
            className="follow-up__title"
            dangerouslySetInnerHTML={{
              __html: props.title,
            }}
          ></strong>
          <div>wurde umgesetzt.</div>
        </div>
        <img className="follow-up__image" src={imageSrc} />
      </div>
    );
  };

  const renderStep3 = () => {
    const question = props.questions[0];

    const onAnswerClick = (index) => {
      return function () {
        setCurrentAnswer(question.answers[index]);
        nextStep();
      };
    };

    const renderAnswers = () => {
      return question.answers.map((a, index) => {
        return (
          <div
            className="follow-up__answer"
            onClick={onAnswerClick(index)}
            key={index}
          >
            {a.text}
          </div>
        );
      });
    };

    return (
      <div>
        <div className="follow-up__question">{question.text}</div>
        {renderAnswers()}
        <img className="follow-up__interview" src={imageInterview} />
      </div>
    );
  };

  const renderStep4 = () => {
    return (
      <div onClick={nextStep}>
        <div className="follow-up__reaction">
          {currentAnswer.reaction}
          <br />
          Zeitungsartikel(?)
        </div>
        <div className="follow-up__love">
          Ihre Beliebheit verändert sich um {currentAnswer.love}%.
          <br />
          (TODO: visualisieren)
        </div>
      </div>
    );
  };

  return (
    <Overlay>
      <div className="follow-up">
        {step === 1 && renderStep1()}
        {step === 2 && <FollowUpTemperature onClick={nextStep} {...props} />}
        {step === 3 && renderStep3()}
        {step === 4 && (
          <LoveChange
            onClick={nextStep}
            love={currentAnswer.love}
            text={currentAnswer.reaction}
          />
        )}
      </div>
    </Overlay>
  );
}

export default hot(module)(FollowUp);
