import React from 'react'

function Card() {
    return (
        <div className='max-w-[1150px] mx-auto'>

            <div class="card bg-base-100 w-[300px] shadow-sm p-4">

               <img src="https://i.ibb.co.com/7t8B7H2d/images.jpg" alt="" className='cover rounded-2xl' />

                <div className='font-semibold flex gap-2 items-center m-2'>
                     <i class="fa-solid fa-user"></i>
                      <p className='text-[20px]'>Virat kulu</p>
                </div>

                 <div className='flex justify-between items-center border-b-1 border-gray-400 pb-4'>
                    <div className='text-gray-400 flex gap-2 items-center'>
                         <i class="fa-solid fa-flag"></i>
                      <p className=''> India</p>
                    </div>
                    <div>
                         <button>All-Rounder</button>
                    </div>
                    
                 </div>

                 <div className='my-2 flex flex-col gap-2'>
                      <p className='font-bold'>Rating</p>
                     <div className='flex justify-between'>
                        <p className='font-bold'>Left-Hand-Bat</p>
                        <p className='text-gray-400'>Left-Hand-Bat</p>
                     </div>
                     <div className='flex justify-between items-center'>
                         
                            <p className='font-bold'>Price: $1500000</p>
                            <button className='btn'>Choose Player</button>
                     </div>
                 </div>


            </div>

        </div>
    )
}

export default Card
