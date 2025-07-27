"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const Navbar = () => {

  const pathname = usePathname()

  const navLinks = [
    {href:'/',label:'Home'},
    {href:'/about', label:'About'},
    {href:'/blog', label:'Blog'},
    {href:'/diary', label:'Diary'}
  ]

  return (
    <nav className="fixed top-0 z-50 w-full bg-[#121212] border-b border-gray-800 flex items-center px-4 py-3 sm:px-6 md:px-20 lg:px-32 shadow-md">
        
        <div className="text-lg sm:text-xl font-extrabold bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-transparent bg-clip-text">
          <Link href="https://www.linkedin.com/in/gaurav-avhale-631690313/" target="_blank">
            gaurav.dev
          </Link>
        </div>

        
        <div className="flex ml-auto gap-x-4 sm:gap-x-6 md:gap-x-10">
          {navLinks.map((nav) => (
            <Link
              href={nav.href}
              key={nav.label}
              className={`text-sm md:text-base transition-all duration-300 ease-in-out hover:text-white
                ${pathname === nav.href ? 'text-white font-semibold' : 'text-gray-400 hover:underline'}`}
            >
              {nav.label}
            </Link>
          ))}
        </div>
    </nav>
  )
}
