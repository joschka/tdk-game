import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { hot } from 'react-hot-loader';

import './Dashboard.css';

import Thermometer from './Thermometer.js';
import LoveChart from './LoveChart.js';
import ProgressBar from './ProgressBar.js';
import PlayFastForwardButton from './PlayFastForwardButton.js';

function Dashboard(props) {
  const dispatch = useDispatch();

  // large, medium, small
  const size = props.size || useSelector(state => state.dashboard.size);

  const opts = {
    className: [
      'dashboard',
      `dashboard--${size}`,
      'bg-gradient',
    ].join(' '),
  };

  return (
    <div {...opts}>
      <Thermometer size={size} />
      <LoveChart size={size} />
      <ProgressBar size={size} />
      <PlayFastForwardButton size={size} />
    </div>
  );
}

export default hot(module)(Dashboard);
