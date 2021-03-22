import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { hot } from 'react-hot-loader';

import './Clock.css';

function Clock() {
  const dispatch = useDispatch();
  const isRunning = useSelector(state => state.clock.isRunning);
  const isFast = useSelector(state => state.clock.isFast);
  const ticks = useSelector(state => state.clock.ticks);

  useEffect(() => {
    if (!isRunning) return;

    let _ticks = ticks;

    const intervalId = setInterval(() => {
      _ticks++;
      dispatch({ type: 'clock/tick', data: _ticks });
    }, isFast ? 250 : 1000);

    return function() {
      clearInterval(intervalId);
    }
  }, [isRunning, isFast]);

  return (
    <div className='clock'>
    </div>
  );
}

export default hot(module)(Clock);
