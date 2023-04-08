import React from "react";
import "./SecHeaderContent.scss";

export default function SecHeaderContent({ headerContent, content }) {
  return (
    <>
      <h2 className="section-header-text">{headerContent}</h2>
      <p className="section-header-content">{content}</p>
    </>
  );
}
