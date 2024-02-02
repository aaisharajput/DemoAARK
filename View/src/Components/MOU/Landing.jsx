import React, { useEffect } from "react";
import Video from "../MOU/Video";
import style from "./mou.module.css";
// import GetRoute from "../../Container/server";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Landing() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className={style.Body}>
        <Video />
    
        <div className="container">
          <div className={`custom-shape-divider-bottom-1705408108  ${style.customShapeDividerBottom1705408108}`}>
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z"  className={`shape-fill ${style.shapefill}`}></path>
    </svg>
</div>
          <div className="row ">
            <div className="col-sm-12 col-md-4 animation" data-aos="zoom-in">
              <div className={`card ${style.card1}`}>
                <p className={`heading ${style.heading}`}>About Us</p>
                <p>
                  AARK GLOBAL inc. is a Silicon Valley-based Engineering/R&D
                  services firm, with Semicon being our core area of focus.
                </p>
                <p>
                  The team has significant experience in the engineering/
                  implementation of MES/FA system and product development/
                  manufacturing expertise in the Semicon OEM arena.
                </p>
              </div>
            </div>
            <div className="col-sm-12 col-md-4" data-aos="zoom-in">
              <div className={`card ${style.card2}`}>
                <p className={`heading ${style.heading2}`}>STEPP Overview</p>
                <p>
                  Semiconductors Training, Education, and Placement
                  Program(STEPP)
                </p>
                <p>
                  is specially curated internship program for MIET, with an
                  objective to train and recruit final-year students from MIET
                  through 12 months of intensive training covering the
                  Semiconductor space.
                </p>
              </div>
            </div>
            <div className="col-sm-12 col-md-4" data-aos="zoom-in">
              <div className={`card ${style.card3}`}>
                <p className={`heading ${style.heading3}`}>Carrer Paths</p>
                <ul className={style.list}>
                  <li>System Engineer</li>
                  <li>Software Engineer</li>
                  <li>Security Engineer</li>
                  <li>IC Designer</li>
                  <li>DevOps Enginer</li>
                  <li>Quality Engineer</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className={`${style.hr}`} />
        <div className="container">
          <div className="row p-5  d-flex justify-content-between">
            <div className="col-sm-12 col-md-4" data-aos="fade-left">
              <div className={`card  animation ${style.card}`}>
                <div className={`card-content ${style.cardContent}`}>
                  <p className={`card-title ${style.cardTitle}`}>
                    First-time in India
                  </p>
                  <p className={`card-para ${style.cardPara}`}>
                    This unique Semicon internship is started first-time in
                    India.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4" data-aos="fade-down">
              <div className={`card  animation ${style.card}`}>
                <div className={`card-content ${style.cardContent}`}>
                  <p className={`card-title ${style.cardTitle}`}>
                    Work on Cutting-edge Tech
                  </p>
                  <p className={`card-para ${style.cardPara}`}>
                    Chance to build a carrer in the most sophisticated and
                    high-tech field.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4" data-aos="fade-right">
              <div className={`card  animation ${style.card}`}>
                <div className={`card-content ${style.cardContent}`}>
                  <p className={`card-title ${style.cardTitle}`}>
                    Industry-relevant Curriculum
                  </p>
                  <p className={`card-para ${style.cardPara}`}>
                    Drafted by industry experts with 75+ yrs of exp. in the
                    Semicon Space.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 mt-5" data-aos="fade-left">
              <div className={`card  animation ${style.card}`}>
                <div className={`card-content ${style.cardContent}`}>
                  <p className={`card-title ${style.cardTitle}`}>
                    Work On Live Projects
                  </p>
                  <p className={`card-para ${style.cardPara}`}>
                    Gain necessary work exp. with live projects and a fab visit.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 mt-5" data-aos="fade-up">
              <div className={`card  animation ${style.card}`}>
                <div className={`card-content ${style.cardContent}`}>
                  <p className={`card-title ${style.cardTitle}`}>
                    Work In Jammu
                  </p>
                  <p className={`card-para ${style.cardPara}`}>
                    Don't leave your family and friends behind to satisfy your
                    hungry mind.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 mt-5" data-aos="fade-right">
              <div className={`card  animation ${style.card}`}>
                <div className={`card-content ${style.cardContent}`}>
                  <p className={`card-title ${style.cardTitle}`}>
                    Placement Opportunity
                  </p>
                  <p className={`card-para ${style.cardPara}`}>
                    Start your carrer with AARK with sucessful completion of
                    training.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className={`text-center  text-white ${style.Footer}`}>
          <hr className={` mb-5 ${style.hr}`} />
          <div className="p-4 mt-2">
            <p>
              Limited Seats !!! To apply, send your resume to -{" "}
              <a href="">STEPP@aarkglobalinc.com</a> today.
            </p>
            <p>WE ARE LOOKING FOR COMMITTED CANDIDATES ONLY</p>
          </div>
        </footer>
      </div>
    </>
  );
}
