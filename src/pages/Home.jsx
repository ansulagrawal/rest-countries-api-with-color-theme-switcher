import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar.jsx';

const home = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default home;
