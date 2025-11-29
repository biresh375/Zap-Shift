import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import Loading from "../../../Components/Loading/Loading";

const Payment = () => {
  const { parcelId } = useParams();
  const axiosSecure = UseAxiosSecure();
  const { isLoading, data: parcel } = useQuery({
    queryKey: ["parcels", parcelId],

    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels/${parcelId}`);
      return res.data;
    },
  });
  const handlePayment = async () => {
    const paymentInfo = {
      cost: parcel.cost,
      senderName: parcel.senderName,
      parcelId: parcel._id,
      senderEmail: parcel.senderEmail,
      ParcelName: parcel.parcelName,
    };

    const res = await axiosSecure.post("/create-checkout-session", paymentInfo);
    console.log(res.data);
    window.location.href = res.data.url;
  };
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h2>
        Please pay {parcel.cost} for:{" "}
        <span className="font-bold "> {parcel.parcelName}</span>
      </h2>
      <button
        onClick={handlePayment}
        className="btn btn-primary text-secondary"
      >
        Pay now
      </button>
    </div>
  );
};

export default Payment;
