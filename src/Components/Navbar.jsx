import React from 'react'
import dollarImg from '../assets/dollar-1.png'
import logo from '../assets/logo.png'

function Navbar({coinValue}) {
  return (
   <div className="max-w-[1200px] mx-auto navbar bg-base-100 flex justify-between p-6 items-center">
   
           <div>
             <img src={logo} alt="" />
           </div>
           <div className="flex gap-4">
   
             {
               ["Home", "Fixture", "Teams", "Schedules"].map(ele => (
                 <button key={ele} className="mr-4 cursor-pointer">{ele}</button>
               ))
             }
   
             <button  className="btn"><span>{coinValue}</span> Coin <img src={dollarImg} alt="" /></button>
   
           </div>
   
         </div>
  )
}

export default Navbar
