import React, { use } from "react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ReviesCard from "./ReviesCard";
import customerTOP from "../../../assets/customer-top.png";

const Reviews = ({ reviewsPromise }) => {
  const reviews = use(reviewsPromise);
  console.log(reviews);
  return (
    <>
      <div className="flex flex-col items-center">
        <img className="w-60" src={customerTOP} alt="" />
        <h2 className=" text-2xl md:text-3xl text-secondary font-extrabold mt-10 mb-5">
          What our customers are sayings
        </h2>
        <p className="lg:w-6/12 mx-auto mb-5 text-center">
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce pain, and strengthen your body
          with ease!
        </p>
      </div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: "50%",
          depth: 140,
          modifier: 1,
          scale: 0.75,
          slideShadows: true,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <ReviesCard review={review}></ReviesCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Reviews;
