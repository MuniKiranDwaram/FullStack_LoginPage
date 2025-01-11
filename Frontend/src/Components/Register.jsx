import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { register } from '../../api';

const Register = () => {
  const [email,setEmail] = useState("");
  const[name,setName] = useState("");
  const[password,setPassword] = useState("");
  const[gender,setGender] = useState("");
  const handleSubmit = async (e) =>
  {
    e.preventDefault();
    console.log("submitted details")
    try
    {
        await register({name,email,password,gender});
        setEmail("");
        setPassword("");
        setName("");
        setGender("");
    }
    catch(err)
    {
        console.log(err);
    }
  }
  return (
    <div className='flex flex-col align-middle items-center justify-center h-[100vh]'>
    <h1 className='text-[25px] mb-5'>Register here</h1>
    <div className='border border-black flex items-center justify-center rounded-lg'>
        <form className='flex flex-col m-5' action="" onSubmit={handleSubmit}>
            <div className='flex flex-row'>
                <p className='self-center'>name : </p>
                <input value={name} onChange={(e)=>setName(e.target.value)} className='border border-black px-2 py-1 m-3' type="text" placeholder='name'/>
            </div>
            <div className='flex flex-row'>
                <p className='self-center'>email : </p>
                <input value={email} onChange={(e)=>setEmail(e.target.value)} className='border border-black px-2 py-1 m-3' type="email" placeholder='email'/>
            </div>
            <div className='flex flex-row'>
                <p className='self-center'>password : </p>
                <input onChange={(e)=>setPassword(e.target.value)} value={password} className='border border-black px-2 py-1 m-3' type="password" placeholder='password'/>
            </div>

            <div className='flex flex-row text-black w-full'>
            <select value={gender} onChange={(e)=>setGender(e.target.value)} className="w-full border border-black" name="gender" id="" value="Male">
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Can't Define">Can't Define</option>
            </select>
            </div>
            <input className='border bg-gray-300 px-4 mt-5 self-center rounded-md cursor-pointer h-10' type="submit" placeholder='Submit Details' id="" />
            <p className='text-[15px] mt-5'>Don't have an account? <Link className='text-[#b49816]' to="/login">Login here</Link></p>
        </form>
    </div>
</div>
  )
}

export default Register
