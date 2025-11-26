import { createBrowserRouter } from "react-router";
import RootLeyout from "../Leyouts/RootLeyout";
import Home from "../Pages/Home/Home/Home";
import Coverage from "../Pages/Covarage/Coverage";
import AuthLeyout from "../Leyouts/AuthLeyout";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import AboutUs from "../Pages/AboutUs/AboutUs";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import RiderRegistration from "../Pages/Auth/RiderRegistration/RiderRegistration";
import SendParcel from "../Pages/Sendparcel/SendParcel";
import DashbordLeyout from "../Leyouts/DashbordLeyout";
import MyParcel from "../Pages/Dashbordpages/MyParcel";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLeyout,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/coverage",
        element: <Coverage></Coverage>,
        loader: () => fetch("serviceCenters.json").then((res) => res.json()),
      },
      {
        path: "/aboutus",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/send-parcel",
        element: (
          <PrivateRoute>
            <SendParcel></SendParcel>
          </PrivateRoute>
        ),
        loader: () => fetch("serviceCenters.json").then((res) => res.json()),
      },
      {
        path: "/be-a-Rider",
        element: (
          <PrivateRoute>
            <RiderRegistration></RiderRegistration>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/",
    element: <AuthLeyout></AuthLeyout>,
    children: [
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "dashbord",
    element: (
      <PrivateRoute>
        <DashbordLeyout></DashbordLeyout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "my-parcels",
        element: <MyParcel></MyParcel>,
      },
    ],
  },
]);
