import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className='mb-10' style={{minHeight:"80vh"}}>
    
    {/* Intro */}
    <div className="mt-15 flex flex-col md:flex-row items-center text-center md:text-left gap-6 ">
      <div className="w-full md:w-1/3 flex justify-center ">
         <div className="w-[300px] h-[300px] rounded-full overflow-hidden bg-cyan-100 m-0 md:ml-0 lg:ml-48">
            <Image src="/images/avatar3.png"  width={300} height={300} className="object-cover w-full h-full" alt="avatar"></Image>
         </div>
      </div>
      <div className="w-full md:w-2/3">
        <h1 className="text-2xl md:text-4xl lg:text-5xl">{`Hey, I'm Gaurav `}<br/>
          a full-stack developer sharing<br/> 
          my tech journey<br/>
          in web development.</h1>        
      </div>
    </div>


    {/* Latest Project */}
    <div className="mt-10 mb-10">
      <h2 className="text-center mb-6 text-2xl font-bold">Latest Projects</h2> 
      <div className="flex flex-col items-center gap-2 md:flex-row justify-center">

        <div className=" items-center w-70 h-40 p-4 m-2 border-2 border-white rounded-2xl">
          <h2 className="text-xl">Javascript Tips and Tricks</h2>
          <div className="text-sm m-1"> April 19 2024 </div>
          <div className="text-sm m-1">Javascript Tips and Tricks</div>
          <button className=" text-sm border-2 p-2 rounded-xl mt-2"> Read More </button>
        </div> 

        <div className=" items-center w-70 h-40 p-4 m-2 border-2 border-white rounded-2xl ">
          <h2 className="text-xl">Javascript Tips and Tricks</h2>
          <div className="text-sm m-1"> April 19 2024 </div>
          <div className="text-sm m-1">Javascript Tips and Tricks</div>
          <button className=" text-sm border-2 p-2 rounded-xl mt-2"> Read More </button>
        </div>

        <div className=" items-center w-70 h-40 p-4 m-2 border-2 border-white rounded-2xl">
          <h2 className="text-xl">Javascript Tips and Tricks</h2>
          <div className="text-sm m-1"> April 19 2024 </div>
          <div className="text-sm m-1">Javascript Tips and Tricks</div>
          <button className=" text-sm border-2 p-2 rounded-xl mt-2"> Read More </button>
        </div>

        <div className=" items-center w-70 h-40 p-4 m-2 border-2 border-white rounded-2xl">
          <h2 className="text-xl">Javascript Tips and Tricks</h2>
          <div className="text-sm m-1"> April 19 2024 </div>
          <div className="text-sm m-1">Javascript Tips and Tricks</div>
          <button className=" text-sm border-2 p-2 rounded-xl mt-2"> Read More </button>
        </div>

      </div>
    </div>

    {/* Featured Prodcuts */}
    <div>
      <h2 className="text-center mb-6 text-2xl font-bold">Featured Projects</h2>
      <div className="flex flex-col items-center gap-2 md:flex-row justify-center">

        <div className=" items-center w-100 h-40 p-4 m-2 border-2 border-white rounded-2xl">
          <h2 className="text-xl">SwiftCart</h2>
          <div className="text-sm m-1 mb-6">A full-stack e-commerce web application built with React, Next.js, Redux, Express, Node.js, JWT, and MongoDB.</div>
          <Link href={'/'} className=" text-sm border-2 p-2 rounded-xl mt-2 mr-4"> GitHub </Link>
          <Link href={'/'} className=" text-sm border-2 p-2 rounded-xl mt-2"> Live Demo </Link>
        </div>

        <div className=" items-center w-100 h-40 p-4 m-2 border-2 border-white rounded-2xl">
          <h2 className="text-xl">Personal Portfolio</h2>
          <div className="text-sm m-1 mb-6">A fully responsive portfolio website crafted with React, Next.js</div>
          <Link href={'/'} className=" text-sm border-2 p-2 rounded-xl mt-2 mr-4"> GitHub </Link>
          <Link href={'/'} className=" text-sm border-2 p-2 rounded-xl mt-2"> Live Demo </Link>
        </div>

      </div>
      <div className="m-10 text-center text-sm">Currently learning Next.js App/Router - follow along</div>
    </div>


    </div>
  );
}
