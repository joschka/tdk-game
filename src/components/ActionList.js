import React, {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {hot} from "react-hot-loader";

import "./ActionList.css";

import Action from "./Action.js";

function ActionList() {
  const dispatch = useDispatch();

  const actions = useSelector((state) => state.actions);
  const visible = useSelector((state) => state.actionsVisible);

  const activeActions = actions.filter((a) => a.state === "active");
  const actionable = activeActions.length < 4;

  const opts = {
    className: ["action-list"].join(" "),
  };

  const sortByImpact = (a, b) => {
    if (a.temperature < b.temperature) return -1;
    if (a.temperature > b.temperature) return 1;
    return 0;
  };

  const industryActions = actions.filter((a) => a.sector === "industry");
  const agricultureActions = actions.filter((a) => a.sector === "agriculture");
  const mobilityActions = actions.filter((a) => a.sector === "mobility");
  const energyActions = actions.filter((a) => a.sector === "energy");
  const buildingsActions = actions.filter((a) => a.sector === "buildings");

  if (!visible) return null;

  return (
    <div {...opts}>
      <div className="action-list__list">
        <div className="action-list__sector action-list__sector--energy">
          <div className="action-list__sector-title">Energie</div>
          {energyActions.sort(sortByImpact).map((a) => (
            <Action key={a.id} {...a} actionable={actionable} />
          ))}
        </div>
        <div className="action-list__sector action-list__sector--industry">
          <div className="action-list__sector-title">Industrie</div>
          {industryActions.sort(sortByImpact).map((a) => (
            <Action key={a.id} {...a} actionable={actionable} />
          ))}
        </div>
        <div className="action-list__sector action-list__sector--mobility">
          <div className="action-list__sector-title">Verkehr</div>
          {mobilityActions.sort(sortByImpact).map((a) => (
            <Action key={a.id} {...a} actionable={actionable} />
          ))}
        </div>
        <div className="action-list__sector action-list__sector--buildings">
          <div className="action-list__sector-title">Gebäude</div>
          {buildingsActions.sort(sortByImpact).map((a) => (
            <Action key={a.id} {...a} actionable={actionable} />
          ))}
        </div>
        <div className="action-list__sector action-list__sector--agriculture">
          <div className="action-list__sector-title">Landwirtschaft</div>
          {agricultureActions.sort(sortByImpact).map((a) => (
            <Action key={a.id} {...a} actionable={actionable} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default hot(module)(ActionList);
