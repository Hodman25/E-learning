import React from 'react';

function Html() {
    return <>

      <div className=' mt-32 sm:mt-24 text-center'>
        <h1 className='text-4xl font-semibold'>HTML Projectes</h1>
        <p className='mt-3'>Practice and improve your HTML skills with simple, real projects.</p>

      </div>
        <div className='sm:flex gap-8 ml-14 sm:ml-28 mt-4'>
              <div className=" w-[290px] h-[390px] bg-white/5 shadow-lg shadow-white/10">
     <iframe className="w-[290px] h-[250PX] objrct-cover"  src="https://www.youtube.com/embed/T5PD8ofhiug?si=jqBBRock8TJ3cV2z" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <h1 className='text-2xl text-center'>Build with HTML</h1>
      <p className='text-center mt-3'>Build creative and responsive<br></br> websites using the power of HTML</p>
      <button className='bg-yellow-500 px-4 mt-3  font-semibold rounded-lg ml-14 py-1 text-black'>Watch for free</button>

            </div>
            {/* V2 */}
                    <div className=" w-[290px] h-[390px] bg-white/5 shadow-lg shadow-white/10">
     <iframe className="w-[290px] h-[250PX] objrct-cover"  src="https://www.youtube.com/embed/06SOVYKeMuY?si=ey4W4itGNyw20Pyv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
               <h1 className='text-2xl text-center'>Build with HTML</h1>
      <p className='text-center mt-3'>Build creative and responsive<br></br> websites using the power of HTML</p>
      <button className='bg-yellow-500 px-4 mt-3  font-semibold rounded-lg ml-14 py-1 text-black'>Watch for free</button>
            </div>
            {/* V3 */}
                    <div className=" w-[290px] h-[390px] bg-white/5 shadow-lg shadow-white/10">
     <iframe className="w-[290px] h-[250PX] objrct-cover"  src="https://www.youtube.com/embed/b9k_Q4T8wEo?si=ONCBR0OeHQnKWZLY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <h1 className='text-2xl text-center'>Build with HTML</h1>
      <p className='text-center mt-3'>Build creative and responsive<br></br> websites using the power of HTML</p>
      <button className='bg-yellow-500 px-4 mt-3  font-semibold rounded-lg ml-14 py-1 text-black'>Watch for free</button>
            </div>
        </div>
        </>
    
}

export default Html;