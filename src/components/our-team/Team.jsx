import React from "react";
import "./Team.scss";

export default function Team() {
  return (
    <div className="people">
      <div className="person">
        <img src="/sardor.jpg" alt="Sardor" width={"64"} height={"64px"} />
        <div className="person_info">
          <h6 className="person_name">Sardor Sadatov</h6>
          <p className="person_work-name">Founder & CEO</p>
        </div>
      </div>
      <div className="person">
        <img
          className="person_img"
          src="/firdavs.png"
          alt="firdavs"
          width={"64"}
          height={"64px"}
        />
        <div className="person_info">
          <h6 className="person_name">Firdavs Choriyev</h6>
          <p className="person_work-name">Senior Web Developer</p>
        </div>
      </div>
      <div className="person">
        <img
          className="person_img"
          src="/javohir.png"
          alt="javohir"
          width={"64"}
          height={"64px"}
        />
        <div className="person_info">
          <h6 className="person_name">Javohir Niyazov</h6>
          <p className="person_work-name">Web Designer</p>
        </div>
      </div>
      <div className="person">
        <img
          className="person_img"
          src="/ahror.png"
          alt="ahror"
          width={"64"}
          height={"64px"}
        />
        <div className="person_info">
          <h6 className="person_name">Jo‘rayev Ahror</h6>
          <p className="person_work-name">Marketing Director</p>
        </div>
      </div>
      <div className="person">
        <img
          className="person_img"
          src="/bart.png"
          alt="bart"
          width={"64"}
          height={"64px"}
        />
        <div className="person_info">
          <h6 className="person_name">Bart Dunweg</h6>
          <p className="person_work-name">Digital Designer</p>
        </div>
      </div>
      <div className="person">
        <img
          className="person_img"
          src="/geluk.png"
          alt="geluk"
          width={"64"}
          height={"64px"}
        />
        <div className="person_info">
          <h6 className="person_name">Marysia Geluk</h6>
          <p className="person_work-name">FOffice Manager</p>
        </div>
      </div>
      <div className="person">
        <img
          className="person_img"
          src="/sarvar.png"
          alt="sarvar"
          width={"64"}
          height={"64px"}
        />
        <div className="person_info">
          <h6 className="person_name">Sarvarbek Abdupattoyev</h6>
          <p className="person_work-name">Web Designer</p>
        </div>
      </div>
      <div className="person">
        <img
          className="person_img"
          src="/dilshod.png"
          alt="dilshod"
          width={"64"}
          height={"64px"}
        />
        <div className="person_info">
          <h6 className="person_name">Dilshod Sattorov</h6>
          <p className="person_work-name">Social Media Specialist</p>
        </div>
      </div>
      <div className="person">
        <img
          className="person_img"
          src="/muzaffar.png"
          alt="muzaffar"
          width={"64"}
          height={"64px"}
        />
        <div className="person_info">
          <h6 className="person_name">Muzaffar Donayev</h6>
          <p className="person_work-name">Backend Developer</p>
        </div>
      </div>
    </div>
  );
}
