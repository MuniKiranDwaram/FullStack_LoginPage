import React, { useState } from 'react'
import {login} from '../../api.js'
import { Link } from 'react-router-dom';

const Login = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const handleLogin = async (e) =>
    {
        e.preventDefault();
        try
        {
            await login({email,password});
            setEmail("");
            setPassword("");
        }
        catch(err)
        {
            console.log(err)
        }
    }
  return (
    <div className='flex align-middle items-center justify-center h-[100vh]'>
        <div className='size-[20rem] border border-black flex items-center justify-center rounded-lg'>
            <form className='flex flex-col' action="" onSubmit={handleLogin}>
                <p className='self-center'>Enter Your Email :</p>
                <input className='border border-black px-2 py-1 m-3' type="email" placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <p className='self-center'>Enter Your Password :</p>
                <input className='border border-black px-2 py-1 m-3' type='password' placeholder='enter password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <input className='border bg-gray-300 px-4 self-center rounded-md cursor-pointer h-10' type="submit" placeholder='Submit'/>
                <p className='text-[15px] mt-5'>Don't have an account? <Link className='text-[#b49816]' to="/register">Register here</Link></p>
            </form>
        </div>
    </div>
  )
}

export default Login