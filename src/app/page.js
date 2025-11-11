"use client"
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

const blogList = [
  {
    slug: 'mern-auth-jwt-guide',
    title: 'MERN Authentication With JWT',
    date: 'October 12, 2025',
    summary: 'A clear guide to implementing secure authentication using JWT, Refresh Tokens, Cookies, and Protected Routes.',
  },
  {
    slug: 'nextjs-deployment-to-vercel',
    title: 'Deploying Next.js App to Vercel',
    date: 'September 20, 2025',
    summary: 'Step-by-step process to deploy your Next.js project to Vercel with environment variables and build optimizations.',
  },
  {
    slug: 'how-i-built-wanderlust',
    title: 'How I Built WanderLust Travel Hub',
    date: 'August 5, 2025',
    summary: 'The full breakdown of designing, structuring, and deploying the WanderLust Travel Hub project from scratch.',
  }
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
  <h2 className="text-xl font-semibold text-white">UrbanPick</h2>
  <p className="text-sm text-gray-300 mt-2 mb-4 leading-6">
    A modern grocery ordering app with real-time cart updates, product browsing, and user auth. Built with MERN Stack and JWT.
  </p>
  <div className="flex gap-3">
    <Link
      href="https://github.com/gauravavhale/UrbanPick_Frontend"
      target="_blank"
      className="text-sm border border-[#444] text-white hover:bg-[#333] px-4 py-2 rounded-xl transition"
    >
      GitHub
    </Link>
    <Link
      href="https://urban-pick.vercel.app/"
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

    <div className="bg-[#1e1e1e] hover:bg-[#252525] w-[90vw] sm:w-[75vw] md:w-[40vw] lg:w-[30vw] p-5 border border-[#2a2a2a] rounded-2xl transition-all duration-300">
  <h2 className="text-xl font-semibold text-white">WanderLust Travel Hub</h2>
  <p className="text-sm text-gray-300 mt-2 mb-4 leading-6">
    A travel exploration platform built with Next.js and Tailwind CSS. Browse destinations and get personalized trip inspiration.
  </p>
  <div className="flex gap-3">
    <Link
      href="https://github.com/gauravavhale/wanderlust_frontend"
      target="_blank"
      className="text-sm border border-[#444] text-white hover:bg-[#333] px-4 py-2 rounded-xl transition"
    >
      GitHub
    </Link>
    <Link
      href="https://wanderlusttravelhub.vercel.app/"
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
