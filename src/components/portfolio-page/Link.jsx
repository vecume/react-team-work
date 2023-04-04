import React from "react";
import Img from "./Img";

export default function Link({ link }) {
  return (
    <a href="#">
      <Img img={link} width={20 + "px"} height={24 + "px"} />
    </a>
  );
}
