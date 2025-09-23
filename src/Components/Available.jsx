import React from 'react'

function Available({setFlag,flag,purchasedPlayers}) {
  return (
    <div className='max-w-[1150px] mx-auto flex justify-between my-6 font-bold ' >

        <div>
            <p>
                {
                    !flag?"Available Players":`Selected Player (${purchasedPlayers.length}/6)`
                }
            </p>
        </div>
        <div className='text-[13px]'>
          <button onClick={()=>{
            if(flag)setFlag(!flag);
          }} className={`cursor-pointer  rounded-l-2xl ${!flag? "bg-[#E7FE29]":""} px-7 py-2`}>Available</button>
           <button onClick={()=>{
            if(!flag)setFlag(!flag);
          }} className={`cursor-pointer  rounded-r-2xl ${flag?"bg-[#E7FE29]":""} px-7 py-2`}>Selected ({purchasedPlayers.length})</button>
        </div>      
    </div>
  )
}

export default Available
