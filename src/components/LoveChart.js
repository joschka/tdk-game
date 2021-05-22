import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { hot } from "react-hot-loader";

import "./LoveChart.css";

function LoveChart(props) {
  const dispatch = useDispatch();

  const records = props.records || useSelector((state) => state.records);
  const currentLove = props.love || useSelector((state) => state.love);
  const duration = useSelector((state) => state.clock.duration);
  const tick = useSelector((state) => state.clock.tick);

  // Wie viele Beliebtheit-Datenpunkte auf der X-Achse?
  const visibleTicks = 50;

  const width = 100;
  const height = 60;

  // Bei wie viel Prozent Beliebtheit die horizontale Linie?
  const thresholdPercentage = 35;

  const positiveColor = "#2cbd9e";
  const negativeColor = "#f3241c";

  const thresholdY = (100 - thresholdPercentage) * height * 0.01;
  const yFactor = height * 0.01;
  const xFactor = width / visibleTicks / 2;
  const slideWidth = (duration / visibleTicks) * (0.5 * width) + width;
  const slideStep = (100 - (width / slideWidth) * 100) / duration;

  const d = records
    .map((r, i) => {
      const pathCommand = i === 0 ? "M" : "L";
      const x = (i + visibleTicks) * xFactor;
      const y = height - r.love * yFactor;
      return [pathCommand, [x, y].join(",")].join(" ");
    })
    .join(" ");

  const svgStyle = {
    width: "100%",
    height: "100%",
  };

  const slideStyle = {
    width: `${slideWidth}%`,
    transform: `translateX(-${tick * slideStep}%)`,
  };

  const formattedLabel = `${currentLove}%`;

  function renderChart() {
    return (
      <div className="love-chart__svg-container">
        <div className="love-chart__slide" style={slideStyle}>
          <svg
            width={slideWidth}
            height={height}
            viewBox={`0 0 ${slideWidth} ${height}`}
            preserveAspectRatio="xMidYMid meet"
            style={svgStyle}
          >
            <defs>
              <clipPath id="show-top-only">
                <rect x="0" y="0" width={slideWidth} height={thresholdY} />
              </clipPath>

              <clipPath id="show-bottom-only">
                <rect
                  x="0"
                  y={thresholdY}
                  width={slideWidth}
                  height={thresholdPercentage * height * 0.01}
                />
              </clipPath>
            </defs>

            <path
              d={d}
              fill="transparent"
              strokeWidth="3"
              stroke={positiveColor}
              clipPath="url(#show-top-only)"
            />
            <path
              d={d}
              fill="transparent"
              strokeWidth="3"
              stroke={negativeColor}
              clipPath="url(#show-bottom-only)"
            />
            <line
              x1="0"
              y1={thresholdY}
              x2={slideWidth}
              y2={thresholdY}
              strokeWidth="1"
              stroke="#111111"
            />
          </svg>
        </div>
      </div>
    );
  }

  function renderHeart() {
    const color =
      currentLove >= thresholdPercentage ? positiveColor : negativeColor;
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -256 1850 1850"
        className="love-chart__heart"
      >
        <g transform="matrix(1,0,0,-1,37.966102,1343.4237)">
          <path
            fill={color}
            d="m 896,-128 q -26,0 -44,18 L 228,492 q -10,8 -27.5,26 Q 183,536 145,583.5 107,631 77,681 47,731 23.5,802 0,873 0,940 q 0,220 127,344 127,124 351,124 62,0 126.5,-21.5 64.5,-21.5 120,-58 55.5,-36.5 95.5,-68.5 40,-32 76,-68 36,36 76,68 40,32 95.5,68.5 55.5,36.5 120,58 64.5,21.5 126.5,21.5 224,0 351,-124 127,-124 127,-344 0,-221 -229,-450 L 940,-110 q -18,-18 -44,-18"
          />
        </g>
      </svg>
    );
  }

  const opts = {
    className: ["love-chart", `love-chart--${props.size}`].join(" "),
  };

  return (
    <div {...opts}>
      {props.size !== "small" && renderChart()}

      <div className="love-chart__label">
        {renderHeart()}
        {formattedLabel}
      </div>
    </div>
  );
}

export default hot(module)(LoveChart);
