import React, { useContext, useState } from "react";
import "./Header.scss";
import img1 from "./../../assets/Logo.svg";
import img2 from "./../../assets/full_w_logo.svg";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { LanguageContext } from "../../context/LanguageContext";

export default function Header(children) {
  const [open, setOpen] = useState(false);
  const [burger, setBurger] = useState(false);
  const { language, languages, strings, changeLanguage } =
    useContext(LanguageContext);

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
                  {strings.header.home}
                </a>
              </li>
              <li>
                <a className="header__menu-link" href="#">
                  {strings.header.services}
                </a>
              </li>
              <li>
                <a className="header__menu-link" href="#">
                  {strings.header.portfolio}
                </a>
              </li>
              <li>
                <a className="header__menu-link" href="#">
                  {strings.header.about}
                </a>
              </li>
              <li>
                <a className="header__menu-link" href="#">
                  {strings.header.about}
                </a>
              </li>
              <li
                className="header__trigger"
                onClick={() => {
                  setOpen(!open);
                }}
              >
                <a className="header__menu-link " href="#">
                  {strings.header.lang}
                </a>
                <ul className={`header__drop ${open ? "active" : "inactive"}`}>
                  <li>
                    <button
                      type="button"
                      onClick={() => changeLanguage("uz")}
                      className="header__menu-link btn-lang"
                      href="#"
                    >
                      {strings.languages.uz}
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => changeLanguage("en")}
                      className="header__menu-link btn-lang"
                      href="#"
                    >
                      {strings.languages.en}
                    </button>
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
