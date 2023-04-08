import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootElement from "./pages/RootElement";
import Home, { loader as formLoader } from "./pages/Home";
import { ContextProvider } from "./context/context";
import Country, { loader as countryLoader } from "./pages/Country";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ContextProvider>
        <RootElement />
      </ContextProvider>
    ),
    children: [
      {
        index: true,
        element: <Home />,
        loader: formLoader,
      },
      { path: ":id", element: <Country />, loader: countryLoader },
    ],
  },
], {basename: '/rest-countries-api-with-color-theme-switcher'});

export default function App() {
  return <RouterProvider router={router} />;
}
