import React from 'react'
import {Link} from 'react-router-dom'
const Home = () => {
  return (
    <div>
        <h1>THIS IS HOMEPAGE</h1>
      <div className='flex gap-3'>
        <Link to="/login" >
          <button className='border rounded-md p-2 cursor-pointer'>Log In</button>
        </Link>
        <Link to="/signup">
          <button className='border rounded-md p-2 cursor-pointer'>Sign Up</button>
        </Link>
      </div>
    </div>
  )
}

export default Home
