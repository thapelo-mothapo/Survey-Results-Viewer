import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./containers/404";
import Dashboard from "./containers/dashboard";
import SurveyDetails from "./containers/surveys";

const Router: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
    },

    {
      path: "/surveys/:id",
      element: <SurveyDetails />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return <RouterProvider router={router} />;
};
export default Router;
