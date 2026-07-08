import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

function Banner() {
  const slides = [
    {
      image: "src/assets/banner-bg.jpg",
      title: "LOREM",
      subtitle: "IPSUM TITLE",
      button: "Explore",
    },
    {
      image: "src/assets/banner-bg.jpg",
      title: "LOREM",
      subtitle: "IPSUM TITLE",
      button: "Explore",
    },
    {
      image: "src/assets/banner-bg.jpg",
      title: "LOREM",
      subtitle: "IPSUM TITLE",
      button: "Explore",
    },
  ];

  return (
    <section className="banner-section">
      <Swiper className="swiper-banner" modules={[Autoplay,Pagination]} slidesPerView={1} loop={true} autoplay={{delay: 4000, disableOnInteraction: false,}}pagination={{clickable: true,}}>
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="banner" style={{ backgroundImage: `url(${slide.image})` }}>
              <div className="overlay container">
                <h1>{slide.title}</h1>
                <h2>{slide.subtitle}</h2>
                <button className="btn button-normal">{slide.button}</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Banner;