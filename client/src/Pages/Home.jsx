import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Left from '../Components/Left';
import Right from '../Components/Right';
import Editor from '@monaco-editor/react';


const Home = () => {
  const navigate = useNavigate();
  const [outputScreen,setOutputScreen] = useState(true);
  useEffect(()=>{
    const cookies = document.cookie;
    if(cookies.includes("token="))
    {
      navigate('/login');
    }
  },[]);

  return (
    <>
      <Navbar />
      <div className='flex justify-between items-center px-[80px] gap-[60px] bg-gradient-to-r from-[#0F2027] via-[#203A43] to-[#2C5364] overflow-y-auto'>
        <Left />
        <Right outputScreen={outputScreen} />
      </div>
    </>
  )
}

export default Home
