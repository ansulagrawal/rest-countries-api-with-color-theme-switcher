import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../pages/home';
import Country from '../pages/Country';
import CountryDetail from '../pages/CountryDetail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      { path: '/', element: <Country /> },
      { path: '/:id', element: <CountryDetail /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
