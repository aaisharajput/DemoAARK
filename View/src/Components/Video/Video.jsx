import React from "react";
import Videocss from './Video.module.css'
export default function Video({ videoSource, heading }) {
  return (
    <>
      <section className={Videocss.breadcumb}>
        <div className={Videocss.videobanner}>
          <video autoPlay muted loop playsInline preload="metadata">
            <source src={videoSource} type="video/mp4" />
          </video>
        </div>
        <div className={Videocss.breadcumbBannerCon}>
          <div className="container">
            <div className={Videocss.mainBannerCon}>
              <h2>{heading}</h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
