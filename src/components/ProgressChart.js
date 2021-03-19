import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { hot } from 'react-hot-loader';

import './ProgressChart.css';

import { AreaChart, LineChart, Line, Tooltip, Area, CartesianGrid, XAxis, YAxis } from 'recharts';

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function ProgressChart() {
  const dispatch = useDispatch();

  const records = useSelector(state => state.records);

  const data = records.slice(-30, -1).map((r, index) => {
    return {
      name: index + 1,
      love: r.love,
    };
  });


  return (
    <div className='progress-chart'>
      <AreaChart width={375} height={200} data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#ff0000" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#ff0000" stopOpacity={0}/>
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
          </linearGradient>
        </defs>
        { false && <XAxis dataKey="name" /> }
        { true && <YAxis /> }
        { false && <CartesianGrid strokeDasharray="3 3" /> }
        <Area type="monotone" dataKey="love" stroke="#ff0000" fillOpacity={1} fill="url(#colorUv)" />
      </AreaChart>
    </div>
  );
}

export default hot(module)(ProgressChart);
