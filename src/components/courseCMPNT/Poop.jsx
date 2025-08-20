import React from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';

function Poop(props) {
    return (
        <div>
                   <div className=' pl-10 mt-20 '>
        <div className="">
            <h1 className='sm:text-5xl text-2xl font-semibold text-center mb-10 text-[#C30E59] '>Python object oriented programing</h1>

        <iframe className='sm:w-[850px] w-80 h-60   sm:h-[450px] sm:ml-32 mb-20  ' src="https://www.youtube.com/embed/1XE-_s4ZBT8?si=IOVStJW-XhjhxhSC&amp;start=32" frameborder="0"
        allow='autoplay' ></iframe>

        </div>
 <div className="sm:ml-[55%] ml-32 ">
       <Link to='/courses/python/slice'> <Button title='Next Lesson' px='px-10' text='text-2xl font-semibold bg-violet-800 ' /></Link>
        </div>
        </div>
        </div>
    );
}

export default Poop;