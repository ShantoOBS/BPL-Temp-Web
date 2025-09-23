import React from 'react'
import { useState } from 'react';

const Cards=({ele,setCoinValue,coinValue,purchasedPlayers,setPurchasedPlayers}) =>{

    
        const [isSelected, setIsSelected] = useState(false);
  return (
       <div className=" shadow-sm p-4 rounded-2xl">

               <img src={ele.player_image} alt="" className='cover rounded-2xl' />

                <div className='font-semibold flex gap-2 items-center m-2'>
                     <i class="fa-solid fa-user"></i>
                      <p className='text-[20px]'>{ele.player_name}</p>
                </div>

                 <div className='flex justify-between items-center border-b-1 border-gray-400 pb-4'>
                    <div className='text-gray-400 flex gap-2 items-center'>
                         <i class="fa-solid fa-flag"></i>
                      <p className=''> {ele.player_country}</p>
                    </div>
                    <div>
                         <button>{ele.playing_role}</button>
                    </div>
                    
                 </div>

                 <div className='my-2 flex flex-col gap-2'>
                      <p className='font-bold'>Rating</p>
                     <div className='flex justify-between'>
                        <p className='font-bold'>Left-Hand-Bat</p>
                        <p className='text-gray-400'>{ele.bating_style}</p>
                     </div>
                     <div className='flex justify-between items-center'>
                         
                            <p className='font-bold'>Price: ${ele.price}</p>
                            <button onClick={()=>{

                                 const curr=parseInt(ele.price.split("USD").join("").split(",").join(""));
                                 if(curr<=coinValue){
                                    setCoinValue(coinValue-curr);
                                    const newarray=[...purchasedPlayers,ele];
                                    setPurchasedPlayers(newarray);
                                    setIsSelected(true);

                                 }
                                 else alert("Not enought coin");

                            }} className='btn ' disabled={isSelected} >  {isSelected === true ? "Selected" : "Choose player"}</button>
                     </div>
                 </div>


            </div>
   
  )
}

export default Cards
