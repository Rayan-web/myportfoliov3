import React, { useState } from 'react'
import {Logo} from"../Assets/test.png"
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import Typewriter from "typewriter-effect"
import "../App.css"
import { NavbarMobile } from './NavbarMobile';
import curs from"../Assets/curs.svg"
// import Lottie from "lottie-react";
// import {groovyWalkAnimation} from "./groovyWalk.json";
// import Switch from "react-switch";
import ReactSwitch from 'react-switch';
import { useContext } from 'react';
import { ThemeApi } from '../App';
import { animated, useSpring } from '@react-spring/web'
type props={
  theme:string;
  toggleTheme:()=>void;
}
export  const Navbar = ({theme,toggleTheme}:props ) => {
  const options = [
    'AR', 'EN'
  ];
  const defaultOption = options[0];
  // const Appcontext=
  // const {toggleTheme,theme}=useContext(ThemeApi)
  
  const [open,setOpen]=useState(false)
  const handelfun=()=>{
    setOpen(true)
    console.log('opened')
  }
  open?document.body.style.overflow="hidden":document.body.style.overflow="auto";
  const springs = useSpring({
    from: { x: 0 },
    to: { x: 100 },
  })

  return (
    
  
<div className="isolate is " id='home'

>
 
  <div className="px-6 pt-6 lg:px-20">
    <div>
      <nav className="flex h-9 items-center justify-between" aria-label="Global">
        <div className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
          <a href="#" className="-m-1.5 p-1.5">
          <svg width="40" height="40" viewBox="0 0 361 451" fill="none" xmlns="http://www.w3.org/2000/svg">
<path  d="M214.83 450.11L132.45 266.11L169.13 249.68L258.87 450.12L214.83 450.11ZM247 219.41C299.3 210.24 328.67 174.41 328.67 117.9C328.67 44.55 290.67 0.759998 226.96 0.759998C219.12 0.759998 211.57 0.689997 204.26 0.619997C196.95 0.549997 189.65 0.479997 182 0.479997V40.67C189.43 40.67 196.46 40.74 203.9 40.81C211.34 40.88 219 41 227 41C267.82 41 288.52 66.88 288.52 117.94C288.52 139.75 282.78 155.94 271.52 166.13C260.26 176.32 242.36 181.58 218.74 181.58C210.74 181.58 204.74 181.51 198.91 181.44C193.29 181.37 187.98 181.3 181.21 181.3V221.5C187.73 221.5 192.91 221.56 198.4 221.63L203.4 221.69L315.51 450.08H360.31L247 219.41ZM41.11 66.49C42.36 51.87 55 40.5 70 40.5H70.26L87.18 40.66C95.36 40.74 101.82 40.82 105.18 40.82V0.619997C101.98 0.619997 95.29 0.549997 87.54 0.469997L70.54 0.299997H70C52.8868 0.281586 36.3699 6.58495 23.62 18C10.6045 29.579 2.52927 45.7115 1.06 63.07C1 63.74 0.960003 64.4 0.920003 65.07C-0.769997 93.31 7.38 122.39 14.57 148.07C18.57 162.34 22.35 175.82 23.66 186.59C24.97 197.36 23.25 201.1 22.44 202.17C20.64 204.55 13.9 207.08 0.440002 207.08V247.28C18.64 247.28 22.38 251.55 22.75 252.04C23.31 252.77 25.02 255.99 23.75 266.29C22.48 276.59 18.75 289.4 14.82 303.05C7.55 328.4 -0.689997 357.12 1 385.58C1.05 386.25 1.09 386.91 1.15 387.58C2.62176 404.935 10.6968 421.064 23.71 432.64C36.4407 444.023 52.9224 450.311 70 450.3H70.61L87.61 450.14C95.36 450.05 102.05 449.99 105.24 449.99V409.8C101.84 409.8 95.38 409.86 87.24 409.94L70.32 410.11C55.23 410.23 42.42 398.82 41.17 384.11C41.17 383.79 41.17 383.47 41.1 383.11C39.81 361.52 46.73 337.39 53.43 314.11C62.86 281.27 71.76 250.25 54.86 227.82C54.63 227.51 54.39 227.21 54.15 226.91L54.52 226.43C71.92 203.49 62.89 171.29 53.33 137.19C46.62 113.48 39.75 89 41 67.45C41.06 67.13 41.09 66.81 41.11 66.49Z" fill="url(#paint0_linear_1_3)"/>
<defs>
<linearGradient id="paint0_linear_1_3" x1="278.03" y1="487.56" x2="55.69" y2="-0.0700031" gradientUnits="userSpaceOnUse">
<stop stop-color="#2E294E"/>
<stop offset="0.18" stop-color="#322E57"/>
<stop offset="0.47" stop-color="#3F3B6F"/>
<stop offset="0.84" stop-color="#525197"/>
<stop offset="1" stop-color="#5C5CAA"/>
</linearGradient>
</defs>
</svg>
          </a>
        </div>
        {/* Here */}
        <div className="flex lg:hidden" onClick={handelfun} >
          <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
            <span className="sr-only">Open main menu</span>
            
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
        
        <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-12 is">
          <a href="#home" className="font-semibold  hover:text-gray-900 is    ">Home</a>

          <a href="#skills" className="font-semibold text-gray-900 is hover:text-gray-900">Skills</a>

        

          <a href="#projects" className="font-semibold text-gray-900 is hover:text-gray-900">Projects</a>
          
          <a href="#contactme" className="font-semibold text-gray-900 is hover:text-gray-900">Contact me</a>
        </div>
        <div className="hidden  lg:flex lg:min-w-0 lg:flex-1 lg:justify-end">
         
        <ReactSwitch 
          uncheckedIcon={
            <svg fill='#ffffff' height={25} width={30} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>

        } 
        onColor='#83adff'
        // width={60}
        // height={40} 
        className='switcher'
        checkedIcon={
          


<svg fill='#ffffff' height={25} width={30} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12ZM5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM12,5a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5Zm5.66,2.34a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34Zm-12-.29a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5ZM12,19a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19Z"/></svg>      } 
onChange={toggleTheme} offColor="#252e48" checked={theme==="dark" } />
        </div>
      </nav>
     
      
    </div>
  </div>
  {
    open&&<NavbarMobile open={open} setOpen={setOpen} theme={theme} toggleTheme={toggleTheme}    />
  }
 
  <main 
>
    <div className="relative px-6 lg:px-20  ">
      <div className=" max-w-3xl  pt-20 pb-28  sm:pt-48 ">
        <div>
          
          <div>
            <h1 className="text-4xl  font-bold tracking-tight  sm:text-6xl">Hi,</h1>
           
            <h1 className="text-4xl  font-bold tracking-tight  sm:text-6xl">I am <span  className='text-[#f0bcd5]' >  <Typewriter onInit={(typewriter)=>{
              typewriter
              .typeString("Rayan kasmi")
              .pauseFor(1000)
              .deleteAll()
              .typeString("Frontend developer")
              .pauseFor(1000)
              .deleteAll()
              .typeString("Wordpress developer")
              .pauseFor(1000)
              .deleteAll()
              .typeString("Rayan kasmi")
              .start();
            }} />
          </span>
          </h1>
          
          
            
            <p className="mt-6 text-lg leading-8 text-black is">As a highly skilled individual who is self-taught in web development, I have a strong background in web development. My professional skills include proficiency in HTML, CSS, Javascript, React JS, Node JS, Tailwind CSS, Mongo DB, Firebase, and Wordpress.</p>
            <div className="mt-8 flex  flex-wrap gap-x-6 gap-y-5  ">
             
<a href="#contactme" className="relative inline-block text-lg group">
<span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-[#2e294e] transition-colors duration-300 ease-out border-2 border-[#2e294e] rounded-lg group-hover:text-white">
<span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
<span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-[#2e294e] group-hover:-rotate-180 ease"></span>
<span className="relative  ">Get in Touch</span>
</span>
<span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-[#2e294e] rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
</a>
<a target='_blank' href="https://drive.google.com/file/d/1SNhBGheFhfQQVqP0DsK8Va0iBVklPEYy/view?usp=share_link" className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-[#2e294e] rounded-full shadow-md group">
<span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#2e294e] group-hover:translate-x-0 ease">

<svg xmlns="http://www.w3.org/2000/svg" className='w-8 ' fill='#ffffff' viewBox="0 0 24 24"><path d="M21,14a1,1,0,0,0-1,1v4a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V15a1,1,0,0,0-2,0v4a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V15A1,1,0,0,0,21,14Zm-9.71,1.71a1,1,0,0,0,.33.21.94.94,0,0,0,.76,0,1,1,0,0,0,.33-.21l4-4a1,1,0,0,0-1.42-1.42L13,12.59V3a1,1,0,0,0-2,0v9.59l-2.29-2.3a1,1,0,1,0-1.42,1.42Z"/></svg>
</span>
<span className="absolute flex items-center justify-center w-full h-full text-[#2e294e] transition-all duration-300 transform group-hover:translate-x-full ease is">Download CV</span>
<span className="relative invisible is">Download CV</span>
</a>
              
            </div>
            
              <div className="links flex items-center flex-wrap gap-5 mt-10 ">
              <div className="bg-[#2e294e] iconBg px-1 py-1 md:px-2 md:py-2 lg:px-3 lg:py-3  rounded-lg  cursor-pointer hover:scale-110 transition-all duration-300 transform ease ">
                   
                <a href="https://www.linkedin.com/in/rayan-kasmi/" target='_blank'>    <svg xmlns="http://www.w3.org/2000/svg" fill='#ffffff' className='   w-fit' width="40" height="40" viewBox="0 5 1036 990"><path d="M0 120c0-33.334 11.667-60.834 35-82.5C58.333 15.833 88.667 5 126 5c36.667 0 66.333 10.666 89 32 23.333 22 35 50.666 35 86 0 32-11.333 58.666-34 80-23.333 22-54 33-92 33h-1c-36.667 0-66.333-11-89-33S0 153.333 0 120zm13 875V327h222v668H13zm345 0h222V622c0-23.334 2.667-41.334 8-54 9.333-22.667 23.5-41.834 42.5-57.5 19-15.667 42.833-23.5 71.5-23.5 74.667 0 112 50.333 112 151v357h222V612c0-98.667-23.333-173.5-70-224.5S857.667 311 781 311c-86 0-153 37-201 111v2h-1l1-2v-95H358c1.333 21.333 2 87.666 2 199 0 111.333-.667 267.666-2 469z"/></svg></a></div>
              <div className="bg-[#2e294e] iconBg px-1 py-1 md:px-2 md:py-2 lg:px-3 lg:py-3   rounded-lg cursor-pointer hover:scale-110 transition-all duration-300 transform ease ">
                 <a href="https://www.facebook.com/philo193/" target='_blank'>     <svg xmlns="http://www.w3.org/2000/svg" className='  w-fit' fill='#ffffff'  width="40" height="40" data-name="Layer 1" viewBox="0 0 24 24"><path d="M15.12,5.32H17V2.14A26.11,26.11,0,0,0,14.26,2C11.54,2,9.68,3.66,9.68,6.7V9.32H6.61v3.56H9.68V22h3.68V12.88h3.06l.46-3.56H13.36V7.05C13.36,6,13.64,5.32,15.12,5.32Z"/></svg></a></div>
              <div className="bg-[#2e294e] iconBg px-1 py-1 md:px-2 md:py-2 lg:px-3 lg:py-3   rounded-lg cursor-pointer  hover:scale-110 transition-all duration-300 transform ease ">

                    <a href="https://github.com/Rayan-web" target='_blank'>      <svg xmlns="http://www.w3.org/2000/svg" className='  w-fit' fill='#ffffff'  width="40" height="40" data-name="Layer 1" viewBox="0 0 24 24"><path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z"/></svg></a>
               </div>
               <div className="bg-[#2e294e] iconBg px-1 py-1 md:px-2 md:py-2 lg:px-3 lg:py-3   rounded-lg cursor-pointer hover:scale-110 transition-all duration-300 transform ease ">
             <a href="https://www.instagram.com/rayan_codes/" target='_blank'>  <svg className='w-10' fill='#ffffff' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><g fill="none" stroke="#ffffff" stroke-miterlimit="10"><path d="M11.5 15.5h-7a4 4 0 0 1-4-4v-7a4 4 0 0 1 4-4h7a4 4 0 0 1 4 4v7a4 4 0 0 1-4 4z"/><circle cx="8" cy="8" r="3.5"/><circle cx="12.5" cy="3.5" r=".5"/></g></svg></a>



               </div>
          </div>
          
        </div>
      </div>
    </div>
    </div>
  </main>
  <div className="flex flex-col items-center">
    <img className='darkCurs' src={curs} alt="" />
    


{/* <svg className='w-20' fill='#f0bcd5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g data-name="Layer 2"><path d="M16,2a9.01,9.01,0,0,0-9,9V21a9,9,0,0,0,18,0V11A9.01,9.01,0,0,0,16,2Zm7,19A7,7,0,0,1,9,21V11a7,7,0,0,1,14,0Z"/><path d="M16,8a1,1,0,0,0-1,1v4a1,1,0,0,0,2,0V9A1,1,0,0,0,16,8Z"/></g></svg>

<svg fill='#f0bcd5' xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M6.25753788,13.2424621 C5.84748737,12.8324116 5.84748737,12.1675884 6.25753788,11.7575379 C6.66758839,11.3474874 7.33241161,11.3474874 7.74246212,11.7575379 L12,16.0150758 L16.2575379,11.7575379 C16.6675884,11.3474874 17.3324116,11.3474874 17.7424621,11.7575379 C18.1525126,12.1675884 18.1525126,12.8324116 17.7424621,13.2424621 L12.7424621,18.2424621 C12.3324116,18.6525126 11.6675884,18.6525126 11.2575379,18.2424621 L6.25753788,13.2424621 Z M6.25753788,7.24246212 C5.84748737,6.83241161 5.84748737,6.16758839 6.25753788,5.75753788 C6.66758839,5.34748737 7.33241161,5.34748737 7.74246212,5.75753788 L12,10.0150758 L16.2575379,5.75753788 C16.6675884,5.34748737 17.3324116,5.34748737 17.7424621,5.75753788 C18.1525126,6.16758839 18.1525126,6.83241161 17.7424621,7.24246212 L12.7424621,12.2424621 C12.3324116,12.6525126 11.6675884,12.6525126 11.2575379,12.2424621 L6.25753788,7.24246212 Z"/></svg> */}
  </div>

            
</div>

  )
}
