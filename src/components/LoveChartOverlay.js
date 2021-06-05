import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { hot } from "react-hot-loader";

import "./LoveChartOverlay.css";

function LoveChartOverlay(props) {
  const dispatch = useDispatch();

  const records = props.records || useSelector((state) => state.records);
  const currentLove = props.love || useSelector((state) => state.love);
  const duration = useSelector((state) => state.clock.duration);
  const tick = props.tick || useSelector((state) => state.clock.tick);

  // Wie viele Beliebtheit-Datenpunkte auf der X-Achse?
  const visibleTicks = 50;

  const width = 100;
  const height = 34;

  // Bei wie viel Prozent Beliebtheit die horizontale Linie?
  const thresholdPercentage = 35;

  const positiveColor = "#a3d869";
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

  const formattedLabel = `${Math.round(currentLove)}%`;

  function renderChart() {
    return (
      <div className="love-chart-overlay__svg-container">
        <div className="love-chart-overlay__slide" style={slideStyle}>
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
              stroke="#000"
              strokeLinejoin="round"
              strokeLinecap="round"
              transform="translate(0.5,0.5)"
              clipPath="url(#show-top-only)"
            />
            <path
              d={d}
              fill="transparent"
              strokeWidth="3"
              stroke={positiveColor}
              strokeLinejoin="round"
              strokeLinecap="round"
              clipPath="url(#show-top-only)"
            />
            <path
              d={d}
              fill="transparent"
              strokeWidth="3"
              stroke="#000"
              strokeLinejoin="round"
              strokeLinecap="round"
              transform="translate(0.5,0.5)"
              clipPath="url(#show-bottom-only)"
            />
            <path
              d={d}
              fill="transparent"
              strokeWidth="3"
              stroke={negativeColor}
              strokeLinejoin="round"
              strokeLinecap="round"
              clipPath="url(#show-bottom-only)"
            />
            <line
              x1="0"
              y1={thresholdY}
              x2={slideWidth}
              y2={thresholdY}
              strokeWidth="1"
              stroke="#fff"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ opacity: 1 }}
            />
          </svg>
        </div>
      </div>
    );
  }

  const opts = {
    className: ["love-chart-overlay", `love-chart-overlay--${props.size}`].join(
      " "
    ),
  };

  return <div {...opts}>{renderChart()}</div>;
}

export default hot(module)(LoveChartOverlay);
