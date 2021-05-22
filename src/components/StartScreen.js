import React, {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {hot} from "react-hot-loader";

import "./StartScreen.css";

function StartScreen() {
  const dispatch = useDispatch();

  const gameStarted = useSelector((state) => state.game.started);
  const introStep = useSelector((state) => state.game.introStep);

  // skip intro
  const queryParams = new URLSearchParams(window.location.search);
  const param = queryParams.get("intro");
  if (param && param === "0") {
    console.log("intro=0");
    dispatch({type: "game/start"});
    dispatch({type: "clock/start"});
    return null;
  }

  function nextStep(e) {
    dispatch({type: "game/introStep", data: 1});
  }

  useEffect(() => {
    document
      .querySelector(".start-screen svg")
      .addEventListener("click", () => {
        document.querySelector("#audio-player").play();
      });
    return () => {};
  }, []);

  if (gameStarted || introStep !== 0) return null;
  return (
    <div className="start-screen fixed-screen">
      <div className="start-screen__warning">Für das beste Spielerlebnis nutze bitte dein Smartphone.</div>
      <h1 className="start-screen__title">Ich kann Klimakanzler:in</h1>

      <svg
        viewBox="0 0 512 512"
        className="start-screen__play-icon"
        onClick={nextStep}
      >
        <path d="M256,0C114.617,0,0,114.615,0,256s114.617,256,256,256s256-114.615,256-256S397.383,0,256,0z M344.48,269.57l-128,80c-2.59,1.617-5.535,2.43-8.48,2.43c-2.668,0-5.34-0.664-7.758-2.008C195.156,347.172,192,341.82,192,336V176c0-5.82,3.156-11.172,8.242-13.992c5.086-2.836,11.305-2.664,16.238,0.422l128,80c4.676,2.93,7.52,8.055,7.52,13.57S349.156,266.641,344.48,269.57z" />
      </svg>

      <p className="start-screen__bottom-text">
        Es ist noch nicht zu spät. Aber es braucht jetzt entschiedenes Handeln!
      </p>

      <p>
        Ein Spiel von
        <br />
        <a href="https://www.germanzero.de/" target="_blank" rel="noopener">GermanZero e.V.</a>
        <br />
        <a href="https://www.germanzero.de/impressum" target="_blank" rel="noopener">Impressum</a>
        &nbsp;|&nbsp;
        <a href="https://www.germanzero.de/datenschutz" target="_blank" rel="noopener">Datenschutz</a>
      </p>
    </div>
  );
}

export default hot(module)(StartScreen);
