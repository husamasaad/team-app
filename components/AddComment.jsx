import Image from 'next/image'
import React from 'react'

const AddComment = ({ img }) => {
  return (
    <div className='flex flex-col md:flex-row gap-4 w-full items-start'>
      <Image src={img} width={64} height={64} className='rounded-full' alt='hi'/>
      <textarea className='w-full h-72 resize-none   border border-primary rounded-md bg-transparent outline-none p-6 text-gray-400 text-xl leading-8 tracking-wider'></textarea>
      <button className='bg-[#5468e780] hover:bg-[#5468e7] text-primary font-bold py-3 px-8 text-lg transition-colors self-end'>
        Submit
      </button>
    </div>
  )
}

export default AddComment