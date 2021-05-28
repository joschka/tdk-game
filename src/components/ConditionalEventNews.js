import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {hot} from 'react-hot-loader';

import './ConditionalEventNews.css';

function ConditionalEventNews({type, title, text, nextSlide}) {
  const dispatch = useDispatch();


  return (
    <div className='conditional-event-news'>
      { type}
      <br />
      { title}
      <br />
      { text}
      <button onClick={nextSlide}>NEXT</button>
    </div>
  );
}

export default hot(module)(ConditionalEventNews);
