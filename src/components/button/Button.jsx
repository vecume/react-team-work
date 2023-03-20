import React from "react";
import "./Button.scss";

export default function Button({ text = "button", type = "button", isOutline = false }) {
  return (
    <button className={`button ${isOutline ? "button--outline": "button--grey"}`} type={type}>
      {text}
    </button>
  );
}
