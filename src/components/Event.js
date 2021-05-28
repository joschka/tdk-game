import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { hot } from 'react-hot-loader';

import './Event.css';

function Event() {
  const dispatch = useDispatch();

  return (
    <div className='event'>
    </div>
  );
}

export default hot(module)(Event);
