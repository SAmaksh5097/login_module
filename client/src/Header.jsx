import React from 'react'
import Home from './Home'

const Header = () => {
  return (
    <div className='w-full items-s p-2 bg-neutral-100 text-black flex justify-between items-center'>
        <div className='flex gap-1 w-[33%]'>
            <img src="../" alt="logo" />
            <h1>WEBSITE TITLE</h1>
        </div>
        <div className='w-[33%]'>
            <ul className='flex justify-evenly '>
                <li>About Us</li>
                <li>Gallery</li>
                <li>Community</li>
            </ul>
        </div>
        <div className='w-[33%] '>
            <Home/>
        </div>
    </div>
  )
}

export default Header
