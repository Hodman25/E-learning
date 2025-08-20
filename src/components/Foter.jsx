import React from 'react';
import { Link } from 'react-router-dom';


function Foter(props) {
    return (
        <div  className='w-full sm:h-80 h-[630px] bg-[#180239]'>
            <div className=" gap-10 grid sm:grid-cols-3 grid-cols-1 text-white pt-10">
                <div className=" ml-10 ">
             <Link to='/'>  <h1 className='text-4xl font-serif font-semibold  '>Skill<span className='text-[#C30E59] '>Hub</span></h1></Link> 
                <p className='text-white text-2xl mt-4'>Learn, Build, and Grow with Us</p>
                <p className='text-white text-xl mt-2'>Join our community of learners and start your journey today!</p>
                    
                </div>
                
                <div className="w-[550px] ml-16  ">
                    <h1 className='text-2xl font-semibold mb-4'>Quick Links</h1>
                    <ul className='text-xl'>
                        <Link to='/'><li className='mb-2'>Home</li></Link>
                        <Link to='/courses'><li className='mb-2'>Courses</li></Link>
                        <Link to='/project'><li className='mb-2'>Project</li></Link>
                        <Link to='/login'><li className='mb-2'>Log In</li></Link>
                    </ul>
                </div>
                <div className="sm:ml-0 ml-10">
                    <h1 className='text-2xl font-semibold mb-4'>Contact Us</h1>
                    <p className='text-xl'>Email: SkillHub@gmail.com </p>
                    <p className='text-xl'>Phone:  252345123 </p>
                    </div>


            </div>
            <div className="  text-white text-center pt-5">
                <hr className='text-gray-900 pb-4 mx-10 ' />
                <p className='text-xl text-gray-400 '>© 2023 SkillHub. All rights reserved.</p>
                </div>

        </div>
    );
}

export default Foter;