import React from 'react';
import "./TitleWithLine.scss";

export default function TitleWithLine({heading}) {
  return (
    <div className="title-with-line">
      <span className="title-line"></span>
      <h3>{heading}</h3>
      <span className="title-line"></span>
    </div>
  )
}
