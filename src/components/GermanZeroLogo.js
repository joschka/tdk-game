import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { hot } from "react-hot-loader";

import "./GermanZeroLogo.css";

import LogoOneline from "../images/germanZero/logo-oneline.inline.svg";
import LogoTwoline from "../images/germanZero/logo-twoline.inline.svg";
import LogoVertical from "../images/germanZero/logo-vertical.inline.svg";

function GermanZeroLogo(props) {
  const width = null;
  const height = null;

  const type = props.type || "oneline";

  function Logo() {
    if (type === "twoline") {
      return <LogoTwoline width={width} height={height} />;
    }
    if (type === "vertical") {
      return <LogoVertical width={width} height={height} />;
    }

    return <LogoOneline width={width} height={height} />;
  }

  const cssClasses = [
    "german-zero-logo",
    `german-zero-logo--${props.color || "yellow"}`,
  ].join(" ");

  return (
    <div className={cssClasses}>
      {props.linked && (
        <a href="https://www.germanzero.de/" target="_blank" rel="noopener">
          <Logo />
        </a>
      )}
      {!props.linked && <Logo />}
    </div>
  );
}

export default hot(module)(GermanZeroLogo);
