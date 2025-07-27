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
    
    <div className="flex flex-col md:flex-row items-center text-center md:text-left gap-6 ">
      <div className="w-full md:w-1/3 flex justify-center md:justify-end items-center">
          <div className="w-[180px] h-[180px] sm:w-[200px] sm:h-[200px] md:w-[250px] md:h-[250px] rounded-full overflow-hidden shadow-lg border border-gray-700">
            <Image
              src="/images/avatar3.png"
              width={300}
              height={300}
              className="object-cover w-full h-full"
              alt="avatar"
            />
          </div>
      </div>

      <div className="w-full md:w-2/3">
        <h1 className="font-extrabold text-2xl leading-tight sm:text-3xl sm:leading-snug md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight text-white">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600">
          {`Hey, I'm Gaurav `}
          </span>
          <br/>
          <span className="text-gray-300 font-semibold">
            a full-stack developer sharing
          </span>
          <br/> 
          <span className="text-gray-400">
            my tech journey
          </span>
          <br/>
          <span className="text-gray-500">
            in web development.
          </span>
        </h1>        
      </div>
    </div>


<div className="mt-10 md:mt-20 mb-16">
  <h2 className="text-center mb-8 text-3xl font-bold text-white">Latest Blog</h2> 
  <div className="flex flex-col md:flex-row justify-center items-center gap-6 flex-wrap px-4">

    {blogList.map((blog) => (
      <div
        key={blog.slug}
        className="bg-[#1e1e1e] hover:bg-[#252525] w-[90vw] sm:w-[75vw] md:w-[40vw] lg:w-[30vw] p-5 border border-[#2a2a2a] rounded-2xl transition-all duration-300"
      >
        <h2 className="text-xl font-semibold text-white line-clamp-1">{blog.title}</h2>
        <div className="text-sm text-gray-400 my-1">{blog.date}</div>
        <div className="text-sm text-gray-300 line-clamp-2">{blog.summary}</div>
        <Link href={`/blog/${blog.slug}`} className="inline-block mt-4">
          <div className="text-sm text-white border border-[#444] hover:bg-[#333] px-4 py-2 rounded-xl transition">
            Read More
          </div>
        </Link>
      </div>
    ))}

  </div>
</div>

<div className="mb-10">
  <h2 className="text-center mb-8 text-3xl font-bold text-white">Featured Projects</h2>
  <div className="flex flex-col md:flex-row justify-center items-center gap-6 flex-wrap px-4">

    <div className="bg-[#1e1e1e] hover:bg-[#252525] w-[90vw] sm:w-[75vw] md:w-[40vw] lg:w-[30vw] p-5 border border-[#2a2a2a] rounded-2xl transition-all duration-300">
      <h2 className="text-xl font-semibold text-white">SwiftCart</h2>
      <p className="text-sm text-gray-300 mt-2 mb-4 leading-6">
        A full-stack e-commerce web application built with React, Next.js, Express, Node.js, JWT, and MongoDB.
      </p>
      <div className="flex gap-3">
        <Link
          href="https://github.com/gauravavhale/e-commerce"
          target="_blank"
          className="text-sm border border-[#444] text-white hover:bg-[#333] px-4 py-2 rounded-xl transition"
        >
          GitHub
        </Link>
        <Link
          href="https://swift-cart-gaurav-avhales-projects.vercel.app/"
          target="_blank"
          className="text-sm border border-[#444] text-white hover:bg-[#333] px-4 py-2 rounded-xl transition"
        >
          Live Demo
        </Link>
      </div>
    </div>

    <div className="bg-[#1e1e1e] hover:bg-[#252525] w-[90vw] sm:w-[75vw] md:w-[40vw] lg:w-[30vw] p-5 border border-[#2a2a2a] rounded-2xl transition-all duration-300">
      <h2 className="text-xl font-semibold text-white">Personal Portfolio</h2>
      <p className="text-sm text-gray-300 mt-2 mb-4 leading-6">
        A fully responsive portfolio website crafted with React and Next.js. It showcases my projects, skills, and journey as a developer.
      </p>
      <div className="flex gap-3">
        <Link
          href="https://github.com/gauravavhale/portfolioo"
          target="_blank"
          className="text-sm border border-[#444] text-white hover:bg-[#333] px-4 py-2 rounded-xl transition"
        >
          GitHub
        </Link>
        <Link
          href="https://portfolioo-gaurav-avhales-projects.vercel.app/"
          target="_blank"
          className="text-sm border border-[#444] text-white hover:bg-[#333] px-4 py-2 rounded-xl transition"
        >
          Live Demo
        </Link>
      </div>
    </div>
  </div>

  <div className="text-center text-sm text-purple-300 mt-10">
    Currently diving into GraphQL - follow along!
  </div>
</div>



    </div>
  );
}
