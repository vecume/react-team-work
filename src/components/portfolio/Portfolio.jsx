import React from "react";
import "./../portfolio/portfolio.scss";

export default function Portfolio() {
  return (
    <div className="portfolio">
      <h1>
        We form long-term partnerships to create topclass digital products
      </h1>
      <p>
        Incon Ventures is a large and experienced team working with many
        companies at the same time. We look forward to seeing you as one of our
        clients.
      </p>
      <span>our portfolio</span>
      <div className="portfolio__inner">
        <div className="portfolio__content">
          <img src="./img/img-1.png" alt="img-1" />
          <div className="portfolio__content-inner">
            <h2>Festimap</h2>
            <p>
              We completely overhauled the website of the leading Dutch business
              software company. The move to Craft CMS has increased both
              engagement and the amount of demo requests.
            </p>
            <button className="btn-white">DESIGN</button>
            <button className="btn-white">BRANDING</button>
            <button className="btn-white">WEB DEVELOPMENT</button>
            <p className="last-text">Visit website</p>
          </div>
        </div>

        <div className="portfolio__content">
          <div className="portfolio__content-inner">
            <h2>Vormats</h2>
            <p>
              We created an iOS native iPad application to allow the airline
              carriers to perform fully automated drone airplane inspections.
              The project included custom DJI drone integrations and reduces the
              inspection time by 6x.
            </p>
            <button className="btn-white">BRANDING</button>
            <button className="btn-white">MOBILE DEVELOPMENT</button>
            <p> More information</p>
          </div>
          <img src="./../../../img/img-2.png" alt="img-2" />
        </div>

        <div className="portfolio__content">
          <img src="./../../img/img-3.png" alt="img-3" />
          <div className="portfolio__content-inner">
            <h2>Hypofriend</h2>
            <p>
              We revamped an online presence of the leading multilingual content
              service provider, serving 6000+ brands. The transformation
              included the design, development, and back-office integrations.
            </p>
            <button className="btn-white">DESIGN</button>
            <button className="btn-white">BRANDING</button>
            <button className="btn-white">WEB DEVELOPMENT</button>
            <p>Visit website</p>
          </div>
        </div>
        <p className="text">See all works</p>
      </div>
    </div>
  );
}
