import React from 'react';

function Testimonial(props) {
    return (
        <div className='mb-[0%] ml-0  '>

          <div className="w-[350px] h-[220px] bg-[#111671] mb-20 rounded-md shadow-md shadow-blue-800 p-5 hover:h-[240px] cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out hover:border-2 border-blue-600 hover:shadow-lg hover:shadow-blue-800">
             <div className="mb-3 flex gap-1 ">
                    <i className='fa-solid fa-star text-yellow-500 text-2xl'></i>
                    <i className='fa-solid fa-star text-yellow-500 text-2xl'></i>
                    <i className='fa-solid fa-star text-yellow-500 text-2xl'></i>
                    <i className='fa-solid fa-star text-yellow-500 text-2xl'></i>
                    <i className='fa-solid fa-star text-yellow-500 text-2xl'></i>
                    <i className='fa-solid fa-star text-yellow-500 text-2xl'></i>
                </div>
            <p className='text-white'>Lorem ipsum dolor, elit. Excepturi, et vitae Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis, aspernatur. </p>
            <div className="flex items-center gap-3 mt-2">
                <img className='w-20 h-20 rounded-full border-2 border-teal-500 ' src={props.image} alt="" />
                <h1 className='text-xl text-white '>{props.name}</h1>

                
    

            </div>
            </div>  
        </div>
    );
}

export default Testimonial;