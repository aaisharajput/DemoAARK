import React from "react";
import Videocss from "../../Video/Video.module.css";
import GetRoute from "../../../Container/server";
import css from './videocareer.module.css'

export default function Video({videosrc,title}) {
  return (
    <>
      <section className={Videocss.breadcumb}>
        <div className={Videocss.videobanner}>
          <video autoPlay muted loop playsInline preload="metadata">
            <source src={videosrc} type="video/mp4" />
          </video>
        </div>
        <div className={Videocss.breadcumbBannerCon}>
          <div className="container">
            <div className={Videocss.mainBannerCon}>
              <h2>{title}</h2>
            </div>
            <div className={css.bannershape}>
              <img src={GetRoute("/shape.png")} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
