import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../Firebase/Firebase.js';

const Login = () => {
  const navigate = useNavigate();
  const [loginEmail,setLoginEmail] =useState("");
  const [loginpass,setLoginPass] =useState("");

  const logInpassemail = async (e)=>{
    e.preventDefault();
    try{
      const user = await signInWithEmailAndPassword(auth,loginEmail,loginpass)
      console.log(auth.currentUser.email);
      navigate('/')
    }catch(error){
      console.error(error.message);
      
      
    }

   }

  return (
    <div className='flex justify-center items-center h-screen bg-blue-200'>
      <form className='bg-blue-400 p-16 rounded shadow-md ' onSubmit={logInpassemail}>
        <h2 className='flex items-center justify-center text-normal '>Login</h2>
        <div className='mb-2'>
          <label className='block mb-1 ' htmlFor='email'>
            Email:
          </label>
          <input type="email" className='border border-gray-300 p-2 h-full' onChange={(e)=>{
            {setLoginEmail(e.target.value)}
          }}/>
        </div>
        <div className='mb-4'>
          <label className='block mb-1' htmlFor='password'>
            Password:

          </label>
          <input type="password" id='password' className='border border-gray-300 p-2 h-full'onChange={(e)=>{
            {setLoginPass(e.target.value)}
          }} />


        </div>
        <div className='flex  flex-col justify-center items-center gap-2'>
        <button type='submit' className='bg-[#023047] text-white py-2 px-3 rounded-sm text-center cursor-pointer transition-transform duration-300 hover:bg-blue-500 hover:scale-105' >Log In</button>
        <button className='bg-[#023047] text-white py-2 px-3 rounded-sm text-center cursor-pointer transition-transform duration-300 hover:bg-blue-500 hover:scale-105' onClick={()=>navigate('/register')}>Register</button>
        <hr className='w-full text-white' />
        <button  className=''>Google</button>

        </div>

      </form>
    </div>
  )
}

export default Login