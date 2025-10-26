import React from 'react'
import { Code } from 'lucide-react'
const Right = () => {
  return (
    <div className='w-full bg-gradient-to-r from-[#203A43] to-[#0F2027] h-[80vh] mt-10 rounded-md mb-10 hover:shadow-lg transition-all duration-300'>
      <div className='w-full h-full flex flex-col items-center justify-center' >
        <div className='w-[70px] h-[70px] rounded-[50%] bg-gradient-to-r from-[#F7F8F8] to-[#ACBB78] flex items-center justify-center'><Code className='size-8 text-brown-500'/></div>
        <p className='text-[15px] mt-2 bg-gradient-to-r from-[#F7F8F8] to-[#ACBB78] bg-clip-text text-transparent'>Your component and code will appear here</p>
      </div>
    </div>
  )
}

export default Right
