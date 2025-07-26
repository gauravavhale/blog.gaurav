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
    <nav className='fixed top-0 z-50 bg-[#121212] flex  items-center p-4 border-b border-white w-[100vw] pr-[12px] sm-pr[16px] md:pr-[100px] lg:pr-[200px]'>
        <div className='text-sm sm:text-sm md:text-lg lg:text-xl font-bold bg-[linear-gradient(288deg,_#ff8000,_#f0c_53.2394%,_#04f)] text-transparent bg-clip-text'>
            <Link href="https://www.linkedin.com/in/gaurav-avhale-631690313/"  target='_blank' >gaurav.dev</Link>
        </div>
        <div className='flex ml-auto justify-between gap-x-4 md:gap-x-12 '>
        {
          navLinks.map((nav)=>{
            return(
              <Link href={nav.href} key={nav.label} 
               className={`transition-all duration-300 ease-in-out
                ${ pathname == nav.href ? ' text-[#666666] font-bold ' : 'text-white'} `}
              >
                {nav.label}
              </Link> 
            )
          })
        }
         </div>
    </nav>
  )
}
