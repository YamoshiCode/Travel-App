import React from 'react'
import Button from './Button'
import Image from 'next/image'
const Hero = () => {
  return (
    <div className='grid grid-cols-[600px_600px] pt-10  bg-[url("/hero-bg.svg")] bg-cover bg-center pl-20'>
    <div className='p-5  relative'>
         <img src="/camp.svg" alt="Description of image" class="w-10 h-12 absolute top-0 bottom-70 left-4"></img>
         <h1  className='font-bold text-[50px] md:text-[90px] lg:text-[90px]'>
         Putuk Truno Camp Area
         </h1>
         <p className='text-slate-700 py-5'>
         We want to be on each of your journeys seeking the satisfaction of seeing the incorruptible beauty of nature. We can help you on an adventure around the world in just one app
         </p>
         

<div className="flex items-center py-4">
    <svg className="w-6 h-6 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
    <svg className="w-6 h-6 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
    <svg className="w-6 h-6 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
    <svg className="w-6 h-6 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
    <svg className="w-6 h-6 text-yellow-300 me-1 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
    <p className="ms-2 text-sm font-medium text-black dark:text-gray-400 font-bold">198k</p>
    <p className="ms-2 text-sm font-medium text-black dark:text-gray-400">Excellent Reviews</p>
</div>
<div className= "py-8 cursor-pointer lg:flex items-center  ">
<Button  title="Download App" iconcond = {false} color = "bg-[#50AF5B]"/>
<div className='flex'>
<img src='/play.svg' className=' sm:pl-4 pl-7 pr-3' alt="Play Icon"></img>
<span className='font-bold '>How we work?</span>
</div>
</div>
    </div>
    <div className='pt-18 pl-24'  >
 <div className='ml-6 pl-6 pr-6 box-content h-32 w-56 p-4  bg-[#292C27] rounded-3xl pt-8 pb-10'>
    <div className='flex justify-between'>
   <span className='text-zinc-500'>
    Location
   </span>
   <img src='/close.svg'  alt="close Icon"></img>
    </div>
    <div className='pb-8'>
    <span className='text-white text-xl font-bold '>
    
    Aguas Calientes
    </span>
    </div>
    <div className='flex justify-between'>
        <ul className=''>
            <li className='text-zinc-500'>
           Distance 
            </li>
            <li className='text-white text-xl'>
            173.28 mi
            </li>

        </ul>
        <ul>
            <li className='text-zinc-500'>
            Elevation
            </li>
            <li className='text-white text-xl'>
            2.040 km
            </li>

        </ul>
    </div>

 </div>
 </div>
    </div>
  )
}

export default Hero
