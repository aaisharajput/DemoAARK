import React from "react";
import aboutcss from './About.module.css'
import GetRoute from "../../Container/server";

export default function Intro() {
  return (
    <>
      <div className="row align-items-center py-4">
        <div className={`col-md-6 ${aboutcss.aboutimg}`}>
          <img src={GetRoute('/about-us.jpg')} alt="" />
        </div>
        <div className={`col-md-6 ${aboutcss.aboutcon} ${aboutcss.title}`}>
          <p>
            AARK Global is an Engineering Innovation partner for companies
            spanning Industrial, Manufacturing, Technology, FinTech,
            Semiconductors, SaaS providers, Healthcare, Insurance to name a few.
            We develop custom products and integrated solutions, with a maniacal
            focus on timeliness, quality, and superior user experience.
          </p>
        </div>
      </div>
    </>
  );
}
