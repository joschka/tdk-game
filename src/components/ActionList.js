import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { hot } from 'react-hot-loader';

import './ActionList.css';

import Action from './Action.js';

function ActionList() {
  const dispatch = useDispatch();

  const actions = useSelector(state => state.actions);
  const uiState = useSelector(state => state.ui.state);

  const activeActions = actions.filter(a => a.state === 'active');
  const availableActions = actions.filter(a => a.state === 'available');
  const endedActions = actions.filter(a => a.state === 'ended');

  const emptySlots = Array.from('x'.repeat(4 - activeActions.length));

  function handleOpenClick(e) {
    e.stopPropagation();
    e.preventDefault();
    dispatch({ type: 'actions/open' });
    dispatch({ type: 'clock/stop' });
    dispatch({ type: 'ui/state', data: 'bottom' });
  }

  function handleCloseClick(e) {
    console.log("close", e);
    e.stopPropagation();
    e.preventDefault();
    dispatch({ type: 'actions/close' });
    dispatch({ type: 'clock/start' });
    dispatch({ type: 'ui/state', data: 'top' });
    if (activeActions.length > 0) {
      dispatch({ type: 'dashboard/medium' });
    } else {
      dispatch({ type: 'dashboard/large' });
    }
  }

  const opts = {
    className: [
      'action-list',
    ].join(' '),
    onClick: handleCloseClick,
  };

  return (
    <div {...opts}>
      <div className='action-list__list'>
        { availableActions.map(a => <Action key={a.id} {...a} actionable={emptySlots.length > 0}/>)}
        { endedActions.map(a => <Action key={a.id} {...a} />)}
      </div>
    </div>
  );
}

export default hot(module)(ActionList);
