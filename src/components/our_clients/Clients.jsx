import React from "react";
import "./Clients.scss";
import XalqBanki from "/img/xalqBanki.svg";
import IpotekaBank from "/img/ipotekaBank.svg";
import Plastherm from "/img/plastherm.svg";
import UNG from "/img/ung.svg";
import Hamkorbank from "/img/hamkorbank.svg";

export default function Clients() {
  return (
    <div className="clients">
      <div>  
        <img src={XalqBanki} alt="Xalq Banki" />
      </div>
      <div>
        <img src={IpotekaBank} alt="Ipoteka Bank" />
      </div>
      <div>
        <img src={Plastherm} alt="Plastherm" />
      </div>
      <div>
        <img src={UNG} alt="UNG" />
      </div>
      <div>
        <img src={Hamkorbank} alt="Hamkorbank" />
      </div>
    </div>
  );
}
