import React, {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {hot} from "react-hot-loader";

import "./FinalScreen.css";

function FinalScreen() {
  const dispatch = useDispatch();

  const duration = useSelector((state) => state.clock.duration);
  const tick = useSelector((state) => state.clock.tick);
  const currentTemperature = useSelector((state) => state.temperature.current);
  const threshold = useSelector((state) => state.temperature.threshold);

  const [show, setShow] = useState(false);
  const [won, setWon] = useState(false);

  if (!won && currentTemperature <= threshold) {
    setWon(true);
  }

  if (!show && (won || tick >= duration)) {
    setShow(true);
  }

  useEffect(() => {
    if (show) {
      dispatch({type: "clock/stop", data: "overlay"});
      dispatch({type: "clock/stop", data: "main"});
      dispatch({type: "clock/stop", data: "button"});
      dispatch({type: "game/stop"});
    }
  }, [show]);

  console.log({duration, tick, currentTemperature, threshold, show, won})

  if (!show) return "";

  function Won() {
    return <div>Super, Sie haben alle Maßnahmen umsetzen können.</div>;
  }

  function Lost() {
    console.log("lost")
    return <div>
      Sie haben es leider nicht geschafft, alle Maßnahmen umzusetzen.
    </div>;
  }

  function Text() {
    return won ? <Won /> : <Lost />;
  }

  function Share() {
    const twitterText = encodeURIComponent("Kannst du Klimakanzler:in?\nFinde es heraus!\nhttps://www.klimakanzler.in");
    return <a className='final-screen__share' target="_blank" rel="noopener" href={`https://twitter.com/intent/tweet?text=${twitterText}`}><svg width={50} heigth={50} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2"><path fill="none" d="M56 56h400v400H56z"></path><path d="M161.014 464.013c193.208 0 298.885-160.071 298.885-298.885 0-4.546 0-9.072-.307-13.578A213.737 213.737 0 00512 97.176a209.705 209.705 0 01-60.334 16.527 105.426 105.426 0 0046.182-58.102 210.548 210.548 0 01-66.703 25.498 105.184 105.184 0 00-76.593-33.112c-57.682 0-105.145 47.464-105.145 105.144 0 8.002.914 15.979 2.722 23.773-84.418-4.231-163.18-44.161-216.494-109.752-27.724 47.726-13.379 109.576 32.522 140.226A104.258 104.258 0 0120.48 194.23v1.331c.014 49.814 35.447 93.111 84.275 102.974a104.898 104.898 0 01-47.431 1.802c13.727 42.685 53.311 72.108 98.14 72.95a210.83 210.83 0 01-130.458 45.056A213.688 213.688 0 010 416.827a297.42 297.42 0 00161.014 47.104" fill="#1da1f2" fill-rule="nonzero"></path></svg></a>
  }

  const playAgain = () => {
    window.location.reload();
  }

  const cssClasses = ["final-screen"];

  if (won) cssClasses.push("final-screen__won");
  if (!won) cssClasses.push("final-screen__lost");

  return (
    <div className={cssClasses.join(" ")}>
      <Text />
      <Share />
      <button onClick={playAgain} className="final-screen__again button button--secondary">Nochmal spielen</button>

    </div>
  );
}

export default hot(module)(FinalScreen);
