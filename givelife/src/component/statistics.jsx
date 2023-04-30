import React from 'react'
import a from '../assets/landing/1.svg'
import b from '../assets/landing/2.svg'
import c from '../assets/landing/earth.svg'
import d from '../assets/landing/4.svg'

function Statistics() {
  return (

    <div className='container pt-10 pb-[150px] '>

      <h1 className='font-bold  text-gray-800 mt-2'>Our Fun Facts</h1>
      <h1 className='text-2xl font-bold '>WE Believe That We Can Save </h1>
      <h1 className='text-2xl font-bold '>More Lifes With You  </h1>
      <div className='grid sm:grid-cols-4 grid-cols-2  lg:gap-10 gap-2 md:gap-4 mt-10'>
        <div className=' bg-[#EDF7F5]  lg:p-10 md:p-5 p-2 flex-rows justify-center items-center hover:shadow-lg hover:cursor-pointer' >
          <img className='w-full text-center' src={a} alt='staticstics'></img>
          <div className='font-bold text-4xl w-full text-center mt-4'>4597+</div>
          <div className='w-full text-center'>people rised </div>
        </div>
        
        <div className=' bg-[#EDF7F5] lg:p-10 md:p-5 p-2 flex-rows justify-center items-center hover:shadow-lg hover:cursor-pointer' >
          <img className='w-full text-center' src={b} alt='staticstics'></img>
          <div className='font-bold text-4xl w-full text-center mt-4'>8945+</div>
          <div className='w-full text-center'>Volunteer </div>
        </div>
        
        <div className=' bg-[#EDF7F5]  lg:p-10 md:p-5 p-2 flex-rows justify-center items-center hover:shadow-lg hover:cursor-pointer ' >
          <img className='w-full text-center' src={c} alt='staticstics'></img>
          <div className='font-bold text-4xl w-full text-center mt-4'>10M+</div>
          <div className='w-full text-center'>Poor people saved  </div>
        </div>
        
        <div className=' bg-[#EDF7F5] lg:p-10 md:p-5 p-2 flex-rows justify-center items-center hover:shadow-lg hover:cursor-pointer' >
          <img className='w-full text-center' src={d} alt='staticstics'></img>
          <div className='font-bold text-4xl w-full text-center mt-4'>100+</div>
          <div className='w-full text-center'>Country member </div>
        </div>
      </div>

    </div>
  )
}

export default Statistics



