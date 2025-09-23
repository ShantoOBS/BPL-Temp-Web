import React from 'react'

const Seletedcard=({ele,removePlayer}) =>{

    const handleRemove = () =>{
        removePlayer(
        ele
        )
    }

  return (
      
          <div class=" shadow-sm flex justify-between rounded-2xl p-5 items-center my-4 mb-10">
           
             <div className='flex gap-2 items-center'>
               <img
               className='w-10 h-10 rounded-xl' src={ele.player_image} alt="" />
                
                <div>
                   <p>{ele.player_name}</p>
                   <p>{ele.playing_role}</p>
                </div>
             </div>

             <div onClick={handleRemove}>
               <i class="fa-solid fa-trash cursor-pointer"></i>
             </div>
      </div>

  )
}

export default Seletedcard
