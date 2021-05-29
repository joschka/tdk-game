import React from "react";
import { hot } from "react-hot-loader";

import "./Text.css";

function Text({ text, position, onClick }) {
  const cssClasses = ["text", `text--${position}`].join(" ");

  return (
    <div className={cssClasses} onClick={onClick}>
      <div
        className="text__content"
        dangerouslySetInnerHTML={{
          __html: text,
        }}
      ></div>
    </div>
  );
}

export default hot(module)(Text);
