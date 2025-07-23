"use client"
import React from 'react'
import Link from 'next/link'

export const Navbar = () => {

  return (
    <nav className='fixed top-0 z-50 bg-[#121212] flex  items-center p-4 border-b border-white w-[100vw] pr-[12px] sm-pr[16px] md:pr-[100px] lg:pr-[200px]'>
        <div className='text-sm sm:text-sm md:text-lg lg:text-xl font-bold'>
            <Link href="https://www.linkedin.com/in/gaurav-avhale-631690313/" target='_blank' >gaurav.dev</Link>
        </div>
        <div className='flex ml-auto justify-between gap-x-4 md:gap-x-12'>
            <Link href='/'>Home</Link>
            <Link href='/about'>About</Link>
            <Link href='/blog'>blog</Link>
            <Link href='/projects'>Project</Link>
        </div>
    </nav>
  )
}
