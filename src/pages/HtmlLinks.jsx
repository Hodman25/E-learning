import React from 'react';
import Button from '../components/courseCMPNT/Button';
import { Link } from 'react-router-dom';

function HtmlLinks(props) {
    return <>
    
         <div className=' pl-10 mt-20 mb-20'>
        <div className="">
            <h1 className='text-5xl font-semibold text-center mb-10 text-[#C30E59] '>Html Links</h1>

        <iframe className='sm:w-[850px] w-80 h-60   sm:h-[450px] sm:ml-16 mb-10  ' src="https://www.youtube.com/embed/HA6bByKdAQM?si=_qEuTCJP1cOc4j8i&amp;start=32" frameborder="0"
        allow='autoplay' ></iframe>

        </div>
        <div className="sm:ml-[55%]">
      <Link to='/courses/htmlCss/iframe'><Button title='Next Lesson' px='px-10' text='text-2xl font-semibold bg-violet-800' /></Link>  

        </div>
        </div>
    </>
       
    
}

export default HtmlLinks;