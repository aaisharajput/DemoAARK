import React from 'react'
import aboutcss from './About.module.css'
import GetRoute from '../../Container/server'

export default function Foundation() {
  return (
    <>
      <div className="row align-items-center py-4">
          <div className={`col-md-6 ${aboutcss.aboutcon} ${aboutcss.title}`}>
              <h2>OUR FOUNDATION</h2>
              <p>
                AARK Global founding team has decades of experience in Hardware Product Engineering, Software Product Engineering, Cloud Platform, Cognitive insights, and Salesforce implementations to name a few. AARK Global team’s real-world experience in industries, hands-on implementation of best practices in processes and software, integrating engineering solutions that work well with legacy systems; all these attributes enable us to roll out new products and achieve desired Digital transformation for our customers. The team has had an enviable track record of working with diverse customers for successful NPI, and engineering Innovation.
              </p>
              <b>We develop solutions</b>
              <div className="service-content service-content--transparent service-content--about">
                <ul>
                  <p>&nbsp;</p>
                  <ul>
                    <li>….. that STICK</li>
                    <li>….. that WORK</li>
                    <li>….. that TEAMS EMBRACE</li>
                    <li>….. that CUSTOMERS LOVE</li>
                  </ul>
                </ul>
            </div>
          </div>
          <div className={`col-md-6 ${aboutcss.aboutimg}`}>
              <img src={GetRoute("/our-foundation-1.jpg")} alt="" />
            </div>
        </div>
    </>
  )
}
