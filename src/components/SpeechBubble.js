import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {hot} from 'react-hot-loader';

import './SpeechBubble.css';

function SpeechBubble(props) {
  const dispatch = useDispatch();

  const {
    text, head, noHead
  } = props;

  const cssClasses = [
    "speech-bubble",
    head ? "speech-bubble--head" : "",
  ].join(" ")

  return (
    <div className={cssClasses}>
      {!noHead && <div className='speech-bubble__head' />}
      {text && <p
        className='speech-bubble__content'
        dangerouslySetInnerHTML={{
          __html: text,
        }}
      ></p>}
      {props.children && <div className='speech-bubble__content'>
        {props.children}
      </div>}
    </div>
  );
}

export default hot(module)(SpeechBubble);
