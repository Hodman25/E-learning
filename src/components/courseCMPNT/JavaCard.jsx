import React from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';

function JavaCard(props) {
    return <>
      <div className="text-center ">
            <h1 className='text-5xl mt-20 font-bold text-[#C30E59] '>Javascript Course</h1>
            </div>
        <div className='mt-32 sm:ml-10 ml-3 sm:mb-0 sm:gap-0 gap-6 grid sm:grid-cols-3 grid-cols-1  '>
            {/* functions */}
            <div className="sm:w-96 w-[360px] h-[400px]  bg-white/5 shadow-sm shadow-blue-900  ">
        <img className='h-60 w-full ' src="https://i.pinimg.com/1200x/1e/23/41/1e2341a9fd387f550118bafcebb34a24.jpg" alt="" />

            <h1 className='text-3xl text-bold mt-3 ml-2'>Functions</h1>
            <p className='pt-3 ml-2'>A function is a reusable block of code designed to perform a specific task. It takes input (parameters)</p>
            <div className="">
             <Link to='/courses/javascript/function'> <Button title='access lesson' px='w-full text-white text-2xl hover:bg-orange-700 ' /></Link>
            </div>
            </div>
            {/* switch */}
        
            <div className="sm:w-96 w-[360px] h-[400px]  bg-white/5 shadow-sm shadow-blue-900 sm:mb-0 mb-6 sm:mt-0 mt-6  ">
        <img className='h-60 w-full ' src="https://i.pinimg.com/1200x/1e/2b/09/1e2b09e7bbdb1c7390137a5051a0f9a2.jpg" alt="" />

            <h1 className='text-3xl text-bold mt-3 ml-2'>Switch</h1>
            <p className='pt-3 ml-2'>A switch statement is used to execute different blocks of code based on the value of a variable or expression.</p>
            <div className="">
             <Link to='/courses/javascript/switch'> <Button title='access lesson' px='w-full text-white text-2xl hover:bg-orange-700 ' /></Link>
            </div>
            </div>

            {/* loops */}

            <div className="sm:w-96 w-[360px] h-[400px]  bg-white/5 shadow-sm shadow-blue-900 sm:mb-0 mb-10  ">
        <img className='h-60 w-full ' src="https://i.pinimg.com/736x/90/44/a6/9044a634e09b2a633ff73efad0fdf470.jpg" alt="" />

            <h1 className='text-3xl text-bold mt-3 ml-2'>Loops</h1>
            <p className='pt-3 ml-2'>A loop is a programming structure that repeats a block of code until a specific condition is met. Loops help automate repetitive tasks.</p>
            <div className="mt-">
             <Link to='/courses/javascript/loops'> <Button title='access lesson' px='w-full text-2xl text-white hover:bg-orange-700 ' /></Link>
            </div>
            </div>

        </div>
    </>

}

export default JavaCard