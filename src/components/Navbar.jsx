import React, { useState } from 'react'

export const Navbar = () => {
  const [mobileView, setMobileView] = useState(false)
  return (
    <div>
      <div className="flex justify-between items-center font-raleway max-w-[90vw] mx-auto relative z-20">
        <div className="">
          <img src="/logo.png" alt="Logo" className="w-32 h-12 md:w-[194px] md:h-[73px]" />
        </div>
        <div className={`flex md:flex-row md:opacity-100 md:static md:h-auto md:bg-transparent md:shadow-none md:backdrop-blur-none md:font-extrabold md:gap-20 text-lg bg-[rgba(255,255,255,0.02)] backdrop-blur-lg shadow-md font-bold items-center rounded-md flex-col gap-3 absolute top-14 right-0 transform w-full justify-center transition-all duration-300 ease-in-out overflow-hidden ${mobileView ? 'p-6 h-[40vh]' : 'h-0'}`}>
          <a href="#" className="text-yellow scale-up" onClick={() => setMobileView(!mobileView)}>Home</a>
          <a href="#about" className="scale-up" onClick={() => setMobileView(!mobileView)}>About Us</a>
          <a href="#" className="scale-up" onClick={() => setMobileView(!mobileView)}>Roadmap</a>
          <a href="#faq" className="scale-up" onClick={() => setMobileView(!mobileView)}>FAQs</a>
          <a href="#footer" className="scale-up" onClick={() => setMobileView(!mobileView)}>Contact Us</a>
        </div>
        <div className="md:w-48 rounded-full px-3 py-2 ml-5 md:px-6 md:py-3 gradient-yellow-white transition-all duration-300 hover:scale-110">
          <p className="text-black text-[0.7rem] md:text-sm font-extrabold">Connect Wallet</p>
        </div>
        <div onClick={() => setMobileView(!mobileView)} className='md:hidden ml-5 rounded-sm bg-[rgba(255,255,255,0.12)] shadow-md px-2 py-1'><img src="/menuIcon.svg" alt="" /></div>
      </div>
    </div>
  )
}
