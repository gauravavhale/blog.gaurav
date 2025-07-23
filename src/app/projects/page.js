import React from 'react'

const Projects = () => {
  return (
    <div className='mb-10' style={{minHeight:"80vh", Width:"100vw"}}>
        <h2 className='text-4xl pt-10 pl-5 md:ml-[125px] lg:ml-[465px]'>Projects</h2>
        <div className='flex flex-col items-center gap-4 mt-4'>

            <div className='border-2 rounded-xl p-4 mt-4 w-[80vw] md:w-[60vw] md:text-center'>
                <h2 className='text-xl pb-2'>Project One</h2>
                <p>A web application for managing personal tasks and productivity</p>
                <div className='flex flex-row gap-2 mt-3 md:content-center md:justify-center'>
                    <span className='flex items-center gap-2 border border-white p-2 rounded-xl text-black bg-gray-100'>React</span> 
                    <span className='flex items-center gap-2 border border-white p-2 rounded-xl text-black bg-gray-100'>Tailwind css</span> 
                    <span className='flex items-center gap-2 border border-white p-2 rounded-xl text-black bg-gray-100'>Typescript</span>
                </div>
            </div>

            <div className='border-2 rounded-xl p-4 mt-4 w-[80vw] md:w-[60vw] md:text-center'>
                <h2 className='text-xl pb-2'>Project Two</h2>
                <p>A e-commerce platform for buying and selling products online</p>
                <div className='flex flex-row gap-2 mt-3 md:content-center md:justify-center'>
                    <span className='flex items-center gap-2 border border-white p-2 rounded-xl text-black bg-gray-100'>Next.js</span> 
                    <span className='flex items-center gap-2 border border-white p-2 rounded-xl text-black bg-gray-100'>Node.js</span> 
                    <span className='flex items-center gap-2 border border-white p-2 rounded-xl text-black bg-gray-100'>MongoDB</span>
                </div>
            </div>

            <div className='border-2 rounded-xl p-4 mt-4 w-[80vw] md:w-[60vw] md:text-center'>
                <h2 className='text-xl pb-2'>Project Three</h2>
                <p>A blogging application for creating and sharing applicaation</p>
                <div className='flex flex-row gap-2 mt-3 md:content-center md:justify-center'>
                    <span className='flex items-center gap-2 border border-white p-2 rounded-xl text-black bg-gray-100'>React</span> 
                    <span className='flex items-center gap-2 border border-white p-2 rounded-xl text-black bg-gray-100'>Tailwind css</span> 
                    <span className='flex items-center gap-2 border border-white p-2 rounded-xl text-black bg-gray-100'>Typescript</span>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Projects