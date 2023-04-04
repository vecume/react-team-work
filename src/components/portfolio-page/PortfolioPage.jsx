import React from "react";
import Text from "./Text";
import { v4 as uuidv4 } from "uuid";
import "./PortfolioPage.scss";
import Img from "./Img";
import Link from "./Link";

export default function PortfolioPage({
  title,
  desc,
  texts,
  link,
  images,
  links,
}) {
  return (
    <div
      className="container"
      style={{ display: "flex", marginTop: 160 + "px" }}
    >
      <div style={{ marginRight: 87 + "px" }}>
        <h2>{title}</h2>
        <p>{desc}</p>
        <div
          style={{ marginBottom: 49 + "px", display: "flex", gap: 21 + "px" }}
        >
          {texts.map((item) =>
            ({ texts } ? <Text text={item.text} key={uuidv4()} /> : "")
          )}
        </div>
        <a href="#">{link}</a>
        <div style={{ display: "flex", gap: 15 + "px" }}>
          {links.map((item) =>
            ({ links } ? <Link link={item.logo} key={uuidv4()} /> : "")
          )}
        </div>
      </div>
      <div style={{ display: "flex", gap: 21 + "px" }}>
        {images.map((item) => (
          <Img img={item.img} key={uuidv4()} />
        ))}
      </div>
    </div>
  );
}
