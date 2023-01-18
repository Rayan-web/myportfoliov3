import React from 'react'

export const Contactme = () => {
  return (
    
   
   <section className=' gap-10 lg:flex mt-10  ' id='contactme' >
    <div className="hidden w-full lg:block md:block">
    <div className="all">
        <div className="">
            <h1 className='font-extrabold text-4xl tracking-wider'>Just say hi.</h1>
            <p className='font-medium text-lg mt-10'>Don't hesitate to drop me a line! Whether you have a question, a project idea or just want to say hi, I would love to hear from you. Fill out the form below or use the contact information provided to get in touch with me.</p>

        </div>
        <div className=" mt-10 lg:mt-32 flex gap-36 ">
          <div className="">
            <h1 className='text-gray-500' >Mail me at</h1>
            <p>Rayankasmi@gmail.com</p>
          </div>
          {/* <div className="">
            <h1 className='text-gray-500'>Follow me at</h1>
            <h1>Follow me at</h1>
          </div> */}
        </div>
    </div>
    </div>
    <div className="  md:mt-10 md:w-11/12 w-full lg:w-11/12 lg:px-10 lg:py-10 pb-10 rounded-3xl h-1/3  bg-primary  ">
    <div className=" mx-5 ">
    
    <div className="relative ">
    <input type="text" id="floating_filled" className="block  w-full rounded-t-lg px-2.5 pb-2.5 pt-5 bg-primary  text-sm text-gray-900  dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-setext-secandary peer" placeholder=" " />
    <label  className="absolute text-sm text-white  duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-secandary peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Your name</label>
    </div>
    <div className="relative ">
    <input type="text" id="floating_filled" className="block w-full  rounded-t-lg px-2.5 pb-2.5 pt-5 bg-primary  text-sm text-gray-900  dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-setext-secandary peer" placeholder=" " />
    <label  className="absolute text-sm text-white  duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-secandary peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Email Adress</label>
    </div>
    <div className="relative ">
    <input type="text" id="floating_filled" className="block w-full  rounded-t-lg px-2.5 pb-2.5 pt-5 bg-primary  text-sm text-gray-900  dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-setext-secandary peer" placeholder=" " />
    <label  className="absolute text-sm text-white  duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-secandary peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Your budget</label>
    </div>
    <div className="relative ">
    <input type="text" id="floating_filled" className="block w-full rounded-t-lg px-10 pb-2.5 pt-20 bg-primary  text-sm text-gray-900  dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-setext-secandary peer" placeholder=" " />
    <label  className="absolute text-sm text-white   duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-secandary peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Your Project descrription</label>
    </div>
    <div className="mt-10   ">
    <a href="#_" className="relative rounded mt-20 px-5 py-2.5 overflow-hidden group bg-white  hover:bg-gradient-to-r  hover:bg-primary text-primary hover:text-white font-medium hover:ring-2 hover:ring-offset-2 hover:ring-primary transition-all ease-out duration-300">
<span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
<span className="relative">Submite</span>

</a>
</div>
</div>
    </div>
   </section>
    
    
  )
}
