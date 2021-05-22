import React, {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {hot} from "react-hot-loader";

import "./ActionDetailView.css";

import imageIndustry from "../images/industry.gif";
import imageTesla from "../images/tesla.gif";
import imageKohle from "../images/kohle.jpg";
import imageWallstreet from "../images/wallstreet.jpg";
import imageSanierung from "../images/sanierung.jpg";
import imageSolarWind from "../images/solar-wind.jpg";
import imageWork from "../images/work.gif";
import imagePizza from "../images/pizza.jpg";

import MiniThermometer from "./MiniThermometer";

function ActionDetailView(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const {
    title,
    description,
    duration,
    temperature,
    love,
    state,
    actionable,
    onStartClick,
    onBackClick,
    image,
  } = props;

  let imageSrc;
  switch (image) {
    case "industry":
      imageSrc = imageIndustry;
      break;
    case "tesla":
      imageSrc = imageTesla;
      break;
    case "kohle":
      imageSrc = imageKohle;
      break;
    case "wallstreet":
      imageSrc = imageWallstreet;
      break;
    case "sanierung":
      imageSrc = imageSanierung;
      break;
    case "solar-wind":
      imageSrc = imageSolarWind;
      break;
    default:
      imageSrc = imagePizza;
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

  const renderButtons = () => {
    if (state === "available" && actionable) {
      return (
        <div className="action-detail-view__buttons">
          <button className="button button--secondary" onClick={onBackClick}>Zurück</button>
          <button className="button" onClick={onStartClick}>Jetzt starten!</button>
        </div>
      );
    }

    return (
      <div className="action-detail-view__buttons">
        <button className="button button--secondary" onClick={onBackClick}>Zurück</button>
      </div>
    );
  };

  return (
    <div className="action-detail-view fixed-screen">
      <div className="action-detail-view__content">
        <img className="action-detail-view__image" src={imageSrc} />
        <h1 className="action__title"
          dangerouslySetInnerHTML={{
            __html: title
          }}></h1>
        <div className="action-detail-view__stars">
          <p>Klimawirkung:</p>
          {true && renderStars()}
        </div>
        {renderButtons()}
        <div className="speech-bubble">
          <p>{description}</p>
        </div>
        <div className="action-detail-view__dude"></div>
      </div>
    </div>
  );
}

export default hot(module)(ActionDetailView);
