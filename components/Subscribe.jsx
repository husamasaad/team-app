'use client'

import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';


const Subscribe = () => {

  const [emailValue, setEmailValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    if (emailValue) {
      toast.success('Subscribed Succesfully')
      setEmailValue('')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        className="border-none outline-none p-3 min-w-[280px] bg-[rgba(245,245,245,0.24)] text-slate-200" 
        placeholder='Email:' 
        type="email" 
        value={emailValue}
        onChange={(e) => setEmailValue(e.target.value)}
        onSubmit={handleSubmit}
        />

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

export default Subscribe