import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { hot } from 'react-hot-loader';

import './ActionList.css';

import Action from './Action.js';

function ActionList() {
  const dispatch = useDispatch();

  const availableActions = useSelector(state => state.actions.available);
  const activeActions = useSelector(state => state.actions.active);

  function renderActiveActions() {
    return activeActions.map(a => {
      return <Action title={a.title} duration={a.duration} temp={a.temp} love={a.love} active={true} />;
    });
  }

  function renderAvailableActions() {
    return availableActions.map(a => {
      return <Action title={a.title} duration={a.duration} temp={a.temp} love={a.love} active={false} />;
    });
  }

  return (
    <div className='action-list'>
      <h3>Active</h3>
      {renderActiveActions()}
      <hr />
      <h3>Verfügbar</h3>
      {renderAvailableActions()}
    </div>
  );
}

export default hot(module)(ActionList);
