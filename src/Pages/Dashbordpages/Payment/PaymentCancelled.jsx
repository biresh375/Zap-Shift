import React from "react";
import { Link } from "react-router";

const PaymentCancelled = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold">
        Payment Cancelled. plelase try Again
      </h1>
      <Link to={"/dashbord/my-parcels"} className="btn btn-primary text-black">
        Try Again
      </Link>
    </div>
  );
};

export default PaymentCancelled;
