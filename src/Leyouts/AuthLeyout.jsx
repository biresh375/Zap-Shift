import React from "react";
import { Outlet } from "react-router";
import AuthImage from "../assets/authImage.png";
import Logo from "../Components/Logo/Logo";
import Container from "../Components/Container/Container";

const AuthLeyout = () => {
  return (
    <div className="flex  mx-auto h-screen items-center justify-center ">
      <div className="flex-1 ">
        <Logo></Logo>
        <Outlet></Outlet>
      </div>
      <div className="flex-1 hidden md:flex justify-center items-center bg-[#FAFDF0] h-screen  ">
        <img src={AuthImage} alt="AuthImage" />
      </div>
    </div>
  );
};

export default AuthLeyout;
