import React from 'react'
import Link from 'next/link';

const blogList = [
  {
    slug: 'react-server-vs-client-components',
    title: 'React Server vs Client Components',
    date: 'November 11, 2025',
    summary: 'Understanding the difference between Server Components and Client Components in Next.js when to use what and why it matters.',
  },
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
  },
  {
    slug: 'javascript-tips',
    title: 'JavaScript Tips and Tricks',
    date: 'April 10, 2025',
    summary: 'Clean and efficient JavaScript tips like optional chaining, destructuring, async/await, and more.',
  },
  {
    slug: 'react-hooks-guide',
    title: 'Mastering React Hooks',
    date: 'January 18, 2025',
    summary: 'A complete guide to React Hooks including useState, useEffect, useContext, and custom hooks.',
  },
  {
    slug: 'mongodb-mongoose-guide',
    title: 'MongoDB & Mongoose Guide',
    date: 'December 5, 2024',
    summary: 'Learn how to connect MongoDB with Mongoose, define schemas, and perform CRUD operations.',
  },
  {
    slug: 'tailwind-css-tips',
    title: 'Tailwind CSS Tips',
    date: 'December 2, 2024',
    summary: 'Pro tips for using Tailwind CSS like @apply, responsive utilities, dark mode, and plugin support.',
  },
  {
    slug: 'nextjs-app-router',
    title: 'Next.js App Router Guide',
    date: 'December 1, 2024',
    summary: 'Understand the new App Router in Next.js with layouts, dynamic routes, and server components.',
  },
  {
    slug: 'git-tips-every-dev',
    title: 'Git Tips Every Developer Should Know',
    date: 'November 10, 2024',
    summary: 'Essential Git commands and techniques to improve version control, workflows, and productivity.',
  },
];

const Blog = () => {
  return (
    <div className="mb-16 mt-20 mx-auto px-4" style={{ minHeight: '80vh' }}>
      
      <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-10 text-center">
        Blog
      </h1>

      <div className="flex flex-col items-center gap-6">

        {blogList.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="w-full sm:w-[75vw] md:w-[67vw] lg:w-[40vw] transition-transform duration-300 hover:scale-[1.015]"
          >
            <div className="flex flex-col sm:flex-row border border-gray-700 bg-[#1e1e1e] hover:bg-[#252525] shadow-md rounded-xl overflow-hidden">
              
              <div className="sm:w-1/3 p-4 border-b sm:border-b-0 sm:border-r border-gray-700 text-sm text-purple-400 font-medium">
                {post.date}
              </div>

              <div className="sm:w-2/3 p-4">
                <h4 className="text-lg font-semibold text-white mb-2">
                  {post.title}
                </h4>
                <p className="text-gray-400 line-clamp-2 text-sm">
                  {post.summary}
                </p>
              </div>
            </div>
          </Link>
        ))}
        
      </div>
    </div>
  );
};


export default Blog