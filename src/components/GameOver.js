import React, {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {hot} from "react-hot-loader";

import "./GameOver.css";

import SpeechBubble from "./SpeechBubble";

function GameOver({text}) {
  const dispatch = useDispatch();

  useEffect(() => {
    window.onbeforeunload = null;
  }, []);

  const shareText = encodeURIComponent(
    "Kannst du Klimakanzler:in?\nFinde es heraus!\nhttps://gesetzesspiel.germanzero.de"
  );

  function FacebookShare() {

    return (
      <a target="_blank" class="game-over__share" rel="noopener"
        href={`https://www.fb.com/sharer/sharer.php?u=https://gesetzesspiel.germanzero.de&amp;quote=${shareText}`}>

        <svg role="img" class="social-link__icon" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2"><g fill-rule="nonzero"><path d="M512 256C512 114.615 397.385 0 256 0S0 114.615 0 256c0 127.777 93.616 233.685 216 252.89V330h-65v-74h65v-56.4c0-64.16 38.219-99.6 96.695-99.6 28.009 0 57.305 5 57.305 5v63h-32.281C305.918 168 296 187.733 296 207.978V256h71l-11.35 74H296v178.89C418.385 489.685 512 383.777 512 256z" fill="#1877f2"></path><path d="M355.65 330L367 256h-71v-48.022c0-20.245 9.917-39.978 41.719-39.978H370v-63s-29.297-5-57.305-5C254.219 100 216 135.44 216 199.6V256h-65v74h65v178.89a257.912 257.912 0 0040 3.11c13.608 0 26.966-1.065 40-3.11V330h59.65z" fill="#fff"></path></g></svg></a>);
  }

  function TwitterShare() {
    return (
      <a
        className="game-over__share"
        target="_blank"
        rel="noopener"
        href={`https://twitter.com/intent/tweet?text=${shareText}`}
      >
        <svg
          width={50}
          heigth={50}
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
          fillRule="evenodd"
          clipRule="evenodd"
          strokeLinejoin="round"
          strokeMiterlimit="2"
        >
          <path fill="none" d="M56 56h400v400H56z"></path>
          <path
            d="M161.014 464.013c193.208 0 298.885-160.071 298.885-298.885 0-4.546 0-9.072-.307-13.578A213.737 213.737 0 00512 97.176a209.705 209.705 0 01-60.334 16.527 105.426 105.426 0 0046.182-58.102 210.548 210.548 0 01-66.703 25.498 105.184 105.184 0 00-76.593-33.112c-57.682 0-105.145 47.464-105.145 105.144 0 8.002.914 15.979 2.722 23.773-84.418-4.231-163.18-44.161-216.494-109.752-27.724 47.726-13.379 109.576 32.522 140.226A104.258 104.258 0 0120.48 194.23v1.331c.014 49.814 35.447 93.111 84.275 102.974a104.898 104.898 0 01-47.431 1.802c13.727 42.685 53.311 72.108 98.14 72.95a210.83 210.83 0 01-130.458 45.056A213.688 213.688 0 010 416.827a297.42 297.42 0 00161.014 47.104"
            fill="#1da1f2"
            fillRule="nonzero"
          ></path>
        </svg>
      </a>
    );
  }

  const playAgain = () => {
    window.location.reload();
  };
  return (
    <div className="game-over">
      <SpeechBubble noHead={true}>
        <div className="game-over__text"
          dangerouslySetInnerHTML={{
            __html: text,
          }}
        ></div>
        <div className="game-over__shares">
          <FacebookShare />
          <TwitterShare />
        </div>
        <div style={{textAlign: 'center', fontSize: '16px', marginBottom: '10px'}}>
          Wir haben die Gesetze geschrieben, die das Klima retten:
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
