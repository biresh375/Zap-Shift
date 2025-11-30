import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";

const PaymentSucess = () => {
  const [searchParams] = useSearchParams();
  const [paymentInfo, setPaymentInfo] = useState({});
  const sessionId = searchParams.get("session_id");
  const axiosSecure = UseAxiosSecure();

  useEffect(() => {
    if (sessionId) {
      axiosSecure
        .patch(`/session-sucess?session_id=${sessionId}`)
        .then((res) => {
          console.log(res.data);
          setPaymentInfo({
            transectionId: res.data.transectionId,
            trakingId: res.data.trakingId,
          });
        });
    }
  }, [sessionId, axiosSecure]);
  return (
    <div>
      <h1 className="text-2xl font-bold">Payment Successfull</h1>
      <p className="font-semibold">
        Your Transection Id :{" "}
        <span className="font-bold ">{paymentInfo.transectionId}</span>
      </p>
      <p className="font-semibold">
        Your Transection Id :{" "}
        <span className="font-bold ">{paymentInfo.trakingId}</span>
      </p>
      <Link className="btn btn-primary text-black" to={"/dashbord/my-parcels"}>
        Go Back
      </Link>
    </div>
  );
};

export default PaymentSucess;
