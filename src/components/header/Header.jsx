import React, { useState } from "react";
import "./Header.scss";
import img1 from "./../../assets/Logo.svg";
import img2 from "./../../assets/full_w_logo.svg";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [burger, setBurger] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="header__df">
          <h1>
            <a href="/">
              <img src={img1} alt="Logo" />
            </a>
          </h1>

          <nav className="header__nav">
            <ul
              className={
                burger ? ["header__ul", "active"].join(" ") : ["header__ul"]
              }
            >
              <p className="header__mobile-logo">
                <a href="/">
                  <img src={img2} alt="Logo" />
                </a>
              </p>
              <li>
                <a className="header__menu-link" href="#">
                  Home
                </a>
              </li>
              <li>
                <a className="header__menu-link" href="#">
                  Services
                </a>
              </li>
              <li>
                <a className="header__menu-link" href="#">
                  Portfolio
                </a>
              </li>
              <li>
                <a className="header__menu-link" href="#">
                  About
                </a>
              </li>
              <li>
                <a className="header__menu-link" href="#">
                  Contact
                </a>
              </li>
              <li
                className="header__trigger"
                onClick={() => {
                  setOpen(!open);
                }}
              >
                <a className="header__menu-link " href="#">
                  Lang
                </a>
                <ul className={`header__drop ${open ? "active" : "inactive"}`}>
                  <li>
                    <a className="header__menu-link" href="#">
                      Eng
                    </a>
                  </li>
                  <li>
                    <a className="header__menu-link" href="#">
                      Ru
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <div
              onClick={() => setBurger(!burger)}
              className="header__mobile-btn"
            >
              {burger ? (
                <AiOutlineClose size={25} />
              ) : (
                <AiOutlineMenu size={25} />
              )}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
