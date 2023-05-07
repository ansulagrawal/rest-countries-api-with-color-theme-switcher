import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Country from './pages/Country';
import CountryDetail from './pages/CountryDetail';
import Home from './pages/Home';

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
