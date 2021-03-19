import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { hot } from 'react-hot-loader';

import './ActionList.css';

import Action from './Action.js';

function ActionList() {
  const dispatch = useDispatch();

  const actions = useSelector(state => state.actions);

  const activeActions = actions.filter(a => a.state === 'active');
  const availableActions = actions.filter(a => a.state === 'available');
  const endedActions = actions.filter(a => a.state === 'ended');

  return (
    <div className='action-list'>
      {activeActions.map(a => <Action key={a.id} {...a} />)}
      <hr />
      {availableActions.map(a => <Action key={a.id} {...a} />)}
      <hr />
      {endedActions.map(a => <Action key={a.id} {...a} />)}
    </div>
  );
}

export default hot(module)(ActionList);
