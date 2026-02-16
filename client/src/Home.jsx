import React from 'react'
import {Link} from 'react-router-dom'
const Home = () => {
  return (
    <div>
      <div className='flex gap-5 justify-end'>
        <Link to="/login" >
          <button className='rounded-3xl p-2 cursor-pointer hover:bg-neutral-400'>Log In</button>
        </Link>
        <Link to="/signup">
          <button className='border rounded-3xl bg-black text-white p-2 cursor-pointer hover:bg-neutral-700'>Sign Up</button>
        </Link>
      </div>
    </div>
  )
}

export default Home
