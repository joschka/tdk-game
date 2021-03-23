import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { hot } from 'react-hot-loader';

import './MiniThermometer.css';

function MiniThermometer(props) {
  const dispatch = useDispatch();

  const width = 40;
  const height = 75 + 6;

  const percentage = props.percentage;

  function renderShape(delta, color) {
    const center = width / 2;
    const upperRadius = 10 ;
    const lowerRadius = 20;
    const rectWidth = 20 - (2 * delta);

    return <> 
      <circle fill={color || 'black'} cx={center} cy={upperRadius} r={upperRadius - delta} />
      <rect fill={color || 'black'} x={(width - rectWidth) / 2} y={upperRadius} width={rectWidth} height={height - upperRadius - lowerRadius} />
      <circle fill={color || 'black'} cx={center} cy={height - lowerRadius} r={lowerRadius - delta} />
    </>;
  }

  return (
    <div className='mini-thermometer'>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${width} ${height}`}>
          <defs>
            <clipPath id='thermo-bar'>
              { renderShape(8) }
            </clipPath>
          </defs>

        { renderShape(0, '#cccccc') }
        { renderShape(5, '#ffffff') }
        <rect x='0' y={height - percentage * 0.75 - 3} width={width} height={height - 6} fill='#3eb237' clipPath='url(#thermo-bar)' />

  #3eb237
      </svg>
    </div>
  );
}

export default hot(module)(MiniThermometer);
