import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { hot } from 'react-hot-loader';

import './ToggleClock.css';

function ToggleClock() {
  const dispatch = useDispatch();
  const clockIsRunning = useSelector(state => state.clock.isRunning);

  const label = clockIsRunning ? 'stop' : 'start';
  const type = clockIsRunning ? 'clock/stop' : 'clock/start';

  function handleClick(e) {
    dispatch({ type });
  } 

  return (
    <div className='toggle-clock'>
      <button onClick={handleClick}>{ label }</button>
    </div>
  );
}

export default hot(module)(ToggleClock);
