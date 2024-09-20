'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Stack, Alert } from '@mui/material'

function Page() {
  const [email, setEmail] = useState('mohammadjudaki@gmail.com')
  const [password, setPassword] = useState('m13681367J')
  const [errorMessage, setErrorMessage] = useState('')
  const router = useRouter()

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch('https://66b9d7affa763ff550f9c4ee.mockapi.io/user', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const users = await response.json();

    const userExists = users.some(user => user.email === email && user.password === password);

    if (userExists) {
      router.push('/Dashboard')
      setErrorMessage('') 
    } else {
      setErrorMessage('Invalid email or password')
    }
  };


  return ( 
    <>
    <div className="flex items-center justify-center h-screen bg-gray-100"> 
      <div className="bg-white p-8 rounded-lg shadow-lg w-[450px]"> 
      <div className='w-96 h-12 mx-auto'>
                {errorMessage && (
          <Stack sx={{ width: '100%'}} spacing={10}>
            <Alert severity="error">{errorMessage}</Alert>
          </Stack>
        )}
        </div> 
        <h2 className="text-2xl mt-5 font-bold text-center text-gray-700">Login to Admin Panel</h2>  
        <form className="mt-6" onSubmit={handleSubmit}> 
          <div className="mb-4">  
            <label className="block text-gray-600" htmlFor="email">Email:</label> 
            <input 
              type="email" 
              id="email" 
              className="mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />  
          </div>  
          <div className="mb-4">  
            <label className="block text-gray-600" htmlFor="password">Password:</label> 
            <input 
              type="password" 
              id="password" 
              className="mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />  
          </div>  
          <button type="submit" className="w-full h-14 flex pt-3 items-center justify-center text-3xl mt-10 text-white bg-blue-500 rounded hover:bg-blue-600 transition duration-300">  
            Login  
          </button> 
          <a className='flex justify-center mt-5 underline font-bold text-blue-600 text-2xl' href="http://localhost:3000/Register">click for Register</a> 
        </form>  
      </div>  
    </div>  
    </>
  ); 
}

export default Page; 
