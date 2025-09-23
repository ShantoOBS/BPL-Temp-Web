import React from 'react'

import footerImg from '../assets/Frame 34.png'
export default function Footer() {
  return (

    <div className='bg-black text-white relative text-center mt-50 '>

           <div
            className="max-w-[1150px] mx-auto bg-cover text-center bg-center text-black rounded-3xl p-10 lg:absolute -top-30  left-50 right-50"
            style={{ backgroundImage: `url(${footerImg})` }}
            >
               <p className='font-bold text-3xl '>Subscribe to our Newsletter</p>
               <p className='my-2'>Get the latest updates and news right in your inbox!</p>
               <div class="join">
          <div>
            <label class="input validator join-item">
              <svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g
                  stroke-linejoin="round"
                  stroke-linecap="round"
                  stroke-width="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </g>
              </svg>
              <input type="email" placeholder="mail@site.com" required />
            </label>
            <div class="validator-hint hidden">Enter valid email address</div>
          </div>
          
        <button class="btn btn-success bg-[#E7FE29] font-bold animate-border-change border-2 border-amber-100">

          Subscribe</button>
        </div>

            </div> 

       <div className='flex  justify-around flex-col lg:flex-row gap-4 max-w-[1200px] mx-auto p-10 lg:py-50 text-start'>


        <div>
        <p>About Us</p>
        <p>We are a passionate team dedicated to providing <br /> the best services to our customers.</p>
      </div>
      <div>
        <p>Quick Links</p>
        <ul>
           <li>Home</li>
           <li>Services</li>
           <li>About</li>
           <li>Contact</li>
        </ul>
      </div>
      <div>
         
         <p>Subscribe</p>

         <p>Subscribe to our newsletter for the latest updates.</p>

        <div class="join">
          <div>
            <label class="input validator join-item">
              <svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g
                  stroke-linejoin="round"
                  stroke-linecap="round"
                  stroke-width="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </g>
              </svg>
              <input type="email" placeholder="mail@site.com" required />
            </label>
            <div class="validator-hint hidden">Enter valid email address</div>
          </div>
          
        <button class="btn btn-success bg-[#E7FE29] font-bold animate-border-change border-2 border-amber-100">

          Subscribe</button>
        </div>
      </div>


       </div>

      <p className=''>  @2024 Your Company All Rights Reserved. </p>

    </div>

  )
}
