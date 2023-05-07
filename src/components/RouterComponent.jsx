import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../pages/home.jsx';
import Country from '../pages/Country.jsx';
import CountryDetail from '../pages/CountryDetail.jsx';

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
