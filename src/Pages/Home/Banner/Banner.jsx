import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import BannerImage1 from "../../../assets/banner/banner1.png";
import BannerImage2 from "../../../assets/banner/banner2.png";
import BannerImage3 from "../../../assets/banner/banner3.png";
import { FaCircleArrowRight } from "react-icons/fa6";
const Banner = () => {
  return (
    <Carousel
      className=" my-10 p-2.5 md:px-15 md:py-10 bg-white shadow-sm rounded-2xl"
      infiniteLoop={true}
      autoPlay={true}
      showStatus={false}
      showThumbs={false}
      interval={2000}
    >
      <div className="relative">
        <img className="max-h-120" src={BannerImage1} />
        <div className=" absolute z-10 bottom-12 left-5 ">
          <button className="btn mr-2.5 btn-primary rounded-full text-black text-xl ">
            <span>Track Your Parcel</span>
            <FaCircleArrowRight className="-rotate-45 " />
          </button>
          <button className="btn btn-outline text-xl">Be A Rider</button>
        </div>
      </div>
      <div>
        <img className="max-h-120" src={BannerImage2} />
      </div>
      <div>
        <img className="max-h-120" src={BannerImage3} />
      </div>
    </Carousel>
  );
};

export default Banner;
