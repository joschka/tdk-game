import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { hot } from 'react-hot-loader';

import './StartScreen.css';

import ToggleClock from './ToggleClock.js';

function StartScreen() {
  const dispatch = useDispatch();

  const tick = useSelector(state => state.clock.tick);

  const show = tick === 0;

  if (!show) return '';

  function handleClick(e) {
    dispatch({ type: 'clock/start' });
  } 

  return (
    <div className='start-screen'>
      <h1>Klimaspiel</h1>

      <p>Erklärungstext...</p>

      <button onClick={handleClick}>START</button>
    </div>
  );
}

export default hot(module)(StartScreen);
