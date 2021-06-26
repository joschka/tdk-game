import React, {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {hot} from "react-hot-loader";

import "./ActionDetailView.css";

import imageCO2Bepreisung from "../images/actions/co2bepreisung.gif";
import imageMehrwege from "../images/actions/mehrwege.gif";
import imageMoore from "../images/actions/moore.gif";
import imageTiere from "../images/actions/tiere.jpg";
import imageEAutos from "../images/actions/eautos.gif";
import imageZuege from "../images/actions/zuege.gif";
import imageKohleausstieg from "../images/actions/kohleausstieg.gif";
import imageSolarWind from "../images/actions/solarwind.gif";
import imageReparieren from "../images/actions/reparieren.gif";
import imageStromsteuer from "../images/actions/stromsteuer.gif";
import imageBGE from "../images/actions/bge.gif";
import imageFreeride from "../images/actions/freeride.gif";
import imageFlyingtax from "../images/actions/flyingtax.gif";

import SpeechBubble from "./SpeechBubble";
import Overlay from "./Overlay";

import MiniThermometerEmpty from "../images/mini-thermometer-empty.inline.svg";
import MiniThermometerFilled from "../images/mini-thermometer-filled.inline.svg";

import track from "../track";

function ActionDetailView(props) {
  const dispatch = useDispatch();

  const {
    id,
    title,
    description,
    duration,
    temperature,
    link,
    love,
    state,
    //onStartClick,
    //onBackClick,
  } = props;

  const actions = useSelector((state) => state.actions);
  const activeActions = actions.filter((a) => a.state === "active");
  const actionable = activeActions.length < 4;

  let imageSrc;
  switch (id) {
    case "co2bepreisung":
      imageSrc = imageCO2Bepreisung;
      break;
    case "mehrwege":
      imageSrc = imageMehrwege;
      break;
    case "moore":
      imageSrc = imageMoore;
      break;
    case "tiere":
      imageSrc = imageTiere;
      break;
    case "eautos":
      imageSrc = imageEAutos;
      break;
    case "zuege":
      imageSrc = imageZuege;
      break;
    case "kohleausstieg":
      imageSrc = imageKohleausstieg;
      break;
    case "solarwind":
      imageSrc = imageSolarWind;
      break;
    case "reparieren":
      imageSrc = imageReparieren;
      break;
    case "stromsteuer":
      imageSrc = imageStromsteuer;
      break;
    case "bge":
      imageSrc = imageBGE;
      break;
    case "freeride":
      imageSrc = imageFreeride;
      break;
    case "flyingtax":
      imageSrc = imageFlyingtax;
      break;
    default:
      imageSrc = "";
      break;
  }

  let starCount;
  const tempDelta = Math.abs(temperature);
  if (tempDelta < 0.05) {
    starCount = 1;
  } else if (tempDelta >= 0.05 && tempDelta < 0.1) {
    starCount = 2;
  } else if (tempDelta >= 0.1 && tempDelta < 0.2) {
    starCount = 3;
  } else if (tempDelta >= 0.2 && tempDelta < 0.3) {
    starCount = 4;
  } else if (tempDelta >= 0.3) {
    starCount = 5;
  }

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < starCount; i++) {
      stars.push(<MiniThermometerFilled key={i} />);
    }

    for (let i = starCount; i < 5; i++) {
      stars.push(<MiniThermometerEmpty key={i} />);
    }

    return stars;
  };

  const onStartClick = () => {
    //setShowDetailView(false);
    //dispatch({type: "clock/start", data: "overlay"});
    if (state === "available" && actionable) {
      dispatch({type: "action/activate", data: {id}});
      dispatch({type: "action/hide", data: id});
    }
  };

  const onBackClick = () => {
    //setShowDetailView(false);
    dispatch({type: "action/hide", data: id});
    //dispatch({type: "clock/start", data: "overlay"});
  };

  const renderButtons = () => {
    if (state === "available" && actionable) {
      return (
        <div className="action-detail-view__buttons">
          <button className="button button--secondary" onClick={onBackClick}>
            Zurück
          </button>
          <button className="button" onClick={onStartClick}>
            Starten
          </button>
        </div>
      );
    }

    return (
      <div className="action-detail-view__buttons">
        <button className="button button--secondary" onClick={onBackClick}>
          Zurück
        </button>
      </div>
    );
  };

  return (
    <Overlay>
      <div className="action-detail-view">
        <div className="action-detail-view__upper">
          <img className="action-detail-view__image" src={imageSrc} />
          <div
            className="action-detail-view__title"
            dangerouslySetInnerHTML={{
              __html: title,
            }}
          ></div>
          <div className="action-detail-view__stars">
            <p>Klimawirkung:</p>
            {true && renderStars()}
          </div>
        </div>
        {renderButtons()}
        <div className="action-detail-view__speech-bubble">
          <SpeechBubble head={true}>
            <p dangerouslySetInnerHTML={{
              __html: description,
            }}>
            </p>
            <div className="action-detail-view__link">
              Mehr Informationen im Klimaplan von GermanZero.&nbsp;
              <a
                className="external-link"
                onClick={track("8FJWRNJY")}
                href="https://germanzero.de/Erreichen/1-5-grad-massnahmen"
                rel="noopener"
                target="_blank"
              >
                Schau rein!
          </a>
            </div>
          </SpeechBubble>
        </div>
      </div>
    </Overlay>
  );
}

export default hot(module)(ActionDetailView);
