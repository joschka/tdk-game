import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { hot } from 'react-hot-loader';

import './Thermometer.css';

function Thermometer() {
  const dispatch = useDispatch();

  const temperature = '' + useSelector(state => state.temperature.current);

  const formatted = `+${temperature[0]},${temperature[1]}° C`

  return (
    <div className='thermometer'>
      { formatted }
    </div>
  );
}

export default hot(module)(Thermometer);
