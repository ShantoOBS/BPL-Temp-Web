import React from 'react'

import bannerImg from '../assets/bg-shadow.png'
import img from '../assets/banner-main.png'


function Banner() {
  return (
    <div
      className="max-w-[1150px] mx-auto bg-cover text-center bg-center bg-black rounded-3xl  "
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <div className='py-10'>


        <div className='flex justify-center items-center'>
          <img src={img} alt="" className='text-center' />
        </div>


        <h1 className='text-white font-extrabold text-4xl my-2'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
        <p className='text-gray-400 mb-2'>
          Beyond Boundaries Beyond Limits
        </p>


        <button class="btn btn-success bg-[#E7FE29] font-bold animate-border-change border-2 border-amber-100">

          Claim Free Credit</button>


      </div>



    </div>
  )
}

export default Banner
