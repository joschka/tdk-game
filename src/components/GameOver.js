import React, {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {hot} from "react-hot-loader";

import "./GameOver.css";

import SpeechBubble from "./SpeechBubble";
import ShareOption from "./ShareOption";

function GameOver({text}) {
  const dispatch = useDispatch();

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

  function Sharing() {
    return (<div className="game-over__shares">
      <ShareOption type="facebook" text={textFacebook} url={socialUrl} />
      <ShareOption type="twitter" text={textTwitter} />
      <ShareOption type="email" text={textEmail} subject={subjectEmail} />
      <ShareOption type="copy" url={socialUrl} />
    </div>);
  }

  return (
    <div className="game-over">
      <SpeechBubble noHead={true}>
        <div className="game-over__text"
          dangerouslySetInnerHTML={{
            __html: text,
          }}
        ></div>

        <Sharing />

        <div style={{textAlign: 'center', fontSize: '16px', marginBottom: '10px'}}>
          Wir haben die Gesetze geschrieben, die das Klima wirklich retten:
        </div>
        <a href="https://www.germanzero.de" className="button">
          Gesetze ansehen
        </a>
        <button
          onClick={playAgain}
          className="final-screen__again button button--secondary"
        >
          Nochmal spielen
        </button>
      </SpeechBubble>
    </div>
  );
}

export default hot(module)(GameOver);
