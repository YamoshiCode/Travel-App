import React from 'react'

const Camp = () => {
  return (
<div class=" items-center justify-center h-screen relative">
    <div class="h-4/5 w-full overflow-x-scroll flex scrollbar-hide relative inline-block" >
        <img src="img-1.png" alt="Image 1" class="w-full h-full object-cover mx-10 rounded-3xl"/>
        <div class="absolute top-0 left-0 text-black p-2">
            Your absolute positioned content here
        </div>

        <img src="img-2.png" alt="Image 2" class="w-full h-full object-cover mr-10 rounded-3xl"/>
    </div>
    <div className='text-white py-16 px-10 bg-[#50AF5B] rounded-3xl m-20 absolute top-1/2 left-1/2 transform -translate-x-1/4 -translate-y-1/4'>
    <h1 className='text-6xl p-2'>
    <strong>Feeling Lost</strong> And Not Knowing The Way?
    </h1>
    <p>
    Starting from the anxiety of the climbers when visiting a new climbing location, the possibility of getting lost is very large. That's why we are here for those of you who want to start an adventure
    </p>

    </div>
    
</div>
  );
}

export default Camp
