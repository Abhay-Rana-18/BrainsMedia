import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import ScrollAnimationMin from "react-animate-on-scroll";

export default function Slider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {/* Common heading for all slides */}

        <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-10 text-center">
          <h1 className="md:text-[5rem] sm:text-[3rem] text-[2rem] text-white leading-tight font-bold">
            Get your business online in less than 24 hours
          </h1>
        </div>

        <SwiperSlide style={{ height: "40rem" }}>
          <img src="/images/tech1.jpg" className="z-0" alt="Tech 1" />
        </SwiperSlide>
        <SwiperSlide style={{ height: "40rem" }}>
          <img src="/images/tech2.jpg" alt="Tech 2" />
        </SwiperSlide>
        <SwiperSlide style={{ height: "40rem" }}>
          <img src="/images/web3.jpg" alt="Web 3" />
        </SwiperSlide>
        <SwiperSlide style={{ height: "40rem" }}>
          <img src="/images/web4.jpg" alt="Web 4" />
        </SwiperSlide>
        <SwiperSlide style={{ height: "40rem" }}>
          <img src="/images/web5.jpg" alt="Web 5" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
