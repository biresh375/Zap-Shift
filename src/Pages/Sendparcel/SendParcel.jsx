import React from "react";
import { useForm, useWatch } from "react-hook-form";
import { useLoaderData } from "react-router";

const SendParcel = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const handleFormSubmit = (data) => {
    console.log(data);
  };
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
            />
            <label className="label text-[#0F172A]  font-semibold mt-3">
              Sender Email
            </label>
            <input
              type="email"
              {...register("senderEmail")}
              className="input w-full"
              placeholder="Sender Email"
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
