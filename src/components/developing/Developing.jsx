import React from "react";
import "./_Developing.scss";

export default function Developing() {
  return (
    <main>
      <div className="container">
        <section className="development-section">
          <div className="left-side">
            <span className="first-development">Web Development</span>
            <span className="second-development">Design Solutions</span>
            <span className="second-development">Digital Marketing</span>
            <span className="second-development">Network Solutions</span>
            <span className="second-development">SMM</span>
            <span className="last-development">All works</span>
          </div>
          <div className="right-side">
            <h3 className="h3-developing">
              Developing solutions backed by the latest technologies
            </h3>
            <div className="line-boxes">
              <span className="line-developing"></span>
              <p className="text-line__developing">Websites</p>
            </div>
            <div className="line-boxes">
              <span className="line-developing"></span>
              <p className="text-line__developing">Webshops</p>
            </div>
            <div className="line-boxes">
              <span className="line-developing"></span>
              <p className="text-line__developing">Landing pages</p>
            </div>
            <div className="line-boxes">
              <span className="line-developing"></span>
              <p className="text-line__developing">Mobile apps</p>
            </div>
            <div className="line-boxes">
              <spBan className="line-developing"></spBan>
              <p className="text-line__developing">Platforms and portals</p>
            </div>
            <div className="line-boxes last-box__line">
              <span className="line-developing"></span>
              <p className="text-line__developing">Dashboards</p>
            </div>
            <div className="image-boxes">
              <img
                src="../../../public/rasm1.png"
                alt="image"
                width="350px"
                height="277px"
              />
              <img
                src="../../../public/rasm2.png"
                alt="image"
                width="350px"
                height="277px"
              />
            </div>
            <div className="image-boxes last-image__boxes">
              <img
                src="../../../public/rasm3.png"
                alt="image"
                width="350px"
                height="277px"
              />
              <img
                src="../../../public/rasm4.png"
                alt="image"
                width="350px"
                height="277px"
              />
            </div>
            <a href="#" className="other-link">Other services</a>
          </div>
        </section>
      </div>
    </main>
  );
}
