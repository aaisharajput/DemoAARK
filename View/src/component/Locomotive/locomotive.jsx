import React,{ useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import './index.css'

function Locomotive() {

  const scrollRef = useRef(null);
      useEffect(() => {
        const scroll = new LocomotiveScroll({
          el:scrollRef.current,
          smooth:true,
        })

        return()=>{
          scroll.destroy();
        }
      },[]) 

  return (
    <>

  <div className='container-fluid p-0 mt-5 scroll-container' ref={scrollRef}>
  <section data-scroll data-scroll-speed={-5}>
  <p className='mt-5'>SAPNA</p>
  <span className='lerp-wrap'>
    <span >S</span>
    <span >A</span>
    <span >P</span>
    <span >N</span>
    <span >A</span>
  </span>
  </section>

  <section data-scroll data-scroll-speed={0}>
  <span className='lerp-wrap'>
    <span >S</span>
    <span >A</span>
    <span >P</span>
    <span >N</span>
    <span >A</span>
  </span>
  </section>

  <section data-scroll data-scroll-speed={-2}>
  <span className='lerp-wrap'>
    <span>S</span>
    <span>A</span>
    <span>P</span>
    <span>N</span>
    <span>A</span>
  </span>
  </section>

  <section data-scroll data-scroll-speed={0}>
  <span className='lerp-wrap'>
    <span>S</span>
    <span>A</span>
    <span>P</span>
    <span>N</span>
    <span>A</span>
  </span>
  </section>
  </div>


    </>
  )
}

export default Locomotive
