import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../Firebase/Firebase.js';
import welcome from "../../assets/login/Art.png"
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
    <div className='flex   items-center justify-center h-screen bg-[#3949ab]'>
      <div className='flex flex-col bg-[#3949ab] items-center'>
        <img src={welcome} alt="" />
        <p className='text-white'>Welcome To BuyKart</p>

      </div >
      <div className='bg-[#3949ab'>
    <form className=' mt-20 p-16 rounded  w-full max-w-sm ' onSubmit={logInpassemail}>
      
     
      <div className="flex justify-center mb-8">
        
      </div>
      
  
      <div className='mb-2'>
        <label className='block mb-1 text-white' htmlFor='email'>
          Email:
        </label>
        <input 
          type="email" 
          className='w-full p-2 border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500' 
          onChange={(e) => setLoginEmail(e.target.value)} 
        />
      </div>
  
      <div className='mb-4'>
        <label className='block mb-1 text-white' htmlFor='password'>
          Password:
        </label>
        <input 
          type="password" 
          id='password' 
          className='w-full p-2 border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500' 
          onChange={(e) => setLoginPass(e.target.value)} 
        />
      </div>
  
   
      <div className='flex flex-col justify-center items-center gap-4'>
        <button type='submit' className='w-full bg-white text-[#3949ab] py-2 px-4 rounded-full hover:bg-blue-500 hover:text-white transition-transform duration-300'>
          Log In
        </button>
  
        <button 
          type='button' 
          className='w-full bg-white text-[#3949ab] py-2 px-4 rounded-full hover:bg-blue-500 transition-transform duration-300' 
          onClick={() => navigate('/register')}
        >
          Register
        </button>
  
        <a href="#" className="text-white  hover:text-gray-300 mt-2">
          Forgot password?
        </a>
      </div>
    </form>
    </div>
  </div>
  )
}

export default Login