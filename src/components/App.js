import React from 'react';
import { hot } from 'react-hot-loader';

import './App.css';

import Clock from './Clock.js';
import ToggleClock from './ToggleClock.js';
import ProgressBar from './ProgressBar.js';
import StartScreen from './StartScreen.js';
import FinalScreen from './FinalScreen.js';
import Thermometer from './Thermometer.js';
import LoveDisplay from './LoveDisplay.js';
import ExampleEvent from './ExampleEvent.js';
import ProgressChart from './ProgressChart.js';
import ActionList from './ActionList.js';

function App() {
  return (
    <div>
      <div className='app'>
        <ProgressChart />
        <LoveDisplay />
        <Thermometer />
        <ProgressBar />
        <ExampleEvent />
        <FinalScreen />
        <StartScreen />
        <ActionList />
      </div>
      Clock: <Clock />
    </div>
  );
}

export default hot(module)(App);
