import React from "react";
import { Outlet } from "react-router";
import AuthImage from "../assets/authImage.png";
import Logo from "../Components/Logo/Logo";

const AuthLeyout = () => {
  return (
    <div className="flex">
      <div className="flex-1">
        <Logo></Logo>
        <Outlet></Outlet>
      </div>
      <div className="flex-1">
        <img src={AuthImage} alt="AuthImage" />
      </div>
    </div>
  );
};

export default AuthLeyout;
