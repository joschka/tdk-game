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
import ConditionalEvent from "./ConditionalEvent";
import ActionDetailView from "./ActionDetailView";
import FollowUp from "./FollowUp";
import Unlover from "./Unlover";

function App() {
  const gameStarted = useSelector((state) => state.game.started);
  const gameStopped = useSelector((state) => state.game.stopped);
  const introStep = useSelector((state) => state.game.introStep);
  const currentTick = useSelector((state) => state.clock.tick);

  const actions = useSelector((state) => state.actions);
  const conditionalEvents = useSelector((state) => state.conditionalEvents);

  if (gameStarted) {
    window.onbeforeunload = function () {
      return "Möchtest du das Spiel wirklich beenden?";
    };
  } else {
    window.onbeforeunload = null;
  }

  const renderActionDetailViews = () => {
    return actions
      .filter((a) => a.detailViewActive)
      .map((a, i) => {
        return <ActionDetailView {...a} key={i} />;
      });
  };

  const renderFollowUps = () => {
    return actions
      .filter(
        (a) =>
          a.state === "active" && a.activeSinceTick + a.duration <= currentTick
      )
      .map((a, i) => {
        return <FollowUp {...a} key={i} />;
      });
  };

  const renderConditionalEvents = () => {
    return conditionalEvents.map((ce, i) => {
      return <ConditionalEvent {...ce} key={i} />;
    });
  };

  return (
    <div>
      <div className="app">
        <Clock />
        <Unlover />
        <StartScreen />
        <Explainer />
        {(gameStarted || gameStopped) && (
          <>
            {gameStarted && (
              <div className="main-screen">
                <Dashboard />
                <ActionArea />
              </div>
            )}
            {gameStarted && <ExampleEvent />}
            {false && <FinalScreen />}
            {gameStarted && false && <FutureExecutor />}
            {renderActionDetailViews()}
            {false && renderFollowUps()}
            {renderConditionalEvents()}
          </>
        )}
      </div>
      <ScrollWatcher />
    </div>
  );
}

export default hot(module)(App);
