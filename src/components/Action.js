import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { hot } from 'react-hot-loader';

import MiniThermometer from './MiniThermometer.js';

import './Action.css';

function Action(props) {
  const dispatch = useDispatch();

  const tick = useSelector(state => state.clock.tick);

  const [startTick, setStartTick] = useState(tick);

  const {
    id,
    state,
    title,
    duration,
    temp,
    love,
    actionable
  } = props;

  function handleClick(e) {
    e.stopPropagation();
    e.preventDefault();
    dispatch({ type: 'action/activate', data: { id } });
  }

  const progress = duration - (tick - startTick);

  function renderProgress() {
    const style = {
      width: `${progress / duration * 100}%`
    };

    return <div className='action__progress-outer'>
      <div className='action__progress-inner' style={style}></div>
    </div>;
  }
  
  useEffect(() => {
    if (state === 'active' && progress === 0) {
      dispatch({ type: 'love/increase', data: love });
      dispatch({ type: 'temperature/increase', data: temp });
      dispatch({ type: 'action/end', data: { id } });
    }
  });

  const cssClasses = [
    'action',
    `action--${state}`,
    props.minimized && 'action--minimized',
  ];

  return (
    <div className={cssClasses.join(' ')}>
      <div className='action__title'>{ title }</div>
      <div className='action__tools'>
        { state === 'available' && `L: ${love}` }
        { state === 'available' && <MiniThermometer percentage={temp * -400} /> }
        { state === 'available' && actionable && <button className='action__button' onClick={handleClick}>+</button> }
        { state === 'active' && renderProgress() }
      </div>
    </div>
  );
}

export default hot(module)(Action);
