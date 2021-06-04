import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { hot } from "react-hot-loader";

import Dashboard from "./Dashboard.js";
import ActionArea from "./ActionArea.js";

import "./Explainer.css";

import previewLove from "../images/intro-love.png";
import previewTemperature from "../images/intro-temperature.png";
import previewTodos from "../images/intro-todos.png";

function Explainer() {
  const dispatch = useDispatch();

  const gameStarted = useSelector((state) => state.game.started);
  const gameStopped = useSelector((state) => state.game.stopped);
  const introStep = useSelector((state) => state.game.introStep);

  if (gameStarted || gameStopped || introStep < 1) return null;

  const stepDuration = [18, 13, 12][introStep - 1];

  let timerId;

  function nextStep() {
    clearTimeout(timerId);
    if (introStep === 3) {
      dispatch({ type: "game/start" });
      dispatch({ type: "clock/start" });
    } else {
      dispatch({ type: "game/introStep", data: introStep + 1 });
    }
  }

  timerId = setTimeout(() => {
    console.log("time over");
    nextStep();
  }, stepDuration * 1000);

  return (
    <div
      className={`explainer explainer--${introStep} fixed-screen`}
      onClick={nextStep}
    >
      <div className="explainer__smoke-screen"></div>
      {introStep === 1 && (
        <img className="explainer__image" src={previewTemperature} />
      )}
      {introStep === 2 && (
        <img className="explainer__image" src={previewLove} />
      )}
      {introStep === 3 && (
        <img className="explainer__image" src={previewTodos} />
      )}
      <div className="explainer__dude"></div>
      <div className="explainer__text">
        {introStep === 1 && (
          <>
            <p>
              <span>
                Glückwunsch zur gewonnen Wahl! Ihr Versprechen bis 2035 dafür zu
                sorgen, dass sich das Erdklima nur um 1,5° erhöht, ist extrem
                schwer zu erreichen.
              </span>
            </p>
            <p>
              <span>
                Zurzeit sagen Wissenschaft&shy;ler:innen eine Erwärmung von 4,5°
                voraus.
              </span>
            </p>
          </>
        )}
        {introStep === 2 && (
          <>
            <p>
              <span>
                Setzen Sie konsequent Maßnahmen um! Behalten Sie dabei aber Ihre
                Beliebtheit in der Öffentlichkeit im Auge. Sinkt Ihr Ansehen zu
                stark, droht die Abwahl.
              </span>
            </p>
          </>
        )}
        {introStep === 3 && (
          <>
            <p>
              <span>
                Wählen Sie mögliche Maßnahmen aus. Sie haben jeweils
                Auswirkungen auf Beliebtheit und Temperatur. Sie können bis zu
                vier Maßnahmen gleichzeitig laufen lassen.
              </span>
            </p>
            <p>
              <span>Viel Glück!</span>
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default hot(module)(Explainer);
