import React from 'react';
import { Link } from 'react-router-dom';
import Testimonial from '../components/Testimonial';
import Card from '../components/courseCMPNT/card';

function Home() {
    return <>
    <div className="mb-32">

         <div className='w-full sm:h-[600px]  h-[900px] flex  sm:flex-row flex-col gap-6 items-center pt-14 justify-around pl-4overflow-hidden '>
        <div className='w-[500px] h-[400px] mt-20'>
            <h1 className='sm:text-6xl text-2xl font-bold mb-10 sm:ml-0 ml-16 '>Change Your <span className='text-[#C30E59]'>Life</span> Learn Coding</h1>
            <p className='text-2xl sm:ml-0 ml-16 sm:w-[550px] w-[400px] '>Through immersive online coding bootcam, SkillHub  teaches you the skills to thrive - now and the future.</p>
          <Link to='/courses'><button className="bg-[#C30E59] text-white text-2xl px-6 py-2 rounded-2xl mt-10 sm:ml-0 ml-16 ">Get Started</button></Link>
        </div>
        <div className=''>
            <img  className='w-[500px] h-[400px]'  src="https://i.pinimg.com/736x/98/b7/4b/98b74bd92cfaedb1a06fb51d87271e6b.jpg" alt="" />
        </div>
    </div>

        <div className="items-center justify-center mb-10">
        <h1 className='text-5xl font-semibold text-center mb-10'>Our Courses</h1>
        <p className='text-2xl sm:ml-[35%] mb-10 sm:w-[500px] ml-4 '>We offer a wide range of courses to help you learn and grow in your coding journey .</p>
    </div>
    <div className="w-full mt-10 grid sm:grid-cols-3 grid-cols-1 gap-6 sm:ml-0  ">
        <div className="w-[350px] h-[360px] rounded-xl bg-[#252854] sm:ml-10 ml-4 shadow-md shadow-blue-800  hover:h-[360px] cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out hover:border-2 border-blue-600 hover:shadow-lg hover:shadow-blue-800">
            <img className='w-full h-40  ' src="https://i.pinimg.com/736x/8b/50/6a/8b506a90c382e610556d51c957d3999f.jpg" alt="" />
            <h1 className='text-2xl text-white font-semibold mt-3 ml-4 '>Html & Css</h1>
            <p className='text-white mt-2 ml-4 '>Learn the fundamentals of web development with HTML and CSS. Build beautiful, responsive websites from scratch.</p>
                   <div className="mt-4">

                    <a className='text-white hover:text-blue-600 pt-8 sm:ml-32 ml-20 text-2xl  ' href="">Learn More <i className="fa-solid fa-arrow-right"></i> </a>

                   </div>
        </div>

        <div className="w-[350px] h-[380px] rounded-xl bg-[#252854] sm:ml-10 ml-4 shadow-md shadow-blue-800  hover:h-[390px] cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out hover:border-2 border-blue-600 hover:shadow-lg hover:shadow-blue-800">
            <img className='w-full h-40 ' src="https://i.pinimg.com/1200x/f3/0b/48/f30b482856ec9d2f52753459980dfc3f.jpg" alt="" />
            <h1 className='text-2xl text-white font-semibold mt-3 ml-4 '>Javascript</h1>
            <p className='text-white mt-2 ml-4 '>Dive into the world of JavaScript, the programming language of the web. Learn how to create dynamic and interactive web applications.</p>
                <div className="mt-4">
                <a className='text-white hover:text-blue-600 pt-8 sm:ml-32 ml-20 text-2xl  ' href="">Learn More <i className="fa-solid fa-arrow-right"></i> </a>

                </div>

    </div>

        <div className="w-[350px] h-[380px] rounded-xl bg-[#252854] sm:ml-10 ml-4 shadow-md shadow-blue-800  hover:h-[390px] cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out hover:border-2 border-blue-600 hover:shadow-lg hover:shadow-blue-800">
            <img className='w-full h-40 ' src="https://i.pinimg.com/1200x/9b/4e/e0/9b4ee057076232fb57c48cf80947f8a7.jpg" alt="" />
            <h1 className='text-2xl text-white font-semibold mt-3 ml-4 '>React</h1>
            <p className='text-white mt-2 ml-4 '>Master React, the popular JavaScript library for building user interfaces. Learn how to create reusable components and manage application state.</p>
            <div className="mt-4">
             <a className='text-white hover:text-blue-600 pt-8 sm:ml-32 ml-20 text-2xl  ' href="">Learn More <i className="fa-solid fa-arrow-right"></i> </a>

            </div>

            </div>

        <div className="w-[350px] h-[380px] rounded-xl bg-[#252854] sm:ml-10 ml-4 shadow-md shadow-blue-800  hover:h-[390px] cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out hover:border-2 border-blue-600 hover:shadow-lg hover:shadow-blue-800">
            <img className='w-full h-40 ' src="https://i.pinimg.com/736x/90/4c/d3/904cd34ec56f951830dff7319c98192e.jpg" alt="" />
            <h1 className='text-2xl text-white font-semibold mt-3 ml-4 '>Git & GitHub</h1>
            <p className='text-white mt-2 ml-4 '>Learn version control with Git and collaborate on projects using GitHub. Understand how to manage code changes and work with others effectively.</p>
                     <div className="mt-4">
                      <a className='text-white hover:text-blue-600  sm:ml-32 ml-20 text-2xl  ' href="">Learn More <i className="fa-solid fa-arrow-right"></i> </a>

                     </div>

            </div>

        <div className="w-[350px] h-[380px] rounded-xl bg-[#252854] sm:ml-10 ml-4 shadow-md shadow-blue-800  hover:h-[390px] cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out hover:border-2 border-blue-600 hover:shadow-lg hover:shadow-blue-800">
            <img className='w-full h-40 ' src="https://i.pinimg.com/736x/6d/16/a3/6d16a301e656ab223942728e9e293e8b.jpg" alt="" />
            <h1 className='text-2xl text-white font-semibold mt-3 ml-4 '>Python</h1>
            <p className='text-white mt-2 ml-4 '>Explore Python, a versatile programming language. Learn how to write clean, efficient code and build applications for various domains.</p>
                <div className="mt-4">
            <a className='text-white hover:text-blue-600 pt-8 sm:ml-32 ml-20 text-2xl  ' href="">Learn More <i className="fa-solid fa-arrow-right"></i> </a>

                    </div>
            </div>


    
    </div>

            <div className="text-center">
    <Link to='/courses'><button className="bg-[#C30E59] text-white text-2xl px-6 py-2 rounded-2xl  mt-20 text-center">Explore More</button></Link>
            </div>
        <div className='w-full  text-center mt-40'>
     <img  className='sm:w-[1000px] sm:h-[500px] sm:mx-0 mx-3 text-center mt-8 sm:ml-32 '  src="https://rock-the-prototype.com/wp-content/uploads/2023/01/Coden-im-Team-Warum-gemeinsam-programmieren-so-effektiv-ist_hochaufloesend_RTP.jpg" alt="" />
       </div>
        


    <div className='mt-20  sm:flex items-center justify-around mb-0 '>
        <div className='w-[650px]  '>
            <h2 className='sm:text-4xl text-3xl sm:ml-0 ml-3 font-semibold mb-4 '>Start <span className='text-orange-500 bg-[#F5BABB]   '>Your Journey</span> Today!</h2>
            <p className='mb-10 sm:w-  '>Learn More about <span>our admission</span> process & don't miss out.We listed all the starting dates. </p>
        </div>
        <div className="sm:mb-0 mb-10 sm:ml-0 ml-10 ">
           <Link to='/project' >  <button className="bg-[#C30E59] text-white text-2xl px-6 py-2    text-center">Learn More</button></Link>

    </div>
        </div>

    <div> 
            <h1 className='text-4xl font-semibold text-center mb-20'>What Our Students Say</h1>

    <div className="mb- grid sm:grid-cols-3 grid-cols-1 gap-6 sm:ml-10">

    <Testimonial name='Ahmed farah'  image='https://i.pinimg.com/736x/22/5f/4c/225f4c968155fcd81cc89182f673583b.jpg' />
    <Testimonial name='Guuleed aadan' image='https://i.pinimg.com/736x/6c/c5/19/6cc519f013abcf2ad6168a126ee877db.jpg' />
    <Testimonial name='Asma Maxamed' image='https://i.pinimg.com/736x/b2/7c/b1/b27cb15eeb1fd7839119541bab34070a.jpg' />
    </div>


    </div>
    </div>

    </>

}

export default Home;