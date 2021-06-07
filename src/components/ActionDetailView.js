import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { hot } from "react-hot-loader";

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

import MiniThermometer from "./MiniThermometer";
import Overlay from "./Overlay";

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
      stars.push(<MiniThermometer percentage={100} key={i} />);
    }

    for (let i = starCount; i < 5; i++) {
      stars.push(<MiniThermometer percentage={0} key={i} />);
    }

    return stars;
  };

  const onStartClick = () => {
    //setShowDetailView(false);
    //dispatch({type: "clock/start", data: "overlay"});
    if (state === "available" && actionable) {
      dispatch({ type: "action/activate", data: { id } });
      dispatch({ type: "action/hide", data: id });
    }
  };

  const onBackClick = () => {
    //setShowDetailView(false);
    dispatch({ type: "action/hide", data: id });
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
            Jetzt starten!
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
        <img className="action-detail-view__image" src={imageSrc} />
        <h1
          className="action__title"
          dangerouslySetInnerHTML={{
            __html: title,
          }}
        ></h1>
        <div className="action-detail-view__stars">
          <p>Klimawirkung:</p>
          {true && renderStars()}
        </div>
        {renderButtons()}
        {link && (
          <div className="action-detail-view__link">
            Mehr Informationen im Klimaplan von GermanZero e.V.
            <br />
            <a href={link} rel="noopener" target="_blank">
              Klimaplan in neuem Tab öffnen
            </a>
          </div>
        )}
        <div className="speech-bubble">
          <p
            dangerouslySetInnerHTML={{
              __html: description,
            }}
          ></p>
        </div>
        <div className="action-detail-view__dude"></div>
      </div>
    </Overlay>
  );
}

export default hot(module)(ActionDetailView);
