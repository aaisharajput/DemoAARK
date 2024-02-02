import React from 'react'
import Video from '../Video/Video.jsx'
import Intro from './Intro.jsx'
import Foundation from './Foundation.jsx'
import Advisory from './Advisory.jsx'
import Location from '../Location/location.jsx'
import GetRoute from '../../Container/server/index.js'


export default function About() {
  return (
    <>
      <Video videoSource={GetRoute('/about-us.mp4')} heading='About Us'/>
      <div className="about-sec my-5">
      <div className="container">
        <Intro />
        <Foundation />
        <Advisory/>
      </div>
      </div>
      <Location heading=" OUR LOCATIONS AND GEOGRAPHIC REACH " para="While AARK Global has a strong presence in U.S.A, India, Australia, and Canada, our experience of working with clients extends beyond these geographies to include Latin America, Europe, and Far East Asia"/>
    </>
  )
}
