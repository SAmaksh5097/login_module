import React, { useState } from 'react'
import axios from 'axios'
import { Link, Route, Routes } from 'react-router-dom'
const SignIn = () => {
    const [uname, setUserName] = useState("")
    const [psd, setPassword] = useState("")

    const handleUserchange = (e)=>{
        setUserName(e.target.value)
        
    }
    const handlepsdchange = (e)=>{
        setPassword(e.target.value)
        
    }
    const handlesubmit = async (e)=>{
        e.preventDefault()

        if(uname!=="" && psd!==""){
            try{
                const response2 = await axios.post('http://localhost:3005/login',{
                    username: uname,
                    password: psd
                })
                alert(response2.data.msg)
            } catch(error){
                if(error.response){
                    alert(error.response.data.msg)
                }
                else{
                    alert("Server not responding")
                }
            }
        }
        else{
            alert("Empty fields")
        }
        setUserName("")
        setPassword("")

        
    }

  return (
    <div className='w-full  h-full flex flex-col items-center justify-center'>
        <div className=' w-fit p-4 flex flex-col gap-4 bg-neutral-300 text-black font-bold rounded-md shadow-md shadow-gray-100'>
            <h1 >Please enter your details</h1>
            <h1 className='text-2xl'>Welcome back</h1>

                <form action='/login' method='POST' onSubmit={handlesubmit}>
                <div className='flex flex-col gap-3 w-full items-center font-medium'>
                    <input type="text" placeholder='Enter your username' name='username' value={uname} onChange={handleUserchange} className='border p-2 w-full rounded-md outline-amber-950 ' />
                    <input type="password" placeholder='Enter password' name='password' onChange={handlepsdchange} value={psd}  className='border p-2 w-full rounded-md outline-amber-950'/>
                    <button type='submit' className='border p-2 w-fit rounded-md bg-gray-400 hover:bg-amber-700 transition-all ease-in-out cursor-pointer'>Login</button>
                </div>
                </form>
                <Link to="/login/update" className='text-sm hover:underline font-extralight'>Change password?</Link>
                <Link to="/login/delete" className='text-sm hover:underline font-extralight' >Delete an existing user?</Link>
        </div>
    </div>
  )
}

export default SignIn
