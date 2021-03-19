import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { hot } from 'react-hot-loader';

import './ProgressBar.css';

function ProgressBar(props) {
  const dispatch = useDispatch();

  const currentTick = useSelector(state => state.clock.tick);
  const duration = useSelector(state => state.clock.duration);

  const percentage = currentTick / duration * 100;

  return (
    <div className='progress-bar'>
      <div className='progress-bar__outer'>
        <div className='progress-bar__inner' style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  );
}

export default hot(module)(ProgressBar);
