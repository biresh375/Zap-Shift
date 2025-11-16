import React from "react";
import { FaQuoteLeft } from "react-icons/fa6";

const ReviesCard = ({ review }) => {
  const { userName, review: testomonial, user_email, user_photoURL } = review;
  return (
    <div className="max-w-sm w-full bg-white shadow-md rounded-2xl p-6 border border-gray-100">
      <FaQuoteLeft className="text-teal-400 text-3xl mb-3" />

      <p className=" mb-6">{testomonial}</p>

      <div className="border-t border-gray-200 pt-4 flex items-center gap-3">
        <div className="w-10 h-10  rounded-full">
          <img className="rounded-full" src={user_photoURL} alt="" />
        </div>
        <div>
          <h4 className="text-secondary font-semibold text-sm">{userName}</h4>
          <p className=" text-xs">{user_email}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviesCard;
