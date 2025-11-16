import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import amazon from "../../../assets/brands/amazon.png";
import casio from "../../../assets/brands/casio.png";
import moonstar from "../../../assets/brands/moonstar.png";
import randstad from "../../../assets/brands/randstad.png";
import star from "../../../assets/brands/star.png";
import start_people from "../../../assets/brands/start_people.png";
import { Autoplay } from "swiper/modules";

const brandLogos = [
  amazon,
  casio,
  moonstar,
  randstad,
  star,
  start_people,
  amazon,
  randstad,
];

const Brands = () => {
  return (
    <div className="mx-12.5 py-2.5 mb-10">
      <h3 className="text-center text-secondary font-extrabold text-2xl mb-6">
        We've helped thousands of sales teams
      </h3>
      <Swiper
        loop={true}
        slidesPerView={4}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        spaceBetween={30}
        grabCursor={true}
      >
        {brandLogos.map((logo, index) => (
          <SwiperSlide key={index}>
            <img src={logo} alt="Brand Logo" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Brands;
