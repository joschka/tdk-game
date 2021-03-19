import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { hot } from 'react-hot-loader';

import './Action.css';

function Action(props) {
  const dispatch = useDispatch();

  const tick = useSelector(state => state.clock.tick);

  const [startTick, setStartTick] = useState(tick);

  const {
    id,
    state,
    title,
    duration,
    temp,
    love
  } = props;

  function handleClick() {
    dispatch({ type: 'action/activate', data: { id } });
  }

  const progress = duration - (tick - startTick);
  
  useEffect(() => {
    if (state === 'active' && progress === 0) {
      dispatch({ type: 'love/increase', data: love });
      dispatch({ type: 'temperature/increase', data: temp });
      dispatch({ type: 'action/end', data: { id } });
    }
  });

  const cssClasses = [
    'action',
    `action_${state}`,
  ];

  return (
    <div className={cssClasses.join(' ')}>
      { title || 'No title :(' }
      temp { temp }, beliebtheit { love }
      { state === 'available' && <button onClick={handleClick}>Los</button> }
      { state === 'active' && progress }
    </div>
  );
}

export default hot(module)(Action);
