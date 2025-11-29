import React, { useEffect } from "react";
import { Link, useSearchParams } from "react-router";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";

const PaymentSucess = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const axiosSecure = UseAxiosSecure();

  useEffect(() => {
    if (sessionId) {
      axiosSecure
        .patch(`/session-sucess?session_id=${sessionId}`)
        .then((res) => {
          console.log(res.data);
        });
    }
  }, [sessionId, axiosSecure]);
  return (
    <div>
      <h1 className="text-2xl font-bold">Payment Successfull</h1>
      <Link className="btn btn-primary text-black" to={"/dashbord/my-parcels"}>
        Go Back
      </Link>
    </div>
  );
};

export default PaymentSucess;
