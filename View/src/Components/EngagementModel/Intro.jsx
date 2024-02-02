import React from 'react';
import Css from './Engagement.module.css';
import GetRoute from '../../Container/server';

function Intro() {
  return (
    <>
      <section className={ `my-5 ${Css.aboutsec}`}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className={Css.aboutimg}>
                <img src={GetRoute('/models-scaled.jpg')} alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="about-con title">
                <p></p>
                <p>
                  Rapid advancement in digital technologies, AI/ ML and data is changing everything. Customers today are in an environment where they need to cut costs, save money, and yet innovate. Our value is our ability to cater to these requirements and helping clients achieve these objectives.
                </p>
                <p>
                  Our core team together brings a wide variety of industry experience which translates into a great understanding of what our customers need. So, we are able to develop business solutions very relevant to them and invest ahead in next generation technologies.
                </p>
                <p>&nbsp;</p>
                <p></p>
              </div>
            </div>
            <div className="col-md-12 mt-4">
              <div className="about-con">
                <p></p>
                <p>
                  Our unique engagement model is based on 100% result-oriented approach and is not a cookie cutter because one size does not fit all. Open communication and collaboration are the two key foundational elements that we overemphasize for any successful customer engagement.
                </p>
                <p>
                  While we do engage with our customers in traditional business models like Time and Material (T&amp;M) and fixed time &amp; fee (Fix Bid), in certain instances, we also engage in “tied economics” arrangements with our customers where we align our financial incentives with customer’s successful business outcomes. We are passionate about delivering tangible results for our customers, and this model reinforces our commitment that we succeed only when our customers do.
                </p>
                <p>We work as an extended global team for our customers — It is essentially like customer employees working at our locations.</p>
                <p></p>
              </div>
            </div>
          </div>
        </div>

        <section className="modalSection">
          <div className="container">
            <div className="row justify-content-center mt-5">
              <div className="col-md-12">
                <div className="about-con title text-center">
                  <h1 style={{color:"black"}}>OUR ENGAGEMENT MODEL IN A NUTSHELL</h1>
                  <p style={{textAlign:"center"}}>Deliver the product that our customers have envisioned, and the end customers will love!</p>
                </div>
              </div>
              <div className="col-md-12">
                <div className={Css.aboutimg}>
                  <img src={GetRoute('/steps-img-scaled.jpg')} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default Intro;
