import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return <>
        <div className='flex justify-between px-20 py-3  '>
            <h1 className='text-4xl font-serif font-semibold '>Skill<span className='text-[#C30E59] '>Hub</span></h1>
            <ul className='flex gap-10  text-2xl '>
                <Link to='/'><li>Home</li></Link>
                <Link to='/courses'><li>Courses</li></Link>
                <Link to='/project'><li>Project</li></Link>
            </ul>
        </div>
    </>
}

export default Header;