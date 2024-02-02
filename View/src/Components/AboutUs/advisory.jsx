import React from 'react'
import aboutcss from './About.module.css'
import GetRoute from '../../Container/server'

export default function Advisory() {
  return (
    <>
      <div className="row align-items-center py-4">
          <div className={`col-md-6 ${aboutcss.aboutimg}`}>
              <img src={GetRoute('/about-img.png')} alt="" />
          </div>
          <div className={`col-md-6 ${aboutcss.aboutcon} ${aboutcss.title}`}>
              <h2> OUR ADVISORY BOARD </h2>
              <p>
                Like every successful business that welcomes experts’ perspectives and sage advice to supplement organizational growth, we at AARK Global are very proud and honored to have an advisory board team that comprises of the Who’s Who of the industry with deep experience in growing companies, developing high-performance teams, accelerating revenues; and at the same time have a mindset of generosity and giving back.
              </p>
          </div>
        </div>
    </>
  )
}
