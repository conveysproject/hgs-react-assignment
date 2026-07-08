import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Autoplay } from "swiper/modules";


import "swiper/css";
import "swiper/css/navigation"

export default function CenterSlider() {
   const images = [
    "src/assets/codia-studio-jyb3jp.JPG",
    "src/assets/codia-studio-aiwwbp.JPG",
    "src/assets/codia-studio-m2iepu.JPG",
     "src/assets/codia-studio-jyb3jp.JPG",
    "src/assets/codia-studio-aiwwbp.JPG",
    "src/assets/codia-studio-m2iepu.JPG",
  ];

  return (
    <section >
        <h2 className="gallery-section-heading">Lorem ipsum dolor</h2>    
        <div className="gallery-section">  
            <div className="image-div"></div>
            <Swiper
                modules={[Autoplay, Navigation]}
                navigation
                centeredSlides
                slidesPerView={3}
                spaceBetween={10}
                loop
                autoplay={{delay: 2000, disableOnInteraction: false,}}
            >
                {images.map((img, index) => (
                <SwiperSlide key={index}>
                    <div className="card">
                    <img src={img} alt="" />
                    <p>Lorem ipsum</p>
                    </div>
                </SwiperSlide>
                ))}
            </Swiper>
        </div>
    </section>
  );
}