"use client"
import React, { useEffect } from 'react'
import Link from 'next/link'
import { HiOutlineLightBulb } from "react-icons/hi";


export const Navbar = () => {

  // const [ theme,setTheme ] = React.useState('dark');

  // useEffect(()=>{
  //   const storedTheme = localStorage.getItem("theme") || "dark";
  //   if(storedTheme){
  //     setTheme(storedTheme);
  //     document.documentElement.classList.add(storedTheme)
  //   } 
  //   else{
  //     setTheme("dark");
  //     document.documentElement.classList.add("dark")
  //   }
  // },[])

  // const toggleTheme=()=>{
  //   const newTheme = theme === "dark" ? "light" : "dark"
  //   setTheme(newTheme);
  //   localStorage.setItem("theme",newTheme)
  //   document.documentElement.classList.remove(theme)
  //   document.documentElement.classList.add(newTheme)
  // }

  return (
    <nav className='fixed top-0 z-50 bg-[#121212] flex  items-center p-4 border-b border-white w-[100vw] pr-[12px] sm-pr[16px] md:pr-[100px] lg:pr-[200px]'>
        <div className='text-sm sm:text-sm md:text-lg lg:text-xl font-bold'>
            <h5>gaurav.dev</h5>
        </div>
        <div className='flex ml-auto justify-between gap-x-4 md:gap-x-12'>
            <Link href='/'>Home</Link>
            <Link href='/about'>About</Link>
            <Link href='/blog'>blog</Link>
            <Link href='/projects'>Project</Link>
            {/* <button > 
              {/* onClick={toggleTheme} */}
              {/* <HiOutlineLightBulb className='text-2xl' />
            </button> */}
        </div>
    </nav>
  )
}
