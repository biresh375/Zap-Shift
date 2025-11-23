import React from "react";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  return (
    <div>
      <div className="divider">OR</div>
      <button className="btn bg-[#E9ECF1] hover:bg-white text-black border-[#e5e5e5] w-full">
        <FcGoogle className="text-xl" />
        Login with Google
      </button>
    </div>
  );
};

export default SocialLogin;
