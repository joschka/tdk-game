import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {hot} from 'react-hot-loader';

import './Progress.css';

import Level from "./Level";

function Progress() {
  const tick = useSelector(state => state.clock.tick)

  function calculate(level) {
    if (level === 1) {
      if (tick >= 194) return 100;
      return tick / 194 * 100;
    }

    if (level === 2) {
      if (tick <= 194) return 0;
      if (tick >= 388) return 100;
      return tick / 388 * 100;
    }

    if (level === 3) {
      if (tick <= 388) return 0;
      if (tick >= 582) return 100;
      return tick / 582 * 100;
    }

    if (level === 4) {
      if (tick <= 582) return 0;
      if (tick >= 636) return 100;
      return tick / 636 * 100;
    }

    return 0;
  }

  return (
    <div className='progress'>
      <Level first={true} percentage={calculate(1)} label="Amtszeit 1" />
      <Level percentage={calculate(2)} label="Amtszeit 2" inactive={tick < 194} />
      <Level percentage={calculate(3)} label="Amtszeit 3" inactive={tick < 388} />
      <Level last={true} percentage={calculate(4)} label="Amtszeit 4" inactive={tick < 582} />
    </div>
  );
}

export default hot(module)(Progress);
