import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Left from '../Components/Left';
import Right from '../Components/Right';
import Editor from '@monaco-editor/react';
import { X } from 'lucide-react';


const Home = () => {
  const navigate = useNavigate();
  const [outputScreen,setOutputScreen] = useState(false);
  const [code,setCode] = useState("");
  const [newTab,setNewTab] = useState(false);
  useEffect(()=>{
    const cookies = document.cookie;
    if(cookies.includes("token="))
    {
      navigate('/login');
    }
  },[]);

  const removePreview = async() => {
    setTimeout(() => {
      setNewTab(false);
    }, 1000);
  }

  return ( newTab ? (
    <>
      <div className='flex justify-between items-center bg-white w-full h-[10vh] px-10'>
        <h2 className='text-black font-semibold text-[20px]'>Preview</h2>
        <button className='p-2 bg-black text-white rounded-md hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer' onClick={() => removePreview()}><X className='size-5'/></button>
      </div>
      <div className='h-[90vh] bg-black flex justify-center items-center' >
        <iframe srcDoc={code}></iframe>
      </div>
    </>
  ) : (
    <>
      <Navbar />
      <div className='flex justify-between items-center px-[80px] gap-[60px] bg-gradient-to-r from-[#0F2027] via-[#203A43] to-[#2C5364] overflow-y-auto'>
        <Left setOutputScreen={setOutputScreen} setCode={setCode}/>
        <Right outputScreen={outputScreen} code={code} setNewTab={setNewTab}/>
      </div>
    </> )
  )
}

export default Home
