import React from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';
function Card() {
    return <div className='pt-32'>
        <div className="grid sm:grid-cols-3 grid-cols-1 justify-stretch ">

        <div className='w-[400px] h-[430px] bg-white/5  shadow-[#065084] rounded-lg shadow-lg p- m-4 t-20'>
            <img className='w-full h-52' src='https://i.pinimg.com/736x/05/6a/5b/056a5b666cf72d5fafd9c9880e686962.jpg' alt="" />
            <div className="flex text-blac justify-between px-8 pt-6">
                <h1 className='text-3xl font-semibold pb-6 '>Html & Css</h1>
                <Button text='px-4 text-2xl'  title='Free' />
            </div>
            <p className='ml-3 mt-2 text'>Build with HTML. Shine with CSS. Together, they turn raw content into fast, responsive, and beautiful web pages.</p>

        <div className="ml-2  mt-2">
        <Link to='/htmlCss'><Button px='w-full' text="text-white text-2xl hover:bg-orange-700" title='view course' /></Link> 
        </div>
        </div>

        {/* js */}
        <div className='w-[400px] h-[430px] bg-white/5  shadow-[#065084] rounded-lg shadow-lg p- m-4 t-20'>
            <img className='w-full h-52' src='https://i.pinimg.com/1200x/0e/4f/dc/0e4fdce8ac22e09688c580e5bc4dcd7d.jpg' alt="" />
            <div className="flex text-blac justify-between px-8 pt-6">
                <h1 className='text-3xl font-semibold pb-6 '>JavaScript</h1>
                <Button text='px-4 text-2xl'  title='Free' />
            </div>
            <p className='ml-3 mt-2 text'>Learn JavaScript from scratch and build interactive, real-world web apps. Master variables, functions, DOM, and APIs with hands-on projects.</p>

        <div className="ml-2  mt-2">
        <Link to='/javascript'><Button px='w-full' text="text-white text-2xl hover:bg-orange-700" title='view course' /></Link> 
        </div>
        </div>
        {/* react */}
        <div className='w-[400px] h-[430px] bg-white/5  shadow-[#065084] rounded-lg shadow-lg p- m-4 t-20'>
            <img className='w-full h-52' src='https://i.pinimg.com/1200x/9b/4e/e0/9b4ee057076232fb57c48cf80947f8a7.jpg' alt="" />
            <div className="flex text-blac justify-between px-8 pt-6">
                <h1 className='text-3xl font-semibold pb-6 '>React</h1>
                <Button text='px-4 text-2xl'  title='Free' />
            </div>
            <p className='ml-3 mt-2 text'>Learn React and build modern, interactive web apps. Master components, props, state, and hooks through real-world projects.</p>

        <div className="ml-2  mt-2">
        <Link to='/react'><Button px='w-full' text="text-white text-2xl hover:bg-orange-700" title='view course' /></Link> 
        </div>
        </div>

        {/* github */}        
        <div className='w-[400px] h-[430px] bg-white/5  shadow-[#065084] rounded-lg shadow-lg p- m-4 t-20'>
            <img className='w-full h-52' src="https://i.pinimg.com/736x/07/6c/a4/076ca4ab40fb5f03c83021bdea86443d.jpg" alt="" />
            <div className="flex text-blac justify-between px-8 pt-6">
                <h1 className='text-3xl font-semibold pb-6 '>Git & GitHub</h1>
                <Button text='px-4 text-2xl'  title='Free' />
            </div>
            <p className='ml-3 mt-2 text'>Build with HTML. Shine with CSS. Together, they turn raw content into fast, responsive, and beautiful web pages.</p>

        <div className="ml-2  mt-2">
        <Link to='/github'><Button px='w-full' text="text-white text-2xl hover:bg-orange-700" title='view course' /></Link> 
        </div>
        </div>
        {/* python */}
        <div className='w-[400px] h-[430px] bg-white/5  shadow-[#065084] rounded-lg shadow-lg p- m-4 t-20'>
            <img className='w-full h-52' src="https://i.pinimg.com/1200x/ed/66/63/ed666327dd3ce274d94f2b3547155891.jpg" alt="" />
            <div className="flex text-blac justify-between px-8 pt-6">
                <h1 className='text-3xl font-semibold pb-6 '>Python</h1>
                <Button text='px-4 text-2xl'  title='Free' />
            </div>
            <p className='ml-3 mt-2 text'>Learn Python from scratch—simple, powerful, and perfect for beginners. Build apps, automate tasks, and analyze data.</p>

        <div className="ml-2  mt-2">
        <Link to='/python'><Button px='w-full' text="text-white text-2xl hover:bg-orange-700" title='view course' /></Link> 
        </div>
        </div>
        

        </div>

    </div>
    
}

export default Card;