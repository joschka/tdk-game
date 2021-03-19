import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { hot } from 'react-hot-loader';

import './ProgressChart.css';

import Chart from 'react-apexcharts';

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function ProgressChart() {
  const dispatch = useDispatch();

  const records = useSelector(state => state.records);

  const data = records.slice(-15, -1).map((r, index) => {
    return {
      name: index + 1,
      love: r.love,
    };
  });

  const options = {
    chart: {
      id: "basic-bar",
      toolbar: {
        show: false,
      }
    },
    xaxis: {
      categories: data.map(d => d.name),
      labels: {
        show: false
      }
    },
    yaxis: {
      show: false,
    },
    tooltip: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    markers: {
      size: [5, 0],
    },
    stroke: {
      colors: ['#0000ff', 'transparent'],
    },
  };
  
  const series = [
    {
      name: "series-1",
      data: data.map(d => d.love)
    },
    {
      name: 'range-holder',
      data: data.map((d, index) => index % 2 === 1 ? 100 : 0)
    }
  ];

  return (
    <div className='progress-chart'>
      <Chart
        options={options}
        series={series}
        type="line"
        width="375"
      />
    </div>
  );
}

export default hot(module)(ProgressChart);
