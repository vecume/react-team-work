import React from "react";
import "./PrimaryButton.scss";

export default function PrimaryButton({
  text = "button",
  type = "button",
  isOutline = false,
}) {
  return (
    <button
      className={`primary-button ${
        isOutline ? "primary-button--outline" : "primary-button--grey"
      }`}
      type={type}
    >
      {text}
    </button>
  );
}
