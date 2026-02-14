import axios from 'axios'
import { Eye, EyeOff } from 'lucide-react'
import React from 'react'
import { useState } from 'react'

const Delete = () => {
    const [psdvisible, setpsdvisible] = useState(false)
    const togglepsd = ()=>{
        setpsdvisible(psdvisible?false:true)
    }
    const [user, setUser] = useState("")
    const [psd, setPsd] = useState("")
    const [name, setName] = useState("")

    const handlesubmit = async (e)=>{
        e.preventDefault();
        try{
            const response = await axios.delete('http://localhost:3005/login',{ data:{name:name, username:user, password:psd}})
            alert(response.data.msg)
        } catch(error){
            if(error.response){
                 alert(error.response.data.msg)
            }
            else{
                alert("Server not responding")
            }
        }
        setPsd("")
        setUser("")
        setName("")
        
    }



  return (
    <div className='w-fit p-4 flex flex-col gap-4 bg-neutral-300 text-black font-bold rounded-md shadow-md shadow-gray-100 '>
        <h1>Delete Existing User</h1>
        <form action='/login' method='DELETE' onSubmit={handlesubmit} >
            <div className='flex flex-col gap-3 w-full items-center font-medium'>
                <input type="text" placeholder='Enter name' name='name' value={name} onChange={(e)=>{setName(e.target.value)}} required className='border p-2 w-full rounded-md outline-amber-950 ' />
                <input type="text" placeholder='Enter username' name='username' value={user} onChange={(e)=>{setUser(e.target.value)}} required className='border p-2 w-full rounded-md outline-amber-950 ' />
                <div className='flex items-center gap-1'>
                <input type= {psdvisible?"text":"password"} required value={psd} onChange={(e)=>{setPsd(e.target.value)}} placeholder='Enter password' className='border p-2 w-full rounded-md outline-amber-950'/>
                <div onClick={togglepsd} className='w-4 cursor-pointer'>
                    {psdvisible?<EyeOff/>:<Eye/>}
                </div>
            </div>
                <button type='submit' className='border p-2 w-fit rounded-md bg-gray-400 hover:bg-green-600 transition-all ease-in-out cursor-pointer'>Delete user</button>

            </div>
            </form>
    </div>
  )
}

export default Delete
