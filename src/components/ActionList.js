import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { hot } from 'react-hot-loader';

import './ActionList.css';

import Action from './Action.js';

function ActionList() {
  const dispatch = useDispatch();

  const actions = useSelector(state => state.actions);
  const visible = useSelector(state => state.actionsVisible);

  const activeActions = actions.filter(a => a.state === 'active');
  const availableActions = actions.filter(a => a.state === 'available');
  const endedActions = actions.filter(a => a.state === 'ended');

  const emptySlots = Array.from('x'.repeat(3 - activeActions.length));

  function handleOpenClick(e) {
    e.stopPropagation();
    e.preventDefault();
    dispatch({ type: 'actions/open' });
    dispatch({ type: 'clock/stop' });
    dispatch({ type: 'dashboard/small' });
  }

  function handleCloseClick(e) {
    console.log("close", e);
    e.stopPropagation();
    e.preventDefault();
    dispatch({ type: 'actions/close' });
    dispatch({ type: 'clock/start' });
    if (activeActions.length > 0) {
      dispatch({ type: 'dashboard/medium' });
    } else {
      dispatch({ type: 'dashboard/large' });
    }
  }

  const opts = {
    className: [
      'action-list',
      visible ? 'action-list--open' : '',
    ].join(' '),
    onClick: handleCloseClick,
  };

  return (
    <div {...opts}>
      <div className='action-list__list'>
        <strong>Maßnahmen in der Umsetzung</strong><br />
        {activeActions.map(a => <Action key={a.id} {...a} />)}
        {emptySlots.map((s, index) => <div key={`empty_${index}`} className='action action__empty'></div>)}
        {!visible && <button onClick={handleOpenClick}>weitere Maßnahmen auswählen</button>}
        {visible && <button onClick={handleCloseClick}>schließen</button>}
        {visible && availableActions.map(a => <Action key={a.id} {...a} actionable={emptySlots.length > 0}/>)}
        {visible && endedActions.map(a => <Action key={a.id} {...a} />)}
      </div>
    </div>
  );
}

export default hot(module)(ActionList);
