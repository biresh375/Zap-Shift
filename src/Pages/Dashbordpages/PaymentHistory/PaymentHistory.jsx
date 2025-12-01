import { useQuery } from "@tanstack/react-query";
import React from "react";
import UseAuth from "../../../Hooks/UseAuth";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";

const PaymentHistory = () => {
  const { user } = UseAuth();
  const axiosSecure = UseAxiosSecure();

  const { data: payments = [] } = useQuery({
    queryKey: ["payments", user.email],
    queryFn: async () => {
      const res = await axiosSecure(`/payments?email=${user?.email}`);
      return res.data;
    },
  });
  return (
    <div>
      <h1 className="text-2xl font-bold">
        Payment History : {payments.length}
      </h1>
      <div className="overflow-x-auto ">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>SN:</th>
              <th>Name</th>
              <th>Amount</th>
              <th>Transection Id</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{payment.parcelName} </td>
                <td>{payment.amount}</td>
                <td>{payment.transectionId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
