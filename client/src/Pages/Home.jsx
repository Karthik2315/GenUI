import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';

const Home = () => {
  const navigate = useNavigate();
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
    </>
  )
}

export default Home
