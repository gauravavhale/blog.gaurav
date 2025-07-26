import React from 'react'
import Link from 'next/link';

const blogList = [
  {
    slug: 'javascript-tips',
    title: 'JavaScript Tips and Tricks',
    date: 'April 10, 2024',
    summary: 'Clean and efficient JavaScript tips like optional chaining, destructuring, async/await, and more.',
  },
  {
    slug: 'react-hooks-guide',
    title: 'Mastering React Hooks',
    date: 'April 18, 2024',
    summary: 'A complete guide to React Hooks including useState, useEffect, useContext, and custom hooks.',
  },
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

const Blog = () => {
  return (
    <div className='mb-10 mt-15 mx-auto' style={{minHeight:"80vh"}}>
        <div className='text-4xl pt-10 pl-5 md:ml-[125px] lg:ml-[465px]'>Blog</div>

        <div className='flex flex-col items-center gap-4 pt-10 pr-5 pl-5'>

            {blogList.map((post)=>{
            return (
                <Link key={post.slug} href={`/blog/${post.slug}`} className='w-full sm:w-[75vw] md:w-[67vw] lg:w-[35vw]'>
                <div className='flex border-2 border-[#2a2a2a] w-full sm:w-full sm:h-15 md:w-140 md:h-25 rounded-xl'>
                <div className=' w-1/3 p-4'>
                    {post.date} 
                </div>
                <div className=' w-2/3 p-4'>
                    <h4 className='font-bold mb-3 md:mb-4'>{post.title}</h4>
                    <p className='line-clamp-1'>{post.summary}</p>
                </div>
                </div>
                </Link>
            )
            })}

        </div>

    </div>
  )
}

export default Blog