import React, { useRef, useState } from 'react'
import { Code, Copy, Download,RotateCcw,ExternalLink} from 'lucide-react'
import Editor from '@monaco-editor/react';
import toast from 'react-hot-toast';



const Right = ({outputScreen,code,setNewTab}) => {
  const [tab,setTab] = useState(1);
  const iframeRef = useRef(null);
  const copyCode = async (code) => {
    try {
      await navigator.clipboard.writeText(code);
      toast.success('Code copied to clipboard');
    } catch (err) {
      console.error('Failed to copy: ', err);
      toast.error("Failed to copy")
    }
  };
  const downloadFile = () => {
    const fileName = "GenUI-Code.html";
    const blob = new Blob([code], { type: 'text/plain' });
    let url = URL.createObjectURL(blob);
    const link = document.createElement('a');

    link.href = url;
    link.download = fileName;
    link.click();
    
    URL.revokeObjectURL(url);
    toast.success("Code downloaded successfully");
  }


  const refreshPreview = () => {
    if (iframeRef.current) {
      const iframe = iframeRef.current;
      const currentCode = iframe.srcdoc; // or from your state if dynamic
      iframe.srcdoc = ''; // clear temporarily
      setTimeout(() => {
        iframe.srcdoc = code; // reapply updated code
      }, 50);
    }
  };

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
        <button className='w-[200px] py-2 bg-white rounded-2xl bg-gradient-to-r from-[#F7F8F8] to-[#ACBB78] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer' onClick={()=>setTab(1)}>Code</button>
        <button className='w-[200px] py-2 bg-white rounded-2xl bg-gradient-to-r from-[#F7F8F8] to-[#ACBB78] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer' onClick={() => setTab(2)}>Preview</button>
      </div>
      <div className='flex justify-between text-center mb-2 items-center'>
      {tab === 1 ? (
        <>
        <p className='text-[18px] bg-gradient-to-r from-[#F7F8F8] to-[#ACBB78] bg-clip-text text-transparent'>Code Editor</p>
        <div className='flex gap-5'>
          <button className='flex justify-center gap-1 text-black items-center text-sm bg-gradient-to-r from-[#F7F8F8] to-[#ACBB78] rounded-2xl w-[90px] h-[30px] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer' onClick={() => copyCode(code)}><Copy className='size-4 '
            />Copy</button>
          <button className='flex gap-1 text-black items-center text-sm bg-gradient-to-r from-[#F7F8F8] to-[#ACBB78] rounded-2xl px-4 w-[90px] h-[30px] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer'  onClick={() => downloadFile()}><Download className='size-4' />Export</button>
        </div> </>) :(
          <>
        <p className='text-[18px] bg-gradient-to-r from-[#F7F8F8] to-[#ACBB78] bg-clip-text text-transparent'>Live Preview</p>
        <div className='flex gap-5'>
          <button className='flex justify-center gap-1 text-black items-center text-sm bg-gradient-to-r from-[#F7F8F8] to-[#ACBB78] rounded-2xl w-[150px] h-[30px] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer' onClick={() => setNewTab(true)}><ExternalLink className='size-4 ' />Open in New Tab</button>
          <button className='flex gap-1 text-black items-center text-sm bg-gradient-to-r from-[#F7F8F8] to-[#ACBB78] rounded-2xl px-4 w-[100px] h-[30px] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer' onClick={()=> refreshPreview()} ><RotateCcw className='size-4' />Refresh</button>
        </div>
          </>
        )
      }
      </div>
        {tab === 1 ? (
        <div style={{height:'450px'}} className='mt-5 flex p-2 bg-black rounded-2xl'>
          <Editor height="100%" theme="hc-black" defaultLanguage="html" defaultValue="// some comment" value={code} />
        </div> ) : (
          <div className='bg-white h-[450px] mt-5 rounded-2xl overflow-auto'>
            <iframe  srcDoc={code} className='w-full h-full text-black bg-white rounded-2xl'></iframe>
          </div>
        )
        }
      </div>
    )}
    </div>
  )
}

export default Right
