import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import SocialLogin from "../shared/SocialLogin/SocialLogin";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleLogin = (data) => {
    console.log(data);
  };

  return (
    <div className="card bg-base-100 mt-7.5 shadow-2xl max-w-8/12 mx-auto">
      <form onSubmit={handleSubmit(handleLogin)} className="card-body">
        <h2 className=" text-3xl lg:text-4xl font-bold">Welcome Back</h2>
        <p className="font-semibold">Login with ZapShift</p>
        <fieldset className="fieldset ">
          {/* email field */}
          <label className="label">Email</label>
          <input
            type="email"
            {...register("email", { required: true })}
            className="input w-full"
            placeholder="Email"
          />
          {errors.email?.type === "required" && (
            <p className="text-red-500">Email is Required</p>
          )}
          {/* password field */}
          <label className="label">Password</label>
          <input
            {...register("password", {
              required: true,
              minLength: 6,
              pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/,
            })}
            type="password"
            className="input w-full"
            placeholder="Password"
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
          <button className="btn btn-primary text-black mt-4">Login</button>
        </fieldset>
        <p>
          Don’t have any account?{" "}
          <Link to={"/register"} className="text-[#8FA748] hover:underline">
            Register
          </Link>
        </p>
        <SocialLogin></SocialLogin>
      </form>
    </div>
  );
};

export default Login;
