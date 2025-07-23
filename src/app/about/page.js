import React from 'react'
import Image from 'next/image'
import { SiJavascript, SiTailwindcss, SiBootstrap, SiRedux, SiNextdotjs, SiReact, SiNodedotjs, SiMongodb, SiGraphql } from 'react-icons/si';
import { FaMobileAlt } from 'react-icons/fa';
import { BiLockAlt } from 'react-icons/bi'; // for JWT
import { LiaFileCodeSolid } from 'react-icons/lia'; // for Rest API


const about = () => {
  return (
    <div className=' mb-10 pb-5 pr-5 pl-5 mt-15' style={{minHeight:"80vh"}}>
        <h2 className='text-4xl pt-10 pl-5 md:ml-[125px] lg:ml-[465px]'>About</h2>
        
        <div className='flex flex-col items-center'>

          <div >
            <Image src="/images/avatar3.png" width={100} height={100} alt='avatar'></Image>
          </div>

          <div className='sm:text-xl md:text-xl text-center mt-1'>
            <h2> {`I'm`} a full-stack developer based in Pune, India.<br/>
                   I enjoy building web application and learn new technologies</h2>
            <h2 className="text-purple-300 mt-5 mb-4">{`"An Arts Graduate Navigating the Tech World `}<br/>{` One Line of Code at a Time."`}</h2>
            <p>My background might not be in Computer Science, 
              but my curiosity for how things work on the web led me here.<br/> 
              I started with zero experience, just a spark of interest
              and now <br/> {`I'm`} diving deep into web development, building 
              projects with React, Next.js, and exploring the magic of clean UI.</p>
          </div>

          <div className='mt-10'>
            <h2 className='text-2xl'>Skills</h2>
            <div className='container border-2 rounded-xl border-white mt-4 p-4'>
              <div className='flex flex-wrap gap-3 max-w-[70vw] content-center justify-center'>
                  <span className='flex items-center gap-2 border border-white p-2 rounded-xl text-black bg-gray-100'><SiJavascript className='text-yellow-300' /> JavaScript</span>
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




{/* <h1 className="text-cyan-300">No Tech Degree. Just Pure Dedication and Passion for Coding.</h1>
        <h3>Join me on my journey as I share my experiences, challenges, and triumphs in the world of web development.
            From coding tutorials to personal insights, this blog is a reflection of my growth as a developer and my love for technology.
            {`Let's`} explore the fascinating world of coding together! 
        </h3> */}