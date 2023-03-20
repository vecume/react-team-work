import React from "react";
import Button from "../button/Button";
import "./HeroBanner.scss";

export default function HeroBanner({ title, desc, isSmall, buttons }) {
  return (
    <section className={`hero-banner ${isSmall ? "hero-banner--small" : ""}`}>
      <div className="hero-banner__content container">
        <h2 className="hero-banner__title">{title}</h2>
        <p className="hero-banner__desc">{desc}</p>
        {buttons
          ? buttons.map((item) => (
              <Button
                key={item.id}
                text={item.text}
                isOutline={item.isOutline}
              />
            ))
          : ""}
      </div>
    </section>
  );
}
