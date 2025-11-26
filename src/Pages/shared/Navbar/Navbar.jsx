import React, { useState } from "react";
import Logo from "../../../Components/Logo/Logo";
import Container from "../../../Components/Container/Container";
import { Link, NavLink } from "react-router";
import UseAuth from "../../../Hooks/UseAuth";
import { FaUserCircle } from "react-icons/fa";
import Loading from "../../../Components/Loading/Loading";

const Navbar = () => {
  const { user, logOut } = UseAuth();

  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState(false);
  const handleLogout = () => {
    logOut()
      .then(() => {
        alert("signOUt secessfully");
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  const links = (
    <>
      <NavLink to={"/"} className={`mr-2.5`}>
        Home
      </NavLink>
      <NavLink to={"/aboutus"} className={`mr-2.5`}>
        About Us
      </NavLink>
      <NavLink to="/send-parcel" className={`mr-2.5`}>
        Send Parcel
      </NavLink>
      <NavLink to="/coverage" className={`mr-2.5`}>
        Coverage
      </NavLink>
      {user && (
        <>
          <NavLink to="/dashbord/my-parcels" className={`mr-2.5`}>
            My Parcels
          </NavLink>
        </>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Logo></Logo>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      {user ? (
        <div className="navbar-end">
          <div className="container mx-auto flex justify-end items-center ">
            {/* <h1 className="text-xl font-semibold"></h1> */}

            {/* Profile Section */}
            <div className="relative">
              {/* Profile Image */}
              <img
                src={user.photoURL}
                alt="profile"
                className="w-10 h-10 rounded-full cursor-pointer border-2 border-primary"
                onClick={() => setOpen(!open)}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
              />

              {/* Hover → Profile Name */}
              {hover && !open && (
                <div className="absolute right-0 mt-2 px-3 py-2 bg-white rounded-lg shadow text-sm font-medium text-nowrap">
                  {user.displayName}
                </div>
              )}

              {/* Click → Logout Button */}
              {open && (
                <div className="absolute right-0 mt-2 w-32 bg-white rounded-xl shadow-lg p-3 z-50">
                  <p className="text-center font-medium mb-2">
                    {user.displayName}
                  </p>
                  <button
                    onClick={handleLogout}
                    className="btn btn-primary text-black btn-sm w-full"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="navbar-end">
          <Link to={"/login"} className="btn mr-2.5">
            Log in
          </Link>
        </div>
      )}
      <div>
        <Link
          to={"/be-a-Rider"}
          className="btn btn-primary text-black text-nowrap ml-2.5"
        >
          Be a rider
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
