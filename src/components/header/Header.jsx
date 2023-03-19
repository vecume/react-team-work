import React from "react";
import "./Header.scss";
import img1 from "./../../assets/Logo.svg"

export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="header-df">
        <h1>
          <a href="/">
            <img src={img1} alt="Logo" />
          </a>
        </h1>

        <nav>
          <ul>
            <li> <a href="#">Home</a></li>
            <li> <a href="#">Services</a></li>
            <li> <a href="#">Portfolio</a></li>
            <li> <a href="#">About</a></li>
            <li> <a href="#">Contact</a></li>
            <li>English</li>
          </ul>
        </nav>
        </div>
        
      </div>
    </header>
  );
}
