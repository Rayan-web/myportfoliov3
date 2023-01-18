import React, { useState ,useEffect } from 'react'
import ReactSwitch from 'react-switch';
import'../App.css'
// import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

type MenuProps={
    open:boolean;
    setOpen:React.Dispatch<React.SetStateAction<boolean>>;
    theme:string;
    toggleTheme:()=>void;
}




// const useBodyLock=()=>{
//   const bodyStyle=document.body.style
//   const [islocked,setIslocked]=useState(bodyStyle.overflow=="hidden")
//   useEffect(() => {
//     bodyStyle.overflowY=islocked?'hidden':'auto'
//    }, [bodyStyle,islocked])
//    const toggle=()=>setIslocked(!islocked)
//    return [islocked,toggle]
// }

export const NavbarMobile = ({ open,setOpen,theme,toggleTheme }: MenuProps) => {
  

// !open?document.body.style.overflow="hidden":document.body.style.overflow="auto";
 
  // const [islocked,toggle]=useBodyLock()
   
  return (
   
    <div   className=' z-50 relative ' >
        <div id='dark light' className="    here darkNav fixed z-50  inset-0     px-6 py-6 lg:hidden">
          <div className="flex h-9 items-center justify-between">
            <div className="flex">
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
            <div className="flex">
              <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                <span className="sr-only">Close menu</span>
               
                <svg className="h-6 w-6"  onClick={()=>setOpen(!open)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a href="#home" onClick={()=>setOpen(!open)} className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10">Home</a>

                <a href="#skills"  onClick={()=>setOpen(!open)} className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10">Skills</a>

              

                <a href="#projects" onClick={()=>setOpen(!open)} className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10">Projects</a>
                <a href="#contactme" onClick={()=>setOpen(!open)} className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10">Contact me</a>

              </div>
              <div className="py-6 z-50 ">
              <ReactSwitch uncheckedIcon={
          
          <svg fill='#ffffff' height={25} width={30} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
                  } onColor='#52057B' checkedIcon={
                    
          <svg  height={25} width={30} fill='#ffffff' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12ZM5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM12,5a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5Zm5.66,2.34a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34Zm-12-.29a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5ZM12,19a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19Z"/></svg>
                  } onChange={toggleTheme} offColor="#000000" checked={theme==="dark" } />
              </div>
              
            </div>
          </div>
        </div>
        
      </div>
    )
  
}
