import React from 'react';

function Home() {
    return <>
    
         <div className='w-full h-[500px] flex  gap-6 items-center pt-14 justify-around pl-4'>
        <div className='w-[500px] h-[400px] mt-20'>
            <h1 className='text-3xl font-semibold'>Change Your <span className='text-[#C30E59]'>Life</span> Learn Coding</h1>
            <p className='text-2xl '>Through immersive online coding bootcam, SkillHub  teaches you the skills to thrive - now and the future.</p>
            <button className="bg-[#C30E59] text-white text-2xl px-6 py-2 rounded-2xl mt-2">Get Dtarted</button>
        </div>
        <div className='w-[500px] h-[300px] '>
            <img  className='w-[500px] rounded-2xl'  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXIWAMLZ_LDqn4ccY0DymxekWMuor578BrCg&s" alt="" />
        </div>
    </div>
        <div className='w-full text-center p-4 h-[800px] bg-gray-200 text-black mt-6'>
         <h1 className='text-3xl font-semibold text-center pt-5 text-[#C30E59] '>Courses</h1>
         <h2 className='text-3xl font-semibold pt-2'>A <span className='text-[#C30E59]'>Life-changing</span> Experience</h2>
         <p className='text-xl pt-4'>Durin our 27 coding bootcamp, learn the most in-demand skills will motivated students ,passionate teachers and a hands-on corriculum  <br />teaching you how to build softwere and solve proplems.</p>
         
    <div className='w-full h-[600px] py-6  flex items-center gap-6 ml-4 text-center'>
        <div className='w-[400px] h-[500px] bg-white  mt-40 text-center pt-12'>
            <i  className="fa-solid fa-book-open-reader text-4xl text-red-600 mr-20 mt-3 "></i>
            <h1 className='text-3xl font-semibold'>Html Css, Javascript & React</h1>
            <p className='text-xl pt-5'>  in just the first 6 weeks , you will go from knowing nothing  about these technologies to becoming a profession</p>
           <i className="fa-solid fa-plus text-2xl text-gray-400 mr-20  mt-6 pl-6  border-2 px-8 pt-8 py-4 text-center"></i>

        </div>
        <div className='w-[400px] h-[500px] bg-gradient-to-r from-[#090040] via-[#180239] to-[#210F37]   text-white  mt-40 text-center pt-12'>
            <i  className="fa-solid fa-radio text-4xl text-white mr-20 mt-3 "></i>
            <h1 className='text-3xl font-semibold pt-4'>React ,Js Tailwind,Git</h1>
            <p className='text-xl pt-5'>  React is the most popular frond-end framework, we will give you the knowledgable to build the applications with react</p>
           <i className="fa-solid fa-plus text-2xl text-gray-400 mr-20  mt-6 pl-6  border-2 px-8 py-4  pt-8text-center"></i>

        </div>
        <div className='w-[400px] h-[500px] bg-white  mt-40 text-center pt-12 mr-6'>
            <i  className="fa-solid fa-lightbulb text-4xl text-red-600 mr-20 mt-3 "></i>
            <h1 className=' pt-4 text-3xl font-semibold'>Node,Express & Prisma</h1>
            <p className='text-xl pt-5'>  At the end,  you will learn several backend technologies for API bulding and also for technical interviews </p>
           <i className="fa-solid fa-plus text-2xl text-gray-400 mr-20  mt-6 pl-6  border-2 pt-8 px-8 py-4 text-center"></i>

        </div>
    </div>
            
     <button className="bg-[#C30E59] text-white text-2xl px-6 py-2 rounded-2xl  mt-20 text-center">Explore More</button>
      </div>
        <div className='w-full  text-center mt-40'>
     <img  className='w-[1000px] h-[400px] text-center mt-8 ml-14 mr-8 '  src="https://rock-the-prototype.com/wp-content/uploads/2023/01/Coden-im-Team-Warum-gemeinsam-programmieren-so-effektiv-ist_hochaufloesend_RTP.jpg" alt="" />
       </div>
        


    <div className='w-full h-[400px]  text-black flex'>
        <div className=''>
            <h2>Start <span>Your Journey</span> Today!</h2>
            <p>Learn More about <span>our admission</span> process & don't miss out.We listed all the starting dates. </p>
        </div>
             <button className="bg-[#C30E59] text-white text-2xl px-6 py-2 rounded-2xl  mt-20 text-center">Learn More</button>

    </div>

    
    </>

}

export default Home;