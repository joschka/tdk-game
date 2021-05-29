import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { hot } from "react-hot-loader";

import "./ConditionalEventMultipleChoice.css";

function ConditionalEventMultipleChoice({ id, text, answers }) {
  const dispatch = useDispatch();

  const onAnswerClick = (index) => {
    return function () {
      const answer = answers[index];
      console.log({ answer });
      if (answer.variable) {
        dispatch({
          type: "conditionalEvent/setVariable",
          data: { id, variable: answer.variable },
        });
      }
      if (answer.slides) {
        dispatch({
          type: "conditionalEvent/addSlides",
          data: { id, slides: answer.slides },
        });
      }
      dispatch({ type: "conditionalEvent/nextSlide", data: { id } });
    };
  };

  const renderAnswers = () => {
    return answers.map((a, index) => {
      return (
        <div
          className="conditional-event-multiple-choice__answer"
          onClick={onAnswerClick(index)}
          key={index}
        >
          {a.text}
        </div>
      );
    });
  };

  return (
    <div className="conditional-event-multiple-choice">
      <div className="conditional-event-multiple-choice__question">{text}</div>
      <div className="conditional-event-multiple-choice__answers">
        {renderAnswers()}
      </div>
    </div>
  );
}

export default hot(module)(ConditionalEventMultipleChoice);
