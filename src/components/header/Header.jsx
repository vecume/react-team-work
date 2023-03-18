import React from "react";
import "./Header.scss";
import img1 from "./../../assets/Logo.svg"

export default function Header() {
  return (
    <header>
      <div className="container">
        <h1>
          <a href="/">
            <img src={img1} alt="Logo" />
          </a>
        </h1>
      </div>
    </header>
  );
}
