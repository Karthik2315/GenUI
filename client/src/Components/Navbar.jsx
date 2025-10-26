import React from 'react'
import { Sun, User } from 'lucide-react'

const Navbar = () => {
  return (
    <div className='w-full flex justify-between items-center bg-gradient-to-r from-[#0F2027] via-[#203A43] to-[#2C5364] h-[90px] px-15'>
      <h1 className='font-bold bg-gradient-to-r from-[#a770ef] via-[#cf8bf3] to-[#fdb99b] bg-clip-text text-transparent text-[25px]'>GenUI</h1>
      <div className='flex gap-5'>
        <div className='flex border-2 group rounded-md border-white items-center px-2 py-2 cursor-pointer hover:scale-105 transition-all duration-300 active:scale-95'>
          <Sun className='size-5 text-white group-hover:scale-105 transition-all duration-300' />
        </div>
        <div className='flex border-2 group rounded-md border-white items-center px-2 py-2 cursor-pointer hover:scale-105 transition-all duration-300 active:scale-95'>
          <User className='size-5 text-white group-hover:scale-105 transition-all duration-300' />
        </div>
      </div>
    </div>
  )
}

export default Navbar
