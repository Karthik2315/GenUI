import React, { useState } from 'react';
import { Sun, User } from 'lucide-react';
import toast from 'react-hot-toast';
import axios from 'axios';

const Navbar = () => {
  const [showLogout, setShowLogout] = useState(false);
  const baseURL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:4000';

  const logout = async () => {
    try {
      const { data } = await axios.post(`${baseURL}/api/user/logout`, {}, { withCredentials: true });
      if (data.success) {
        toast.success("Logged out Successfully");
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      }
    } catch (error) {
      const msg = error?.response?.data?.message || error.message || 'Failed to logout';
      toast.error(msg);
    }
  };

  // Show logout for 1s when clicking user icon
  const handleUserClick = () => {
    setShowLogout(true);
    setTimeout(() => setShowLogout(false), 3000); // hides after 1s
  };

  return (
    <div className='w-full flex justify-between items-center bg-gradient-to-r from-[#0F2027] via-[#203A43] to-[#2C5364] h-[90px] px-15 border border-gray-800'>
      <h1 className='font-bold bg-gradient-to-r from-[#a770ef] via-[#cf8bf3] to-[#fdb99b] bg-clip-text text-transparent text-[25px]'>
        GenUI
      </h1>

      <div className='flex items-center h-full gap-5'>
        {/* Theme Icon */}
        <div className='flex border-2 group rounded-md border-white items-center px-2 py-2 cursor-pointer hover:scale-105 transition-all duration-300 active:scale-95 hover:border-2'>
          <Sun className='size-5 text-white group-hover:scale-105 transition-all duration-300' />
        </div>

        {/* User + Logout */}
        <div className='relative'>
          {/* User Icon */}
          <div
            className='flex border-2 rounded-md border-white items-center px-2 py-2 cursor-pointer hover:scale-105 transition-all duration-300 active:scale-95'
            onClick={handleUserClick}
          >
            <User className='size-5 text-white' />
          </div>

          {/* Logout Button (visible for 1s) */}
          {showLogout && (
            <button
              className='absolute top-[110%] left-1/2 -translate-x-1/2 w-[100px] bg-white text-black px-3 py-1 rounded-md shadow-md hover:bg-gray-100 cursor-pointer hover:scale-105 transition-all duration-300 active:scale-95'
              onClick={logout}
            >
              Log out
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
