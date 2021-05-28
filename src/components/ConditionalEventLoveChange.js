import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {hot} from 'react-hot-loader';

import './ConditionalEventLoveChange.css';

function ConditionalEventLoveChange({type, text, love, nextSlide}) {
  const dispatch = useDispatch();

  return (
    <div className='conditional-event-love-change'>
      { type}
      <br />
      { text}
      <br />
      { love}
      <button onClick={nextSlide}>NEXT</button>
    </div>
  );
}

export default hot(module)(ConditionalEventLoveChange);
