import React from "react";
import { Outlet } from "react-router";
import AuthImage from "../assets/authImage.png";
import Logo from "../Components/Logo/Logo";
import Container from "../Components/Container/Container";

const AuthLeyout = () => {
  return (
    <Container>
      <div className="flex w-10/12 mx-auto h-screen items-center justify-center ">
        <div className="flex-1">
          <Logo></Logo>
          <Outlet></Outlet>
        </div>
        <div className="flex-1 hidden md:block">
          <img src={AuthImage} alt="AuthImage" />
        </div>
      </div>
    </Container>
  );
};

export default AuthLeyout;
