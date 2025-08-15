import React from 'react';

function Iframe(props) {
    return (
        <div>
               <div className=' pl-10 mt-20 '>
        <div className="">
            <h1 className='text-5xl font-semibold text-center mb-10  '>Html iframes</h1>

        <iframe className='sm:w-[850px] w-80 h-60   sm:h-[450px] sm:ml-16 mb-20  ' src="https://www.youtube.com/embed/qP23O70ve7k?si=Z-NRV3-Uu9aAInGU&amp;start=32" frameborder="0"
        allow='autoplay' ></iframe>

        </div>

        </div>
        </div>
    );
}

export default Iframe;