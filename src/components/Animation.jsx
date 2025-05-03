import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Animation = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in milliseconds
      once: true,     // whether animation should happen only once - while scrolling down
    });
  }, []);

  return (
    <>
    <div className='w-full h-[100vh] flex items-center justify-center bg-gray-400 font-700 text-60px'>
      KOREDE
    </div>
      <div className='w-full h-[100vh] flex items-center justify-center bg-blue-400 font-700 text-60px'>
      KOREDE
    </div>
    <div className='w-full h-[100vh] flex items-center justify-center bg-yellow-400 font-700 text-60px'>
      KOREDE
    </div>
    <div className='w-full h-[100vh] flex items-center justify-center bg-purple-400 font-700 text-60px'>
      KOREDE
    </div>
    <div className='w-full h-[100vh] flex items-center justify-center bg-green-400 font-700 text-60px'>
      KOREDE
    </div>
    </>
  );
};

export default Animation;
