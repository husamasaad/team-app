import React from 'react'


const GetEarlyAcess = () => {
  return (
    <div className='flex justify-between max-w-xl gap-6 flex-col sm:flex-row mt-4'>
      <input name='email' type="email" className='flex-1 border-none outline-none p-3 min-w-[280px]' placeholder='Email:'/>
      <button type='button' className='bg-blue-500 hover:bg-blue-800 px-8 min-w-[280px] py-3 text-white text-lg font-semibold'>
        Get Early Access
      </button>
    </div>
  )
}

export default GetEarlyAcess