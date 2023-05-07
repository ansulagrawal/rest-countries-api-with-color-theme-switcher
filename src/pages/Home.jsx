import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar.jsx';

const Home = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Home;
