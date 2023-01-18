import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/autoplay"

import "../App.css";
import "../index.css";


// import required modules
import { FreeMode, Pagination,Autoplay } from "swiper";
export const Op = () => {
  return (
    <section className=' p-10    '>
      <h1 className='text-center font-semibold  text-2xl my-10 '>What my customers think of my services?
</h1>
<main className="">
    <Swiper
    data-swiper-autoplay="2000"
    breakpoints={{
      // when window width is >= 640px
      640: {
        width: 640,
        slidesPerView: 1,
       
      },
      100: {
        width: 640,
        slidesPerView: 1,
       
      },
      200: {
        width: 640,
        slidesPerView: 1,
       
      },
      300: {
        width: 640,
        slidesPerView: 1,
       
      },
      400: {
        width: 640,
        slidesPerView: 2,
       
      },
      // when window width is >= 768px
      768: {
        width: 768,
        slidesPerView: 2,
      },
    }}
      slidesPerView={3}
      spaceBetween={20}
      freeMode={true}
      autoplay={true}
      // pagination={{
      //   clickable: true,
      // }}
      modules={[FreeMode,Autoplay]}
      className="mySwiper"
    >
      <SwiperSlide className='w-28 h-16 swiper-slide  ' >
        <div className="flex justify-center">
         <div className="block p-6 rounded-lg cardsilderbg shadow-lg bg-white max-w-sm">
       <div className="">
        
<div className="flex items-center gap-3">
  
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#200E32" d="M15.9199,11.8203 C15.6599,12.0703 15.5399,12.4393 15.6009,12.7903 L16.4899,17.7103 C16.5609,18.1303 16.3909,18.5493 16.0399,18.7903 C15.6999,19.0403 15.2499,19.0703 14.8699,18.8703 L10.4409,16.5603 C10.2799,16.4803 10.1099,16.4293 9.9409,16.4293 L9.6699,16.4293 C9.5699,16.4393 9.4809,16.4803 9.3999,16.5193 L4.9699,18.8403 C4.7499,18.9503 4.4999,18.9903 4.2599,18.9503 C3.6599,18.8303 3.2709,18.2693 3.3699,17.6793 L4.2599,12.7593 C4.3199,12.4003 4.1999,12.0403 3.9409,11.7803 L0.3299,8.2803 C0.0299,7.9803 -0.0801,7.5493 0.0609,7.1503 C0.1909,6.7593 0.5299,6.4693 0.9499,6.4003 L5.9199,5.6793 C6.2999,5.6393 6.6299,5.4103 6.7999,5.0703 L8.9899,0.5803 C9.0399,0.4803 9.1099,0.3893 9.1909,0.3103 L9.2799,0.2403 C9.3199,0.1893 9.3799,0.1503 9.4409,0.1103 L9.5499,0.0703 L9.7199,0.0003 L10.1409,0.0003 C10.5209,0.0403 10.8509,0.2693 11.0209,0.5993 L13.2399,5.0703 C13.3999,5.4003 13.7099,5.6203 14.0699,5.6793 L19.0399,6.4003 C19.4599,6.4603 19.8109,6.7503 19.9499,7.1503 C20.0799,7.5493 19.9699,7.9903 19.6599,8.2803 L15.9199,11.8203 Z" transform="translate(2 2.5)"/></svg>
 <div className="">

  <h1 className=''>Gama Dev</h1>
  <p className='contName'>Algeria</p>
 </div>
</div>
       </div>
        <p className="text-gray-700 cardobcolor text-base mb-4">
        "I had the pleasure of working with Rayan on a website project and was extremely impressed with their skills and attention to detail. They were able to take my vision and turn it into a reality, delivering a website that exceeded my expectations. I would highly recommend Rayan to anyone looking for a talented and professional web developer."
       </p>
  </div>
</div>
</SwiperSlide>
<SwiperSlide className='w-28 h-16 swiper-slide ' >
        <div className="flex justify-center">
         <div className="block p-6 rounded-lg cardsilderbg shadow-lg bg-white max-w-sm">
       <div className="">
        
<div className="flex items-center gap-3">
  
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#200E32" d="M15.9199,11.8203 C15.6599,12.0703 15.5399,12.4393 15.6009,12.7903 L16.4899,17.7103 C16.5609,18.1303 16.3909,18.5493 16.0399,18.7903 C15.6999,19.0403 15.2499,19.0703 14.8699,18.8703 L10.4409,16.5603 C10.2799,16.4803 10.1099,16.4293 9.9409,16.4293 L9.6699,16.4293 C9.5699,16.4393 9.4809,16.4803 9.3999,16.5193 L4.9699,18.8403 C4.7499,18.9503 4.4999,18.9903 4.2599,18.9503 C3.6599,18.8303 3.2709,18.2693 3.3699,17.6793 L4.2599,12.7593 C4.3199,12.4003 4.1999,12.0403 3.9409,11.7803 L0.3299,8.2803 C0.0299,7.9803 -0.0801,7.5493 0.0609,7.1503 C0.1909,6.7593 0.5299,6.4693 0.9499,6.4003 L5.9199,5.6793 C6.2999,5.6393 6.6299,5.4103 6.7999,5.0703 L8.9899,0.5803 C9.0399,0.4803 9.1099,0.3893 9.1909,0.3103 L9.2799,0.2403 C9.3199,0.1893 9.3799,0.1503 9.4409,0.1103 L9.5499,0.0703 L9.7199,0.0003 L10.1409,0.0003 C10.5209,0.0403 10.8509,0.2693 11.0209,0.5993 L13.2399,5.0703 C13.3999,5.4003 13.7099,5.6203 14.0699,5.6793 L19.0399,6.4003 C19.4599,6.4603 19.8109,6.7503 19.9499,7.1503 C20.0799,7.5493 19.9699,7.9903 19.6599,8.2803 L15.9199,11.8203 Z" transform="translate(2 2.5)"/></svg>
 <div className="">

  <h1 className=''>EAT studio</h1>
  <p className='contName'>France</p>
 </div>
</div>
       </div>
        <p className="text-gray-700 cardobcolor text-base mb-4">
        "I have been working with Rayan for several months on a number of projects and have been consistently impressed by their ability to deliver high-quality work in a timely manner. They are an excellent communicator and always goes the extra mile to ensure client satisfaction. I would not hesitate to recommend Rayan for any web development project."
       </p>
  </div>
</div>
</SwiperSlide>
<SwiperSlide className='w-28 h-16 swiper-slide ' >
        <div className="flex justify-center">
         <div className="block p-6 rounded-lg cardsilderbg shadow-lg bg-white max-w-sm">
       <div className="">
        
<div className="flex items-center gap-3">
  
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#200E32" d="M15.9199,11.8203 C15.6599,12.0703 15.5399,12.4393 15.6009,12.7903 L16.4899,17.7103 C16.5609,18.1303 16.3909,18.5493 16.0399,18.7903 C15.6999,19.0403 15.2499,19.0703 14.8699,18.8703 L10.4409,16.5603 C10.2799,16.4803 10.1099,16.4293 9.9409,16.4293 L9.6699,16.4293 C9.5699,16.4393 9.4809,16.4803 9.3999,16.5193 L4.9699,18.8403 C4.7499,18.9503 4.4999,18.9903 4.2599,18.9503 C3.6599,18.8303 3.2709,18.2693 3.3699,17.6793 L4.2599,12.7593 C4.3199,12.4003 4.1999,12.0403 3.9409,11.7803 L0.3299,8.2803 C0.0299,7.9803 -0.0801,7.5493 0.0609,7.1503 C0.1909,6.7593 0.5299,6.4693 0.9499,6.4003 L5.9199,5.6793 C6.2999,5.6393 6.6299,5.4103 6.7999,5.0703 L8.9899,0.5803 C9.0399,0.4803 9.1099,0.3893 9.1909,0.3103 L9.2799,0.2403 C9.3199,0.1893 9.3799,0.1503 9.4409,0.1103 L9.5499,0.0703 L9.7199,0.0003 L10.1409,0.0003 C10.5209,0.0403 10.8509,0.2693 11.0209,0.5993 L13.2399,5.0703 C13.3999,5.4003 13.7099,5.6203 14.0699,5.6793 L19.0399,6.4003 C19.4599,6.4603 19.8109,6.7503 19.9499,7.1503 C20.0799,7.5493 19.9699,7.9903 19.6599,8.2803 L15.9199,11.8203 Z" transform="translate(2 2.5)"/></svg>
 <div className="">

  <h1 className=''>wonsupona</h1>
  <p className='contName'>France</p>
 </div>
</div>
       </div>
        <p className="text-gray-700 cardobcolor text-base mb-4">
        "I had the opportunity to work with Rayan on a website redesign project and was extremely impressed with their expertise and dedication to the project. They were able to provide valuable insights and suggestions that helped to improve the overall design and functionality of the website. I would highly recommend Rayan to anyone looking for a skilled and professional web developer."

       </p>
  </div>
</div>
</SwiperSlide>
<SwiperSlide className='w-28 h-16 swiper-slide ' >
        <div className="flex justify-center">
         <div className="block p-6 rounded-lg cardsilderbg shadow-lg bg-white max-w-sm">
       <div className="">
        
<div className="flex items-center gap-3">
  
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#200E32" d="M15.9199,11.8203 C15.6599,12.0703 15.5399,12.4393 15.6009,12.7903 L16.4899,17.7103 C16.5609,18.1303 16.3909,18.5493 16.0399,18.7903 C15.6999,19.0403 15.2499,19.0703 14.8699,18.8703 L10.4409,16.5603 C10.2799,16.4803 10.1099,16.4293 9.9409,16.4293 L9.6699,16.4293 C9.5699,16.4393 9.4809,16.4803 9.3999,16.5193 L4.9699,18.8403 C4.7499,18.9503 4.4999,18.9903 4.2599,18.9503 C3.6599,18.8303 3.2709,18.2693 3.3699,17.6793 L4.2599,12.7593 C4.3199,12.4003 4.1999,12.0403 3.9409,11.7803 L0.3299,8.2803 C0.0299,7.9803 -0.0801,7.5493 0.0609,7.1503 C0.1909,6.7593 0.5299,6.4693 0.9499,6.4003 L5.9199,5.6793 C6.2999,5.6393 6.6299,5.4103 6.7999,5.0703 L8.9899,0.5803 C9.0399,0.4803 9.1099,0.3893 9.1909,0.3103 L9.2799,0.2403 C9.3199,0.1893 9.3799,0.1503 9.4409,0.1103 L9.5499,0.0703 L9.7199,0.0003 L10.1409,0.0003 C10.5209,0.0403 10.8509,0.2693 11.0209,0.5993 L13.2399,5.0703 C13.3999,5.4003 13.7099,5.6203 14.0699,5.6793 L19.0399,6.4003 C19.4599,6.4603 19.8109,6.7503 19.9499,7.1503 C20.0799,7.5493 19.9699,7.9903 19.6599,8.2803 L15.9199,11.8203 Z" transform="translate(2 2.5)"/></svg>
 <div className="">

  <h1 className=''>Fennec dev</h1>
  <p className='contName'>Algeria</p>
 </div>
</div>
       </div>
        <p className="text-gray-700 cardobcolor text-base mb-4">
        "I have been working with Rayan for the last year and have been extremely satisfied with their work. They are a highly skilled developer and able to deliver projects on time and on budget. Their attention to detail and willingness to go above and beyond to meet my needs has been invaluable. I would highly recommend Rayan to anyone looking for a top-notch web developer."
       </p>
  </div>
</div>
</SwiperSlide>
<SwiperSlide className='w-28 h-16 swiper-slide ' >
        <div className="flex justify-center">
         <div className="block p-6 rounded-lg cardsilderbg shadow-lg bg-white max-w-sm">
       <div className="">
        
<div className="flex items-center gap-3">
  
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#200E32" d="M15.9199,11.8203 C15.6599,12.0703 15.5399,12.4393 15.6009,12.7903 L16.4899,17.7103 C16.5609,18.1303 16.3909,18.5493 16.0399,18.7903 C15.6999,19.0403 15.2499,19.0703 14.8699,18.8703 L10.4409,16.5603 C10.2799,16.4803 10.1099,16.4293 9.9409,16.4293 L9.6699,16.4293 C9.5699,16.4393 9.4809,16.4803 9.3999,16.5193 L4.9699,18.8403 C4.7499,18.9503 4.4999,18.9903 4.2599,18.9503 C3.6599,18.8303 3.2709,18.2693 3.3699,17.6793 L4.2599,12.7593 C4.3199,12.4003 4.1999,12.0403 3.9409,11.7803 L0.3299,8.2803 C0.0299,7.9803 -0.0801,7.5493 0.0609,7.1503 C0.1909,6.7593 0.5299,6.4693 0.9499,6.4003 L5.9199,5.6793 C6.2999,5.6393 6.6299,5.4103 6.7999,5.0703 L8.9899,0.5803 C9.0399,0.4803 9.1099,0.3893 9.1909,0.3103 L9.2799,0.2403 C9.3199,0.1893 9.3799,0.1503 9.4409,0.1103 L9.5499,0.0703 L9.7199,0.0003 L10.1409,0.0003 C10.5209,0.0403 10.8509,0.2693 11.0209,0.5993 L13.2399,5.0703 C13.3999,5.4003 13.7099,5.6203 14.0699,5.6793 L19.0399,6.4003 C19.4599,6.4603 19.8109,6.7503 19.9499,7.1503 C20.0799,7.5493 19.9699,7.9903 19.6599,8.2803 L15.9199,11.8203 Z" transform="translate(2 2.5)"/></svg>
 <div className="">

  <h1 className=''>Unity consultng</h1>
  <p className='contName'>United Arab Emirates</p>
 </div>
</div>
       </div>
        <p className="text-gray-700 cardobcolor text-base mb-4">
        "I was impressed by Rayan's ability to understand my requirements and provide creative solutions to meet my needs. They delivered a website that was not only visually appealing but also easy to navigate. They were easy to work with and provided great communication throughout the project. I would recommend Rayan to anyone looking for a reliable and professional web developer."
       </p>
  </div>
</div>
</SwiperSlide>

    </Swiper>
    </main>
  </section>
  )
}
