import React, {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {hot} from "react-hot-loader";

import "./GameOver.css";

import SpeechBubble from "./SpeechBubble";
import ShareOption from "./ShareOption";

import IconParty from "../images/party.inline.svg";
import IconSad from "../images/sad.inline.svg";

import track from "../track";

function GameOver({text}) {
  const dispatch = useDispatch();

  const temperature = useSelector((state) => state.temperature.current);
  const love = useSelector((state) => state.love);
  const tick = useSelector((state) => state.clock.tick);
  const totalDuration = useSelector((state) =>
    state.actions.reduce((sum, a) => sum + a.duration, 0)
  );

  const won = temperature <= 1.5;

  const bestScore = 5000 + 800 + 2500 + (2544 - totalDuration);
  console.log({bestScore});

  const detailScore = parseInt(
    [
      won ? 5000 : 0,
      love * 20,
      (4 - temperature) * 1000,
      2544 - tick * 4,
    ].reduce((sum, v) => sum + v, 0),
    10
  );

  const score = parseInt(detailScore / 1000) + 1;

  useEffect(() => {
    window.onbeforeunload = null;

    if (won) {
      // Gewonnen
      track("QJ3JRI2N", score * 100)();
    } else {
      // Verloren
      track("C8Q6TAES", score * 100)();
    }

    switch (score) {
      case 1:
        return track("C47JIIPE", won ? 100 : 0)();
      case 2:
        return track("SGQ0AAZO", won ? 100 : 0)();
      case 3:
        return track("NDUVUO6X", won ? 100 : 0)();
      case 4:
        return track("IIQYLW1S", won ? 100 : 0)();
      case 5:
        return track("YNEKEA5M", won ? 100 : 0)();
      case 6:
        return track("CUQ0HAO2", won ? 100 : 0)();
      case 7:
        return track("YCBH0UZD", won ? 100 : 0)();
      case 8:
        return track("ZKYG8B5J", won ? 100 : 0)();
      case 9:
        return track("DOW4MBHA", won ? 100 : 0)();
      case 10:
        return track("RK799DHP", won ? 100 : 0)();
    }
  }, []);

  const playAgain = () => {
    track("VT6DHCEF")();

    const urlParams = (new URL(document.location)).searchParams;
    if (urlParams.has('r')) {
      const r = parseInt(urlParams.get('r'), 10);
      urlParams.set('r', r + 1);
    } else {
      urlParams.set('r', 1);
    }
    window.location.search = urlParams;

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
      return (
        <div className="game-over__icon game-over__icon--party">
          <IconParty />
        </div>
      );
    }

    return (
      <div className="game-over__icon game-over__icon--sad">
        <IconSad />
      </div>
    );
  }

  function Sharing() {
    return (
      <div className="game-over__shares">
        <ShareOption type="facebook" text={textFacebook} url={socialUrl} />
        <ShareOption type="twitter" text={textTwitter} />
        <ShareOption type="email" text={textEmail} subject={subjectEmail} />
        <ShareOption type="copy" url={socialUrl} />
      </div>
    );
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

        <div
          className="game-over__text"
          dangerouslySetInnerHTML={{
            __html: text,
          }}
        ></div>

        <button onClick={playAgain} className="game-over__again button">
          Nochmal spielen
        </button>

        <Sharing />

        <div className="game-over__teaser-text">
          Wir haben die Gesetze geschrieben, die das Klima wirklich
          retten.&nbsp;
          <a
            href="https://www.germanzero.de"
            className="external-link"
            onClick={track("FXP1PIMM")}
            rel="noopener"
            target="_blank"
          >
            Schau rein!
          </a>
        </div>
      </SpeechBubble>
    </div>
  );
}

export default hot(module)(GameOver);
