import React from "react";
import { useForm } from "react-hook-form";
import UseAuth from "../../Hooks/UseAuth";
import { Link, useLocation, useNavigate } from "react-router";
import SocialLogin from "../shared/SocialLogin/SocialLogin";
import axios from "axios";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { CreateUser, setUser, setLoading, updateUserProfile } = UseAuth();
  const location = useLocation();
  const navigate = useNavigate();
  // console.log(location);
  const handleRegistration = (data) => {
    // console.log(data.photo[0]);
    const profileImage = data.photo[0];
    CreateUser(data.email, data.password)
      .then((result) => {
        //store tha image and get the url
        const formData = new FormData();
        formData.append("image", profileImage);
        // upload image to imageBB using Axios
        const image_Api_Url = `https://api.imgbb.com/1/upload?key=${
          import.meta.env.VITE_image_host_key
        }`;
        axios
          .post(image_Api_Url, formData)
          .then((res) => {
            console.log("after image upload", res.data.data.url);
            const userProfile = {
              displayName: data.name,
              photoURL: res.data.data.url,
            };
            //updata the userPorfile
            updateUserProfile(userProfile)
              .then(() => {
                // console.log("finish update user");
              })
              .catch((error) => {
                alert(error.message);
              });
          })
          .catch((error) => {
            alert(error.message);
          });
        setUser(result.user);
        // console.log(result.user);
        reset();
        setLoading(false);
        navigate(location?.state || "/");
      })
      .catch((err) => {
        setLoading(false);
        alert(err.message);
      });
  };
  // chatgpt_Code
  // const handleRegistration = async (data) => {
  //   try {
  //     setLoading(true);

  //     // 1. Create User
  //     const result = await CreateUser(data.email, data.password);

  //     // 2. Upload Image
  //     const formData = new FormData();
  //     formData.append("image", data.photo[0]);

  //     const imageApiUrl = `https://api.imgbb.com/1/upload?key=${
  //       import.meta.env.VITE_image_host_key
  //     }`;

  //     const imgRes = await axios.post(imageApiUrl, formData);

  //     const imageUrl = imgRes?.data?.data?.url;

  //     // 3. Update Profile
  //     await updateUserProfile({
  //       displayName: data.name,
  //       photoURL: imageUrl,
  //     });

  //     // 4. Save new user to context
  //     setUser({
  //       ...result.user,
  //       displayName: data.name,
  //       photoURL: imageUrl,
  //     });

  //     reset();
  //     setLoading(false);
  //   } catch (error) {
  //     console.log(error);
  //     alert(error.message);
  //     setLoading(false);
  //   }
  // };

  return (
    <div className="card bg-base-100 mt-7.5 shadow-2xl max-w-8/12 mx-auto">
      <form onSubmit={handleSubmit(handleRegistration)} className="card-body">
        <h2 className=" text-2xl lg:text-4xl font-bold">Create an Account</h2>
        <p className="font-semibold">Register with ZapShift</p>
        <fieldset className="fieldset text-[16px]">
          {/*Photo field */}
          {/* <input type="file" className="file-input" /> */}
          <label className="label ">Photo</label>
          <input
            type="file"
            {...register("photo", { required: true })}
            className="file-input "
            placeholder="Your Photo"
          />
          {errors.photo?.type === "required" && (
            <p className="text-red-500">photo is required</p>
          )}
          {/* Name field */}
          <label className="label ">Name</label>
          <input
            type="text"
            {...register("name", { required: true })}
            className="input w-full"
            placeholder="Enter Your Name"
          />
          {errors.name?.type === "required" && (
            <p className="text-red-500">Name is required</p>
          )}
          {/* email field */}
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
          <Link
            state={location.state}
            to={"/login"}
            className="text-[#8FA748] hover:underline"
          >
            login
          </Link>
        </p>
        <SocialLogin></SocialLogin>
      </form>
    </div>
  );
};

export default Register;
