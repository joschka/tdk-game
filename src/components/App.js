import React from 'react';
import { hot } from 'react-hot-loader';

import './App.css';

import Dashboard from './Dashboard.js';
import LoveChart from './LoveChart.js';
import Clock from './Clock.js';
import ToggleClock from './ToggleClock.js';
import ProgressBar from './ProgressBar.js';
import StartScreen from './StartScreen.js';
import FinalScreen from './FinalScreen.js';
import Thermometer from './Thermometer.js';
import LoveDisplay from './LoveDisplay.js';
import ExampleEvent from './ExampleEvent.js';
import ProgressChart from './ProgressChart.js';
import ActionArea from './ActionArea.js';
import ScrollWatcher from './ScrollWatcher.js';

function App() {
  return (
    <div>
      <div className='app'>
        <Dashboard />
        <ActionArea />
        <ExampleEvent />
        <FinalScreen />
        <StartScreen />
      </div>
      <Clock />
      <ScrollWatcher />
    </div>
  );
}

export default hot(module)(App);
