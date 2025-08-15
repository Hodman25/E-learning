import React from 'react';
import YouTubevideo from '../components/YouTubevideo';
import { Link } from 'react-router-dom';

function Project() {
    return <>

       <div className='pt-20 text-center'>
        <h1 className='text-5xl font-semibold mt-4'>Projectes</h1>
        <p>Explore hands-on projects to apply your coding skills and grow your portfolio</p>
       </div>
       <div className='flex ml-32 gap-8 mt-8'>
        <div className='w-[290px] h-[370px] bg-white/5 shadow-lg shadow-white/10'>
         <img className='h-[200px] w-[290px] ' src="https://i.pinimg.com/736x/47/65/fb/4765fb94fa56e591815dba8c43d9c5fb.jpg" alt="" />
         <div className='flex gap-5 mt-2'>
         <h1 className='text-3xl font-semibold'>HTML</h1>
         <p className='text-yellow-400 ml-32 text-2xl'>Free</p>
         </div>
         <p className='mt-4'>Build and learn with real projects</p>
   <Link to='/projet/YouTeVideo'> <button className='text-xl font-semibold bg-yellow-500 px-5 py-2 rounded-lg mt-6 ml-6 text-black'>Access Lesson</button> </Link> 
        </div>
        {/* 2 */}
           <div className='w-[290px] h-[370px] bg-white/5 shadow-lg shadow-white/10'>
         <img className='h-[200px] w-[290px]' src="https://i.pinimg.com/736x/90/6a/82/906a822e1fbee2f353a12c0e68f5a3b9.jpg" alt="" />
         <div className='flex gap-5 mt-2'>
         <h1 className='text-3xl font-semibold'>CSS</h1>
         <p className='text-yellow-400 ml-32 text-2xl'>Free</p>
         </div>
         <p className='mt-4'>Build and learn with real projects</p>
         <button className='text-xl font-semibold bg-yellow-500 px-5 py-2 rounded-lg mt-6 ml-6 text-black'>Access Lesson</button>
        </div>
        {/* 3 */}
           <div className='w-[290px] h-[370px] bg-white/5 shadow-lg shadow-white/10'>
         <img className='h-[200px] w-[290px]' src="https://i.pinimg.com/1200x/d2/03/78/d20378b108f7fdcaca73cd125b2bf349.jpg" alt="" />
         <div className='flex gap-5 mt-2'>
         <h1 className='text-3xl font-semibold'>Javascript</h1>
         <p className='text-yellow-400 ml-20 text-2xl'>Free</p>
         </div>
         <p className='mt-4'>Build and learn with real projects</p>
         <button className='text-xl font-semibold bg-yellow-500 px-5 py-2 rounded-lg mt-6 ml-6 text-black'>Access Lesson</button>
        </div>
       </div>
        {/* sect2 */}
       <div className='flex mt-6 ml-32 gap-8'>
           <div className='w-[290px] h-[370px] bg-white/5 shadow-lg shadow-white/10'>
         <img className='h-[200px] w-[290px]' src="https://i.pinimg.com/736x/e0/ad/d5/e0add58005eb5130afedda3635639e4a.jpg" alt="" />
         <div className='flex gap-5 mt-2'>
         <h1 className='text-3xl font-semibold'>React</h1>
         <p className='text-yellow-400 ml-32 text-2xl'>Free</p>
         </div>
         <p>Build and learn with real projects</p>
         <button className='text-xl font-semibold bg-yellow-500 px-5 py-2 rounded-lg mt-6 ml-6 text-black'>Access Lesson</button>
        </div>
        {/* 2 */}
         <div className='w-[290px] h-[370px] bg-white/5 shadow-lg shadow-white/10'>
         <img className='h-[200px] w-[290px]' src="https://i.pinimg.com/736x/da/37/dd/da37dd867ed9de543117ef9b9bbac6b0.jpg" alt="" />
         <div className='flex gap-5 mt-2'>
         <h1 className='text-3xl font-semibold'> Git&GitHup</h1>
         <p className='text-yellow-400 ml-14 text-2xl'>Free</p>
         </div>
         <p>Build and learn with real projects</p>
         <button className='text-xl font-semibold bg-yellow-500 px-5 py-2 rounded-lg mt-6 ml-6 text-black'>Access Lesson</button>
        </div>
        {/* 3 */}

          <div className='w-[290px] h-[370px] bg-white/5 shadow-lg shadow-white/10'>
         <img className='h-[200px] w-[290px]' src="https://i.pinimg.com/736x/69/f5/15/69f515da436b8b97230df7515f60d12c.jpg" alt="" />
         <div className='flex gap-5 mt-2'>
         <h1 className='text-3xl font-semibold'>Python</h1>
         <p className='text-yellow-400 ml-28 text-2xl'>Free</p>
         </div>
         <p>Build and learn with real projects</p>
         <button className='text-xl font-semibold bg-yellow-500 px-5 py-2 rounded-lg mt-6 ml-6 text-black'>Access Lesson</button>
        </div>
       </div>
      
      </>
}

export default Project

