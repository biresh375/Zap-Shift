import React from "react";
import "../Sendparcel/Sendparcel.css";
import { useForm, useWatch } from "react-hook-form";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import UseAuth from "../../Hooks/UseAuth";

const SendParcel = () => {
  const { register, handleSubmit, control } = useForm();
  const { user } = UseAuth();
  const axiosSecure = UseAxiosSecure();

  const serviceCenterData = useLoaderData();
  const regionDuplicate = serviceCenterData.map((s) => s.region);
  const region = [...new Set(regionDuplicate)];
  const senderRegion = useWatch({ control, name: "senderRegion" });
  const reciverRegion = useWatch({ control, name: "receiverRegion" });

  const districtByRegison = (region) => {
    const regionDistrict = serviceCenterData.filter((c) => c.region === region);
    const districts = regionDistrict.map((d) => d.district);
    return districts;
  };
  const handleFormSubmit = (data) => {
    // console.log(data);
    const isDocument = data.parcelType === "Document";
    const isSameDistrict = data.senderDistrict === data.receiverDistrict;
    const parcelWeight = parseFloat(data.parcelWeight);
    let cost = 0;
    if (isDocument) {
      cost = isSameDistrict ? 60 : 80;
    } else {
      if (parcelWeight < 3) {
        cost = isSameDistrict ? 110 : 150;
      } else {
        const minCharge = isSameDistrict ? 110 : 150;
        const extraWeight = parcelWeight - 3;
        const extraCharge = isSameDistrict
          ? extraWeight * 40
          : extraWeight * 40 + 40;
        cost = minCharge + extraCharge;
      }
    }
    // console.log("cost", cost);
    data.cost = cost;
    Swal.fire({
      title: "Agree with the cost",
      text: `You will be charged ${cost} taka`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#caeb66",
      cancelButtonColor: "#d33",
      confirmButtonText: "I aggree!",
      customClass: {
        confirmButton: "my-confirm-btn",
        cancelButton: "my-cancel-btn",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.post("/parcels", data).then((res) => {
          // console.log(res.data);
          if (res.data.insertedId) {
            Swal.fire({
              title: "submited!",
              text: "Your request has been submited.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <div className="bg-white p-20 rounded-3xl mt-8">
      <h1 className="text-5xl font-bold text-secondary">Add Parcel</h1>
      <div className="divider"></div>
      <form className="space-y-7.5 " onSubmit={handleSubmit(handleFormSubmit)}>
        <h3 className="text-2xl font-semibold text-secondary ">
          Enter your parcel details
        </h3>
        {/* parcel type */}
        <div>
          <label className="label mr-4">
            <input
              {...register("parcelType")}
              type="radio"
              value="Document"
              className="radio radio-primary"
              defaultChecked
            />
            Document
          </label>
          <label className="label">
            <input
              {...register("parcelType")}
              type="radio"
              value="Non-Document"
              className="radio  radio-primary"
              defaultChecked
            />
            Non-Document
          </label>
        </div>
        {/* parcel info name weight */}
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-7.5">
          <fieldset className="fieldset text-[14px] ">
            <label className="label text-[#0F172A]  font-semibold">
              Parcel Name
            </label>
            <input
              type="text "
              {...register("parcelName")}
              className="input w-full"
              placeholder="Parcel Name"
            />
          </fieldset>
          <fieldset className="fieldset text-[14px]">
            <label className="label text-[#0F172A]  font-semibold">
              Parcel Weight (KG)
            </label>
            <input
              required
              type="number"
              {...register("parcelWeight")}
              className="input w-full"
              placeholder="Parcel Weight (KG)"
            />
          </fieldset>
        </div>
        {/* two colum info */}
        <div className="divider"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7.5">
          {/* sender info */}
          <fieldset className="fieldset text-[14px]">
            <h3 className="text-xl font-bold text-secondary mb-2.5">
              Sender Details
            </h3>
            <label className="label text-[#0F172A]  font-semibold">
              Sender Name
            </label>
            <input
              type="text"
              {...register("senderName")}
              className="input w-full"
              placeholder="Sender Name"
              defaultValue={user?.displayName}
            />
            <label className="label text-[#0F172A]  font-semibold mt-3">
              Sender Email
            </label>
            <input
              type="email"
              {...register("senderEmail")}
              className="input w-full"
              placeholder="Sender Email"
              defaultValue={user?.email}
              readOnly
            />
            <fieldset className="fieldset text-[14px]">
              <legend className="fieldset-legend">Your Region</legend>
              <select
                {...register("senderRegion")}
                defaultValue="Pick a Region"
                className="select w-full"
              >
                <option disabled={true}>Pick a Region</option>
                {region.map((r, index) => (
                  <option key={index} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </fieldset>
            <fieldset className="fieldset text-[14px]">
              <legend className="fieldset-legend">Yout District</legend>
              <select
                {...register("senderDistrict")}
                defaultValue="Pick a District"
                className="select w-full"
              >
                <option disabled={true}>Pick a District</option>
                {districtByRegison(senderRegion).map((r, index) => (
                  <option key={index} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </fieldset>

            <label className="label text-[#0F172A]  font-semibold mt-3">
              Sender Address
            </label>
            <input
              type="text"
              {...register("senderAddress")}
              className="input w-full"
              placeholder="Sender Address"
            />

            <label className="label text-[#0F172A]  font-semibold mt-3">
              Sender Phone No
            </label>
            <input
              type="number"
              {...register("senderPhoneNo")}
              className="input w-full"
              placeholder="Sender Phone No"
            />

            <label className="label text-[#0F172A]  font-semibold mt-3">
              Pickup Instruction
            </label>
            <textarea
              type="text"
              {...register("senderInstruction")}
              className="textarea w-full"
              placeholder="Sender Instruction"
            />
          </fieldset>
          {/* receiver info */}
          <fieldset className="fieldset text-[14px]">
            <h3 className="text-xl font-bold text-secondary mb-2.5">
              Receiver Details
            </h3>

            <label className="label text-[#0F172A]  font-semibold">
              Receiver Name
            </label>
            <input
              type="text"
              {...register("receiverName")}
              className="input w-full"
              placeholder="Receiver Name"
            />
            <label className="label text-[#0F172A]  font-semibold mt-3">
              Receiver Email
            </label>
            <input
              type="email"
              {...register("receiverEmail")}
              className="input w-full"
              placeholder="Receiver Email"
            />
            <fieldset className="fieldset text-[14px]">
              <legend className="fieldset-legend">Receiver Region</legend>
              <select
                {...register("receiverRegion")}
                defaultValue="Pick a Region"
                className="select w-full"
              >
                <option disabled={true}>Pick a Region</option>
                {region.map((r, index) => (
                  <option key={index} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </fieldset>
            <fieldset className="fieldset text-[14px]">
              <legend className="fieldset-legend">Receiver District</legend>
              <select
                {...register("receiverDistrict")}
                defaultValue="Pick a District"
                className="select w-full"
              >
                <option disabled={true}>Pick a District</option>
                {districtByRegison(reciverRegion).map((r, index) => (
                  <option key={index} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </fieldset>

            <label className="label text-[#0F172A]  font-semibold mt-3">
              Receiver Address
            </label>

            <input
              type="text"
              {...register("receiverAddress")}
              className="input w-full"
              placeholder="Receiver Address"
            />
            <label className="label text-[#0F172A]  font-semibold mt-3">
              Receiver Contact No
            </label>
            <input
              type="number"
              {...register("receiverPhoneNo")}
              className="input w-full"
              placeholder="Receiver Contact No"
            />

            <label className="label text-[#0F172A]  font-semibold mt-3">
              Delivery Instruction
            </label>
            <textarea
              type="text"
              {...register("deliveryInstruction")}
              className="textarea w-full"
              placeholder="Delivery Instruction"
            />
          </fieldset>
        </div>
        <h4>* PickUp Time 4pm-7pm Approx.</h4>
        <input
          className="btn bg-primary"
          type="submit"
          value="Proceed to Confirm Booking"
        />
      </form>
    </div>
  );
};

export default SendParcel;
