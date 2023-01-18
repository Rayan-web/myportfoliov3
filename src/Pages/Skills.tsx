import React from 'react'
// import Coding from"../Assets/coding.png"
import Userinterface from"../Assets/userinterface.svg"
import Frontend from"../Assets/frontend.svg"
import Backend from"../Assets/backend.svg"
export const Skills = () => {
  return (
    <section className='' id='skills'>
      <h1 className='text-3xl text-center font-bold mt-10 darkText ' >Skills</h1>
      <p className='text-center  text-sm mt-5 font-semibold px-10 darkText ' >View my skills and see how I can help bring your web development project to the next level. My expertise includes front-end and back-end development. Check out my skills now</p>
    <div className="flex flex-wrap justify-center  lg:justify-between gap-10 lg:gap-0 md:gap-0   mt-20   ">
     <div className="lg:max-w-md   md:max-w-sm max-w-xs py-10 px-10 overflow-hidden rounded-xl cursor-pointer  testt hover:shadow-2xl duration-200 hover:scale-105 ">
      <div className="bg-slate-700 darkroundBG rounded-full">
       <img src={Backend} alt="plant" className=" w-full rounded-full" />
    </div>
    <div className="p-5 cardDiv">
      <h1 className='text-center  text-primary text-base md:text-lg lg:text-3xl font-semibold ' >Backend</h1>
      <p className="text-medium mb-5 text-center tracking-widest  m-auto text-gray-700">I am a backend developer with experience in Node.js, MongoDB and Firebase. My goal is to create efficient and scalable server-side solutions to support and enhance the user experience of websites.</p>
    </div>
  </div>
  <div className="lg:max-w-md   md:max-w-sm max-w-xs py-10 px-10 overflow-hidden rounded-xl cursor-pointer  testt hover:shadow-2xl duration-200 hover:scale-105 ">
      <div className="bg-slate-700 darkroundBG rounded-full">
       <img src={Userinterface} alt="plant" className=" w-full rounded-full" />
    </div>
    <div className="p-5 cardDiv">
      <h1 className='text-center  text-primary text-base md:text-lg lg:text-3xl font-semibold ' >Frontend</h1>
      <p className="text-medium mb-5 text-gray-700">I am a front-end developer with experience in React JS, HTML, CSS, and Javascript. I have used CSS frameworks to create visually appealing websites and have experience with full-stack development. My goal is to create user-friendly, responsive websites.</p>
    </div>
  </div>
  <div className="lg:max-w-md   md:max-w-sm max-w-xs py-10 px-10 overflow-hidden rounded-xl cursor-pointer  testt hover:shadow-2xl duration-200 hover:scale-105 ">
      <div className="bg-slate-700 darkroundBG rounded-full">
       <img src={Frontend} alt="plant" className=" w-full rounded-full" />
    </div>
    <div className="p-5 cardDiv">
      <h1 className='text-center  text-primary text-base md:text-lg lg:text-3xl font-semibold '>Wordpress</h1>
      <p className="text-medium mb-5 text-gray-700">
      As a WordPress developer, I specialize in creating custom, fully-functional websites for businesses. My services include custom WordPress theme and plugin development, WooCommerce customization, website migrations, performance optimization, and ongoing support and maintenance.
      </p>
    </div>
  </div>
</div>
</section>
  )
}
