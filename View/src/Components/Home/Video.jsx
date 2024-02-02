import React from 'react'
import GetRoute from '../../Container/server'
import homecss from './home.module.css'
import videocss from '../Video/Video.module.css'

export default function Video() {
  return (
    <>
      <section className={homecss.videobanner}>
      <video autoPlay muted loop playsInline preload="metadata">
        <source src={GetRoute('/home-page.mp4')} type="video/mp4" />
      </video>

      <div className={`${homecss.breadcumbBannerCon} ${homecss.sliderCaption}`}>
        <div className="sliderCaptioninner">
          <div className="main-banner-con-sec">
            <div className="container">
                  <div className={homecss.mainbannercon}>
                    <div className="inner-banner">
                      <h6>Welcome To</h6>
                      <h2 className={homecss.mainbannercon}>AARK Global</h2>
                      <p>Renew your focus on engineering innovation</p>
                      <a href="/about" className={`mt-2 btn ${homecss.btn}`} tabIndex="0" >
                        LEARN MORE
                      </a>
                    </div>
                </div>
            </div>
          </div>

          <div className={homecss.bannersliderbtns}>
            <div className="container">
              <div className="row">
                <div className="col-md-3 btn-slider-item">
                  <div className={homecss.btnsliderimg}>
                    <img src={GetRoute('/frugal-scaled-1.jpg')} alt="" />
                  </div>
                  <div className={homecss.sliderbtncon}>
                    <h3>Focus on Core</h3>
                  </div>
                </div>
                <div className="col-md-3 btn-slider-item">
                  <div className={homecss.btnsliderimg}>
                    <img src={GetRoute('/service-box-image-1.jpg')} alt="" />
                  </div>
                  <div className={homecss.sliderbtncon}>
                    <h3>Frugal Innovation at Scale</h3>
                  </div>
                </div>
                <div className="col-md-3 btn-slider-item">
                  <div className={homecss.btnsliderimg}>
                    <img src={GetRoute('/slider-btn-img-1.jpg')} alt="" />
                  </div>
                  <div className={homecss.sliderbtncon}>
                    <h3>Time to Market Advantage</h3>
                  </div>
                </div>
                <div className="col-md-3 btn-slider-item">
                  <div className={homecss.btnsliderimg}>
                    <img src={GetRoute('/services-img-1.jpg')} alt="" />
                  </div>
                  <div className={homecss.sliderbtncon}>
                    <h3>Continuous Operational Control</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
   
    </>
  )
}
