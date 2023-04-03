import React from 'react';
import "./Title_With_Line.scss";

export default function Title_With_Line({heading}) {
  return (
    <div className="title-with-line">
      <span className="title-line"></span>
      <h3>{heading}</h3>
      <span className="title-line"></span>
    </div>
  )
}
