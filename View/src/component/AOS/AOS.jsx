import './style.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function Aos() {

    useEffect(() => {
        AOS.init();
      }, [])

  return (
    <>

  <div className='container-fluid p-0 mt-5'>
  <section>
  <p className='mt-5'>Logo</p>
  <span className='lerp-wrap'>
    <span data-aos="fade-up">S</span>
    <span data-aos="fade-down">A</span>
    <span data-aos="fade-right">P</span>
    <span data-aos="fade-left">N</span>
    <span data-aos="fade-up-right">A</span>
  </span>
  </section>

  <section>
  <span className='lerp-wrap'>
    <span data-aos="fade-up-left">S</span>
    <span data-aos="fade-down-right">A</span>
    <span data-aos="fade-down-left">P</span>
    <span data-aos="flip-left">N</span>
    <span data-aos="flip-right">A</span>
  </span>
  </section>

  <section>
  <span className='lerp-wrap'>
    <span data-aos="flip-left">S</span>
    <span data-aos="zoom-in-up">A</span>
    <span data-aos="zoom-out-right">P</span>
    <span data-aos="zoom-in-up">N</span>
    <span data-aos="flip-left">A</span>
  </span>
  </section>

  <section>
  <span className='lerp-wrap'>
    <span data-aos="flip-up">S</span>
    <span data-aos="flip-down">A</span>
    <span data-aos="zoom-in">P</span>
    <span data-aos="zoom-in-up">N</span>
    <span data-aos="zoom-in-down">A</span>
  </span>
  </section>

  <section>
  <span className='lerp-wrap'>
    <span data-aos="zoom-in-left">S</span>
    <span data-aos="zoom-in-right">A</span>
    <span data-aos="zoom-out">P</span>
    <span data-aos="zoom-out-up">N</span>
    <span data-aos="zoom-out-down">A</span>
  </span>
  </section>

  <section>
  <span className='lerp-wrap'>
    <span data-aos="zoom-out-right">S</span>
    <span data-aos="zoom-out-left">A</span>
    <span data-aos="fade-up" data-aos-duration="3000">P</span>
    <span data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">N</span>
    <span data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">A</span>
  </span>
  </section>

  <section>
  <span className='lerp-wrap'>
    <span data-aos="fade-left" data-aos-anchor="#example-anchor" data-aos-offset="500" data-aos-duration="500">S</span>
    <span data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="300" data-aos-offset="0">A</span>
    <span data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">P</span>
    <span data-aos="fade-up" data-aos-anchor-placement="top-bottom">N</span>
    <span data-aos="fade-up" data-aos-anchor-placement="bottom-center">A</span>
  </span>
  </section>

  <section>
  <span className='lerp-wrap'>
  <span data-aos="fade-up" data-aos-anchor-placement="center-bottom">D</span>
    <span data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" >E</span>
    <span data-aos="fade-up" data-aos-anchor-placement="top-center">V</span>
    <span data-aos="fade-up" data-aos-anchor-placement="center-center">I</span>
  </span>
  </section>

  </div>


    </>
  )
}

export default Aos
