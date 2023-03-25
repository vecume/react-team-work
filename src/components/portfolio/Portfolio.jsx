import React from "react";
import "./../portfolio/portfolio.scss";

import img1 from "./../../img/img-1.png";
import img2 from "./../../img/img-2.png";
import img3 from "./../../img/img-3.png";

export default function Portfolio() {
  return (
    <div className="portfolio">
      <h1 className="portfolio__text">
        We form long-term partnerships to create topclass digital products
      </h1>
      <p className="portfolio__text1">
        Incon Ventures is a large and experienced team working with many
        companies at the same time. We look forward to seeing you as one of our
        clients.
      </p>

      <div className="portfolio__inner">
        <div className="portfolio__content">
          <img className="portfolio__content-img" src={img1} />
          <div className="portfolio__content-inner">
            <h2 className="portfolio__content-inner-title">Festimap</h2>
            <p className="portfolio__content-inner-text">
              We completely overhauled the website of the leading Dutch business
              software company. The move to Craft CMS has increased both
              engagement and the amount of demo requests.
            </p>
            <button className="portfolio__content-inner-btn">DESIGN</button>
            <button className="portfolio__content-inner-btn">BRANDING</button>
            <button className="portfolio__content-inner-btn">
              WEB DEVELOPMENT
            </button>
            <p className="portfolio__content-inner-word">Visit website</p>
          </div>
        </div>

        <div className="portfolio__content">
          <div className="portfolio__content-inner">
            <h2 className="portfolio__content-inner-title">Vormats</h2>
            <p className="portfolio__content-inner-text">
              We created an iOS native iPad application to allow the airline
              carriers to perform fully automated drone airplane inspections.
              The project included custom DJI drone integrations and reduces the
              inspection time by 6x.
            </p>
            <button className="portfolio__content-inner-btn">BRANDING</button>
            <button className="portfolio__content-inner-btn">
              MOBILE DEVELOPMENT
            </button>
            <p> More information</p>
          </div>
          <img className="portfolio__content-img" src={img2} alt="img-2" />
        </div>

        <div className="portfolio__content">
          <img className="portfolio__content-img" src={img3} alt="img-3" />
          <div className="portfolio__content-inner">
            <h2 className="portfolio__content-inner-title">Hypofriend</h2>
            <p className="portfolio__content-inner-text">
              We revamped an online presence of the leading multilingual content
              service provider, serving 6000+ brands. The transformation
              included the design, development, and back-office integrations.
            </p>
            <button className="portfolio__content-inner-btn">DESIGN</button>
            <button className="portfolio__content-inner-btn">BRANDING</button>
            <button className="portfolio__content-inner-btn">
              WEB DEVELOPMENT
            </button>
            <p>Visit website</p>
          </div>
        </div>
        <p className="portfolio__inner-text">See all works</p>
      </div>
    </div>
  );
}
