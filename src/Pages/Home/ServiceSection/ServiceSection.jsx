import React from "react";
import { FaPhone, FaShieldAlt } from "react-icons/fa";
import { FaBoxOpen } from "react-icons/fa6";
import safe_delivery from "../../../assets/safe-delivery.png";
import live_tracking from "../../../assets/live-tracking.png";

const ServiceSection = () => {
  const services = [
    {
      //   icon: <FaBoxOpen size={60} />, // Tracking Icon
      icon: (
        <img
          src={live_tracking}
          alt="tracking"
        //   className="w-20 h-20 object-contain"
        />
      ),

      title: "Live Parcel Tracking",
      desc: "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
    },
    {
      icon: (
        <img
          src={safe_delivery}
          alt="tracking"
        //   className="w-20 h-20 object-contain"
        />
      ), // Safe Delivery Icon
      title: "100% Safe Delivery",
      desc: "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
    },
    {
      icon: (
        <img
          src={safe_delivery}
          alt="tracking"
        //   className="w-16 h-16 object-contain"
        />
      ), // Support Icon
      title: "24/7 Call Center Support",
      desc: "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
    },
  ];
  return (
    <section className="w-11/12 mx-auto my-20 py-20 border-y border-dashed border-gray-400  lg:px-10">
      <div className="max-w-11/12 mx-auto space-y-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center gap-6 p-8 rounded-2xl shadow-sm border border-gray-200 bg-white hover:shadow-md transition"
          >
            <div>{service.icon}</div>
            <div className="divider lg:divider-horizontal"></div>
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold text-[#03373d]">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;
