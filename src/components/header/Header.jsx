import React from "react";
import "../header/Header";
import "./_Header.scss";

export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="header-content">
          <h2 className="h2-header">Business Support & HR Solutions</h2>
          <p className="info-header">
            Incon Ventures business support services is managed by industry
            professionals who bring high degree of administrative, are rational
            strategies and customer support centric-skills to manage simple to
            complex business process support services for our customers
            globally.
          </p>
          <a href="#" className="link-header">
            Discover all
          </a>
        </div>
      </div>
    </header>
  );
}