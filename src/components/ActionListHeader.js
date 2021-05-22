import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { hot } from "react-hot-loader";

import "./ActionListHeader.css";

import IconAvailable from "../../todo-available.inline.svg";
import IconActive from "../../todo-active.inline.svg";
import IconEnded from "../../todo-ended.inline.svg";

import MiniThermometer from "./MiniThermometer.js";
import MiniHeart from "./MiniHeart.js";

function ActionListHeader() {
  const dispatch = useDispatch();

  const actions = useSelector((state) => state.actions);
  const actionPartitions = useSelector((state) => state.actionPartitions);
  const actionsSortBy = useSelector((state) => state.actionsSortBy);
  const actionsSortOrder = useSelector((state) => state.actionsSortOrder);

  const activeActions = actions.filter((a) => a.state === "active");
  const availableActions = actions.filter((a) => a.state === "available");
  const endedActions = actions.filter((a) => a.state === "ended");

  const roundIconProps = {
    width: 40,
    height: 40,
    viewBox: "0 0 400 400",
  };

  const availableCount = availableActions.length;
  const activeCount = activeActions.length;
  const endedCount = endedActions.length;

  const handleAvailableClick = () =>
    dispatch({ type: "actionPartitions/change", data: "available" });
  const handleActiveClick = () =>
    dispatch({ type: "actionPartitions/change", data: "active" });
  const handleEndedClick = () =>
    dispatch({ type: "actionPartitions/change", data: "ended" });
  const handleThermometerClick = () => {
    if (actionsSortBy === "temperature") {
      dispatch({
        type: "actionsSortOrder/change",
        data: ["asc", "desc"].filter((d) => d !== actionsSortOrder)[0],
      });
    } else {
      dispatch({ type: "actionsSortBy/change", data: "temperature" });
    }
  };
  const handleHeartClick = () => {
    if (actionsSortBy === "love") {
      dispatch({
        type: "actionsSortOrder/change",
        data: ["asc", "desc"].filter((d) => d !== actionsSortOrder)[0],
      });
    } else {
      dispatch({ type: "actionsSortBy/change", data: "love" });
    }
  };

  const roundIconClassName = (actionState) => {
    return [
      "action-list-header__round-icon",
      actionState === actionPartitions[0]
        ? "action-list-header__round-icon--active"
        : "",
    ].join(" ");
  };

  const thermometerClassName = [
    "action-list-header__thermometer",
    actionsSortBy === "temperature"
      ? "action-list-header__thermometer--active"
      : "",
    `action-list-header__thermometer--${actionsSortOrder}`,
  ].join(" ");

  return (
    <div className="action-list-header">
      <div className="action-list-header__round-icons">
        <div
          className={roundIconClassName("available")}
          onClick={handleAvailableClick}
        >
          <IconAvailable {...roundIconProps} />
          <div className="action-list-header__count">
            <span>{availableCount}</span>
          </div>
        </div>
        {(activeCount > 0 || endedCount > 0) && (
          <div
            className={roundIconClassName("active")}
            onClick={handleActiveClick}
          >
            <IconActive {...roundIconProps} />
            <div className="action-list-header__count">
              <span>{activeCount}</span>
            </div>
          </div>
        )}
        {endedCount > 0 && (
          <div
            className={roundIconClassName("ended")}
            onClick={handleEndedClick}
          >
            <IconEnded {...roundIconProps} />
            <div className="action-list-header__count">
              <span>{endedCount}</span>
            </div>
          </div>
        )}
      </div>

      <div className="action-list-header__icons">
        <div onClick={handleThermometerClick}>
          <MiniThermometer percentage={25} />
        </div>
        <div onClick={handleHeartClick}>
          <MiniHeart love={-2} />
        </div>
      </div>
    </div>
  );
}

export default hot(module)(ActionListHeader);
