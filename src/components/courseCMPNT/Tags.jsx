import React from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';

function Tags() {
    return <>
        <div className=' pl-10 mt-20 '>
            <h1 className='text-5xl font-semibold text-center mb-10 text-[#C30E59] '>Html Tags</h1>

        <iframe className='sm:w-[850px] w-80 h-60   sm:h-[450px] sm:ml-16 mb-20  ' src="https://www.youtube.com/embed/vIoO52MdZFE?si=nYxq8_XAOuEjQvms&amp;start=32" frameborder="0"
        allow='autoplay' ></iframe>

        </div>

    <div className="sm:ml-[55%] ml-32 ">
      <Link to='/courses/htmlCss/links'>  <Button title='Next Lesson' px='px-10' text='text-2xl font-semibold bg-violet-800' /></Link>
    </div>




    </>
}

export default Tags;