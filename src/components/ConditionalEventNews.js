import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { hot } from "react-hot-loader";

import "./ConditionalEventNews.css";

function ConditionalEventNews({ title, text, newspaper, onClick }) {
  return (
    <div className="conditional-event-news" onClick={onClick}>
      <div className="conditional-event-news__content">
        <div className="conditional-event-news__blocker" />
        <div
          className="conditional-event-news__title"
          dangerouslySetInnerHTML={{
            __html: title,
          }}
        ></div>
        <div
          className="conditional-event-news__text"
          dangerouslySetInnerHTML={{
            __html: text,
          }}
        ></div>
      </div>
    </div>
  );
}

export default hot(module)(ConditionalEventNews);
