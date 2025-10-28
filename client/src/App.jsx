import React from 'react'
import {Routes ,Route} from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import NoPage from './Pages/NoPage'
import { Toaster } from 'react-hot-toast';


const App = () => {
  return (
    <>
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: "#F7F8F8",  // light gradient tone
            color: "#000",           // black text
            fontSize: "14px",        // bigger text
            borderRadius: "10px",
            padding: "12px 20px",
            fontWeight: 600,
          },
          success: {
            iconTheme: {
              primary: "#4ade80", // green
              secondary: "#fff",
            },
          },
          error: {
            iconTheme: {
              primary: "#ef4444", // red
              secondary: "#fff",
            },
          },
        }}
      />      
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<NoPage />} />
      </Routes> 
    </>
  )
}

export default App
