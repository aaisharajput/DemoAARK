import React, { useState } from 'react';
import ReactOwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import styles from "./card.module.css";
import GetRoute from "../../../Container/server";

export default function CarouselCard({content}) {
  const [isFirstItem, setIsFirstItem] = useState(true);
  const [isLastItem, setIsLastItem] = useState(false);

  const handleInitialized = () => {
    // Check if the carousel is at the first item initially
    setIsFirstItem(true);
    // Check if the carousel is at the last item initially
    setIsLastItem(false);
  };

  const handleTranslated = (event) => {
    // Check if the current item is the first or last
    setIsFirstItem(event.page.index === 0);
    setIsLastItem(event.page.index === event.page.count - 1);
  };
  return (
    <div className="row pt-5">
      <ReactOwlCarousel
        items={3}
        margin={50}
        loop={false}
        nav={true}
        responsiveClass={true}
        autoplay={true}
        autoplayHoverPause={true}
        smartSpeed={500}
        responsive={{
          0: { items: 1 },
          900: { items: 2 },
          1400: { items: 3 },
        }}
        navText={[`<button class="carousel-control-prev ${styles.leftBtn}" type="button" data-bs-target="#demo" data-bs-slide="prev">
        <i class="fa fa-angle-left ${styles.arrow}"></i>
        </button>`,`<button class="carousel-control-next ${styles.rightBtn}" type="button" data-bs-target="#demo" data-bs-slide="next">
        <i class="fa fa-angle-right ${styles.arrow}"></i>
        </button>`]}
        dots={true}
        className="service-slider-two owl-carousel"
        onInitialized={handleInitialized}
        onTranslated={handleTranslated}
      >
        {content.map((data,i) => (
          <div key={i} className={`single-service-wrap bg-white ${styles.card}`}>
            <div className={`service-icon ${styles.imgDiv}`}>
              <img className={styles.img} src={GetRoute(data.src)} alt="" />
            </div>
            <div className={styles.serviceContent}>
            <div className={styles.serviceIcon}>
            <img src={GetRoute(data.icon)}/>
            </div>
            <h4 className={`text-center pt-5 px-2 ${styles.title}`}>{data.title}</h4>
            </div>
          </div>
        ))}

      </ReactOwlCarousel>
    </div>
  );
}


