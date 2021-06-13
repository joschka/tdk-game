import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { hot } from "react-hot-loader";

import "./ShareOption.css";

import IconTwitter from "../images/twitter.inline.svg";
import IconFacebook from "../images/facebook.inline.svg";
import IconEmail from "../images/email.inline.svg";
import IconCopy from "../images/copy.inline.svg";

import track from "../track";

function ShareOption({ type, text, url = null, subject }) {
  const dispatch = useDispatch();

  const encodedText = encodeURIComponent(text);

  function Icon() {
    switch (type) {
      case "twitter":
        return <IconTwitter />;
      case "facebook":
        return <IconFacebook />;
      case "email":
        return <IconEmail />;
      case "copy":
        return <IconCopy />;
    }
  }

  function href() {
    switch (type) {
      case "twitter":
        return `https://twitter.com/intent/tweet?text=${encodedText}`;
      case "facebook":
        return `https://www.fb.com/sharer/sharer.php?u=${url}&amp;quote=${encodedText}`;
      case "email":
        return `mailto:?body=${encodedText}&subject=${subject}`;
      case "copy":
        return "#";
    }
  }

  function copyToClipboard() {
    const el = document.createElement("textarea");
    el.value = url;
    el.setAttribute("readonly", "");
    el.style.position = "absolute";
    el.style.left = "-9999px";
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    console.log("copied");
    track("G7K3QXRO")();
  }

  function onClick() {
    switch (type) {
      case "twitter":
        return track("XNGTLEKN")();
      case "facebook":
        return track("VSHGQSL5")();
      case "email":
        return track("TGTTTH5R")();
    }
  }

  return (
    <>
      {type !== "copy" && (
        <a
          onClick={onClick}
          target="_blank"
          rel="noopener"
          href={href()}
          className="share-option"
        >
          <Icon />
        </a>
      )}

      {type === "copy" && (
        <button className="share-option" onClick={copyToClipboard}>
          <Icon />
        </button>
      )}
    </>
  );
}

export default hot(module)(ShareOption);
