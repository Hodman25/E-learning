import React from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';

function HtmlCard(props) {
    return <>
            <div className="text-center ">
            <h1 className='text-5xl mt-20 font-bold text-[#C30E59] '>Html Course</h1>
            </div>

        <div className='mt-32 sm:ml-10 ml-3 grid sm:grid-cols-3 grid-cols-1 sm:gap-0 gap-6 '>
            {/* tags */}
            <div className="sm:w-96 w-[360px] h-[400px] hover:scale-[1.1] duration-500  bg-white/5 shadow-sm  shadow-blue-900 sm:mb-0 mb-6 ">
        <img className='h-60 w-full  ' src="https://i.pinimg.com/1200x/86/f1/95/86f1954579b3ddaec29a1932edeb669c.jpg" alt="" />

            <h1 className='text-3xl text-bold mt-3 ml-2'>Html Tags</h1>
            <p className='pt-3 ml-2'>The html tag is the container for all other HTML elements</p>
            <div className="">
             <Link to='/courses/htmlCss/tags'> <Button title='access lesson' px='w-full text-2xl hover:bg-orange-700 ' /></Link>
            </div>
            </div>
            {/* links */}
        
            <div className="sm:w-96 w-[360px] h-[400px]  bg-white/5 shadow-sm shadow-blue-900  hover:scale-[1.1] duration-500 sm:mb-0 mb-6 ">
        <img className='h-60 w-full ' src="https://i.pinimg.com/736x/01/c5/3a/01c53a8a5fca75f0ce72eb97d465be81.jpg" alt="" />

            <h1 className='text-3xl text-bold mt-3 ml-2'>Html Links</h1>
            <p className='pt-3 ml-2'>The link text is the part that will be visible to the reader.</p>
            <div className="">
             <Link to='/courses/htmlCss/links'> <Button title='access lesson' px='w-full text-2xl hover:bg-orange-700 ' /></Link>
            </div>
            </div>

            {/* iframes */}

            <div className="sm:w-96 w-[360px] h-[400px]  bg-white/5 shadow-sm shadow-blue-900  hover:scale-[1.1] duration-500 sm:mb-0 mb-6 ">
        <img className='h-60 w-full ' src="https://i.pinimg.com/736x/90/44/a6/9044a634e09b2a633ff73efad0fdf470.jpg" alt="" />

            <h1 className='text-3xl text-bold mt-3 ml-2'>Html Iframes</h1>
            <p className='pt-3 ml-2'>The iframe tag specifies an inline frame.</p>
            <div className="mt-6">
             <Link to='/courses/htmlCss/iframe'> <Button title='access lesson' px='w-full text-2xl hover:bg-orange-700 ' /></Link>
            </div>
            </div>

        </div>

    </>
}

export default HtmlCard