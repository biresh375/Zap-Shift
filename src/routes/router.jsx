import { createBrowserRouter } from "react-router";
import RootLeyout from "../Leyouts/RootLeyout";
import Home from "../Pages/Home/Home/Home";
import Coverage from "../Pages/Covarage/Coverage";
import AuthLeyout from "../Leyouts/AuthLeyout";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";

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
    ],
  },
  {
    path:"/",
    element:<AuthLeyout></AuthLeyout>,
    children:[
      {
        path:"login",
        element:<Login></Login>
      },
      {
        path:"register",
        element:<Register></Register>
      }
    ]
  }
]);
