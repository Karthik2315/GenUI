import React, { useState } from 'react'
import {User,Mail,Lock} from 'lucide-react'


const Login = () => {
  const [isLogin,setIsLogin] = useState(true);
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-white via-purple-400 to-violet-700'>
      <form className='flex flex-col items-center gap-1 bg-violet-300 px-10 py-10 rounded-md hover:scale-105 transition-all duration-300 hover:shadow-md'>
        <h2 className='text-3xl font-semibold text-purple-900'>{isLogin ? 'Login' : 'Sign Up'}</h2>
        <p className='text-sm text-purple-600 mb-4'>{isLogin ? 'Login here to enter' : "Register here to start"}</p>
        {!isLogin && 
        <div className='flex gap-2 mb-1 border rounded-2xl p-2 border-transparent hover:ring-2 hover:ring-violet-500'>
          <User className='size-5 text-purple-700' />
          <input type="text" placeholder='Enter Full Name' required className='outline-none placeholder:text-[15px] ' />
        </div> }
        <div className='flex gap-2 mb-1 border rounded-2xl p-2 border-transparent hover:ring-2 hover:ring-violet-500'>
          <Mail className='size-5 text-purple-700' />
          <input type="text" placeholder='Enter Email' required className='outline-none placeholder:text-[15px] '/>
        </div>
        <div className='flex gap-2 mb-1 border rounded-2xl p-2 border-transparent hover:ring-2 hover:ring-violet-500'>
          <Lock className='size-5 text-purple-700' />
          <input type="text" placeholder='Enter Password' required className='outline-none placeholder:text-[15px] '/>
        </div>
        {isLogin &&
        <div className='flex w-full mb-3' >
          <p className='text-purple-800 text-[14px] px-3 cursor-pointer'>Forgot Password?</p>
        </div> }
        <button className='rounded-2xl px-18 py-1 bg-purple-800 text-white cursor-pointer hover:scale-110 transition-all duration-300
        active:scale-95 mb-3'>{isLogin ? 'Login' : 'Sign Up'}</button>
        {isLogin ? (
          <p className='text-sm text-purple-800' onClick={() => setIsLogin(false)}>Don't have an account? <span className='cursor-pointer hover:text-white'>SignUp</span></p>
        ) : (
          <p className='text-sm text-purple-800' onClick={() => setIsLogin(true)}>Already have an account?  <span className='cursor-pointer hover:text-white'>Login</span></p>
          )}
      </form>
    </div>
  )
}

export default Login
