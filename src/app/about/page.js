import React from 'react'
import Image from 'next/image'
import { SiJavascript, SiTailwindcss, SiBootstrap, SiRedux, SiNextdotjs, SiReact, SiNodedotjs, SiMongodb, SiGraphql } from 'react-icons/si';
import { FaMobileAlt } from 'react-icons/fa';
import { BiLockAlt } from 'react-icons/bi'; // for JWT
import { LiaFileCodeSolid } from 'react-icons/lia'; // for Rest API
import Link from 'next/link';


const about = () => {
  return (
    <div className=' mb-10 pb-5 pr-5 pl-5 mt-15' style={{minHeight:"80vh"}}>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-white pt-10 pl-5 md:ml-[125px] lg:ml-[465px]">
        About
        </h1>
        
        <div className='flex flex-col items-center'>

          <div className="w-full flex justify-center items-center">
              <div className="w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px] rounded-full overflow-hidden border-2 border-gray-700 shadow-md">
                <Image
                  src="/images/avatar3.png"
                  width={200}
                  height={200}
                  alt="avatar"
                  className="object-cover w-full h-full"
                />
              </div>
          </div>


          <div className="sm:text-xl md:text-xl text-center mt-6 px-4 md:px-10 lg:px-32 text-gray-300 leading-relaxed">
              <h2 className="text-xl md:text-3xl font-semibold text-white mb-4">
                {`I'm `}a full-stack developer based in Pune, India.
                <br />
                I enjoy building web applications and learning new technologies.
              </h2>
              
              <h2 className="text-lg sm:text-xl md:text-2xl font-medium mt-6 mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 text-transparent bg-clip-text">
                {`"An Arts Graduate Navigating the Tech World"`}
                <br />
                {`"One Line of Code at a Time."`}
              </h2>

              <p className="text-base sm:text-lg text-gray-400">
                My background might not be in Computer Science,
                but my curiosity for how things work on the web led me here.
                <br />
                I started with zero experience just a spark of interest
                and now {`I'm`} diving deep into web development,
                building projects with <span className="text-white font-semibold">React</span>, <span className="text-white font-semibold">Next.js</span>,
                and exploring the magic of <span className="italic text-purple-300">clean UI</span>.
              </p>
          </div>

          <div className="mt-8 text-sm text-gray-400">
                Curious about my personal journey ?
              <Link href="/diary" className="text-purple-400 underline hover:text-purple-300 transition duration-300">
                 Diary 📖
              </Link>
          </div>

          <div className='mt-10'>
            <h2 className='text-2xl'>Skills</h2>
            <div className='container border-2 rounded-xl border-[#2a2a2a] mt-4 p-4'>
              <div className='flex flex-wrap gap-3 max-w-[70vw] content-center justify-center'>
                  <span className='flex items-center gap-2 border border-white p-2 rounded-xl text-black bg-gray-100 '><SiJavascript className='text-yellow-300' /> JavaScript</span>
                  <span className='flex items-center gap-2 border border-white p-2 rounded-xl text-black bg-gray-100'><SiTailwindcss className='text-blue-400' /> Tailwind CSS</span>
                  <span className='flex items-center gap-2 border border-white p-2 rounded-xl text-black bg-gray-100'><SiBootstrap className='text-purple-500' /> Bootstrap</span>
                  <span className='flex items-center gap-2 border border-white p-2 rounded-xl text-black bg-gray-100'><SiRedux /> Redux</span>
                  <span className='flex items-center gap-2 border border-white p-2 rounded-xl text-black bg-gray-100'><SiReact className='text-blue-500'/> React.js</span>
                  <span className='flex items-center gap-2 border border-white p-2 rounded-xl text-black bg-gray-100'><SiNextdotjs className='text-black'/> Next.js</span>
                  <span className='flex items-center gap-2 border border-white p-2 rounded-xl text-black bg-gray-100'><SiNodedotjs className='text-green-400'/> Node.js</span>
                  <span className='flex items-center gap-2 border border-white p-2 rounded-xl text-black bg-gray-100'><LiaFileCodeSolid className='text-blue-500'/> REST API</span>
                  <span className='flex items-center gap-2 border border-white p-2 rounded-xl text-black bg-gray-100'><FaMobileAlt /> Responsive Design</span>
                  <span className='flex items-center gap-2 border border-white p-2 rounded-xl text-black bg-gray-100'><BiLockAlt className='text-gray-400'/> JWT</span>
                  <span className='flex items-center gap-2 border border-white p-2 rounded-xl text-black bg-gray-100'><SiGraphql className='text-pink-500'/> GraphQL</span>
                  <span className='flex items-center gap-2 border border-white p-2 rounded-xl text-black bg-gray-100'><SiMongodb className='text-green-600'/> MongoDB</span>
                  
              </div>
            </div>
          </div>

        </div>
    </div>
  )
}

export default about
