import React from 'react'
import {Routes ,Route} from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import NoPage from './Pages/NoPage'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<NoPage />} />
      </Routes> 
    </>
  )
}

export default App
