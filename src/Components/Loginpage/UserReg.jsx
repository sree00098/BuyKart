import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from '../../Firebase/Firebase.js';
const UserReg = () => {


    const navigate =useNavigate();
    const [regEmail,setRegEmail] =useState("");
    const [regPass,setRegPass] = useState("");
    const register = async (e)=>{
      e.preventDefault();
      try{
        const user = await createUserWithEmailAndPassword(auth,regEmail,regPass)
        console.log("User registered:", user);
      }catch(error){
        console.error(error.message);
        
        
      }
  
     }

  return (
    <div className='flex justify-center items-center h-screen bg-blue-200'>
      <form className='bg-blue-400 p-[200px] rounded shadow-md ' onSubmit={register}>
        <h2 className='flex items-center justify-center text-normal '>Login Form</h2>
        <div className='mb-2'>
          <label className='block mb-1 ' htmlFor='email'>
            Email:
          </label>
          <input type="email" className='border border-gray-300 p-2 h-full' onChange={(e)=>{
            {setRegEmail(e.target.value)}
          }} />
        </div>
        {/* <div className='mb-2'>
          <label className='block mb-1 ' htmlFor='email'>
            Username:
          </label>
          <input type="Username" className='border border-gray-300 p-2 h-full' />
        </div> */}
        <div className='mb-2'>
          <label className='block mb-1' htmlFor='password'>
            Password:

          </label>
          <input type="password" id='password' className='border border-gray-300 p-2 h-full' onChange={(e)=>{
            {setRegPass(e.target.value)}
          }} />



        </div>
        {/* <div className='mb-2'>
          <label className='block mb-1' htmlFor='password'>
        Confirm Password:

          </label>
          <input type="password" id='password' className='border border-gray-300 p-2 h-full' />



        </div> */}
        
        <div className='flex justify-center items-center '>
        <button type='submit' className='bg-[#023047] text-white py-2 px-3 rounded-sm text-center cursor-pointer transition-transform duration-300 hover:bg-blue-500 hover:scale-105'>Register</button>

        </div>

      </form>
    </div>
  )
}

export default UserReg