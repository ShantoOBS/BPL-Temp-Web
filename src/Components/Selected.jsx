import React from 'react'
import Selectedcard from './Seletedcard'

const Selected=({purchasedPlayers,removePlayer,flag,setFlag}) =>{
  return (
    <div className='max-w-[1150px] mx-auto mb-8'>

      {
      purchasedPlayers.map(ele =><Selectedcard ele={ele} removePlayer={removePlayer}></Selectedcard>)
      }
      

  <button onClick={()=>{
            if(flag)setFlag(!flag);
          }}  class="btn btn-success bg-[#E7FE29] font-bold animate-border-change border-2 border-amber-100">Add More Player</button>
    </div>
  )
}

export default Selected
