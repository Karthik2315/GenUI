import React from 'react'
import { Code, Copy, Download } from 'lucide-react'
import Editor from '@monaco-editor/react';


const Right = ({outputScreen}) => {
  return (
    <div className='w-full bg-gradient-to-r from-[#203A43] to-[#0F2027] h-[80vh] mt-10 rounded-md mb-10 hover:shadow-lg transition-all duration-300'>
    {!outputScreen ? (
      <div className='w-full h-full flex flex-col items-center justify-center' >
        <div className='w-[70px] h-[70px] rounded-[50%] bg-gradient-to-r from-[#F7F8F8] to-[#ACBB78] flex items-center justify-center'><Code className='size-8 text-brown-500'/></div>
        <p className='text-[15px] mt-2 bg-gradient-to-r from-[#F7F8F8] to-[#ACBB78] bg-clip-text text-transparent'>Your component & code will appear here</p>
      </div>
    ):(
      <div className='h-full w-full p-3'>

      <div className='flex items-center justify-center gap-5 mb-5'>
        <button className='w-[200px] py-2 bg-white rounded-2xl bg-gradient-to-r from-[#F7F8F8] to-[#ACBB78] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer'>Code</button>
        <button className='w-[200px] py-2 bg-white rounded-2xl bg-gradient-to-r from-[#F7F8F8] to-[#ACBB78] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer'>Preview</button>
      </div>
      <div className='flex justify-between mb-2 items-center'>
        <p className='text-[18px] bg-gradient-to-r from-[#F7F8F8] to-[#ACBB78] bg-clip-text text-transparent'>Code Editor</p>
        <div className='flex gap-5'>
          <button className='flex justify-center gap-1 text-black items-center text-sm bg-gradient-to-r from-[#F7F8F8] to-[#ACBB78] rounded-2xl w-[90px] h-[30px] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer'><Copy className='size-4 ' />Copy</button>
          <button className='flex gap-1 text-black items-center text-sm bg-gradient-to-r from-[#F7F8F8] to-[#ACBB78] rounded-2xl px-4 w-[90px] h-[30px] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer'  ><Download className='size-4' />Export</button>
        </div>
      </div>
        <div style={{height:'450px'}} className='mt-5 flex p-1 bg-black rounded-2xl'>
          <Editor height="100%" theme="hc-black" defaultLanguage="javascript" defaultValue="// some comment" />
        </div>
      </div>
    )}
    </div>
  )
}

export default Right
