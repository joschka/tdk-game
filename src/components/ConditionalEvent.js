import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { hot } from "react-hot-loader";

import Overlay from "./Overlay";
import Background from "./Background";
import ConditionalEventNews from "./ConditionalEventNews";
import LoveChange from "./LoveChange";
import TemperatureChange from "./TemperatureChange";
import Text from "./Text";
import Vote from "./Vote";
import GameOver from "./GameOver";
import ConditionalEventMultipleChoice from "./ConditionalEventMultipleChoice";

import "./ConditionalEvent.css";

const deserializeFunction = (funcString) =>
  new Function(
    `return function ({temperature, love, tick, done, started, vars}) {return ${funcString};}`
  )();

function ConditionalEvent({ id, condition, probability, slides }) {
  const conditionFn = deserializeFunction(condition);

  const dispatch = useDispatch();

  //const [display, setDisplay] = useState(false);
  //const [slide, setSlide] = useState(1);

  const slide = useSelector(
    (state) =>
      state.conditionalEvents.filter((ce) => ce.id === id)[0]?.slide || 1
  );
  const currentTick = useSelector((state) => state.clock.tick);
  const currentTemperature = useSelector((state) => state.temperature.current);
  const currentLove = useSelector((state) => state.love);
  const doneActionIds = useSelector((state) =>
    state.actions.filter((a) => a.state === "ended").map((a) => a.id)
  );
  const startedActionIds = useSelector((state) =>
    state.actions.filter((a) => a.state === "active").map((a) => a.id)
  );
  const vars = useSelector((state) => state.vars);

  const conditionResult = conditionFn({
    tick: currentTick,
    love: currentLove,
    temperature: currentTemperature,
    done: doneActionIds,
    started: startedActionIds,
    vars,
  });

  console.log({
    id,
    condition,
    conditionResult,
    currentTick,
    currentTemperature,
    currentLove,
    doneActionIds,
    startedActionIds,
    vars,
  });

  const destroyEvent = () => {
    dispatch({ type: "conditionalEvent/destroy", data: id });
  };

  const nextSlide = () => {
    if (slide < slides.length) {
      dispatch({ type: "conditionalEvent/nextSlide", data: { id } });
      //setSlide(slide + 1);
    } else {
      destroyEvent();
    }
  };

  function Slide(props) {
    switch (props.type) {
      case "news":
        return <ConditionalEventNews {...props} onClick={nextSlide} />;
      case "text":
        return <Text {...props} onClick={nextSlide} />;
      case "vote":
        return <Vote {...props} onClick={nextSlide} />;
      case "game-over":
        return <GameOver {...props} />;
      case "love-change":
        return <LoveChange {...props} onClick={nextSlide} />;
      case "temperature-change":
        return <TemperatureChange {...props} onClick={nextSlide} />;
      case "multiple-choice":
        return (
          <ConditionalEventMultipleChoice
            {...props}
            id={id}
            nextSlide={nextSlide}
          />
        );
      default:
        break;
    }
  }

  const renderSlide = () => {
    const currentSlide = slides[slide - 1];
    console.log({ currentSlide, slides, slide });
    if (!currentSlide) {
      return destroyEvent();
    }
    return <Slide {...currentSlide} />;
  };

  if (!conditionResult) return null;
  if (conditionResult && probability && Math.random() > probability) {
    destroyEvent();
    return null;
  }

  return (
    <Overlay>
      <Background name={slides[slide - 1].background}>
        {renderSlide()}
      </Background>
    </Overlay>
  );
}

export default hot(module)(ConditionalEvent);
