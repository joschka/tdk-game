import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { hot } from 'react-hot-loader';

import './ActionList.css';

import Action from './Action.js';

function ActionList() {
  const dispatch = useDispatch();

  const actions = useSelector(state => state.actions);

  const activeActions = actions.filter(a => a.state === 'active');
  const actionable = activeActions.length < 4;

  const opts = {
    className: [
      'action-list',
    ].join(' '),
  };

  return (
    <div {...opts}>
      <div className='action-list__list'>
        { actions.map(a => <Action key={a.id} {...a} actionable={actionable} />) }
      </div>
    </div>
  );
}

export default hot(module)(ActionList);
