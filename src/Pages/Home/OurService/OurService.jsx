import React from "react";
import serviceIcon from "../../../assets/service.png";
const logisticsServices = [
  {
    id: 1,
    title: "Express & Standard Delivery",
    description:
      "We deliver parcels within 24–72 hours in Dhaka, Chattogram, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
  },
  {
    id: 2,
    title: "Nationwide Delivery",
    description:
      "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
  },
  {
    id: 3,
    title: "Fulfillment Solution",
    description:
      "We also offer customized service with inventory management support, online order processing, packaging, and other sales support.",
  },
  {
    id: 4,
    title: "Cash on Home Delivery",
    description:
      "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
  },
  {
    id: 5,
    title: "Corporate Service / Contract In Logistics",
    description:
      "Customized corporate services which include warehouse and inventory management support.",
  },
  {
    id: 6,
    title: "Parcel Return",
    description:
      "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
  },
];

const OurService = () => {
  return (
    <div className="bg-secondary mb-12 p-5 md:p-20 rounded-3xl">
      <div className="text-white text-center">
        <h1 className="font-bold text-xl md:text-3xl lg:text-4xl">
          Our Services
        </h1>
        <p className="max-w-160 mx-auto">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </p>
      </div>
      <div className=" mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-5 text-center">
        {logisticsServices.map((service) => (
          <div
            key={service.id}
            className="card bg-white hover:bg-primary p-8 space-y-2.5 transition-colors duration-500"
          >
            <div className="flex justify-center ">
              <img
                className=" h-12 w-12"
                src={serviceIcon}
                alt={service.title}
              />
            </div>
            <h3 className="font-bold text-xl text-secondary">
              {service.title}
            </h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurService;
