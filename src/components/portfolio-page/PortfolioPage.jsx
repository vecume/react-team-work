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
    <div className="container portfolio">
      <div className="portfolio__inner">
        <h2>{title}</h2>
        <p>{desc}</p>
        <div className="portfolio__texts">
          {texts.map((item) =>
            ({ texts } ? <Text text={item.text} key={uuidv4()} /> : "")
          )}
        </div>
        <a href="#">{link}</a>
        <div className="portfolio__links">
          {links.map((item) =>
            ({ links } ? <Link link={item.logo} key={uuidv4()} /> : "")
          )}
        </div>
      </div>
      <div className="portfolio__imgs">
        {images.map((item) => (
          <Img img={item.img} key={uuidv4()} />
        ))}
      </div>
    </div>
  );
}
