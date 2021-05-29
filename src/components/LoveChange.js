import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {hot} from 'react-hot-loader';

import LoveChart from './LoveChart';

import './LoveChange.css';

function LoveChange({text, love, onClick}) {
  const dispatch = useDispatch();

  const currentLove = useSelector((state) => state.love);
  const records = useSelector((state) => state.records);
  const tick = useSelector((state) => state.tick);

  const initialChartProps = {
    love: currentLove,
    records,
    tick,
  }

  const [chartProps, setChartProps] = useState(initialChartProps);

  useEffect(() => {
    let timer = setTimeout(() => {
      setChartProps({
        love: currentLove + love,
        tick: tick + 1,
        records: records.concat([{love: currentLove + love}]),
      });
    }, 500);

    return function () {
      clearTimeout(timer);
      dispatch({type: "love/change", data: love});
    }
  }, []);

  return (
    <div className='love-change' onClick={onClick}>
      {text}
      <br />
      Ihre Beliebheit verändert sich um {love}%.
      <br />
      {currentLove}
      <br />
      <LoveChart {...chartProps} />
    </div>
  );
}

export default hot(module)(LoveChange);
