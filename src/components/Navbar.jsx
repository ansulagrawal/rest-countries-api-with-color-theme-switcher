import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Moon from '../assets/Moon.jsx';

const navbar = () => {
  const [dark, setDark] = useState(() => {
    if (localStorage.getItem('mode') === 'true') {
      document.documentElement.classList.add('dark');
      return true;
    }
    return false;
  });

  useEffect(() => {
    if (!localStorage.getItem('mode')) {
      localStorage.setItem('mode', true);
      setDark(true);
    }
  });
  const darkModeHandler = () => {
    setDark(!dark);
    localStorage.setItem('mode', !dark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <nav className='bg-white text-color bg-color-component border-gray-200 dark:bg-gray-900 sticky top-0 left-0 right-0 z-10'>
      <div className='max-w-screen-xl min-h-[70px] flex flex-wrap items-center justify-between mx-auto p-4'>
        <Link to='/' className='flex items-center'>
          <span className='self-center text-2xl font-extraBold whitespace-nowrap dark:text-white'>Where in the world?</span>
        </Link>
        <button className='flex items-center gap-[10px]' onClick={darkModeHandler}>
          <Moon dark={dark} className='w-[20px] h-[20px]' />
          <span className='text-[14px] md:text-[17px]'>{dark ? 'Light' : 'Dark'} Mode</span>
        </button>
      </div>
    </nav>
  );
};

export default navbar;
