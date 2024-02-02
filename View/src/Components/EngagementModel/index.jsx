import React from 'react'
import Vedio from '../Video/Video.jsx'
import Intro from './Intro.jsx';
import GetRoute from '../../Container/server/index.js';

export default function Engagement() {
  return (
    <>
      <Vedio videoSource={GetRoute('/engagement-models.mp4')} heading='Engagement Model'/>
      <Intro />
    </>
  )
}