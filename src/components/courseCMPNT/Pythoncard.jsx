import React from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';

function Pythoncard(props) {
    return <>
      <div className="text-center ">
            <h1 className='text-5xl mt-20 font-bold text-[#C30E59] '>Python Course</h1>
            </div>
        <div className='mt-32 sm:ml-10 ml-3 grid sm:grid-cols-3 grid-cols-1 mb-32 '>
            {/* variables */}
            <div className="sm:w-96 w-[360px]  h-[400px]  bg-white/5 shadow-sm shadow-blue-900 sm:mb-0 mb-6 ">
        <img className='h-60 w-full ' src="https://i.pinimg.com/1200x/2d/d8/03/2dd8031b5e88f0104d083e4ed6233bc0.jpg" alt="" />

            <h1 className='text-3xl text-bold mt-3 ml-2'>Variables</h1>
            <p className='pt-2 ml-2'> A variable is a named container used to store data in a program. It allows you to save values like numbers, text, or lists, and use them later.</p>
            <div className="">
             <Link to='/courses/python/variable'> <Button title='access lesson' px='w-full text-2xl hover:bg-orange-700 ' /></Link>
            </div>
            </div>
            {/* poop */}
        
            <div className="sm:w-96 w-[360px] h-[400px]  bg-white/5 shadow-sm shadow-blue-900 sm:mb-0 mb-10  ">
        <img className='h-60 w-full ' src="https://i.pinimg.com/736x/ab/44/6d/ab446dbdeb0b7d98ba73c1d18f3dfc6a.jpg" alt="" />

            <h1 className='text-3xl text-bold mt-3 ml-2'>POOP</h1>
            <p className='pt-3 ml-2'>OOP is a programming approach where code is organized into objects that combine data and behavior.</p>
            <div className="">
             <Link to='/courses/python/poop'> <Button title='access lesson' px='w-full text-2xl hover:bg-orange-700 ' /></Link>
            </div>
            </div>

            {/* slice */}

            <div className="sm:w-96 w-[360px] h-[400px]  bg-white/5 shadow-sm shadow-blue-900 sm:mb-0  ">
        <img className='h-60 w-full ' src="https://i.pinimg.com/736x/79/70/57/797057ffdb2d4a88e528481f0174fdc8.jpg" alt="" />

            <h1 className='text-3xl text-bold mt-3 ml-2'>Python slice</h1>
            <p className='pt-3 ml-2'>Slicing is a way to extract a portion of a sequence (like a string, list, or tuple).</p>
            <div className="mt-3">
             <Link to='/courses/python/slice'> <Button title='access lesson' px='w-full text-2xl hover:bg-orange-700 ' /></Link>
            </div>
            </div>

        </div>

    </>
}

export default Pythoncard