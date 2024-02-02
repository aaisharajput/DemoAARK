import React from "react";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedin,
  faYoutube,
  
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import css from './footercss.module.css'

export default function Footer() {
  return (
    <>
      {/* Footer */}
      <footer className="text-center text-lg-start text-black " style={{ backgroundColor: '#fff'}}>
        
        {/* Section: Links */}
        <section className="py-4">
      <div className="container text-center text-md-start mt-2 ">
        {/* Grid row */}
        <div className="row mt-3">
          {/* Grid column */}
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-1">
            {/* social-links */}
            <h6 className="text-uppercase fw-bold mb-4 text-center pb-1" style={{borderBottom:"2px solid black"}}>Social Links</h6>
            {/* <hr className="mb-2 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} /> */}
            <div>
            <a href="https://www.linkedin.com/company/aarkglobalinc/" className="text-white me-3">
              <FontAwesomeIcon icon={faLinkedin} style={{color:"#0A66C2", fontSize:"23px"}}/>
            </a>
            <a href="https://www.facebook.com/aarkglobalinc" className="text-white me-3" >
              <FontAwesomeIcon icon={faFacebookF} style={{color:"#4267B2", fontSize:"23px"}}/>
            </a>
            <a href="https://twitter.com/AarkGlobalInc" className="text-white me-3">
              <FontAwesomeIcon icon={faTwitter} style={{color:"#1DA1F2", fontSize:"23px"}}/>
            </a>
            
            <a href="https://www.instagram.com/aarkglobalinc/" className="text-white me-3">
              <FontAwesomeIcon icon={faInstagram} style={{color:"#E1306C", fontSize:"23px"}}/>
            </a>
            
            <a href="https://www.youtube.com/@aarkglobalinc" className="text-white me-3">
              <FontAwesomeIcon icon={faYoutube} style={{color:"#CD201F", fontSize:"23px"}}/>
            </a>
          </div>
          </div>
          {/* Grid column */}

          {/* Grid column */}
          <div className="col-md-2 col-lg-4 col-xl-4 mx-auto mb-1">
      {/* Links */}
      <h6 className="text-uppercase fw-bold text-center mb-4 pb-1" style={{borderBottom:"2px solid black"}}>Services</h6>
      {/* <hr className="mb-2 mt-0 d-inline-block mx-auto " style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px'}} /> */}

      {/* Flex container for the paragraphs */}
      <div className={css.flexContainer}>
        <ul>
        <li className={css.para}>
          <a href="/service/software-product-engineering"  style={{ textDecoration: 'none' }}>Software Product Engineering</a>
        </li>
        <li className={css.para}>
          <a href="/service/hardware-product-engineering"  style={{ textDecoration: 'none' }}>Hardware Product Engineering</a>
        </li>
        <li className={css.para}>
          <a href="/service/cloud-platform-engineering"  style={{ textDecoration: 'none' }}>Cloud Platform Engineering</a>
        </li>
        </ul>
        <ul>
        
        <li className={css.para}>
          <a href="/service/cognitive-solution"  style={{ textDecoration: 'none' }}>Cognitive Solutions</a>
        </li>
        <li className={css.para}>
          <a href="/service/salesforce-crm" style={{ textDecoration: 'none' }}>Salesforce CRM</a>
        </li>
        </ul>
      </div>

    
    </div>
          {/* Grid column */}

          {/* Grid column */}
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mb-1">
            {/* Links */}
            <h6 className="text-uppercase fw-bold text-center mb-4 pb-1" style={{borderBottom:"2px solid black"}}>Quick links</h6>
            {/* <hr className="mb-2 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} /> */}
            <div className={css.flexContainer}>
              <ul>
              <li className={css.para}>
              <a href="/"  style={{textDecoration:'none'}}>Home</a>
            </li>
            <li className={css.para}>
              <a href="/about"  style={{textDecoration:'none'}}>About Us</a>
            </li>
            <li className={css.para}>
              <a href="/contact"  style={{textDecoration:'none'}}>Contact Us</a>
            </li>
            
              </ul>
              <ul>
              <li className={css.para}>
              <a href="/service"  style={{textDecoration:'none'}}>Service Offerings</a>
            </li>
            <li className={css.para}>
              <a href="/engagement"  style={{textDecoration:'none'}}>Engagement Model</a>
            </li>
            <li className={css.para}>
              <a href="/careers"  style={{textDecoration:'none'}}>Careers</a>
            </li>
              </ul>
            </div>
            
          </div>
          {/* Grid column */}

          {/* Grid column */}
          <div className="col-md-4 col-lg-2 col-xl-2 mx-auto mb-md-0 mb-1">
            {/* Links */}
            <h6 className="text-uppercase fw-bold mb-4 text-center pb-1" style={{borderBottom:"2px solid black"}}>Contact</h6>
            {/* <hr className="mb-2 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} /> */}
            {/* <p><i className="fas fa-home mr-3"></i> New York, NY 10012, US</p> */}
            <a href="mailto:info@aarkglobalinc.com" className={css.mail_a}><p style={{fontSize:"15px"}}><i className="fas fa-envelope mr-3" style={{color:"#4a569c"}}></i> info@aarkglobalinc.com</p></a>
            {/* <p><i className="fas fa-phone mr-3"></i> + 01 234 567 88</p> */}
            {/* <p><i className="fas fa-print mr-3"></i> + 01 234 567 89</p> */}
          </div>
          {/* Grid column */}
        </div>
        {/* Grid row */}
      </div>
    </section>
        {/* Section: Links */}
        {/* Copyright */}
        <div className="text-center p-3 text-white" style={{ backgroundColor: '#1f2357' }}>
         <p className="p-0 m-0"> © 2023 AARK Global - All rights reserved</p>
          
        </div>
        {/* Copyright */}
      </footer>
      {/* Footer */}
    </>
  );
}
