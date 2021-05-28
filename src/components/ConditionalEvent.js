import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {hot} from 'react-hot-loader';

import Overlay from './Overlay';
import ConditionalEventNews from "./ConditionalEventNews";
import ConditionalEventLoveChange from "./ConditionalEventLoveChange";
import ConditionalEventMultipleChoice from "./ConditionalEventMultipleChoice";

import './ConditionalEvent.css';

const deserializeFunction = (funcString) => (new Function(`return ${funcString}`)());

function ConditionalEvent({id, condition, probability, slides}) {
  const conditionFn = deserializeFunction(condition);

  const dispatch = useDispatch();

  const [display, setDisplay] = useState(false);
  //const [slide, setSlide] = useState(1);

  const slide = useSelector((state) => state.conditionalEvents.filter(ce => ce.id === id)[0].slide || 1);
  const currentTick = useSelector((state) => state.clock.tick);
  const currentTemperature = useSelector((state) => state.temperature.current);
  const currentLove = useSelector((state) => state.love);
  const actions = useSelector((state) => state.actions);
  const vars = useSelector((state) => state.vars);

  const doneActions = actions.filter(a => a.state === 'ended');
  const doneActionIds = doneActions.map(a => a.id);

  const conditionResult = conditionFn({
    tick: currentTick,
    love: currentLove,
    temperature: currentTemperature,
    done: doneActionIds,
    vars,
  });

  console.log({conditionResult, currentTick, currentTemperature, currentLove, doneActionIds, vars});

  const destroyEvent = () => {
    dispatch({type: "conditionalEvent/destroy", data: id});
  }

  if (conditionResult && !display) {
    if (Math.random() <= probability) {
      setDisplay(true);
    } else {
      destroyEvent();
    }
  }

  const nextSlide = () => {
    if (slide < slides.length) {
      dispatch({type: "conditionalEvent/nextSlide", data: {id}});
      //setSlide(slide + 1);
    } else {
      destroyEvent();
    }
  };

  const pushSlides = (newSlides) => {
    console.log({newSlides});
    const concatenated = slides.concat(newSlides);
    console.log({concatenated})
    setLocalSlides(concatenated);
    console.log({slides});
    nextSlide();
  };

  function Slide(props) {
    switch (props.type) {
      case "news":
        return <ConditionalEventNews {...props} nextSlide={nextSlide} />
      case "love-change":
        return <ConditionalEventLoveChange {...props} nextSlide={nextSlide} />
      case "multiple-choice":
        return <ConditionalEventMultipleChoice {...props} id={id} nextSlide={nextSlide} pushSlides={pushSlides} />
      default:
        break;
    }
  }

  const renderSlide = () => {
    const currentSlide = slides[slide - 1];
    console.log({currentSlide, slides, slide});
    return <Slide {...currentSlide} />;
  };

  if (!display) return null;

  return (
    <Overlay>
      <div className='conditional-event'>
        Conditional Event
        {renderSlide()}
        <button onClick={destroyEvent}>Close</button>
      </div>
    </Overlay>
  );
}

export default hot(module)(ConditionalEvent);
