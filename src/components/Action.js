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
  
  useEffect(() => {
    console.log({progress});
    if (progress === 0) {
      dispatch({ type: 'love/increase', data: props.love });
      dispatch({ type: 'temperature/increase', data: props.temp });
    }
  });

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
