"use client"
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

const blogList = [
  {
    slug: 'mongodb-mongoose-guide',
    title: 'MongoDB & Mongoose Guide',
    date: 'May 5, 2024',
    summary: 'Learn how to connect MongoDB with Mongoose, define schemas, and perform CRUD operations.',
  },
  {
    slug: 'tailwind-css-tips',
    title: 'Tailwind CSS Tips',
    date: 'May 12, 2024',
    summary: 'Pro tips for using Tailwind CSS like @apply, responsive utilities, dark mode, and plugin support.',
  },
  {
    slug: 'nextjs-app-router',
    title: 'Next.js App Router Guide',
    date: 'June 1, 2024',
    summary: 'Understand the new App Router in Next.js with layouts, dynamic routes, and server components.',
  },
  {
    slug: 'git-tips-every-dev',
    title: 'Git Tips Every Developer Should Know',
    date: 'June 10, 2024',
    summary: 'Essential Git commands and techniques to improve version control, workflows, and productivity.',
  },
];

export default function Home() {
  return (
    <div className='mb-10 mt-25 md:mt-30 min-h-[80vh] max-w-[100vw]'>
    
    {/* Intro */}
    <div className="flex flex-col md:flex-row items-center text-center md:text-left gap-6 ">
      <div className="w-full md:w-1/2 flex justify-center ">
         <div className="w-[200px] h-[200px] sm:w-[200px] sm:h-[200px] md:w-[250px] md:h-[250px]   m-0 md:ml-0 lg:ml-100">
            <Image src="/images/avatar3.png"  width={300} height={300} className="object-cover w-full h-full" alt="avatar"></Image>
         </div>
      </div>
      <div className="w-full md:w-1/2">
        <h1 className="text-xl leading-8 md:text-2xl md:leading-10 lg:text-3xl lg:leading-12">{`Hey, I'm Gaurav `}<br/>
          a full-stack developer sharing<br/> 
          my tech journey<br/>
          in web development.</h1>        
      </div>
    </div>


    {/* Latest Project */}
    <div className="mt-7 md:mt-15 mb-10">
      <h2 className="text-center mb-6 text-2xl font-bold">Latest Blog</h2> 
      <div className="flex flex-col items-center gap-2 md:flex-row justify-center">

        { blogList.map((blog)=>{
          return (
          <div key={blog.slug} className="bg-[#1e1e1e] hover:bg-[#252525] items-center w-70 h-40 md:h-40 lg:h-40 p-4 m-2 border-2 border-[#2a2a2a] rounded-2xl">
          <h2 className="text-xl line-clamp-1">{blog.title}</h2>
          <div className="text-sm m-1"> {blog.date} </div>
          <div className="text-sm m-1 line-clamp-1">{blog.summary}</div>
            <Link href={`/blog/${blog.slug}`} className="inline-block ">
              <div className="text-sm border-2 border-[#2a2a2a]  p-2 rounded-xl mt-2">
                Read More 
              </div>
            </Link>
          </div> 
          )
        }) }

      </div>
    </div>

    {/* Featured Prodcuts */}
    <div>
      <h2 className="text-center mb-6 text-2xl font-bold">Featured Projects</h2>
      <div className="flex flex-col items-center gap-2 md:flex-row justify-center">

        <div className="bg-[#1e1e1e] hover:bg-[#252525] items-center w-80 h-45 md:w-100 md:h-40 p-4 m-2 border-2 border-[#2a2a2a] rounded-2xl">
          <h2 className="text-xl">SwiftCart</h2>
          <div className="text-sm m-1 mb-4 leading-6">A full-stack e-commerce web application built with React, Next.js, Express, Node.js, JWT, and MongoDB.</div>
          <Link href={'https://github.com/gauravavhale/e-commerce'} target="_blank" className=" text-sm border-2 p-2 rounded-xl mt-2 mr-4 border-[#2a2a2a]"> GitHub </Link>
          <Link href={'https://swift-cart-gaurav-avhales-projects.vercel.app/'} target="_blank" className=" text-sm border-2 p-2 rounded-xl mt-2 border-[#2a2a2a]"> Live Demo </Link>
        </div>

        <div className="bg-[#1e1e1e] hover:bg-[#252525] items-center w-80 h-45 md:w-100 md:h-40 p-4 m-2 border-2 border-[#2a2a2a] rounded-2xl">
          <h2 className="text-xl">Personal Portfolio</h2>
          <div className="text-sm m-1 mb-4 leading-6">A fully responsive portfolio website crafted with React, Next.js.</div>
          <Link href={'https://github.com/gauravavhale/portfolioo'} target="_blank" className=" text-sm border-2 p-2 rounded-xl mt-2 mr-4 border-[#2a2a2a]"> GitHub </Link>
          <Link href={'https://portfolioo-gaurav-avhales-projects.vercel.app/'} target="_blank" className=" text-sm border-2 p-2 rounded-xl mt-2 border-[#2a2a2a]"> Live Demo </Link>
        </div>

      </div>
      <div className="m-10 text-center text-sm">Currently learning Next.js App/Router - follow along</div>
    </div>


    </div>
  );
}
