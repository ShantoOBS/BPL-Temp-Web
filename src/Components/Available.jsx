import React from 'react'

function Available() {
  return (
    <div className='max-w-[1150px] mx-auto flex justify-between my-6 font-bold' >

        <div>
            <p>Available Players</p>
        </div>
        <div className='text-[10px]'>
          <button class="cursor-pointer  rounded-l-2xl bg-[#E7FE29] px-7 py-2">Available</button>
           <button class="cursor-pointer rounded-r-2xl  px-7 py-2 ">Selected (0)</button>
        </div>      
    </div>
  )
}

export default Available
