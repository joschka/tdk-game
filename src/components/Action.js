import React, {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {hot} from "react-hot-loader";

import MiniThermometer from "./MiniThermometer.js";
import MiniHeart from "./MiniHeart.js";
import ActionDetailView from "./ActionDetailView.js";
import Overlay from "./Overlay";

import IconAvailable from "../../todo-available.inline.svg";
import IconActive from "../../todo-active.inline.svg";
import IconDisabled from "../../todo-disabled.inline.svg";
import IconEnded from "../../todo-ended.inline.svg";

import "./Action.css";

function Action(props) {
  const dispatch = useDispatch();

  const tick = useSelector((state) => state.clock.tick);
  const isRunning = useSelector((state) => state.clock.isRunning);
  const isFast = useSelector((state) => state.clock.isFast);

  const shownAction = useSelector((state) => state.actionShown);

  const [startTick, setStartTick] = useState(tick);

  const {
    id,
    state,
    title,
    description,
    duration,
    activeSinceTick,
    temperature,
    love,
    actionable,
    sector,
  } = props;

  function handleClick(e) {
    e.stopPropagation();
    e.preventDefault();

    dispatch({type: "action/show", data: id});

    return;
  }

  /*function onStripeClick() {
    if (shownAction === id) {
      dispatch({ type: 'action/show', data: { id: null } });
    } else {
      dispatch({ type: 'action/show', data: { id } });
    }
  }*/

  const progressPercentage = activeSinceTick
    ? ((tick - activeSinceTick) / duration) * 100
    : 100;

  function renderProgress() {
    const style = {
      width: `${progressPercentage}%`,
    };

    return (
      <div className="action__progress-outer">
        <div className="action__progress-inner" style={style}></div>
      </div>
    );
  }

  function renderProgressIcon(props) {
    const scale = isFast ? 0.2 : 1;
    const minute = `${isRunning ? scale * 2 : 999999}s`;
    const hour = `${isRunning ? scale * 24 : 999999}s`;
    const clockStyle = {
      display: isRunning ? "block" : "none",
    };
    const pauseStyle = {
      display: isRunning ? "none" : "block",
    };

    const progressStyle = {
      strokeDasharray: `${Math.PI * 2 * 185}px`,
      strokeDashoffset: `${((100 - progressPercentage) / 100) * Math.PI * 2 * 185
        }px`,
    };
    return (
      <svg xmlns="http://www.w3.org/2000/svg" {...props}>
        <circle
          fill="none"
          stroke="#fff"
          strokeWidth="30"
          cx="200"
          cy="200"
          r="185"
        />
        <circle
          fill="none"
          stroke="#f3241c"
          strokeWidth="30"
          cx="200"
          cy="200"
          r="185"
          style={progressStyle}
        />
        <rect
          fill="#fff"
          width="30"
          height="120"
          x="185"
          y="80"
          rx="0"
          ry="0"
          style={clockStyle}
        >
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            from="0 200 200"
            to="360 200 200"
            dur={minute}
            repeatCount="indefinite"
          />
        </rect>
        <rect
          fill="#fff"
          width="30"
          height="120"
          x="185"
          y="80"
          rx="0"
          ry="0"
          style={clockStyle}
        >
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            from="0 200 200"
            to="360 200 200"
            dur={hour}
            repeatCount="indefinite"
          />
        </rect>
        <circle fill="#fff" cx="200" cy="200" r="15" style={clockStyle} />
        <rect
          fill="#fff"
          width="60"
          height="200"
          x="120"
          y="100"
          style={pauseStyle}
        />
        <rect
          fill="#fff"
          width="60"
          height="200"
          x="220"
          y="100"
          style={pauseStyle}
        />
      </svg>
    );
  }

  function renderIcon() {
    const props = {
      width: 20,
      height: 20,
      viewBox: "0 0 400 400",
      className: "action__icon",
    };

    if (state === "available" && actionable) {
      return <IconAvailable {...props} />;
    } else if (state === "ended") {
      return <IconEnded {...props} />;
    } else if (state === "available" && !actionable) {
      return <IconDisabled {...props} />;
    }
  }

  useEffect(() => {
    if (state === "active" && progressPercentage === 100) {
      //dispatch({type: "love/change", data: love});
      //dispatch({ type: "temperature/increase", data: temperature });
      dispatch({type: "action/end", data: {id}});
      /*dispatch({
        type: "futures/add",
        data: {tick: tick + 1, future: {type: "follow-up", title, temperature, love, questions, successImage}},
      });*/
    }
  }, [state, progressPercentage]);

  const cssClasses = [
    "action",
    `action--${state}`,
    props.minimized && "action--minimized",
  ];

  return (
    <div className={cssClasses.join(" ")}>
      <div className="action__stripe" onClick={handleClick}>
        {state !== "active" && renderIcon()}
        {state === "active" &&
          renderProgressIcon({
            className: "action__icon",
            width: 40,
            height: 40,
            viewBox: "0 0 400 400",
          })}
        <div
          className="action__title"
          dangerouslySetInnerHTML={{
            __html: `${title}`,
          }}
        ></div>
        {false && (
          <div className="action__tools">
            {<MiniThermometer percentage={temperature * -300} />}
            {false && <MiniHeart love={love} />}
          </div>
        )}
      </div>
      {state === "available" && shownAction === id && (
        <div className="action__description">
          <p>{description}</p>
        </div>
      )}
    </div>
  );
}

export default hot(module)(Action);
