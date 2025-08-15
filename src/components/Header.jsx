import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return <>
        <div className='flex justify-between px-20 py-5 bg-white/5 backdrop-blur-sm fixed top-0 left-0 right-0 z-10 text-white'>
            <h1 className='text-4xl font-serif font-semibold '>Skill<span className='text-[#C30E59] '>Hub</span></h1>
            <ul className='flex gap-10  text-2xl  '>
                <Link to='/'><li>Home</li></Link>
                <Link to='/courses'><li>Courses</li></Link>
                <Link to='/project'><li>Project</li></Link>
            </ul>
            <button className='bg-[#C30E59] text-white text-2xl px-6 py-2 rounded-2xl mt-2'>Log In</button>
        </div>
    </>
}

export default Header;