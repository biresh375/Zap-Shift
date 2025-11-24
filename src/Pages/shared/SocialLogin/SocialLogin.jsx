import React from "react";
import { FcGoogle } from "react-icons/fc";
import UseAuth from "../../../Hooks/UseAuth";
import { useLocation, useNavigate } from "react-router";

const SocialLogin = () => {
  const { googleSignIn, setUser } = UseAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const handlegoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        setUser(result.user);
        navigate(location?.state || "/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div>
      <div className="divider">OR</div>
      <button
        onClick={handlegoogleSignIn}
        className="btn bg-[#E9ECF1] hover:bg-white text-black border-[#e5e5e5] w-full"
      >
        <FcGoogle className="text-xl" />
        Login with Google
      </button>
    </div>
  );
};

export default SocialLogin;
