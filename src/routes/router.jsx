import { createBrowserRouter } from "react-router";
import RootLeyout from "../Leyouts/RootLeyout";
import Home from "../Pages/Home/Home/Home";
import Coverage from "../Pages/Covarage/Coverage";

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
]);
