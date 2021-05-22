import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { hot } from "react-hot-loader";

import "./App.css";

import StartScreen from "./StartScreen.js";
import Explainer from "./Explainer.js";
import Dashboard from "./Dashboard.js";
import LoveChart from "./LoveChart.js";
import Clock from "./Clock.js";
import ToggleClock from "./ToggleClock.js";
import ProgressBar from "./ProgressBar.js";
import FinalScreen from "./FinalScreen.js";
import Thermometer from "./Thermometer.js";
import LoveDisplay from "./LoveDisplay.js";
import ExampleEvent from "./ExampleEvent.js";
import ActionArea from "./ActionArea.js";
import ScrollWatcher from "./ScrollWatcher.js";
import FutureExecutor from "./FutureExecutor.js";

import testAudio from "./test.mp3";

function App() {
  const gameStarted = useSelector((state) => state.game.started);
  const introStep = useSelector((state) => state.game.introStep);

  return (
    <div>
      <div className="app">
        <StartScreen />
        <Explainer />
        {gameStarted && (
          <>
            <Dashboard />
            <ActionArea />
            <ExampleEvent />
            <FinalScreen />
            <FutureExecutor />
          </>
        )}
      </div>
      <Clock />
      <ScrollWatcher />
      <audio id="audio-player">
        <source src={testAudio} type="audio/mp3" />
      </audio>
    </div>
  );
}

export default hot(module)(App);
