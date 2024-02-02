import React from "react";
import Video from "../Video/Video";
import Css from "./carrer.module.css";
import Card from "./Card/Card.jsx";
import GetRoute from "../../Container/server/index.js";

function Career() {
  return (
    <>
      <div>
        <Video videoSource={GetRoute("/careers.mp4")} heading="Careers" />
      </div>
      <section className="careers-sec my-5">
        <div className="container">
          <div className={`w-100 ${Css.careertitle}`}>
            <h6>WE ARE HIRING</h6>
            <div className={Css.careersemail}>
              <h3 style={{ color: "black", fontWeight: "30px" }}>
                Join our team
              </h3>
              <a href="mailto:careers@aarkglobalinc.com" style={{textDecoration:"none"}}>
                <i className="fa-solid fa-envelope" style={{color:"#4a569c"}}></i>
                careers@aarkglobalinc.com
              </a>
            </div>
            <ul>
              <li>Collaborative Environment and Transformational Programs</li>
              <li>Global projects utilizing cutting-edge technologies</li>
              <li>Culture of Teamwork and Rewarding Performance</li>
              <li>No hierarchy- everyone’s voice and opinions counted</li>
              <li>
                Tremendous potential for career growth as Team Leader, Manager,
                and beyond
              </li>
              <li>
                Work closely with a highly experienced and dynamic leadership
                team
              </li>
            </ul>
          </div>
          <div className={`row  ${Css.cardsContainer}`}>
            <Card/>
          </div>
        </div>
      </section>

    </>
  );
}

export default Career;
