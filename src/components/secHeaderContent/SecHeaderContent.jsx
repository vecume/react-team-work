import React from "react";

export default function SecHeaderContent(headerContent, content) {
  return (
    <>
      <h2>{headerContent}</h2>
      <p>{content}</p>
    </>
  );
}
