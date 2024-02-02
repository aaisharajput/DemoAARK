import React from "react";
import ReCAPTCHA from 'react-google-recaptcha';
import Style from "./ContactUs.module.css";
import { useContext } from 'react';
import ContactContext from "../../Context/contactForm/Context";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function Form({ color }) {

  const {validationErrors,captchaRef,disabled,userName,bussinessEmail,organization,phoneNo,designation,message,handleChange,handleSubmit,handlePhoneNo}=useContext(ContactContext);
  const { VITE_REACT_APP_SITE_KEY } = import.meta.env;

  return (
    
    <form onSubmit={handleSubmit}>
      <div className="row mt-4 pb-3">
        <div className="col-6">
          <input type="text" className="form-control" placeholder="Name*" value={userName} onChange={handleChange("userName")} />
        </div>
        <div className="col-6">
          <input type="email" className="form-control" placeholder="Bussiness Email*" value={bussinessEmail} onChange={handleChange("bussinessEmail")}/>
        </div>
        <div className="col-6 mt-4">
          <input type="text" className="form-control" placeholder="Organization*" value={organization} onChange={handleChange("organization")}/>
        </div>
        <div className="col-6  mt-4">
          <input type="text" className="form-control" placeholder="Designation" value={designation} onChange={handleChange("designation")}/>
        </div>
        <div className="col-12 mt-4">
        <PhoneInput placeholder="Enter Phone Number" className={Style.number} country={"in"} value={phoneNo} onChange={handlePhoneNo("phoneNo")}/>
        </div>
        <textarea className={`mt-4 form-control ${Style.Message}`} rows="5" placeholder="Your Message Here" value={message} onChange={handleChange("message")}></textarea>

        <div className="col-12 text-center  mt-4 ">
          <input type="checkbox" id="info" name="info" value="info" />
          <label className={color}>
            I would like to receive marketing communication from AARK Global
            Inc.
          </label>
          <div className='formGroup d-flex justify-content-center pt-2'>
          <ReCAPTCHA sitekey={VITE_REACT_APP_SITE_KEY} ref={captchaRef} />
          </div>
        </div>
        <span className= "text-center" style={{ color: "red" }}>
          {validationErrors == "" ? "" : validationErrors}
        </span>

        <div className={` col-12 my-2 text-center mb-2 ${Style.btn}`}>
        {disabled==true?<button className={`btn ${Style.load} ${Style.btn} buttonload`} disabled={disabled}><i className="fa fa-spinner fa-spin"></i></button>: <button type="submit" className={`btn ${Style.apply} ${Style.btn}`} disabled={disabled}>Submit</button>}
        </div>
        <h4 className={`${Style.mail} ${color} text-center`}>
          <i className={`fa fa-envelope mt-3 ${Style.icon}`}></i>
          <a href="mailto:info@aarkglobalinc.com" className={color}>
            info@aarkglobalinc.com
          </a>
        </h4>
      </div>
    </form>
  );
}
