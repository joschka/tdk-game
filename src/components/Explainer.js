import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { hot } from "react-hot-loader";

import Background from "./Background";
import SpeechBubble from "./SpeechBubble";

import "./Explainer.css";

function Explainer() {
  const dispatch = useDispatch();

  const gameStarted = useSelector((state) => state.game.started);
  const gameStopped = useSelector((state) => state.game.stopped);
  const introStep = useSelector((state) => state.game.introStep);

  if (gameStarted || gameStopped || introStep < 1) return null;

  function nextStep() {
    if (introStep === 6) {
      // Start geklickt am Ende des Intros
      window.fathom && window.fathom.trackGoal("YRBAHU90", 0);

      dispatch({ type: "game/start" });
      dispatch({ type: "clock/start" });
    } else {
      dispatch({ type: "game/introStep", data: introStep + 1 });
    }
  }

  if (introStep === 1) {
    return (
      <Background name="buero-berater">
        <div className="explainer explainer--bottom" onClick={nextStep}>
          <SpeechBubble
            text="Willkommen im Kanzleramt.<br /><br />Ich werde Sie während Ihrer Amtszeit beraten."
            noHead={true}
          />
        </div>
      </Background>
    );
  }

  if (introStep === 2) {
    return (
      <Background name="blurry-temperature">
        <div className="explainer explainer--bottom" onClick={nextStep}>
          <SpeechBubble text="<span style='display: block;text-align: center'>Ihr Ziel:<br /><br /> Die Klimaerwärmung auf <span style='color: var(--green)'>1,5°</span> begrenzen.</span>" />
        </div>
      </Background>
    );
  }

  if (introStep === 3) {
    return (
      <Background name="blurry-actions">
        <div className="explainer explainer--bottom" onClick={nextStep}>
          <SpeechBubble text="<span style='display: block;text-align: center'>Dafür müssen Sie die notwendigen Gesetze auf den Weg bringen.</span>" />
        </div>
      </Background>
    );
  }

  if (introStep === 4) {
    return (
      <Background name="blurry-progress">
        <div className="explainer explainer--bottomx" onClick={nextStep}>
          <SpeechBubble text="<span style='display: block;text-align: center'>Aber Sie müssen dafür auch bis 2035 im Amt bleiben.</span>" />
        </div>
      </Background>
    );
  }

  if (introStep === 5) {
    return (
      <Background name="blurry-love">
        <div className="explainer explainer--bottomx" onClick={nextStep}>
          <SpeechBubble text="<span style='display: block;text-align: center'>Behalten Sie also stets Ihre Beliebtheit im Auge.</span>" />
        </div>
      </Background>
    );
  }

  if (introStep === 6) {
    return (
      <Background name="buero-berater">
        <div className="explainer explainer--bottom">
          <SpeechBubble
            text="<span style='display: block;text-align: center'>Die Zeit drängt!<br /><br />Sind Sie bereit das Klima zu retten?</span>"
            noHead={true}
          />
          <button
            className="button"
            style={{ marginTop: "20px" }}
            onClick={nextStep}
          >
            Erste Amtszeit starten
          </button>
        </div>
      </Background>
    );
  }
}

export default hot(module)(Explainer);
