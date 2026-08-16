import React, { useState, useEffect } from 'react'
import { IoMoon, IoSunny } from "react-icons/io5";

export default function Navbar() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <>
     <header className='bg-card  shadow-lg py-6'>
                <div className=" container flex justify-between items-center">
                   <h1 className="text-lg lg:text-2xl font-bold">
                       Where in the world ?
                   </h1>
                   <button
                     onClick={() => setIsDark((prev) => !prev)}
                     className=' icon-wrapper flex gap-2 items-center cursor-pointer lg:text-[17px]'
                   >
                        {isDark ? <IoSunny /> : <IoMoon />}
                        <span className=' capitalize select-none'>
                          {isDark ? 'light mode' : 'dark mode'}
                        </span>
                   </button>
                </div>
          </header>
    </>
  )
}