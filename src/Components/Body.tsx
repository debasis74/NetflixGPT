import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Login";
import Browser from "./Browser";

const Body = () => {
  const bodyRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browser/>
    },
  ]);
  return (
    <>
      <RouterProvider router= {bodyRouter}/>
    </>
  );
};

export default Body;
