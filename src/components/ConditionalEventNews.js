import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { hot } from "react-hot-loader";

import "./ConditionalEventNews.css";

import news1 from "../images/news/21_05_ILLU_Schlagzeile_Varianten_01_XS.png";
import news2 from "../images/news/21_05_ILLU_Schlagzeile_Varianten_02_XS.png";
import news3 from "../images/news/21_05_ILLU_Schlagzeile_Varianten_03_XS.png";
import news4 from "../images/news/21_05_ILLU_Schlagzeile_Varianten_04_XS.png";
import news5 from "../images/news/21_05_ILLU_Schlagzeile_Varianten_05_XS.png";
import news6 from "../images/news/21_05_ILLU_Schlagzeile_Varianten_06_XS.png";
import news7 from "../images/news/21_05_ILLU_Schlagzeile_Varianten_07_XS.png";
import news8 from "../images/news/21_05_ILLU_Schlagzeile_Varianten_08_XS.png";

function ConditionalEventNews({ newsId, title, text, newspaper, onClick }) {
  function NewsImage() {
    if (newsId === 1)
      return <img src={news1} className="conditional-event-news__image" />;
    if (newsId === 2)
      return <img src={news2} className="conditional-event-news__image" />;
    if (newsId === 3)
      return <img src={news3} className="conditional-event-news__image" />;
    if (newsId === 4)
      return <img src={news4} className="conditional-event-news__image" />;
    if (newsId === 5)
      return <img src={news5} className="conditional-event-news__image" />;
    if (newsId === 6)
      return <img src={news6} className="conditional-event-news__image" />;
    if (newsId === 7)
      return <img src={news7} className="conditional-event-news__image" />;
    if (newsId === 8)
      return <img src={news8} className="conditional-event-news__image" />;
  }

  return (
    <div className="conditional-event-news" onClick={onClick}>
      {newsId && <NewsImage />}
      {!newsId && (
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
      )}
    </div>
  );
}

export default hot(module)(ConditionalEventNews);
