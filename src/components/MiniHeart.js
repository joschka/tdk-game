import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { hot } from 'react-hot-loader';

import './MiniHeart.css';

function MiniHeart(props) {
  const dispatch = useDispatch();

  const y = {
    '3': 0,
    '2': 21,
    '1': 38,
    '0': 100,
    '-1': 50,
    '-2': 67,
    '-3': 84,
  }[props.love.toString()] * 0.85;

  const color = props.love > 0 ? '#3eb237' : 'tomato';

  return (
    <div className='mini-heart'>
      <svg viewBox='0 0 100 85'>
        <defs>
          <path id='heart' d='M92.71,7.27L92.71,7.27c-9.71-9.69-25.46-9.69-35.18,0L50,14.79l-7.54-7.52C32.75-2.42,17-2.42,7.29,7.27v0 c-9.71,9.69-9.71,25.41,0,35.1L50,85l42.71-42.63C102.43,32.68,102.43,16.96,92.71,7.27z' />

          <clipPath id='heart-inner'>
            <use href='#heart' />
          </clipPath>
        </defs>

        <use href='#heart' fill='#ccc' />
        <rect x='-5' y={y} width='110' height='85' fill={color} stroke='white' strokeWidth='3' clipPath='url(#heart-inner)' />
      </svg>
    </div>
  );
}

export default hot(module)(MiniHeart);
