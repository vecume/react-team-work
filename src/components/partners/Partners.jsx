import React from "react";
import Clients from "../our_clients/Clients";
import TitleWithLine from "../title-with-line/TitleWithLine";
import "./Partners.scss";
import "../our_clients/Clients.scss";
import XalqBanki from "/img/xalqBanki.svg";
import IpotekaBank from "/img/ipotekaBank.svg";
import Plastherm from "/img/plastherm.svg";
import UNG from "/img/ung.svg";
import Hamkorbank from "/img/hamkorbank.svg";

export default function Partners() {
  return (
    <div className="partners">
      <h2 className="partners__title">
        We like to call these companies our partners
      </h2>
      <TitleWithLine heading="our partners" />
      <Clients />
      <div className="clients partners__items">
        <div>
          <img src={UNG} alt="UNG" />
        </div>
        <div>
          <img src={Hamkorbank} alt="Hamkorbank" />
        </div>
        <div>
          <img src={IpotekaBank} alt="Ipoteka Bank" />
        </div>
        <div>
          <img src={XalqBanki} alt="Xalq Banki" />
        </div>
        <div>
          <img src={Plastherm} alt="Plastherm" />
        </div>
      </div>
    </div>
  );
}
