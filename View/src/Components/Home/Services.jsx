import React, { useState } from "react";
import homecss from "./home.module.css";
import GetRoute from "../../Container/server";
import Offers from "../Service/ServiceOffers/offers";


const Services = () => {

  return (
    <>
   <div className={homecss.main}>
   <div className={homecss.video}>
        <video autoPlay muted loop playsInline preload="metadata">
          <source
            src={GetRoute("/videoplayback.mp4")}
            type="video/mp4"
          />
        </video>
      </div>
      <div className={`container ${homecss.offers}`}>
        <h1 className="text-center fw-bold">SERVICES WE PROVIDE</h1>

      <Offers color="#fff"/>
      </div>
   </div>
      

    </>
  );
};

export default Services;

