import React, {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {hot} from "react-hot-loader";

import "./GameOver.css";

import SpeechBubble from "./SpeechBubble";
import ShareOption from "./ShareOption";

import IconParty from "../images/party.inline.svg";
import IconSad from "../images/sad.inline.svg";

function GameOver({text}) {
  const dispatch = useDispatch();

  const temperature = useSelector(state => state.temperature.current);
  const love = useSelector(state => state.love);
  const tick = useSelector(state => state.clock.tick);
  const totalDuration = useSelector(state => state.actions.reduce((sum, a) => (sum + a.duration), 0));

  const won = temperature <= 1.5;

  const bestScore = 5000 + 800 + 2500 + (2544 - totalDuration);
  console.log({bestScore});

  const detailScore = parseInt([
    won ? 5000 : 0,
    love * 20,
    (4 - temperature) * 1000,
    2544 - tick * 4,
  ].reduce((sum, v) => (sum + v), 0), 10);

  const score = parseInt(detailScore / 1000) + 1;


  useEffect(() => {
    window.onbeforeunload = null;
  }, []);

  const playAgain = () => {
    window.location.reload();
  };

  const socialUrl = "https://gesetzesspiel.germanzero.de";
  // const socialUrl = "https://www.klimakanzler.in";
  const socialText = "Kannst du Klimakanzler:in?\nFinde es heraus!";

  const textTwitter = `${socialText}\n${socialUrl}`;
  const textFacebook = socialText;
  const textEmail = `${socialText}\n${socialUrl}`;
  const subjectEmail = "Klimakanzler:in";

  function Icon() {
    if (won) {
      return <div className="game-over__icon game-over__icon--party"><IconParty /></div>;
    }

    return <div className="game-over__icon game-over__icon--sad"><IconSad /></div>;
  }

  function Sharing() {
    return (<div className="game-over__shares">
      <ShareOption type="facebook" text={textFacebook} url={socialUrl} />
      <ShareOption type="twitter" text={textTwitter} />
      <ShareOption type="email" text={textEmail} subject={subjectEmail} />
      <ShareOption type="copy" url={socialUrl} />
    </div>);
  }

  function trackLinkToWebsite() {
    return window.fathom && window.fathom.trackGoal('FXP1PIMM', 0);
  }

  return (
    <div className="game-over">
      <SpeechBubble noHead={true}>

        <div className="game-over__header">
          <Icon />
          <div className="game-over__score">
            Score:
            <div className="game-over__score-number">{score} / 10</div>
          </div>
        </div>

        <div className="game-over__text"
          dangerouslySetInnerHTML={{
            __html: text,
          }}
        ></div>

        <button
          onClick={playAgain}
          className="game-over__again button"
        >
          Nochmal spielen
        </button>

        <Sharing />

        <div className="game-over__teaser-text">
          Wir haben die Gesetze geschrieben, die das Klima wirklich retten.&nbsp;
        <a href="https://www.germanzero.de" className="external-link" onClick={trackLinkToWebsite} rel="noopener" target="_blank">
            Schau rein!
        </a>
        </div>

      </SpeechBubble>
    </div>
  );
}

export default hot(module)(GameOver);
