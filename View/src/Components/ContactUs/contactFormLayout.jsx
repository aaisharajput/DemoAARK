import React from "react";
import GetRoute from '../../Container/server';
import Style from './ContactUs.module.css';
import Form from "./Form";
import ContactState from "../../Context/contactForm/State";

export default function ContactFormLayout() {
  return (
    <>

      <div className="row m-0 mb-2 mt-5">

        <div className={`col-md-6 mt-4 ${Style.ContactImage}`} style={{ objectFit: "cover" }}>
          <img src={GetRoute('/contact.jpg')} alt="" />
          {/* <video autoPlay muted playsInline preload="metadata" className={`mt-4 ${Style.video}`} src={GetRoute('/ContactUS.mp4')} alt="Contact Us" /> */}
        </div>
        <div className="col-md-6  mt-5">
          <div className="text-center">
            <h1 className="fw-bold" >LET'S CONNECT </h1>
          </div>
          <ContactState><Form color="text-dark" /></ContactState>
        </div>
      </div>
    </>
  );
}
