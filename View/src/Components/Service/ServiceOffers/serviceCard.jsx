import ReactOwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import styles from "./style.module.css";
import GetRoute from "../../../Container/server";
import { Link } from "react-router-dom";

export default function ServiceCard({ content,color }) {
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
        navText={[
          `<button class="carousel-control-prev ${styles.leftBtn}" type="button" data-bs-target="#demo" data-bs-slide="prev">
        <i class="fa fa-angle-left ${styles.arrow}" style="color:${color}"></i>
        </button>`,
          `<button class="carousel-control-next ${styles.rightBtn}" type="button" data-bs-target="#demo" data-bs-slide="next">
        <i class="fa fa-angle-right ${styles.arrow}" style="color:${color}"></i>
        </button>`,
        ]}
        dots={true}
        className="service-slider-two owl-carousel"
      >
        {content.map((data, i) => (
          <div
            key={i}
            className={`single-service-wrap bg-white ${styles.card}`}
          >
            <div className={`service-icon ${styles.imgDiv}`}>
              <img className={styles.img} src={GetRoute(data.src)} alt="" />
            </div>
            <div className={styles.serviceContent}>
              <div className={styles.serviceIcon}>
                <img src={GetRoute(data.icon)} />
              </div>
              <h4 className={`text-center py-4 ${styles.title}`}>
                {data.title}
              </h4>
              <Link to={data.link}>
                <button className={`btn ${styles.learnBtn}`}>Learn More</button>
              </Link>
            </div>
          </div>
        ))}
      </ReactOwlCarousel>
    </div>
  );
}
