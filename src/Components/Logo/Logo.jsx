import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router";
const Logo = () => {
  return (
    <Link to={"/"}>
      <div className="flex justify-center items-center relative">
        <img src={logo} alt="" />
        <h1 className="font-bold text-3xl mt-5 -ml-2">ZapShift</h1>
      </div>
    </Link>
  );
};

export default Logo;
