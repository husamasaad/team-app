'use client'

import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'


const GetEarlyAcess = () => {

  const [emailValue, setEmailValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    if (emailValue) {
      toast.success('Welcome, We will contact you very soon...')
      setEmailValue('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className='flex justify-between max-w-xl gap-6 flex-col sm:flex-row mt-4'>
      <input required value={emailValue} onChange={(e) => setEmailValue(e.target.value)} name='email' type="email" className='flex-1 border-none outline-none p-3 min-w-[240px]' placeholder='Email:'/>
      <button onSubmit={handleSubmit} type='submit' className='bg-blue-500 hover:bg-blue-800 px-8 min-w-[240px] py-3 text-white text-lg font-semibold'>
        Get Early Access
      </button>
      <Toaster
          position="top-center"
          reverseOrder={false}
          gutter={8}
          containerClassName=""
          containerStyle={{}}
          toastOptions={{
              // Define default options
              className: '',
              duration: 5000,
              style: {
                background: '#363636',
                color: '#fff',
              },

              // Default options for specific types
              success: {
                duration: 3000,
                theme: {
                  primary: 'green',
                  secondary: 'black',
                },
              },
            }}
          />
    </form>
  )
}

export default GetEarlyAcess