import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Pages/shared/Navbar/Navbar";
import Footer from "../Pages/shared/Footer/Footer";
import Container from "../Components/Container/Container";

const RootLeyout = () => {
  return (
    <div className="min-h-screen">
      <Container>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
      </Container>
    </div>
  );
};

export default RootLeyout;
