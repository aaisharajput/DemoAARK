import React from 'react'
import Video from '../Video/Video'
import Location from '../Location/location'
import ContactFormLayout from './contactFormLayout'
import GetRoute from '../../Container/server'

export default function ContactUs() {
  return (
    <>
      <Video videoSource={GetRoute('/contactBanner.mp4')} heading='Contact Us'/>

      <ContactFormLayout/>
      
      <Location heading="OUR GLOBAL LOCATONS"/>
      
    </>
  )
}
