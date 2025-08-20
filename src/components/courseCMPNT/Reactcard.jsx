import React from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';

function Reactcard(props) {
    return <>
      <div className="text-center ">
            <h1 className='text-5xl mt-20 font-bold text-[#C30E59] '>React Course</h1>
            </div>
        <div className='mt-32 sm:ml-10 ml-3  grid sm:grid-cols-3 grid-cols-1  '>
            {/* hooks */}
            <div className="sm:w-96 w-[360px] h-[400px] sm:mb-0 mb-6   bg-white/5 shadow-sm shadow-blue-900  ">
        <img className='h-60 w-full ' src="https://i.pinimg.com/1200x/72/d4/5a/72d45acc907d8e94a5be3acd3480c33f.jpg" alt="" />

            <h1 className='text-3xl text-bold mt-2 ml-2'>React Hooks</h1>
            <p className='pt-2 ml-2'>React Hooks are special functions that let you use React features like state and lifecycle methods in functional components</p>
            <div className="">
             <Link to='/courses/react/hooks'> <Button title='access lesson' px='w-full text-2xl text-white hover:bg-orange-700 ' /></Link>
            </div>
            </div>
            {/* component */}
        
            <div className="sm:w-96 w-[360px]  h-[400px] sm:mb-0 mb-6  bg-white/5 shadow-sm shadow-blue-900  ">
        <img className='h-60 w-full ' src="https://i.pinimg.com/736x/be/23/ef/be23ef97f834d42f46a6c23f73c09934.jpg" alt="" />

            <h1 className='text-3xl text-bold mt-3 ml-2'>Component</h1>
            <p className='pt-3 ml-2'>A React component is a reusable piece of UI that can have its own structure, styling, and behavior.</p>
            <div className="mt-2">
             <Link to='/courses/react/component'> <Button title='access lesson' px='w-full text-2xl text-white hover:bg-orange-700 ' /></Link>
            </div>
            </div>

            {/* props */}

            <div className="sm:w-96 w-[360px] h-[400px]  bg-white/5 shadow-sm shadow-blue-900 sm:mb-0 mb-6  ">
        <img className='h-60 w-full ' src="https://i.pinimg.com/1200x/f4/d7/59/f4d759fbe37a3445c0dc4908450b5015.jpg" alt="" />

            <h1 className='text-3xl text-bold mt-3 ml-2'>React Props</h1>
            <p className='pt-3 ml-2'>Props are used to pass data from a parent component to a child component in React.</p>
            <div className="mt-2">
             <Link to='/courses/react/props'> <Button title='access lesson' px='w-full text-2xl text-white hover:bg-orange-700 ' /></Link>
            </div>
            </div>

        </div>
    </>

}

export default Reactcard