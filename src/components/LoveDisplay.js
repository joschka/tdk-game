import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { hot } from 'react-hot-loader';

import './LoveDisplay.css';

function LoveDisplay() {
  const dispatch = useDispatch();

  const love = useSelector(state => state.love);

  const formatted = `${love}%`;

  return (
    <div className='love-display'>
      { formatted }
    </div>
  );
}

export default hot(module)(LoveDisplay);
