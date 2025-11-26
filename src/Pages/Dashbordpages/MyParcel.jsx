import { Query, useQuery } from "@tanstack/react-query";
import React from "react";
import UseAuth from "../../Hooks/UseAuth";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";

const MyParcel = () => {
  const { user } = UseAuth();
  const axiosSecure = UseAxiosSecure();
  const { data: parcels = [] } = useQuery({
    queryKey: ["myParcels", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels?email=${user.email}`);
      return res.data;
    },
  });

  return (
    <div>
      <h2 className="text-2xl fong-bold">
        my all parcel here {parcels.length}
      </h2>
    </div>
  );
};

export default MyParcel;
