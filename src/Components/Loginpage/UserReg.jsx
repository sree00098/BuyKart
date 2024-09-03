import React from 'react'
import { useNavigate } from 'react-router-dom';
const UserReg = () => {
    const navigate =useNavigate();
  return (
    <div className='flex justify-center items-center h-screen bg-blue-200'>
      <form className='bg-blue-400 p-[200px] rounded shadow-md '>
        <h2 className='flex items-center justify-center text-normal '>Login Form</h2>
        <div className='mb-2'>
          <label className='block mb-1 ' htmlFor='email'>
            Email:
          </label>
          <input type="email" className='border border-gray-300 p-2 h-full' />
        </div>
        <div className='mb-2'>
          <label className='block mb-1 ' htmlFor='email'>
            Username:
          </label>
          <input type="Username" className='border border-gray-300 p-2 h-full' />
        </div>
        <div className='mb-2'>
          <label className='block mb-1' htmlFor='password'>
            Password:

          </label>
          <input type="password" id='password' className='border border-gray-300 p-2 h-full' />



        </div>
        <div className='mb-2'>
          <label className='block mb-1' htmlFor='password'>
        Confirm Password:

          </label>
          <input type="password" id='password' className='border border-gray-300 p-2 h-full' />



        </div>
        
        <div className='flex justify-center items-center '>
        <button className='bg-[#023047] text-white py-2 px-3 rounded-sm text-center cursor-pointer transition-transform duration-300 hover:bg-blue-500 hover:scale-105' onClick={()=>navigate('/log')}>Log In</button>

        </div>

      </form>
    </div>
  )
}

export default UserReg