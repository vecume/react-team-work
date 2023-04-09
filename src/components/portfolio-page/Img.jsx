import React from "react";

export default function Img({ img, width, height }) {
  return <img src={img} alt="img" width={width} height={height} />;
}
