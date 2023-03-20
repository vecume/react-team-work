import React from "react";
import "./SecHeaderContent.scss";

export default function SecHeaderContent({ headerContent, content }) {
  return (
    <>
      <h2 className="sectionHeaderText">{headerContent}</h2>
      <p className="sectionHeaderContent">{content}</p>
    </>
  );
}
