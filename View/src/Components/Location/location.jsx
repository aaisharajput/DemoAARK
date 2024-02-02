import React from 'react'
import locationcss from './location.module.css'
import aboutcss from '../AboutUs/About.module.css'
import GetRoute from '../../Container/server'

export default function location({heading,para}) {
  return (
    <>
          <div className="location mb-5">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-12 col-lg-10">
            <div className={`text-center ${locationcss.contactcon} ${aboutcss.title}`}>
              <h2 className='fw-bold'> {heading}</h2>
              <p>{para}</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-lg-3">
            <div className={`mb-3 ${locationcss.cardhover}`}>
              <a href="https://aarkglobalinc.com/wp-content/uploads/2023/01/us.jpg"  data-fancybox="gallery" data-structure="U.S.A">
                <img src={GetRoute('/us.jpg')} alt="image" className={`imgFluid ${locationcss.location__img} ${locationcss.cardhover__img}`} />
                <div className={locationcss.overlay}>
                    <p>{'U.S.A'}</p>
                  </div>
              </a>
            </div>
          </div>
          <div className="col-12 col-lg-3">
            <div className={`mb-3 ${locationcss.cardhover}`}>
              <a href="https://aarkglobalinc.com/wp-content/uploads/2023/01/canada.jpg"  data-fancybox="gallery" data-structure="Canada">
                <img src={GetRoute('/canada.jpg')} alt="image" className={`imgFluid ${locationcss.location__img} ${locationcss.cardhover__img}`} />
                <div className={locationcss.overlay}>
                    <p>{'Canada'}</p>
                  </div>
              </a>
            </div>
          </div>
          <div className="col-12 col-lg-3">
            <div className={`mb-3 ${locationcss.cardhover}`}>
              <a href="https://aarkglobalinc.com/wp-content/uploads/2023/01/austrailia.jpg"  data-fancybox="gallery" data-structure="Australia">
                <img src={GetRoute('/austrailia.jpg')} alt="image" className={`imgFluid ${locationcss.location__img} ${locationcss.cardhover__img}`} />
                <div className={locationcss.overlay}>
                    <p>{'Australia'}</p>
                  </div>
              </a>
            </div>
          </div>
          <div className="col-12 col-lg-3">
            <div className={`mb-3 ${locationcss.cardhover}`}>
              <a href="https://aarkglobalinc.com/wp-content/uploads/2023/01/india.jpg"  data-fancybox="gallery" data-structure="India">
                <img src={GetRoute('/india.jpg')} alt="image" className={`imgFluid ${locationcss.location__img} ${locationcss.cardhover__img}`} />
                <div className={locationcss.overlay}>
                    <p>{'India'}</p>
                  </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
