import React from 'react'

const Login = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <form className='bg-blue-400 p-16 rounded shadow-md '>
        <h2 className='flex items-center justify-center text-normal '>Login</h2>
        <div className='mb-2'>
          <label className='block mb-1 ' htmlFor='email'>
            Email:
          </label>
          <input type="email" className='border border-gray-300 p-2 h-full' />
        </div>
        <div className='mb-4'>
          <label className='block mb-1' htmlFor='password'>
            Password:

          </label>
          <input type="password" id='password' className='border border-gray-300 p-2 h-full' />


        </div>
        <div className='flex justify-center items-center '>
        <button className='bg-[#023047] text-white py-2 px-3 rounded-sm text-center cursor-pointer transition-transform duration-300 hover:bg-blue-500 hover:scale-105'>Log In</button>

        </div>

      </form>
    </div>
  )
}

export default Login