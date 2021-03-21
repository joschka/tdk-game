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
import ActionList from './ActionList.js';

function App() {
  return (
    <div>
      <div className='app'>
        <Dashboard />
        <ExampleEvent />
        <FinalScreen />
        <StartScreen />
        <ActionList />
      </div>
      <Clock />
      <hr />
      <LoveChart size='large' love='50' records={[{ love: 10 }, { love: 90 }, { love: 50 }]} />
      <LoveChart size='large' love='10' records={[{ love: 10 }, { love: 90 }, { love: 10 }]} />
      <LoveChart size='medium' love='50' records={[{ love: 10 }, { love: 90 }, { love: 50 }]} />
      <LoveChart size='medium' love='10' records={[{ love: 10 }, { love: 90 }, { love: 10 }]} />
      <LoveChart size='small' love='50' records={[{ love: 10 }, { love: 90 }, { love: 50 }]} />
      <LoveChart size='small' love='10' records={[{ love: 10 }, { love: 90 }, { love: 10 }]} />
      <Thermometer size='small' temperature='1.5' />
      <Thermometer size='small' temperature='1.6' />
      <Thermometer size='small' temperature='2' />
      <Thermometer size='small' temperature='3.1' />
      <Thermometer size='small' temperature='4' />
      <Thermometer size='medium' temperature='1.5' />
      <Thermometer size='medium' temperature='1.6' />
      <Thermometer size='medium' temperature='2' />
      <Thermometer size='medium' temperature='3.1' />
      <Thermometer size='medium' temperature='4' />
      <Thermometer size='large' temperature='1.5' />
      <Thermometer size='large' temperature='1.6' />
      <Thermometer size='large' temperature='2' />
      <Thermometer size='large' temperature='2.3' />
      <Thermometer size='large' temperature='2.4' />
      <Thermometer size='large' temperature='2.7' />
      <Thermometer size='large' temperature='3.1' />
      <Thermometer size='large' temperature='4' />
      <Dashboard size='small' />
      <Dashboard size='medium' />
      <Dashboard size='large' />
    </div>
  );
}

export default hot(module)(App);
