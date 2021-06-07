import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {hot} from 'react-hot-loader';

import './SpeechBubble.css';

function SpeechBubble({text, head}) {
  const dispatch = useDispatch();

  const cssClasses = [
    "speech-bubble",
    head ? "speech-bubble--head" : "",
  ].join(" ")

  return (
    <div className={cssClasses}>
      <div className='speech-bubble__head' />
      <p
        className='speech-bubble__content'
        dangerouslySetInnerHTML={{
          __html: text,
        }}
      ></p>
    </div>
  );
}

export default hot(module)(SpeechBubble);
