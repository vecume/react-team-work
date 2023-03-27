import React from "react";
import "./Footer.scss";
import logo from "./../../assets/full_w_logo.svg";
import link1 from "./../../assets/Facebook.svg";
import link2 from "./../../assets/Instagram.svg";
import link3 from "./../../assets/Twitter.svg";
import link4 from "./../../assets/Vector.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__text__box">
          <h2 className="footer__text__box_h2">Let's talk about your next business challenge</h2>
          <p  className="footer__text__box_p">We're ready to be part of your adventure.</p>
          <button className="footer__text__box__btn">Get in touch</button>
        </div>

        <span className="footer__line__span"></span>

        <div className="footer__box">
          <div className="footer__box__part-1">
            <h1>
              <a href="/">
                <img src={logo} alt="logo" />
                <p>© 2020 Incon Ventures All rights reserved.</p>
              </a>
            </h1>
          </div>

          <div className="footer__box__part-2">
            <h2>Visit us</h2>
            <p>Muminova 7/15, Mirzo Ulugbek d. Tashkent, Uzbekistan </p>
          </div>

          <div className="footer__box__part-3">
            <h2>Get in contact</h2>
            <p>+998 90 805 51 95 info@inconventures.com</p>
          </div>

          <div className="footer__box__part-4">
            <h2>Follow us</h2>
            <ul>
              <li>
                <a href="#">
                  <img src={link1} alt="link" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={link2} alt="link" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={link3} alt="link" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={link4} alt="link" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
