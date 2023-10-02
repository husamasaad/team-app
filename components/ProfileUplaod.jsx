import Image from 'next/image'
import React from 'react'

const ProfileUplaod = ({ handleImgChange,
  value }) => {
    let src

    if (value === '/profile.png') {
      src = value
    } else {
      src = URL.createObjectURL(value)
    }

  return (
    <div className='flex items-center space-x-6'>
    <div class="shrink-0">
      <Image width={16} height={16} class="h-16 w-16 object-cover rounded-full" src={src} alt="Current profile photo" />
    </div>
    <label htmlFor="">
    <span className="sr-only">Choose profile photo</span>
      <input 
        type='file'
        onChange={handleImgChange}
        className='block w-full text-sm text-slate-500
        file:mr-4 file:py-2 file:px-4
        file:rounded-full file:border-0
        file:text-sm file:font-semibold
        file:bg-violet-50 file:text-violet-700
        hover:file:bg-violet-100'
        required
      />
    </label>
    </div>
  )
}

export default ProfileUplaod