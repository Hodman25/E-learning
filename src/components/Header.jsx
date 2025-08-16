import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {

    const [open, setOpen] = useState(false);

    const toggleBar = () => {
        setOpen(!open);
    }
    return <>
        <div className='flex justify-around w-full px-0 py-5 bg-white/5 backdrop-blur-sm fixed top-0 left-0 right-0 z-10 text-white overflow-hidden'>
            <h1 className='text-4xl font-serif font-semibold '>Skill<span className='text-[#C30E59] '>Hub</span></h1>
            <i onClick={toggleBar} className='fa-solid fa-bars sm:hidden text-3xl '></i>
            <div className="sm:flex items-center gap-10 hidden " >

            <ul className='sm:flex gap-10  text-2xl  '>
                <Link to='/'><li>Home</li></Link>
                <Link to='/courses'><li>Courses</li></Link>
                <Link to='/project'><li>Project</li></Link>
            </ul>
         <Link to='/login'><button className='bg-[#C30E59] hover:bg-[#b2064e] text-white text-2xl px-6 py-2 rounded-2xl mt-2  sm:block hidden'>LogIn</button></Link> 
            </div>

           </div>
           {/* mobile */}

               <div style={{display: open === true ? "block" : '' }} className=" items-center gap-0 mt-20 bg-violet-900/25 w-full h-[200px] text-center space-y-16  hidden " >

            <ul className='sm:flex gap-1  text-2xl space-y-4 '>
                <Link to='/'><li>Home</li></Link>
                <Link to='/courses'><li className='mt-3'>Courses</li></Link>
                <Link to='/project'><li className='mt-2'>Project</li></Link>
            </ul>
            <button className='bg-[#C30E59] hover:bg-[#b2064e]  text-white text-2xl px-6 py-2 rounded-2xl   sm:block '>Log In</button>
            </div>
           
        
    </>
}

export default Header;