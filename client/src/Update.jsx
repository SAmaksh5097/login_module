import React from 'react'
import { useState } from 'react'
import {Eye, EyeOff} from 'lucide-react'
import axios from 'axios'
const Update = () => {
    const [psdvisible, setpsdvisible] = useState(false)
    const [cfmvisible, setcfmvisible] = useState(false)
    const togglepsd = ()=>{
        setpsdvisible(psdvisible?false:true)
    }
    const togglecfm = ()=>{
        setcfmvisible(cfmvisible?false:true)
    }

    const [username, setUsername] = useState("")
    const [oldpsd, setOldpsd] = useState("")
    const [newpsd, setNewpsd] = useState("")
    const [cnfpsd, setCnfpsd] = useState("")
    const [name, setName] = useState("")

const handlesubmit = async (e)=>{
    e.preventDefault();
    if(name!=="" && username!=="" && oldpsd!=="" && newpsd!==""){
        try{
            const response = await axios.patch('http://localhost:3005/login',{username:username, password:oldpsd, newpassword: newpsd, name:name})
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
        alert("Empty")
    }
    setUsername("")
    setOldpsd("")
    setNewpsd("")
    setCnfpsd("")
    setName("")
    
}    
  return (
    <div className=' w-fit p-4 flex flex-col gap-4 bg-neutral-300 text-black font-bold rounded-md shadow-md shadow-gray-100 '>
        <h1>Update your Password</h1>

        <form action="/login" method='PATCH' onSubmit={handlesubmit}>
        <div className='flex flex-col gap-3 items-center font-medium'>
            <input type="text" required placeholder='Enter your name' value={name} onChange={(e)=>{setName(e.target.value)}} className='border p-2 w-full rounded-md outline-amber-950 ' />
            <input type="text" required placeholder='Enter your username' value={username} onChange={(e)=>{setUsername(e.target.value)}} className='border p-2 w-full rounded-md outline-amber-950 ' />
            <div className='flex items-center gap-1'>
                <input type= {psdvisible?"text":"password"} required value={oldpsd} onChange={(e)=>{setOldpsd(e.target.value)}} placeholder='Enter old password' className='border p-2 w-full rounded-md outline-amber-950'/>
                <div onClick={togglepsd} className='w-4 cursor-pointer'>
                    {psdvisible?<EyeOff/>:<Eye/>}
                </div>
            </div>
            <div className='flex items-center gap-1'>
                <input  type= {cfmvisible?"text":"password"} required value={newpsd} onChange={(e)=>{setNewpsd(e.target.value)}} placeholder='Enter new password' className='border p-2 w-full rounded-md outline-amber-950 ' />
                <div onClick={togglecfm} className='w-4 cursor-pointer'>
                    {cfmvisible?<EyeOff/>:<Eye/>}
                </div>
            </div>
            <div className='flex flex-col w-full '>
                <input type="password" placeholder='Confirm new password' required value={cnfpsd} onChange={(e)=>{setCnfpsd(e.target.value)}} className='border p-2 w-full rounded-md outline-amber-950 ' />
                {newpsd===cnfpsd?"":<h1 className='text-xs text-red-600'>Password should be same</h1>}
            </div>
            <button type='submit' className='border p-2 w-fit rounded-md bg-gray-400 hover:bg-amber-700 transition-all ease-in-out cursor-pointer'>Submit</button>
        </div>
        
        
        </form>

      
    </div>
  )
}

export default Update
