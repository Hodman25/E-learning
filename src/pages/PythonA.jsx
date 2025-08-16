import React from 'react';
import { Link } from 'react-router-dom';

function PythonA() {
    return <>
          <div className=' mt-32 sm:mt-24 text-center'>
        <h1 className='text-4xl font-semibold'>Python Projectes</h1>
        <p className='mt-3'> Learn to code and solve problems with simple Python projects</p>
        </div>
        <div className='sm:flex gap-8  ml-14 sm:ml-28 mt-4'>
        <div className=" w-[290px] h-[390px] bg-white/5 shadow-lg shadow-white/10">
     <iframe className="w-[290px] h-[250PX] objrct-cover"  src="https://www.youtube.com/embed/yVl_G-F7m8c?si=bFxtp5Hg9z3Fbfnn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <h1 className='text-2xl text-center'>Build with Javascrip</h1>
      <p className='text-center mt-3'>Add life and interactivity with JavaScript projects</p>
      <button className='bg-yellow-500 px-4 mt-3  font-semibold rounded-lg ml-14 py-1 text-black'>Watch for free</button>
            </div>
            {/* 2 */}
      <div className=" w-[290px] h-[390px] bg-white/5 shadow-lg shadow-white/10">
     <iframe className="w-[290px] h-[250PX] objrct-cover"  src="https://www.youtube.com/embed/-RxWRcaYiEU?si=FThLu5q54ZTjF1Bo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <h1 className='text-2xl text-center'>Build with Javascrip</h1>
      <p className='text-center mt-3'>Add life and interactivity with JavaScript projects</p>
      <button className='bg-yellow-500 px-4 mt-3  font-semibold rounded-lg ml-14 py-1 text-black'>Watch for free</button>
            </div>
            {/* 3 */}
          <div className=" w-[290px] h-[390px] bg-white/5 shadow-lg shadow-white/10">
     <iframe className="w-[290px] h-[250PX] objrct-cover"  src="https://www.youtube.com/embed/_xf1TMs0ysk?si=_VuxNRM68uw5GpD3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <h1 className='text-2xl text-center'>Build with Javascrip</h1>
      <p className='text-center mt-3'>Add life and interactivity with JavaScript projects</p>
      <button className='bg-yellow-500 px-4 mt-3  font-semibold rounded-lg ml-14 py-1 text-black'>Watch for free</button>
            </div>
        </div>
        </>
    
}

export default PythonA;