import React, { useState } from 'react'
import axios from 'axios'
const Create = () => {
    const [user, setUser] = useState("")
    const [name, setName] = useState("")
    const [psd, setPsd] = useState("")
    const handlesubmit = async (e)=>{
        e.preventDefault()
        if(user!=="" && psd!==""){
            try{
                const response = await axios.post('http://localhost:3005/login/create',{username:user, password:psd, name:name})
                console.log(response.data);
                alert(response.data.msg)
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
            alert("Fields empty...try again")
        }
        setUser("")
        setPsd("")
        setName("")
    }
  return (
    <div className='w-fit p-4 flex flex-col gap-4 bg-neutral-300 text-black font-bold rounded-md shadow-md shadow-gray-100 '>
        <h1>Create new user</h1>
        <h1 className='text-2xl'>Enter details</h1>
        <form action='/login/create' method='POST' onSubmit={handlesubmit}>
            <div className='flex flex-col gap-3 w-full items-center font-medium'>
                <input type="text" placeholder='Enter name' name='name' value={name} onChange={(e)=>setName(e.target.value)}  className='border p-2 w-full rounded-md outline-amber-950 ' />
                <input type="text" placeholder='Create username' name='username' value={user} onChange={(e)=>setUser(e.target.value)}  className='border p-2 w-full rounded-md outline-amber-950 ' />
                <input type="password" placeholder='Create Password' name='password' onChange={(e)=>{setPsd(e.target.value)}} value={psd}    className='border p-2 w-full rounded-md outline-amber-950'/>
                <button type='submit' className='border p-2 w-fit rounded-md bg-gray-400 hover:bg-green-600 transition-all ease-in-out cursor-pointer'>Create user</button>
            </div>
            </form>
    </div>
  )
}

export default Create