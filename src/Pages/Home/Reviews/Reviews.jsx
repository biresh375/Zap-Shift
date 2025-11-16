import React, { use } from "react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ReviesCard from "./ReviesCard";

const Reviews = ({ reviewsPromise }) => {
  const reviews = use(reviewsPromise);
  console.log(reviews);
  return (
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
  );
};

export default Reviews;
