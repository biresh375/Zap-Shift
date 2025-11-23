import React from "react";
import Banner from "../Banner/Banner";
import HowItWork from "../HowitWork/HowItWork";
import OurService from "../OurService/OurService";
import Brands from "../Brands/Brands";
import Reviews from "../Reviews/Reviews";
import ServiceSection from "../ServiceSection/ServiceSection";

const reviewsPromise = fetch("reviews.json").then((res) => res.json());

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <HowItWork></HowItWork>
      <OurService></OurService>
      <Brands></Brands>
      <ServiceSection></ServiceSection>
      <Reviews reviewsPromise={reviewsPromise}></Reviews>
    </div>
  );
};

export default Home;
