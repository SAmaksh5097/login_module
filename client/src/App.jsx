import React from 'react'
import SignIn from './SignIn'
import Create from './Create'
import Home from './Home'
import Update from './Update'
import { Route, Routes, Link } from 'react-router-dom'
import Delete from './Delete'
import './App.css'
import Header from './Header'
const App = () => {
  return (
    <div className='bg-black h-screen text-white w-full '>
        <Routes>
          <Route path='/' element={<Header/>}/>
          <Route path='/login' element={<SignIn/>}/>
          <Route path='/signup' element={<Create/>}/>
          <Route path='/login/update' element={<Update/>}/>
          <Route path='/login/delete' element={<Delete/>}/>
        </Routes>
    </div>
  )
}

export default App