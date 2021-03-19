import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { hot } from 'react-hot-loader';

import './Action.css';

function Action(props) {
  const dispatch = useDispatch();

  const tick = useSelector(state => state.clock.tick);

  const [startTick, setStartTick] = useState(tick);

  function handleClick() {
    dispatch({ type: 'action/activate', data: props.title });
  }

  const progress = props.duration - (tick - startTick);
  
  if (progress <= 0) {

  }

  return (
    <div className='action'>
      { props.title || 'No title :(' }
      temp { props.temp }, beliebtheit { props.love }
      { !props.active && <button onClick={handleClick}>Los</button> }
      { props.active && progress }
    </div>
  );
}

export default hot(module)(Action);
