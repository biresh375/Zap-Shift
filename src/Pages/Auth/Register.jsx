import React from "react";
import { useForm } from "react-hook-form";
import UseAuth from "../../Hooks/UseAuth";
import { Link } from "react-router";
import SocialLogin from "../shared/SocialLogin/SocialLogin";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { CreateUser } = UseAuth();
  const handleRegistration = (data) => {
    CreateUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        reset();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="card bg-base-100 mt-7.5 shadow-2xl max-w-10/12 mx-auto">
      <form onSubmit={handleSubmit(handleRegistration)} className="card-body">
        <h2 className=" text-2xl lg:text-4xl font-bold">Create an Account</h2>
        <p className="font-semibold">Register with ZapShift</p>
        <fieldset className="fieldset text-[16px]">
          <label className="label ">Email</label>
          <input
            type="email"
            {...register("email", { required: true })}
            className="input w-full"
            placeholder="Email"
          />
          {errors.email?.type === "required" && (
            <p className="text-red-500">Email is required</p>
          )}
          {/* password field */}
          <label className="label">Password</label>
          <input
            type="password"
            className="input w-full"
            placeholder="Password"
            {...register("password", {
              required: true,
              minLength: 6,
              pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/,
            })}
          />
          {errors.password?.type === "pattern" && (
            <p className="text-red-500">
              password must be at least one uppercase, at least one lowercase,at
              least one digit and at least specail cherecter
            </p>
          )}
          {errors.password?.type === "required" && (
            <p className="text-red-500">Password is requirde</p>
          )}
          {errors.password?.type === "minLength" && (
            <p className="text-red-500">
              Password must be 6 cherecter or longer
            </p>
          )}
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-primary text-black mt-4">Register</button>
        </fieldset>
        <p>
          Don’t have any account?{" "}
          <Link to={"/login"} className="text-[#8FA748] hover:underline">
            login
          </Link>
        </p>
        <SocialLogin></SocialLogin>
      </form>
    </div>
  );
};

export default Register;
