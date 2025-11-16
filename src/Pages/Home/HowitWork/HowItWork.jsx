import React from "react";
import icon from "../../../assets/bookingIcon.png";

const HowItWork = () => {
  const services = [
    {
      id: 1,
      title: "Booking Pick & Drop",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
    },
    {
      id: 2,
      title: "Cash On Delivery",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
    },
    {
      id: 3,
      title: "Delivery Hub",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
    },
    {
      id: 4,
      title: "Booking SME & Corporate",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
    },
  ];

  return (
    <div className="px-2.5 mb-12">
      <h1 className="text-secondary text-3xl font-bold">How it Works</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 pt-5">
        {services.map((service) => (
          <div key={service.id} className="card bg-white p-8">
            <img className=" h-12 w-12" src={icon} alt={service.title} />
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

export default HowItWork;
